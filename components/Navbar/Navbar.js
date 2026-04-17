"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { technologyCapabilitiesData } from "../../lib/technologyCapabilitiesData";
import { caseStudiesData } from "../../lib/caseStudiesData";
import "./Navbar.scss";

const INDUSTRIES = [
  { slug: "fintech", label: "FinTech" },
  { slug: "construction", label: "Construction" },
  { slug: "retail", label: "Retail" },
  { slug: "healthcare", label: "Healthcare" },
];

const ERP_SOLUTIONS = [
  { slug: "insurance-companies", label: "ERP for Insurance Companies" },
  { slug: "manufacturing-companies", label: "ERP for Manufacturing Companies" },
  { slug: "banking-companies", label: "ERP for Banking Companies" },
  { slug: "education-training-companies", label: "ERP for Education & Training Companies" },
  { slug: "healthcare-companies", label: "ERP for Healthcare Companies" },
  { slug: "hospitals", label: "ERP for Hospitals" },
  { slug: "real-estate-companies", label: "ERP for Real Estate Companies" },
  { slug: "construction-companies", label: "ERP for Construction Companies" },
  { slug: "automobile-companies", label: "ERP for Automobile Companies" },
  {
    slug: "transportation-supply-chain-companies",
    label: "ERP for Transportation & Supply Chain Companies",
  },
];

const SERVICES_PATHS = [
  "/enterprise",
  "/ecommerce",
  "/gtm-engineering",
  "/project-rescue",
  "/technologies",
  "/services",
];

