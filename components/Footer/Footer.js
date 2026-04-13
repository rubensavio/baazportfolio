"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getRegionLabel } from "../../lib/regions";
import "./Footer.scss";

const Footer = () => {
  const [regionLabel, setRegionLabel] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRegionLabel(getRegionLabel(window.location.hostname));
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <Link href="/">
              <img
                src="/assets/Logo.svg"
                alt="Baaz logo"
                className="footer-logo"
                width={120}
                height={32}
              />
            </Link>
            <p className="footer-tagline">
              Enterprise-grade products, without the enterprise wait.
            </p>
            {regionLabel && <p className="footer-region-line">{regionLabel}</p>}
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {/* Our Services Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Our Services</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/services/product-strategy">Product Strategy</Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/services/web-development">Custom Software</Link>
                </li>
                <li>
                  <Link href="/services/mobile-app">Mobile App</Link>
                </li>
                <li>
                  <Link href="/services/ai-solution">AI Development</Link>
                </li>
                <li>
                  <Link href="/enterprise">Enterprise</Link>
                </li>
                <li>
                  <Link href="/ecommerce">E-commerce</Link>
                </li>
                <li>
                  <Link href="/gtm-engineering">GTM Engineering</Link>
                </li>
                <li>
                  <Link href="/project-rescue">Project Rescue</Link>
                </li>
                <li>
                  <Link href="/work1">Manufacturing quality automation</Link>
                </li>
                <li>
                  <Link href="/work2">Hiring and HRMS automation</Link>
                </li>
              </ul>
            </div>

            {/* ERP Solutions Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">ERP Solutions</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/erp/insurance-companies">Insurance</Link>
                </li>
                <li>
                  <Link href="/erp/manufacturing-companies">Manufacturing</Link>
                </li>
                <li>
                  <Link href="/erp/banking-companies">Banking</Link>
                </li>
                <li>
                  <Link href="/erp/healthcare-companies">Healthcare</Link>
                </li>
                <li>
                  <Link href="/erp/hospitals">Hospitals</Link>
                </li>
                <li>
                  <Link href="/erp/real-estate-companies">Real Estate</Link>
                </li>
                <li>
                  <Link href="/erp/construction-companies">Construction</Link>
                </li>
                <li>
                  <Link href="/erp/automobile-companies">Automobile</Link>
                </li>
                <li>
                  <Link href="/erp/transportation-supply-chain-companies">
                    Transportation and Supply Chain
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Industries</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/industry/fintech">FinTech</Link>
                </li>
                <li>
                  <Link href="/industry/construction">Construction Tech</Link>
                </li>
                <li>
                  <Link href="/industry/retail">Retail</Link>
                </li>
                <li>
                  <Link href="/industry/healthcare">Healthcare</Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Company</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/case-studies">Case studies</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/enterprise">Enterprise</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Baaz. All rights reserved</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
