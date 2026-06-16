"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../../lib/testimonialsData";

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section
      className="home-testimonials"
      aria-labelledby="home-testimonials-heading"
    >
      <div className="home-wrap">
        <div className="home-testimonials-content">
          <Reveal className="home-testimonials-header">
            <span className="home-label">Testimonial</span>
            <h2 id="home-testimonials-heading" className="home-testimonials-heading">
              Our customer&apos;s word
            </h2>
            <p className="home-testimonials-desc">
              Genuine feedback from teams we&apos;ve shipped with - product
              development, communication, and delivery that held up under
              pressure.
            </p>

            <div className="home-testimonials-nav">
              <button
                type="button"
                className="home-testimonials-nav-btn"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="home-testimonials-nav-btn"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </Reveal>

          <div className="home-testimonials-slider">
            <div
              className="home-testimonials-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <article key={item.id} className="home-testimonial-card">
                  <div className="home-testimonial-rating" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FFB800"
                        aria-hidden="true"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="home-testimonial-text">{item.text}</p>
                  <div className="home-testimonial-user">
                    <div className="home-testimonial-avatar">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="home-testimonial-avatar-img"
                        sizes="48px"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="home-testimonial-name">{item.name}</h3>
                      <p className="home-testimonial-title">{item.title}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
