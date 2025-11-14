"use client";

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Hero.scss";

const Work2Hero = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const statistics = [
    {
      id: 1,
      value: "847",
      label: "Application",
      description: "for a single senior backend engineer position",
      bgColor: "#ffffff",
    },
    {
      id: 2,
      value: "23 hr",
      label: "Screening Resume",
      description: "per week spent manually screening resumes",
      bgColor: "#FFFFFF",
    },
    {
      id: 3,
      value: "156",
      label: "Different Resume",
      description:
        "formats (including one candidate who submitted theirs as a haiku)",
      bgColor: "#ffffff",
    },
    {
      id: 4,
      value: "34%",
      label: "Qualified candidate missed",
      description: "due to human screening fatigue",
      bgColor: "#ffffff",
    },
    {
      id: 5,
      value: "$47,000",
      label: "Average",
      description: "Cost per hire",
      bgColor: "#FFFFFF",
    },
    {
      id: 6,
      value: "89",
      label: "days average",
      description: "time-to-hire",
      bgColor: "#ffffff",
    },
  ];

  return (
    <section className="work2-hero">
      <div className="work2-hero-background">
        <img
          src="/assets/workHeroSectionBg.svg"
          alt="Case Study background"
          className="work2-hero-bg-image"
        />
      </div>
      <div className="work2-hero-wrapper">
        <span
          className={`work2-label animate-fade-up ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          Case Study
        </span>
        <h1
          className={`work2-heading animate-fade-up animate-delay-100 ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          Suprflow - From Resume Chaos to Recruitment Zen
        </h1>

        <div
          className={`problem-content animate-fade-up animate-delay-200 ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          <p className="problem-description">
            <span className="problem-title-label">The Problem:</span> When HR
            Feels Like Playing Whack-a-Mole with Resumes Meet Sarah Chen, VP of
            Talent Acquisition at CloudScale Technologies, a rapidly growing
            SaaS company in San Francisco. Every Monday morning, Sarah would
            stare at her inbox with the same expression people reserve for
            finding pineapple on pizza - a mix of horror and resignation.
          </p>

          <div className="nightmare-numbers">
            <div
              className={`statistics-grid animate-fade-up animate-delay-300 ${
                isLoaded ? "animate-in" : ""
              }`}
            >
              {statistics.map((stat) => (
                <div
                  key={stat.id}
                  className="stat-card"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work2Hero;
