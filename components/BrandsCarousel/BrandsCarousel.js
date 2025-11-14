'use client';

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
      name: "Nalli",
      logo: "/assets/Brands/Nalli.svg",
      width: "187px",
      height: "40px",
    },
    {
      id: 5,
      name: "Pestle",
      logo: "/assets/Brands/Pestle.svg",
      width: "187px",
      height: "40px",
    },
    {
      id: 6,
      name: "Uber",
      logo: "/assets/Brands/Uber.svg",
      width: "187px",
      height: "30px",
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

  return (
    <section className="brands-carousel">
      <div className="brands-carousel-container">
        <div className="brands-carousel-wrapper">
          <div className="brands-carousel-track">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="brand-logo"
                style={{
                  width: brand.width,
                  height: brand.height,
                }}
              >
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
