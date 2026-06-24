"use client";

import React from "react";
import Image from "next/image";
import { BRANDS } from "../../lib/brandsData";
import "./BrandsCarousel.scss";

const BrandsCarousel = () => {
  const brands = BRANDS;

  // Duplicate brands multiple times for seamless infinite scroll
  // Need enough duplicates so the loop is seamless
  const duplicatedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ];

  // Keep speed consistent regardless of brand count
  // ~1.6s per logo width looks smooth; tweak as desired
  const durationPerLogoSec = 1.6;
  const animationDurationSec = brands.length * durationPerLogoSec;

  return (
    <section className="brands-carousel">
      <div className="brands-carousel-container">
        <div className="brands-carousel-wrapper">
          <div
            className="brands-carousel-track"
            style={{
              ["--count"]: brands.length,
              ["--duration"]: `${animationDurationSec}s`,
            }}
          >
            {duplicatedBrands.map((brand, index) => {
              const w = parseInt(String(brand.width), 10);
              const h = parseInt(String(brand.height), 10);
              const isSvg = brand.logo.endsWith(".svg");
              return (
                <div
                  key={`${brand.id}-${index}`}
                  className="brand-logo"
                  style={{
                    height: brand.height,
                  }}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="brand-logo-img"
                    sizes={`${w}px`}
                    loading="lazy"
                    unoptimized={isSvg}
                    style={{
                      opacity:
                        typeof brand.opacity === "number" ? brand.opacity : 0.6,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
