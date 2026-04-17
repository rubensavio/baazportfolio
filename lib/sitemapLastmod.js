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
  "/privacy": "2026-04-06",
  "/terms": "2026-04-06",
  "/blog": "2026-03-30",
  "/services": "2026-04-01",
  "/industry": "2026-04-01",
  "/case-studies": "2026-02-10",
  "/real-estate-erp-case-study": "2026-04-16",
  "/healthcare-patient-app-case-study": "2026-04-16",
  "/education-training-portal-case-study": "2026-04-16",
  "/ecommerce": "2026-02-10",
  "/gtm-engineering": "2026-02-10",
  "/project-rescue": "2026-03-20",
};

export const BLOG_SLUG_LASTMOD = {
  "thoughtworks-alternatives": "2026-04-06",
  "best-software-development-agencies-for-startups": "2026-04-06",
  "how-to-choose-software-development-partner": "2026-04-06",
  "how-to-build-ai-powered-product": "2026-04-06",
  "software-development-outsourcing-vs-in-house": "2026-04-06",
  "product-engineering-process-for-enterprises": "2026-04-06",
  "signs-your-software-project-is-failing": "2026-04-06",
  "how-to-switch-software-development-vendors": "2026-04-06",
  "software-project-rescue-checklist": "2026-04-06",
  "reference-architecture-b2b-saas": "2026-04-06",
  "slos-error-budgets-reliability": "2026-04-06",
  "reliable-data-integration-events-cdc-outbox": "2026-04-06",
  "how-to-scope-mvp-that-ships": "2026-04-06",
  "technical-due-diligence-custom-software": "2026-04-06",
};

const SERVICE_LASTMOD = "2026-04-06";
const INDUSTRY_LASTMOD = "2026-04-06";

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
