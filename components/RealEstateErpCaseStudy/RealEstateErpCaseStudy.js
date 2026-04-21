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

const nightmareNumbers = [
  {
    id: 1,
    value: "6+",
    label: "Parallel “systems”",
    description:
      "Excel, WhatsApp threads, PDFs, and legacy screens—nothing updated together",
    bgColor: "#ffffff",
  },
  {
    id: 2,
    value: "48 hr",
    label: "Lead → inventory lag",
    description:
      "marketing and sales saw campaign leads before ops had the same unit map",
    bgColor: "#ffffff",
  },
  {
    id: 3,
    value: "4.5 hrs",
    label: "Daily reconciliation",
    description:
      "sales ops matching broker sheets to site reality and tower plans",
    bgColor: "#ffffff",
  },
  {
    id: 4,
    value: "₹2.1Cr",
    label: "Channel leakage risk",
    description:
      "from overlapping holds and informal rate promises in one quarter",
    bgColor: "#ffffff",
  },
  {
    id: 5,
    value: "62%",
    label: "Buyer drop-offs",
    description:
      "after “we’ll send the payment link by evening” became the norm",
    bgColor: "#ffffff",
  },
  {
    id: 6,
    value: "3 sites",
    label: "Different task truths",
    description:
      "engineers, contractors, and partners chasing updates in chat, not one schedule",
    bgColor: "#ffffff",
  },
];

const coreProductCapabilities = [
  {
    id: 1,
    title: "One command centre: company, projects, and partner KRIs",
    bgColor: "#FFF7F2",
    features: [
      "Role-based dashboards so leadership sees projects, teams, and units—not a slide deck",
      "Leads and channel partners on governed inventory: holds, releases, and incentives in one place",
      "What’s sellable today is what finance recognises—no parallel “shadow” forecast",
    ],
  },
  {
    id: 2,
    title: "Sales & marketing wired to the same funnel truth",
    bgColor: "#ECF0FB",
    features: [
      "Pipeline from inquiry to booking with targets and incentive math teams can defend",
      "Campaigns, landing forms, and source attribution feeding CRM—no orphan leads",
      "Bookings, agreements, and milestone billing aligned to collections",
    ],
  },
  {
    id: 3,
    title: "Site ops & procurement that match the plan on the ground",
    bgColor: "#EDE2FF",
    features: [
      "Tasks, contractors, and change requests with approvals—timelines stay accountable",
      "Material planning, stock, and POs from requirement to GRN with traceability for costing",
      "Service providers and vendors scored on delivery—not remembered only in WhatsApp",
    ],
  },
  {
    id: 4,
    title: "Accounts, documents, and buyers on one spine",
    bgColor: "#FBF6EF",
    features: [
      "Invoices, payables, and payment history tied to project and partner—not spreadsheet islands",
      "Agreements and customer comms aligned to inventory state buyers can also see in-app",
      "Post-handover service without losing context between legal, CRM, and support",
    ],
  },
];

const platformGlance = [
  "Karan’s teams needed the same pattern modern Indian developers expect: a web console for pricing grids, documents, and finance; native-feel mobile for site staff and buyers—one API layer underneath so KPIs stay honest.",
  "Real-time lists and notifications where sales and site can’t afford to refresh ten tabs: bookings, tasks, and feed items update when the record changes—not when someone forwards an email.",
  "Agreements and invoices generated from the same inventory and milestone data finance closes on—so PDFs, the app, and the ledger stop disagreeing at month-end.",
];

const stakeholderRoles = [
  {
    title: "Sales & channel",
    items: ["Leads, follow-ups, rate lists", "Available units and incentives"],
  },
  {
    title: "Buyers & residents",
    items: ["Projects, applications, deals", "Payments and support"],
  },
  {
    title: "Builder leadership",
    items: ["Company and project control", "Sales and accounts roll-ups"],
  },
  {
    title: "Site & engineering",
    items: ["Tasks, material and change requests", "Daily execution"],
  },
  { title: "Vendors", items: ["Quotations and orders", "Fulfilment status"] },
  { title: "Inventory", items: ["Stock and material requests", "Audits"] },
  {
    title: "Service partners",
    items: ["Tasks, workers, attendance", "Billing handoffs"],
  },
  {
    title: "Admin",
    items: ["Governance and moderation", "Cross-project visibility"],
  },
];

