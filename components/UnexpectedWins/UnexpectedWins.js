"use client";

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./UnexpectedWins.scss";

const UnexpectedWins = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const supplyChainInsights = [
    "Supplier A's components showed 23% more micro-cracks on Mondays (weekend storage issue)",
    "Production line 2 had 67% more contamination after lunch shifts (cleaning protocol adjusted)",
    "Component batch #QX-4791 had consistent solder joint issues (raw material problem identified)",
  ];

  const predictiveQuality = [
    "Temperature fluctuation correlation with defect rates",
    "Humidity impact on solder joint quality",
    "Machine maintenance scheduling based on defect pattern changes",
  ];

  return (
    <section className="unexpected-wins">
      <div
        className="unexpected-wins-wrapper animate-on-scroll animate-fade-up"
        ref={headerRef}
      >
        <h2 className="unexpected-wins-title">The Unexpected Wins</h2>

        <div
          className="wins-content animate-on-scroll animate-fade-up"
          ref={contentRef}
        >
          <div className="win-category">
            <h3 className="win-subtitle">
              Supply Chain Intelligence: Viz Pro didn't just find defects—it
              revealed patterns:
            </h3>
            <ul className="win-list">
              {supplyChainInsights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="win-category">
            <h3 className="win-subtitle">
              Predictive Quality: The AI began predicting defect trends 2-3
              weeks in advance, allowing proactive adjustments:
            </h3>
            <ul className="win-list">
              {predictiveQuality.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnexpectedWins;
