"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
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

export default function ErpPageClient({ data }) {
  const erpSlug = data.slug;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [erpSlug]);

  const heroAlt = `ERP background for ${data.title}`;

  return (
    <div className="erp-page">
      <Headroom>
        <Navbar />
      </Headroom>

      {/* ── 1. Hero ── */}
      <section className="erp-hero">
        <div className="erp-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.webp"
            alt={heroAlt}
            className="erp-hero-bg-image"
            width={1200}
            height={600}
            loading="lazy"
          />
        </div>
        <div className="erp-hero-wrapper">
          <h1 className="erp-heading">{data.title}</h1>
          {data.heroSubtitle && (
            <p className="erp-hero-subtitle">{data.heroSubtitle}</p>
          )}
          <Link
            href="https://calendar.app.google/BBo3UYaic9yomaSo7"
            target="_blank"
            rel="noopener noreferrer"
            className="erp-hero-cta"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      {/* ── 2. Industry Challenges ── */}
      {data.challenges && data.challenges.length > 0 && (
        <section
          className="erp-challenges"
          aria-labelledby="erp-challenges-heading"
        >
          <div className="erp-section-container">
            <h2 id="erp-challenges-heading" className="erp-section-title">
              Industry Challenges
            </h2>
            <p className="erp-section-lead">
              Common pain points that drive {data.title.replace("ERP for ", "")}{" "}
              toward ERP adoption.
            </p>
            <div className="erp-challenges-grid">
              {data.challenges.map((item, i) => (
                <div key={i} className="erp-challenge-card">
                  <span className="erp-challenge-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="erp-challenge-title">{item.title}</h3>
                  <p className="erp-challenge-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. ERP Solution Features ── */}
      {data.solutionFeatures && data.solutionFeatures.length > 0 && (
        <section
          className="erp-features"
          aria-labelledby="erp-features-heading"
        >
          <div className="erp-section-container">
            <h2 id="erp-features-heading" className="erp-section-title">
              Your ERP Solution
            </h2>
            <p className="erp-section-lead">
              How Baaz configures ERP to address{" "}
              {data.title.replace("ERP for ", "").toLowerCase()} needs.
            </p>
            <div className="erp-features-grid">
              {data.solutionFeatures.map((item, i) => (
                <div key={i} className="erp-feature-card">
                  <div className="erp-feature-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="erp-feature-title">{item.title}</h3>
                  <p className="erp-feature-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Key Modules ── */}
      {data.keyModules && data.keyModules.length > 0 && (
        <section className="erp-modules" aria-labelledby="erp-modules-heading">
          <div className="erp-section-container">
            <h2 id="erp-modules-heading" className="erp-section-title">
              Key Modules
            </h2>
            <p className="erp-section-lead">
              Core ERP modules configured for{" "}
              {data.title.replace("ERP for ", "").toLowerCase()}.
            </p>
            <div className="erp-modules-grid">
              {data.keyModules.map((mod, i) => (
                <div key={i} className="erp-module-card">
                  <h3 className="erp-module-name">{mod.name}</h3>
                  <p className="erp-module-desc">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Benefits ── */}
      {data.benefits && data.benefits.length > 0 && (
        <section
          className="erp-benefits"
          aria-labelledby="erp-benefits-heading"
        >
          <div className="erp-section-container">
            <h2 id="erp-benefits-heading" className="erp-section-title">
              Benefits &amp; ROI
            </h2>
            <div className="erp-benefits-grid">
              {data.benefits.map((item, i) => (
                <div key={i} className="erp-benefit-card">
                  <h3 className="erp-benefit-title">{item.title}</h3>
                  <p className="erp-benefit-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Use Cases / Workflows ── */}
      {data.useCases && data.useCases.length > 0 && (
        <section
          className="erp-usecases"
          aria-labelledby="erp-usecases-heading"
        >
          <div className="erp-section-container">
            <h2 id="erp-usecases-heading" className="erp-section-title">
              Use Cases &amp; Workflows
            </h2>
            <div className="erp-usecases-list">
              {data.useCases.map((uc, i) => (
                <div key={i} className="erp-usecase-card">
                  <div className="erp-usecase-index">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="erp-usecase-content">
                    <h3 className="erp-usecase-title">{uc.title}</h3>
                    <p className="erp-usecase-desc">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related case study ── */}
      {data.caseStudyLink && (
        <section
          className="erp-case-study"
          aria-labelledby="erp-case-study-heading"
        >
          <div className="erp-section-container">
            <h2 id="erp-case-study-heading" className="erp-section-title">
              Case study
            </h2>
            {data.caseStudyLink.description && (
              <p className="erp-section-lead">{data.caseStudyLink.description}</p>
            )}
            <Link
              href={data.caseStudyLink.href}
              className="erp-case-study-cta"
            >
              {data.caseStudyLink.label}
              <span className="erp-case-study-cta-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* ── Related Services ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <div className="erp-related">
          <p className="erp-related-text">
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

      {/* ── FAQs ── */}
      {data.faqs && <FAQ faqs={data.faqs} />}

      {/* ── CTA (Book Demo) ── */}
      <CTA />
      <Footer />
    </div>
  );
}
