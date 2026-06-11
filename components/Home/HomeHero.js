import Link from "next/link";
import { ArrowLinkIcon } from "../icons/ArrowIcons";
import { HOME_HERO } from "../../lib/homePageData";

export default function HomeHero() {
  const { headline, sub, cta, stats } = HOME_HERO;

  return (
    <section className="home-hero">
      <div className="home-hero-body">
        <h1
          className="home-hero-headline home-hero-headline--serif"
          dangerouslySetInnerHTML={{ __html: headline }}
        />

        <div className="home-hero-foot">
          <p className="home-hero-sub">{sub}</p>
          <div className="home-hero-cta">
            <Link
              href={cta.href}
              className="home-arrow-link home-arrow-link--light"
            >
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
      </div>
    </section>
  );
}
