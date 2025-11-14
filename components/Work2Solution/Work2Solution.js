'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Solution.scss";

const Work2Solution = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const capabilities = [
    {
      id: 1,
      title: "Smart Application Collection & Analysis",
      bgColor: "#FFF7F2",
      features: [
        "Automated parsing of resumes in 47+ formats",
        "Skills extraction and verification against project portfolios",
        "Experience validation through cross-platform analysis",
      ],
    },
    {
      id: 2,
      title: "Merit-Based Intelligent Ranking",
      bgColor: "#ECF0FB",
      features: [
        "Multi-dimensional scoring algorithm",
        "Technical skills assessment",
        "Cultural fit prediction",
        "Growth potential analysis",
      ],
    },
    {
      id: 3,
      title: "Dynamic Task Assignment",
      bgColor: "#EDE2FF",
      features: [
        "Automatic selection of relevant coding challenges",
        "Role-specific scenario-based questions",
        "Adaptive difficulty based on candidate level",
      ],
    },
    {
      id: 4,
      title: "Comprehensive Evaluation engine",
      bgColor: "#FBF6EF",
      features: [
        "Code quality analysis",
        "Problem-solving approach assessment",
        "Time management evaluation",
        "Communication skills review",
      ],
    },
  ];

  return (
    <section className="work2-solution-section">
      <div className="work2-solution-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <div className="solution-story">
          <p>
            "I felt like I was playing recruitment roulette," Sarah recalls. "We'd spend weeks reviewing applications, only to discover our 'perfect candidate' couldn't actually code their way out of a paper bag during the technical assessment."
          </p>
          <p>
            The breaking point came when Sarah's team accidentally rejected a candidate who had previously built the payment system for a unicorn startup - his resume was buried under a pile of bootcamp graduates with flashier LinkedIn profiles but questionable semicolon usage.
          </p>
          <p>
            Enter Suprflow: The Recruitment Superhero Nobody Asked For (But Everyone Needed)
          </p>
          <p>
            CloudScale Technologies decided to pilot Suprflow, an intelligent recruitment automation platform that promised to transform their hiring chaos into a well-oiled machine.
          </p>
        </div>

        <h3 className="work2-capabilities-title">Core Features</h3>

        <div className="work2-capabilities-grid">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="work2-capability-card"
              style={{ backgroundColor: capability.bgColor }}
            >
              <h4 className="work2-capability-title">{capability.title}</h4>
              <ul className="work2-capability-features">
                {capability.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work2Solution;

