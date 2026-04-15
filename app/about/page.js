'use client';

import React from "react";
import dynamic from 'next/dynamic';
import { ABOUT_FAQ_ITEMS } from '../../lib/aboutFaq';
import "./page.scss";

const Headroom = dynamic(() => import('react-headroom'), { ssr: false });
const Navbar = dynamic(() => import('../../components/Navbar/Navbar'), { ssr: false });
const WhoWeAreSection = dynamic(() => import('../../components/WhoWeAreSection/WhoWeAreSection'));
const OurValues = dynamic(() => import('../../components/OurValues/OurValues'));
const CTA = dynamic(() => import('../../components/CTA/CTA'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer/Footer'), { ssr: false });
const FAQ = dynamic(() => import('../../components/FAQ/FAQ'));

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
      <FAQ
        faqs={ABOUT_FAQ_ITEMS}
        heading="About Baaz — common questions"
      />
      <CTA />
      <Footer />
    </div>
  );
}

