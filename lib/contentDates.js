/**
 * Real last-edit date per route, used for schema.org dateModified and for
 * sitemap lastmod so the two can never disagree.
 *
 * Dates come from git history via `npm run content-dates`, which writes
 * contentDates.json. They are deliberately never defaulted to "today":
 * an invented freshness date is worse than no date at all.
 */
import contentDates from "./contentDates.json";

/** Fallback for a route the generator does not know about. */
const FALLBACK = contentDates.generated;

/** Normalise to a leading-slash, no-trailing-slash path. */
function normalise(path) {
  if (!path || path === "/") return "/";
  const withLead = path.startsWith("/") ? path : `/${path}`;
  return withLead.length > 1 && withLead.endsWith("/")
    ? withLead.slice(0, -1)
    : withLead;
}

/**
 * Last-edit date (YYYY-MM-DD) for a route.
 *
 * Blog routes resolve to the authored editorial date baked into the manifest
 * at generation time, so nothing here has to import the blog data module.
 */
export function getContentDate(path) {
  const route = normalise(path);

  const exact = contentDates.routes?.[route];
  if (exact) return exact;

  // Longest matching prefix, so a nested collection beats its parent.
  let best = null;
  let bestLen = 0;
  for (const [prefix, date] of Object.entries(contentDates.prefixes ?? {})) {
    if (route.startsWith(prefix) && prefix.length > bestLen) {
      best = date;
      bestLen = prefix.length;
    }
  }
  if (best) return best;

  return FALLBACK;
}

/** Same value as a Date, for next-sitemap's lastModified field. */
export function getContentDateObject(path) {
  return new Date(`${getContentDate(path)}T00:00:00.000Z`);
}
