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

const heroStats = [
  { value: "4 roles", label: "Personas", description: "Admin, CRM tiers, participants" },
  { value: "RR v6", label: "Routing", description: "Large protected route matrix" },
  { value: "Bulk ops", label: "Operations", description: "CSV, barcodes, payments" },
];

const integrationItems = [
  "Create React App with React Router v6 route shells; MUI 5 with Emotion for dense admin tables, forms, and dialogs",
  "RSuite and complementary libraries for calendars, pickers, and rich inputs; Draft-based rich text for workshops and homework",
  "Toast and loading patterns for long-running imports and payment actions; responsive layouts with side navigation and role-scoped menus",
  "Session handling via cookies for authenticated admin and CRM flows",
  "File upload paths for attendance CSV, student rosters, and partial payments",
  "Barcode and QR flows for workshops with list, filter, and modal detail",
  "Payment and refund surfaces aligned to finance review—not ad-hoc spreadsheets",
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
    title: "Route and role matrix",
    description:
      "We mapped SuperAdmin, CRM, batch-CRM, and student journeys against a single router so permissions and menus stayed coherent as modules accumulated.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Vertical slices",
    description:
      "Cohort and calendar flows landed before edge cases: bulk CSV, workshop barcodes, and payment exceptions shipped as explicit slices—not a single big bang.",
    bullets: [
      "Protected layout wrapping authenticated subtrees",
      "Shared list/detail patterns for batches, workshops, and participants",
      "CRM messaging and tickets parallel to student-facing help",
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Stabilise operations",
    description:
      "Load tests on representative cohort sizes, finance reconciliation dry runs, and runbooks for CSV recovery—so ops could own release day.",
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

const productModules = [
  {
    title: "Programme & calendar",
    bgColor: "#f8fafc",
    features: [
      "Course and batch CRUD with webinar/class update flows",
      "Institute calendar creation and list views for scheduling truth",
    ],
  },
  {
    title: "Workshops",
    bgColor: "#f0fdf4",
    features: [
      "Workshop lifecycle: add, classes, barcodes, attendance, participants",
      "Dedicated registration and public workshop entry where required",
    ],
  },
  {
    title: "CRM & comms",
    bgColor: "#fff7ed",
    features: [
      "Role-scoped CRM batch lists, homework, and video queues",
      "Messaging and help tickets bridging staff and participants",
    ],
  },
  {
    title: "Participant app",
    bgColor: "#eef2ff",
    features: [
      "Student dashboard, classes, homework submission, tickets",
      "Payment info, terms, and calendar aligned to admin data",
    ],
  },
];

const productionOutcomes = [
  {
    title: "Operational control",
    bgColor: "#EDE2FF",
    items: [
      "Single portal replacing fragmented sheets for cohort and workshop ops",
      "Barcode and attendance exports for audit and on-ground checks",
      "Technical notes and master data for repeatable configuration",
    ],
  },
  {
    title: "Finance alignment",
    bgColor: "#FFF7ED",
    items: [
      "Overdue and access-payment flows visible to authorised roles",
      "Bank and company records centralised for disbursement and reporting",
      "Refund tooling reduces back-and-forth outside the system",
    ],
  },
  {
    title: "What leadership measured",
    bgColor: "#ECF0FB",
    items: [
      "Time to reconcile a batch after CSV import",
      "Ticket volume deflected by structured homework and messaging",
      "Release confidence: fewer emergency hotfixes after go-live",
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
            Multi-role training portal: programmes, workshops, CRM, and participant experience
          </h1>
          <p className="work2-context animate-fade-up animate-delay-200 animate-in">
            A shipped browser-based operations portal for a training institute: programme and
            workshop management, tiered CRM, attendance and barcodes, payments and access control,
            and a full participant-facing experience—one client application with a large, guarded route
            matrix.
          </p>

          <div className="problem-content animate-fade-up animate-delay-300 animate-in">
            <div className="nightmare-numbers">
              <div className="statistics-grid">
                {heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className="stat-card"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div
                      className="stat-value"
                      style={{
                        color: "#d97706",
                        fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
                      }}
                    >
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
              Operations lived across spreadsheets, chat threads, and one-off payment links. Trainers
              and CRM teams needed one operational spine—without forcing participants through a
              different experience every semester.
            </p>
            <p>
              The mandate was a <strong>single web portal</strong> with clear separation between
              institute staff, CRM roles, and participants, and enough bulk and finance tooling that
              month-end did not mean export gymnastics.
            </p>
          </div>

          <h2 className="work2-capabilities-title">What the implementation looks like</h2>
          <div className="solution-story">
            <p>
              The codebase is a Create React App single-page product with Material UI, extensive
              routing, and role-based navigation. The following sections summarise the shipped
              structure in anonymised form.
            </p>
          </div>

          <h3
            className="work2-capabilities-title"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
          >
            Architecture snapshot
          </h3>
          <div
            className="work2-capabilities-grid"
            style={{ gridTemplateColumns: "1fr", maxWidth: "56rem", margin: "0 auto", width: "100%" }}
          >
            <div className="work2-capability-card" style={{ backgroundColor: "#fffbeb" }}>
              <h4 className="work2-capability-title">Operations &amp; integrations</h4>
              <ul className="work2-capability-features">
                {integrationItems.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3
            className="work2-capabilities-title"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
              marginTop: "clamp(2rem, 4vw, 2.5rem)",
            }}
          >
            Role surfaces
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
          <h2 className="results-main-title">Delivery: from route matrix to stable ops</h2>
          <div className="solution-story">
            <p>
              Delivery sequenced authentication shells and cohort flows before workshop barcodes and
              payment exceptions—so the institute could run real batches while edge modules caught
              up.
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
          <h2 className="work2-capabilities-title">One portal, programme and workshop depth</h2>
          <div className="solution-story">
            <p>
              Long-running batches share patterns with short workshop programmes—lists, detail
              screens, and CSV paths—so operations did not maintain two mental models for the same
              work.
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
          <h2 className="results-main-title">Flows that tie enrolment, delivery, and cash</h2>
          <div className="solution-story">
            <p>
              These patterns describe how information moves without duplicate entry between programme
              staff, CRM, and finance.
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
          <h2 className="work2-capabilities-title">Major modules in the product</h2>
          <div className="work2-capabilities-grid">
            {productModules.map((m) => (
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
