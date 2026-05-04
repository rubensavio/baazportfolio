/**
 * Inverse map: capability → primary service pages where that stack is exercised.
 *
 * @type {Record<string, Array<{ slug: string; label: string }>>}
 */
export const RELATED_SERVICE_LINKS_BY_TECH = {
  "web-development": [
    { slug: "web-development", label: "Web & platform development" },
    { slug: "mobile-app", label: "Mobile app development" },
  ],
  "website-cms": [
    { slug: "product-strategy", label: "Product strategy & roadmaps" },
    { slug: "web-development", label: "Web & platform development" },
  ],
  "ai-ml-models": [{ slug: "ai-solution", label: "AI product engineering" }],
  "agentic-ai": [{ slug: "ai-solution", label: "AI product engineering" }],
  "database-management": [
    { slug: "web-development", label: "Web & platform delivery" },
    { slug: "ai-solution", label: "AI & data-heavy products" },
  ],
  "devops-cloud": [
    { slug: "web-development", label: "Web & backend delivery" },
    { slug: "mobile-app", label: "Mobile release pipelines" },
  ],
};

/** @param {string} techSlug */
export function getRelatedServiceOfferingLinks(techSlug) {
  return RELATED_SERVICE_LINKS_BY_TECH[techSlug] ?? [];
}
