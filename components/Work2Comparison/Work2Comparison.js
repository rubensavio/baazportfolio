'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Comparison.scss";

const Work2Comparison = () => {
  const headerRef = useScrollAnimation();
  const firstCardRef = useScrollAnimation({ threshold: 0.2 });
  const secondCardRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="work2-comparison-section">
      <div className="work2-comparison-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <div className="comparison-grid">
          <div className="comparison-card">
            <h2 className="comparison-title">
              The Competitive Edge: Industry Comparison
            </h2>
            <div className="comparison-content animate-on-scroll animate-fade-up" ref={firstCardRef}>
              <p>While CloudScale was transforming their hiring, competitors struggled:</p>
              <ul className="comparison-list">
                <li>
                  <strong>TechCorp Inc.:</strong> Still manually screening 400+
                  applications per role, average time-to-hire: 127 days
                </li>
                <li>
                  <strong>StartupXpress:</strong> Lost 12 qualified candidates to
                  faster-moving companies
                </li>
                <li>
                  <strong>MegaSoft:</strong> Spent $2.3M on external recruiters with
                  mixed results
                </li>
              </ul>
              <p>
                CloudScale's new hiring speed became a competitive advantage, allowing
                them to secure top talent before competitors even finished their
                first-round screenings.
              </p>
            </div>
          </div>

          <div className="comparison-card">
            <h2 className="comparison-title">
              Looking Forward: The Future of Recruitment
            </h2>
            <div className="comparison-content animate-on-scroll animate-fade-up animate-delay-200" ref={secondCardRef}>
              <p>Six months post-implementation, CloudScale has:</p>
              <ul className="comparison-list">
                <li>
                  Scaled their engineering team from 47 to 93 developers
                </li>
                <li>Maintained quality while doubling hiring velocity</li>
                <li>
                  Reduced recruitment team stress (Sarah no longer has Monday morning
                  email anxiety)
                </li>
                <li>
                  Established themselves as an "employer of choice" in their market
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work2Comparison;