const TECH_STACK_GROUPS = Object.entries(technologyCapabilitiesData).flatMap(
  ([slug, data]) => {
    const row = {
      slug,
      category: data.label,
      href: `/technologies/${slug}`,
    };
    if (slug !== "web-development") {
      return [row];
    }
    return [
      row,
      {
        slug: "mobile-development",
        category: "Mobile App Development",
        href: "/services/mobile-app",
      },
    ];
  },
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const [isErpDropdownOpen, setIsErpDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCaseStudiesDropdownOpen, setIsCaseStudiesDropdownOpen] =
    useState(false);
  const pathname = usePathname();

  const isCaseStudiesActive =
    pathname &&
    (pathname === "/case-studies" ||
      pathname.startsWith("/case-studies/") ||
      caseStudiesData.some(
        (item) =>
          pathname === item.href ||
          pathname.startsWith(`${item.href}/`),
      ));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCaseStudiesDropdownOpen(false);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleErpDropdown = () => {
    setIsErpDropdownOpen(!isErpDropdownOpen);
  };

  const toggleCaseStudiesDropdown = () => {
    setIsCaseStudiesDropdownOpen(!isCaseStudiesDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <img
              src="/assets/Logo.svg"
              alt="baaz logo"
              width={120}
              height={32}
            />
          </Link>
        </div>

        {/* Desktop Navigation — logo links home; no separate Home item */}
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
              <span className="link-text">Our Services</span>
              <span className="dropdown-icon">▼</span>
            </Link>
            <div className="dropdown-menu services-mega-menu">
              <div className="mega-column mega-services">
                <p className="dropdown-menu-label" role="presentation">
                  Core services
                </p>
                <Link href="/enterprise">Enterprise</Link>
                <Link href="/ecommerce">E-commerce</Link>
                <Link href="/gtm-engineering">GTM Engineering</Link>
                <Link href="/project-rescue">Project Rescue</Link>

                <p className="dropdown-menu-label" role="presentation">
                  Featured — AI on ERP
                </p>
                <Link href="/work1" className="dropdown-menu-stacked-link">
                  <span className="dropdown-link-title">
                    Manufacturing quality automation
                  </span>
                  <span className="dropdown-link-sub">
                    AI vision on manufacturing ERP
                  </span>
                </Link>
                <Link href="/work2" className="dropdown-menu-stacked-link">
                  <span className="dropdown-link-title">
                    Hiring &amp; HRMS automation
                  </span>
                  <span className="dropdown-link-sub">
                    AI layer on hiring management systems
                  </span>
                </Link>
              </div>

              <div className="mega-column mega-tech">
                <p className="dropdown-menu-label" role="presentation">
                  Technology capabilities
                </p>
                {TECH_STACK_GROUPS.map((group) => (
                  <Link
                    className="dropdown-menu-tech-row dropdown-tech-link"
                    key={group.slug}
                    href={group.href}
                  >
                    {group.category}
                  </Link>
                ))}
              </div>
            </div>
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
          <li className="navbar-item dropdown">
            <a
              href="#"
              className={`navbar-link ${
                pathname?.startsWith("/erp") ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span className="link-text">ERP Solutions</span>
              <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/erp">All ERP Solutions</Link>
              </li>
              {ERP_SOLUTIONS.map(({ slug, label }) => (
                <li key={slug}>
                  <Link href={`/erp/${slug}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="navbar-item dropdown">
            <a
              href="#"
              className={`navbar-link ${isCaseStudiesActive ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span className="link-text">Case studies</span>
              <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/case-studies">All case studies</Link>
              </li>
              {caseStudiesData.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    {item.footerLabel ?? item.title}
                  </Link>
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
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleErpDropdown();
                  }}
                >
                  ERP Solutions
                  <span
                    className={`dropdown-icon ${
                      isErpDropdownOpen ? "open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </a>
                {isErpDropdownOpen && (
                  <ul className="mobile-dropdown-menu">
                    <li>
                      <Link href="/erp" onClick={toggleMenu}>
                        All ERP Solutions
                      </Link>
                    </li>
                    {ERP_SOLUTIONS.map(({ slug, label }) => (
                      <li key={slug}>
                        <Link href={`/erp/${slug}`} onClick={toggleMenu}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="mobile-menu-item mobile-dropdown">
                <div className="mobile-dropdown-row">
                  <Link
                    href="/services"
                    onClick={toggleMenu}
                    className="mobile-dropdown-label-link"
                  >
                    Our Services
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
                    <li>
                      <Link href="/enterprise" onClick={toggleMenu}>
                        Enterprise
                      </Link>
                    </li>
                    <li className="mobile-dropdown-menu-label" aria-hidden>
                      Featured — AI on ERP
                    </li>
                    <li>
                      <Link href="/work1" onClick={toggleMenu}>
                        Manufacturing: AI on ERP (quality)
                      </Link>
                    </li>
                    <li>
                      <Link href="/work2" onClick={toggleMenu}>
                        HRMS: hiring automation
                      </Link>
                    </li>
                    <li>
                      <Link href="/ecommerce" onClick={toggleMenu}>
                        E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link href="/gtm-engineering" onClick={toggleMenu}>
                        GTM Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/project-rescue" onClick={toggleMenu}>
                        Project Rescue
                      </Link>
                    </li>
                    <li className="mobile-dropdown-menu-label" aria-hidden>
                      Technology capabilities
                    </li>
                    {TECH_STACK_GROUPS.map((group) => (
                      <li className="mobile-dropdown-tech-row" key={group.slug}>
                        <Link href={group.href} onClick={toggleMenu}>
                          {group.category}
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
                    toggleCaseStudiesDropdown();
                  }}
                >
                  Case studies
                  <span
                    className={`dropdown-icon ${
                      isCaseStudiesDropdownOpen ? "open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </a>
                {isCaseStudiesDropdownOpen && (
                  <ul className="mobile-dropdown-menu">
                    <li>
                      <Link href="/case-studies" onClick={toggleMenu}>
                        All case studies
                      </Link>
                    </li>
                    {caseStudiesData.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={toggleMenu}>
                          {item.footerLabel ?? item.title}
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
                        <Link href={`/industry/${slug}`} onClick={toggleMenu}>
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
