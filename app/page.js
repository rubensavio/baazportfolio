'use client';

import React from "react";
import dynamic from 'next/dynamic';
import Hero from '../components/Hero/Hero';

const Headroom = dynamic(() => import('react-headroom'), { ssr: false });
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false });
const WhoWeAre = dynamic(() => import('../components/WhoWeAre/WhoWeAre'), { ssr: false });
const BrandsCarousel = dynamic(() => import('../components/BrandsCarousel/BrandsCarousel'), { ssr: false });
const OurExpertise = dynamic(() => import('../components/OurExpertise/OurExpertise'), { ssr: false });
const HowWeWork = dynamic(() => import('../components/HowWeWork/HowWeWork'), { ssr: false });
const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'), { ssr: false });
const CTA = dynamic(() => import('../components/CTA/CTA'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer/Footer'), { ssr: false });

export default function Home() {
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
      <Footer />
    </div>
  );
}

