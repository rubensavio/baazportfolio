import React from "react";
import Link from "next/link";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import { rescueFaqs } from "../../lib/projectRescueFaqs";
import "./page.scss";

const painPoints = [
  {
    title: "Missed Deadlines, Every Sprint",
    description:
      "Only 16% of IT projects are delivered on time and on budget. Timelines keep shifting — what was promised in 8 weeks is now 6 months, with no end in sight.",
    color: "#2E68FD",
  },
  {
    title: "Zero Transparency Into Progress",
    description:
      "You have no idea what's being built, what's blocked, or where your money is going. Updates are vague or non-existent. 68% of software failures trace back to poor communication.",
    color: "#D77E1B",
  },
  {
    title: "Constant Developer Churn",
    description:
      "Offshore attrition rates hit 17–25% annually. The team that started your project isn't the team working on it now. Context is lost. Knowledge walks out the door.",
    color: "#3B7793",
  },
  {
    title: "Mounting Technical Debt",
    description:
      "Shortcuts stacked on shortcuts. Rework of poorly written code adds 30–40% to total project spend. Every new feature breaks two existing ones.",
    color: "#08A965",
  },
  {
    title: "Scope Creep Without Accountability",
    description:
      "Requirements balloon, costs spike, but nobody owns the outcome. 31% of software projects are abandoned entirely — yours doesn't have to be.",
    color: "#932EFA",
  },
  {
    title: "Communication Blackholes",
    description:
      "Messages go unanswered for days. Escalations are met with excuses. You feel like a low-priority ticket in your own project.",
    color: "#2E68FD",
  },
];

const approachItems = [
  {
    title: "Free Codebase Health Audit",
    description:
      "Before anything, we assess what exists — architecture, code quality, test coverage, infrastructure, deployment pipeline. You get a clear, honest picture of where things stand.",
  },
  {
    title: "No \"Start From Scratch\" Pressure",
    features: [
      "We evaluate what's salvageable and what's not",
      "We preserve working modules and stable logic",
      "We refactor only what's broken or blocking progress",
      "We reuse your existing tech stack wherever possible",
      "We protect your existing investment",
    ],
  },
  {
    title: "Structured Handoff Process",
    description:
      "We reverse-engineer context from the codebase, documentation (if any), and your team's knowledge. No guesswork. No assumptions. Systematic onboarding even when the previous vendor left nothing behind.",
  },
  {
    title: "Immediate Stabilization",
    description:
      "We prioritize critical bugs, security vulnerabilities, and deployment blockers first. Your product stabilizes before new features begin.",
  },
  {
    title: "Owner-Level Communication",
    description:
      "Weekly strategy calls, shared project boards, direct access to the engineers doing the work. Not account managers reading scripts — operators who understand every line of code.",
  },
];

const serviceCategories = [
  {
    id: 1,
    title: "Codebase Audit & Health Assessment",
    goal: "Know exactly what you have before deciding what to do next.",
    bgColor: "#FFF7F2",
    features: [
      "Architecture & Design Pattern Review",
      "Code Quality & Maintainability Scoring",
      "Security Vulnerability Assessment",
      "Test Coverage & CI/CD Pipeline Audit",
      "Technical Debt Quantification",
      "Infrastructure & Scalability Analysis",
      "Honest Go / No-Go Recommendation",
    ],
  },
  {
    id: 2,
    title: "Mid-Project Takeover & Stabilization",
    goal: "Pick up right where things were left — without starting over.",
    bgColor: "#ECF0FB",
    features: [
      "Context Recovery from Existing Codebase",
      "Critical Bug Triage & Resolution",
      "Deployment Pipeline Restoration",
      "Environment Stabilization (Dev, Staging, Prod)",
      "Dependency & Version Conflict Resolution",
      "Sprint Backlog Re-Prioritization",
    ],
  },
  {
    id: 3,
    title: "Technical Debt Resolution",
    goal: "Turn a fragile codebase into a foundation you can build on.",
    bgColor: "#FBF6EF",
    features: [
      "Strategic Refactoring (Not Rewrites)",
      "Test Suite Implementation",
      "Database Schema Optimization",
      "API Architecture Cleanup",
      "Performance Bottleneck Elimination",
      "Documentation & Knowledge Base Creation",
    ],
  },
  {
    id: 4,
    title: "Ongoing Development & Delivery",
    goal: "Ship features at the velocity you were originally promised.",
    bgColor: "#EDE2FF",
    features: [
      "Feature Development on Stable Foundation",
      "Sprint-Based Delivery with Predictable Velocity",
      "Continuous Integration & Deployment",
      "Transparent Progress Reporting",
      "Product Roadmap Alignment",
    ],
  },
];

