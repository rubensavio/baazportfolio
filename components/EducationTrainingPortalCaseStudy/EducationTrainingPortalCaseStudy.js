"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "../Work2Hero/Work2Hero.scss";
import "../Work2Solution/Work2Solution.scss";
import "../Work2Implementation/Work2Implementation.scss";
import "../Work2Results/Work2Results.scss";
import "../Work2BottomLine/Work2BottomLine.scss";
import "../RealEstateErpCaseStudy/RealEstateErpCaseStudy.scss";

const nightmareNumbers = [
  {
    id: 1,
    value: "11",
    label: "Sheets & chat threads",
    description: "programme ops juggled for one flagship cohort at peak intake",
    bgColor: "#ffffff",
  },
  {
    id: 2,
    value: "3.5 days",
    label: "To reconcile payments",
    description: "after each intake wave—finance lived in exports, not workflows",
    bgColor: "#ffffff",
  },
  {
    id: 3,
    value: "40%",
    label: "Tickets duplicated",
    description: "or lost between email and ad-hoc trackers in a single term",
    bgColor: "#ffffff",
  },
  {
    id: 4,
    value: "600+",
    label: "Manual roster edits",
    description: "per semester where CSV could have been one import—if the system existed",
    bgColor: "#ffffff",
  },
  {
    id: 5,
    value: "27%",
    label: "Participants confused",
    description: "about homework or access because CRM and class truth disagreed",
    bgColor: "#ffffff",
  },
  {
    id: 6,
    value: "₹18L",
    label: "At-risk revenue",
    description: "sitting in “we’ll confirm Monday” payment limbo during one launch",
    bgColor: "#ffffff",
  },
];

const coreProductCapabilities = [
  {
    id: 1,
    title: "Programme office: courses, batches, and calendars that stay the schedule of record",
    bgColor: "#FFF7F2",
    features: [
      "Course and batch administration with attendance and percentage views at a glance",
      "Institute calendar coherence—trainers and leadership stop debating which file is current",
      "Workshop lifecycle including barcodes and participant lists that match on-ground reality",
    ],
  },
  {
    id: 2,
    title: "CRM & support: tiered access without chaos",
    bgColor: "#ECF0FB",
    features: [
      "Admin, batch-scoped CRM, and messaging that respects who may see which cohort",
      "Helpdesk tickets across channels—no more “did anyone pick up thread 47?”",
      "Homework and video queues moderated before participants see unstable links",
    ],
  },
  {
    id: 3,
    title: "Participants: one portal for class, homework, pay, and help",
    bgColor: "#EDE2FF",
    features: [
      "Dashboard, classes, and homework actions in one authenticated experience",
      "Payments, terms, and calendars aligned to what admins see",
      "Bulk-friendly when scale beats typing—without hiding daily tasks in import screens",
    ],
  },
  {
    id: 4,
    title: "Finance alignment: access, overdues, and refunds as first-class",
    bgColor: "#FBF6EF",
    features: [
      "Payment and overdue views that finance can defend in a review—not a screenshot hunt",
      "Refund and invoice tooling for admins; bank and company masters centralised",
      "Access gating tied to approval—not informal email unlocks",
    ],
  },
];

const platformGlance = [
  "One browser product for the institute: role-based menus and a large protected route matrix so SuperAdmin, CRM tiers, and participants each get the right subtree—without maintaining three codebases.",
  "Dense operations when staff need it (tables, bulk CSV, barcodes); calmer flows where participants pay, submit homework, or open tickets.",
  "Session-backed admin and CRM flows; file uploads for attendance CSVs, rosters, and partial payments with feedback on long-running jobs.",
];

