"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.scss";

const INDUSTRIES = [
  { slug: "fintech", label: "FinTech" },
  { slug: "construction", label: "Construction" },
  { slug: "retail", label: "Retail" },
  { slug: "healthcare", label: "Healthcare" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleWorkDropdown = () => {
    setIsWorkDropdownOpen(!isWorkDropdownOpen);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <img src="/assets/Logo.svg" alt="baaz logo" width={120} height={32} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu desktop-menu">
          <li className="navbar-item">
            <Link
              href="/"
              className={`navbar-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
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
          <li className="navbar-item dropdown">
            <a
              href="#"
              className={`navbar-link ${
                pathname?.startsWith("/work") ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span className="link-text">Our Products</span>
              <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/work1">Defect Detection in Manufacturing</Link>
              </li>
              <li>
                <Link href="/work2">Tech Hiring Automation</Link>
              </li>
            </ul>
          </li>
          <li className="navbar-item dropdown">
            <a
              href="#"
              className={`navbar-link ${
                pathname?.startsWith("/industry") ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span className="link-text">Industries</span>
              <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              {INDUSTRIES.map(({ slug, label }) => (
                <li key={slug}>
                  <Link href={`/industry/${slug}`}>{label}</Link>
                </li>
              ))}
            </ul>
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
              href="/enterprise"
              className={`navbar-link ${
                pathname === "/enterprise" ? "active" : ""
              }`}
            >
              Enterprise
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/ecommerce"
              className={`navbar-link ${
                pathname === "/ecommerce" ? "active" : ""
              }`}
            >
              E-commerce
            </Link>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <Link href="/get-in-touch" className="cta-button desktop-cta">
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
              <li className="mobile-menu-item">
                <Link href="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li className="mobile-menu-item mobile-dropdown">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWorkDropdown();
                  }}
                >
                  Our Products
                  <span
                    className={`dropdown-icon ${
                      isWorkDropdownOpen ? "open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </a>
                {isWorkDropdownOpen && (
                  <ul className="mobile-dropdown-menu">
                    <li>
                      <Link href="/work1" onClick={toggleMenu}>
                        Defect Detection in Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link href="/work2" onClick={toggleMenu}>
                        Tech Hiring Automation
                      </Link>
                    </li>
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
                  Industries
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
                    {INDUSTRIES.map(({ slug, label }) => (
                      <li key={slug}>
                        <Link
                          href={`/industry/${slug}`}
                          onClick={toggleMenu}
                        >
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
                <Link href="/enterprise" onClick={toggleMenu}>
                  Enterprise
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link href="/ecommerce" onClick={toggleMenu}>
                  E-commerce
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
