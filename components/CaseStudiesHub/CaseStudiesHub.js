"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  caseStudyHubItems,
  caseStudyHubFilters,
  FILTER_ALL,
} from "../../lib/caseStudiesData";

export default function CaseStudiesHub() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const visibleItems = useMemo(() => {
    if (activeFilter === FILTER_ALL) return caseStudyHubItems;
    return caseStudyHubItems.filter((item) => item.filterKey === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="case-studies-hub-toolbar">
        <p
          className="case-studies-hub-toolbar-label"
          id="case-studies-filter-label"
        >
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
            <article
              key={item.href}
              className="blog-index-card case-studies-hub-card"
            >
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
    </>
  );
}
