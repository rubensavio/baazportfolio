"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./CaseStudyHero.scss";

const CaseStudyHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const statistics = [
    {
      id: 1,
      value: "12.3%",
      label: "Defect Rate",
      description: "Discovered by customer(ouch!)",
      bgColor: "#ffffff",
    },
    {
      id: 2,
      value: "47",
      label: "Quality Inspector",
      description: "Working in shifts, squinting at microscopic components",
      bgColor: "#ffffff",
    },
    {
      id: 3,
      value: "$ 2.8M",
      label: "Annual Cost",
      description: "annual cost of returned products and warranty claims",
      bgColor: "#ffffff",
    },
    {
      id: 4,
      value: "156 hr",
      label: "visual inspection",
      description: "per week spent on manual visual inspection",
      bgColor: "#ffffff",
    },
    {
      id: 5,
      value: "23%",
      label: "Of defect",
      description: "Missed by human eyes due to fatigue",
      bgColor: "#ffffff",
    },
    {
      id: 6,
      value: "67%",
      label: "customer complaints",
      description: "Increase in over 18 months",
      bgColor: "#ffffff",
    },
    {
      id: 7,
      value: "3.2 Sec",
      label: "Average inspection time",
      description: "3.2 seconds per component (way too slow!)",
      bgColor: "#ffffff",
    },
  ];

  // Count-up helper that animates only on first mount (or when visible)
  const CountUpText = ({ value, duration = 1200 }) => {
    // Parse left (exact), numeric core, and right (exact)
    const { left, number, decimals, right } = useMemo(() => {
      const raw = String(value);
      // Prefer a robust number grab
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

    const [display, setDisplay] = useState(String(value)); // SSR-safe initial
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
          const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
          const current = number * eased;
          const formattedNumber =
            decimals > 0
              ? current.toFixed(decimals)
              : Math.round(current).toString();
          setDisplay(`${left}${formattedNumber}${right}`);
          if (t < 1) requestAnimationFrame(animate);
        };

        // Initialize from zero
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

      // Fallback if IO not available
      startAnimation();
    }, [number, decimals, left, right, duration]);

    return <span ref={elRef}>{display}</span>;
  };

  return (
    <section className="case-study-hero">
      <div className="case-study-hero-background">
        <img
          src="/assets/workHeroSectionBg.svg"
          alt="Case Study background"
          className="case-study-hero-bg-image"
          width={1200}
          height={600}
          fetchPriority="high"
        />
      </div>
      <div className="case-study-hero-wrapper">
        <span
          className={`case-study-label animate-fade-up ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          Case Study
        </span>
        <h1
          className={`case-study-heading animate-fade-up animate-delay-100 ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          Viz Pro - When AI Becomes Your Factory's Eagle-Eyed Quality Inspector
        </h1>

        <div
          className={`problem-content animate-fade-up animate-delay-200 ${
            isLoaded ? "animate-in" : ""
          }`}
        >
          <p className="problem-description">
            <span className="problem-title-label">The Problem:</span> The
            Million-Dollar Microscopic Mayhem Meet Dr. Rajesh Sharma, Quality
            Control Director at a leading electronics component manufacturing
            factory in Chennai, India. Every day, his factory produces 847,000
            capacitors, and resistors that end up in everything from consumer
            electronics to commercial grade electronics. The catch? A single
            defective component could turn a $2,000 order into an expensive
            paperweight.
          </p>

          <div className="nightmare-numbers">
            <h3 className="nightmare-title">The nightmare numbers:</h3>
            <div className="statistics-grid">
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

export default CaseStudyHero;
