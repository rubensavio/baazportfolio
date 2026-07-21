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

// External product landing pages - open in a new tab.
const OUR_PRODUCTS = [
  { label: "Payana", href: "https://www.payana.ai/" },
  { label: "Suprflo", href: "https://suprflo.com/" },
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

  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  // Mark service pages opened from the nav as a "nav" entry (not the /services
  // hub), so the detail page shows a neutral button instead of a back arrow.
  const markNavSource = () => {
    try {
      sessionStorage.setItem("servicesNavSource", "nav");
    } catch {
      /* sessionStorage unavailable — ignore */
    }
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
            <span
              className={`navbar-link navbar-link--trigger ${
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
            </span>
            <div className="dropdown-menu services-mega-menu">
              <div className="services-mega-grid">
                {WHAT_WE_DO_GROUPS.map((group) => (
                  <div className="wwd-group" key={group.title}>
                    <Link
                      href={group.href}
                      className="wwd-group-title"
                      onClick={markNavSource}
                    >
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
          <li className="navbar-item dropdown">
            <span className="navbar-link navbar-link--trigger">
              <span className="link-text">Our Products</span>
              <span className="dropdown-icon">▼</span>
            </span>
            <div className="dropdown-menu industries-single-menu">
              <div className="mega-column">
                {OUR_PRODUCTS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
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
                  <button
                    type="button"
                    onClick={toggleServicesDropdown}
                    aria-expanded={isServicesDropdownOpen}
                    className="mobile-dropdown-label-link mobile-dropdown-label-btn"
                  >
                    What we do
                  </button>
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
                        <Link
                          href={group.href}
                          onClick={() => {
                            markNavSource();
                            toggleMenu();
                          }}
                        >
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
              <li className="mobile-menu-item mobile-dropdown">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleProductsDropdown();
                  }}
                >
                  Our Products
                  <span
                    className={`dropdown-icon ${
                      isProductsDropdownOpen ? "open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </a>
                {isProductsDropdownOpen && (
                  <ul className="mobile-dropdown-menu">
                    {OUR_PRODUCTS.map(({ label, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={toggleMenu}
                        >
                          {label}
                        </a>
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
