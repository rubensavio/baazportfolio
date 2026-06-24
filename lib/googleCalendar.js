import { google } from "googleapis";
import { getGoogleCalendarConfig } from "./googleCalendarConfig.js";
import { BOOK_CALL } from "./bookCallData.js";
import { isBusinessEmail } from "./emailValidation.js";

const SLOT_MINUTES = 30;
const WORK_START_HOUR = 6;
const WORK_END_HOUR = 18;
const IST_OFFSET = "+05:30";

function getCalendarClient() {
  const { serviceAccountEmail, privateKey, impersonateEmail, isConfigured } =
    getGoogleCalendarConfig();
  if (!isConfigured) {
    throw new Error("Google Calendar is not configured. Check your environment variables.");
  }

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
    subject: impersonateEmail || undefined,
  });

  return google.calendar({ version: "v3", auth });
}

function getEffectiveCalendarId() {
  const { calendarId, impersonateEmail, usesDelegation } = getGoogleCalendarConfig();
  if (usesDelegation && impersonateEmail) {
    return calendarId || impersonateEmail;
  }
  return calendarId;
}

export function parseDateParam(dateStr) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return { year, month: month - 1, day, dateStr };
}

function istDateTime(dateStr, hour, minute) {
  return `${dateStr}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00${IST_OFFSET}`;
}

function buildCandidateSlots(dateStr) {
  const slots = [];
  for (let hour = WORK_START_HOUR; hour < WORK_END_HOUR; hour += 0.5) {
    const wholeHour = Math.floor(hour);
    const minutes = hour % 1 === 0.5 ? 30 : 0;
    const endHour = minutes === 30 ? wholeHour + 1 : wholeHour;
    const endMinutes = minutes === 30 ? 0 : 30;
    slots.push({
      startIso: istDateTime(dateStr, wholeHour, minutes),
      endIso: istDateTime(dateStr, endHour, endMinutes),
    });
  }
  return slots;
}

function overlapsBusy(startIso, endIso, busyBlocks) {
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();
  return busyBlocks.some((block) => {
    const busyStart = new Date(block.start).getTime();
    const busyEnd = new Date(block.end).getTime();
    return start < busyEnd && end > busyStart;
  });
}

function formatSlotLabel(startIso, use24h) {
  const formatter = new Intl.DateTimeFormat(use24h ? "en-GB" : "en-US", {
    timeZone: BOOK_CALL.timezone,
    hour: use24h ? "2-digit" : "numeric",
    minute: "2-digit",
    hour12: !use24h,
  });
  const label = formatter.format(new Date(startIso));
  return use24h ? label : label.replace(" ", "").toLowerCase();
}

export async function getAvailableSlots(dateStr, use24h = false) {
  const parsed = parseDateParam(dateStr);
  if (!parsed) throw new Error("Invalid date format. Use YYYY-MM-DD.");

  const calendarId = getEffectiveCalendarId();
  const calendar = getCalendarClient();

  const freeBusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: istDateTime(dateStr, 0, 0),
      timeMax: istDateTime(dateStr, 23, 59),
      timeZone: BOOK_CALL.timezone,
      items: [{ id: calendarId }],
    },
  });

  const busyBlocks = freeBusy.data.calendars?.[calendarId]?.busy || [];
  const now = Date.now();

  const slots = buildCandidateSlots(dateStr)
    .filter((slot) => new Date(slot.startIso).getTime() > now)
    .filter((slot) => !overlapsBusy(slot.startIso, slot.endIso, busyBlocks))
    .map((slot) => ({
      label: formatSlotLabel(slot.startIso, use24h),
      startIso: slot.startIso,
      endIso: slot.endIso,
    }));

  return { date: dateStr, timeZone: BOOK_CALL.timezone, slots };
}

function buildEventBody({ startIso, endIso, name, email, message, usesDelegation }) {
  const descriptionLines = [
    BOOK_CALL.description,
    "",
    `Guest: ${name.trim()}`,
    `Email: ${email.trim()}`,
  ];
  if (message?.trim()) {
    descriptionLines.push("", "What this call is about:", message.trim());
  }
  const base = {
    summary: `${BOOK_CALL.title} - ${name.trim()}`,
    description: descriptionLines.join("\n"),
    start: {
      dateTime: startIso,
      timeZone: BOOK_CALL.timezone,
    },
    end: {
      dateTime: endIso,
      timeZone: BOOK_CALL.timezone,
    },
  };

  if (!usesDelegation) {
    return {
      ...base,
      location: "Google Meet",
    };
  }

  const requestId = `baaz-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  return {
    ...base,
    attendees: [{ email: email.trim(), displayName: name.trim() }],
    conferenceData: {
      createRequest: {
        requestId,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
  };
}

export async function createBooking({ date, startIso, name, email, message }) {
  const parsed = parseDateParam(date);
  if (!parsed) throw new Error("Invalid date format. Use YYYY-MM-DD.");
  if (!startIso) throw new Error("Start time is required.");
  if (!name?.trim()) throw new Error("Name is required.");
  if (!isBusinessEmail(email)) {
    throw new Error("A valid business email is required.");
  }

  const { usesDelegation } = getGoogleCalendarConfig();
  const calendarId = getEffectiveCalendarId();
  const calendar = getCalendarClient();
  const start = new Date(startIso);
  const endIso = new Date(start.getTime() + SLOT_MINUTES * 60 * 1000).toISOString();
  const requestBody = buildEventBody({
    startIso,
    endIso,
    name,
    email,
    message,
    usesDelegation,
  });

  const event = await calendar.events.insert({
    calendarId,
    conferenceDataVersion: usesDelegation ? 1 : 0,
    sendUpdates: usesDelegation ? "all" : "none",
    requestBody,
  });

  const meetLink =
    event.data.hangoutLink ||
    event.data.conferenceData?.entryPoints?.find((entry) => entry.entryPointType === "video")?.uri ||
    null;

  return {
    eventId: event.data.id,
    htmlLink: event.data.htmlLink,
    meetLink,
    inviteSent: usesDelegation,
    start: event.data.start?.dateTime,
    end: event.data.end?.dateTime,
  };
}

export { SLOT_MINUTES };
