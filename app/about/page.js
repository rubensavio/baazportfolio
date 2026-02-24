'use client';

import React from "react";
import dynamic from 'next/dynamic';
import "./page.scss";

const Headroom = dynamic(() => import('react-headroom'), { ssr: false });
const Navbar = dynamic(() => import('../../components/Navbar/Navbar'), { ssr: false });
const WhoWeAreSection = dynamic(() => import('../../components/WhoWeAreSection/WhoWeAreSection'), { ssr: false });
const OurValues = dynamic(() => import('../../components/OurValues/OurValues'), { ssr: false });
const CTA = dynamic(() => import('../../components/CTA/CTA'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer/Footer'), { ssr: false });

export default function AboutUs() {
  return (
    <div className="about-us">
      <Headroom>
        <Navbar />
      </Headroom>
      <header className="about-us-header" aria-label="About Baaz">
        <h1 className="about-us-title">About Us</h1>
      </header>
      <WhoWeAreSection />
      <OurValues />
      <CTA />
      <Footer />
    </div>
  );
}

