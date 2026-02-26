"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../../components/FAQ/FAQ"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

const painPoints = [
  {
    title: "High Retainers Before Results",
    description:
      "Brands pay agencies upfront — before a single performance improvement is proven.",
    color: "#2E68FD",
  },
  {
    title: "Black-Box Reporting",
    description:
      "You get a PDF. No visibility into keywords, bid logic, or structural changes.",
    color: "#D77E1B",
  },
  {
    title: "Auto-Campaign Dependency",
    description:
      "Heavy reliance on automated campaigns with minimal manual optimization.",
    color: "#3B7793",
  },
  {
    title: "No Full-Funnel Optimization",
    description:
      "Ads are managed. Listings, pricing, inventory, and promotions are ignored.",
    color: "#08A965",
  },
  {
    title: "Junior Account Handling",
    description: "Premium pricing. Inexperienced execution.",
    color: "#932EFA",
  },
];

const approachItems = [
  {
    title: "Free Audit First",
    description:
      "We analyze wasted spend, keyword gaps, structural inefficiencies, and growth levers — before you pay a single rupee.",
  },
  {
    title: "Proprietary Optimization Tools",
    features: [
      "Real-time bid control",
      "Campaign-level ACOS tracking",
      "Keyword-level performance insights",
      "Bulk optimizations",
      "Cross-marketplace intelligence",
    ],
  },
  {
    title: "Full Transparency",
    description:
      "Custom dashboards built specifically for your brand. See every keyword. Every bid change. Every strategic decision.",
  },
  {
    title: "Weekly Strategy Execution",
    description:
      "Not reporting calls. Strategy calls. We review performance, adjust structure, and execute fast.",
  },
  {
    title: "Operator-Led Execution",
    description:
      "We operate our own brands. Our marketplace advertising management strategies are battle-tested — not theoretical.",
  },
];

const serviceCategories = [
  {
    id: 1,
    title: "Marketplace Advertising Management",
    goal: "Increase revenue while improving efficiency by 10–30%+.",
    bgColor: "#FFF7F2",
    features: [
      "Sponsored Products, Sponsored Brands & Display",
      "Flipkart Smart & Manual Campaigns",
      "Campaign Architecture Redesign",
      "Manual Keyword Scaling",
      "Negative Keyword Strategy",
      "ACOS & TACOS Control",
      "Budget Allocation & Bid Optimization",
    ],
  },
  {
    id: 2,
    title: "Marketplace SEO & Content Optimization",
    goal: "Improve organic visibility and increase conversion rates by 15–40%.",
    bgColor: "#ECF0FB",
    features: [
      "Product Listing Optimization",
      "Keyword Research & Implementation",
      "Backend Search Term Structuring",
      "A+ Content & Brand Store Optimization",
      "Conversion Rate Optimization",
      "Competitor Content Benchmarking",
    ],
  },
  {
    id: 3,
    title: "Marketplace Operations Management",
    goal: "Reduce operational inefficiencies and prevent revenue leakage.",
    bgColor: "#FBF6EF",
    features: [
      "Seller Central Account Setup & Health Monitoring",
      "Inventory Planning & FBA Shipment Coordination",
      "Promotional Calendar Strategy",
      "Coupons, Deals & Marketplace Events",
      "Pricing Strategy Optimization",
      "Brand Registry & Protection",
    ],
  },
  {
    id: 4,
    title: "Marketplace Intelligence & Reporting",
    goal: "Data drives decisions. Not assumptions.",
    bgColor: "#EDE2FF",
    features: [
      "Real-Time Performance Dashboard",
      "Campaign-Level ACOS & ROAS Tracking",
      "SKU-Level Profitability Insights",
      "Category & Competitor Benchmarking",
      "Growth Opportunity Identification",
    ],
  },
];

const caseStudyResults = [
  { label: "Revenue scaled by 200%+" },
  { label: "ACOS reduced by over 40%" },
  { label: "Improved overall profitability while scaling ad spend" },
  { label: "Cross-platform growth on both Amazon & Flipkart" },
];

const caseStudyActions = [
  "Complete campaign restructure (Auto → Strategic Manual Architecture)",
  "Deep keyword research targeting high-intent, low-competition terms",
  "Aggressive negative keyword elimination",
  "A+ content & listing overhaul",
  "Promotional event calendar planning",
  "Daily bid optimization",
];

const proofBlocks = [
  {
    title: "New Launch Brand",
    items: [
      "Scaled from zero presence to consistent monthly sales within the first year",
      "Achieved sustainable growth through structured campaigns",
      "Built strong organic ranking foundation",
    ],
  },
  {
    title: "Established Brand Turnaround",
    items: [
      "Reduced ad spend by over 50%",
      "Maintained sales volume",
      "Improved contribution margins significantly",
    ],
  },
];

const techTools = [
  {
    title: "PPC Optimization Engine",
    features: [
      "Real-time bid adjustments",
      "Bulk campaign uploads",
      "Keyword performance clustering",
      "CPC & CVR monitoring",
    ],
  },
  {
    title: "Marketplace Intelligence Dashboard",
    features: [
      "Sales vs Ad Spend trends",
      "Product line performance splits",
      "Channel comparison tracking",
      "Strategic decision support",
    ],
  },
];

