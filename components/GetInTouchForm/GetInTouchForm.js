"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";

const COUNTRY_FALLBACK = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "Canada", code: "CA" },
  { name: "India", code: "IN" },
  { name: "Australia", code: "AU" },
];

function Form() {
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
    if (sent) alert("Thanks! Your message has been sent.");
    else if (error) alert("Sorry, something went wrong. Please try again.");
  }, [sent, error]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) =>
        setCountries(
          data
            .map((c) => ({ name: c.name.common, code: c.cca2 }))
            .sort((a, b) => a.name.localeCompare(b.name))
        )
      )
      .catch(() => setCountries(COUNTRY_FALLBACK))
      .finally(() => setLoadingCountries(false));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="get-in-touch-page">
      <ClientNavbar />

      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          <div className="form-header">
            <h1 className="form-title">
              Let&apos;s help you solve your complex problem
            </h1>
            <p className="form-subtitle">
              Tell us about your project and we&apos;ll get back to you with a
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
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" name="name" className="form-input"
                  placeholder="Enter your name" value={formData.name}
                  onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" name="email" className="form-input"
                  placeholder="Enter your email" value={formData.email}
                  onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input type="text" id="company" name="company" className="form-input"
                  placeholder="Enter your company name" value={formData.company}
                  onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="country" className="form-label">Country</label>
                <select id="country" name="country" className="form-select"
                  value={formData.country} onChange={handleChange}
                  required disabled={loadingCountries}>
                  <option value="">
                    {loadingCountries ? "Loading countries..." : "Select Country"}
                  </option>
                  {countries.map((c) => (
                    <option key={c.code} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea id="description" name="description" className="form-textarea"
                placeholder="Tell us about your project..." value={formData.description}
                onChange={handleChange} rows="6" required />
            </div>

            <button type="submit" className="form-submit-button" disabled={submitting}>
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
          <Link href="/work1" className="view-work-button">View Our Work</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function GetInTouchForm() {
  return (
    <Suspense
      fallback={
        <div className="get-in-touch-page">
          <ClientNavbar />
          <section className="contact-form-section">
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h1 className="form-title">
                  Let&apos;s help you solve your complex problem
                </h1>
                <p className="form-subtitle">
                  Tell us about your project and we&apos;ll get back to you
                  with a detailed proposal and next steps.
                </p>
              </div>
              <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
            </div>
          </section>
          <Footer />
        </div>
      }
    >
      <Form />
    </Suspense>
  );
}
