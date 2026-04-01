"use client";

import React, { useState } from "react";
import "./WhoWeAreSection.scss";

const WhoWeAreSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="who-we-are-section">
      <div className="who-we-are-section-wrapper">
        <div className="who-we-are-section-header animate-fade-up animate-in">
          <span className="who-we-are-section-label">Who We Are</span>
          <h2 className="who-we-are-section-heading">
            Building World Class Softwares Since 2018
          </h2>
        </div>

        <div className="who-we-are-section-content animate-fade-up animate-delay-200 animate-in">
          <p className="who-we-are-section-direct-answer">
            <strong>Baaz</strong> is a custom software and product engineering
            company based in Bangalore, India, operating since 2018. We partner
            with startups, scale-ups, and enterprises worldwide to ship
            purposeful digital products—not slide decks or throwaway demos.
          </p>
          <p className="who-we-are-section-paragraph">
            Since 2018 we have designed, developed, and launched over 100 web
            and mobile applications across eCommerce, FinTech, AI/ML, AR/VR,
            real estate, retail, and ERP-adjacent workflows; the portfolio total
            reflects Baaz&apos;s internal delivery records.
          </p>

          <p
            className={`who-we-are-section-paragraph secondary ${
              isExpanded ? "expanded" : ""
            }`}
          >
            Our team brings deep technical expertise, strategic thinking, and a
            collaborative mindset to every project. We follow a founder-first,
            product-led approach that helps businesses move from idea to
            prototype, MVP to scale — quickly and efficiently. At Baaz, we don't
            just write code — we craft scalable solutions that solve real
            problems and create long-term value.
          </p>

          <button
            className="read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read less" : "Read more"}
            <span className={`arrow ${isExpanded ? "up" : "down"}`}>
              {isExpanded ? "∧" : "∨"}
            </span>
          </button>
        </div>
      </div>

      <div className="who-we-are-section-background">
        <img
          src="/assets/AboutHeroSection.svg"
          alt=""
          className="who-we-are-bg-image"
          width={1200}
          height={600}
          decoding="async"
        />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