const roleSurfaces = [
  { title: "Programme office", items: ["Courses, batches, calendars", "Workshops with attendance and barcodes"] },
  { title: "CRM & support", items: ["Tiered CRM: admin, batch, messaging", "Helpdesk tickets across channels"] },
  { title: "Participants", items: ["Dashboard, classes, homework actions", "Payments, messages, terms"] },
  { title: "Access & revenue", items: ["Approval queues for content access", "Overdue and partial payment pipelines"] },
  { title: "Content ops", items: ["Homework and materials distribution", "Video request / approval workflows"] },
  { title: "Finance hooks", items: ["Bank and company master data", "Refund and invoice tooling for admins"] },
  { title: "Data onboarding", items: ["CSV import for attendance and cohorts", "Bulk update for workshops"] },
  { title: "Public touchpoints", items: ["Registration and workshop landing flows", "Payment handoff pages"] },
];

const rolloutPhases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Anchor roles and routes before the feature pile-on",
    description:
      "We mapped SuperAdmin, CRM, batch-CRM, and student journeys against one router so permissions and menus stayed coherent as modules accumulated—otherwise every new screen would have been a one-off.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Ship slices the institute could run",
    description:
      "Cohort and calendar flows landed before edge cases: bulk CSV, workshop barcodes, and payment exceptions shipped as explicit slices—not a single big bang that froze admissions.",
    bullets: [
      "Shared list/detail patterns for batches, workshops, and participants",
      "CRM messaging and tickets parallel to student-facing help",
      "Protected layouts so authenticated subtrees fail closed",
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Stabilise operations and hand over the runbook",
    description:
      "Load on representative cohort sizes, finance reconciliation dry runs, and CSV recovery playbooks—so ops owned release day instead of engineering owning every Monday.",
  },
];

const operationalFlows = [
  {
    title: "Enrolment: course → batch → roster",
    items: [
      "Structured paths from course setup to batch assignment",
      "Participant lists with attendance and percentage views",
      "Imports where scale beats manual line-by-line entry",
    ],
    bgColor: "#EDE2FF",
  },
  {
    title: "Revenue: schedule → collect → reconcile",
    items: [
      "Payment detail and overdue views for finance alignment",
      "Partial payments and refunds with audit-friendly trails",
      "Access gating tied to approval—not informal email unlocks",
    ],
    bgColor: "#FFF7ED",
  },
  {
    title: "Delivery: class → homework → feedback",
    items: [
      "Homework and materials routed through CRM and student views",
      "Video requests moderated before participants see unstable links",
      "Calendar coherence between admins and participants",
    ],
    bgColor: "#ECF0FB",
  },
];

const businessResults = [
  {
    title: "What the institute stopped duct-taping",
    bgColor: "#EDE2FF",
    items: [
      "One portal instead of fragmented sheets for cohort and workshop ops",
      "Barcode and attendance exports auditors and on-ground teams could trust",
      "Fewer “which file is true?” debates at the start of every term",
    ],
  },
  {
    title: "What finance and access agreed on",
    bgColor: "#FFF7ED",
    items: [
      "Overdue and access-payment flows visible to authorised roles",
      "Refund tooling that reduced back-and-forth outside the system",
      "Less emergency reconciliation after every intake weekend",
    ],
  },
  {
    title: "What leadership measured",
    bgColor: "#ECF0FB",
    items: [
      "Time to reconcile a batch after CSV import",
      "Ticket volume deflected by structured homework and messaging",
      "Release confidence: fewer hotfixes the week after go-live",
    ],
  },
];

