import Link from "next/link";
import { ArrowLinkIcon } from "../icons/ArrowIcons";
import Reveal from "./Reveal";
import { HOME_CTA } from "../../lib/homePageData";

export default function HomeCTA() {
  const { heading, leftLines, contact, reassurance, briefHref, callHref } = HOME_CTA;

  return (
    <section className="home-cta-section" aria-labelledby="home-cta-heading">
      <div className="home-wrap">
        <Reveal>
          <h2 id="home-cta-heading" className="home-cta-heading">
            {heading}
          </h2>
        </Reveal>

        <div className="home-cta-body">
          <div className="home-cta-left">
            {leftLines.map((line, i) => (
              <p key={i} className="home-cta-line">{line}</p>
            ))}
            <div className="home-cta-actions">
              <Link href={briefHref} className="home-cta-btn home-cta-btn--primary">
                Get in touch
              </Link>
              <Link href={callHref} className="home-cta-btn home-cta-btn--outline">
                Schedule a call
              </Link>
            </div>
            <p className="home-cta-reassurance">{reassurance}</p>
          </div>

          <div className="home-cta-contact">
            <h3 className="home-cta-contact-title">{contact.title}</h3>

            <div className="home-cta-row">
              <span className="home-cta-icon">📍</span>
              <div>
                {contact.addresses.map((addr) => (
                  <p key={addr.label} className="home-cta-addr">
                    <strong>{addr.label}:</strong><br />
                    {addr.text}
                  </p>
                ))}
              </div>
            </div>

            <div className="home-cta-row">
              <span className="home-cta-icon">📞</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>

            <div className="home-cta-row">
              <span className="home-cta-icon">✉️</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>

            <div className="home-cta-row">
              <span className="home-cta-icon">👤</span>
              <span>{contact.role}</span>
            </div>

            <div className="home-cta-row">
              <span className="home-cta-icon">🔗</span>
              <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
