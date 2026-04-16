import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { servicesData } from "../../lib/servicesData";
import { technologyCapabilitiesData } from "../../lib/technologyCapabilitiesData";
import "./page.scss";

const ICONS = {
  "website-cms": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "ai-ml-models": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" /><rect x="2" y="14" width="8" height="8" rx="1" /><rect x="14" y="14" width="8" height="8" rx="1" />
    </svg>
  ),
  "agentic-ai": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  "database-management": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  "devops-cloud": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  "product-strategy": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  "ui-ux-design": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" />
    </svg>
  ),
  "web-development": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "mobile-app": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    </svg>
  ),
  "ai-solution": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
    </svg>
  ),
  enterprise: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="12.01" strokeWidth="3" /><path d="M12 12h.01" />
    </svg>
  ),
  ecommerce: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  "gtm-engineering": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  "project-rescue": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const COLORS = {
  "product-strategy":     { bg: "#f0edff", color: "#6c47f5" },
  "ui-ux-design":         { bg: "#fff0f6", color: "#e0457b" },
  "web-development":      { bg: "#e8f5ff", color: "#1a7fdb" },
  "mobile-app":           { bg: "#edfff5", color: "#18a05a" },
  "ai-solution":          { bg: "#fff8e8", color: "#d9820a" },
  enterprise:             { bg: "#f0f4ff", color: "#2e68fd" },
  ecommerce:              { bg: "#f0fff8", color: "#08a965" },
  "gtm-engineering":      { bg: "#fff4ed", color: "#d77e1b" },
  "project-rescue":       { bg: "#fff0f0", color: "#e03d3d" },
  "website-cms":          { bg: "#f5f0ff", color: "#7c3aed" },
  "ai-ml-models":         { bg: "#fdf4ff", color: "#a21caf" },
  "agentic-ai":           { bg: "#fff0fa", color: "#c026d3" },
  "database-management":  { bg: "#f0fafe", color: "#0369a1" },
  "devops-cloud":         { bg: "#f0fbff", color: "#0891b2" },
};

const SPECIALIZED = [
  {
    slug: "enterprise",
    href: "/enterprise",
    label: "Enterprise Software Development",
    description: "Custom software development for enterprise teams — product strategy, UX/UI, full-stack engineering, and post-launch support with milestone-based delivery.",
    tags: ["Product Strategy", "Full-Stack Engineering", "ERP Integrations", "Post-Launch Support"],
    wedge: "Mid-market and enterprise teams needing outcome-led delivery with full repository ownership.",
  },
  {
    slug: "ecommerce",
    href: "/ecommerce",
    label: "Marketplace & E-commerce Growth",
    description: "Full-stack Amazon & Flipkart marketplace management powered by proprietary tools, real operator experience, and radical transparency.",
    tags: ["Amazon Ads", "Flipkart Management", "ACOS Optimisation", "Listing Strategy"],
    wedge: "Brands scaling on Amazon or Flipkart who need performance accountability, not black-box reporting.",
  },
  {
    slug: "gtm-engineering",
    href: "/gtm-engineering",
    label: "GTM Engineering",
    description: "Full-stack GTM engineering — content, outbound, ads, SEO, lead capture, nurture, and conversion — built as one interconnected system that compounds pipeline.",
    tags: ["Outbound Systems", "Content & SEO", "Lead Nurture", "Pipeline Analytics"],
    wedge: "B2B companies replacing random marketing activity with a measurable, compounding GTM system.",
  },
  {
    slug: "project-rescue",
    href: "/project-rescue",
    label: "Software Project Rescue",
    description: "We rescue failed software projects. Over 50% of our engagements are mid-project takeovers from companies burned by bad vendors, missed deadlines, and broken promises.",
    tags: ["Codebase Audit", "Vendor Transition", "Delivery Stabilisation", "Technical Debt Reduction"],
    wedge: "Teams whose current vendor has missed deadlines, gone dark, or delivered unusable code.",
  },
];

function ServiceCard({ href, slug, label, description, definition, tags, wedge }) {
  const iconStyle = COLORS[slug] ?? { bg: "#f3f4f6", color: "#4d525f" };
  const snippet = definition
    ? definition.length > 155 ? definition.slice(0, 155).trimEnd() + "…" : definition
    : null;

  return (
    <Link href={href} className="services-hub-card">
      <div className="services-hub-card-icon" style={{ background: iconStyle.bg, color: iconStyle.color }}>
        {ICONS[slug]}
      </div>
      <div className="services-hub-card-body">
        <h2 className="services-hub-card-title">{label}</h2>
        <p className="services-hub-card-desc">{description}</p>
        {snippet && <p className="services-hub-card-definition">{snippet}</p>}
        {tags?.length > 0 && (
          <ul className="services-hub-card-tags" aria-label="Includes">
            {tags.map((t) => <li key={t} className="services-hub-card-tag">{t}</li>)}
          </ul>
        )}
        {wedge && (
          <p className="services-hub-card-wedge">
            <span className="services-hub-card-wedge-label">Best for — </span>{wedge}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function ServicesHubPage() {
  const coreEntries = Object.entries(servicesData).map(([slug, data]) => {
    const tags =
      data.services?.length > 0
        ? data.services.map((s) => s.title).slice(0, 4)
        : (data.mobileHighlights ?? []).map((h) => h.title).slice(0, 4);

    return { slug, href: `/services/${slug}`, label: data.label, description: data.description, definition: data.definition, tags, wedge: data.nicheWedge };
  });

  const techEntries = Object.entries(technologyCapabilitiesData).map(([slug, data]) => ({
    slug,
    href: `/technologies/${slug}`,
    label: data.label,
    description: data.directAnswer,
    definition: data.overview,
    tags: (() => {
      const fromGroups = data.stackGroups?.flatMap((g) => g.tools ?? []) ?? [];
      if (fromGroups.length) return fromGroups.slice(0, 5);
      return (data.stack ?? []).slice(0, 5);
    })(),
    wedge: null,
  }));

  return (
    <div className="services-hub-page">
      <BreadcrumbScript items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
      <Navbar />
      <main className="services-hub-main">
        <section className="services-hub-hero">
          <h1 className="services-hub-heading">All services</h1>
          <p className="services-hub-intro">
            Product engineering, marketplace growth, and go-to-market from
            Bangalore — for startups and enterprises worldwide since 2018.
          </p>
        </section>

        <section className="services-hub-group">
          <h2 className="services-hub-group-heading">
            What product engineering services does Baaz offer?
          </h2>
          <ul className="services-hub-cards">
            {coreEntries.map((entry) => (
              <li key={entry.slug}><ServiceCard {...entry} /></li>
            ))}
          </ul>
        </section>

        <section className="services-hub-group">
          <h2 className="services-hub-group-heading">
            Which specialized practices and programmes does Baaz run?
          </h2>
          <ul className="services-hub-cards">
            {SPECIALIZED.map((entry) => (
              <li key={entry.slug}><ServiceCard {...entry} /></li>
            ))}
          </ul>
        </section>

        <section className="services-hub-group">
          <h2 className="services-hub-group-heading">
            What technology capabilities can Baaz staff and deliver?
          </h2>
          <ul className="services-hub-cards">
            {techEntries.map((entry) => (
              <li key={entry.slug}><ServiceCard {...entry} /></li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
