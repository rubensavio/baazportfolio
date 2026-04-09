import { blogData } from "./blogData";

/**
 * Legacy shipped-work entries (full narratives at /work1, /work2).
 */
export const caseStudiesData = [
  {
    href: "/work1",
    contentType: "Case study",
    title: "AI quality automation on manufacturing ERP",
    intro:
      "Computer vision and QA workflows layered on existing manufacturing ERP and line operations—how we extended the stack customers already ran instead of replacing it.",
  },
  {
    href: "/work2",
    contentType: "Case study",
    title: "AI hiring automation on HRMS",
    intro:
      "Screening, ranking, and assessments wired into hiring-management systems—intelligent automation on top of HRMS for high-volume engineering recruiting.",
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
    title: "AI quality automation on manufacturing ERP",
    intro:
      "Manufacturing ERP plus an AI vision layer: edge vs cloud inference, QA workflows, and production deployment—custom engineering on top of the core system.",
    metricSummary:
      "Production CV pipeline feeding ERP-aligned quality workflows; inspection load and defect signal improved measurably",
    filterKey: FILTER_CASE,
    industryTags: ["Manufacturing & AI", "ERP extension"],
  },
  {
    href: "/work2",
    contentType: "Case study",
    title: "AI hiring automation on HRMS",
    intro:
      "HRMS-native automation we engineered—parsing, scoring, assessments, and integrations so recruiting stays inside the hiring stack the enterprise already owns.",
    metricSummary:
      "High-volume applications screened through HRMS-connected flows; time-to-hire and recruiter load improved with owned software",
    filterKey: FILTER_CASE,
    industryTags: ["B2B SaaS / HR tech", "HRMS"],
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
