'use client';

import React from "react";
import Link from "next/link";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <Link href="/">
              <img src="/assets/Logo.svg" alt="Baaz logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              Software product development on steroids. Building world-class
              digital products since 2018.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {/* Services Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Services</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/services/product-strategy">Product strategy</Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design">UI/UX Design</Link>
                </li>
                <li>
                  <Link href="/services/web-development">Web Development</Link>
                </li>
                <li>
                  <Link href="/services/mobile-app">Mobile Apps</Link>
                </li>
                <li>
                  <Link href="/services/ai-solution">AI Solution</Link>
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
                  <a href="#case-studies">Case studies</a>
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
          <p className="footer-copyright">© 2025 Baaz. All rights reserved</p>
          <div className="footer-legal">
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-of-service">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