export default function EducationTrainingPortalCaseStudy() {
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
            Enterprise case study · Education &amp; training
          </span>
          <h1 className="work2-heading animate-fade-up animate-delay-100 animate-in">
            When the Institute Stopped Living in Spreadsheets and Inbox Roulette
          </h1>
          <p className="work2-context animate-fade-up animate-delay-200 animate-in">
            A single web portal for programme management, workshops, tiered CRM, attendance and
            barcodes, payments and access control, and the full participant experience—so trainers,
            ops, and finance finally point at the same cohort truth.
          </p>

          <div className="problem-content animate-fade-up animate-delay-300 animate-in">
            <p className="problem-description">
              <span className="problem-title-label">The problem:</span> Meet Ananya Krishnan, Head of
              Programmes at a national training institute. Her team could teach; they could not
              reliably operate. Rosters lived in spreadsheets, homework in one tool, payments in
              another, and “urgent” lived everywhere. Participants did not fail from lack of effort—
              they failed from lack of a single coherent journey. The worst Monday was not a server
              outage; it was discovering two conflicting batch lists ten minutes before class.
            </p>

            <div className="nightmare-numbers">
              <h2 className="nightmare-title">The ops metrics that kept leadership awake:</h2>
              <div className="statistics-grid">
                {nightmareNumbers.map((stat) => (
                  <div
                    key={stat.id}
                    className="stat-card"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <div className="stat-value" style={{ color: "#d97706" }}>
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
              “We weren’t short on tools,” Ananya says. “We were short on one story everyone could
              rehearse.” The breaking point was a workshop weekend: barcodes that did not match the
              roster import, and finance still reconciling last month’s partial payments while new
              admissions queued up.
            </p>
            <p>
              The mandate was a <strong>single operational portal</strong> with clear separation
              between institute staff, CRM roles, and participants—and enough bulk and finance
              tooling that month-end did not mean export gymnastics.
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
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
              marginTop: "clamp(2rem, 4vw, 2.5rem)",
            }}
          >
            Who the product serves
          </h3>
          <div className="solution-story">
            <p>
              Menu trees and routes are composed per persona—institute admins see programme and
              finance tools; CRM tiers see cohort-scoped lists; participants see homework, payments,
              and support—without sharing one undifferentiated dashboard.
            </p>
          </div>
          <div className="re-stakeholder-grid" role="list">
            {roleSurfaces.map((r, i) => (
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
          <h2 className="results-main-title">How we rolled out without freezing admissions</h2>
          <div className="solution-story">
            <p>
              Delivery sequenced authentication shells and cohort flows before workshop barcodes and
              payment exceptions—so the institute could run real batches while edge modules caught up.
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
          <h2 className="work2-capabilities-title">Long programmes and short workshops, one mental model</h2>
          <div className="solution-story">
            <p>
              Running batches and intensive workshops share patterns—lists, detail screens, and CSV
              paths—so operations did not maintain two contradictory playbooks for the same work.
            </p>
          </div>
          <div className="work2-capabilities-grid">
            <div className="work2-capability-card" style={{ backgroundColor: "#EDE2FF" }}>
              <h4 className="work2-capability-title">Institute operations</h4>
              <ul className="work2-capability-features">
                <li>Course and batch administration with attendance tooling</li>
                <li>Workshop lifecycle including barcodes and participant exports</li>
                <li>Calendar as the shared schedule of record</li>
              </ul>
            </div>
            <div className="work2-capability-card" style={{ backgroundColor: "#ECF0FB" }}>
              <h4 className="work2-capability-title">Participants &amp; CRM</h4>
              <ul className="work2-capability-features">
                <li>Student dashboard with homework and class lists</li>
                <li>CRM-scoped messaging, homework, and video queues</li>
                <li>Tickets and help paths aligned to institute SLAs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="work2-results-section">
        <div className="work2-results-wrapper animate-on-scroll animate-fade-up">
          <h2 className="results-main-title">Use cases: enrolment, delivery, and cash in sync</h2>
          <div className="solution-story">
            <p>
              These patterns describe how information moves between programme staff, CRM, and
              finance—without the same cohort being typed twice.
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
          <h2 className="results-main-title">Outcomes: calmer ops and defensible numbers</h2>
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
              For ERP positioning on education and training operations, see{" "}
              <Link href="/erp/education-training-companies">ERP for education &amp; training companies</Link>
              . All case studies are listed on{" "}
              <Link href="/case-studies">case studies</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
