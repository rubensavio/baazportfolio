"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      category: formData.category,
      description: formData.description,
    };

    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    fetch(
      "https://script.google.com/macros/s/AKfycbwxOTAO3R8NeDjdklw1PpqkQHW7_II9BdjEpjhb3DFCUDUDgVnDrUbESI3dTd5ijDeF4g/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(() => {
        alert("Form submitted successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          company: "",
          category: "",
          description: "",
        });
      })
      .catch((err) => {
        alert("Error submitting form. Please try again.");
        console.error(err);
      })
      .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      });
  };

  return (
    <div className="get-in-touch-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          <div className="form-header">
            <h1 className="form-title">
              Let's help you solve your complex problem
            </h1>
            <p className="form-subtitle">
              Tell us about your project and we'll get back to you with a
              detailed proposal and next steps.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Event Management">Event Management</option>
                  <option value="Job Portal">Job Portal</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-textarea"
                placeholder="Tell us about your project..."
                value={formData.description}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="ready-to-build-section">
        <div className="ready-to-build-wrapper">
          <h2 className="ready-title">Ready to build something amazing?</h2>
          <p className="ready-description">
            Join hundreds of satisfied clients who have transformed their ideas
            into successful digital products with our help.
          </p>
          <Link href="/work1" className="view-work-button">
            View Our Work
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
