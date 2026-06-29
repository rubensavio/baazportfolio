"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowBackIcon,
  ArrowLinkIcon,
} from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import { HOME_CTA } from "../../lib/homePageData";
import { VISION_INTELLIGENCE_CASE_STUDY as cs } from "../../lib/visionIntelligenceCaseStudy";
import "./VisionIntelligenceCaseStudy.scss";

export default function VisionIntelligenceCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="baaz-v2 vi-casestudy">
      <ClientNavbar />

      <div className="v2-wrap vi-cs-back-wrap">
        <Link
          href="/technologies/vision-intelligence"
          className="vi-cs-back v2-arrow-link"
        >
          <ArrowBackIcon className="vi-cs-back-icon" />
          Vision Intelligence
        </Link>
      </div>

      <main className="vi-cs-main v2-wrap">
        <header className="vi-cs-hero">
          <span className="vi-cs-label">{cs.label}</span>
          <h1 className="vi-cs-title">{cs.title}</h1>
          <p className="vi-cs-summary">{cs.summary}</p>
        </header>

        <section className="vi-cs-metrics" aria-label="Key results">
          {cs.metrics.map((m) => (
            <div className="vi-cs-metric" key={m.label}>
              <span className="vi-cs-metric-val">{m.value}</span>
              <span className="vi-cs-metric-label">{m.label}</span>
            </div>
          ))}
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-overview-heading">
          <h2 id="vi-cs-overview-heading" className="vi-cs-section-heading">
            Overview
          </h2>
          <p className="vi-cs-body">{cs.overview}</p>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-workflow-heading">
          <h2 id="vi-cs-workflow-heading" className="vi-cs-section-heading">
            How it works
          </h2>
          <div className="vi-cs-grid vi-cs-grid--four">
            {cs.workflow.map((step) => (
              <article className="vi-cs-card" key={step.title}>
                <span className="vi-cs-card-num">{step.step}</span>
                <h3 className="vi-cs-card-title">{step.title}</h3>
                <p className="vi-cs-card-desc">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-capabilities-heading">
          <h2 id="vi-cs-capabilities-heading" className="vi-cs-section-heading">
            Platform capabilities
          </h2>
          <div className="vi-cs-grid">
            {cs.capabilities.map((cap) => (
              <article className="vi-cs-card" key={cap.title}>
                <h3 className="vi-cs-card-title">{cap.title}</h3>
                <p className="vi-cs-card-desc">{cap.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-modules-heading">
          <h2 id="vi-cs-modules-heading" className="vi-cs-section-heading">
            Inside the platform
          </h2>
          <div className="vi-cs-grid">
            {cs.modules.map((mod) => (
              <article className="vi-cs-card" key={mod.title}>
                <h3 className="vi-cs-card-title">{mod.title}</h3>
                <p className="vi-cs-card-desc">{mod.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-usecases-heading">
          <h2 id="vi-cs-usecases-heading" className="vi-cs-section-heading">
            Where it's used
          </h2>
          <div className="vi-cs-grid vi-cs-grid--two">
            {cs.useCases.map((uc) => (
              <article className="vi-cs-card" key={uc.title}>
                <h3 className="vi-cs-card-title">{uc.title}</h3>
                <p className="vi-cs-card-desc">{uc.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vi-cs-section" aria-labelledby="vi-cs-formats-heading">
          <h2 id="vi-cs-formats-heading" className="vi-cs-section-heading">
            Exports to every major training format
          </h2>
          <ul className="vi-cs-formats">
            {cs.exportFormats.map((f) => (
              <li key={f} className="vi-cs-format">
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="vi-cs-closing">
          <p className="vi-cs-closing-sub">
            Have a vision-intelligence problem in mind? Tell us what you want to
            build - we'll tell you how fast we can ship it and what it'll cost.
          </p>
          <div className="v2-cta-actions">
            <Link
              href={HOME_CTA.briefHref}
              className="v2-arrow-link v2-arrow-link--light"
            >
              Get in touch <ArrowLinkIcon />
            </Link>
            <Link
              href={HOME_CTA.callHref}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-arrow-link v2-arrow-link--light"
            >
              Schedule a call <ArrowLinkIcon />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
