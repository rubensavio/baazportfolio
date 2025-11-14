'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./RealWorldImpact.scss";

const RealWorldImpact = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const successStories = [
    {
      id: 1,
      title: "Success Story 1:",
      subtitle: "The Invisible Crack Catastrophe Avoided",
      description:
        "A batch of 50,000 ceramic capacitors looked perfect to human inspectors. Viz Pro flagged 347 units with hairline stress cracks invisible to the naked eye. These components would have failed within 6 months in the field, potentially costing $2.3M in smartphone warranty claims for Our company's biggest client.",
    },
    {
      id: 2,
      title: "Success Story 2:",
      subtitle: "The Contamination Detective",
      description:
        "Viz Pro detected microscopic metal particles (0.05mm) on supposedly clean PCB surfaces. Investigation revealed that a cleaning station's filter needed replacement 3 weeks early. This prevented contamination of 125,000 components and maintained Our company's aerospace certification.",
    },
    {
      id: 3,
      title: "Success Story 3:",
      subtitle: "The Solder Bridge Sleuth",
      description:
        "Human inspectors missed solder bridges smaller than 0.1mm—too small to see clearly but large enough to cause short circuits. Viz Pro caught 100% of these defects, reducing field failures by 89% for automotive clients where component failure could mean literal life-or-death situations.",
    },
  ];

  return (
    <section className="real-world-impact">
      <div className="real-world-impact-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="real-world-impact-title">
          Real-World Impact: The Stories Behind the Statistics
        </h2>

        <div className="success-stories-grid">
          {successStories.map((story) => (
            <div key={story.id} className="success-story-card">
              <h3 className="story-title">{story.title}</h3>
              <h4 className="story-subtitle">{story.subtitle}</h4>
              <p className="story-description">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldImpact;

