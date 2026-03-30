"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getRegionLabel } from "../../lib/regions";
import "./Hero.scss";

const Hero = () => {
  const [regionLabel, setRegionLabel] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRegionLabel(getRegionLabel(window.location.hostname));
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {regionLabel && (
              <p className="hero-region-line animate-fade-up animate-in">
                {regionLabel}
              </p>
            )}
            <h1 className="hero-heading-unified animate-fade-up animate-in">
              <span className="hero-heading__tagline">
                <span className="hero-heading-strikes-container">
                  Custom Software{" "}
                  <img
                    src="/assets/HomeScreenStrikBlue.svg"
                    alt=""
                    className="highlight-strike animate-in"
                    width={320}
                    height={48}
                  />
                </span>
                <br />
                <span className="hero-heading-highlight">
                  Development Agency for Startups &amp; Enterprises
                </span>
              </span>
            </h1>
            <p className="hero-direct-answer animate-fade-up animate-delay-200 animate-in">
              <strong>Baaz</strong> is a custom software and product engineering
              company based in Bangalore, India, shipping production-grade web
              and mobile products for startups and enterprises worldwide since
              2018.
            </p>

            <Link
              href="/get-in-touch"
              className="hero-cta desktop-cta-btn animate-fade-up animate-delay-400 animate-in"
            >
              Get in touch
            </Link>
          </div>
          <div className="hero-illustration animate-fade-right animate-delay-300 animate-in">
            <img
              src="/assets/HomeHeroSectionIcon.svg"
              alt="Developer illustration"
              className="hero-icon animate-icon-in"
              width={480}
              height={400}
              fetchPriority="high"
            />
          </div>
          <Link
            href="/get-in-touch"
            className="hero-cta mobile-cta-btn animate-fade-up animate-delay-400 animate-in"
          >
            Get in touch
          </Link>
        </div>
      </div>
      <div className="hero-background">
        <img
          src="/assets/HomeHeroSectionBg.svg"
          alt=""
          className="hero-bg-image"
          width={1200}
          height={600}
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
