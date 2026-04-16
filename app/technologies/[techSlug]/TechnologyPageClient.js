"use client";

import React, { useEffect } from "react";
import ClientNavbar from "../../../components/ClientNavbar/ClientNavbar";
import CTA from "../../../components/CTA/CTA";
import FAQ from "../../../components/FAQ/FAQ";
import Footer from "../../../components/Footer/Footer";
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
  FiCreditCard,
  FiShoppingCart,
  FiHeart,
  FiTool,
} from "react-icons/fi";
import { technologyCapabilitiesData } from "../../../lib/technologyCapabilitiesData";
import "../../services/[serviceType]/page.scss";
import "./page.scss";

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
  fintech: FiCreditCard,
  retail: FiShoppingCart,
  healthcare: FiHeart,
  construction: FiTool,
};

export default function TechnologyPageClient({ techSlug }) {
  const data = technologyCapabilitiesData[techSlug];
  const labelLower = data.label.toLowerCase();
  const stackGroups = data.stackGroups ?? [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [techSlug]);

  return (
    <div className="services-page services-page--mobile-app services-page--tech-capabilities">
      <ClientNavbar />

      <section className="services-hero">
        <div className="services-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.webp"
            alt="Technology capabilities background"
            className="services-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="services-hero-wrapper">
          <div className="services-header">
            <span className="services-label">Technology capabilities</span>
            <h1 className="services-heading">{data.heading}</h1>
            <p className="services-direct-answer">{data.directAnswer}</p>
            <p className="services-description">{data.overview}</p>
          </div>
        </div>
      </section>

      <div className="services-content-wrapper">
        {stackGroups.length > 0 && (
          <div className="service-services-and-stack">
            <h2 className="services-section-heading">
              {data.stackHeading || "Technology stack & delivery"}
            </h2>
            {data.stackIntro && (
              <p className="service-tech-intro">{data.stackIntro}</p>
            )}
            <div className="service-tech-grid">
              {stackGroups.map((group) => (
                <article className="service-tech-card" key={group.title}>
                  <h3 className="service-tech-title">{group.title}</h3>
                  <p className="service-tech-description">{group.description}</p>
                  {(group.tools ?? []).length > 0 && (
                    <ul className="service-tech-tools">
                      {(group.tools ?? []).map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {data.webServices && data.webServices.length > 0 && (
          <div className="service-highlights">
            <h2 className="services-section-heading">{data.webServicesHeading}</h2>
            {data.webServicesIntro && (
              <p className="service-tech-intro">{data.webServicesIntro}</p>
            )}
            <div className="service-highlights-grid service-highlights-grid--four">
              {data.webServices.map((service) => (
                <article className="service-highlight-card" key={service.title}>
                  {service.icon && CARD_ICON_MAP[service.icon] && (
                    <span className="service-card-icon" aria-hidden="true">
                      {React.createElement(CARD_ICON_MAP[service.icon])}
                    </span>
                  )}
                  <h3 className="service-highlight-title">{service.title}</h3>
                  <p className="service-highlight-description">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {data.workflow && data.workflow.length > 0 && (
          <div className="service-workflow">
            <h2 className="services-section-heading">
              {data.workflowHeading || `Our ${labelLower} workflow`}
            </h2>
            <div className="service-workflow-grid">
              {data.workflow.map((step) => (
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

        {data.whyChooseBaaz && data.whyChooseBaaz.points?.length > 0 && (
          <div className="service-why-choose">
            <h2 className="services-section-heading">
              {data.whyChooseBaaz.heading ||
                `Why choose Baaz for ${labelLower}?`}
            </h2>
            <span className="service-why-choose-accent" aria-hidden="true" />
            {data.whyChooseBaaz.intro && (
              <p className="service-tech-intro">{data.whyChooseBaaz.intro}</p>
            )}
            <div className="service-why-choose-grid">
              {data.whyChooseBaaz.points.map((point) => (
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

        {data.offerings && data.offerings.length > 0 && (
          <div className="service-offerings">
            <h2 className="services-section-heading">
              {data.offeringsHeading ||
                `Our offerings in ${labelLower} services`}
            </h2>
            {data.offeringsIntro && (
              <p className="service-tech-intro">{data.offeringsIntro}</p>
            )}
            <div className="service-offerings-grid">
              {data.offerings.map((item) => (
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

        {data.deployment && (
          <div className="service-services-and-stack">
            <h2 className="services-section-heading">{data.deployment.title}</h2>
            <p className="service-tech-intro">{data.deployment.description}</p>
            <ul className="service-tech-tools service-tech-tools--block">
              {data.deployment.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {data.faqs && data.faqs.length > 0 && (
        <FAQ faqs={data.faqs} heading={data.faqsHeading} />
      )}

      <CTA />
      <Footer />
    </div>
  );
}
