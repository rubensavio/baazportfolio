import { technologyCapabilitiesData } from "./technologyCapabilitiesData";

/**
 * Service slug → technology capability deep-dives (internal inbound links).
 * @type {Record<string, string[]>}
 */
export const TECH_SLUGS_BY_SERVICE_TYPE = {
  "product-strategy": ["website-cms"],
  "ui-ux-design": ["web-development"],
  "web-development": ["web-development", "devops-cloud", "database-management"],
  "mobile-app": ["web-development", "devops-cloud"],
  "ai-solution": ["ai-ml-models", "agentic-ai", "database-management"],
};

/**
 * @param {string} serviceType — key into servicesData
 * @returns {Array<{ slug: string; href: string; label: string }>}
 */
export function getTechnologyDeepDiveLinks(serviceType) {
  const techSlugs = TECH_SLUGS_BY_SERVICE_TYPE[serviceType];
  if (!techSlugs?.length) return [];
  const dedup = [...new Set(techSlugs)];
  return dedup
    .map((slug) => {
      const entry = technologyCapabilitiesData[slug];
      if (!entry) return null;
      return {
        slug,
        href: `/technologies/${slug}`,
        label: entry.label,
      };
    })
    .filter(Boolean);
}
