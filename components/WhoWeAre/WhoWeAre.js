'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./WhoWeAre.scss";

const WhoWeAre = () => {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      id: 1,
      title: "Product Strategy",
      description: "Market research, user personas, roadmapping",
      bgColor: "#FFF7F2",
      icon: "/assets/Strategy.svg",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User flows, wireframes, interactive prototypes",
      bgColor: "#ECF0FB",
      icon: "/assets/UIUX.svg",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "Frontend, backend, mobile, web, cloud",
      bgColor: "#FBF6EF",
      icon: "/assets/Development.svg",
    },
    {
      id: 4,
      title: "Post-Launch Scaling",
      description: "Optimization, analytics, growth support",
      bgColor: "#EDE2FF",
      icon: "/assets/Scaling.svg",
    },
  ];

  return (
    <section className="who-we-are">
      <div className="who-we-are-container">
        <div className="who-we-are-header animate-on-scroll animate-fade-up" ref={headerRef}>
          <span className="who-we-are-label">Who We Are</span>
          <h2 className="who-we-are-heading">
            Passionate creators
            <br />
            crafting impactful experiences.
          </h2>
        </div>

        <div className="who-we-are-cards animate-on-scroll animate-fade-up animate-delay-200" ref={cardsRef}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ 
                backgroundColor: service.bgColor,
                animationDelay: `${0.1 * (index + 1)}s`
              }}
            >
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
