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
    value: "9+",
    label: "Cities, one intake season",
    description:
      "each with its own sheet fragments—Delhi, Kolkata, Pune, and more in parallel",
    bgColor: "#ffffff",
  },
  {
    id: 2,
    value: "3.5 days",
    label: "To reconcile payments",
    description:
      "after each wave—GST lines and instalments living in exports, not workflows",
    bgColor: "#ffffff",
  },
  {
    id: 3,
    value: "40%",
    label: "Tickets duplicated",
    description:
      "or lost between email and ad-hoc trackers when alumni referrals spiked",
    bgColor: "#ffffff",
  },
  {
    id: 4,
    value: "600+",
    label: "Manual roster edits",
    description:
      "per cycle—where bulk import should have been one trusted upload",
    bgColor: "#ffffff",
  },
  {
    id: 5,
    value: "27%",
    label: "Participants confused",
    description:
      "about homework or seat access because CRM and classroom truth disagreed",
    bgColor: "#ffffff",
  },
  {
    id: 6,
    value: "₹18L",
    label: "At-risk revenue",
    description:
      "in “we’ll confirm Monday” limbo the week a multi-day intensive opened",
    bgColor: "#ffffff",
  },
];

const coreProductCapabilities = [
  {
    id: 1,
    title: "Teaching design → programme objects: the same arc in the database",
    bgColor: "#FFF7F2",
    features: [
      "Programmes modelled as sequences: intakes, modules, session dates—so “what we teach this week” isn’t a side spreadsheet",
      "Materials and homework tied to the programme journey; attendance and barcodes attach to the same session record",
      "One-day city events and long cohorts share one pattern: cohort → roster → where the class is in the methodology",
    ],
  },
  {
    id: 2,
    title: "CRM & coaching ops: Rahul-style delivery at scale",
    bgColor: "#ECF0FB",
    features: [
      "Batch-scoped CRM so each coach sees their owners’ progress against the programme—not a generic contact list",
      "Homework submissions, video approvals, and coach messaging in one thread aligned to the batch",
      "Helpdesk when alumni and referrals spike—without breaking the teaching workflow",
    ],
  },
  {
    id: 3,
    title: "Participants: pay, then learn in the same product",
    bgColor: "#EDE2FF",
    features: [
      "Dashboard where class lists, materials, and homework reflect what coaches released—same truth as ops",
      "Registration and GST-aware payments that unlock the right modules—commerce matches pedagogy",
      "Public city landing and pay links that feed the same roster the classroom runs on",
    ],
  },
  {
    id: 4,
    title: "Finance: collections, access, and refunds the board can audit",
    bgColor: "#FBF6EF",
    features: [
      "Overdues, partials, and refunds with trails finance can defend—not screenshots",
      "Content access gated on payment status so delivery and revenue stay aligned",
      "Bank and company masters centralised for disbursements and month-end",
    ],
  },
];

const platformGlance = [
  "We treated Rahul’s teaching stack as the product: courses, batches, homework queues, and coach scopes are data the UI routes on—not an afterthought to billing. SuperAdmin, CRM tiers, and participant apps sit on one guarded route matrix so nobody teaches from a different roster than finance.",
  "Peak intake means dense grids and bulk CSV when a city drops hundreds of names; day-to-day means an owner pays an instalment or submits homework from phone—same backbone.",
  "Session-backed admin; uploads for attendance, rosters, and partials with visible progress—ops owns release week; coaches aren’t blocked on engineering for every module drop.",
];

const roleSurfaces = [
  {
    title: "Programme office",
    items: [
      "Module/session structure per programme",
      "Multi-city calendar, barcodes, exports",
    ],
  },
  {
    title: "CRM & coaches",
    items: [
      "Batch-scoped: who’s on which module",
      "Homework, video queues, coach messaging",
    ],
  },
  {
    title: "Participants",
    items: [
      "Dashboard, classes, homework",
      "Payments, GST-aware receipts, terms",
    ],
  },
  {
    title: "Access & revenue",
    items: [
      "Content access vs payment status",
      "Overdues and partial pipelines",
    ],
  },
  {
    title: "Alumni & referrals",
    items: [
      "Structured follow-ups post-programme",
      "Tickets when volume spikes",
    ],
  },
  {
    title: "Finance hooks",
    items: ["Bank and company masters", "Refunds and invoice tooling"],
  },
  {
    title: "Data onboarding",
    items: ["CSV for attendance and cohorts", "Bulk workshop updates"],
  },
  {
    title: "Public touchpoints",
    items: ["City workshop registration", "Register-and-pay journeys"],
  },
];

