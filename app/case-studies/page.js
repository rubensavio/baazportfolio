"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  caseStudyHubItems,
  caseStudyHubFilters,
  FILTER_ALL,
} from "../../lib/caseStudiesData";
import "../blog/page.scss";
import "./case-studies-hub.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function CaseStudiesIndexPage() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const visibleItems = useMemo(() => {
    if (activeFilter === FILTER_ALL) return caseStudyHubItems;
    return caseStudyHubItems.filter((item) => item.filterKey === activeFilter);
  }, [activeFilter]);

  return (
    <div className="blog-index-page case-studies-hub-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="blog-index-hero">
        <div className="blog-index-hero-wrapper">
          <h1 className="blog-index-heading">Case studies</h1>
          <p className="blog-index-intro">
            Product outcomes and system design notes from Baaz: shipped platforms,
            measurable marketplace and engineering outcomes, plus architecture
            guides for technical evaluation. Exploring{" "}
            <Link href="/ecommerce">Amazon &amp; Flipkart growth</Link>,{" "}
            <Link href="/enterprise">enterprise delivery</Link>, or{" "}
            <Link href="/project-rescue">project rescue</Link>? Start here, then
            get in touch.
          </p>
        </div>
      </section>

      <div className="case-studies-hub-toolbar">
        <p className="case-studies-hub-toolbar-label" id="case-studies-filter-label">
          Filter by type
        </p>
        <div
          className="case-studies-hub-filters"
          role="group"
          aria-labelledby="case-studies-filter-label"
        >
          {caseStudyHubFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`case-studies-hub-filter${activeFilter === f.key ? " is-active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
              aria-pressed={activeFilter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-index-list case-studies-hub-list">
        {visibleItems.length === 0 ? (
          <p className="case-studies-hub-empty">No entries in this filter.</p>
        ) : (
          visibleItems.map((item) => (
            <article key={item.href} className="blog-index-card case-studies-hub-card">
              <Link href={item.href} className="blog-index-card-link">
                <span className="blog-index-card-type">{item.contentType}</span>
                {item.industryTags?.length ? (
                  <span className="case-studies-hub-tags">
                    {item.industryTags.join(" · ")}
                  </span>
                ) : null}
                <h2 className="blog-index-card-title">{item.title}</h2>
                <p className="blog-index-card-excerpt">{item.intro}</p>
                {item.metricSummary ? (
                  <p className="case-studies-hub-metric">
                    <strong>Outcomes focus:</strong> {item.metricSummary}
                  </p>
                ) : null}
              </Link>
            </article>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}
