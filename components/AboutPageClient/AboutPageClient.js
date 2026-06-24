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
  ABOUT_TEAM,
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
        <FAQ faqs={ABOUT_FAQ_ITEMS} heading="About Baaz - common questions" />
      </div>

      <HomeCTA />

      <Footer />
    </div>
  );
}
