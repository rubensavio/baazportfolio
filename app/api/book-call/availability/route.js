import { NextResponse } from "next/server";
import { getGoogleCalendarConfig } from "../../../../lib/googleCalendarConfig.js";
import { getAvailableSlots } from "../../../../lib/googleCalendar.js";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request) {
  try {
    const { isConfigured } = getGoogleCalendarConfig();
    if (!isConfigured) {
      return NextResponse.json(
        { error: "Google Calendar is not configured on the server." },
        { status: 503 },
      );
    }

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const use24h = searchParams.get("format") === "24h";

    if (!date) {
      return NextResponse.json({ error: "Missing date parameter (YYYY-MM-DD)." }, { status: 400 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const requested = new Date(`${date}T00:00:00`);
    if (requested < today) {
      return NextResponse.json({ error: "Past dates are not available." }, { status: 400 });
    }

    const data = await getAvailableSlots(date, use24h);
    return NextResponse.json(data);
  } catch (error) {
    console.error("[book-call/availability]", error);
    return NextResponse.json(
      { error: error.message || "Failed to load availability." },
      { status: 500 },
    );
  }
}
