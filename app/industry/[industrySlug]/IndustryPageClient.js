"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import ClientNavbar from "../../../components/ClientNavbar/ClientNavbar";
import FAQ from "../../../components/FAQ/FAQ";
import CTA from "../../../components/CTA/CTA";
import Footer from "../../../components/Footer/Footer";
import "./page.scss";

export default function IndustryPageClient({
  data,
  erpIndustryDeepLink = null,
}) {
  const industrySlug = data.slug;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industrySlug]);

  const heroAlt = `Soft gradient hero background for Baaz ${data.title} industry software page`;

  return (
    <div className="industry-page">
      <ClientNavbar />

      <section className="industry-hero">
        <div className="industry-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.webp"
            alt={heroAlt}
            className="industry-hero-bg-image"
            width={1200}
            height={600}
            loading="lazy"
          />
        </div>
        <div className="industry-hero-wrapper">
          <h1 className="industry-heading">{data.title}</h1>
          {data.directAnswer && (
            <p className="industry-direct-answer">{data.directAnswer}</p>
          )}
          {data.definition && (
            <p className="industry-definition">{data.definition}</p>
          )}
          <p className="industry-intro">{data.intro}</p>
        </div>
      </section>

      {data.relatedServices && data.relatedServices.length > 0 && (
        <div className="industry-related">
          <p className="industry-related-text">
            Related services:{" "}
            {data.relatedServices.map((s, i) => (
              <span key={s.slug}>
                {i > 0 && ", "}
                <Link href={`/services/${s.slug}`}>{s.label}</Link>
              </span>
            ))}
          </p>
        </div>
      )}

      <div className="industry-erp-cross">
        <p className="industry-erp-cross-text">
          <strong>ERP & operations:</strong>{" "}
          <Link href="/erp">Industry-specific ERP implementations</Link>
          {erpIndustryDeepLink ? (
            <>
              {" "}
              — including{" "}
              <Link href={erpIndustryDeepLink.href}>
                {erpIndustryDeepLink.label}
              </Link>
            </>
          ) : null}
          .
        </p>
      </div>

      <div className="industry-sections">
        {data.sections.map((section, index) => (
          <section
            key={index}
            className="industry-section"
            aria-labelledby={`industry-section-${index}`}
          >
            <div className="industry-section-wrapper">
              <h2
                id={`industry-section-${index}`}
                className="industry-section-heading"
              >
                {section.heading}
              </h2>
              <div className="industry-section-body">
                {section.body.map((paragraph, pIndex) => (
                  <p key={pIndex} className="industry-section-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {data.faqs && <FAQ faqs={data.faqs} />}

      <CTA />
      <Footer />
    </div>
  );
}
