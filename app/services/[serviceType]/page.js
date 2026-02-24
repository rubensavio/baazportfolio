"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { servicesData } from "../../../lib/servicesData";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../../../components/FAQ/FAQ"), {
  ssr: false,
});
const CTA = dynamic(() => import("../../../components/CTA/CTA"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../../components/Footer/Footer"), {
  ssr: false,
});

export default function Services() {
  const params = useParams();
  const serviceType = params?.serviceType;
  const serviceData =
    servicesData[serviceType] || servicesData["product-strategy"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  const faqSchema = serviceData.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: serviceData.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="services-page">
      <Headroom>
        <Navbar />
      </Headroom>

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="services-hero">
        <div className="services-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.svg"
            alt="Services background"
            className="services-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="services-hero-wrapper">
          <div className="services-header">
            <span className="services-label">{serviceData.label}</span>
            <h1 className="services-heading">{serviceData.heading}</h1>
            <p className="services-description">{serviceData.description}</p>
          </div>

          {serviceData.definition && (
            <p className="services-definition">{serviceData.definition}</p>
          )}

          <h2 className="services-section-heading">
            {serviceData.sectionHeading || "What we deliver"}
          </h2>
          <div className="service-cards-grid">
            {serviceData.services.map((service, index) => (
              <div key={index} className="service-info-card">
                <h3 className="service-info-title">{service.title}</h3>
                <p className="service-info-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {serviceData.industryLinks && serviceData.industryLinks.length > 0 && (
          <div className="services-related">
            <p className="services-related-text">
              We build for{" "}
              {serviceData.industryLinks.map((ind, i) => (
                <span key={ind.slug}>
                  {i > 0 && ", "}
                  <Link href={`/industry/${ind.slug}`}>{ind.label}</Link>
                </span>
              ))}
              .
            </p>
          </div>
        )}
      </section>

      {serviceData.faqs && (
        <FAQ faqs={serviceData.faqs} />
      )}

      <CTA />
      <Footer />
    </div>
  );
}
