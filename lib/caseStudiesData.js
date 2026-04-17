import { blogData } from "./blogData";

/**
 * Shipped-work case studies (full narratives; also listed on /case-studies hub).
 */
export const caseStudiesData = [
  {
    href: "/work1",
    contentType: "Case study",
    title: "AI quality automation on manufacturing ERP",
    /** Short line for footer nav */
    footerLabel: "Manufacturing ERP & AI",
    intro:
      "Computer vision and QA workflows layered on existing manufacturing ERP and line operations—how we extended the stack customers already ran instead of replacing it.",
  },
  {
    href: "/work2",
    contentType: "Case study",
    title: "AI hiring automation on HRMS",
    footerLabel: "HRMS hiring automation",
    intro:
      "Screening, ranking, and assessments wired into hiring-management systems—intelligent automation on top of HRMS for high-volume engineering recruiting.",
  },
  {
    href: "/real-estate-erp-case-study",
    contentType: "Case study",
    title: "Real-estate ERP and consumer app",
    footerLabel: "Real-estate ERP & app",
    intro:
      "Operations platform and buyer-facing app: inventory-to-cash, partner workflows, and resident journeys for a multi-phase developer—anonymous case study.",
  },
  {
    href: "/healthcare-patient-app-case-study",
    contentType: "Case study",
    title: "Healthcare patient engagement app",
    footerLabel: "Healthcare patient app",
    intro:
      "React Native programme for a provider network: scheduling, telehealth adjacency, prescriptions, lab and pharmacy, documents, and push—anonymous case study.",
  },
  {
    href: "/education-training-portal-case-study",
    contentType: "Case study",
    title: "Education & training operations portal",
    footerLabel: "Training ops portal",
    intro:
      "Multi-role React portal for a training institute: cohorts, workshops, CRM, attendance, payments, homework, and participant UX—anonymous case study.",
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
  {
    href: "/real-estate-erp-case-study",
    contentType: "Case study",
    title: "Real-estate ERP and consumer app",
    intro:
      "Back-office platform and consumer application: inventory, bookings, collections, and channel alignment—anonymous narrative for a multi-phase developer.",
    metricSummary:
      "Single operational spine with a branded buyer and tenant experience",
    filterKey: FILTER_CASE,
    industryTags: ["Real estate", "ERP & mobile"],
  },
  {
    href: "/healthcare-patient-app-case-study",
    contentType: "Case study",
    title: "Healthcare patient engagement app",
    intro:
      "Patient mobile client: doctor search, appointments, video visits, prescriptions, lab and pharmacy surfaces, medical uploads, and notifications on one codebase.",
    metricSummary:
      "Redux-Saga orchestration, REST integration, and store-ready releases with permission and OS policy alignment",
    filterKey: FILTER_CASE,
    industryTags: ["Healthcare", "Mobile"],
  },
  {
    href: "/education-training-portal-case-study",
    contentType: "Case study",
    title: "Education & training operations portal",
    intro:
      "Browser SPA for institute ops: courses, batches, workshops, tiered CRM, barcodes, payments, homework, and student-facing journeys—MUI and a large route matrix.",
    metricSummary:
      "Single operational spine replacing fragmented sheets; CRM and finance paths aligned to access",
    filterKey: FILTER_CASE,
    industryTags: ["Education", "Operations portal"],
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
