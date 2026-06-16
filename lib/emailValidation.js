// Shared business-email validation used by the book-call client and API.
// Blocks free / personal email providers so only work addresses can book a call.

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "yahoo.co.uk",
  "ymail.com",
  "rocketmail.com",
  "outlook.com",
  "hotmail.com",
  "hotmail.co.uk",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "zoho.com",
  "gmx.com",
  "gmx.net",
  "mail.com",
  "yandex.com",
  "yandex.ru",
  "rediffmail.com",
  "tutanota.com",
  "fastmail.com",
  "hey.com",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return typeof email === "string" && EMAIL_REGEX.test(email.trim());
}

export function isBusinessEmail(email) {
  if (!isValidEmail(email)) return false;
  const domain = email.trim().toLowerCase().split("@")[1];
  return !FREE_EMAIL_DOMAINS.has(domain);
}

export { FREE_EMAIL_DOMAINS };
