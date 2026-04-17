import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import HealthcarePatientAppCaseStudy from "../../components/HealthcarePatientAppCaseStudy/HealthcarePatientAppCaseStudy";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
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

export default function HealthcarePatientAppCaseStudyPage() {
  return (
    <div className="work2 healthcare-patient-app-case-study-page">
      <ClientNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HealthcarePatientAppCaseStudy />
      <FAQ
        faqs={HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_ITEMS}
        heading={HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_HEADING}
      />
      <Footer />
    </div>
  );
}
