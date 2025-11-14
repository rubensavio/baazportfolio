'use client';

import React, { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Testimonials.scss";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headerRef = useScrollAnimation();
  const cardRef = useScrollAnimation({ threshold: 0.2 });

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Baaz delivered beyond expectations. Their team truly understands product development and business needs. We launched faster and smarter with their help.",
      name: "Ravi Verma",
      title: "Digital Marketing Specialist",
      avatar: "/assets/uerDP.svg",
    },
    {
      id: 2,
      rating: 5,
      text: "Baaz transformed our early-stage idea into a polished, scalable fintech product. Their attention to detail and communication made all the difference.",
      name: "Daniel Thompson",
      title: "Product Designer",
      avatar: "/assets/uerDP.svg",
    },
    {
      id: 3,
      rating: 5,
      text: "Working with Baaz was a game-changer. They delivered a robust solution on time and within budget. Highly recommended!",
      name: "Sarah Johnson",
      title: "CEO, TechStart",
      avatar: "/assets/uerDP.svg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonials-content">
          {/* Left side - Header and Navigation */}
          <div className="testimonials-header animate-on-scroll animate-fade-up" ref={headerRef}>
            <span className="testimonials-label">TESTIMONIAL</span>
            <h2 className="testimonials-heading">
              We've build trust with reviews from real users
            </h2>
            <p className="testimonials-description">
              Boost your credibility by featuring genuine testimonials from real
              users, showcasing their positive experiences and satisfaction with
              Baaz services.
            </p>

            {/* Navigation Arrows */}
            <div className="testimonials-navigation">
              <button
                className="nav-button prev"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                className="nav-button next"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
          </div>

          {/* Right side - Testimonial Cards */}
          <div className="testimonials-cards animate-on-scroll animate-fade-left animate-delay-200" ref={cardRef}>
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  {/* Star Rating */}
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <svg
                        key={index}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#FFB800"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="testimonial-text">{testimonial.text}</p>

                  {/* User Info */}
                  <div className="testimonial-user">
                    <div className="user-avatar">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      ) : (
                        <div className="avatar-placeholder">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="user-info">
                      <h4 className="user-name">{testimonial.name}</h4>
                      <p className="user-title">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

