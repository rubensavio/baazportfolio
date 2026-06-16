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
import { selectedWorkData } from "../../lib/selectedWorkData";
import "./CaseStudyDetailClient.scss";

export default function CaseStudyDetailClient({ slug }) {
  const data = selectedWorkData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return null;

  return (
    <div className="baaz-v2 case-study-v2">
      <ClientNavbar />

      <div className="v2-wrap cs-back-wrap">
        <Link href="/case-studies" className="cs-back v2-arrow-link">
          <ArrowBackIcon className="cs-back-icon" />
          All case studies
        </Link>
      </div>

      <main className="cs-main v2-wrap">
        <header className="cs-hero">
          <p className="v2-label cs-eyebrow">
            {data.client} · {data.industry}
          </p>
          <h1 className="cs-title">{data.title}</h1>
          <p className="cs-summary">{data.summary}</p>
        </header>

        <section className="cs-results" aria-label="Results">
          {data.results.map((result) => (
            <div key={result.label} className="cs-result">
              <span className="cs-result-value">{result.value}</span>
              <span className="cs-result-label">{result.label}</span>
            </div>
          ))}
        </section>

        <section className="cs-section" aria-labelledby="cs-challenge-heading">
          <h2 id="cs-challenge-heading" className="cs-section-heading">
            The challenge
          </h2>
          <p className="cs-section-body">{data.challenge}</p>
        </section>

        <section className="cs-section" aria-labelledby="cs-approach-heading">
          <h2 id="cs-approach-heading" className="cs-section-heading">
            What we built
          </h2>
          <div className="cs-approach-grid">
            {data.approach.map((item) => (
              <article key={item.title} className="cs-approach-card">
                <h3 className="cs-approach-title">{item.title}</h3>
                <p className="cs-approach-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {data.stack && data.stack.length > 0 && (
          <section className="cs-section" aria-labelledby="cs-stack-heading">
            <h2 id="cs-stack-heading" className="cs-section-heading">
              Tech stack
            </h2>
            <ul className="cs-stack">
              {data.stack.map((tool) => (
                <li key={tool} className="cs-stack-item">
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="cs-closing">
          <p className="cs-closing-note">
            Anonymised, representative engagement. Want results like these?{" "}
            <Link href="/get-in-touch">Brief the Baaz squad</Link> or browse{" "}
            <Link href="/case-studies">more case studies</Link>.
          </p>
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
