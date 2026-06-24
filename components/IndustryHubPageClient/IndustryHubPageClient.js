"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import Reveal from "../Home/Reveal";
import {
  industryHubFilters,
  industryHubItems,
  FILTER_ALL,
} from "../../lib/industryHubData";
import { INDUSTRY_HUB } from "../../lib/industryHubPageData";
import "./IndustryHubPageClient.scss";

function getIndustryInitials(title) {
  return (title || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

export default function IndustryHubPageClient() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const filteredItems = useMemo(() => {
    if (activeFilter === FILTER_ALL) return industryHubItems;
    return industryHubItems.filter((item) => item.sector === activeFilter);
  }, [activeFilter]);

  const featuredItem = filteredItems[0];
  const listItems = filteredItems.slice(1);

  return (
    <div className="baaz-v2 industry-hub-v2">
      <ClientNavbar />

      <section className="ind-hub-hero" aria-label="Industries">
        <div className="v2-wrap">
          <Reveal className="ind-hub-hero-inner">
            <h1 className="ind-hub-hero-title v2-display">{INDUSTRY_HUB.title}</h1>
            <div className="ind-hub-hero-right">
              <p className="ind-hub-hero-direct">{INDUSTRY_HUB.direct}</p>
              <p className="ind-hub-hero-intro">{INDUSTRY_HUB.intro}</p>
              <p className="ind-hub-hero-count v2-label">{INDUSTRY_HUB.countLabel}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="v2-wrap">
        <section className="ind-hub-topic-intro" aria-labelledby="ind-hub-topic-heading">
          <Reveal>
            <h2 id="ind-hub-topic-heading" className="ind-hub-topic-heading v2-display">
              {INDUSTRY_HUB.topicHeading}
            </h2>
            <p className="ind-hub-topic-lede">{INDUSTRY_HUB.topicLede}</p>
          </Reveal>
        </section>

        <div className="ind-hub-filter-bar" role="tablist" aria-label="Filter industry guides">
          {industryHubFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.key}
              className={`ind-hub-filter-btn${activeFilter === filter.key ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {featuredItem && (
          <Reveal>
            <Link href={featuredItem.href} className="ind-hub-featured">
              <div className="ind-hub-featured-visual">
                <span className="ind-hub-featured-initials v2-display">
                  {getIndustryInitials(featuredItem.title)}
                </span>
              </div>
              <div className="ind-hub-featured-body">
                <span className="ind-hub-featured-tag v2-label">
                  {featuredItem.sectorLabel}
                </span>
                <h2 className="ind-hub-featured-title v2-display">{featuredItem.title}</h2>
                <p className="ind-hub-featured-desc">{featuredItem.intro}</p>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="ind-hub-list">
          {listItems.length === 0 && !featuredItem ? (
            <p className="ind-hub-empty">No guides in this filter.</p>
          ) : (
            listItems.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.03}>
                <Link href={item.href} className="ind-hub-article-item">
                  <div className="ind-hub-article-meta">
                    <span className="ind-hub-article-type v2-label">
                      {item.sectorLabel}
                    </span>
                  </div>
                  <div className="ind-hub-article-content">
                    <h3 className="ind-hub-article-title v2-display">{item.title}</h3>
                    <p className="ind-hub-article-desc">{item.intro}</p>
                  </div>
                  <ArrowUpRightIcon className="ind-hub-article-arrow" />
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
