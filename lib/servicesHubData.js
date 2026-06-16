import { servicesData } from "./servicesData";
import { technologyCapabilitiesData } from "./technologyCapabilitiesData";

export const FILTER_ALL = "all";

export const SERVICES_HUB_SPECIALIZED = [
  {
    slug: "enterprise",
    href: "/enterprise",
    title: "Enterprise Software Development",
    intro:
      "Custom software development for enterprise teams - product strategy, UX/UI, full-stack engineering, and post-launch support with milestone-based delivery.",
    category: "programmes",
  },
  {
    slug: "ecommerce",
    href: "/ecommerce",
    title: "Marketplace & E-commerce Growth",
    intro:
      "Full-stack Amazon & Flipkart marketplace management powered by proprietary tools, real operator experience, and radical transparency.",
    category: "programmes",
  },
  {
    slug: "gtm-engineering",
    href: "/gtm-engineering",
    title: "GTM Engineering",
    intro:
      "Full-stack GTM engineering - content, outbound, ads, SEO, lead capture, nurture, and conversion - built as one interconnected system that compounds pipeline.",
    category: "programmes",
  },
];

export const servicesHubCategoryBySlug = {
  "product-strategy": "core",
  "ui-ux-design": "core",
  "web-development": "core",
  "mobile-app": "core",
  "ai-solution": "core",
  enterprise: "programmes",
  ecommerce: "programmes",
  "gtm-engineering": "programmes",
  "website-cms": "technology",
  "ai-ml-models": "technology",
  "agentic-ai": "technology",
  "database-management": "technology",
  "devops-cloud": "technology",
};

export const servicesHubFilters = [
  { key: FILTER_ALL, label: "All" },
  { key: "core", label: "Product engineering" },
  { key: "programmes", label: "Specialized programmes" },
  { key: "technology", label: "Technology" },
];

function categoryLabel(category) {
  return (
    servicesHubFilters.find((filter) => filter.key === category)?.label ??
    "Product engineering"
  );
}

const coreItems = Object.entries(servicesData).map(([slug, data]) => ({
  slug,
  href: `/services/${slug}`,
  title: data.label,
  intro: data.directAnswer ?? data.description ?? "",
  category: "core",
  categoryLabel: categoryLabel("core"),
}));

const specializedItems = SERVICES_HUB_SPECIALIZED.map((item) => ({
  ...item,
  categoryLabel: categoryLabel("programmes"),
}));

const techItems = Object.entries(technologyCapabilitiesData).map(([slug, data]) => ({
  slug,
  href: `/technologies/${slug}`,
  title: data.label,
  intro: data.directAnswer ?? data.overview ?? "",
  category: "technology",
  categoryLabel: categoryLabel("technology"),
}));

export const servicesHubItems = [...coreItems, ...specializedItems, ...techItems].sort(
  (a, b) => a.title.localeCompare(b.title),
);

export const servicesHubCoreCount = coreItems.length;
