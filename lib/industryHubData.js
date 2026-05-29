import { industryData } from "./industryData";

export const FILTER_ALL = "all";

export const industryHubSectorBySlug = {
  fintech: "financial",
  construction: "built",
  retail: "commerce",
  healthcare: "people",
};

export const industryHubFilters = [
  { key: FILTER_ALL, label: "All" },
  { key: "financial", label: "Financial services" },
  { key: "built", label: "Built environment" },
  { key: "commerce", label: "Commerce" },
  { key: "people", label: "People & health" },
];

export const industryHubItems = Object.entries(industryData)
  .map(([slug, data]) => ({
    slug,
    href: `/industry/${slug}`,
    title: data.title,
    intro: data.directAnswer ?? data.intro ?? "",
    sector: industryHubSectorBySlug[slug] ?? "commerce",
    sectorLabel:
      industryHubFilters.find(
        (filter) => filter.key === (industryHubSectorBySlug[slug] ?? "commerce"),
      )?.label ?? "Commerce",
  }))
  .sort((a, b) => a.title.localeCompare(b.title));
