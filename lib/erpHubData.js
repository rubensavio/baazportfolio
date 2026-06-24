import { erpData } from "./erpData";

export const FILTER_ALL = "all";

export const erpHubSectorBySlug = {
  "insurance-companies": "financial",
  "banking-companies": "financial",
  "manufacturing-companies": "operations",
  "automobile-companies": "operations",
  "transportation-supply-chain-companies": "operations",
  "healthcare-companies": "people",
  "education-training-companies": "people",
  "real-estate-companies": "built",
  "construction-companies": "built",
};

export const erpHubFilters = [
  { key: FILTER_ALL, label: "All" },
  { key: "financial", label: "Financial services" },
  { key: "operations", label: "Operations" },
  { key: "built", label: "Built environment" },
  { key: "people", label: "People & health" },
];

export const erpHubItems = Object.entries(erpData)
  .map(([slug, data]) => ({
    slug,
    href: `/erp/${slug}`,
    title: data.title,
    intro: data.heroSubtitle ?? data.metaDescription ?? "",
    sector: erpHubSectorBySlug[slug] ?? "operations",
    sectorLabel:
      erpHubFilters.find(
        (filter) => filter.key === (erpHubSectorBySlug[slug] ?? "operations"),
      )?.label ?? "Operations",
  }))
  .sort((a, b) => a.title.localeCompare(b.title));
