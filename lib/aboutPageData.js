import {
  BRAND_POSITIONING_COMBINED,
  BRAND_SCOPE_LINE,
} from "./brandPositioning";
import { US_ADDRESS_LINE } from "./companyAddresses";
import { HOME_CTA } from "./homePageData";

export const ABOUT_HERO = {
  statement: "Custom software development from Bangalore since 2018.",
  stats: [
    { value: "2018", label: "Founded" },
    { value: "100", suffix: "+", label: "Products shipped" },
    { value: "~50", suffix: "%", label: "Rescue engagements" },
    { value: "10", suffix: "+", label: "Industries" },
  ],
};

export const ABOUT_ORIGIN = {
  label: "Who We Are",
  quote:
    "At Baaz, we don't just write code — we craft scalable solutions that solve real problems and create long-term value.",
  paragraphs: [
    `Baaz is a ${BRAND_POSITIONING_COMBINED}, based in Bangalore, India, with a US office at ${US_ADDRESS_LINE}, operating since 2018—shipping purposeful custom software for startups, scale-ups, and enterprises worldwide.`,
    "Since 2018 we have designed, developed, and launched over 100 web and mobile applications across eCommerce, FinTech, AI/ML, AR/VR, real estate, retail, and ERP-adjacent workflows; the portfolio total reflects Baaz's internal delivery records.",
    "Our team brings deep technical expertise, strategic thinking, and a collaborative mindset to every project. We follow a founder-first, product-led approach that helps businesses move from idea to prototype, MVP to scale — quickly and efficiently.",
  ],
};

export const ABOUT_VALUES = {
  heading: "What Guides Us",
  sub: "Core principles that define our work and culture",
  items: [
    {
      num: "01",
      title: "Speedy Delivery",
      body: "We believe in turning ideas into reality—fast. Our agile approach ensures rapid design and development without compromising on quality. At Baaz, speed isn't just about timelines—it's about momentum and impact.",
    },
    {
      num: "02",
      title: "Hyper Optimization",
      body: "Every pixel and every line of code matters. We relentlessly refine and optimize our products for performance, usability, and scalability—ensuring that what we build not only works, but works brilliantly.",
    },
    {
      num: "03",
      title: "Beautiful Experiences",
      body: "We craft interfaces that don't just function—they delight. From sleek UI to intuitive interactions, we prioritize aesthetics and usability to create digital experiences that users love and remember.",
    },
  ],
};

export const ABOUT_SHOW_UP = {
  heading: "How we show up.",
  items: [
    {
      num: "01",
      titleLines: ["Founder-first", "thinking"],
      body: "We treat your product like it's ours. That means pushing back on bad ideas, proposing better ones, and caring about the outcome — not just the deliverable. You hired us for our judgment. We use it.",
    },
    {
      num: "02",
      titleLines: ["Senior all", "the way down"],
      body: "The people you meet in the first call are the people building your product. No juniors working unsupervised on your critical path. No account managers in the middle. Direct, accountable, end-to-end.",
    },
    {
      num: "03",
      titleLines: ["Radical", "transparency"],
      body: "Weekly demos. Documented decisions. No surprises. You always know where things stand, what's blocking progress, and exactly what trade-offs we're making — before we make them.",
    },
    {
      num: "04",
      titleLines: ["Quality is", "non-negotiable"],
      body: "We'd rather push a deadline than ship something we're not proud of. Speed comes from doing things right the first time — not from cutting corners that create three tickets for every one you close.",
    },
  ],
};

export const ABOUT_TEAM = {
  heading: "The people behind the work.",
  members: [
    {
      initial: "C",
      name: "Chitresh",
      role: "Co-founder & Engineering Lead",
      bio: "Leads product architecture and engineering strategy across every engagement. Has personally shipped dozens of products — from FinTech dashboards to AI-powered document systems. Writes about product engineering, MVP scoping, and technical due diligence.",
    },
    {
      initial: "L",
      name: "Laxman Singh",
      role: "Software Engineer",
      bio: "Full-stack engineer specialising in complex data workflows, event-driven architecture, and production reliability engineering. Authored the Diagnostic Guide series on project failure signals and rescue patterns.",
    },
    {
      initial: "+",
      initialLarge: true,
      name: "Extended Studio",
      role: "Designers, Engineers & Specialists",
      bio: "We work with a trusted network of senior designers, mobile engineers, and AI specialists — assembled around each project's specific needs. Every collaborator has worked with us before. No cold hires on your critical path.",
    },
  ],
};

export const ABOUT_CLOSING = {
  quote: "Ready to build something amazing?",
  paragraphs: [
    HOME_CTA.sub,
    "If that sounds like the kind of partner you want to work with:",
  ],
  cta: { label: "Get in touch", href: "/get-in-touch" },
};
