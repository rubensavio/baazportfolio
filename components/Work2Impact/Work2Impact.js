'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Impact.scss";

const Work2Impact = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  const stories = [
    {
      id: 1,
      title: "Success Story 1",
      subtitle: "The Diamond in the Rough",
      description:
        "Maya Patel, a self-taught developer from a small town in Ohio, applied for a Senior React position. Her resume had gaps due to caregiving responsibilities, and she lacked traditional CS credentials. The old system would have filtered her out immediately.\n\nSuprflow analyzed her GitHub contributions, personal projects, and open-source work, ranking her in the top 15%. Her coding challenge submission was exceptional, demonstrating advanced React patterns and clean architecture principles. She's now CloudScale's lead frontend architect and has built their most successful product feature to date.",
    },
    {
      id: 2,
      title: "Success Story 2",
      subtitle: "The Overqualified Underdog",
      description:
        "Alex Kim had an impressive resume on paper - Stanford CS degree, FAANG experience, impressive titles. However, Suprflow's analysis revealed that his actual contributions were minimal, and his coding skills had atrophied in management roles. The system correctly ranked him lower despite his credentials, saving CloudScale from a potentially expensive mis-hire.",
    },
  ];

  return (
    <section className="work2-impact-section">
      <div className="work2-impact-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="impact-title">
          Real-World Impact: The Stories Behind the Statistics
        </h2>

        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
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

export default Work2Impact;

