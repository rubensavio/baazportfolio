/**
 * Curated contextual internal links per blog slug (GEO + crawl paths to services / ERP).
 *
 * @typedef {{ href: string; label: string }} BlogRelatedLink
 */

/** @type {Record<string, BlogRelatedLink[]>} */
export const blogRelatedLinksBySlug = {
  "thoughtworks-alternatives": [
    { href: "/enterprise", label: "Enterprise-grade delivery alternatives" },
    {
      href: "/services/product-strategy",
      label: "Product strategy under governance",
    },
    {
      href: "/services/web-development",
      label: "Custom platforms & integrations",
    },
    { href: "/blog/how-to-choose-software-development-partner", label: "Choosing a development partner" },
  ],
  "thoughtworks-alternatives": [
    { href: "/enterprise", label: "Enterprise product engineering" },
    {
      href: "/services/product-strategy",
      label: "Product strategy & phased delivery",
    },
    {
      href: "/services/web-development",
      label: "Custom software & integration delivery",
    },
    { href: "/erp/manufacturing-companies", label: "ERP for manufacturing ops" },
  ],
  "how-to-scope-mvp-that-ships": [
    { href: "/services/product-strategy", label: "MVP discovery & roadmap" },
    { href: "/services/web-development", label: "Build & ship MVPs" },
    { href: "/gtm-engineering", label: "Go-to-market engineering" },
    { href: "/book-call", label: "Book a scoping call" },
  ],
  "technical-due-diligence-custom-software": [
    {
      href: "/services/product-strategy",
      label: "Architecture & technical reviews",
    },
    { href: "/services/web-development", label: "Custom software portfolios" },
    { href: "/project-rescue", label: "Rescue stalled builds" },
    { href: "/enterprise", label: "Enterprise assessments" },
  ],
  "best-software-development-agencies-for-startups": [
    { href: "/services/web-development", label: "Custom software partnership" },
    { href: "/services/mobile-app", label: "Startup mobile MVPs" },
    { href: "/services/product-strategy", label: "Product strategy sprints" },
    { href: "/blog/how-to-scope-mvp-that-ships", label: "How to scope an MVP that ships" },
  ],
  "how-to-choose-software-development-partner": [
    {
      href: "/services/product-strategy",
      label: "Partner for discovery & roadmap",
    },
    { href: "/services/web-development", label: "Engineering engagements" },
    { href: "/blog/technical-due-diligence-custom-software", label: "Technical due diligence playbook" },
    { href: "/get-in-touch", label: "Request a capability session" },
  ],
  "how-to-build-ai-powered-product": [
    { href: "/services/ai-solution", label: "AI solution engineering" },
    { href: "/technologies/ai-ml-models", label: "ML models & integrations" },
    { href: "/technologies/agentic-ai", label: "Agentic workflows" },
    { href: "/erp/healthcare-companies", label: "AI-enabled operational ERP contexts" },
  ],
  "software-development-outsourcing-vs-in-house": [
    {
      href: "/services/product-strategy",
      label: "Hybrid delivery & governance models",
    },
    { href: "/services/web-development", label: "Offshore-ready squads (Bangalore)" },
    { href: "/enterprise", label: "Enterprise augmentation" },
    { href: "/blog/how-to-switch-software-development-vendors", label: "Switching vendors safely" },
  ],
  "product-engineering-process-for-enterprises": [
    { href: "/enterprise", label: "Enterprise product engineering" },
    { href: "/services/product-strategy", label: "Program discovery & KPIs" },
    { href: "/erp/banking-companies", label: "ERP execution in regulated sectors" },
    { href: "/case-studies", label: "Case studies by domain" },
  ],
  "signs-your-software-project-is-failing": [
    { href: "/project-rescue", label: "Software project rescue" },
    { href: "/services/product-strategy", label: "Rescope before rewrite" },
    { href: "/services/web-development", label: "Stabilise & refactor delivery" },
    { href: "/book-call", label: "Book a diagnostics call" },
  ],
  "how-to-switch-software-development-vendors": [
    { href: "/project-rescue", label: "Rescue engagements" },
    { href: "/services/web-development", label: "Handover-ready squads" },
    {
      href: "/blog/technical-due-diligence-custom-software",
      label: "Due diligence checklist",
    },
    { href: "/get-in-touch", label: "Plan a calm transition" },
  ],
  "software-project-rescue-checklist": [
    { href: "/project-rescue", label: "Project rescue services" },
    { href: "/services/web-development", label: "Stabilisation & roadmap" },
    { href: "/blog/signs-your-software-project-is-failing", label: "Early warning signs" },
    { href: "/book-call", label: "Schedule a rescue triage call" },
  ],
  "reference-architecture-b2b-saas": [
    {
      href: "/services/web-development",
      label: "B2B SaaS platform engineering",
    },
    {
      href: "/technologies/database-management",
      label: "Data modelling & Postgres patterns",
    },
    { href: "/technologies/devops-cloud", label: "Reliability & cloud ops" },
    { href: "/blog/slos-error-budgets-reliability", label: "SLOs & error budgets" },
  ],
  "slos-error-budgets-reliability": [
    {
      href: "/technologies/devops-cloud",
      label: "DevOps & observability stacks",
    },
    {
      href: "/services/web-development",
      label: "Platform engineering support",
    },
    {
      href: "/blog/reliable-data-integration-events-cdc-outbox",
      label: "Reliable integrations & CDC",
    },
    { href: "/enterprise", label: "Reliability programmes for enterprises" },
  ],
  "reliable-data-integration-events-cdc-outbox": [
    {
      href: "/technologies/database-management",
      label: "Databases & event patterns",
    },
    { href: "/services/web-development", label: "Integration-heavy builds" },
    { href: "/erp/transportation-supply-chain-companies", label: "ERP + logistics integrations" },
    {
      href: "/blog/reference-architecture-b2b-saas",
      label: "B2B SaaS reference architectures",
    },
  ],
};

const DEFAULT_LINKS = [
  { href: "/services/web-development", label: "Custom software development" },
  { href: "/services/product-strategy", label: "Product strategy" },
  { href: "/services/ai-solution", label: "AI development" },
  { href: "/erp", label: "Industry ERP landing pages" },
];

/**
 * @param {string | undefined} slug
 * @returns {BlogRelatedLink[]}
 */
export function getBlogRelatedInternalLinks(slug) {
  if (!slug || !blogRelatedLinksBySlug[slug]) return DEFAULT_LINKS;
  return blogRelatedLinksBySlug[slug];
}
