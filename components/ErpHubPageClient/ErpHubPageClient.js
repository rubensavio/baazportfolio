"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import Reveal from "../Home/Reveal";
import {
  erpHubFilters,
  erpHubItems,
  FILTER_ALL,
} from "../../lib/erpHubData";
import { ERP_HUB } from "../../lib/erpHubPageData";
import "./ErpHubPageClient.scss";

function getErpInitials(title) {
  return (title || "")
    .replace(/^ERP for\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

export default function ErpHubPageClient() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const filteredItems = useMemo(() => {
    if (activeFilter === FILTER_ALL) return erpHubItems;
    return erpHubItems.filter((item) => item.sector === activeFilter);
  }, [activeFilter]);

  const featuredItem = filteredItems[0];
  const listItems = filteredItems.slice(1);

  return (
    <div className="baaz-v2 erp-hub-v2">
      <ClientNavbar />

      <section className="erp-hub-hero" aria-label="ERP solutions">
        <div className="v2-wrap">
          <Reveal className="erp-hub-hero-inner">
            <h1 className="erp-hub-hero-title v2-display">{ERP_HUB.title}</h1>
            <div className="erp-hub-hero-right">
              <p className="erp-hub-hero-direct">{ERP_HUB.direct}</p>
              <p className="erp-hub-hero-intro">{ERP_HUB.intro}</p>
              <p className="erp-hub-hero-count v2-label">{ERP_HUB.countLabel}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="v2-wrap">
        <section className="erp-hub-topic-intro" aria-labelledby="erp-hub-topic-heading">
          <Reveal>
            <h2 id="erp-hub-topic-heading" className="erp-hub-topic-heading v2-display">
              {ERP_HUB.topicHeading}
            </h2>
            <p className="erp-hub-topic-lede">{ERP_HUB.topicLede}</p>
          </Reveal>
        </section>

        <div className="erp-hub-filter-bar" role="tablist" aria-label="Filter ERP guides">
          {erpHubFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.key}
              className={`erp-hub-filter-btn${activeFilter === filter.key ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {featuredItem && (
          <Reveal>
            <Link href={featuredItem.href} className="erp-hub-featured">
              <div className="erp-hub-featured-visual">
                <span className="erp-hub-featured-initials v2-display">
                  {getErpInitials(featuredItem.title)}
                </span>
              </div>
              <div className="erp-hub-featured-body">
                <span className="erp-hub-featured-tag v2-label">
                  {featuredItem.sectorLabel}
                </span>
                <h2 className="erp-hub-featured-title v2-display">{featuredItem.title}</h2>
                <p className="erp-hub-featured-desc">{featuredItem.intro}</p>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="erp-hub-list">
          {listItems.length === 0 && !featuredItem ? (
            <p className="erp-hub-empty">No guides in this filter.</p>
          ) : (
            listItems.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.03}>
                <Link href={item.href} className="erp-hub-article-item">
                  <div className="erp-hub-article-meta">
                    <span className="erp-hub-article-type v2-label">
                      {item.sectorLabel}
                    </span>
                  </div>
                  <div className="erp-hub-article-content">
                    <h3 className="erp-hub-article-title v2-display">{item.title}</h3>
                    <p className="erp-hub-article-desc">{item.intro}</p>
                  </div>
                  <ArrowUpRightIcon className="erp-hub-article-arrow" />
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
