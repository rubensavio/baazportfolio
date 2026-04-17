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
  { value: "Redux-Saga", label: "Side effects", description: "Auth, lists, and API orchestration" },
  { value: "REST", label: "Integration", description: "Axios against provider APIs" },
  { value: "Push + geo", label: "Device", description: "Notifications, location, media permissions" },
];

const mobileStackItems = [
  "React Navigation: native stack plus drawer for primary wayfinding",
  "Redux store with saga middleware for login and appointment flows",
  "Axios-based API layer with middleware HOC on screens that need shared context",
  "WebView-backed flows where embedded journeys outperform full native rebuilds",
  "Document picker, image capture, and blob utilities for medical uploads",
  "Push notifications wired for booking confirmations and reminders",
];

const integrationItems = [
  "Session and cookie handling for authenticated API calls where needed",
  "Geolocation and granular runtime permissions aligned with Play policy",
  "Video visit surfaces alongside in-person booking and reschedule paths",
  "Deep links across doctor search, slots, lab catalogues, and pharmacy detail",
];

const journeySurfaces = [
  { title: "Booking & intake", items: ["Search doctors, locations, slots", "Confirm and reschedule with clear state"] },
  { title: "Visits & telehealth", items: ["Scheduled list and detail views", "Video visit entry where offered"] },
  { title: "Prescriptions", items: ["History and detail from the dashboard", "Path to fulfilment partners"] },
  { title: "Lab & diagnostics", items: ["Catalogue and detail flows", "Results handoff in-app"] },
  { title: "Pharmacy", items: ["Browse and detail with imagery", "Tie-outs to ordering where integrated"] },
  { title: "Records & uploads", items: ["Medical document capture and attachments", "Profile-linked storage patterns"] },
  { title: "Family & profile", items: ["Household members where enabled", "Edit profile and credentials"] },
  { title: "Engagement", items: ["Notifications centre", "Information and FAQ surfaces"] },
];

const rolloutPhases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Journey map",
    description:
      "We aligned the navigation model to how patients actually move—search, book, attend, follow up—before polishing secondary surfaces. API contracts for appointments, identity, and media were frozen early.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Vertical slices",
    description:
      "Core booking and dashboard paths shipped first; prescriptions, lab, and pharmacy received staged releases with shared list/detail patterns so the app stayed consistent under deadline pressure.",
    bullets: [
      "Middleware-wrapped screens for shared API behaviour",
      "Push and notification hooks validated on staging builds",
      "Permission flows tested against current Android media and location rules",
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Hardening & release",
    description:
      "Crash analytics, upgrade testing across OS versions, and store checklist items—so production traffic looked like the rehearsal, not a surprise.",
  },
];

const careFlows = [
  {
    title: "Access: search → slot → confirm",
    items: [
      "Doctor and location discovery with slot selection",
      "Confirmation and calendar-friendly success states",
      "Reminders via push where users opt in",
    ],
    bgColor: "#EDE2FF",
  },
  {
    title: "Continuity: visit → record → next step",
    items: [
      "Appointment history and detail for accountability",
      "Prescription visibility to drive adherence",
      "Hooks into lab and pharmacy without duplicate entry",
    ],
    bgColor: "#FFF7ED",
  },
  {
    title: "Trust: documents & identity",
    items: [
      "Upload paths for imaging and reports with clear UX",
      "Profile and family linkage where the programme allows",
      "Settings and policy surfaces kept in step with stores",
    ],
    bgColor: "#ECF0FB",
  },
];

const productModules = [
  {
    title: "Dashboard & appointments",
    bgColor: "#f8fafc",
    features: [
      "Home and tabs oriented around upcoming and past care",
      "Cards and lists reused across similar entities",
    ],
  },
  {
    title: "Clinical adjacency",
    bgColor: "#f0fdf4",
    features: [
      "Prescription views tied to visit context",
      "Lab and pharmacy modules using consistent detail layouts",
    ],
  },
  {
    title: "Content & support",
    bgColor: "#fff7ed",
    features: [
      "Information corner and FAQs for self-service",
      "About, terms, and privacy wired for review compliance",
    ],
  },
  {
    title: "Account & security",
    bgColor: "#eef2ff",
    features: [
      "Sign-in, recovery, and password flows",
      "Profile edit and notification preferences",
    ],
  },
];

const productionOutcomes = [
  {
    title: "Device & policy readiness",
    bgColor: "#EDE2FF",
    items: [
      "Runtime permissions for location, camera, storage, and notifications",
      "16KB page-size and Android 14+ location behaviour addressed in upgrade work",
      "WebView usage isolated to flows that benefit from embedded content",
    ],
  },
  {
    title: "Reliability patterns",
    bgColor: "#FFF7ED",
    items: [
      "Sagas isolate network failure modes from UI state",
      "Toast and inline feedback for recoverable errors",
      "Staging parity before widening rollout",
    ],
  },
  {
    title: "What product tracked",
    bgColor: "#ECF0FB",
    items: [
      "Booking completion and reschedule rates",
      "Engagement with prescriptions and follow-up surfaces",
      "Crash-free sessions across OS versions",
    ],
  },
];

