'use client';

import React from "react";
import dynamic from 'next/dynamic';
import EnterpriseHero from '../../components/EnterpriseHero/EnterpriseHero';
import EnterpriseSolutions from '../../components/EnterpriseSolutions/EnterpriseSolutions';
import EnterpriseBenefits from '../../components/EnterpriseBenefits/EnterpriseBenefits';

const Headroom = dynamic(() => import('react-headroom'), { ssr: false });
const Navbar = dynamic(() => import('../../components/Navbar/Navbar'), { ssr: false });
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

