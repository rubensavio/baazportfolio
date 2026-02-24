"use client";

import React, { useState, useEffect } from "react";
import "./WhoWeAreSection.scss";

const WhoWeAreSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="who-we-are-section">
      <div className="who-we-are-section-wrapper">
        <div
          className={`who-we-are-section-header animate-fade-up ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          <span className="who-we-are-section-label">Who We Are</span>
          <h2 className="who-we-are-section-heading">
            Building World Class Softwares Since 2018
          </h2>
        </div>

        <div
          className={`who-we-are-section-content animate-fade-up animate-delay-200 ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          <p className="who-we-are-section-paragraph">
            Baaz is a Bangalore-based software product development studio driven
            by a passion for building purposeful digital products. Since 2018,
            we've partnered with startups, scale-ups, and enterprises to design,
            develop, and launch over 100 web and mobile applications across
            diverse sectors including eCommerce, fintech, AI/ML, AR/VR, real
            estate, retail, and ERP systems.
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
          alt="About Us background"
          className="who-we-are-bg-image"
        />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
