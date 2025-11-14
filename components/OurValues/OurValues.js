'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./OurValues.scss";

const OurValues = () => {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation({ threshold: 0.2 });

  const values = [
    {
      id: 1,
      icon: "/assets/Speedy.svg",
      title: "Speedy Delivery",
      description:
        "We believe in turning ideas into reality—fast. Our agile approach ensures rapid design and development without compromising on quality. At Baaz, speed isn't just about timelines—it's about momentum and impact.",
    },
    {
      id: 2,
      icon: "/assets/Hyper.svg",
      title: "Hyper Optimization",
      description:
        "Every pixel and every line of code matters. We relentlessly refine and optimize our products for performance, usability, and scalability—ensuring that what we build not only works, but works brilliantly.",
    },
    {
      id: 3,
      icon: "/assets/Beautfull.svg",
      title: "Beautiful Experiences",
      description:
        "We craft interfaces that don't just function—they delight. From sleek UI to intuitive interactions, we prioritize aesthetics and usability to create digital experiences that users love and remember.",
    },
  ];

  return (
    <section className="our-values">
      <div className="our-values-wrapper">
        <div className="our-values-header animate-on-scroll animate-fade-up" ref={headerRef}>
          <span className="our-values-label">Our Values</span>
          <h2 className="our-values-heading">What Guides Us</h2>
          <p className="our-values-description">
            Core principles that define our work and culture
          </p>
        </div>

        <div className="our-values-cards animate-on-scroll animate-fade-up animate-delay-200" ref={cardsRef}>
          {values.map((value, index) => (
            <div 
              key={value.id} 
              className="value-card"
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <div className="value-icon">
                <img src={value.icon} alt={value.title} />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