const caseStudyResults = [
  { label: "Product stabilized and deployed to production within 4 weeks" },
  { label: "Feature delivery velocity increased by 3x post-takeover" },
  { label: "Critical security vulnerabilities patched before launch" },
  { label: "80% of existing codebase preserved — no restart required" },
];

const caseStudyActions = [
  "Full codebase audit — identified 40+ critical issues in first 72 hours",
  "Stabilized CI/CD pipeline that had been broken for 3 months",
  "Resolved 6 months of accumulated technical debt in phased sprints",
  "Rebuilt test suite from zero to 70% coverage in 5 weeks",
  "Re-established structured sprint cadence with weekly stakeholder demos",
  "Launched production release that previous vendor failed to ship for 8 months",
];

const proofBlocks = [
  {
    title: "B2B SaaS Platform — Vendor Disappeared Mid-Build",
    items: [
      "Previous agency collected 60% payment, then went silent — classic vendor ghosting",
      "Codebase had zero tests, no CI/CD, and undocumented architecture",
      "We reverse-engineered context, stabilized, and shipped to production in 6 weeks",
      "Platform now serves 10,000+ active users with 99.9% uptime",
    ],
  },
  {
    title: "Enterprise Operations App — 18 Months, Nothing Shipped",
    items: [
      "Client had switched vendors twice — both times told to 'start from scratch'",
      "We preserved 75% of the existing codebase and deployed in 8 weeks",
      "Reduced monthly burn rate by 40% while tripling feature delivery velocity",
      "Full IP and codebase ownership stayed with the client throughout",
    ],
  },
];

const techTools = [
  {
    title: "Rapid Context Recovery",
    features: [
      "Automated codebase analysis and dependency mapping",
      "Architecture visualization from existing code",
      "Technical debt scoring and prioritization",
      "Knowledge extraction even without documentation",
    ],
  },
  {
    title: "Transparent Project Execution",
    features: [
      "Shared project boards with real-time progress",
      "Sprint velocity tracking and forecasting",
      "Automated deployment and release notes",
      "Direct engineer access — no middlemen",
    ],
  },
];

const audienceList = [
  "Companies burned by previous software vendors",
  "Startups with stalled MVPs or failed launches",
  "Enterprises stuck with undelivered vendor projects",
  "Founders who inherited a messy codebase",
  "CTOs evaluating whether to rescue or rebuild",
  "Businesses whose vendor disappeared mid-project",
];

const auditBenefits = [
  "Honest assessment of your current codebase health",
  "List of critical issues blocking progress",
  "What's salvageable vs. what needs rework",
  "Estimated timeline and cost to reach stable delivery",
  "A clear rescue roadmap — no obligation attached",
];

const rescueTimeline = [
  {
    phase: "Week 1",
    title: "Audit & access",
    body:
      "Secure repos, cloud, and CI/CD; automated scans and architecture mapping; critical blocker list within the first few days — you see facts, not opinions.",
  },
  {
    phase: "Week 2",
    title: "Stabilize",
    body:
      "Fix production defects, restore deployments, patch urgent security issues, and get a repeatable release path — stop the bleeding before new scope.",
  },
  {
    phase: "Week 3+",
    title: "Ship & scale velocity",
    body:
      "Sprint cadence, demos, debt paydown in priority order, and predictable delivery on the stabilized foundation — most teams resume meaningful feature flow within this window.",
  },
];