const rolloutPhases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Map teaching journeys to routes first",
    description:
      "We aligned programme → batch → module/session flows with how coaches actually deliver—then wired SuperAdmin, CRM, and participant journeys to one router. Pedagogy-shaped navigation beats a pile of one-off admin screens.",
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
    title: "Enrolment: programme design → batch → who’s in the room",
    items: [
      "Course setup encodes the teaching arc; batches attach dates, city, and coach",
      "Rosters and attendance reflect the same programme object finance bills against",
      "Imports at scale without forking the methodology to a second sheet",
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
    title: "Delivery: session → materials → homework the coach can see",
    items: [
      "Materials and assignments released in step with the programme—not a separate email chain",
      "Participant view and CRM view share homework status; video queues moderated before go-live",
      "Calendar shows what the cohort is doing this week; same field coaches and ops trust",
    ],
    bgColor: "#ECF0FB",
  },
];

const businessResults = [
  {
    title: "What the institute stopped duct-taping",
    bgColor: "#EDE2FF",
    items: [
      "Teaching progression and money in one place—homework and modules aren’t divorced from billing",
      "Barcode and attendance exports that match the programme record coaches actually ran",
      "Fewer debates over which cohort was on which week of the methodology",
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
            How we helped a national business-education institute run multi-city
            workshops, long cohorts, and tiered CRM on one portal—registration,
            GST-aware payments, homework, and support—without ops and finance
            reading two different truths.
          </p>

          <div className="problem-content animate-fade-up animate-delay-300 animate-in">
            <p className="problem-description">
              <span className="problem-title-label">The problem:</span> Meet{" "}
              <strong>Rahul Jain</strong>, founder-director of an institute that
              has trained thousands of business owners across manufacturing,
              services, retail, and more— running everything from single-day
              open sessions in multiple metros to multi-day intensives and
              long-form programmes. The methodology was sharp in the hall; on
              paper it fractured into rosters, ad-hoc homework threads, and
              finance exports. Teaching IP lived in facilitator heads and slide
              decks while “the system” only knew payments. The worst Monday
              wasn’t a server outage—it was two cities with different seat
              counts for the same programme week, and coaches unsure which
              cohort was on which module.
            </p>

            <div className="nightmare-numbers">
              <h2 className="nightmare-title">
                The ops metrics that kept leadership awake:
              </h2>
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
        <div
          className="work2-solution-wrapper animate-on-scroll animate-fade-up"
          ref={s1}
        >
          <div className="solution-story">
            <p>
              “We weren’t short on curriculum,” Rahul says. “We were short on
              one spine where how we teach and how we run the business pointed
              at the same cohort.” The breaking point was a packed month:
              barcodes at the hall didn’t match the roster finance had closed
              on, while coaches couldn’t see whether homework for that week was
              even released—and GST lines waited on someone’s export.
            </p>
            <p>
              The mandate was a <strong>single portal</strong> that treats each
              programme as a product: modules, sessions, assignments, and coach
              touchpoints are first-class—not bolted on after CRM and payments.
              Institute staff, tiered CRM, and participants all read the same
              progression; bulk tools and finance sit on that backbone so
              month-end isn’t export gymnastics.
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
              Menu trees follow who does what in Rahul’s delivery model: admins
              own programme structure and money; coaches own their batch’s
              progression and homework; participants see learn, pay, and
              help—without everyone staring at one overloaded dashboard.
            </p>
          </div>
          <div className="re-stakeholder-grid" role="list">
            {roleSurfaces.map((r, i) => (
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
            How we rolled out without freezing admissions
          </h2>
          <div className="solution-story">
            <p>
              Delivery sequenced authentication shells and cohort flows before
              workshop barcodes and payment exceptions—so the institute could
              run real batches while edge modules caught up.
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
            Same teaching DNA for a one-day room or a nine-month cohort
          </h2>
          <div className="solution-story">
            <p>
              Rahul’s formats differ in length, not in kind: there is always a
              programme, a cohort, a sequence of touchpoints, and homework that
              proves application. The portal reuses one pattern—lists, detail,
              homework, payments—so ops doesn’t run one playbook for “events”
              and another for “long programmes.” Teaching stays the product; the
              ERP is how the institute runs it at scale.
            </p>
          </div>
          <div className="work2-capabilities-grid">
            <div
              className="work2-capability-card"
              style={{ backgroundColor: "#EDE2FF" }}
            >
              <h4 className="work2-capability-title">Institute operations</h4>
              <ul className="work2-capability-features">
                <li>Course and batch administration with attendance tooling</li>
                <li>
                  Workshop lifecycle including barcodes and participant exports
                </li>
                <li>Calendar as the shared schedule of record</li>
              </ul>
            </div>
            <div
              className="work2-capability-card"
              style={{ backgroundColor: "#ECF0FB" }}
            >
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
          <h2 className="results-main-title">
            Use cases: enrolment, delivery, and cash in sync
          </h2>
          <div className="solution-story">
            <p>
              These patterns describe how information moves between programme
              staff, CRM, and finance—without the same cohort being typed twice.
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
            Outcomes: calmer ops and defensible numbers
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
              For ERP positioning on education and training operations, see{" "}
              <Link href="/erp/education-training-companies">
                ERP for education &amp; training companies
              </Link>
              . All case studies are listed on{" "}
              <Link href="/case-studies">case studies</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
