"use client";

import ClientNavbar from "../ClientNavbar/ClientNavbar";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Reveal from "../Home/Reveal";
import HomeCTA from "../Home/HomeCTA";
import HomePhilosophy from "../Home/HomePhilosophy";
import HomeWhyBaaz from "../Home/HomeWhyBaaz";
import { ABOUT_FAQ_ITEMS } from "../../lib/aboutFaq";
import {
  ABOUT_HERO,
  ABOUT_SHOW_UP,
  // ABOUT_TEAM, // team section hidden for now
} from "../../lib/aboutPageData";
import "./AboutPageClient.scss";

export default function AboutPageClient() {
  return (
    <div className="baaz-v2 about-v2 home-v2">
      <ClientNavbar />

      <section className="about-hero" aria-label="About Baaz">
        <div className="about-hero-body">
          <Reveal as="h1" className="about-hero-statement">
            {ABOUT_HERO.statement}
          </Reveal>
        </div>
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

      <HomePhilosophy />

      <HomeWhyBaaz />

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

      {/* "The people behind the work" team section - hidden for now
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
      */}

      <section className="about-aeo-qa v2-wrap" aria-labelledby="about-qa-heading">
        <Reveal>
          <h2 id="about-qa-heading" className="v2-display">How does Baaz deliver custom software development?</h2>
          <p>Baaz follows a discovery-to-launch process: we map your real workflows, define measurable outcomes, then design, engineer, and ship production systems — not templates. Every engagement is organized around named milestones and written acceptance criteria so you track progress, not just hours.</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="v2-display">Why do enterprises choose Baaz for product engineering?</h2>
          <p>Enterprises choose Baaz for end-to-end ownership: strategy, UI/UX, full-stack development, AI integration, and post-launch scaling under one roof. With 26+ countries served and $2B in business value generated since 2018, Baaz brings the delivery discipline of a large consultancy at startup speed.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="v2-display">How do I hire developers from Baaz?</h2>
          <p>Start with a <a href="/book-call">free discovery call</a>. We scope the engagement, agree on milestones, and assign a dedicated team for <a href="/services">custom software development</a> or <a href="/enterprise">enterprise solutions</a>. Most projects kick off within two weeks of alignment.</p>
        </Reveal>
      </section>

      <div className="v2-faq">
        <FAQ faqs={ABOUT_FAQ_ITEMS} heading="About Baaz - common questions" />
      </div>

      <HomeCTA />

      <Footer />
    </div>
  );
}
