"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FiAlertCircle, FiClock, FiMail } from "react-icons/fi";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import { ArrowLinkIcon } from "../icons/ArrowIcons";
import {
  CONTACT_FAQ_ITEMS,
  CONTACT_FORM,
  CONTACT_HERO,
  CONTACT_LEARN_MORE,
  CONTACT_METHODS,
  CONTACT_OFFICES,
} from "../../lib/contactPageData";
import "./ContactPageClient.scss";

const COUNTRY_FALLBACK = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "Canada", code: "CA" },
  { name: "India", code: "IN" },
  { name: "Australia", code: "AU" },
];

const METHOD_ICONS = {
  email: FiMail,
  call: FiClock,
  urgent: FiAlertCircle,
};

function ContactFormPanel() {
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
  }, []);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data) =>
        setCountries(
          data
            .map((country) => ({
              name: country.name.common,
              code: country.cca2,
            }))
            .sort((a, b) => a.name.localeCompare(b.name)),
        ),
      )
      .catch(() => setCountries(COUNTRY_FALLBACK))
      .finally(() => setLoadingCountries(false));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-right">
      <h2 className="contact-form-heading">{CONTACT_FORM.heading}</h2>
      <p className="contact-form-sub">{CONTACT_FORM.sub}</p>

      {isMounted && sent && (
        <p
          className="contact-form-message contact-form-message--success"
          role="status"
        >
          {CONTACT_FORM.success}
        </p>
      )}
      {isMounted && error && (
        <p
          className="contact-form-message contact-form-message--error"
          role="alert"
        >
          {CONTACT_FORM.error}
        </p>
      )}

      <form
        className="contact-form"
        action="/api/send-contact"
        method="POST"
        onSubmit={() => setSubmitting(true)}
      >
        <div className="contact-field-row">
          <div className="contact-field">
            <label htmlFor="name" className="contact-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={sent}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={sent}
            />
          </div>
        </div>

        <div className="contact-field-row">
          <div className="contact-field">
            <label htmlFor="company" className="contact-label">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="contact-input"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={sent}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="country" className="contact-label">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="contact-select"
              value={formData.country}
              onChange={handleChange}
              required
              disabled={sent || loadingCountries}
            >
              <option value="">
                {loadingCountries ? "Loading countries..." : "Select Country"}
              </option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="description" className="contact-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="contact-textarea"
            placeholder="Tell us about your project..."
            value={formData.description}
            onChange={handleChange}
            rows={6}
            required
            disabled={sent}
          />
        </div>

        <div className="contact-submit-row">
          <button
            type="submit"
            className="contact-submit"
            disabled={submitting || sent}
          >
            {submitting ? "Sending..." : CONTACT_FORM.submitLabel}
            {!submitting && <ArrowLinkIcon />}
          </button>
          <p className="contact-submit-note">{CONTACT_FORM.note}</p>
        </div>
      </form>
    </div>
  );
}

function ContactLearnMore() {
  return (
    <section
      className="contact-learn-more"
      aria-labelledby="contact-learn-more-heading"
    >
      <div className="v2-wrap contact-learn-more-inner">
        <header className="contact-learn-more-header">
          <p className="v2-label contact-learn-more-eyebrow">
            {CONTACT_LEARN_MORE.eyebrow}
          </p>
          <h2
            id="contact-learn-more-heading"
            className="contact-learn-more-title"
          >
            {CONTACT_LEARN_MORE.heading}
          </h2>
          <p className="contact-learn-more-lede">{CONTACT_LEARN_MORE.lede}</p>
        </header>

        <div className="contact-learn-more-grid">
          {CONTACT_LEARN_MORE.cards.map((card) => (
            <article key={card.title} className="contact-learn-more-card">
              <h3 className="contact-learn-more-card-title">{card.title}</h3>
              <p className="contact-learn-more-card-text">{card.text}</p>
              <ul className="contact-learn-more-pills">
                {card.links.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="contact-learn-more-pill">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPageContent() {
  return (
    <>
      <div className="contact-page">
        <aside className="contact-left">
          <div className="contact-left-top">
            <p className="contact-left-eyebrow v2-label">
              {CONTACT_HERO.eyebrow}
            </p>
            <h1 className="contact-left-title">{CONTACT_HERO.title}</h1>
            <p className="contact-left-sub">{CONTACT_HERO.sub}</p>

            <div className="contact-methods">
              {CONTACT_METHODS.map((method) => {
                const Icon = METHOD_ICONS[method.id];
                const content = (
                  <>
                    <div className="contact-method-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <p className="contact-method-title">{method.title}</p>
                      <p className="contact-method-detail">{method.detail}</p>
                    </div>
                  </>
                );

                if (method.href) {
                  if (method.href.startsWith("mailto:")) {
                    return (
                      <a
                        key={method.id}
                        href={method.href}
                        className="contact-method"
                      >
                        {content}
                      </a>
                    );
                  }

                  if (method.external || method.href.startsWith("http")) {
                    return (
                      <a
                        key={method.id}
                        href={method.href}
                        className="contact-method"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={method.id}
                      href={method.href}
                      className="contact-method"
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <div key={method.id} className="contact-method">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="contact-left-bottom">
            <address className="contact-addresses">
              {CONTACT_OFFICES.map((office) => (
                <div key={office.label} className="contact-address-block">
                  <p className="contact-address-label">{office.label}</p>
                  <p className="contact-address">{office.address}</p>
                </div>
              ))}
            </address>
          </div>
        </aside>

        <ContactFormPanel />
      </div>

      <ContactLearnMore />

      <section className="v2-faq" aria-label="Contact FAQ">
        <FAQ faqs={CONTACT_FAQ_ITEMS} heading="Common questions" />
      </section>
    </>
  );
}

function ContactPageFallback() {
  return (
    <div className="contact-page">
      <aside className="contact-left">
        <div className="contact-left-top">
          <p className="contact-left-eyebrow v2-label">
            {CONTACT_HERO.eyebrow}
          </p>
          <h1 className="contact-left-title">{CONTACT_HERO.title}</h1>
          <p className="contact-left-sub">{CONTACT_HERO.sub}</p>
        </div>
      </aside>
      <div className="contact-right">
        <p className="contact-form-sub">Loading form…</p>
      </div>
    </div>
  );
}

export default function ContactPageClient() {
  return (
    <div className="baaz-v2 contact-v2">
      <ClientNavbar />
      <Suspense fallback={<ContactPageFallback />}>
        <ContactPageContent />
      </Suspense>
      <Footer />
    </div>
  );
}
