"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";
import { US_ADDRESS_LINE } from "../../lib/companyAddresses";

const COUNTRY_FALLBACK = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "Canada", code: "CA" },
  { name: "India", code: "IN" },
  { name: "Australia", code: "AU" },
];

const CONTACT_CAPABILITY_LINKS = [
  { href: "/services/product-strategy", label: "Product strategy" },
  { href: "/services/ui-ux-design", label: "UI/UX design" },
  { href: "/services/web-development", label: "Custom software" },
  { href: "/services/mobile-app", label: "Mobile apps" },
  { href: "/services/ai-solution", label: "AI solutions" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/gtm-engineering", label: "GTM engineering" },
  { href: "/ecommerce", label: "E-commerce" },
];

const CONTACT_EXPLORE_LINKS = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/work1", label: "Selected work" },
  { href: "/work2", label: "More projects" },
  { href: "/about", label: "About Baaz" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "All services" },
];

const CONTACT_FAQ_ITEMS = [
  {
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We partner with early-stage teams who need velocity and with enterprise product groups that need dependable delivery, clear communication, and maintainable systems.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "Depending on the problem, we scope fixed deliverables, time-bound squads, or phased roadmaps. We will recommend the leanest option that still de-risks the build.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Yes. If you need mutual confidentiality before sharing details, mention it in your message and we will follow up with the right paperwork.",
  },
  {
    question: "Where are you based, and how do time zones work?",
    answer: `We collaborate asynchronously with clients worldwide-with overlapping hours for key reviews and decisions across the Americas, Europe, and Asia-Pacific. HQ is in Bangalore, India, with a US office at ${US_ADDRESS_LINE}.`,
  },
];

function ContactSupplemental() {
  return (
    <section
      className="contact-more-section"
      aria-labelledby="contact-more-heading"
    >
      <div className="contact-more-inner">
        <header className="contact-more-header">
          <p className="contact-more-eyebrow">Learn more</p>
          <h2 id="contact-more-heading" className="contact-more-title">
            Capabilities, proof, and other ways to reach us
          </h2>
          <p className="contact-more-lede">
            Same product engineering focus as the rest of the site-organized so
            you can skim, click through, or book time without hunting through
            long paragraphs.
          </p>
        </header>

        <div className="contact-more-grid">
          <article className="contact-info-card">
            <h3 className="contact-info-card-title">Services &amp; programs</h3>
            <p className="contact-info-card-text">
              End-to-end delivery from discovery through launch: strategy, UX,
              engineering, mobile, and AI where it earns its place-plus rescue,
              enterprise, and go-to-market support when scope demands it.
            </p>
            <ul className="contact-pill-row">
              {CONTACT_CAPABILITY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="contact-pill">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="contact-info-card">
            <h3 className="contact-info-card-title">
              Proof &amp; perspectives
            </h3>
            <p className="contact-info-card-text">
              Outcomes and craft across industries, plus how we think about
              building products. Start with case studies or work samples, then
              dig into longer writing on the blog.
            </p>
            <ul className="contact-pill-row">
              {CONTACT_EXPLORE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="contact-pill">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="contact-reach-panel">
          <div className="contact-reach-copy">
            <h3 className="contact-reach-title">
              Prefer email or a live call?
            </h3>
            <p className="contact-reach-text">
              Use whichever channel fits your workflow-we monitor both and
              respond on the same cadence as form submissions.
            </p>
          </div>
          <div className="contact-reach-actions">
            <a
              href="mailto:support@baaz.pro"
              className="contact-reach-btn contact-reach-btn--ghost"
            >
              Email support@baaz.pro
            </a>
            <Link href="/book-call" className="contact-reach-btn">
              Schedule a call
            </Link>
          </div>
        </div>

        <div className="contact-faq-anchor">
          <FAQ faqs={CONTACT_FAQ_ITEMS} heading="Common questions" />
        </div>
      </div>
    </section>
  );
}

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
            .sort((a, b) => a.name.localeCompare(b.name)),
        ),
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
              Baaz works with founders, engineering leaders, and enterprise
              product teams who need to ship production-grade software-whether
              that is a greenfield product, a platform rescue, or AI features
              built on top of existing infrastructure. Tell us what you are
              building and we will respond with a direct assessment and proposed
              next step, typically within one business day.
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
                  {countries.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.name}
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
              />
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

      <ContactSupplemental />

      <section className="ready-to-build-section">
        <div className="ready-to-build-wrapper">
          <h2 className="ready-title">Ready to build something amazing?</h2>
          <p className="ready-description">
            Join hundreds of satisfied clients who have transformed their ideas
            into successful digital products with our help.
          </p>
          <div className="ready-actions">
            <Link href="/work1" className="view-work-button">
              View Our Work
            </Link>
            <Link
              href="/case-studies"
              className="view-work-button view-work-button--secondary"
            >
              Case Studies
            </Link>
          </div>
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
                  Tell us about your project and we&apos;ll get back to you with
                  a detailed proposal and next steps.
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
      <Form />
    </Suspense>
  );
}
