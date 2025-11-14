"use client";

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./SolutionSection.scss";

const SolutionSection = () => {
  const storyRef = useScrollAnimation();
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation({ threshold: 0.15 });
  const capabilities = [
    {
      id: 1,
      title: "Ultra-High Resolution Imaging",
      bgColor: "#FFF7F2",
      features: [
        "0.1 micron defect detection capability",
        "Multi-spectral analysis (visible, UV, infrared)",
        "360-degree component inspection",
        "Real-time 3D surface mapping",
      ],
    },
    {
      id: 2,
      title: "AI-Powered Defect Classification",
      bgColor: "#ECF0FB",
      features: [
        "47 different defect types automatically identified",
        "Machine learning models trained on 12 million component images",
        "Adaptive learning from new defect patterns",
        "99.97% accuracy rate in controlled tests",
      ],
    },
    {
      id: 3,
      title: "Lightning-Fast Processing",
      bgColor: "#EDE2FF",
      features: [
        "0.23 seconds per component inspection",
        "Simultaneous multi-component analysis",
        "Real-time production line integration",
        "Zero production line slowdown",
      ],
    },
    {
      id: 4,
      title: "Comprehensive Reporting & Analytics",
      bgColor: "#FBF6EF",
      features: [
        "Defect trend analysis and prediction",
        "Root cause identification",
        "Supplier performance tracking",
        "Quality metrics dashboard",
      ],
    },
  ];

  return (
    <section className="casestudy-solution-section">
      <div className="casestudy-solution-wrapper">
        <div
          className="solution-story animate-on-scroll animate-fade-up"
          ref={storyRef}
        >
          <p>
            "I felt like I was running a casino where the house always loses,"
            Rajesh sighs. "Our inspectors would examine thousands of tiny
            components daily, and by hour six, even Superman would need reading
            glasses. Meanwhile, our biggest client was threatening to drop us
            because they found solder bridges in our premium microcontrollers."
          </p>
          <p>
            The final straw came when a batch of "perfect" components caused
            $450,000 worth of order displays to flicker like a disco ball. The
            defect? A hairline crack invisible to the naked eye but clearly
            visible under 50x magnification.
          </p>
        </div>

        <div
          className="casestudy-solution-header animate-on-scroll animate-fade-up"
          ref={headerRef}
        >
          <h2 className="casestudy-solution-title">
            Enter Viz Pro: The Terminator of Tiny Defects
          </h2>
          <p className="casestudy-solution-description">
            Our company decided to pilot Viz Pro, an AI-powered computer vision
            system that promised to catch defects smaller than a human hair and
            faster than a caffeinated cheetah. The system boasted:
          </p>
        </div>

        <h3 className="casestudy-capabilities-title">Core Capabilities</h3>

        <div
          className="casestudy-capabilities-grid animate-on-scroll animate-fade-up animate-delay-200"
          ref={cardsRef}
        >
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="casestudy-capability-card"
              style={{ backgroundColor: capability.bgColor }}
            >
              <h4 className="casestudy-capability-title">{capability.title}</h4>
              <ul className="casestudy-capability-features">
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

export default SolutionSection;
