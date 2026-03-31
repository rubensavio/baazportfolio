/**
 * ISO date strings for sitemap lastmod. Update when pages are materially changed.
 */
const DEFAULT = "2026-03-30";

export const STATIC_PATH_LASTMOD = {
  "/": "2026-03-30",
  "/about": "2026-02-15",
  "/enterprise": "2026-02-15",
  "/work1": "2026-02-20",
  "/work2": "2026-02-20",
  "/get-in-touch": "2026-02-10",
  "/book-call": "2026-02-10",
  "/blog": "2026-03-30",
  "/case-studies": "2026-02-10",
  "/ecommerce": "2026-02-10",
  "/gtm-engineering": "2026-02-10",
  "/project-rescue": "2026-03-20",
};

export const BLOG_SLUG_LASTMOD = {
  "thoughtworks-alternatives": "2026-03-18",
  "best-software-development-agencies-for-startups": "2026-02-01",
  "how-to-choose-software-development-partner": "2026-02-05",
  "how-to-build-ai-powered-product": "2026-02-08",
  "software-development-outsourcing-vs-in-house": "2026-02-12",
  "product-engineering-process-for-enterprises": "2026-02-14",
  "signs-your-software-project-is-failing": "2026-03-01",
  "how-to-switch-software-development-vendors": "2026-03-05",
  "software-project-rescue-checklist": "2026-03-08",
  "reference-architecture-b2b-saas": "2026-03-12",
  "slos-error-budgets-reliability": "2026-03-14",
  "reliable-data-integration-events-cdc-outbox": "2026-03-16",
};

const SERVICE_LASTMOD = "2026-02-18";
const INDUSTRY_LASTMOD = "2026-02-18";

export function lastModStatic(path) {
  return new Date(STATIC_PATH_LASTMOD[path] || DEFAULT);
}

export function lastModBlog(slug) {
  return new Date(BLOG_SLUG_LASTMOD[slug] || DEFAULT);
}

export function lastModService() {
  return new Date(SERVICE_LASTMOD);
}

export function lastModIndustry() {
  return new Date(INDUSTRY_LASTMOD);
}
