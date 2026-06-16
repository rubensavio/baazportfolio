import CaseStudyPageClient from "../../components/CaseStudyPageClient/CaseStudyPageClient";
import HealthcarePatientAppCaseStudy from "../../components/HealthcarePatientAppCaseStudy/HealthcarePatientAppCaseStudy";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import {
  HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_HEADING,
  HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_ITEMS,
} from "./faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const caseStudyBreadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Case studies", url: "/case-studies" },
  {
    name: "Healthcare patient access app",
    url: "/healthcare-patient-app-case-study",
  },
];

export default function HealthcarePatientAppCaseStudyPage() {
  return (
    <>
      <BreadcrumbScript items={caseStudyBreadcrumbs} />
      <CaseStudyPageClient
        className="work2 healthcare-patient-app-case-study-page"
        faqs={HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_ITEMS}
        faqHeading={HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_HEADING}
        faqSchema={faqSchema}
        crossLinks={{
          eyebrow: "More from Baaz",
          title: "Adjacent guides for healthcare builders",
          description:
            "Connect this product story with sector ERP context, bespoke software engagements, and the regulated delivery patterns teams usually review in parallel.",
          links: [
            {
              href: "/erp/healthcare-companies",
              label: "ERP for Healthcare Companies - rollout modules & FAQs",
            },
            {
              href: "/industry/healthcare",
              label: "Healthcare software engagements & compliance posture",
            },
            {
              href: "/services/web-development",
              label: "Custom web & integrations for regulated stacks",
            },
            {
              href: "/services/mobile-app",
              label: "Mobile patient experience squads",
            },
          ],
        }}
      >
        <HealthcarePatientAppCaseStudy />
      </CaseStudyPageClient>
    </>
  );
}
