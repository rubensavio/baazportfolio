"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HOME_SERVICES, INDUSTRIES_WE_SERVE } from "../../lib/homePageData";
import "./Navbar.scss";

// "What we do" groups mirror the home-page section. Each group is its own page.
const WHAT_WE_DO_GROUPS = HOME_SERVICES.map((service) => ({
  title: service.title,
  href: service.href,
}));

const SERVICES_PATHS = [
  "/enterprise",
  "/ecommerce",
  "/gtm-engineering",
  "/technologies",
  "/services",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <img
              src="/assets/Logo.png"
              alt="baaz logo"
              width={120}
              height={32}
            />
          </Link>
        </div>

        {/* Desktop Navigation - logo links home; no separate Home item */}
        <ul className="navbar-menu desktop-menu">
          <li className="navbar-item dropdown">
            <Link
              href="/services"
              className={`navbar-link ${
                pathname &&
                SERVICES_PATHS.some(
                  (p) => pathname === p || pathname.startsWith(`${p}/`),
                )
                  ? "active"
                  : ""
              }`}
            >
              <span className="link-text">What we do</span>
              <span className="dropdown-icon">▼</span>
            </Link>
            <div className="dropdown-menu services-mega-menu">
              <div className="services-mega-grid">
                {WHAT_WE_DO_GROUPS.map((group) => (
                  <div className="wwd-group" key={group.title}>
                    <Link href={group.href} className="wwd-group-title">
                      {group.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <a
              href="#"
              className={`navbar-link ${
                pathname?.startsWith("/industry") ||
                pathname?.startsWith("/erp")
                  ? "active"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span className="link-text">Industries we serve</span>
              <span className="dropdown-icon">▼</span>
            </a>
            <div className="dropdown-menu industries-single-menu">
              <div className="mega-column">
                {INDUSTRIES_WE_SERVE.map(({ label, href }) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <Link
              href="/blog"
              className={`navbar-link ${
                pathname?.startsWith("/blog") ? "active" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/about"
              className={`navbar-link ${pathname === "/about" ? "active" : ""}`}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <Link href="/get-in-touch" className="navbar-cta-btn">
          Get in touch
        </Link>

        {/* Mobile Hamburger Menu */}
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="mobile-menu-item mobile-dropdown">
                <div className="mobile-dropdown-row">
                  <Link
                    href="/services"
                    onClick={toggleMenu}
                    className="mobile-dropdown-label-link"
                  >
                    What we do
                  </Link>
                  <button
                    className="mobile-dropdown-toggle"
                    onClick={toggleServicesDropdown}
                    aria-expanded={isServicesDropdownOpen}
                    aria-label="Toggle services menu"
                  >
                    <span
                      className={`dropdown-icon ${
                        isServicesDropdownOpen ? "open" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                </div>
                {isServicesDropdownOpen && (
                  <ul className="mobile-dropdown-menu">
                    {WHAT_WE_DO_GROUPS.map((group) => (
                      <li key={group.title}>
                        <Link href={group.href} onClick={toggleMenu}>
                          {group.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="mobile-menu-item mobile-dropdown">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleIndustriesDropdown();
                  }}
                >
                  Industries we serve
                  <span
                    className={`dropdown-icon ${
                      isIndustriesDropdownOpen ? "open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </a>
                {isIndustriesDropdownOpen && (
                  <ul className="mobile-dropdown-menu">
                    {INDUSTRIES_WE_SERVE.map(({ label, href }) => (
                      <li key={href}>
                        <Link href={href} onClick={toggleMenu}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="mobile-menu-item">
                <Link href="/blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link href="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
