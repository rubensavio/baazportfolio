"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { HEALTHCARE_AI_EHR_SECTION } from "../../lib/healthcareAiEhrSection";
import "../Work2Hero/Work2Hero.scss";
import "../Work2Solution/Work2Solution.scss";
import "../Work2Implementation/Work2Implementation.scss";
import "../Work2Results/Work2Results.scss";
import "../Work2BottomLine/Work2BottomLine.scss";
import "../RealEstateErpCaseStudy/RealEstateErpCaseStudy.scss";
import "../../app/erp/[erpSlug]/page.scss";

const aiEhr = HEALTHCARE_AI_EHR_SECTION;

const nightmareNumbers = [
  {
    id: 1,
    value: "47%",
    label: "Calls for “simple” tasks",
    description: "scheduling, refills, and “where is my result?”—before the app absorbed them",
    bgColor: "#ffffff",
  },
  {
    id: 2,
    value: "3",
    label: "Different logins",
    description: "patients juggled for visits, labs, and pharmacy handoffs",
    bgColor: "#ffffff",
  },
  {
    id: 3,
    value: "22%",
    label: "No-show rate",
    description: "on peak days when reminders lived in overloaded SMS blasts",
    bgColor: "#ffffff",
  },
  {
    id: 4,
    value: "18 min",
    label: "Median hold time",
    description: "to confirm or move an appointment during busy blocks",
    bgColor: "#ffffff",
  },
  {
    id: 5,
    value: "41%",
    label: "Upload friction",
    description: "patients who abandoned imaging or report uploads mid-flow",
    bgColor: "#ffffff",
  },
  {
    id: 6,
    value: "2★",
    label: "Store reviews citing “scattered”",
    description: "experience—not clinical quality—as the pain point",
    bgColor: "#ffffff",
  },
];

const coreProductCapabilities = [
  {
    id: 1,
    title: "Get care on the calendar—without the phone maze",
    bgColor: "#FFF7F2",
    features: [
      "Search doctors, locations, and slots with clear confirmation and reschedule paths",
      "Reminders patients actually opted into—not generic blast spam",
      "Video visit entry where the programme offers it, beside in-person care",
    ],
  },
  {
    id: 2,
    title: "Continuity after the visit: prescriptions, labs, pharmacy",
    bgColor: "#ECF0FB",
    features: [
      "Prescription history and next steps visible from the home journey",
      "Lab catalogues and results handoffs without “check your email for a PDF”",
      "Pharmacy exploration tied to the same identity and visit context",
    ],
  },
  {
    id: 3,
    title: "Trust: records, uploads, and family context",
    bgColor: "#EDE2FF",
    features: [
      "Medical document capture with explicit, understandable steps",
      "Household and profile patterns where the programme allows",
      "Policies and settings that stay review-ready for app stores",
    ],
  },
  {
    id: 4,
    title: "Support that scales: tickets, FAQs, engagement",
    bgColor: "#FBF6EF",
    features: [
      "Notifications centre so updates do not disappear in OS banners only",
      "Self-service answers for the predictable questions",
      "Help paths aligned to how your teams actually respond",
    ],
  },
];

