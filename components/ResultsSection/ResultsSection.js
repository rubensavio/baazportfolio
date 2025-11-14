'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./ResultsSection.scss";

const ResultsSection = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const results = {
    qualityImprovements: [
      "Defect Detection Rate: Improved from 76.8% to 99.7%",
      "Customer Returns: Reduced by 94% (from 12.3% to 0.7%)",
      "False Positive Rate: Only 0.3% (vs. 8.2% with human inspection)",
      "Inspection Consistency: 99.97% across all shifts and operators",
      "Microscopic Defect Detection: 847% improvement for sub-0.5mm defects",
    ],
    speedEfficiency: [
      "Inspection Speed: 14x faster (3.2 seconds to 0.23 seconds per component)",
      "Production Throughput: Increased by 34% with no quality compromise",
      "Inspection Coverage: 100% of components (vs. 23% sampling rate)",
      "24/7 Operation: No breaks, no shift changes, no coffee breaks",
    ],
    costImpact: [
      "Quality Inspector Redeployment: 47 inspectors moved to value-added roles",
      "Annual Savings: $4.2M in reduced returns and warranty claims",
      "Productivity Gains: $1.8M in increased throughput",
      "ROI: 278% in the first year",
      "Payback Period: 11.7 months",
    ],
  };

  return (
    <section className="results-section">
      <div className="results-section-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="results-title">
          The Results: Numbers That Made the CEO Do a Victory Dance
        </h2>

        <div className="results-grid">
          <div className="results-category">
            <h3 className="category-title">Quality Improvements</h3>
            <ul className="results-list">
              {results.qualityImprovements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="results-category">
            <h3 className="category-title">Speed & Efficiency Gains</h3>
            <ul className="results-list">
              {results.speedEfficiency.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="results-category">
            <h3 className="category-title">Cost Impact</h3>
            <ul className="results-list">
              {results.costImpact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

