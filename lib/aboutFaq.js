/**
 * About page FAQ - copy must match visible FAQ and FAQPage JSON-LD in app/about/layout.js.
 */
import {
  BRAND_POSITIONING_COMBINED,
  BRAND_SCOPE_LINE,
} from "./brandPositioning";
import { US_ADDRESS_LINE } from "./companyAddresses";

export const ABOUT_FAQ_ITEMS = [
  {
    question: "What is Baaz?",
    answer:
      `Baaz is a ${BRAND_POSITIONING_COMBINED} ${BRAND_SCOPE_LINE}, serving product and engineering teams across 26+ countries since 2018. Baaz has generated $2B in business value for customers across FinTech, retail, healthcare, and 10 other industries.`,
  },
  {
    question: "What does Baaz mean by product-led delivery?",
    answer:
      "Product-led delivery means each engagement is organized around measurable product outcomes-scoped releases, named milestones, and written acceptance criteria-rather than only staffing hours. Strategy, design, engineering, and post-launch iteration are handled as one continuous product effort when clients need that depth.",
  },
  {
    question: "Does Baaz work with clients outside India?",
    answer: `Yes. Baaz is headquartered in Bangalore (Bengaluru), Karnataka, India, with a US office at ${US_ADDRESS_LINE}, and routinely collaborates with teams in other regions using remote-first rituals: shared boards, regular demos, and direct access to engineers on the build.`,
  },
  {
    question: "What should I read before engaging Baaz?",
    answer:
      "Start with the homepage and service pages for scope boundaries, the blog for longer guides on vendors and delivery, and /get-in-touch or /book-call to align on timeline and fit. Baaz states typical out-of-scope items (such as full SAP or Oracle ERP rollouts) up front so procurement can compare options fairly.",
  },
];
