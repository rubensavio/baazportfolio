import CaseStudiesPageClient from "../../components/CaseStudiesPageClient/CaseStudiesPageClient";
import FaqJsonLd from "../../components/FaqJsonLd";

const CASE_STUDIES_FAQS = [
  {
    question: "What kind of case studies does Baaz publish?",
    answer:
      "Baaz publishes detailed product engineering case studies across manufacturing AI, hiring automation, BFSI and NRI banking, healthcare, logistics, and D2C commerce - covering the problem, approach, architecture, and measurable outcomes for each engagement.",
  },
  {
    question: "Are these real client projects?",
    answer:
      "Yes. Each case study reflects real systems Baaz designed and shipped since 2018. Some are presented with named clients; others are anonymised at the client's request while keeping the technical approach and results accurate.",
  },
  {
    question: "How do I start a project like these with Baaz?",
    answer:
      "Book a free call or get in touch with the Baaz team. We start by understanding your goals and constraints, then propose a phased plan covering strategy, design, build, and launch.",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <FaqJsonLd items={CASE_STUDIES_FAQS} />
      <CaseStudiesPageClient />
    </>
  );
}
