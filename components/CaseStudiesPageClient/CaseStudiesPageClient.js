"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import Reveal from "../Home/Reveal";
import {
  caseStudyHubFilters,
  caseStudyHubItems,
  FILTER_ALL,
} from "../../lib/caseStudiesData";
import { CASE_STUDIES_HUB } from "../../lib/caseStudyHubPageData";
import "./CaseStudiesPageClient.scss";

function getCaseStudyInitials(title) {
  return (title || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

export default function CaseStudiesPageClient() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const filteredItems = useMemo(() => {
    if (activeFilter === FILTER_ALL) return caseStudyHubItems;
    return caseStudyHubItems.filter((item) => item.filterKey === activeFilter);
  }, [activeFilter]);

  const featuredItem = filteredItems[0];
  const listItems = filteredItems.slice(1);

  return (
    <div className="baaz-v2 case-studies-v2">
      <ClientNavbar />

      <section className="cs-hero" aria-label="Case studies">
        <div className="v2-wrap">
          <Reveal className="cs-hero-inner">
            <h1 className="cs-hero-title v2-display">{CASE_STUDIES_HUB.title}</h1>
            <div className="cs-hero-right">
              <p className="cs-hero-direct">{CASE_STUDIES_HUB.direct}</p>
              <p className="cs-hero-intro">{CASE_STUDIES_HUB.intro}</p>
              <p className="cs-hero-count v2-label">{CASE_STUDIES_HUB.countLabel}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="v2-wrap">
        <section className="cs-topic-intro" aria-labelledby="cs-topic-heading">
          <Reveal>
            <h2 id="cs-topic-heading" className="cs-topic-heading v2-display">
              Which proof matches your evaluation?
            </h2>
            <p className="cs-topic-lede">
              Filter by shipped programmes or architecture deep-dives. Each entry
              links to a full narrative with outcomes, stack context, and next
              steps for your team.
            </p>
          </Reveal>
        </section>

        <div className="cs-filter-bar" role="tablist" aria-label="Filter case studies">
          {caseStudyHubFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.key}
              className={`cs-filter-btn${activeFilter === filter.key ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {featuredItem && (
          <Reveal>
            <Link href={featuredItem.href} className="cs-featured">
              <div className="cs-featured-visual">
                <span className="cs-featured-initials v2-display">
                  {getCaseStudyInitials(featuredItem.title)}
                </span>
              </div>
              <div className="cs-featured-body">
                <span className="cs-featured-tag v2-label">
                  {featuredItem.contentType}
                  {featuredItem.industryTags?.length
                    ? ` · ${featuredItem.industryTags[0]}`
                    : ""}
                </span>
                <h2 className="cs-featured-title v2-display">{featuredItem.title}</h2>
                <p className="cs-featured-desc">{featuredItem.intro}</p>
                {featuredItem.metricSummary && (
                  <p className="cs-featured-metric">
                    <span className="v2-label">Outcomes focus</span>{" "}
                    {featuredItem.metricSummary}
                  </p>
                )}
              </div>
            </Link>
          </Reveal>
        )}

        <div className="cs-list">
          {listItems.length === 0 && !featuredItem ? (
            <p className="cs-empty">No entries in this filter.</p>
          ) : (
            listItems.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.03}>
                <Link href={item.href} className="cs-article-item">
                  <div className="cs-article-meta">
                    <span className="cs-article-type v2-label">
                      {item.contentType}
                    </span>
                    {item.industryTags?.length ? (
                      <span className="cs-article-tags">
                        {item.industryTags.join(" · ")}
                      </span>
                    ) : null}
                  </div>
                  <div className="cs-article-content">
                    <h3 className="cs-article-title v2-display">{item.title}</h3>
                    {item.metricSummary && (
                      <p className="cs-article-metric">{item.metricSummary}</p>
                    )}
                  </div>
                  <ArrowUpRightIcon className="cs-article-arrow" />
                </Link>
              </Reveal>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
