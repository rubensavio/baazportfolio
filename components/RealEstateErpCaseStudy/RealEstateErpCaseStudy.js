"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "../Work2Hero/Work2Hero.scss";
import "../Work2Solution/Work2Solution.scss";
import "../Work2Implementation/Work2Implementation.scss";
import "../Work2Results/Work2Results.scss";
import "../Work2BottomLine/Work2BottomLine.scss";
import "./RealEstateErpCaseStudy.scss";

const heroStats = [
  { value: "ERP + app", label: "Product pair", description: "One spine from ops to customer" },
  { value: "8+", label: "Role surfaces", description: "Sales, site, vendor, buyer, admin…" },
  { value: "REST + WS", label: "API posture", description: "Transactional core + live updates" },
  { value: "JWT", label: "Session model", description: "Refresh-safe mobile & web clients" },
];

const webStackItems = [
  "React 18 SPA with modular domains (builder, super-admin, shared UI)",
  "Redux Toolkit and TanStack Query for server state",
  "MUI / composable UI, charts, Gantt-style scheduling views",
  "REST clients to application, user-management, and document services",
  "HTML templates for agreements and invoices, exported to PDF",
  "Socket.io client alongside REST for notifications",
];

const mobileStackItems = [
  "React Native with role-based stacks and tab navigation",
  "JWT access and refresh, AsyncStorage, OTP and visitor flows",
  "Axios with automatic token refresh and analytics on API usage",
  "Socket.io for live feed, tasks, and deal updates",
  "Mixpanel and Sentry for product and crash signals",
  "In-app support channel for end-customers",
];

const stakeholderRoles = [
  { title: "Sales & channel", items: ["Leads, follow-ups, rate lists", "Available units and incentives"] },
  { title: "Buyers & residents", items: ["Projects, applications, deals", "Payments and support"] },
  { title: "Builder leadership", items: ["Company and project control", "Sales and accounts roll-ups"] },
  { title: "Site & engineering", items: ["Tasks, material and change requests", "Daily execution"] },
  { title: "Vendors", items: ["Quotations and orders", "Fulfilment status"] },
  { title: "Inventory", items: ["Stock and material requests", "Audits"] },
  { title: "Service partners", items: ["Tasks, workers, attendance", "Billing handoffs"] },
  { title: "Admin", items: ["Governance and moderation", "Cross-project visibility"] },
];

const rolloutPhases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Map and model",
    description:
      "Inventory, payment milestones, and role permissions were aligned to how the developer already sold and recognised revenue—before any UI polish. Integrations were scoped for accounting and legacy CRM handoffs.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Vertical slices",
    description:
      "Lead-to-deal flows went end-to-end in staging; mobile personas received their navigation shells early so field feedback could land while back-office grids were still tightening.",
    bullets: [
      "Sales and consumer paths on device",
      "Document generation against real templates",
      "Socket channels for feed and task events",
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Harden and train",
    description:
      "Load on representative data, analytics dashboards verified against finance extracts, and role-by-role training—so go-live was a process change, not a surprise deployment.",
  },
];

const operationalFlows = [
  {
    title: "Revenue: lead → booking → cash",
    items: [
      "Lead capture and activities feed pipeline reporting",
      "Booked units tie to milestones and receivables ageing",
      "Finance sees the same status sales commits on site",
    ],
    bgColor: "#EDE2FF",
  },
  {
    title: "Procurement: requirement → quote → order",
    items: [
      "Material requirements surface to vendors",
      "Quotations convert to orders with traceability",
      "GRN-style receipts keep inventory honest for costing",
    ],
    bgColor: "#FFF7ED",
  },
  {
    title: "Delivery: task → proof → quality",
    items: [
      "Tasks carry assignments, comments, attachments",
      "Site evidence lives next to schedule",
      "Less leakage to chat and email threads",
    ],
    bgColor: "#ECF0FB",
  },
];

const stackModules = [
  {
    title: "Inventory & phasing",
    bgColor: "#f8fafc",
    features: [
      "Towers, floors, unit states, holds, release rules",
      "Pricing aligned to how sales runs on the ground",
    ],
  },
  {
    title: "Bookings & agreements",
    bgColor: "#f0fdf4",
    features: [
      "EOI through agreement terms and schedules",
      "Milestone billing aligned to finance",
    ],
  },
  {
    title: "Collections",
    bgColor: "#fff7ed",
    features: [
      "Receivables, broker commissions, adjustments",
      "Audit-friendly trails for month-end",
    ],
  },
  {
    title: "Channel & partners",
    bgColor: "#eef2ff",
    features: [
      "Broker hierarchies and visibility",
      "Performance without shadow CRMs",
    ],
  },
];

