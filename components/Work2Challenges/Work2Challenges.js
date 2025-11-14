"use client";

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Challenges.scss";

const Work2Challenges = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="work2-challenges-section">
      <div
        className="work2-challenges-wrapper animate-on-scroll animate-fade-up"
        ref={headerRef}
      >
        <h2 className="challenges-title">Challenges and Lessons Learned</h2>

        <div
          className="challenges-content animate-on-scroll animate-fade-up"
          ref={contentRef}
        >
          <div className="challenges-section">
            <h3 className="section-subtitle">The Hiccups</h3>
            <ul className="challenges-list">
              <li>
                <strong>Initial Over-Reliance:</strong> Early adopters tried to
                completely automate decisions, forgetting the human element.
                Suprflow works best as an intelligent assistant, not a
                replacement for human judgment.
              </li>
              <li>
                <strong>Cultural Fit Calibration:</strong> The AI initially
                struggled with assessing cultural fit, leading to technically
                excellent but culturally misaligned hires. Regular calibration
                sessions with HR resolved this.
              </li>
              <li>
                <strong>The Perfectionist Trap:</strong> Some managers became
                obsessed with the AI's rankings, forgetting that a 85% match
                might be better than waiting months for a 95% match.
              </li>
            </ul>
          </div>

          <div className="challenges-section">
            <h3 className="section-subtitle">Key Success Factors</h3>
            <ol className="success-list">
              <li>
                <strong>Change Management:</strong> Extensive training for
                recruiters and hiring managers
              </li>
              <li>
                <strong>Continuous Calibration:</strong> Regular feedback loops
                to improve AI accuracy
              </li>
              <li>
                <strong>Human Oversight:</strong> Maintaining human
                decision-making for final selections
              </li>
              <li>
                <strong>Transparent Communication:</strong> Clearly explaining
                the process to candidates
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work2Challenges;