const audienceList = [
  "D2C Brands scaling on Amazon & Flipkart",
  "Funded startups entering marketplaces",
  "Brands stuck with stagnant sales",
  "Sellers with high ACOS and low profitability",
  "Businesses launching new SKUs",
];

const auditBenefits = [
  "Wasted ad spend percentage",
  "Keyword opportunity gaps",
  "Campaign structure inefficiencies",
  "Conversion improvement areas",
  "A prioritized 90-day growth roadmap",
];

const ecommerceFaqs = [
  {
    question:
      "What does your Amazon marketplace management service include?",
    answer:
      "Our Amazon seller management services cover the full spectrum — PPC advertising (Sponsored Products, Brands, Display), listing optimization, backend search term structuring, A+ content, inventory planning, pricing strategy, and real-time performance dashboards. We manage your Amazon account like it's our own business.",
  },
  {
    question:
      "Do you also manage Flipkart accounts?",
    answer:
      "Yes. We offer full-service Flipkart account management including Smart and Manual campaigns, Flipkart advertising optimization, listing content, promotional planning, and marketplace intelligence. Our cross-platform approach lets brands scale on both Amazon and Flipkart simultaneously.",
  },
  {
    question: "How is Baaz different from other marketplace agencies?",
    answer:
      "Three things set us apart: (1) We start with a free audit — no retainers upfront, (2) We use proprietary PPC and analytics tools for real-time bid control and keyword-level insights, and (3) We operate our own brands, so our strategies are battle-tested, not theoretical. We're operators first, agency second.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Results vary by brand, but our typical outcomes include 10–30%+ improvement in advertising efficiency (ACOS), 15–40% increase in conversion rates through listing optimization, and significant revenue scaling. We've helped D2C brands achieve 200%+ revenue growth while reducing ACOS by over 40%.",
  },
  {
    question: "How does the free marketplace audit work?",
    answer:
      "We analyze your current marketplace presence across five areas: wasted ad spend, keyword opportunity gaps, campaign structure inefficiencies, conversion improvement areas, and growth levers. You receive a prioritized 90-day roadmap with specific, actionable recommendations. No obligation, no retainers upfront.",
  },
  {
    question: "Do you work with brands outside India?",
    answer:
      "Yes. While our marketplace management expertise is strongest on Amazon India and Flipkart, we also manage Amazon accounts across the US, UK, UAE, and other regions. Our proprietary tools and cross-marketplace intelligence work across geographies.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We don't charge high retainers before proving results. Our pricing is structured around performance milestones and the scope of marketplace management required. Every engagement starts with a free audit so both sides understand the opportunity before committing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ecommerceFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-commerce Marketplace Management",
  description:
    "Full-service Amazon & Flipkart marketplace management including PPC advertising, listing optimization, operations management, and analytics powered by proprietary tools.",
  provider: {
    "@type": "Organization",
    name: "Baaz",
    url: "https://www.baaz.pro",
  },
  serviceType: "E-commerce Marketplace Management",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export default function Ecommerce() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="ecommerce-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="ecom-hero">
        <div className="ecom-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.svg"
            alt="E-commerce marketplace management background"
            className="ecom-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="ecom-hero-wrapper">
          <div
            className={`ecom-hero-header animate-fade-up ${isLoaded ? "animate-in" : ""}`}
          >
            <span className="ecom-hero-label">
              E-commerce Marketplace Management
            </span>
            <h1 className="ecom-hero-heading">
              We Don&apos;t Just Manage Marketplaces.
              <br />
              We Build Marketplace Growth Engines.
            </h1>
            <p className="ecom-hero-description">
              Full-stack Amazon &amp; Flipkart marketplace management powered by
              proprietary tools, real operator experience, and radical
              transparency. Scale revenue. Improve ACOS. Increase profitability.
            </p>
            <Link href="/get-in-touch" className="ecom-hero-cta">
              Get Free Marketplace Audit
            </Link>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="ecom-pain">
        <div className="ecom-pain-wrapper">
          <div className="ecom-pain-header">
            <span className="ecom-section-label">The Problem</span>
            <h2 className="ecom-pain-heading">
              Why Most Brands Fail on Amazon &amp; Flipkart
            </h2>
            <p className="ecom-pain-subtext">
              E-commerce marketplace growth isn&apos;t just about running ads.
              It&apos;s about structure, systems, and strategy.
            </p>
          </div>
          <div className="ecom-pain-container">
            <div className="ecom-pain-grid">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className={`ecom-pain-step pain-step-${index + 1}`}
                >
                  <div
                    className="ecom-pain-badge"
                    style={{ backgroundColor: point.color }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="ecom-pain-title">{point.title}</h3>
                  <p className="ecom-pain-description">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="ecom-pain-conclusion">
            Amazon marketplace management requires operator thinking — not
            account management.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="ecom-approach">
        <div className="ecom-approach-wrapper">
          <div className="ecom-approach-header">
            <span className="ecom-section-label">Our Approach</span>
            <h2 className="ecom-approach-heading">
              The Baaz Marketplace Growth System
            </h2>
            <p className="ecom-approach-subtext">
              We combine advertising, content, operations, and analytics into
              one unified e-commerce marketplace growth engine.
            </p>
          </div>
          <div className="ecom-approach-grid">
            {approachItems.map((item, index) => (
              <div key={index} className="ecom-approach-card">
                <h3 className="ecom-approach-title">{item.title}</h3>
                {item.description && (
                  <p className="ecom-approach-description">
                    {item.description}
                  </p>
                )}
                {item.features && (
                  <ul className="ecom-approach-features">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ecom-services">
        <div className="ecom-services-wrapper">
          <div className="ecom-services-header">
            <span className="ecom-section-label">What We Manage</span>
            <h2 className="ecom-services-heading">
              End-to-End E-commerce Marketplace Management
            </h2>
            <p className="ecom-services-subtext">
              We manage your marketplace like it&apos;s our own business — from
              Amazon PPC management to Flipkart advertising optimization and
              everything in between.
            </p>
          </div>
          <div className="ecom-services-grid">
            {serviceCategories.map((cat) => (
              <div key={cat.id} className="ecom-service-card">
                <div
                  className="ecom-service-card-header"
                  style={{ backgroundColor: cat.bgColor }}
                >
                  <span className="ecom-service-number">
                    0{cat.id}
                  </span>
                  <h3 className="ecom-service-title">{cat.title}</h3>
                </div>
                <div className="ecom-service-card-body">
                  <ul className="ecom-service-features">
                    {cat.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <p className="ecom-service-goal">{cat.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="ecom-casestudy">
        <div className="ecom-casestudy-wrapper">
          <div className="ecom-casestudy-header">
            <span className="ecom-section-label">Results</span>
            <h2 className="ecom-casestudy-heading">
              Case Study: D2C Wellness Brand
            </h2>
          </div>
          <div className="ecom-casestudy-content">
            <div className="ecom-casestudy-results">
              <h3>Results Achieved</h3>
              <ul>
                {caseStudyResults.map((r, i) => (
                  <li key={i}>{r.label}</li>
                ))}
              </ul>
            </div>
            <div className="ecom-casestudy-actions">
              <h3>What We Did</h3>
              <ul>
                {caseStudyActions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="ecom-casestudy-tagline">
            Scaling is not about spending more. It&apos;s about spending
            smarter.
          </p>
        </div>
      </section>

      {/* PROOF BLOCKS */}
      <section className="ecom-proof">
        <div className="ecom-proof-wrapper">
          <div className="ecom-proof-grid">
            {proofBlocks.map((block, index) => (
              <div key={index} className="ecom-proof-card">
                <h3 className="ecom-proof-title">{block.title}</h3>
                <ul className="ecom-proof-items">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="ecom-proof-tagline">
            Smart optimization beats higher budgets.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="ecom-tech">
        <div className="ecom-tech-wrapper">
          <div className="ecom-tech-header">
            <span className="ecom-section-label">Proprietary Technology</span>
            <h2 className="ecom-tech-heading">
              Built In-House. Built for Scale.
            </h2>
            <p className="ecom-tech-subtext">
              Unlike traditional agencies, we built our own marketplace
              performance marketing tools.
            </p>
          </div>
          <div className="ecom-tech-grid">
            {techTools.map((tool, index) => (
              <div key={index} className="ecom-tech-card">
                <h3 className="ecom-tech-title">{tool.title}</h3>
                <ul className="ecom-tech-features">
                  {tool.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="ecom-tech-tagline">
            Technology gives us execution speed most agencies cannot match.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="ecom-audience">
        <div className="ecom-audience-wrapper">
          <div className="ecom-audience-header">
            <span className="ecom-section-label">Who This Is For</span>
            <h2 className="ecom-audience-heading">We Work Best With</h2>
          </div>
          <ul className="ecom-audience-list">
            {audienceList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="ecom-audience-tagline">
            If you want structured, predictable marketplace growth — this
            full-service marketplace agency is for you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="ecom-cta">
        <div className="ecom-cta-wrapper">
          <div className="ecom-cta-container">
            <div className="ecom-cta-background">
              <img
                src="/assets/readyToBuildBg.svg"
                alt="Start your marketplace audit background"
                className="ecom-cta-bg-image"
              />
            </div>
            <div className="ecom-cta-content">
              <h2 className="ecom-cta-heading">
                Start With a Free Marketplace Audit
              </h2>
              <p className="ecom-cta-description">We&apos;ll show you:</p>
              <ul className="ecom-cta-benefits">
                {auditBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="ecom-cta-note">
                No obligation. No retainers upfront.
              </p>
              <Link href="/get-in-touch" className="ecom-cta-button">
                Get My Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={ecommerceFaqs}
        heading="Marketplace Management FAQs"
      />
      <Footer />
    </div>
  );
}
