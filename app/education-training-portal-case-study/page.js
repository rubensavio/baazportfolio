import React from "react";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import EducationTrainingPortalCaseStudy from "../../components/EducationTrainingPortalCaseStudy/EducationTrainingPortalCaseStudy";
import CaseStudyCrossLinks from "../../components/CaseStudyCrossLinks/CaseStudyCrossLinks";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
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

const caseStudyBreadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Case studies", url: "/case-studies" },
  {
    name: "Education training portal rollout",
    url: "/education-training-portal-case-study",
  },
];

export default function EducationTrainingPortalCaseStudyPage() {
  return (
    <div className="work2 education-training-portal-case-study-page">
      <BreadcrumbScript items={caseStudyBreadcrumbs} />
      <ClientNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EducationTrainingPortalCaseStudy />
      <CaseStudyCrossLinks
        eyebrow="More from Baaz"
        title="Connect this LMS story to ERP & programmes"
        description="Many education teams pair learner-facing portals with back-office ERP, finance integrations, and long-lifecycle roadmap planning—browse the adjacent pillars below."
        links={[
          {
            href: "/erp/education-training-companies",
            label:
              "ERP for Education & Training Companies — rollout patterns & FAQs",
          },
          {
            href: "/services/web-development",
            label: "Custom web portals & LMS ecosystems",
          },
          {
            href: "/enterprise",
            label: "Enterprise digital transformation engagements",
          },
          { href: "/blog/product-engineering-process-for-enterprises", label: "Enterprise product engineering process" },
        ]}
      />
      <FAQ
        faqs={EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_ITEMS}
        heading={EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_HEADING}
      />
      <Footer />
    </div>
  );
}