const productionOutcomes = [
  {
    title: "Reliability & observability",
    bgColor: "#EDE2FF",
    items: [
      "Mixpanel and Sentry on web and mobile builds",
      "Bearer tokens with refresh; predictable REST semantics",
      "Socket.io complements REST for live lists and feeds",
    ],
  },
  {
    title: "Documents & finance alignment",
    bgColor: "#FFF7ED",
    items: [
      "Template-backed HTML and export pipelines",
      "Agreements and invoices match booked terms",
      "Fewer PDFs that disagree with the ledger",
    ],
  },
  {
    title: "What leadership measured",
    bgColor: "#ECF0FB",
    items: [
      "One operational ledger from unit to collected rupee",
      "Partners on governed inventory—not side lists",
      "Buyers on a coherent journey—not scattered payment links",
    ],
  },
];

export default function RealEstateErpCaseStudy() {
  const heroRef = useScrollAnimation();
  const s1 = useScrollAnimation({ threshold: 0.15 });
  const s2 = useScrollAnimation({ threshold: 0.12 });
  const s3 = useScrollAnimation({ threshold: 0.12 });

  return (
    <>
      <section className="work2-hero" ref={heroRef}>
        <div className="work2-hero-background">
          <img
            src="/assets/workHeroSectionBg.webp"
            alt="Case study background"
            className="work2-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="work2-hero-wrapper">
          <span className="work2-label animate-fade-up animate-in">
            Enterprise case study · Real estate
          </span>
          <h1 className="work2-heading animate-fade-up animate-delay-100 animate-in">
            Real-estate ERP operations and a consumer app for buyers and tenants
          </h1>
          <p className="work2-context animate-fade-up animate-delay-200 animate-in">
            A shipped programme for a multi-phase developer: a browser-based
            operations console, a React Native field and customer suite, and the
            same services underneath so inventory, cash, and commitments stay
            aligned.
          </p>

          <div className="problem-content animate-fade-up animate-delay-300 animate-in">
            <div className="nightmare-numbers">
              <div className="statistics-grid statistics-grid--four">
                {heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className="stat-card"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="stat-value" style={{ color: "#0d9488", fontSize: "clamp(1.35rem, 3vw, 1.75rem)" }}>
                      {stat.value}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-description">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work2-solution-section">
        <div className="work2-solution-wrapper animate-on-scroll animate-fade-up" ref={s1}>
          <div className="solution-story">
            <p>
              Sales, site, and finance had each been right in their own
              spreadsheet—until leadership asked for one answer on sell-through,
              receivables, and what was still sellable. Broker networks and
              construction tempo only amplified the gaps.
            </p>
            <p>
              The mandate was explicit: an{" "}
              <strong>ERP-shaped backbone</strong> for real-estate operations and a{" "}
              <strong>consumer-grade app</strong> so buyers and residents see the
              same truth as the back office—not a portal that quietly forked data.
            </p>
          </div>

          <h2 className="work2-capabilities-title">What the implementation looks like</h2>
          <div className="solution-story">
            <p>
              The work spans a browser-based console for developer staff and a React
              Native suite for everyone who works away from a desk. Below is a
              concise, anonymised snapshot grounded in how the codebases are
              structured—stack choices, modules, and production posture.
            </p>
          </div>

          <h3 className="work2-capabilities-title" style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}>
            Architecture snapshot
          </h3>
          <div className="work2-capabilities-grid">
            <div className="work2-capability-card" style={{ backgroundColor: "#f8fafc" }}>
              <h4 className="work2-capability-title">Web · builder &amp; admin</h4>
              <ul className="work2-capability-features">
                {webStackItems.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="work2-capability-card" style={{ backgroundColor: "#f0fdfa" }}>
              <h4 className="work2-capability-title">Mobile · field &amp; customers</h4>
              <ul className="work2-capability-features">
                {mobileStackItems.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="work2-capabilities-title" style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", marginTop: "clamp(2rem, 4vw, 2.5rem)" }}>
            Stakeholder surfaces
          </h3>
          <div className="solution-story">
            <p>
              Navigation and home screens are composed per role: sales sees pipeline
              and units; site teams see tasks and material lines; leadership sees
              consolidated dashboards—without shipping one generic “portal.”
            </p>
          </div>
          <div className="re-stakeholder-grid" role="list">
            {stakeholderRoles.map((r, i) => (
              <div key={r.title} className="re-stakeholder-card" role="listitem">
                <span className="re-stakeholder-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="re-stakeholder-body">
                  <h4 className="re-stakeholder-title">{r.title}</h4>
                  <ul className="re-stakeholder-list">
                    {r.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work2-implementation-section">
        <div className="work2-implementation-wrapper animate-on-scroll animate-fade-up" ref={s2}>
          <h2 className="results-main-title">
            Rollout: from process map to trained teams
          </h2>
          <div className="solution-story">
            <p>
              Delivery was phased so data models and permissions stabilised before
              wide training—mirroring how we approach other enterprise programmes:
              prove the spine, then widen the surface area.
            </p>
          </div>

          <div className="phases-timeline animate-on-scroll animate-fade-up">
            {rolloutPhases.map((phase) => (
              <div key={phase.id} className="phase-item">
                <div className="phase-number">{phase.id}</div>
                <div className="phase-content">
                  <div className="phase-header">
                    <span className="phase-label">{phase.phase}</span>
                  </div>
                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-description">{phase.description}</p>
                  {phase.bullets && (
                    <ul className="phase-bullets">
                      {phase.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work2-solution-section">
        <div className="work2-solution-wrapper animate-on-scroll animate-fade-up" ref={s3}>
          <h2 className="work2-capabilities-title">Two products, one architecture</h2>
          <div className="solution-story">
            <p>
              The operations platform holds inventory, commercial terms, bookings,
              billing milestones, and partner performance. The consumer application
              covers discovery, applications, documents, payment schedules, and
              post-sale service—against the same APIs.
            </p>
          </div>
          <div className="work2-capabilities-grid">
            <div className="work2-capability-card" style={{ backgroundColor: "#EDE2FF" }}>
              <h4 className="work2-capability-title">Back-office platform</h4>
              <ul className="work2-capability-features">
                <li>Phased inventory: holds, releases, pricing guardrails</li>
                <li>Booking pipeline through agreement readiness</li>
                <li>Collections, adjustments, partner settlements</li>
                <li>Dashboards for sell-through and receivables</li>
              </ul>
            </div>
            <div className="work2-capability-card" style={{ backgroundColor: "#ECF0FB" }}>
              <h4 className="work2-capability-title">Buyer &amp; tenant app</h4>
              <ul className="work2-capability-features">
                <li>Search and shortlists with live availability</li>
                <li>Application status without opaque email chains</li>
                <li>Scheduled payments aligned with finance</li>
                <li>Service and updates after possession</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="work2-results-section">
        <div className="work2-results-wrapper animate-on-scroll animate-fade-up">
          <h2 className="results-main-title">Flows that tie sales, site, and finance</h2>
          <div className="solution-story">
            <p>
              Modules are not silos—they chain. These three patterns describe how
              information moves without duplicate entry between departments.
            </p>
          </div>
          <div className="results-grid re-result-cards-compact-title">
            {operationalFlows.map((f) => (
              <div
                key={f.title}
                className="result-card"
                style={{ backgroundColor: f.bgColor }}
              >
                <h3 className="result-title">{f.title}</h3>
                <ul className="result-list">
                  {f.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work2-solution-section">
        <div className="work2-solution-wrapper animate-on-scroll animate-fade-up">
          <h2 className="work2-capabilities-title">What we engineered into the stack</h2>
          <div className="work2-capabilities-grid">
            {stackModules.map((m) => (
              <div
                key={m.title}
                className="work2-capability-card"
                style={{ backgroundColor: m.bgColor }}
              >
                <h4 className="work2-capability-title">{m.title}</h4>
                <ul className="work2-capability-features">
                  {m.features.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work2-results-section">
        <div className="work2-results-wrapper animate-on-scroll animate-fade-up">
          <h2 className="results-main-title">Production posture and outcomes</h2>
          <div className="results-grid re-result-cards-compact-title">
            {productionOutcomes.map((b) => (
              <div
                key={b.title}
                className="result-card"
                style={{ backgroundColor: b.bgColor }}
              >
                <h3 className="result-title">{b.title}</h3>
                <ul className="result-list">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work2-bottomline-section">
        <div className="work2-bottomline-wrapper animate-on-scroll animate-fade-up">
          <h2 className="bottomline-title">Where to read more</h2>
          <div className="solution-story">
            <p>
              For how we position ERP for developers and property managers, see{" "}
              <Link href="/erp/real-estate-companies">ERP for real estate companies</Link>
              . Every shipped narrative and architecture guide lives on{" "}
              <Link href="/case-studies">case studies</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
