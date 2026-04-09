"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./EnterpriseCaseStudies.scss";

const caseStudies = [
  {
    href: "/work1",
    eyebrow: "Manufacturing · ERP + AI",
    title: "AI defect detection on the factory floor",
    description:
      "Computer-vision automation layered on manufacturing ERP and quality workflows—catching microscopic defects without replacing your core system.",
  },
  {
    href: "/work2",
    eyebrow: "HRMS · Hiring management",
    title: "AI recruiting automation on HRMS",
    description:
      "Screening, ranking, and assessments wired into hiring operations—intelligent automation that sits on top of your existing HRMS, not beside it.",
  },
];

const EnterpriseCaseStudies = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="enterprise-case-studies" aria-labelledby="enterprise-case-studies-heading">
      <div className="enterprise-case-studies-wrapper">
        <div
          className="enterprise-case-studies-header animate-on-scroll animate-fade-up"
          ref={headerRef}
        >
          <h2 id="enterprise-case-studies-heading" className="enterprise-case-studies-heading">
            AI automations on your existing ERP stack
          </h2>
          <p className="enterprise-case-studies-description">
            Two enterprise deployments where we extended what customers already ran—manufacturing
            ERP for quality, and HRMS for hiring—with AI that plugs into real processes instead of
            forcing a greenfield replacement.
          </p>
        </div>

        <div
          className="enterprise-case-studies-grid animate-on-scroll animate-fade-up animate-delay-200"
          ref={gridRef}
        >
          {caseStudies.map((item) => (
            <Link key={item.href} href={item.href} className="enterprise-case-study-card">
              <span className="enterprise-case-study-eyebrow">{item.eyebrow}</span>
              <h3 className="enterprise-case-study-title">{item.title}</h3>
              <p className="enterprise-case-study-description">{item.description}</p>
              <span className="enterprise-case-study-cta">Read case study</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCaseStudies;
