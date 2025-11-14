'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2BottomLine.scss";

const Work2BottomLine = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      id: 1,
      title: "For Recruitment Teams:",
      bgColor: "#ECF0FB",
      items: [
        "Eliminates repetitive screening tasks",
        "Focuses human effort on relationship-building and strategic decisions",
        "Provides data-driven insights for continuous improvement",
      ],
    },
    {
      id: 2,
      title: "For Candidates:",
      bgColor: "#FFF7ED",
      items: [
        "Fairer, bias-free evaluation process",
        "Faster feedback and response times",
        "Better job matching based on actual skills vs. resume formatting",
      ],
    },
    {
      id: 3,
      title: "For Companies:",
      bgColor: "#EDE2FF",
      items: [
        "Significant cost savings and efficiency gains",
        "Higher quality hires with better retention",
        "Competitive advantage in talent acquisition",
      ],
    },
  ];

  return (
    <section className="work2-bottomline-section">
      <div className="work2-bottomline-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="bottomline-title">
          The Bottom Line: Why Suprflow is a Game-Changer
        </h2>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="benefit-card"
              style={{ backgroundColor: benefit.bgColor }}
            >
              <h3 className="benefit-title">{benefit.title}</h3>
              <ul className="benefit-list">
                {benefit.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work2BottomLine;

