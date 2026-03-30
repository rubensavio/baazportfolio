'use client';

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
        "Deliver: greenfield products, major releases, and platform modules with production-grade architecture. Engage: phased discovery-to-launch programs or embedded pods aligned to your roadmap. Choose when: you need end-to-end ownership from problem framing through shipped software—not one-off tickets. Outcome-led milestones and written acceptance criteria keep delivery reviewable for engineering and business stakeholders.",
      icon: "/assets/Product-Engineering.svg",
    },
    {
      id: 2,
      number: "02",
      title: "Emerging Technologies",
      description:
        "Deliver: pragmatic adoption of AI/ML, AR/VR, and generative-AI features where they improve measurable product outcomes. Trust: evaluation protocols, data-boundary agreements, human-in-the-loop patterns, and benchmarks defined before model claims are marketed internally. Limitation: we do not promise model accuracy or compliance coverage without an agreed evaluation set and governance plan.",
      icon: "/assets/Engineering-Technologies.svg",
    },
    {
      id: 3,
      number: "03",
      title: "Enterprise Solutions",
      description:
        "Deliver: custom enterprise applications, workflow tools, customer portals, and ERP-adjacent integrations your teams use daily. Engage: modernization programs, internal platforms, and vendor coordination when multiple systems must stay coherent. Choose when: off-the-shelf SaaS stops fitting process reality and you need software shaped to policy, operations, and regional rules.",
      icon: "/assets/Enterprise-Solutions.svg",
    },
  ];

  return (
    <section className="our-expertise" aria-labelledby="our-expertise-heading">
      <div className="our-expertise-header animate-on-scroll animate-fade-up" ref={headerRef}>
        <span className="our-expertise-label">Our Expertise</span>
        <h2 id="our-expertise-heading" className="our-expertise-heading">
          Enterprise product engineering for teams that cannot afford toy demos.
        </h2>
        <p className="our-expertise-lede">
          <strong>Enterprise product engineering</strong>, as Baaz practices it, means
          shipping and evolving software products inside organizational
          constraints: uptime expectations, security review cycles, regulated
          data handling, legacy integrations, and multi-team coordination. We
          bring the same craft to{" "}
          <Link href="/industry/fintech">FinTech</Link>,{" "}
          <Link href="/industry/construction">Construction Tech</Link>,{" "}
          <Link href="/industry/retail">Retail</Link>, and{" "}
          <Link href="/industry/healthcare">Healthcare</Link>—verticals where
          compliance and operational software surface area are non-negotiable.
        </p>
      </div>

      <div className="our-expertise-container">
        <div className="our-expertise-cards animate-on-scroll animate-fade-up animate-delay-200" ref={cardsRef}>
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
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="our-expertise-industries animate-on-scroll animate-fade-up" ref={industriesRef}>
        <p className="our-expertise-industries-text">
          Deep-dive guides:{" "}
          <Link href="/blog/how-to-choose-software-development-partner">
            How to choose a software development partner
          </Link>
          ,{" "}
          <Link href="/blog/how-to-build-ai-powered-product">
            How to build an AI-powered product
          </Link>
          , and the full archive on our <Link href="/blog">Blog</Link>.
        </p>
        <p className="our-expertise-industries-text">
          <Link href="/project-rescue">Software project rescue</Link> is a core
          competency. In Baaz&apos;s active portfolio, roughly half of engagements
          began as mid-project takeovers—cases where Baaz replaced or augmented a
          prior vendor after missed milestones or quality gaps.{" "}
          <em>
            This figure reflects Baaz&apos;s internal project classification, not an
            independent third-party study.
          </em>
        </p>
      </div>
    </section>
  );
};

export default OurExpertise;
