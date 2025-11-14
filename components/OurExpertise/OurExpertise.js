'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./OurExpertise.scss";

const OurExpertise = () => {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation({ threshold: 0.2 });

  const expertise = [
    {
      id: 1,
      number: "01",
      title: "Product Engineering",
      description:
        "End-to-end development of digital products with a focus on intuitive user experience and scalable architecture.",
      icon: "/assets/Product-Engineering.svg",
    },
    {
      id: 2,
      number: "02",
      title: "Emerging Technologies",
      description:
        "Integrate cutting-edge AI/ML, AR/VR and generative AI solutions to future-proof your business.",
      icon: "/assets/Engineering-Technologies.svg",
    },
    {
      id: 3,
      number: "03",
      title: "Enterprise Solutions",
      description:
        "Custom enterprise applications, ERP systems and internal tools designed for your specific business needs.",
      icon: "/assets/Enterprise-Solutions.svg",
    },
  ];

  return (
    <section className="our-expertise">
      <div className="our-expertise-header animate-on-scroll animate-fade-up" ref={headerRef}>
        <span className="our-expertise-label">Our Expertise</span>
        <h2 className="our-expertise-heading">
          We deliver innovative solutions across diverse technologies and
          industry verticals.
        </h2>
      </div>

      <div className="our-expertise-container">
        <div className="our-expertise-cards animate-on-scroll animate-fade-up animate-delay-200" ref={cardsRef}>
          {expertise.map((item, index) => (
            <div 
              key={item.id} 
              className="expertise-card"
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <span className="card-number">{item.number}</span>
              <div className="card-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
