"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { BRANDS, TRUSTED_BY } from "../../lib/brandsData";

const durationPerLogoSec = 3;
const animationDurationSec = BRANDS.length * durationPerLogoSec;

export default function HomeBrands() {
  const { heading, intro, tagline, footer, pillars } = TRUSTED_BY;
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="home-section home-trusted-section" aria-labelledby="home-trusted-heading">
      <div className="home-wrap">
        <Reveal className="home-trusted-header">
          <h2 id="home-trusted-heading">{heading}</h2>
          <p className="home-trusted-intro">{intro}</p>
          <p className="home-trusted-tagline">{tagline}</p>
        </Reveal>
      </div>

      <div className="home-brands">
        <div className="home-brands-wrap">
          <div
            className="home-brands-track"
            style={{
              "--count": BRANDS.length,
              "--duration": `${animationDurationSec}s`,
            }}
          >
            {duplicatedBrands.map((brand, index) => {
              const isSvg = brand.logo.endsWith(".svg");
              return (
                <div
                  key={`${brand.id}-${index}`}
                  className={`home-brand-logo${brand.large ? " home-brand-logo--large" : ""}`}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="home-brand-logo-img"
                    sizes="187px"
                    loading="lazy"
                    unoptimized={isSvg}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="home-wrap">
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
