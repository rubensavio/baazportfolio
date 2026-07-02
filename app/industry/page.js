import IndustryHubPageClient from "../../components/IndustryHubPageClient/IndustryHubPageClient";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

const industryFaqs = [
  {
    question: "Which industries does Baaz serve?",
    answer:
      "Baaz builds sector-specific software for industries including FinTech, construction, retail, and healthcare, along with other regulated and operations-heavy sectors. Each industry guide explains how Baaz works in that sector, what it builds, the related services and ERP cross-links, and the FAQs procurement and evaluation teams typically ask early.",
  },
  {
    question: "How does Baaz tailor software to a specific industry?",
    answer:
      "Each engagement accounts for the sector's compliance requirements, workflows, integrations, and delivery patterns rather than applying a one-size-fits-all template. The result is software shaped around how regulated and operations-heavy teams actually run - from FinTech and healthcare to construction and retail - so it fits real processes and constraints.",
  },
  {
    question: "Does Baaz have experience with regulated, compliance-heavy sectors?",
    answer:
      "Yes. Baaz ships compliant, scalable products for regulated and operations-heavy sectors such as FinTech and healthcare, where security, auditability, and workflow accuracy are essential. Industry guides outline how compliance and integrations are handled for each sector so evaluation teams can assess fit early.",
  },
  {
    question: "How long has Baaz been building industry software?",
    answer:
      "Baaz has been delivering custom software and product engineering for industry teams since 2018. Over that time it has developed sector-specific delivery patterns across FinTech, retail, healthcare, construction, and more, which inform the playbooks and FAQs in each industry guide.",
  },
  {
    question: "Where should I start when evaluating Baaz for my industry?",
    answer:
      "Choose your industry to see how Baaz works, what it builds, related services, ERP cross-links, and common FAQs. Once a guide matches your evaluation, you can brief the squad or schedule a call to bring the same delivery discipline to your roadmap.",
  },
];

const industryFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: industryFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function IndustryHubPage() {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industry" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industryFaqSchema) }}
      />
      <IndustryHubPageClient />
    </>
  );
}
