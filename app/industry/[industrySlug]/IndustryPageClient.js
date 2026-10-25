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
import Reveal from "../../../components/Home/Reveal";
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

          {data.relatedCaseStudies && data.relatedCaseStudies.length > 0 && (
            <div className="industry-related">
              <p className="industry-related-text">
                Case studies:{" "}
                {data.relatedCaseStudies.map((cs, index) => (
                  <span key={cs.href}>
                    {index > 0 && ", "}
                    <Link href={cs.href}>{cs.label}</Link>
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
                  - including{" "}
                  <Link href={erpIndustryDeepLink.href}>
                    {erpIndustryDeepLink.label}
                  </Link>
                </>
              ) : null}
              .
            </p>
          </div>

          {data.capabilities && data.capabilities.length > 0 && (
            <section
              className="industry-capabilities"
              aria-labelledby="industry-capabilities-heading"
            >
              <h2
                id="industry-capabilities-heading"
                className="industry-capabilities-heading"
              >
                {data.capabilitiesHeading || "What we build"}
              </h2>
              <div className="industry-capabilities-grid">
                {data.capabilities.map((item, index) => {
                  const inner = (
                    <>
                      <span
                        className="industry-capability-index"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="industry-capability-title">
                        {item.title}
                      </h3>
                      <p className="industry-capability-description">
                        {item.description}
                      </p>
                      {item.href && (
                        <span
                          className="industry-capability-more"
                          aria-hidden="true"
                        >
                          Learn more <ArrowLinkIcon />
                        </span>
                      )}
                    </>
                  );
                  return (
                    <Reveal
                      as="article"
                      className={`industry-capability${
                        item.href ? " industry-capability--linked" : ""
                      }`}
                      key={item.title}
                      delay={index * 0.05}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="industry-capability-link"
                          aria-label={item.title}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <div className="industry-capability-static">{inner}</div>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </section>
          )}

          {data.proof && (
            <section
              className="industry-proof"
              aria-labelledby="industry-proof-heading"
            >
              <Reveal className="industry-proof-copy">
                {data.proof.eyebrow && (
                  <span className="industry-proof-eyebrow">
                    {data.proof.eyebrow}
                  </span>
                )}
                <h2 id="industry-proof-heading" className="industry-proof-title">
                  {data.proof.title}
                </h2>
                <p className="industry-proof-description">
                  {data.proof.description}
                </p>
                {data.proof.href && (
                  <Link
                    href={data.proof.href}
                    className="v2-arrow-link industry-proof-link"
                  >
                    {data.proof.label || "Read the case study"} <ArrowLinkIcon />
                  </Link>
                )}
              </Reveal>
              {data.proof.metrics && data.proof.metrics.length > 0 && (
                <dl className="industry-proof-metrics">
                  {data.proof.metrics.map((metric, index) => (
                    <Reveal
                      as="div"
                      className="industry-proof-metric"
                      key={metric.label}
                      delay={0.1 + index * 0.06}
                    >
                      <dt className="industry-proof-metric-label">
                        {metric.label}
                      </dt>
                      <dd className="industry-proof-metric-value">
                        {metric.value}
                      </dd>
                    </Reveal>
                  ))}
                </dl>
              )}
            </section>
          )}

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
