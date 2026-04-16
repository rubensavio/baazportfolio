"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getRegionLabel } from "../../lib/regions";
import { caseStudiesData } from "../../lib/caseStudiesData";
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
            <address className="footer-contact">
              <a href="mailto:support@baaz.live" className="footer-email">
                support@baaz.live
              </a>
              <span className="footer-address">
                WeWork, RMZ Latitude, Hebbal, Bengaluru, Karnataka 560024
              </span>
            </address>
            {regionLabel && <p className="footer-region-line">{regionLabel}</p>}
            <div className="footer-social">
              <a
                href="https://in.linkedin.com/company/baazpro"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Baaz on LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links: primary columns, then case studies row */}
          <div className="footer-links">
            <div className="footer-links-primary">
              {/* Our Services Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">Our Services</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/services/product-strategy">
                      Product Strategy
                    </Link>
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
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/enterprise">Enterprise</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case studies — full-width row below primary columns */}
            <div className="footer-case-studies-row" aria-labelledby="footer-case-studies-heading">
              <h3 id="footer-case-studies-heading" className="footer-case-studies-heading">
                Case studies
              </h3>
              <ul className="footer-case-studies-links">
                <li>
                  <Link href="/case-studies">All case studies</Link>
                </li>
                {caseStudiesData.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} title={item.title}>
                      {item.footerLabel ?? item.title}
                    </Link>
                  </li>
                ))}
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
