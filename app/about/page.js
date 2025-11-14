'use client';

import React from "react";
import dynamic from 'next/dynamic';

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
      <WhoWeAreSection />
      <OurValues />
      <CTA />
      <Footer />
    </div>
  );
}

