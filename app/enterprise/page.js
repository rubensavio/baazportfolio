'use client';

import React from "react";
import dynamic from 'next/dynamic';

const Headroom = dynamic(() => import('react-headroom'), { ssr: false });
const Navbar = dynamic(() => import('../../components/Navbar/Navbar'), { ssr: false });
const EnterpriseHero = dynamic(() => import('../../components/EnterpriseHero/EnterpriseHero'), { ssr: false });
const EnterpriseSolutions = dynamic(() => import('../../components/EnterpriseSolutions/EnterpriseSolutions'), { ssr: false });
const EnterpriseBenefits = dynamic(() => import('../../components/EnterpriseBenefits/EnterpriseBenefits'), { ssr: false });
const EnterpriseCTA = dynamic(() => import('../../components/EnterpriseCTA/EnterpriseCTA'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer/Footer'), { ssr: false });

export default function Enterprise() {
  return (
    <div className="enterprise">
      <Headroom>
        <Navbar />
      </Headroom>
      <EnterpriseHero />
      <EnterpriseSolutions />
      <EnterpriseBenefits />
      <EnterpriseCTA />
      <Footer />
    </div>
  );
}

