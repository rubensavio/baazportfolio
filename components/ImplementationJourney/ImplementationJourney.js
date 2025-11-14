"use client";

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./ImplementationJourney.scss";

const ImplementationJourney = () => {
  const headerRef = useScrollAnimation();
  const timelineRef = useScrollAnimation({ threshold: 0.15 });

  const phases = [
    {
      id: 1,
      phaseNumber: "Phase1",
      days: "Days 1-45",
      title: "The Setup & Training",
      content: [
        "The Viz Pro team installed 12 high-resolution cameras and AI processing units across Our company's three main production lines. Initial skepticism from the quality team was... substantial.",
        '"Another fancy gadget that\'ll probably think dust particles are defects," grumbled Priya, a 15-year veteran inspector who could spot a misaligned component from across the room.',
        "The AI system spent the first month learning from Our company's specific manufacturing environment, analyzing over 2.3 million components to understand normal variations versus actual defects.",
      ],
    },
    {
      id: 2,
      phaseNumber: "Phase2",
      days: "Days 46-75",
      title: "Parallel Testing",
      content: [
        "Viz Pro ran alongside human inspectors, comparing results without affecting production. The results were... eye-opening.",
        "• Human inspectors flagged: 12,847 defects",
        "• Viz Pro flagged: 19,234 defects",
        "• Verified actual defects: 18,956 defects",
        "• Human accuracy: 67.7%",
        "• AI accuracy: 98.5%",
        "The AI was catching microscopic solder bridges, component misalignments, and surface contamination that even experienced inspectors missed.",
      ],
    },
    {
      id: 3,
      phaseNumber: "Phase3",
      days: "Days 76-120",
      title: "Full Development",
      content: [
        "With confidence building (and jaws dropping), Our company gradually transitioned to AI-primary inspection with human oversight.",
        "The Results: Numbers That Made the CEO Do a Victory Dance",
      ],
    },
  ];

  return (
    <section className="implementation-journey">
      <div className="implementation-journey-wrapper">
        <h2
          className="implementation-title animate-on-scroll animate-fade-up"
          ref={headerRef}
        >
          Implementation Journey : 120 Days from Skepticism to success
        </h2>

        <div
          className="timeline animate-on-scroll animate-fade-up animate-delay-200"
          ref={timelineRef}
        >
          {phases.map((phase, index) => (
            <div key={phase.id} className="timeline-phase">
              <div className="phase-number-circle">{index + 1}</div>
              <div className="phase-content">
                <div className="phase-tags">
                  <span className="phase-tag">{phase.phaseNumber}</span>
                  <span className="phase-tag">{phase.days}</span>
                </div>
                <h3 className="phase-title">{phase.title}</h3>
                <div className="phase-description">
                  {phase.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationJourney;
