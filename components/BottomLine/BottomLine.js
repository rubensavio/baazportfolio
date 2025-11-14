'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./BottomLine.scss";

const BottomLine = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const categories = [
    {
      id: 1,
      title: "For Quality Teams:",
      bgColor: "#e8f0ff",
      benefits: [
        "Eliminates inspection fatigue and human error",
        "Provides unprecedented defect detection capabilities",
        "Enables data-driven quality improvements",
        "Transforms reactive to predictive quality management",
      ],
    },
    {
      id: 2,
      title: "For Manufacturing Operations:",
      bgColor: "#fef9f3",
      benefits: [
        "Increases production speed without compromising quality",
        "Reduces waste and rework costs",
        "Improves customer satisfaction and retention",
        "Provides competitive advantage in quality-sensitive markets",
      ],
    },
    {
      id: 3,
      title: "For Business Leadership:",
      bgColor: "#f3e8ff",
      benefits: [
        "Significant cost savings and revenue protection",
        "Enhanced brand reputation for quality",
        "Reduced regulatory and compliance risks",
        "Scalable solution for facility expansion",
      ],
    },
  ];

  return (
    <section className="bottom-line">
      <div className="bottom-line-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="bottom-line-title">
          The Bottom Line: Why Viz Pro is a Manufacturing Game-Changer
        </h2>

        <div className="bottom-line-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bottom-line-card"
              style={{ backgroundColor: category.bgColor }}
            >
              <h3 className="bottom-line-card-title">{category.title}</h3>
              <ul className="bottom-line-list">
                {category.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomLine;

