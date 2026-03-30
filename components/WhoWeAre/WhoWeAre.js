'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./WhoWeAre.scss";

const staffAugVsBaaz = [
  {
    aspect: "Day-to-day direction",
    staffAug:
      "Your managers assign work and priorities to augmented contributors.",
    baaz: "Named milestones, documented acceptance criteria, and delivery ownership for shipped increments.",
  },
  {
    aspect: "Success signal",
    staffAug: "Often measured by utilization, headcount, or hours billed.",
    baaz: "Reviewable product increments aligned to roadmap and stated outcomes.",
  },
  {
    aspect: "Team shape",
    staffAug: "Individuals slotted into existing processes.",
    baaz: "Cross-functional pods spanning strategy, design, build, and scaling where scoped.",
  },
];

const phases = [
  {
    phase: "Discover & define",
    youGet: "Problem framing, scoped outcomes, measurable success criteria",
    outputs: "PRDs, journey maps, technical spikes, phased roadmap",
  },
  {
    phase: "Design & build",
    youGet: "Production-oriented UX/UI and full-stack implementation",
    outputs: "Apps, APIs, admin surfaces, integrations, observability hooks",
  },
  {
    phase: "Ship & scale",
    youGet: "Hardening, analytics, and iterative delivery after launch",
    outputs: "Release cadence, SLOs, dashboards, growth and reliability work",
  },
];

const services = [
  {
    id: 1,
    title: "Product Strategy",
    scope:
      "Research synthesis, personas, opportunity sizing, and sequenced roadmaps tied to measurable bets.",
    boundary:
      "We partner with your leadership—we do not replace executive product ownership or P&L accountability.",
    bgColor: "#FFF7F2",
    icon: "/assets/Strategy.svg",
  },
  {
    id: 2,
    title: "UI/UX Design",
    scope:
      "End-to-end interaction design: user flows, wireframes, and prototypes validated before engineering commits.",
    boundary:
      "Brand and marketing site systems may require a separate creative scope unless bundled in the engagement.",
    bgColor: "#ECF0FB",
    icon: "/assets/UIUX.svg",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    scope:
      "Web and API surfaces, mobile where scoped, cloud deployment, and integration layers your product depends on.",
    boundary:
      "We focus on product software; full ERP replacements (e.g. SAP or Oracle rollouts) are out of our typical scope unless defined as a thin custom integration program.",
    bgColor: "#FBF6EF",
    icon: "/assets/Development.svg",
  },
  {
    id: 4,
    title: "Post-Launch Scaling",
    scope:
      "Performance work, analytics instrumentation, feature iteration, and operational support after go-live.",
    boundary:
      "24/7 NOC-style operations are available only when explicitly contracted—default engagements center on product delivery ownership.",
    bgColor: "#EDE2FF",
    icon: "/assets/Scaling.svg",
  },
];

const WhoWeAre = () => {
  const headerRef = useScrollAnimation();
  const tableRef = useScrollAnimation({ threshold: 0.15 });
  const comparisonTableRef = useScrollAnimation({ threshold: 0.15 });
  const trustRef = useScrollAnimation({ threshold: 0.15 });
  const cardsRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="who-we-are" aria-labelledby="who-we-are-heading">
      <div className="who-we-are-container">
        <div className="who-we-are-header animate-on-scroll animate-fade-up" ref={headerRef}>
          <span className="who-we-are-label">Who We Are</span>
          <h2 id="who-we-are-heading" className="who-we-are-heading">
            Enterprise product engineering
            <br />
            from discovery to production operations.
          </h2>
          <p className="who-we-are-lede">
            <strong>Baaz</strong> is a product engineering company that delivers{" "}
            <strong>enterprise product engineering</strong>—integrated work across
            discovery, UX and UI, full-stack build, release, and post-launch
            scaling—for organizations that need reliability, auditability,
            integrations, and uptime alongside velocity. Operating since 2018
            from Bangalore and serving teams worldwide, Baaz has shipped 100+
            web and mobile applications (per Baaz&apos;s internal delivery
            records) across sectors including FinTech, retail, eCommerce, and
            healthcare-adjacent workflows. We structure delivery in
            cross-functional pods with named milestones and documented acceptance
            criteria so progress is reviewable without translating vendor jargon.
          </p>
          <aside className="who-we-are-takeaways" aria-label="Key takeaways">
            <p className="who-we-are-takeaways-title">Key takeaways</p>
            <ul>
              <li>
                One engaged team owns outcomes across strategy, design, build,
                and scaling—not a handoff factory.
              </li>
              <li>
                Engagements assume enterprise constraints: security reviews,
                integrations, compliance touchpoints, and multi-stakeholder
                alignment.
              </li>
              <li>
                Scope and boundaries are stated up front so procurement and
                engineering leaders can compare us to staff aug or pure
                body-shop models fairly.
              </li>
            </ul>
          </aside>
        </div>

        <div
          className="who-we-are-table-wrap animate-on-scroll animate-fade-up animate-delay-100"
          ref={tableRef}
        >
          <p className="who-we-are-table-caption">
            How we phase work (illustrative—exact plan is tailored per product)
          </p>
          <div className="who-we-are-table-scroll">
            <table className="who-we-are-table">
              <thead>
                <tr>
                  <th scope="col">Phase</th>
                  <th scope="col">You get</th>
                  <th scope="col">Typical outputs</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((row) => (
                  <tr key={row.phase}>
                    <td>{row.phase}</td>
                    <td>{row.youGet}</td>
                    <td>{row.outputs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="who-we-are-table-wrap who-we-are-table-wrap--comparison animate-on-scroll animate-fade-up animate-delay-100"
          ref={comparisonTableRef}
        >
          <p className="who-we-are-table-caption">
            Staff augmentation vs. Baaz enterprise product engineering (summary)
          </p>
          <div className="who-we-are-table-scroll">
            <table className="who-we-are-table">
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Typical staff augmentation</th>
                  <th scope="col">Baaz enterprise product engineering</th>
                </tr>
              </thead>
              <tbody>
                {staffAugVsBaaz.map((row) => (
                  <tr key={row.aspect}>
                    <td>{row.aspect}</td>
                    <td>{row.staffAug}</td>
                    <td>{row.baaz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p
          className="who-we-are-trust animate-on-scroll animate-fade-up animate-delay-100"
          ref={trustRef}
        >
          <strong>Trust &amp; method:</strong> Delivery is milestone-based with
          reviewable increments, written acceptance criteria, and clear
          handoffs—so engineering and business stakeholders can audit status
          without relying on informal status meetings alone.
        </p>

        <div
          className="who-we-are-cards animate-on-scroll animate-fade-up animate-delay-200"
          ref={cardsRef}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                backgroundColor: service.bgColor,
                animationDelay: `${0.1 * (index + 1)}s`,
              }}
            >
              <div className="service-icon">
                <img src={service.icon} alt="" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.scope}</p>
              <p className="service-boundary">{service.boundary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
