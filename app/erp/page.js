import ErpHubPageClient from "../../components/ErpHubPageClient/ErpHubPageClient";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

const erpFaqs = [
  {
    question: "What industries does Baaz build ERP and CRM systems for?",
    answer:
      "Baaz builds industry-specific ERP and CRM systems for insurers, banks, manufacturers, healthcare providers, logistics operators, real estate firms, education and training companies, and more. Each sector guide covers typical pain points, core modules, rollout patterns, integrations, and FAQs, so teams start from playbooks tailored to their workflows rather than generic software.",
  },
  {
    question: "Does Baaz build custom CRM as well as ERP?",
    answer:
      "Yes. Alongside ERP, Baaz designs and builds custom CRM platforms, scoped CRM modules inside ERP and operations systems, and CRM integrations. That spans pipelines, contacts, deal tracking, tickets, messaging, and helpdesk - built around how a team actually sells and works, and integrated with Salesforce, HubSpot, or custom CRMs already in the stack.",
  },
  {
    question: "How does Baaz approach ERP rollout and migration?",
    answer:
      "Baaz applies the same delivery discipline to discovery, migration, and phased go-live. Rather than a single big-bang switch, rollouts are sequenced so core modules land first and data migrates safely, reducing operational risk for sectors where downtime and data integrity directly affect customers and compliance.",
  },
  {
    question: "Can a new ERP integrate with our existing systems?",
    answer:
      "Yes. Baaz builds ERP and CRM that integrate with existing products, data sources, and third-party platforms so records stay consistent across teams. Each industry guide details the integrations that matter for that sector, keeping the new system connected to the tools and data your operations already depend on.",
  },
  {
    question: "Where should I start if I'm evaluating an ERP build?",
    answer:
      "Start with the sector guide that matches your rollout - each covers typical challenges, core modules, benefits, workflows, and cross-links to related services and case studies. From there you can brief the Baaz squad or schedule a call to bring the same delivery discipline to your discovery, migration, and go-live.",
  },
];

const erpFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: erpFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ErpHubPage() {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "ERP Solutions", url: "/erp" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(erpFaqSchema) }}
      />
      <ErpHubPageClient />
    </>
  );
}
