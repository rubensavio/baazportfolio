"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Hero.scss";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <img
          src="/assets/HomeScreenStrikBlue.svg"
          alt="Highlight underline"
          className={`highlight-strike ${isLoaded ? "animate-in" : ""}`}
        />
        <div className="hero-content">
          {/* Left Section - Text Content */}
          <div className="hero-text">
            <h1
              className={`hero-heading animate-fade-up ${
                isLoaded ? "animate-in" : ""
              }`}
            >
              Turning{" "}
              <span className="hero-heading-highlight">
                Big Ideas Into Scalable Products
              </span>
            </h1>
            <p
              className={`hero-description animate-fade-up animate-delay-200 ${
                isLoaded ? "animate-in" : ""
              }`}
            >
              From Concept to Code: 100+ Success Stories Since 2018 Expertise in
              eCommerce, AI/ML, Fintech, AR/VR & Beyond
            </p>
            <Link
              href="/book-call"
              className={`hero-cta desktop-cta-btn animate-fade-up animate-delay-400 ${
                isLoaded ? "animate-in" : ""
              }`}
            >
              Tell us your vision
            </Link>
          </div>

          {/* Right Section - Illustration */}
          <div
            className={`hero-illustration animate-fade-right animate-delay-300 ${
              isLoaded ? "animate-in" : ""
            }`}
          >
            <img
              src="/assets/HomeHeroSectionIcon.svg"
              alt="Developer illustration"
              className={`hero-icon ${isLoaded ? "animate-icon-in" : ""}`}
            />
          </div>

          {/* Mobile/Tablet CTA Button - Positioned at bottom */}
          <Link
            href="/book-call"
            className={`hero-cta mobile-cta-btn animate-fade-up animate-delay-400 ${
              isLoaded ? "animate-in" : ""
            }`}
          >
            Tell us your vision
          </Link>
        </div>
      </div>
      <div className="hero-background">
        <img
          src="/assets/HomeHeroSectionBg.svg"
          alt="Hero background"
          className="hero-bg-image"
        />
      </div>
    </section>
  );
};

export default Hero;
