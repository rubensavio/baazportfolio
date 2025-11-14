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
            Powerful Software Solutions for Complex Enterprise Needs
          </h1>
          <p className="enterprise-hero-description">
            Custom enterprise applications that drive efficiency, security, and
            scalability for large organizations.
          </p>
        </div>
      </div>

      <div className="enterprise-hero-background">
        <img
          src="/assets/EnterpriseHeroSectionBg.svg"
          alt="Enterprise background"
          className="enterprise-hero-bg-image"
        />
      </div>
    </section>
  );
};

export default EnterpriseHero;

