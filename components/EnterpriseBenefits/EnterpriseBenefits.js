'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./EnterpriseBenefits.scss";

const EnterpriseBenefits = () => {
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      id: 1,
      title: "Security & Compliance",
      description:
        "GDPR, SOC2 compliant development practices with comprehensive security assessments",
    },
    {
      id: 2,
      title: "Scalability & Reliability",
      description:
        "Applications designed to handle enterprise-scale data and user loads with 99.9% uptime",
    },
    {
      id: 3,
      title: "Legacy Integration",
      description:
        "Seamless integration with existing systems and databases, minimizing disruption",
    },
    {
      id: 4,
      title: "Dedicated Support",
      description:
        "Enterprise-grade SLAs with dedicated support teams and comprehensive documentation",
    },
  ];

  return (
    <section className="enterprise-benefits">
      <div className="enterprise-benefits-wrapper">
        <div className="enterprise-benefits-header animate-on-scroll animate-fade-up" ref={headerRef}>
          <span className="enterprise-benefits-label">Benefits</span>
          <h2 className="enterprise-benefits-heading">
            Why choose Baaz for Enterprise
          </h2>
        </div>

        <div className="enterprise-benefits-list animate-on-scroll animate-fade-up animate-delay-200" ref={listRef}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-item">
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseBenefits;

