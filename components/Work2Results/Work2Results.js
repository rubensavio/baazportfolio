'use client';

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Results.scss";

const Work2Results = () => {
  const headerRef = useScrollAnimation();
  const resultsGridRef = useScrollAnimation({ threshold: 0.2 });
  const unexpectedGridRef = useScrollAnimation({ threshold: 0.2 });

  const mainResults = [
    {
      id: 1,
      title: "Time Savings",
      bgColor: "#EDE2FF",
      items: [
        "Previous Process: 156 hours per month on manual screening",
        "With Suprflow: 23 hours per month on review and decision-making",
        "Time Saved: 133 hours per month (85% reduction)",
        "Equivalent to: 3.3 full-time employees worth of work",
      ],
    },
    {
      id: 2,
      title: "Quality Improvements",
      bgColor: "#FFF7ED",
      items: [
        "Technical Assessment Pass Rate: Increased from 34% to 78%",
        "90-Day Retention Rate: Improved from 71% to 94%",
        'Performance Reviews: 89% of AI-selected hires rated "exceeds expectations" or higher',
        "Hiring Manager Satisfaction: Jumped from 6.2/10 to 9.1/10",
      ],
    },
    {
      id: 3,
      title: "Cost Impact",
      bgColor: "#ECF0FB",
      items: [
        "Cost per Hire: Reduced from $47,000 to $18,500 (61% decrease)",
        "Time to Hire: Dropped from 89 days to 31 days",
        "Annual Savings: $847,000 across 34 hires",
        "ROI: 340% in the first year",
      ],
    },
  ];

  const unexpectedBenefits = [
    {
      id: 1,
      title: "Bias Reduction",
      bgColor: "#EDE2FF",
      items: [
        "The AI's blind evaluation process led to:",
        "43% increase in diverse candidate shortlisting",
        "67% more candidates from non-traditional backgrounds progressing to final rounds",
        'Elimination of "gut feeling" decisions that often masked unconscious bias',
      ],
    },
    {
      id: 2,
      title: "Candidate Experience Enhancement",
      bgColor: "#ECF0FB",
      items: [
        "Automated feedback provided to all candidates",
        "92% candidate satisfaction rate (up from 61%)",
        "Average response time reduced from 2 weeks to 24 hours",
      ],
    },
  ];

  return (
    <section className="work2-results-section">
      <div className="work2-results-wrapper animate-on-scroll animate-fade-up" ref={headerRef}>
        <h2 className="results-main-title">
          The Results: Numbers That Made the CFO Actually Smile
        </h2>

        <div className="results-grid animate-on-scroll animate-fade-up" ref={resultsGridRef}>
          {mainResults.map((result) => (
            <div
              key={result.id}
              className="result-card"
              style={{ backgroundColor: result.bgColor }}
            >
              <h3 className="result-title">{result.title}</h3>
              <ul className="result-list">
                {result.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="results-unexpected-title">Unexpected benefits</h2>

        <div className="unexpected-grid animate-on-scroll animate-fade-up animate-delay-200" ref={unexpectedGridRef}>
          {unexpectedBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="unexpected-card"
              style={{ backgroundColor: benefit.bgColor }}
            >
              <h3 className="unexpected-title">{benefit.title}</h3>
              <div className="unexpected-content">
                {benefit.items.map((item, index) => (
                  <p key={index} className={index === 0 ? "intro-text" : ""}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work2Results;

