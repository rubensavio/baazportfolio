import { erpData } from "./erpData";

/**
 * Stable cross-links to other industry ERP landing pages (excludes current slug).
 *
 * @param {string} currentSlug
 * @param {number} [limit]
 * @returns {Array<{ slug: string; title: string }>}
 */
export function getRelatedErpSolutions(currentSlug, limit = 6) {
  const slugs = Object.keys(erpData)
    .filter((s) => s !== currentSlug)
    .sort();
  /** Rotate so adjacent industries in the alphabet don't share the exact same neighbours on every detail page */
  let start =
    [...currentSlug].reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    Math.max(slugs.length, 1);
  start = Number.isFinite(start) ? start : 0;
  const out = [];
  for (let i = 0; i < Math.min(limit, slugs.length); i += 1) {
    const slug = slugs[(start + i) % slugs.length];
    out.push({
      slug,
      title: erpData[slug]?.title ?? slug,
    });
  }
  return out;
}
