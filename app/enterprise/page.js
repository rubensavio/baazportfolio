'use client';

import React from "react";
import dynamic from 'next/dynamic';
import EnterpriseHero from '../../components/EnterpriseHero/EnterpriseHero';
import EnterpriseSolutions from '../../components/EnterpriseSolutions/EnterpriseSolutions';
import EnterpriseBenefits from '../../components/EnterpriseBenefits/EnterpriseBenefits';

const Headroom = dynamic(() => import('react-headroom'), { ssr: false });
const Navbar = dynamic(() => import('../../components/Navbar/Navbar'), { ssr: false });
const FAQ = dynamic(() => import('../../components/FAQ/FAQ'), { ssr: false });
const EnterpriseCTA = dynamic(() => import('../../components/EnterpriseCTA/EnterpriseCTA'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer/Footer'), { ssr: false });

const enterpriseFaqs = [
  {
    question: "What is enterprise software development?",
    answer:
      "Enterprise software development is the process of designing, building, and maintaining large-scale software applications for organisations with complex requirements — including multi-department workflows, role-based access, regulatory compliance, legacy system integration, and high-availability infrastructure. It differs from standard software development in its emphasis on security, scalability, and governance.",
  },
  {
    question: "How much does enterprise custom software development cost?",
    answer:
      "Enterprise custom software typically costs $150,000–$1M+, depending on scope and complexity. A focused internal tool or portal runs $150,000–$400,000. A full enterprise platform with multiple user types, integrations, compliance, and scalability requirements can cost $400,000–$1M+. At Baaz, we phase delivery so you invest in the highest-value features first.",
  },
  {
    question: "What is the difference between a consulting firm and a product engineering agency?",
    answer:
      "A consulting firm (like McKinsey Digital or Deloitte) typically advises on strategy and may outsource implementation. A product engineering agency (like Baaz) owns the full lifecycle — strategy, design, development, and deployment. Product engineering agencies are better suited when you need a partner to ship production software, not just produce recommendations.",
  },
  {
    question: "How long does enterprise software development take?",
    answer:
      "Enterprise projects typically take 4–12 months from discovery to launch. Discovery and design take 4–8 weeks. Development runs 3–9 months depending on scope. The first usable release is usually within 10–14 weeks. We deliver in 2-week sprints with regular stakeholder demos, so you see progress continuously.",
  },
  {
    question: "What industries does Baaz serve for enterprise software?",
    answer:
      "Baaz builds enterprise software across FinTech (payments, banking, compliance), healthcare (patient portals, clinical tools, EHR integration), retail (e-commerce, omnichannel, inventory), and construction (project management, field apps, procurement). We've shipped over 100 products since 2018.",
  },
  {
    question: "How does Baaz handle security and compliance for enterprise projects?",
    answer:
      "We build security and compliance into the architecture from day one — not as an afterthought. This includes encryption at rest and in transit, role-based access controls, audit logging, SOC 2 compliance practices, and industry-specific standards (HIPAA for healthcare, PCI DSS for payments). We document security decisions and support audit processes.",
  },
  {
    question: "Can Baaz integrate with legacy enterprise systems?",
    answer:
      "Yes. We regularly integrate with legacy ERP systems (SAP, Oracle), CRM platforms (Salesforce), databases, and custom APIs. We use middleware, API gateways, and event-driven architecture to connect new applications with existing systems without disrupting operations. Legacy modernisation — either wrapping or gradually replacing old systems — is a core part of our enterprise practice.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: enterpriseFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Enterprise() {
  return (
    <div className="enterprise">
      <Headroom>
        <Navbar />
      </Headroom>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EnterpriseHero />
      <EnterpriseSolutions />
      <EnterpriseBenefits />
      <FAQ faqs={enterpriseFaqs} />
      <EnterpriseCTA />
      <Footer />
    </div>
  );
}
