"use client";

import Link from "next/link";
import { ArrowLinkIcon } from "../icons/ArrowIcons";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Reveal from "../Home/Reveal";
import { ABOUT_FAQ_ITEMS } from "../../lib/aboutFaq";
import {
  ABOUT_CLOSING,
  ABOUT_HERO,
  ABOUT_ORIGIN,
  ABOUT_SHOW_UP,
  ABOUT_TEAM,
  ABOUT_VALUES,
} from "../../lib/aboutPageData";
import { HOME_CTA } from "../../lib/homePageData";
import "./AboutPageClient.scss";

export default function AboutPageClient() {
  return (
    <div className="baaz-v2 about-v2">
      <ClientNavbar />

      <section className="about-hero" aria-label="About Baaz">
        <Reveal as="h1" className="about-hero-statement v2-display">
          {ABOUT_HERO.statement}
        </Reveal>
        <div className="about-hero-meta">
          {ABOUT_HERO.stats.map((stat) => (
            <div key={stat.label} className="about-hero-meta-item">
              <span className="about-hero-meta-val v2-display">
                {stat.value}
                {stat.suffix && (
                  <span className="v2-accent">{stat.suffix}</span>
                )}
              </span>
              <span className="about-hero-meta-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-origin">
        <div className="v2-wrap">
          <div className="about-origin-grid">
            <Reveal className="about-origin-aside">
              <div className="v2-label about-origin-aside-title">
                {ABOUT_ORIGIN.label}
              </div>
              <p className="about-origin-quote v2-display">
                &ldquo;{ABOUT_ORIGIN.quote}&rdquo;
              </p>
            </Reveal>
            <Reveal className="about-origin-body" delay={0.1}>
              {ABOUT_ORIGIN.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-heading">
        <div className="v2-wrap">
          <Reveal className="about-values-header">
            <h2 id="about-values-heading" className="v2-display">
              {ABOUT_VALUES.heading}
            </h2>
            <p className="about-values-sub">{ABOUT_VALUES.sub}</p>
          </Reveal>
          {ABOUT_VALUES.items.map((value, index) => (
            <Reveal
              key={value.num}
              className="about-value-row"
              delay={index * 0.05}
            >
              <span className="about-value-num">{value.num}</span>
              <h3 className="about-value-title v2-display">{value.title}</h3>
              <p className="about-value-body">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="about-values about-show-up"
        aria-labelledby="about-show-up-heading"
      >
        <div className="v2-wrap">
          <div className="about-values-header about-show-up-header">
            <h2 id="about-show-up-heading" className="v2-display">
              {ABOUT_SHOW_UP.heading}
            </h2>
          </div>
          {ABOUT_SHOW_UP.items.map((value, index) => (
            <Reveal
              key={value.num}
              className="about-value-row"
              delay={index * 0.05}
            >
              <span className="about-value-num">{value.num}</span>
              <h3 className="about-value-title v2-display">
                {value.titleLines.map((line, lineIndex) => (
                  <span key={line}>
                    {line}
                    {lineIndex < value.titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className="about-value-body">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-team" id="team" aria-labelledby="about-team-heading">
        <div className="v2-wrap">
          <Reveal className="about-team-header">
            <h2 id="about-team-heading" className="v2-display">
              {ABOUT_TEAM.heading}
            </h2>
          </Reveal>
          <Reveal className="about-team-grid" delay={0.1}>
            {ABOUT_TEAM.members.map((member) => (
              <article key={member.name} className="about-team-card">
                <div
                  className={`about-team-initial${member.initialLarge ? " about-team-initial--large" : ""}`}
                  aria-hidden="true"
                >
                  {member.initial}
                </div>
                <h3 className="about-team-name">{member.name}</h3>
                <p className="about-team-role">{member.role}</p>
                <p className="about-team-bio">{member.bio}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <div className="v2-faq">
        <FAQ faqs={ABOUT_FAQ_ITEMS} heading="About Baaz — common questions" />
      </div>

      <section className="about-closing" aria-labelledby="about-closing-heading">
        <div className="v2-wrap">
          <Reveal className="about-closing-inner">
            <h2 id="about-closing-heading" className="about-closing-quote v2-display">
              &ldquo;{ABOUT_CLOSING.quote}&rdquo;
            </h2>
            <div className="about-closing-right">
              {ABOUT_CLOSING.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <div className="v2-cta-actions">
                <Link
                  href={HOME_CTA.briefHref}
                  className="v2-arrow-link v2-arrow-link--light v2-cta-brief-link"
                >
                  Get in touch <ArrowLinkIcon />
                </Link>
                <Link
                  href={HOME_CTA.callHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-arrow-link v2-arrow-link--light v2-cta-call-link"
                >
                  Schedule a call <ArrowLinkIcon />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