export default function HealthcarePatientAppCaseStudy() {
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
            Enterprise case study · Healthcare
          </span>
          <h1 className="work2-heading animate-fade-up animate-delay-100 animate-in">
            Patient engagement app: bookings, telehealth, and care adjacency in one React Native programme
          </h1>
          <p className="work2-context animate-fade-up animate-delay-200 animate-in">
            A production mobile client for a provider network: search and scheduling, visit and
            prescription surfaces, lab and pharmacy journeys, medical document capture, and
            notifications—implemented as a single codebase with disciplined navigation and API
            boundaries.
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
                        color: "#2563eb",
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
              Patients were juggling phone queues, PDFs, and ad-hoc links. Operations wanted one
              coherent journey that still respected how clinicians and fulfilment partners actually
              work—not a brochure app that stopped at marketing pages.
            </p>
            <p>
              The mandate was a <strong>patient-grade mobile product</strong> on top of existing
              services: authenticated access, real schedules, and traceable actions—not a wrapper
              around a desktop-only portal.
            </p>
          </div>

          <h2 className="work2-capabilities-title">What we built</h2>
          <div className="solution-story">
            <p>
              The codebase is a React Native application with Redux and sagas, navigation stacks
              and a drawer, and a consistent pattern of middleware-wrapped screens for shared API
              behaviour. The snapshot below is anonymised and grounded in the shipped structure.
            </p>
          </div>

          <h3
            className="work2-capabilities-title"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
          >
            Architecture snapshot
          </h3>
          <div className="work2-capabilities-grid">
            <div className="work2-capability-card" style={{ backgroundColor: "#f8fafc" }}>
              <h4 className="work2-capability-title">Mobile application</h4>
              <ul className="work2-capability-features">
                {mobileStackItems.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="work2-capability-card" style={{ backgroundColor: "#eff6ff" }}>
              <h4 className="work2-capability-title">Integration &amp; device</h4>
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
            Journey surfaces
          </h3>
          <div className="solution-story">
            <p>
              Screens are grouped around jobs to be done—book, attend, refill, investigate—rather
              than one undifferentiated menu. Shared list and card components keep behaviour
              predictable as modules rolled out.
            </p>
          </div>
          <div className="re-stakeholder-grid" role="list">
            {journeySurfaces.map((r, i) => (
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
          <h2 className="results-main-title">Delivery: from spine to store-ready</h2>
          <div className="solution-story">
            <p>
              Releases were sequenced so authentication, appointments, and dashboard stability
              preceded wider clinical adjacency—reducing the blast radius of API and UX changes.
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
          <h2 className="work2-capabilities-title">One app, many care adjacencies</h2>
          <div className="solution-story">
            <p>
              The same navigation shell hosts booking, visits, prescriptions, diagnostics, pharmacy,
              and documents—so patients learn the product once even as the network expands modules.
            </p>
          </div>
          <div className="work2-capabilities-grid">
            <div className="work2-capability-card" style={{ backgroundColor: "#EDE2FF" }}>
              <h4 className="work2-capability-title">Scheduling &amp; attendance</h4>
              <ul className="work2-capability-features">
                <li>Doctor search and slot selection with confirmation flows</li>
                <li>Scheduled and past appointments with actionable detail</li>
                <li>Video visit entry where the programme supports it</li>
              </ul>
            </div>
            <div className="work2-capability-card" style={{ backgroundColor: "#ECF0FB" }}>
              <h4 className="work2-capability-title">Records &amp; fulfilment paths</h4>
              <ul className="work2-capability-features">
                <li>Prescription visibility and pharmacy exploration</li>
                <li>Lab browsing with structured detail screens</li>
                <li>Medical document upload and attachment patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="work2-results-section">
        <div className="work2-results-wrapper animate-on-scroll animate-fade-up">
          <h2 className="results-main-title">Flows that stay coherent end to end</h2>
          <div className="solution-story">
            <p>
              These patterns describe how screens chain without forcing patients to re-enter the same
              data at every hop.
            </p>
          </div>
          <div className="results-grid re-result-cards-compact-title">
            {careFlows.map((f) => (
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
          <h2 className="work2-capabilities-title">Product modules in the codebase</h2>
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
              For how we position ERP and operations for healthcare organisations, see{" "}
              <Link href="/erp/healthcare-companies">ERP for healthcare companies</Link>
              {" "}and{" "}
              <Link href="/erp/hospitals">ERP for hospitals</Link>. All shipped narratives live on{" "}
              <Link href="/case-studies">case studies</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
