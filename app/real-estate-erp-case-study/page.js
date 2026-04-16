import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import RealEstateErpCaseStudy from "../../components/RealEstateErpCaseStudy/RealEstateErpCaseStudy";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import {
  REAL_ESTATE_ERP_CASE_STUDY_FAQ_HEADING,
  REAL_ESTATE_ERP_CASE_STUDY_FAQ_ITEMS,
} from "./faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: REAL_ESTATE_ERP_CASE_STUDY_FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RealEstateErpCaseStudyPage() {
  return (
    <div className="work2 real-estate-erp-case-study-page">
      <ClientNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RealEstateErpCaseStudy />
      <FAQ
        faqs={REAL_ESTATE_ERP_CASE_STUDY_FAQ_ITEMS}
        heading={REAL_ESTATE_ERP_CASE_STUDY_FAQ_HEADING}
      />
      <Footer />
    </div>
  );
}
