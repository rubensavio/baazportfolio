import Link from "next/link";
import { HOME_HERO } from "../../lib/homePageData";

export default function HomeHero() {
  const { headline, sub, ctas, ctaNote, stats } = HOME_HERO;

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
            <div className="home-hero-cta-buttons">
              {ctas.map((cta) =>
                cta.external ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`home-cta-btn home-cta-btn--${cta.style}`}
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={`home-cta-btn home-cta-btn--${cta.style}`}
                  >
                    {cta.label}
                  </Link>
                ),
              )}
            </div>
            <p className="home-hero-cta-note">{ctaNote}</p>
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
