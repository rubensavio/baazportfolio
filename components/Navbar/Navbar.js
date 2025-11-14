'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleWorkDropdown = () => {
    setIsWorkDropdownOpen(!isWorkDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <img src="/assets/Logo.svg" alt="baaz logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu desktop-menu">
          <li className="navbar-item">
            <Link
              href="/"
              className={`navbar-link ${
                pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/about"
              className={`navbar-link ${
                pathname === "/about" ? "active" : ""
              }`}
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
              <span className="link-text">Work</span>
              <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/work1">Work 1</Link>
              </li>
              <li>
                <Link href="/work2">Work 2</Link>
              </li>
            </ul>
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
                  Work
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
                        Work 1
                      </Link>
                    </li>
                    <li>
                      <Link href="/work2" onClick={toggleMenu}>
                        Work 2
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mobile-menu-item">
                <Link href="/enterprise" onClick={toggleMenu}>
                  Enterprise
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
