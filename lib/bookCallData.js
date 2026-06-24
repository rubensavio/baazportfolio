import { HOME_CTA } from "./homePageData";

/** Default calendar ID; override with GOOGLE_CALENDAR_ID in .env (server-side via googleCalendarConfig.js). */
export const BOOK_CALL_CALENDAR_ID = "laxmansharmawe@gmail.com";

export const BOOK_CALL = {
  calendarId: BOOK_CALL_CALENDAR_ID,
  hostName: "Baaz Team",
  hostInitial: "B",
  timezone: "Asia/Kolkata",
  duration: "30m",
  title: "Introduction Call [Quick 30 min]",
  description:
    "Discovery call to explore what you're building, what's working, and where Baaz can help you move closer to your business goals.",
  meetingType: "Google Meet",
  bookingUrl: HOME_CTA.callHref,
};