const handoffSymptoms = [
  {
    q: "What are common signs my project is failing?",
    a: "Slipped deadlines with new excuses each time, rotating developers, vague updates instead of working demos, rising cost without proportional output, and features that break existing behavior. See also our guide on signs your project is failing.",
  },
  {
    q: "What do you need from us to start a takeover?",
    a: "Access to source control, cloud and hosting, CI/CD if any, database and third-party credentials where safe, design assets, and a product owner who can answer workflow questions. We recover context from code when docs are missing.",
  },
  {
    q: "How does handoff work if the old vendor is hostile or gone?",
    a: "We reverse-engineer from the repository and environments you control. Legal and access steps vary — we’ve onboarded with zero cooperation from the prior vendor when the client owned the assets.",
  },
];

export default function ProjectRescue() {
  return (
    <div className="rescue-page">
      <ClientNavbar />

      {/* HERO */}
      <section className="rescue-hero">
        <div className="rescue-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.webp"
            alt="Project rescue and software recovery services background"
            className="rescue-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="rescue-hero-wrapper">
          <div
            className="rescue-hero-header animate-fade-up animate-in"
          >
            <span className="rescue-hero-label">
              Project Rescue &amp; Recovery
            </span>
            <h1 className="rescue-hero-heading">
              We Rescue Failed Software Projects.
              <br />
              No Restart Required.
            </h1>
            <p className="rescue-hero-direct-answer">
              <strong>Software project rescue</strong> is taking over a stalled
              or failing build, auditing and stabilizing the codebase, and
              shipping production releases—often preserving most existing
              work—when a prior vendor or team could not deliver.
            </p>
            <p className="rescue-hero-description">
              Baaz is a software project rescue agency. Over 50% of our
              engagements are mid-project takeovers — from companies burned by
              bad vendors, missed deadlines, and broken promises. We
              don&apos;t ask you to start over. We stabilize what&apos;s
              there and deliver what was promised.
            </p>
            <div className="rescue-hero-actions">
              <Link href="/get-in-touch" className="rescue-hero-cta">
                Get Free Codebase Audit
              </Link>
              <Link href="/case-studies" className="rescue-hero-secondary-cta">
                View case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="rescue-timeline" aria-labelledby="rescue-timeline-heading">
        <div className="rescue-timeline-wrapper">
          <span className="rescue-section-label">Typical cadence</span>
          <h2 id="rescue-timeline-heading" className="rescue-timeline-heading">
            Rescue timeline: audit, stabilize, then scale delivery
          </h2>
          <p className="rescue-timeline-subtext">
            Exact dates depend on codebase state; this is the shape most mid-project
            takeovers follow after our free audit.
          </p>
          <ol className="rescue-timeline-list">
            {rescueTimeline.map((step) => (
              <li key={step.phase} className="rescue-timeline-step">
                <span className="rescue-timeline-phase">{step.phase}</span>
                <h3 className="rescue-timeline-title">{step.title}</h3>
                <p className="rescue-timeline-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SYMPTOMS & HANDOFF */}
      <section className="rescue-handoff-faq" aria-labelledby="rescue-handoff-heading">
        <div className="rescue-handoff-wrapper">
          <h2 id="rescue-handoff-heading" className="rescue-handoff-heading">
            Symptoms &amp; handoff — quick answers
          </h2>
          <p className="rescue-handoff-lead">
            Expand a question for a concise answer. For deeper reading, use the links
            under each answer.
          </p>
          <div className="rescue-handoff-details">
            {handoffSymptoms.map((item) => (
              <details key={item.q} className="rescue-handoff-item">
                <summary className="rescue-handoff-summary">{item.q}</summary>
                <p className="rescue-handoff-answer">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="rescue-handoff-more">
            More:{" "}
            <Link href="/blog/signs-your-software-project-is-failing">
              signs your project is failing
            </Link>
            ,{" "}
            <Link href="/blog/software-project-rescue-checklist">
              rescue checklist
            </Link>
            ,{" "}
            <Link href="/blog/how-to-switch-software-development-vendors">
              switching vendors
            </Link>
            .
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="rescue-pain">
        <div className="rescue-pain-wrapper">
          <div className="rescue-pain-header">
            <span className="rescue-section-label">The Problem</span>
            <h2 className="rescue-pain-heading">
              Why Software Projects Fail With the Wrong Development Vendor
            </h2>
            <p className="rescue-pain-subtext">
              70% of IT initiatives don&apos;t achieve their intended goals.
              You hired a vendor to build your product. Instead, you got
              excuses, delays, and a half-built system that doesn&apos;t work.
              You&apos;re not alone — and the project isn&apos;t dead.
            </p>
          </div>
          <div className="rescue-pain-container">
            <div className="rescue-pain-grid">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className={`rescue-pain-step pain-step-${index + 1}`}
                >
                  <div
                    className="rescue-pain-badge"
                    style={{ backgroundColor: point.color }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="rescue-pain-title">{point.title}</h3>
                  <p className="rescue-pain-description">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="rescue-pain-conclusion">
            Bad vendor experiences don&apos;t mean your product is dead. It
            means you need a team that knows how to revive it.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="rescue-approach">
        <div className="rescue-approach-wrapper">
          <div className="rescue-approach-header">
            <span className="rescue-section-label">Our Approach</span>
            <h2 className="rescue-approach-heading">
              How We Rescue Failed Software Projects
            </h2>
            <p className="rescue-approach-subtext">
              We don&apos;t sell rewrites. We take over your stalled software
              project, stabilize the foundation, and get you back on track —
              fast.
            </p>
          </div>
          <div className="rescue-approach-grid">
            {approachItems.map((item, index) => (
              <div key={index} className="rescue-approach-card">
                <h3 className="rescue-approach-title">{item.title}</h3>
                {item.description && (
                  <p className="rescue-approach-description">
                    {item.description}
                  </p>
                )}
                {item.features && (
                  <ul className="rescue-approach-features">
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
      <section className="rescue-services">
        <div className="rescue-services-wrapper">
          <div className="rescue-services-header">
            <span className="rescue-section-label">What We Deliver</span>
            <h2 className="rescue-services-heading">
              Full-Service Software Project Recovery &amp; Takeover
            </h2>
            <p className="rescue-services-subtext">
              From the first codebase audit to stable, predictable delivery —
              we handle every phase of rescuing your failed software project
              and turning it into a shipped product.
            </p>
          </div>
          <div className="rescue-services-grid">
            {serviceCategories.map((cat) => (
              <div key={cat.id} className="rescue-service-card">
                <div
                  className="rescue-service-card-header"
                  style={{ backgroundColor: cat.bgColor }}
                >
                  <span className="rescue-service-number">
                    0{cat.id}
                  </span>
                  <h3 className="rescue-service-title">{cat.title}</h3>
                </div>
                <div className="rescue-service-card-body">
                  <ul className="rescue-service-features">
                    {cat.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <p className="rescue-service-goal">{cat.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="rescue-casestudy">
        <div className="rescue-casestudy-wrapper">
          <div className="rescue-casestudy-header">
            <span className="rescue-section-label">Results</span>
            <h2 className="rescue-casestudy-heading">
              How We Rescued a Stalled HealthTech Platform
            </h2>
          </div>
          <div className="rescue-casestudy-content">
            <div className="rescue-casestudy-results">
              <h3>Results Achieved</h3>
              <ul>
                {caseStudyResults.map((r, i) => (
                  <li key={i}>{r.label}</li>
                ))}
              </ul>
            </div>
            <div className="rescue-casestudy-actions">
              <h3>What We Did</h3>
              <ul>
                {caseStudyActions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="rescue-casestudy-tagline">
            You don&apos;t need a new vendor. You need the right one.
          </p>
          <p className="rescue-casestudy-links">
            Read shipped outcomes:{" "}
            <Link href="/case-studies">Case studies hub</Link> ·{" "}
            <Link href="/work1">Manufacturing AI</Link> ·{" "}
            <Link href="/work2">Hiring platform build</Link>
            . Ready to talk?{" "}
            <Link href="/get-in-touch">Contact</Link> or{" "}
            <Link href="/book-call">book a call</Link>.
          </p>
        </div>
      </section>

      {/* PROOF BLOCKS */}
      <section className="rescue-proof">
        <div className="rescue-proof-wrapper">
          <div className="rescue-proof-grid">
            {proofBlocks.map((block, index) => (
              <div key={index} className="rescue-proof-card">
                <h3 className="rescue-proof-title">{block.title}</h3>
                <ul className="rescue-proof-items">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="rescue-proof-tagline">
            50% of our projects are rescues. This isn&apos;t a side offering
            — it&apos;s our core competency.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="rescue-tech">
        <div className="rescue-tech-wrapper">
          <div className="rescue-tech-header">
            <span className="rescue-section-label">How We Operate</span>
            <h2 className="rescue-tech-heading">
              Our Mid-Project Takeover &amp; Recovery Process
            </h2>
            <p className="rescue-tech-subtext">
              Unlike agencies that only know how to start fresh, we&apos;ve
              refined a systematic approach to software project takeover and
              mid-project recovery.
            </p>
          </div>
          <div className="rescue-tech-grid">
            {techTools.map((tool, index) => (
              <div key={index} className="rescue-tech-card">
                <h3 className="rescue-tech-title">{tool.title}</h3>
                <ul className="rescue-tech-features">
                  {tool.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="rescue-tech-tagline">
            We don&apos;t need your previous vendor&apos;s cooperation to get
            started. We figure it out from the code.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="rescue-audience">
        <div className="rescue-audience-wrapper">
          <div className="rescue-audience-header">
            <span className="rescue-section-label">Who This Is For</span>
            <h2 className="rescue-audience-heading">We Work Best With</h2>
          </div>
          <ul className="rescue-audience-list">
            {audienceList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="rescue-audience-tagline">
            If your software project is stuck, stalled, or failing — this
            is the team built to rescue it.
          </p>
          <p className="rescue-audience-resources">
            Not sure if your project needs rescue? Read our guides:{" "}
            <Link href="/blog/signs-your-software-project-is-failing">Signs your software project is failing</Link>,{" "}
            <Link href="/blog/how-to-switch-software-development-vendors">How to switch software vendors</Link>, and our{" "}
            <Link href="/blog/software-project-rescue-checklist">Project rescue checklist</Link>.
          </p>
        </div>
      </section>

      <FAQ
        faqs={rescueFaqs}
        heading="Software Project Rescue & Recovery FAQs"
      />

      {/* CTA */}
      <section className="rescue-cta">
        <div className="rescue-cta-wrapper">
          <div className="rescue-cta-container">
            <div className="rescue-cta-background">
              <img
                src="/assets/readyToBuildBg.webp"
                alt="Start your project rescue background"
                className="rescue-cta-bg-image"
              />
            </div>
            <div className="rescue-cta-content">
              <h2 className="rescue-cta-heading">
                Get a Free Software Project Health Audit
              </h2>
              <p className="rescue-cta-description">You&apos;ll get:</p>
              <ul className="rescue-cta-benefits">
                {auditBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="rescue-cta-note">
                No obligation. No pressure to rebuild from scratch.
              </p>
              <Link href="/get-in-touch" className="rescue-cta-button">
                Get My Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
