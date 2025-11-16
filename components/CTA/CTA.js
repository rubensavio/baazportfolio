"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./CTA.scss";

const CTA = () => {
  const contentRef = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="cta">
      <div className="cta-wrapper">
        <div className="cta-container">
          <div className="cta-background">
            <img
              src="/assets/readyToBuildBg.svg"
              alt="CTA background"
              className="cta-bg-image"
            />
          </div>

          <div
            className="cta-content animate-on-scroll animate-fade-up"
            ref={contentRef}
          >
            <h2 className="cta-heading">Ready to build something amazing?</h2>
            <p className="cta-description">
              We'd love to hear about your idea, product, or challenge. Whether
              you're a startup, scale-up, or enterprise, we're here to turn your
              vision into a powerful digital product.
            </p>

            <div className="cta-buttons">
              <Link
                href="https://calendar.app.google/BBo3UYaic9yomaSo7"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                Schedule a call
              </Link>
              <Link href="/get-in-touch" className="cta-button primary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
