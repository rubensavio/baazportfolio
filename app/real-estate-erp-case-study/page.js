import CaseStudyPageClient from "../../components/CaseStudyPageClient/CaseStudyPageClient";
import RealEstateErpCaseStudy from "../../components/RealEstateErpCaseStudy/RealEstateErpCaseStudy";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
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

const caseStudyBreadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Case studies", url: "/case-studies" },
  {
    name: "Real estate ERP modernization",
    url: "/real-estate-erp-case-study",
  },
];

export default function RealEstateErpCaseStudyPage() {
  return (
    <>
      <BreadcrumbScript items={caseStudyBreadcrumbs} />
      <CaseStudyPageClient
        className="work2 real-estate-erp-case-study-page"
        faqs={REAL_ESTATE_ERP_CASE_STUDY_FAQ_ITEMS}
        faqHeading={REAL_ESTATE_ERP_CASE_STUDY_FAQ_HEADING}
        faqSchema={faqSchema}
        crossLinks={{
          eyebrow: "More from Baaz",
          title: "Real estate operations & ERP playbooks",
          description:
            "Portfolio finance, tenancy operations, construction handoffs—see how ERP roadmaps intersect with bespoke software and phased delivery.",
          links: [
            {
              href: "/erp/real-estate-companies",
              label:
                "ERP for Real Estate Companies — modules, FAQs & integrations",
            },
            {
              href: "/erp/construction-companies",
              label: "ERP for Construction Companies — field-to-finance linkage",
            },
            {
              href: "/services/web-development",
              label: "Custom software for property & asset platforms",
            },
            {
              href: "/case-studies",
              label: "More proof from shipped programmes",
            },
          ],
        }}
      >
        <RealEstateErpCaseStudy />
      </CaseStudyPageClient>
    </>
  );
}
