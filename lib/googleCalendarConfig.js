export function getGoogleCalendarConfig() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  const impersonateEmail = process.env.GOOGLE_CALENDAR_IMPERSONATE?.trim() || null;
  /**
   * The person who actually takes the call. When the organizer (impersonate)
   * is a separate bookings account, the host is added as an attendee so Google
   * sends them an invite email, and their calendar is checked for availability.
   */
  const hostEmail = process.env.GOOGLE_CALENDAR_HOST?.trim() || null;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  return {
    calendarId,
    impersonateEmail,
    hostEmail,
    /** Workspace domain-wide delegation - act as the host user, not the service account. */
    usesDelegation: Boolean(impersonateEmail),
    serviceAccountEmail,
    privateKey,
    isConfigured: Boolean(
      calendarId &&
        serviceAccountEmail &&
        serviceAccountEmail !== "..." &&
        privateKey &&
        privateKey !== "...",
    ),
  };
}
