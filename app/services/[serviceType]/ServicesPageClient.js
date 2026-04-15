"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  FiUsers,
  FiZap,
  FiShield,
  FiSearch,
  FiPenTool,
  FiCode,
  FiUploadCloud,
  FiGrid,
  FiLayers,
  FiWatch,
  FiGlobe,
} from "react-icons/fi";
import { servicesData } from "../../../lib/servicesData";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../../../components/FAQ/FAQ"));
const CTA = dynamic(() => import("../../../components/CTA/CTA"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../../components/Footer/Footer"), {
  ssr: false,
});

const CARD_ICON_MAP = {
  users: FiUsers,
  performance: FiZap,
  security: FiShield,
  discovery: FiSearch,
  design: FiPenTool,
  engineering: FiCode,
  deployment: FiUploadCloud,
  consulting: FiGrid,
  enterprise: FiLayers,
  wearable: FiWatch,
  web: FiGlobe,
};

export default function ServicesPageClient({ serviceType }) {
  const serviceData = servicesData[serviceType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  return (
    <div
      className={`services-page${serviceType === "mobile-app" ? " services-page--mobile-app" : ""}`}
    >
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="services-hero">
        <div className="services-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.webp"
            alt="Services background"
            className="services-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="services-hero-wrapper">
          <div className="services-header">
            <span className="services-label">{serviceData.label}</span>
            <h1 className="services-heading">{serviceData.heading}</h1>
            {serviceData.directAnswer && (
              <p className="services-direct-answer">
                {serviceData.directAnswer}
              </p>
            )}
            <p className="services-description">{serviceData.description}</p>
          </div>

          {serviceData.definition && (
            <p className="services-definition">{serviceData.definition}</p>
          )}

          {serviceData.nicheWedge && (
            <p className="services-niche-wedge">{serviceData.nicheWedge}</p>
          )}
        </div>
        {serviceData.industryLinks && serviceData.industryLinks.length > 0 && (
          <div className="services-related">
            <p className="services-related-text">
              We build for{" "}
              {serviceData.industryLinks.map((ind, i) => (
                <span key={ind.slug}>
                  {i > 0 && ", "}
                  <Link href={`/industry/${ind.slug}`}>{ind.label}</Link>
                </span>
              ))}
              .
            </p>
          </div>
        )}
      </section>

      <div className="services-content-wrapper">
        {serviceData.technologyStackGroups &&
        serviceData.technologyStackGroups.length > 0 ? (
          <div className="service-services-and-stack">
            <h2 className="services-section-heading">
              {serviceData.sectionHeading || "What we deliver"}
            </h2>
            <div className="service-tech-grid">
              {serviceData.technologyStackGroups.map((group) => (
                <article className="service-tech-card" key={group.title}>
                  <h3 className="service-tech-title">{group.title}</h3>
                  <p className="service-tech-description">
                    {group.description}
                  </p>
                  <ul className="service-tech-tools">
                    {group.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <>
            <h2 className="services-section-heading">
              {serviceData.sectionHeading || "What we deliver"}
            </h2>
            <div className="service-cards-grid">
              {serviceData.services.map((service, index) => (
                <div key={index} className="service-info-card">
                  <h3 className="service-info-title">{service.title}</h3>
                  <p className="service-info-description">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {serviceData.mobileHighlights &&
          serviceData.mobileHighlights.length > 0 && (
            <div className="service-highlights">
              <h2 className="services-section-heading">
                Our mobile app highlights
              </h2>
              <div className="service-highlights-grid">
                {serviceData.mobileHighlights.map((item) => (
                  <article className="service-highlight-card" key={item.title}>
                    {item.icon && CARD_ICON_MAP[item.icon] && (
                      <span className="service-card-icon" aria-hidden="true">
                        {React.createElement(CARD_ICON_MAP[item.icon])}
                      </span>
                    )}
                    <h3 className="service-highlight-title">{item.title}</h3>
                    <p className="service-highlight-description">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}

        {serviceData.mobileWorkflow &&
          serviceData.mobileWorkflow.length > 0 && (
            <div className="service-workflow">
              <h2 className="services-section-heading">
                Our mobile app development workflow
              </h2>
              <div className="service-workflow-grid">
                {serviceData.mobileWorkflow.map((step) => (
                  <article className="service-workflow-card" key={step.title}>
                    {step.icon && CARD_ICON_MAP[step.icon] && (
                      <span className="service-card-icon" aria-hidden="true">
                        {React.createElement(CARD_ICON_MAP[step.icon])}
                      </span>
                    )}
                    <h3 className="service-workflow-title">{step.title}</h3>
                    <p className="service-workflow-description">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}

        {serviceData.mobileWhyChoose && (
          <div className="service-why-choose">
            <h2 className="services-section-heading">
              {serviceData.mobileWhyChoose.heading}
            </h2>
            <span className="service-why-choose-accent" aria-hidden="true" />
            <p className="service-tech-intro">
              {serviceData.mobileWhyChoose.intro}
            </p>
            <div className="service-why-choose-grid">
              {serviceData.mobileWhyChoose.points.map((point) => (
                <article className="service-why-card" key={point.title}>
                  {point.icon && CARD_ICON_MAP[point.icon] && (
                    <span
                      className="service-card-icon service-card-icon--plain-red"
                      aria-hidden="true"
                    >
                      {React.createElement(CARD_ICON_MAP[point.icon])}
                    </span>
                  )}
                  <h3 className="service-why-card-title">{point.title}</h3>
                  <p className="service-why-card-description">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {serviceData.mobileOfferings && (
          <div className="service-offerings">
            <h2 className="services-section-heading">
              {serviceData.mobileOfferings.heading}
            </h2>
            <p className="service-tech-intro">
              {serviceData.mobileOfferings.intro}
            </p>
            <div className="service-offerings-grid">
              {serviceData.mobileOfferings.items.map((item) => (
                <article className="service-offering-card" key={item.title}>
                  {item.icon && CARD_ICON_MAP[item.icon] && (
                    <span className="service-card-icon" aria-hidden="true">
                      {React.createElement(CARD_ICON_MAP[item.icon])}
                    </span>
                  )}
                  <h3 className="service-tech-title">{item.title}</h3>
                  <p className="service-tech-description">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {serviceData.faqs && <FAQ faqs={serviceData.faqs} />}

      <CTA />
      <Footer />
    </div>
  );
}
