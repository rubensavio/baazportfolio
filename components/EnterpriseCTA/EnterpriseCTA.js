"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./EnterpriseCTA.scss";

const EnterpriseCTA = () => {
  return (
    <section className="enterprise-cta">
      <div className="enterprise-cta-wrapper">
        <div className="enterprise-cta-container">
          <div className="enterprise-cta-background">
            <Image
              src="/assets/readyToBuildBg.webp"
              alt=""
              fill
              className="enterprise-cta-bg-image"
              sizes="(max-width: 1280px) 100vw, 1200px"
              quality={82}
              loading="lazy"
            />
          </div>
          <div className="enterprise-cta-content">
            <h2 className="enterprise-cta-heading">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="enterprise-cta-description">
              Talk to our enterprise specialists about your project requirements
            </p>
            <Link
              href="https://calendar.app.google/BBo3UYaic9yomaSo7"
              target="_blank"
              rel="noopener noreferrer"
              className="enterprise-cta-button"
            >
              Talk to Our Enterprise Consultant
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
