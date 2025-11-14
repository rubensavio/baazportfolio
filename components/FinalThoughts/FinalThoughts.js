"use client";

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./FinalThoughts.scss";

const FinalThoughts = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="final-thoughts">
      <div
        className="final-thoughts-wrapper animate-on-scroll animate-fade-up"
        ref={headerRef}
      >
        <h2 className="final-thoughts-title">
          Final Thoughts: When AI Meets Manufacturing Excellence
        </h2>

        <div
          className="final-thoughts-content animate-on-scroll animate-fade-up"
          ref={contentRef}
        >
          <p className="final-thoughts-text">
            "The beauty of Viz Pro isn't just its technical capabilities," Dr.
            Sharma concludes. "It's how it amplifies human expertise. Our
            quality engineers now spend their time solving complex problems and
            optimizing processes instead of staring at tiny components all day.
            The AI handles the microscopic details while humans focus on the big
            picture."
          </p>

          <p className="final-thoughts-text">
            The transformation at our company proves that computer vision AI
            isn't just about automation—it's about achieving quality levels that
            were previously impossible. In a world where a single defective
            component can cascade into millions in losses, Viz Pro provides the
            ultimate insurance policy: perfection at the speed of light.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalThoughts;
