'use client';

import React, { useState } from "react";
import "./FAQ.scss";

const FAQ = ({ faqs, heading }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-wrapper">
        <h2 className="faq-heading">{heading || "Frequently Asked Questions"}</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
