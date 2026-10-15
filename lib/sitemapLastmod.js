/**
 * ISO dates for sitemap lastmod.
 *
 * These now derive from lib/contentDates.json - the same real git edit dates
 * that feed schema.org dateModified - so the sitemap and the structured data
 * can never claim different things about the same page.
 *
 * Refresh with `npm run content-dates`.
 */
import { getContentDateObject } from "./contentDates";

export function lastModStatic(path) {
  return getContentDateObject(path || "/");
}

export function lastModBlog(slug) {
  return getContentDateObject(`/blog/${slug}`);
}

export function lastModService(slug) {
  return getContentDateObject(slug ? `/services/${slug}` : "/services");
}

export function lastModIndustry(slug) {
  return getContentDateObject(slug ? `/industry/${slug}` : "/industry");
}
