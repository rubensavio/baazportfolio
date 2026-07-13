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
import FaqJsonLd from "../../components/FaqJsonLd";
import "./page.scss";

const SERVICES_FAQS = [
  {
    question: "What services does Baaz offer?",
    answer:
      "Baaz offers end-to-end product engineering: product strategy, UI/UX design, web and mobile development, AI solutions, and post-launch scaling. We cover everything from MVP builds to enterprise digital transformation.",
  },
  {
    question: "Does Baaz build custom software or use templates?",
    answer:
      "Baaz builds custom software engineered around your specific operations and goals. We map your real workflows first, then design, build, and ship production systems - not template-based products.",
  },
  {
    question: "Which industries does Baaz work with?",
    answer:
      "Baaz has delivered software across 10+ industries including manufacturing, BFSI, healthcare, logistics, real estate, education, and D2C commerce, serving startups and enterprises in 26+ countries since 2018.",
  },
];

function markServicesHubSource() {
  try {
    sessionStorage.setItem("servicesNavSource", "hub");
  } catch {
    /* sessionStorage unavailable — ignore */
  }
}

export default function ServicesHubPage() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const filteredItems = useMemo(() => {
    if (activeFilter === FILTER_ALL) return servicesHubItems;
    return servicesHubItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <FaqJsonLd items={SERVICES_FAQS} />
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

          <div className="svc-hub-list">
            {filteredItems.length === 0 ? (
              <p className="svc-hub-empty">No services in this filter.</p>
            ) : (
              filteredItems.map((item, index) => (
                <Reveal key={item.href} delay={index * 0.03}>
                  <Link
                    href={item.href}
                    className="svc-hub-article-item"
                    onClick={markServicesHubSource}
                  >
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
