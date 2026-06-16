"use client";

import ClientNavbar from "../ClientNavbar/ClientNavbar";
import HomeHero from "../Home/HomeHero";
import HomePhilosophy from "../Home/HomePhilosophy";
import HomeBrands from "../Home/HomeBrands";
import HomeWork from "../Home/HomeWork";
import HomeServices from "../Home/HomeServices";
import HomeIndustriesBento from "../Home/HomeIndustriesBento";
import HomeImpact from "../Home/HomeImpact";
import HomeWhyBaaz from "../Home/HomeWhyBaaz";
import HomeStats from "../Home/HomeStats";
import HomeTestimonials from "../Home/HomeTestimonials";
import HomeCTA from "../Home/HomeCTA";
import HomeFaq from "../HomeFaq/HomeFaq";
import Footer from "../Footer/Footer";
import "./HomePageClient.scss";

export default function HomePageClient() {
  return (
    <div className="baaz-v2 home-v2">
      <ClientNavbar />
      <main>
        <HomeHero />
        <HomePhilosophy />
        <HomeBrands />
        <HomeWork />
        <hr className="home-rule" />
        <HomeServices />
        <HomeIndustriesBento />
        <HomeImpact />
        <HomeWhyBaaz />
        <HomeStats />
        <HomeTestimonials />
        <HomeFaq />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
