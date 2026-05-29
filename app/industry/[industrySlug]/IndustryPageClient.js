"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowBackIcon,
  ArrowLinkIcon,
} from "../../../components/icons/ArrowIcons";
import ClientNavbar from "../../../components/ClientNavbar/ClientNavbar";
import FAQ from "../../../components/FAQ/FAQ";
import Footer from "../../../components/Footer/Footer";
import { HOME_CTA } from "../../../lib/homePageData";
import "../../../components/IndustryPageClient/IndustryPageClient.scss";
import "./page.scss";

export default function IndustryPageClient({
  data,
  erpIndustryDeepLink = null,
}) {
  const industrySlug = data.slug;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industrySlug]);

  return (
    <div className="baaz-v2 industry-v2">
      <ClientNavbar />

      <div className="v2-wrap industry-back-wrap">
        <Link href="/industry" className="industry-back v2-arrow-link">
          <ArrowBackIcon className="industry-back-icon" />
          All industries
        </Link>
      </div>

      <main className="industry-main">
        <div className="industry-page">
          <section className="industry-hero">
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
                {data.relatedServices.map((service, index) => (
                  <span key={service.slug}>
                    {index > 0 && ", "}
                    <Link href={`/services/${service.slug}`}>{service.label}</Link>
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
                key={section.heading}
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
                    {section.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="industry-section-paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {data.faqs && (
            <div className="v2-faq">
              <FAQ faqs={data.faqs} heading="Common questions" />
            </div>
          )}

          <section className="industry-closing v2-wrap">
            <p className="industry-closing-text">
              Ready to scope your sector build?{" "}
              <Link href="/get-in-touch">Brief the Baaz squad</Link> or browse{" "}
              <Link href="/industry">more industry guides</Link>.
            </p>
            <div className="industry-closing-cta">
              <p className="industry-closing-sub">{HOME_CTA.sub}</p>
              <div className="v2-cta-actions">
                <Link
                  href={HOME_CTA.briefHref}
                  className="v2-arrow-link v2-arrow-link--light v2-cta-brief-link"
                >
                  Get in touch <ArrowLinkIcon />
                </Link>
                <Link
                  href={HOME_CTA.callHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-arrow-link v2-arrow-link--light v2-cta-call-link"
                >
                  Schedule a call <ArrowLinkIcon />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
