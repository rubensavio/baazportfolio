"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./OurExpertise.scss";

const OurExpertise = () => {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation({ threshold: 0.2 });
  const industriesRef = useScrollAnimation();

  const expertise = [
    {
      id: 1,
      number: "01",
      title: "Enterprise Product Engineering",
      description:
        "Greenfield products, major releases, and platform modules with production-grade architecture—from discovery through shipped software, as phased programs or embedded pods.",
      icon: "/assets/Product-Engineering.svg",
    },
    {
      id: 2,
      number: "02",
      title: "Emerging Technologies",
      description:
        "AI/ML, AR/VR, and generative features when they improve measurable outcomes—with evaluation, data boundaries, and governance agreed before anything ships.",
      icon: "/assets/Engineering-Technologies.svg",
    },
    {
      id: 3,
      number: "03",
      title: "Enterprise Solutions",
      description:
        "Custom apps, workflows, portals, and integrations your teams use every day—when SaaS no longer matches policy, operations, or how work actually happens.",
      icon: "/assets/Enterprise-Solutions.svg",
    },
  ];

  return (
    <section className="our-expertise" aria-labelledby="our-expertise-heading">
      <div
        className="our-expertise-header animate-on-scroll animate-fade-up"
        ref={headerRef}
      >
        <span className="our-expertise-label">Our Expertise</span>
        <h2 id="our-expertise-heading" className="our-expertise-heading">
          Enterprise product engineering for teams that cannot afford toy demos.
        </h2>
        <p className="our-expertise-lede">
          We ship and evolve products under real enterprise constraints—uptime,
          security reviews, regulated data, legacy systems, and cross-team
          coordination. Same approach across{" "}
          <Link href="/industry/fintech">FinTech</Link>,{" "}
          <Link href="/industry/construction">Construction Tech</Link>,{" "}
          <Link href="/industry/retail">Retail</Link>, and{" "}
          <Link href="/industry/healthcare">Healthcare</Link>. Need ERP
          solutioning? Explore our <Link href="/erp">ERP Solutions</Link> for
          insurance, manufacturing, banking, healthcare, hospitals, real
          estate, construction, automobile, and transportation.
        </p>
      </div>

      <div className="our-expertise-container animate-on-scroll animate-fade-up animate-delay-100">
        <h3 className="our-expertise-subtitle">
          Where we focus
          <span className="our-expertise-subtitle-note">
            From strategy to shipped software
          </span>
        </h3>
        <div
          className="our-expertise-cards animate-on-scroll animate-fade-up animate-delay-200"
          ref={cardsRef}
        >
          {expertise.map((item, index) => (
            <div
              key={item.id}
              className="expertise-card"
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <span className="card-number" aria-hidden="true">
                {item.number}
              </span>
              <div className="card-icon">
                <img
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="our-expertise-industries animate-on-scroll animate-fade-up"
        ref={industriesRef}
      >
        <p className="our-expertise-industries-text">
          <Link href="/blog/how-to-choose-software-development-partner">
            Choosing a development partner
          </Link>
          ,{" "}
          <Link href="/blog/how-to-build-ai-powered-product">
            building AI-powered products
          </Link>
          , and more on the <Link href="/blog">Blog</Link>. Roughly half of our
          engagements started as{" "}
          <Link href="/project-rescue">project rescues</Link>
          <span className="our-expertise-footnote"> .</span>
        </p>
      </div>
    </section>
  );
};

export default OurExpertise;
