import Link from "next/link";
import { ArrowDownIcon, ArrowLinkIcon } from "../icons/ArrowIcons";
import { HOME_HERO } from "../../lib/homePageData";

export default function HomeHero() {
  const { eyebrow, lines, sub, cta, stats } = HOME_HERO;

  return (
    <section className="home-hero">
      <div className="home-hero-body">
        <p className="home-hero-eyebrow">
          <span className="home-hero-live">
            <span className="home-hero-live-dot" aria-hidden="true" />
            {eyebrow.live}
          </span>
          &nbsp;·&nbsp; {eyebrow.rest}
        </p>

        <h1 className="home-hero-headline home-display">
          {lines.map((line, i) => (
            <span className="home-hero-line" key={line}>
              <span className="home-hero-line-inner">
                {line}
                {i === lines.length - 1 && (
                  <span className="home-accent">.</span>
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className="home-hero-foot">
          <p className="home-hero-sub">{sub}</p>
          <div className="home-hero-cta">
            <Link href={cta.href} className="home-arrow-link home-arrow-link--light">
              {cta.label} <ArrowLinkIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="home-hero-scroll-hint">
        <div className="home-hero-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="home-hero-stat-val">
                {stat.value}
                <span className="home-accent">{stat.suffix}</span>
              </span>
              <span className="home-hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        <a href="#work" className="home-arrow-link home-hero-work-link">
          Selected work <ArrowDownIcon />
        </a>
      </div>
    </section>
  );
}
