'use client';

import React from "react";
import "./EnterpriseHero.scss";

const EnterpriseHero = () => {
  return (
    <section className="enterprise-hero">
      <div className="enterprise-hero-wrapper">
        <div className="enterprise-hero-header animate-fade-up animate-in">
          <span className="enterprise-hero-label">Enterprise solution</span>
          <h1 className="enterprise-hero-heading">
            Custom Software Development for Enterprise
          </h1>
          <p className="enterprise-hero-direct-answer">
            <strong>Baaz</strong> delivers enterprise custom software from
            Bangalore, India—product strategy, UX/UI, full-stack engineering, and
            post-launch scaling for large organizations worldwide, operating since
            2018.
          </p>
          <p className="enterprise-hero-description">
            We build applications that drive efficiency, security, and
            scalability for large organizations, with governance-friendly delivery
            and clear scope boundaries.
          </p>
          <p className="enterprise-hero-definition">
            Enterprise product engineering is the end-to-end process of designing, building, testing, and deploying digital products for large organisations — combining software development, UX design, and product strategy into a unified delivery model that balances speed with governance, innovation with stability.
          </p>
        </div>
      </div>

      <div className="enterprise-hero-background">
        <img
          src="/assets/EnterpriseHeroSectionBg.webp"
          alt=""
          className="enterprise-hero-bg-image"
          width={1200}
          height={600}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default EnterpriseHero;
