import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import EducationTrainingPortalCaseStudy from "../../components/EducationTrainingPortalCaseStudy/EducationTrainingPortalCaseStudy";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import {
  EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_HEADING,
  EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_ITEMS,
} from "./faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EducationTrainingPortalCaseStudyPage() {
  return (
    <div className="work2 education-training-portal-case-study-page">
      <ClientNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EducationTrainingPortalCaseStudy />
      <FAQ
        faqs={EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_ITEMS}
        heading={EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_HEADING}
      />
      <Footer />
    </div>
  );
}
