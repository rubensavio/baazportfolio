"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "../../components/icons/ArrowIcons";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import Footer from "../../components/Footer/Footer";
import Reveal from "../../components/Home/Reveal";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import {
  servicesHubFilters,
  servicesHubItems,
  FILTER_ALL,
} from "../../lib/servicesHubData";
import { SERVICES_HUB } from "../../lib/servicesHubPageData";
import "./page.scss";

function getServiceInitials(title) {
  return (title || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

export default function ServicesHubPage() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const filteredItems = useMemo(() => {
    if (activeFilter === FILTER_ALL) return servicesHubItems;
    return servicesHubItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const featuredItem = filteredItems[0];
  const listItems = filteredItems.slice(1);

  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <div className="baaz-v2 services-hub-v2">
        <ClientNavbar />

        <section className="svc-hub-hero" aria-label="Services">
          <div className="v2-wrap">
            <Reveal className="svc-hub-hero-inner">
              <h1 className="svc-hub-hero-title v2-display">{SERVICES_HUB.title}</h1>
              <div className="svc-hub-hero-right">
                <p className="svc-hub-hero-direct">{SERVICES_HUB.direct}</p>
                <p className="svc-hub-hero-intro">{SERVICES_HUB.intro}</p>
                <p className="svc-hub-hero-count v2-label">{SERVICES_HUB.countLabel}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="v2-wrap">
          <section className="svc-hub-topic-intro" aria-labelledby="svc-hub-topic-heading">
            <Reveal>
              <h2 id="svc-hub-topic-heading" className="svc-hub-topic-heading v2-display">
                {SERVICES_HUB.topicHeading}
              </h2>
              <p className="svc-hub-topic-lede">{SERVICES_HUB.topicLede}</p>
            </Reveal>
          </section>

          <div className="svc-hub-filter-bar" role="tablist" aria-label="Filter services">
            {servicesHubFilters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.key}
                className={`svc-hub-filter-btn${activeFilter === filter.key ? " active" : ""}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {featuredItem && (
            <Reveal>
              <Link href={featuredItem.href} className="svc-hub-featured">
                <div className="svc-hub-featured-visual">
                  <span className="svc-hub-featured-initials v2-display">
                    {getServiceInitials(featuredItem.title)}
                  </span>
                </div>
                <div className="svc-hub-featured-body">
                  <span className="svc-hub-featured-tag v2-label">
                    {featuredItem.categoryLabel}
                  </span>
                  <h2 className="svc-hub-featured-title v2-display">{featuredItem.title}</h2>
                  <p className="svc-hub-featured-desc">{featuredItem.intro}</p>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="svc-hub-list">
            {listItems.length === 0 && !featuredItem ? (
              <p className="svc-hub-empty">No services in this filter.</p>
            ) : (
              listItems.map((item, index) => (
                <Reveal key={item.href} delay={index * 0.03}>
                  <Link href={item.href} className="svc-hub-article-item">
                    <div className="svc-hub-article-meta">
                      <span className="svc-hub-article-type v2-label">
                        {item.categoryLabel}
                      </span>
                    </div>
                    <div className="svc-hub-article-content">
                      <h3 className="svc-hub-article-title v2-display">{item.title}</h3>
                      <p className="svc-hub-article-desc">{item.intro}</p>
                    </div>
                    <ArrowUpRightIcon className="svc-hub-article-arrow" />
                  </Link>
                </Reveal>
              ))
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
