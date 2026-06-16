import CaseStudyPageClient from "../../components/CaseStudyPageClient/CaseStudyPageClient";
import EducationTrainingPortalCaseStudy from "../../components/EducationTrainingPortalCaseStudy/EducationTrainingPortalCaseStudy";
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
    <>
      <BreadcrumbScript items={caseStudyBreadcrumbs} />
      <CaseStudyPageClient
        className="work2 education-training-portal-case-study-page"
        faqs={EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_ITEMS}
        faqHeading={EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_HEADING}
        faqSchema={faqSchema}
        crossLinks={{
          eyebrow: "More from Baaz",
          title: "Connect this LMS story to ERP & programmes",
          description:
            "Many education teams pair learner-facing portals with back-office ERP, finance integrations, and long-lifecycle roadmap planning-browse the adjacent pillars below.",
          links: [
            {
              href: "/erp/education-training-companies",
              label:
                "ERP for Education & Training Companies - rollout patterns & FAQs",
            },
            {
              href: "/services/web-development",
              label: "Custom web portals & LMS ecosystems",
            },
            {
              href: "/enterprise",
              label: "Enterprise digital transformation engagements",
            },
            {
              href: "/blog/product-engineering-process-for-enterprises",
              label: "Enterprise product engineering process",
            },
          ],
        }}
      >
        <EducationTrainingPortalCaseStudy />
      </CaseStudyPageClient>
    </>
  );
}
