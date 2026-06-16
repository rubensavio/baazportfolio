import Link from "next/link";
import {
  INDIA_ADDRESS_LINE,
  US_ADDRESS_LINE,
} from "../../lib/companyAddresses";
import { HOME_SERVICES, INDUSTRIES_WE_SERVE } from "../../lib/homePageData";
import "./Footer.scss";

const Footer = () => {
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
              <a href="mailto:support@baaz.pro" className="footer-email">
                support@baaz.pro
              </a>
              <span className="footer-address">
                India (HQ): {INDIA_ADDRESS_LINE}
              </span>
              <span className="footer-address footer-address-us">
                United States: {US_ADDRESS_LINE}
              </span>
            </address>
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
              <a
                href="https://x.com/baaz_hq"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Baaz on X"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-primary">
              {/* What we do Column - mirrors the nav */}
              <div className="footer-column">
                <h3 className="footer-column-title">What we do</h3>
                <ul className="footer-list">
                  {HOME_SERVICES.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries we serve Column - mirrors the nav */}
              <div className="footer-column">
                <h3 className="footer-column-title">Industries we serve</h3>
                <ul className="footer-list">
                  {INDUSTRIES_WE_SERVE.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
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
                </ul>
              </div>
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
