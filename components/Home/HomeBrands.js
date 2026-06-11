import Image from "next/image";
import Reveal from "./Reveal";
import { BRANDS, TRUSTED_BY } from "../../lib/brandsData";

export default function HomeBrands() {
  const { heading, intro, tagline, footer, pillars } = TRUSTED_BY;

  return (
    <section className="home-section home-trusted-section" aria-labelledby="home-trusted-heading">
      <div className="home-wrap">
        <Reveal className="home-trusted-header">
          <h2 id="home-trusted-heading">{heading}</h2>
          <p className="home-trusted-intro">{intro}</p>
          <p className="home-trusted-tagline">{tagline}</p>
        </Reveal>

        <div className="home-trusted-grid">
          {BRANDS.map((brand) => {
            const isSvg = brand.logo.endsWith(".svg");
            return (
              <div key={brand.id} className="home-trusted-logo">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="home-trusted-logo-img"
                  loading="lazy"
                  unoptimized={isSvg}
                />
              </div>
            );
          })}
          {Array.from({ length: (4 - (BRANDS.length % 4)) % 4 }).map((_, i) => (
            <div key={`empty-${i}`} className="home-trusted-logo" />
          ))}
        </div>

        <p className="home-trusted-footer">{footer}</p>

        <div className="home-trusted-pillars">
          {pillars.map((p) => (
            <div key={p.title} className="home-trusted-pillar">
              <p dangerouslySetInnerHTML={{ __html: p.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
