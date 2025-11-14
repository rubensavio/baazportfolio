"use client";

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Work2FinalThoughts.scss";

const Work2FinalThoughts = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="work2-finalthoughts-section">
      <div
        className="work2-finalthoughts-wrapper animate-on-scroll animate-fade-up"
        ref={headerRef}
      >
        <h2 className="finalthoughts-title">
          Final Thoughts: The Human Touch in an AI World
        </h2>

        <div
          className="finalthoughts-content animate-on-scroll animate-fade-up"
          ref={contentRef}
        >
          <p>
            "Suprflow didn't replace our recruitment team," Sarah reflects. "It
            made us superhuman. We now spend our time on what humans do best -
            building relationships, understanding nuanced needs, and making
            strategic decisions. The AI handles the heavy lifting, and we focus
            on the heart of recruitment: connecting great people with great
            opportunities."
          </p>
          <p>
            The numbers speak for themselves, but the real success story is in
            the transformed experience for everyone involved. CloudScale
            Technologies went from recruitment chaos to hiring excellence,
            proving that the right AI tool doesn't replace human judgment - it
            amplifies it.
          </p>
          <p className="closing-cta">
            Ready to transform your recruitment process? Suprflow is helping
            companies worldwide hire smarter, faster, and fairer. Because in the
            war for talent, you need every advantage you can get.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work2FinalThoughts;
