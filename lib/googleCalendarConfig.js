export function getGoogleCalendarConfig() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  const impersonateEmail = process.env.GOOGLE_CALENDAR_IMPERSONATE?.trim() || null;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  return {
    calendarId,
    impersonateEmail,
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
