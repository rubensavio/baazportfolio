"use client";

import Image from "next/image";
import { BRANDS } from "../../lib/brandsData";

const durationPerLogoSec = 3;
const animationDurationSec = BRANDS.length * durationPerLogoSec;

export default function HomeBrands() {
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="home-brands" aria-label="Trusted by leading brands">
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
                className="home-brand-logo"
                style={{ height: brand.height }}
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
    </section>
  );
}