const rolloutPhases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Map how money and units really move",
    description:
      "We aligned inventory states, payment milestones, and permissions to how the developer already sold and recognised revenue—before any UI polish. Handoffs to accounting and legacy CRM were scoped so nobody re-keyed the business at go-live.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Ship vertical slices people could run",
    description:
      "Lead-to-deal flows went end-to-end in staging; mobile personas got their shells early so field feedback landed while back-office grids tightened.",
    bullets: [
      "Sales and consumer paths on device with real templates",
      "Live feeds for tasks and deals so teams stopped polling inboxes",
      "Training on real data—not a demo tenant that lied about edge cases",
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Harden, measure, hand over",
    description:
      "Load on representative volumes, dashboards checked against finance extracts, and role-by-role training—so go-live was a process upgrade, not a surprise deployment.",
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
      "Receipts keep inventory honest for costing",
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

const businessResults = [
  {
    title: "What finally sat in one place",
    bgColor: "#EDE2FF",
    items: [
      "Sell-through, receivables, and unsold inventory answered from one spine",
      "Partners on governed stock—not parallel “shadow” lists",
      "Buyers on a coherent journey—not scattered payment links",
    ],
  },
  {
    title: "What finance stopped fighting",
    bgColor: "#FFF7ED",
    items: [
      "Agreements and invoices that match booked terms",
      "Month-end trails auditors could follow without heroics",
      "Fewer emergency reconciliations after every launch weekend",
    ],
  },
  {
    title: "What we watch in production",
    bgColor: "#ECF0FB",
    items: [
      "Reliability and crash signals on web and mobile",
      "Predictable sessions for buyers and field staff",
      "Analytics on adoption—not just “the app went live”",
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
            When Every Unit, Rupee, and Promise Finally Lived in One Place
          </h1>
          <p className="work2-context animate-fade-up animate-delay-200 animate-in">
            How we helped a multi-project developer run sales, site,
            procurement, marketing, and accounts on one spine—with a consumer
            app so buyers and partners see the same truth the back office stands
            behind.
          </p>

          <div className="problem-content animate-fade-up animate-delay-300 animate-in">
            <p className="problem-description">
              <span className="problem-title-label">The problem:</span> Meet{" "}
              <strong>Karan Sehgal</strong>, founder leading a residential
              developer with active towers across the NCR. His teams were not
              lazy—work was scattered across Excel, WhatsApp, PDFs, and a
              patchwork of screens. Marketing ran campaigns; sales chased leads;
              site and procurement ran on their own clocks—so “real-time KPIs”
              meant someone typing fast. The board asked what every Indian
              developer eventually asks: what is sold, what is owed, what is
              still sellable this week—and the answer lived in six places at
              once.
            </p>

            <div className="nightmare-numbers">
              <h2 className="nightmare-title">
                The numbers nobody wanted on a slide:
              </h2>
              <div className="statistics-grid">
                {nightmareNumbers.map((stat) => (
                  <div
                    key={stat.id}
                    className="stat-card"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <div className="stat-value" style={{ color: "#0d9488" }}>
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
        <div
          className="work2-solution-wrapper animate-on-scroll animate-fade-up"
          ref={s1}
        >
          <div className="solution-story">
            <p>
              “We weren’t short on effort,” Karan says. “We were short on one
              place where marketing, sales, site, and accounts pointed at the
              same units and rupees.” The breaking point was a launch weekend:
              two channel partners quoted overlapping views of the same
              inventory; finance heard about it from an angry buyer, not from a
              dashboard. That was when “track projects, vendors, and KPIs in
              real time” stopped being a slide and became a mandate.
            </p>
            <p>
              Enter a deliberate pairing: an <strong>ERP-shaped spine</strong>{" "}
              for how the developer runs projects, partners, and cash, and a{" "}
              <strong>consumer-grade app</strong> so buyers see the same truth
              the back office stands behind—not a portal that quietly forked
              data.
            </p>
          </div>

          <h2 className="work2-capabilities-title">What we built</h2>
          <div className="work2-capabilities-grid">
            {coreProductCapabilities.map((capability) => (
              <div
                key={capability.id}
                className="work2-capability-card"
                style={{ backgroundColor: capability.bgColor }}
              >
                <h4 className="work2-capability-title">{capability.title}</h4>
                <ul className="work2-capability-features">
                  {capability.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3
            className="work2-capabilities-title"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
              marginTop: "clamp(2rem, 4vw, 2.5rem)",
            }}
          >
            Platform at a glance
          </h3>
          <div className="solution-story">
            {platformGlance.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <h3
            className="work2-capabilities-title"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
              marginTop: "clamp(2rem, 4vw, 2.5rem)",
            }}
          >
            Who the product serves
          </h3>
          <div className="solution-story">
            <p>
              For Karan’s organisation we composed navigation per role: sales
              sees funnel and inventory; marketing sees campaigns and sources;
              site sees tasks and change requests; finance sees payables and
              milestones—without shipping one generic “portal” that satisfies
              nobody.
            </p>
          </div>
          <div className="re-stakeholder-grid" role="list">
            {stakeholderRoles.map((r, i) => (
              <div
                key={r.title}
                className="re-stakeholder-card"
                role="listitem"
              >
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
        <div
          className="work2-implementation-wrapper animate-on-scroll animate-fade-up"
          ref={s2}
        >
          <h2 className="results-main-title">
            How we rolled it out (without freezing the business)
          </h2>
          <div className="solution-story">
            <p>
              Delivery was phased so data models and permissions stabilised
              before wide training—prove the spine, then widen the surface area.
              That is how we run other enterprise programmes: the business keeps
              selling while the system catches up to reality.
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
        <div
          className="work2-solution-wrapper animate-on-scroll animate-fade-up"
          ref={s3}
        >
          <h2 className="work2-capabilities-title">
            Two experiences, one system of record
          </h2>
          <div className="solution-story">
            <p>
              The operations platform holds inventory, commercial terms,
              bookings, billing milestones, and partner performance. The
              consumer application covers discovery, applications, documents,
              payment schedules, and post-sale service—against the same facts.
            </p>
          </div>
          <div className="work2-capabilities-grid">
            <div
              className="work2-capability-card"
              style={{ backgroundColor: "#EDE2FF" }}
            >
              <h4 className="work2-capability-title">Back-office platform</h4>
              <ul className="work2-capability-features">
                <li>Phased inventory: holds, releases, pricing guardrails</li>
                <li>Booking pipeline through agreement readiness</li>
                <li>Collections, adjustments, partner settlements</li>
                <li>Dashboards for sell-through and receivables</li>
              </ul>
            </div>
            <div
              className="work2-capability-card"
              style={{ backgroundColor: "#ECF0FB" }}
            >
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
          <h2 className="results-main-title">
            Use cases: how work flows without duplicate entry
          </h2>
          <div className="solution-story">
            <p>
              These patterns describe how information moves between sales,
              procurement, site, and finance—without the same unit being typed
              twice.
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

      <section className="work2-results-section">
        <div className="work2-results-wrapper animate-on-scroll animate-fade-up">
          <h2 className="results-main-title">
            Outcomes: what changed after go-live
          </h2>
          <div className="results-grid re-result-cards-compact-title">
            {businessResults.map((b) => (
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
              <Link href="/erp/real-estate-companies">
                ERP for real estate companies
              </Link>
              . Every shipped narrative and architecture guide lives on{" "}
              <Link href="/case-studies">case studies</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
