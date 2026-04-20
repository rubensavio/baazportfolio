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
    value: "7",
    label: "Sources of “truth”",
    description: "for inventory and pricing before leadership demanded one spine",
    bgColor: "#ffffff",
  },
  {
    id: 2,
    value: "31%",
    label: "Pipeline opacity",
    description: "of booked value finance couldn’t tie to milestones in under a week",
    bgColor: "#ffffff",
  },
  {
    id: 3,
    value: "4.5 hrs",
    label: "Daily reconciliation",
    description: "sales ops spent matching broker sheets to site reality",
    bgColor: "#ffffff",
  },
  {
    id: 4,
    value: "₹2.1Cr",
    label: "Channel leakage risk",
    description: "from overlapping holds and informal rate promises in a single quarter",
    bgColor: "#ffffff",
  },
  {
    id: 5,
    value: "62%",
    label: "Buyer drop-offs",
    description: "after “we’ll send the payment link by evening” became the norm",
    bgColor: "#ffffff",
  },
  {
    id: 6,
    value: "19 days",
    label: "Avg. booking → ledger",
    description: "lag that made board reviews feel like archaeology",
    bgColor: "#ffffff",
  },
];

const coreProductCapabilities = [
  {
    id: 1,
    title: "Inventory & pricing that match how you actually sell",
    bgColor: "#FFF7F2",
    features: [
      "Phased towers, holds, releases, and channel rules—without shadow spreadsheets",
      "Rate lists and incentives visible to sales, site, and leadership in one place",
      "What’s sellable today is what finance recognises—not a forecast in email",
    ],
  },
  {
    id: 2,
    title: "Lead → booking → cash, without the reconciliation circus",
    bgColor: "#ECF0FB",
    features: [
      "Pipeline and activities feed reporting leadership actually trusts",
      "Bookings, agreements, and milestone billing aligned to collections",
      "Broker performance on governed inventory instead of side CRMs",
    ],
  },
  {
    id: 3,
    title: "Field execution tied to procurement and schedule",
    bgColor: "#EDE2FF",
    features: [
      "Tasks, material requests, and evidence live next to the plan—not in chat",
      "Vendor quotes to orders with traceability for costing and audits",
      "Less leakage to “someone will update the sheet tomorrow”",
    ],
  },
  {
    id: 4,
    title: "A buyer journey that feels like a real product, not PDF roulette",
    bgColor: "#FBF6EF",
    features: [
      "Discovery and applications with live availability",
      "Payment schedules and documents that match the back office",
      "Post-handover service and updates without opaque email threads",
    ],
  },
];

const platformGlance = [
  "One operational backbone for the developer’s teams: web console for desk-heavy work, mobile for site staff and customers—same services underneath.",
  "Transactional REST for bookings, payments, and documents; live updates where sales and site need to see change without refreshing ten tabs.",
  "Agreements and invoices generated from the same data finance uses—fewer PDFs that disagree with the ledger.",
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
            A developer-grade operations backbone plus a consumer app for buyers and residents—so
            inventory, cash, and commitments stay aligned from first lead to post-handover support.
          </p>

          <div className="problem-content animate-fade-up animate-delay-300 animate-in">
            <p className="problem-description">
              <span className="problem-title-label">The problem:</span> Meet Priya Nair, Head of
              Sales &amp; Strategy at a multi-phase residential developer. Her teams were not
              wrong—they were exhausted. Sales lived in one set of tools, site teams in another,
              finance in a third, and buyers in a maze of PDFs and payment links. The board asked a
              simple question—“what is sold, what is owed, what is still sellable this week?”—and
              getting one answer took a meeting, three exports, and a prayer.
            </p>

            <div className="nightmare-numbers">
              <h2 className="nightmare-title">The numbers nobody wanted on a slide:</h2>
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
        <div className="work2-solution-wrapper animate-on-scroll animate-fade-up" ref={s1}>
          <div className="solution-story">
            <p>
              “We weren’t failing at spreadsheets,” Priya says. “We were failing at having one story
              the whole company could tell on a Tuesday morning.” The breaking point was a launch
              weekend where two brokers sold overlapping views of the same inventory—and finance
              discovered it from an angry customer, not from the system.
            </p>
            <p>
              Enter a deliberate pairing: an <strong>ERP-shaped spine</strong> for how the
              developer runs projects, partners, and cash, and a <strong>consumer-grade app</strong>{" "}
              so buyers see the same truth the back office stands behind—not a portal that quietly
              forked data.
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
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", marginTop: "clamp(2rem, 4vw, 2.5rem)" }}
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
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", marginTop: "clamp(2rem, 4vw, 2.5rem)" }}
          >
            Who the product serves
          </h3>
          <div className="solution-story">
            <p>
              Navigation and home experiences are composed per role: sales sees pipeline and units;
              site teams see tasks and materials; leadership sees roll-ups—without shipping one
              generic “portal” that satisfies nobody.
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
          <h2 className="results-main-title">How we rolled it out (without freezing the business)</h2>
          <div className="solution-story">
            <p>
              Delivery was phased so data models and permissions stabilised before wide
              training—prove the spine, then widen the surface area. That is how we run other
              enterprise programmes: the business keeps selling while the system catches up to
              reality.
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
          <h2 className="work2-capabilities-title">Two experiences, one system of record</h2>
          <div className="solution-story">
            <p>
              The operations platform holds inventory, commercial terms, bookings, billing milestones,
              and partner performance. The consumer application covers discovery, applications,
              documents, payment schedules, and post-sale service—against the same facts.
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
          <h2 className="results-main-title">Use cases: how work flows without duplicate entry</h2>
          <div className="solution-story">
            <p>
              These patterns describe how information moves between sales, procurement, site, and
              finance—without the same unit being typed twice.
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
          <h2 className="results-main-title">Outcomes: what changed after go-live</h2>
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
