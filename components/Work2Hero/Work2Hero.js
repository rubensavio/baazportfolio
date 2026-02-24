"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2Hero.scss";

const Work2Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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

  // Count-up helper (SSR-safe, starts on visibility)
  const CountUpText = ({ value, duration = 1200 }) => {
    const { left, number, decimals, right } = useMemo(() => {
      const raw = String(value);
      let match = raw.match(/^(.*?)(\d*\.?\d+|\d+)(.*)$/);
      let numericPart = match && match[2] ? match[2] : "";
      if (!numericPart) {
        const alt = raw.match(/(\d*\.?\d+|\d+)/);
        if (alt) {
          numericPart = alt[0];
          const idx = raw.indexOf(numericPart);
          match = [
            raw,
            raw.slice(0, idx),
            numericPart,
            raw.slice(idx + numericPart.length),
          ];
        }
      }
      const decimalIndex = numericPart.indexOf(".");
      const decimals =
        decimalIndex >= 0 ? numericPart.length - decimalIndex - 1 : 0;
      return {
        left: (match && match[1]) ?? "",
        number: numericPart ? Number(numericPart) : NaN,
        decimals,
        right: (match && match[3]) ?? "",
      };
    }, [value]);

    const [display, setDisplay] = useState(String(value));
    const startedRef = useRef(false);
    const elRef = useRef(null);

    useEffect(() => {
      if (Number.isNaN(number)) return;

      const nowFn =
        typeof performance !== "undefined" && performance.now
          ? () => performance.now()
          : () => Date.now();

      const startAnimation = () => {
        if (startedRef.current) return;
        startedRef.current = true;
        const startTs = nowFn();
        const endTs = startTs + duration;

        const animate = (now) => {
          const t = Math.min(1, (now - startTs) / (endTs - startTs));
          const eased = 1 - Math.pow(1 - t, 3);
          const current = number * eased;
          const formattedNumber =
            decimals > 0
              ? current.toFixed(decimals)
              : Math.round(current).toString();
          setDisplay(`${left}${formattedNumber}${right}`);
          if (t < 1) requestAnimationFrame(animate);
        };

        const initialNumber = decimals > 0 ? (0).toFixed(decimals) : "0";
        setDisplay(`${left}${initialNumber}${right}`);
        requestAnimationFrame(animate);
      };

      if (typeof IntersectionObserver !== "undefined" && elRef.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                startAnimation();
                observer.disconnect();
              }
            });
          },
          { threshold: 0.25 }
        );
        observer.observe(elRef.current);
        return () => observer.disconnect();
      }

      startAnimation();
    }, [number, decimals, left, right, duration]);

    return <span ref={elRef}>{display}</span>;
  };

  return (
    <section className="work2-hero">
      <div className="work2-hero-background">
        <img
          src="/assets/workHeroSectionBg.svg"
          alt="Case Study background"
          className="work2-hero-bg-image"
          width={1200}
          height={600}
          fetchPriority="high"
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
                  <div className="stat-value">
                    <CountUpText value={stat.value} />
                  </div>
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
