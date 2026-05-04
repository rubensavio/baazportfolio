import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import HealthcarePatientAppCaseStudy from "../../components/HealthcarePatientAppCaseStudy/HealthcarePatientAppCaseStudy";
import CaseStudyCrossLinks from "../../components/CaseStudyCrossLinks/CaseStudyCrossLinks";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
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
    <div className="work2 healthcare-patient-app-case-study-page">
      <BreadcrumbScript items={caseStudyBreadcrumbs} />
      <ClientNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HealthcarePatientAppCaseStudy />
      <CaseStudyCrossLinks
        eyebrow="More from Baaz"
        title="Adjacent guides for healthcare builders"
        description="Connect this product story with sector ERP context, bespoke software engagements, and the regulated delivery patterns teams usually review in parallel."
        links={[
          {
            href: "/erp/healthcare-companies",
            label: "ERP for Healthcare Companies — rollout modules & FAQs",
          },
          {
            href: "/industry/healthcare",
            label: "Healthcare software engagements & compliance posture",
          },
          {
            href: "/services/web-development",
            label: "Custom web & integrations for regulated stacks",
          },
          { href: "/services/mobile-app", label: "Mobile patient experience squads" },
        ]}
      />
      <FAQ
        faqs={HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_ITEMS}
        heading={HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_HEADING}
      />
      <Footer />
    </div>
  );
}
