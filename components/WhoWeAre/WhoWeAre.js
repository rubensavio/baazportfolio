import React from "react";
import "./WhoWeAre.scss";

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
  return (
    <section className="who-we-are" aria-labelledby="who-we-are-heading">
      <div className="who-we-are-header animate-fade-up animate-in">
        <span className="who-we-are-label">Who We Are</span>
        <h2 id="who-we-are-heading" className="who-we-are-heading">
          Enterprise product engineering from discovery through launch and
          scale.
        </h2>
        <p className="who-we-are-lede">
          Most engagements combine the four areas below so roadmap, UX, and code
          stay coherent instead of bouncing between separate vendors. Each phase
          ships with clear milestones and acceptance criteria before the next
          begins. We have delivered 100+ web and mobile applications across
          FinTech, retail, eCommerce, and healthcare-adjacent work.
        </p>
      </div>

      <div className="who-we-are-panel animate-fade-up animate-in animate-delay-100">
        {/* <h3 className="who-we-are-subtitle">
          Core capabilities
          <span className="who-we-are-subtitle-note">
            Typical breadth—exact scope is set per engagement
          </span>
        </h3> */}

        <div
          className="who-we-are-cards animate-fade-up animate-in animate-delay-200"
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
                <img
                  src={service.icon}
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.scope}</p>
              {/* <p className="service-boundary">{service.boundary}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
