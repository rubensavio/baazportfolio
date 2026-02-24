'use client';

import React, { useEffect, useState } from "react";
import "./EnterpriseHero.scss";

const EnterpriseHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="enterprise-hero">
      <div className="enterprise-hero-wrapper">
        <div className={`enterprise-hero-header animate-fade-up ${isLoaded ? 'animate-in' : ''}`}>
          <span className="enterprise-hero-label">Enterprise solution</span>
          <h1 className="enterprise-hero-heading">
            Custom Software Development for Enterprise
          </h1>
          <p className="enterprise-hero-description">
            We're a custom software development agency for enterprise. We build applications that drive efficiency, security, and scalability for large organizations.
          </p>
          <p className="enterprise-hero-definition">
            Enterprise product engineering is the end-to-end process of designing, building, testing, and deploying digital products for large organisations — combining software development, UX design, and product strategy into a unified delivery model that balances speed with governance, innovation with stability.
          </p>
        </div>
      </div>

      <div className="enterprise-hero-background">
        <img
          src="/assets/EnterpriseHeroSectionBg.svg"
          alt="Enterprise background"
          className="enterprise-hero-bg-image"
          width={1200}
          height={600}
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default EnterpriseHero;

