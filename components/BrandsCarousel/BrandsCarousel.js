"use client";

import React from "react";
import "./BrandsCarousel.scss";

const BrandsCarousel = () => {
  const brands = [
    {
      id: 1,
      name: "Damas",
      logo: "/assets/Brands/Damas.svg",
      width: "187px", // Individual width for this logo
      height: "35px", // Individual height for this logo
    },
    {
      id: 2,
      name: "Decathlon",
      logo: "/assets/Brands/Decathlon.svg",
      width: "187px",
      height: "40px",
    },
    {
      id: 3,
      name: "Livpure",
      logo: "/assets/Brands/Livpure.svg",
      width: "187px",
      height: "40px",
    },
    {
      id: 4,
      name: "Uber",
      logo: "/assets/Brands/Uber.svg",
      width: "187px",
      height: "30px",
    },
    {
      id: 5,
      name: "Kroger",
      logo: "/assets/Brands/Kroger.jpeg",
      width: "187px",
      height: "120px",
    },
    {
      id: 6,
      name: "Societe Generale",
      logo: "/assets/Brands/SocieteGenerale.jpeg",
      width: "187px",
      height: "25px",
    },
    {
      id: 7,
      name: "Societe Generale",
      logo: "/assets/Brands/UniPer.jpeg",
      width: "187px",
      height: "90px",
    },
    {
      id: 8,
      name: "WalMart",
      logo: "/assets/Brands/WallMart.jpeg",
      width: "187px",
      height: "30px",
    },
    {
      id: 9,
      name: "Volkswagen",
      logo: "/assets/Brands/VolksWagen.jpeg",
      width: "187px",
      height: "70px",
    },
    {
      id: 10,
      name: "ICICI Bank",
      logo: "/assets/Brands/IcicBank.jpeg",
      width: "187px",
      height: "50px",
    },
    {
      id: 11,
      name: "Embassy Group",
      logo: "/assets/Brands/EmbasyGroup.jpeg",
      width: "187px",
      height: "60px",
    },
    {
      id: 12,
      name: "Enel",
      logo: "/assets/Brands/Enel.jpeg",
      width: "187px",
      height: "60px",
    },
    {
      id: 13,
      name: "Karnataka Bank",
      logo: "/assets/Brands/KBL.jpeg",
      width: "187px",
      height: "60px",
    },
    {
      id: 14,
      name: "Comcast",
      logo: "/assets/Brands/Comcast.jpeg",
      width: "187px",
      height: "60px",
    },
    {
      id: 15,
      name: "BCI",
      logo: "/assets/Brands/BCI.jpeg",
      width: "187px",
      height: "50px",
    },
  ];

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
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="brand-logo"
                style={{
                  width: brand.width,
                  height: brand.height,
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    opacity:
                      typeof brand.opacity === "number" ? brand.opacity : 0.6,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
