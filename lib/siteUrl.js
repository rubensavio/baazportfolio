/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.baaz.pro).
 */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";
  return raw.replace(/\/$/, "");
}

export function getSiteOrigin() {
  try {
    return new URL(getSiteUrl()).origin;
  } catch {
    return "https://www.baaz.pro";
  }
}
