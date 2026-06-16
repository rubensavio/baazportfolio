import { NextResponse } from "next/server";
import { getGoogleCalendarConfig } from "../../../../lib/googleCalendarConfig.js";
import { createBooking } from "../../../../lib/googleCalendar.js";
import { isBusinessEmail, isValidEmail } from "../../../../lib/emailValidation.js";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { isConfigured } = getGoogleCalendarConfig();
    if (!isConfigured) {
      return NextResponse.json(
        { error: "Google Calendar is not configured on the server." },
        { status: 503 },
      );
    }

    const body = await request.json();
    const { date, startIso, name, email, message } = body;

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!isBusinessEmail(email)) {
      return NextResponse.json(
        { error: "Please use your business email address." },
        { status: 400 },
      );
    }
    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Please tell us what this call is about." },
        { status: 400 },
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const requested = new Date(`${date}T00:00:00`);
    if (requested < today) {
      return NextResponse.json({ error: "Past dates cannot be booked." }, { status: 400 });
    }

    const result = await createBooking({ date, startIso, name, email, message });
    return NextResponse.json(result);
  } catch (error) {
    console.error("[book-call/book]", error);
    return NextResponse.json(
      { error: error.message || "Failed to create booking." },
      { status: 500 },
    );
  }
}
