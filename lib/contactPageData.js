import { HOME_CTA } from "./homePageData";
import { INDIA_ADDRESS_LINE, US_ADDRESS_LINE } from "./companyAddresses";

export const CONTACT_HERO = {
  eyebrow: "New projects",
  title: "Tell us what\nyou're building.",
  sub: "We respond within one business day. Most projects begin with a thirty-minute call — no pitch, just an honest conversation about what you need and whether we're the right fit.",
};

export const CONTACT_METHODS = [
  {
    id: "email",
    href: `mailto:${HOME_CTA.email}`,
    title: "Email directly",
    detail: HOME_CTA.email,
    external: false,
  },
  {
    id: "call",
    href: "/book-call",
    title: "Schedule a call",
    detail: "30 min · Mon–Fri · IST",
    external: false,
  },
  {
    id: "urgent",
    title: "Urgent rescue?",
    detail: 'Mark "urgent" — we move faster',
  },
];

export const CONTACT_OFFICES = [
  {
    label: "India (HQ)",
    address: INDIA_ADDRESS_LINE,
  },
  {
    label: "United States",
    address: US_ADDRESS_LINE,
  },
];

export const CONTACT_FORM = {
  heading: "Project brief",
  sub: "The more context you give us, the better our first response will be.",
  submitLabel: "Send Message",
  note: "We reply within 1 business day.",
  success: "Message received. We'll be in touch shortly.",
  error: "Something went wrong. Please try again or email us directly.",
};

export const CONTACT_LEARN_MORE = {
  eyebrow: "Learn more",
  heading: "Capabilities, proof, and other ways to reach us",
  lede:
    "Same product engineering focus as the rest of the site—organized so you can skim, click through, or book time without hunting through long paragraphs.",
  cards: [
    {
      title: "Services & programs",
      text:
        "End-to-end delivery from discovery through launch: strategy, UX, engineering, mobile, and AI where it earns its place—plus rescue, enterprise, and go-to-market support when scope demands it.",
      links: [
        { href: "/services/product-strategy", label: "Product strategy" },
        { href: "/services/ui-ux-design", label: "UI/UX design" },
        { href: "/services/web-development", label: "Custom software" },
        { href: "/services/mobile-app", label: "Mobile apps" },
        { href: "/services/ai-solution", label: "AI solutions" },
        { href: "/project-rescue", label: "Project rescue" },
        { href: "/enterprise", label: "Enterprise" },
        { href: "/gtm-engineering", label: "GTM engineering" },
        { href: "/ecommerce", label: "E-commerce" },
      ],
    },
    {
      title: "Proof & perspectives",
      text:
        "Outcomes and craft across industries, plus how we think about building products. Start with case studies or work samples, then dig into longer writing on the blog.",
      links: [
        { href: "/case-studies", label: "Case studies" },
        { href: "/work1", label: "Selected work" },
        { href: "/work2", label: "More projects" },
        { href: "/about", label: "About Baaz" },
        { href: "/blog", label: "Blog" },
        { href: "/services", label: "All services" },
      ],
    },
  ],
};

export const CONTACT_FAQ_ITEMS = [
  {
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We partner with early-stage teams who need velocity and with enterprise product groups that need dependable delivery, clear communication, and maintainable systems.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "Depending on the problem, we scope fixed deliverables, time-bound squads, or phased roadmaps. We will recommend the leanest option that still de-risks the build.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Yes. If you need mutual confidentiality before sharing details, mention it in your message and we will follow up with the right paperwork.",
  },
  {
    question: "Where are you based, and how do time zones work?",
    answer:
      "We collaborate asynchronously with clients worldwide—with overlapping hours for key reviews and decisions across the Americas, Europe, and Asia-Pacific. HQ is in Bengaluru, India, with a US office in Sheridan, Wyoming.",
  },
];
