'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Implementation.scss";

const Work2Implementation = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const phases = [
    {
      id: 1,
      phase: "Phase1",
      days: "Days 1-30",
      title: "The Setup",
      description:
        'The Suprflow team integrated with CloudScale\'s existing ATS and configured the system for their tech stack. Initial skepticism from the recruitment team was palpable - "Another tool that promises to solve everything," muttered Tom, a senior recruiter who\'d seen more recruitment software than a SaaS trade show.',
    },
    {
      id: 2,
      phase: "Phase2",
      days: "Days 31-60",
      title: "The Testing",
      description: "The first major test came with hiring for three positions:",
      bullets: [
        "Senior Full-Stack Developer",
        "DevOps Engineer",
        "Product Manager (Technical)",
      ],
      results: "Initial Results:",
      resultItems: [
        "Applications processed: 1,247 across three roles",
        "Time to initial shortlist: 4 hours (vs. previous 3 weeks)",
        "False positives reduced by 73%",
        "Qualified candidates identified: 89% accuracy rate",
      ],
    },
    {
      id: 3,
      phase: "Phase3",
      days: "Days 61-90",
      title: "Full Development",
      description:
        "With confidence building, CloudScale rolled out Suprflow across all technical hiring.",
    },
  ];

  return (
    <section className="work2-implementation-section">
      <div className="work2-implementation-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="implementation-title">
          Implementation Journey : 90 Days of Transformation
        </h2>

        <div className="phases-timeline animate-on-scroll animate-fade-up" ref={contentRef}>
          {phases.map((phase) => (
            <div key={phase.id} className="phase-item">
              <div className="phase-number">{phase.id}</div>
              <div className="phase-content">
                <div className="phase-header">
                  <span className="phase-label">{phase.phase}</span>
                  <span className="phase-days">{phase.days}</span>
                </div>
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-description">{phase.description}</p>
                {phase.bullets && (
                  <ul className="phase-bullets">
                    {phase.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {phase.results && (
                  <>
                    <p className="phase-results-label">{phase.results}</p>
                    <ul className="phase-results">
                      {phase.resultItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work2Implementation;

