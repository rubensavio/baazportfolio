"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "../Hero/Hero";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../Navbar/Navbar"), { ssr: false });
const WhoWeAre = dynamic(() => import("../WhoWeAre/WhoWeAre"), { ssr: false });
const BrandsCarousel = dynamic(
  () => import("../BrandsCarousel/BrandsCarousel"),
  { ssr: false }
);
const OurExpertise = dynamic(
  () => import("../OurExpertise/OurExpertise"),
  { ssr: false }
);
const HowWeWork = dynamic(() => import("../HowWeWork/HowWeWork"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("../Testimonials/Testimonials"), {
  ssr: false,
});
const CTA = dynamic(() => import("../CTA/CTA"), { ssr: false });
const HomeFaq = dynamic(() => import("../HomeFaq/HomeFaq"), { ssr: false });
const Footer = dynamic(() => import("../Footer/Footer"), { ssr: false });

export default function HomePageClient() {
  return (
    <div className="home">
      <Headroom>
        <Navbar />
      </Headroom>
      <Hero />
      <WhoWeAre />
      <BrandsCarousel />
      <OurExpertise />
      <HowWeWork />
      <Testimonials />
      <CTA />
      <HomeFaq />
      <Footer />
    </div>
  );
}
