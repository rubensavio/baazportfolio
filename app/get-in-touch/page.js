"use client";

import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

function GetInTouchForm() {
  // Read redirect params in a client-safe way
  const searchParams = useSearchParams();
  const sent = searchParams?.get("sent") === "1";
  const error = searchParams?.get("error") === "1";
  const [isMounted, setIsMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    description: "",
  });

  useEffect(() => {
    setIsMounted(true);
    if (sent) {
      alert("Thanks! Your message has been sent.");
    } else if (error) {
      alert("Sorry, something went wrong. Please try again.");
    }
  }, [sent, error]);

  // Fetch countries list on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        if (response.ok) {
          const data = await response.json();
          // Sort countries alphabetically by name
          const sortedCountries = data
            .map((country) => ({
              name: country.name.common,
              code: country.cca2,
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
          setCountries(sortedCountries);
        } else {
          // Fallback to a basic list if API fails
          setCountries([
            { name: "United States", code: "US" },
            { name: "United Kingdom", code: "GB" },
            { name: "Canada", code: "CA" },
            { name: "India", code: "IN" },
            { name: "Australia", code: "AU" },
          ]);
        }
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        // Fallback list
        setCountries([
          { name: "United States", code: "US" },
          { name: "United Kingdom", code: "GB" },
          { name: "Canada", code: "CA" },
          { name: "India", code: "IN" },
          { name: "Australia", code: "AU" },
        ]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            {isMounted && sent && (
              <p className="form-success" role="status">
                Thanks! Your message has been sent.
              </p>
            )}
            {isMounted && error && (
              <p className="form-error" role="alert">
                Sorry, something went wrong. Please try again.
              </p>
            )}
          </div>

          <form
            className="contact-form"
            action="/api/send-contact"
            method="POST"
            onSubmit={() => setSubmitting(true)}
          >
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
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="form-select"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  disabled={loadingCountries}
                >
                  <option value="">
                    {loadingCountries
                      ? "Loading countries..."
                      : "Select Country"}
                  </option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
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

            <button
              type="submit"
              className="form-submit-button"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
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

export default function GetInTouch() {
  return (
    <Suspense
      fallback={
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
              <div style={{ padding: "2rem", textAlign: "center" }}>
                Loading...
              </div>
            </div>
          </section>
          <Footer />
        </div>
      }
    >
      <GetInTouchForm />
    </Suspense>
  );
}
