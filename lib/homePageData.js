import { caseStudyHubItems } from "./caseStudiesData";
import {
  BRAND_POSITIONING_COMBINED,
  BRAND_SCOPE_LINE,
} from "./brandPositioning";

export const HOME_MARQUEE_ITEMS = [
  "Product Strategy",
  "UI/UX Design",
  "Full-Stack Engineering",
  "Mobile Apps",
  "AI Development",
  "Project Rescue",
  "FinTech",
  "Healthcare",
  "Construction Tech",
  "Retail",
  "Enterprise SaaS",
  "React & Next.js",
  "Node.js",
];

export const HOME_SERVICES = [
  {
    num: "01",
    title: "Product Strategy",
    description:
      "Research synthesis, personas, opportunity sizing, and sequenced roadmaps tied to measurable bets.",
    href: "/services/product-strategy",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "End-to-end interaction design: user flows, wireframes, and prototypes validated before engineering commits.",
    href: "/services/ui-ux-design",
  },
  {
    num: "03",
    title: "Full-Stack Development",
    description:
      "Web and API surfaces, mobile where scoped, cloud deployment, and integration layers your product depends on.",
    href: "/services/web-development",
  },
  {
    num: "04",
    title: "Mobile Apps",
    description:
      "Native-quality iOS and Android — field-ready, offline-capable, built for real users.",
    href: "/services/mobile-app",
  },
  {
    num: "05",
    title: "AI Development",
    description:
      "LLMs, RAG pipelines, and automation that ships to production — not just demo slides.",
    href: "/services/ai-solution",
  },
  {
    num: "06",
    title: "Project Rescue",
    description:
      "We pick up where others abandoned. Audit, stabilise, and accelerate — without the drama.",
    href: "/project-rescue",
  },
];

export const HOME_WORK_ITEMS = caseStudyHubItems
  .filter((item) => item.filterKey === "case-study")
  .slice(0, 4)
  .map((item, index) => ({
    num: String(index + 1).padStart(2, "0"),
    title: item.title,
    meta: item.industryTags,
    href: item.href,
  }));

export const HOME_STATS = [
  { value: "100", suffix: "+", label: "Products shipped" },
  { value: "7", suffix: " yrs", label: "Since 2018", suffixClass: "stat-suffix-sm" },
  { value: "~50", suffix: "%", label: "Rescue engagements" },
];

export const HOME_HERO = {
  eyebrow: {
    live: "Available for projects",
    rest: `${BRAND_POSITIONING_COMBINED} · Bengaluru, India`,
  },
  lines: ["Custom software", "development", "for startups & enterprises"],
  sub: `Baaz is a ${BRAND_POSITIONING_COMBINED.toLowerCase()} ${BRAND_SCOPE_LINE}, shipping production-grade web and mobile products since 2018.`,
  cta: { label: "Get in touch", href: "/get-in-touch" },
  stats: HOME_STATS,
};

export const HOME_PHILOSOPHY = {
  num: "01",
  heading: "Enterprise product engineering from discovery through launch and scale.",
  paragraphs: [
    "Most engagements combine strategy, UX, and code so roadmap stays coherent instead of bouncing between separate vendors. Each phase ships with clear milestones and acceptance criteria before the next begins.",
    "We have delivered 100+ web and mobile applications across FinTech, retail, eCommerce, and healthcare-adjacent work — with beautiful engineering and fast delivery treated as the same discipline, not trade-offs.",
  ],
};

export const HOME_QUOTE = {
  text: "Baaz delivered beyond expectations. Their team truly understands product development and business needs. We launched faster and smarter with their help.",
  attr: "Ravi Verma — Digital Marketing Specialist",
};

export const HOME_CTA = {
  heading: "Ready to build something amazing?",
  sub: "We'd love to hear about your idea, product, or challenge. Whether you're a startup, scale-up, or enterprise, we're here to turn your vision into a powerful digital product.",
  email: "support@baaz.pro",
  briefHref: "/get-in-touch",
  callHref: "https://calendar.app.google/BBo3UYaic9yomaSo7",
};
