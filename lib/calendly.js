import { BOOK_CALL } from "./bookCallData.js";

const CALENDLY_API = "https://api.calendly.com";
const SLOT_MINUTES = 30;

/**
 * Reads Calendly config from env.
 * - CALENDLY_TOKEN: Personal Access Token (Calendly → Integrations → API & Webhooks).
 * - CALENDLY_EVENT_TYPE_URI: optional, e.g. https://api.calendly.com/event_types/UUID.
 * - CALENDLY_EVENT_SLUG: optional, used to pick the right event type when no URI is set.
 */
export function getCalendlyConfig() {
  const token = process.env.CALENDLY_TOKEN?.trim();
  const eventTypeUri = process.env.CALENDLY_EVENT_TYPE_URI?.trim() || null;
  const eventSlug = process.env.CALENDLY_EVENT_SLUG?.trim() || null;
  return {
    token,
    eventTypeUri,
    eventSlug,
    isConfigured: Boolean(token && token !== "..."),
  };
}

async function calendlyFetch(path, token) {
  const res = await fetch(`${CALENDLY_API}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text();
    const err = new Error(`Calendly API ${res.status}: ${body}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

// A Calendly Personal Access Token is a JWT whose payload carries the user_uuid,
// so we can derive the user URI without calling /users/me (which needs users:read).
function decodeUserUuidFromToken(token) {
  try {
    const part = token.split(".")[1];
    if (!part) return null;
    const b64 = part.replace(/-/g, "+").replace(/_/g, "/");
    const pad = b64.length % 4 ? "=".repeat(4 - (b64.length % 4)) : "";
    const payload = JSON.parse(Buffer.from(b64 + pad, "base64").toString("utf8"));
    return payload?.user_uuid || null;
  } catch {
    return null;
  }
}

// A valid event type URI looks like https://api.calendly.com/event_types/UUID.
// A public scheduling link (https://calendly.com/...) is NOT valid for the API.
function isValidEventTypeUri(uri) {
  return (
    typeof uri === "string" &&
    /^https:\/\/api\.calendly\.com\/event_types\/[\w-]+$/.test(uri.trim())
  );
}

// Resolve (and cache) the event type URI. Prefer a valid explicit env URI; otherwise
// discover it from the token's account, matching CALENDLY_EVENT_SLUG when provided.
let cachedEventTypeUri = null;

async function resolveEventTypeUri(config) {
  if (isValidEventTypeUri(config.eventTypeUri)) return config.eventTypeUri.trim();
  if (cachedEventTypeUri) return cachedEventTypeUri;

  const userUuid = decodeUserUuidFromToken(config.token);
  if (!userUuid) {
    throw new Error(
      "Could not derive the Calendly user from the token. Set CALENDLY_EVENT_TYPE_URI.",
    );
  }
  const userUri = `https://api.calendly.com/users/${userUuid}`;

  const list = await calendlyFetch(
    `/event_types?user=${encodeURIComponent(userUri)}&active=true&count=100`,
    config.token,
  );
  const types = list?.collection || [];
  const match = config.eventSlug
    ? types.find((t) => t.slug === config.eventSlug)
    : types[0];

  if (!match) throw new Error("No active Calendly event type was found.");
  cachedEventTypeUri = match.uri;
  return cachedEventTypeUri;
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

/**
 * Returns the available slots for a single date, sourced from Calendly's
 * event_type_available_times (so the host's real Calendly availability applies).
 */
export async function getCalendlyAvailableSlots(dateStr, use24h = false) {
  const config = getCalendlyConfig();
  if (!config.isConfigured) throw new Error("Calendly is not configured.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    throw new Error("Invalid date format. Use YYYY-MM-DD.");
  }

  const eventTypeUri = await resolveEventTypeUri(config);

  // Build the requested day's window in the booking timezone, then to UTC ISO.
  const dayStart = new Date(`${dateStr}T00:00:00${BOOK_CALL.tzOffset || "+05:30"}`);
  const dayEnd = new Date(`${dateStr}T23:59:59${BOOK_CALL.tzOffset || "+05:30"}`);
  const now = Date.now();

  // Calendly requires start_time to be in the future; nudge 2 minutes ahead.
  const startMs = Math.max(dayStart.getTime(), now + 2 * 60 * 1000);
  if (startMs >= dayEnd.getTime()) {
    return { date: dateStr, timeZone: BOOK_CALL.timezone, slots: [] };
  }

  const params = new URLSearchParams({
    event_type: eventTypeUri,
    start_time: new Date(startMs).toISOString(),
    end_time: dayEnd.toISOString(),
  });

  let data;
  try {
    data = await calendlyFetch(
      `/event_type_available_times?${params.toString()}`,
      config.token,
    );
  } catch (err) {
    // Out-of-window / past-date range errors → just no slots, not a hard failure.
    if (err.status === 400) {
      return { date: dateStr, timeZone: BOOK_CALL.timezone, slots: [] };
    }
    throw err;
  }

  const slots = (data?.collection || [])
    .filter((s) => s.status === "available")
    .map((s) => ({
      label: formatSlotLabel(s.start_time, use24h),
      startIso: s.start_time,
      endIso: new Date(
        new Date(s.start_time).getTime() + SLOT_MINUTES * 60 * 1000,
      ).toISOString(),
    }));

  return { date: dateStr, timeZone: BOOK_CALL.timezone, slots };
}