const platformGlance = [
  "One mobile product for iOS and Android: booking, visits, prescriptions, diagnostics, pharmacy, and documents share navigation patterns so patients learn the app once.",
  "Integrated with existing provider services—authenticated sessions, real schedules, traceable actions—not a marketing shell over a desktop-only portal.",
  "Where partner journeys change quickly, embedded flows complement native screens so you are not blocked on a full rebuild for every policy tweak.",
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
    title: "Follow the real patient journey",
    description:
      "We mapped search → book → attend → follow up before polishing edge screens. Appointments, identity, and media contracts were settled early so downstream modules did not thrash.",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Ship slices people could rely on",
    description:
      "Core booking and dashboard stability landed first; prescriptions, lab, and pharmacy rolled in stages behind shared list/detail patterns—so the product stayed coherent under deadline pressure.",
    bullets: [
      "Consistent error and recovery behaviour across high-traffic flows",
      "Push and reminders validated on staging before wide rollout",
      "Permission flows tested against current device and store rules",
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Production-ready, not “demo-ready”",
    description:
      "Crash analytics, upgrade testing across OS versions, and store checklist discipline—so live traffic looked like rehearsal, not a surprise.",
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

const businessResults = [
  {
    title: "What patients stopped doing",
    bgColor: "#EDE2FF",
    items: [
      "Calling for tasks the app could complete in two taps",
      "Re-entering the same details at every hop",
      "Guessing whether a link in SMS was still valid",
    ],
  },
  {
    title: "What operations could finally measure",
    bgColor: "#FFF7ED",
    items: [
      "Booking completion and reschedule rates",
      "Engagement with prescriptions and follow-up surfaces",
      "Crash-free sessions across OS versions",
    ],
  },
  {
    title: "What we protected on the way",
    bgColor: "#ECF0FB",
    items: [
      "Runtime permissions aligned with platform policy",
      "Staging parity before widening rollout",
      "Bounded embedded journeys where partners move faster than native releases",
    ],
  },
];

export default function HealthcarePatientAppCaseStudy() {
  const heroRef = useScrollAnimation();
  const s1 = useScrollAnimation({ threshold: 0.15 });
  const sAi = useScrollAnimation({ threshold: 0.12 });
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
            From Phone Queues and PDFs to One Calm Front Door for Care
          </h1>
          <p className="work2-context animate-fade-up animate-delay-200 animate-in">
            A patient engagement app for a provider network: scheduling, visits, prescriptions, lab
            and pharmacy journeys, documents, and notifications—so people spend less time navigating
            the system and more time getting care.
          </p>

          <div className="problem-content animate-fade-up animate-delay-300 animate-in">
            <p className="problem-description">
              <span className="problem-title-label">The problem:</span> Meet Daniel Okonkwo, VP of
              Patient Access at a multi-site care network. His clinicians were respected; his contact
              centre was underwater. Patients did not fail to care—they failed to find the next step.
              A lab order lived in one message thread, a pharmacy coupon in another, and the
              radiology prep sheet in a fourth. The product question was not “can we ship an app?”
              It was: can a family complete a care path without feeling like they joined an escape
              room?
            </p>

            <div className="nightmare-numbers">
              <h2 className="nightmare-title">The access metrics nobody brags about:</h2>
              <div className="statistics-grid">
                {nightmareNumbers.map((stat) => (
                  <div
                    key={stat.id}
                    className="stat-card"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <div className="stat-value" style={{ color: "#2563eb" }}>
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
              “We didn’t need another brochure with a logo,” Daniel says. “We needed a single front
              door that still respected how clinicians and fulfilment partners work.” The breaking
              moment was peak flu season: great medical outcomes, brutal wait times, and reviews that
              blamed ‘the process,’ not the doctors.
            </p>
            <p>
              The mandate was a <strong>patient-grade mobile product</strong> on top of existing
              services: authenticated access, real schedules, and traceable actions—not a wrapper
              around a desktop-only portal.
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
            Journeys in the product
          </h3>
          <div className="solution-story">
            <p>
              Screens are grouped around jobs to be done—book, attend, refill, investigate—rather
              than one undifferentiated menu. Shared list and card patterns keep behaviour predictable
              as modules roll out.
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

      {/* AI-native EHR & revenue cycle — copy/order matches ErpPageClient; also remains on /erp/healthcare-companies via erpData.aiEhrSection (do not remove there). */}
      <section
        className="erp-ai-ehr healthcare-patient-case-study-ai"
        aria-labelledby="healthcare-case-study-ai-heading"
      >
        <div className="erp-section-container animate-on-scroll animate-fade-up" ref={sAi}>
          <p className="erp-ai-ehr-eyebrow">Differentiation</p>
          <h2 id="healthcare-case-study-ai-heading" className="erp-section-title">
            {aiEhr.title}
          </h2>
          <p className="healthcare-patient-case-study-ai-bridge">
            <strong>On this engagement,</strong> the patient app was the member-facing surface; the
            same programme shipped an AI-heavy EHR and revenue cycle behind it so eligibility,
            coding, denials, and cost clarity could feed APIs the mobile product consumed.
          </p>
          {/* Same block order as /erp/healthcare-companies: lead under title, then Daily workflow */}
          {aiEhr.lead && <p className="erp-section-lead">{aiEhr.lead}</p>}

          {aiEhr.workflowSubtitle && (
            <h3 className="erp-ai-ehr-subheading">{aiEhr.workflowSubtitle}</h3>
          )}
          <div className="erp-ai-ehr-grid">
            {aiEhr.workflowFeatures?.map((item) => (
              <div key={item.title} className="erp-ai-ehr-card">
                <h4 className="erp-ai-ehr-card-title">{item.title}</h4>
                <p className="erp-ai-ehr-card-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {aiEhr.strategicTitle && (
            <h3 className="erp-ai-ehr-subheading erp-ai-ehr-subheading--spaced">
              {aiEhr.strategicTitle}
            </h3>
          )}
          {aiEhr.strategicLead && (
            <p className="erp-ai-ehr-strategic-lead">{aiEhr.strategicLead}</p>
          )}
          <div className="erp-ai-ehr-grid">
            {aiEhr.strategicFeatures?.map((item) => (
              <div key={item.title} className="erp-ai-ehr-card">
                <h4 className="erp-ai-ehr-card-title">{item.title}</h4>
                <p className="erp-ai-ehr-card-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {aiEhr.architectureTitle && (
            <h3 className="erp-ai-ehr-subheading erp-ai-ehr-subheading--spaced">
              {aiEhr.architectureTitle}
            </h3>
          )}
          {aiEhr.architectureIntro && (
            <p className="erp-ai-ehr-arch-intro">{aiEhr.architectureIntro}</p>
          )}
          <div className="erp-ai-ehr-layers">
            {aiEhr.architectureLayers?.map((layer) => (
              <div key={layer.name} className="erp-ai-ehr-layer">
                <h4 className="erp-ai-ehr-layer-name">{layer.name}</h4>
                <ul className="erp-ai-ehr-layer-list">
                  {layer.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {aiEhr.flywheelTitle && (
            <h3 className="erp-ai-ehr-subheading erp-ai-ehr-subheading--spaced">
              {aiEhr.flywheelTitle}
            </h3>
          )}
          {aiEhr.flywheel && <p className="erp-ai-ehr-flywheel">{aiEhr.flywheel}</p>}
        </div>
      </section>

      <section className="work2-implementation-section">
        <div className="work2-implementation-wrapper animate-on-scroll animate-fade-up" ref={s2}>
          <h2 className="results-main-title">How we delivered without losing the clinic’s trust</h2>
          <div className="solution-story">
            <p>
              Releases were sequenced so authentication, appointments, and dashboard stability
              preceded wider clinical adjacency—reducing the blast radius of API and UX changes while
              real patients were already in flight.
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
          <h2 className="work2-capabilities-title">Scheduling and fulfilment in one shell</h2>
          <div className="solution-story">
            <p>
              The same navigation home hosts booking, visits, prescriptions, diagnostics, pharmacy,
              and documents—so patients learn the product once even as the network adds modules.
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
          <h2 className="results-main-title">Use cases: flows that stay coherent end to end</h2>
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

      <section className="work2-results-section">
        <div className="work2-results-wrapper animate-on-scroll animate-fade-up">
          <h2 className="results-main-title">Outcomes: what “better access” actually meant</h2>
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
              For ERP and operations positioning for healthcare organisations, see{" "}
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
