"use client";

import ClientNavbar from "../ClientNavbar/ClientNavbar";
import HomeHero from "../Home/HomeHero";
import HomeMarquee from "../Home/HomeMarquee";
import HomePhilosophy from "../Home/HomePhilosophy";
import HomeBrands from "../Home/HomeBrands";
import HomeWork from "../Home/HomeWork";
import HomeServices from "../Home/HomeServices";
import HomeIndustriesBento from "../Home/HomeIndustriesBento";
import HomeTechDepth from "../Home/HomeTechDepth";
import HomeImpact from "../Home/HomeImpact";
import HomeMidCTA from "../Home/HomeMidCTA";
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
        <HomeMarquee />
        <HomePhilosophy />
        <HomeBrands />
        <HomeWork />
        <hr className="home-rule" />
        <HomeServices />
        <HomeIndustriesBento />
        <HomeTechDepth />
        <HomeImpact />
        <HomeMidCTA />
        <HomeWhyBaaz />
        <HomeStats />
        <HomeTestimonials />
        <HomeCTA />
        <HomeFaq />
      </main>
      <Footer />
    </div>
  );
}
