import { blogData } from "./blogData";

/**
 * Legacy shipped-work entries (full narratives at /work1, /work2).
 */
export const caseStudiesData = [
  {
    href: "/work1",
    contentType: "Case study",
    title: "Defect detection for precision manufacturing",
    intro:
      "Computer vision on the factory floor: edge vs cloud inference, QA workflows, and deployment story — custom product engineering, not an off-the-shelf vision SKU.",
  },
  {
    href: "/work2",
    contentType: "Case study",
    title: "Custom tech hiring automation platform",
    intro:
      "End-to-end product we engineered — assessments, ranking, integrations, and scalable backend for high-volume recruiting. A bespoke platform build, not a third-party hiring tool.",
  },
];

/** Blog slugs surfaced on /case-studies as architecture deep-dives */
export const architectureBlogSlugs = [
  "reference-architecture-b2b-saas",
  "slos-error-budgets-reliability",
  "reliable-data-integration-events-cdc-outbox",
];

const FILTER_ALL = "all";
const FILTER_CASE = "case-study";
const FILTER_ARCH = "architecture";

/**
 * Unified hub rows for /case-studies (filters + metrics).
 */
export const caseStudyHubItems = [
  {
    href: "/work1",
    contentType: "Case study",
    title: "Defect detection for precision manufacturing",
    intro:
      "Computer vision on the factory floor: edge vs cloud inference, QA workflows, and deployment story — custom product engineering, not an off-the-shelf vision SKU.",
    metricSummary:
      "Production CV pipeline; manual inspection time and defect signal improved measurably",
    filterKey: FILTER_CASE,
    industryTags: ["Manufacturing & AI"],
  },
  {
    href: "/work2",
    contentType: "Case study",
    title: "Custom tech hiring automation platform",
    intro:
      "End-to-end platform we engineered — parsing, scoring, assessments, and integrations. Build-vs-buy: this is the custom internal system, not Fetcher-style SaaS SEO.",
    metricSummary:
      "High-volume applications screened; time-to-hire and recruiter load addressed with owned software",
    filterKey: FILTER_CASE,
    industryTags: ["B2B SaaS / HR tech"],
  },
  ...architectureBlogSlugs.map((slug) => {
    const post = blogData[slug];
    return {
      href: `/blog/${slug}`,
      contentType: post?.contentType || "Guide",
      title: post?.title || slug,
      intro: post?.intro || "",
      metricSummary:
        "Reference patterns, trade-offs, and reliability boundaries for technical evaluators",
      filterKey: FILTER_ARCH,
      industryTags: ["Architecture & reliability"],
    };
  }),
];

export const caseStudyHubFilters = [
  { key: FILTER_ALL, label: "All" },
  { key: FILTER_CASE, label: "Shipped work" },
  { key: FILTER_ARCH, label: "Architecture guides" },
];

export { FILTER_ALL, FILTER_CASE, FILTER_ARCH };
