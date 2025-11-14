'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./IndustryComparison.scss";

const IndustryComparison = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const competitorIssues = [
    "ElectroMax Corp: Still using 2x magnification and human eyes, 15.7% customer return rate",
    "ComponentCrafters: Hired 20 additional inspectors to handle quality issues, increasing costs by 34%",
    "MicroTech Industries: Lost their largest automotive client due to recurring defect issues",
  ];

  const futureImpacts = [
    "Achieved Six Sigma quality levels (3.4 defects per million opportunities)",
    "Expanded to 5 additional production lines",
    "Licensed their quality processes to two competitor factories",
    "Developed custom AI models for specialized component types",
  ];

  return (
    <section className="industry-comparison">
      <div className="industry-comparison-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <div className="comparison-grid">
          <div className="comparison-column">
            <h2 className="comparison-title">
              Industry Comparison: The competitive Advantage
            </h2>
            <p className="comparison-description">
              While Our company was revolutionizing quality control, competitors
              struggled:
            </p>
            <ul className="comparison-list">
              {competitorIssues.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="comparison-conclusion">
              Our company's defect rates became so low that clients started using
              them as their primary supplier, leading to a 67% increase in orders
              within 8 months.
            </p>
          </div>

          <div className="comparison-column">
            <h2 className="comparison-title">
              Looking Forward: The Future of Quality Control
            </h2>
            <p className="comparison-description">
              One year post-implementation, Our company has:
            </p>
            <ul className="comparison-list">
              {futureImpacts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="comparison-quote">
              "Viz Pro didn't just improve our quality—it revolutionized how we
              think about manufacturing," Rajesh reflects. "We went from reactive
              quality control to predictive quality intelligence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryComparison;

