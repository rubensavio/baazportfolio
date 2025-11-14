'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./ChallengesLessons.scss";

const ChallengesLessons = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const hiccups = [
    {
      title: "Over-Sensitivity Initially:",
      description:
        "The AI was too eager, flagging minor cosmetic issues that didn't affect functionality. Fine-tuning the tolerance levels took 3 weeks.",
    },
    {
      title: "Integration Complexity:",
      description:
        "Connecting Viz Pro to existing manufacturing execution systems required custom APIs and workflow adjustments.",
    },
    {
      title: "Change Management:",
      description:
        'Some experienced inspectors felt threatened by the technology. Retraining them as "Quality Analysts" who interpret AI findings improved acceptance.',
    },
  ];

  const successFactors = [
    "Comprehensive Training Data: The AI needed millions of component images to learn effectively",
    "Domain Expertise Integration: Combining AI capabilities with human quality knowledge",
    "Gradual Implementation: Parallel testing built confidence before full deployment",
    "Continuous Learning: Regular model updates based on new defect types",
  ];

  return (
    <section className="challenges-lessons">
      <div className="challenges-lessons-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="challenges-lessons-title">Challenges and Lessons Learned</h2>

        <div className="hiccups">
          <h3 className="section-subtitle">The Hiccups</h3>
          {hiccups.map((hiccup, index) => (
            <div key={index} className="challenge-item">
              <strong>{hiccup.title}</strong> {hiccup.description}
            </div>
          ))}
        </div>

        <div className="success-factors">
          <h3 className="section-subtitle">Critical Success Factors</h3>
          <ol className="success-factors-list">
            {successFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ChallengesLessons;

