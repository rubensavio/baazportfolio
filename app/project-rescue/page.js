"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../../components/FAQ/FAQ"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

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

const rescueFaqs = [
  {
    question:
      "My software vendor is not delivering — what should I do?",
    answer:
      "If your software vendor is consistently missing deadlines, delivering poor quality, or going silent — you're not stuck. Start by documenting every unmet commitment and securing access to your codebase, repositories, and cloud infrastructure. Then get an independent codebase audit to understand exactly where things stand. At Baaz, over 50% of our projects begin exactly this way: a company reaches out after a bad vendor experience, and we take over mid-project without requiring a restart. A free codebase health audit will tell you what's salvageable and what it takes to get back on track.",
  },
  {
    question:
      "How do I switch software development companies mid-project?",
    answer:
      "Switching software vendors mid-project is more common than most people think — and far less risky than continuing with a vendor that isn't delivering. The key steps: (1) Secure full access to your code repositories, cloud accounts, and documentation before terminating. (2) Get an independent codebase audit to assess the current state. (3) Choose a partner with proven mid-project takeover experience — not one that will pressure you to rebuild from scratch. At Baaz, we've built a systematic handoff process that recovers context even when the previous vendor left nothing behind.",
  },
  {
    question:
      "How do I know if my software project is failing?",
    answer:
      "Warning signs include: deadlines consistently missed by weeks or months, vague progress updates with no working demos, developer churn where new people keep joining and leaving, ballooning costs with no proportional output, features that break existing functionality, and a growing feeling that you have no visibility into what's actually happening. Industry data shows 70% of IT initiatives fail to achieve their goals, and 31% are abandoned entirely. If you recognize three or more of these signs, your project likely needs a structured rescue — not more of the same.",
  },
  {
    question:
      "Can you really take over a project midway without starting from scratch?",
    answer:
      "Yes — and this is what we do best. Over 50% of our projects are mid-project takeovers. We've built a systematic process for reverse-engineering context from existing codebases, even when documentation is poor or non-existent. We evaluate what's salvageable, stabilize the foundation, and continue building from there. Starting from scratch is the last resort, not the default.",
  },
  {
    question:
      "What if the previous vendor left behind a messy, undocumented codebase?",
    answer:
      "That's the norm, not the exception. We use automated analysis tools combined with manual code review to map dependencies, understand architecture decisions, and identify critical issues. We've successfully recovered projects where the previous vendor left zero documentation and even deleted their access credentials. Poor documentation is not a blocker for us — it's the starting condition of most rescues.",
  },
  {
    question: "How long does it take to stabilize a stalled software project?",
    answer:
      "It depends on the state of the codebase, but our typical stabilization phase is 2–6 weeks. In the first 72 hours, we complete a comprehensive audit and identify all critical blockers. Within the first two weeks, we resolve deployment issues and critical bugs. By week four to six, you have a stable foundation ready for new feature development. Projects that have been stalled for months often see their first production deployment within the first month of our engagement.",
  },
  {
    question: "How is Baaz different from other agencies that offer project rescue?",
    answer:
      "Three things: (1) We default to preserving your existing work — most agencies push for a full rewrite because it's easier and more billable. (2) We've done this at scale — 50% of our portfolio consists of rescued projects, so our processes are battle-tested, not theoretical. (3) Full transparency — you get direct access to engineers, shared project boards, and weekly strategy calls. No account managers as middlemen. We also won't charge you a discovery fee to tell you what's wrong — the initial codebase audit is free.",
  },
  {
    question: "What does the free codebase audit include?",
    answer:
      "We analyze architecture quality, code maintainability, security vulnerabilities, test coverage, deployment pipeline health, and technical debt levels. You receive a detailed report with a go/no-go recommendation, an estimated rescue timeline, and a prioritized action plan. No obligation, no sales pitch — just an honest assessment of whether your project is worth rescuing and exactly what it will take.",
  },
  {
    question: "Will I retain full ownership of my codebase and IP?",
    answer:
      "Absolutely. Your code, your infrastructure, your intellectual property — always. We work in your repositories, your cloud accounts, and your project management tools. When we're done, everything stays with you. No lock-in, no proprietary dependencies. We've seen vendors hold code hostage — we do the exact opposite.",
  },
  {
    question: "What if the audit reveals the project should be rebuilt from scratch?",
    answer:
      "We'll tell you honestly. If the codebase is beyond rescue — security is fundamentally compromised, the architecture can't scale, or the cost of fixing exceeds rebuilding — we'll recommend a rebuild and explain exactly why. But in our experience, full rebuilds are rarely necessary. Most projects have significant salvageable components that save 40–70% of the time and cost compared to starting over.",
  },
  {
    question: "What technologies and frameworks do you work with for project rescue?",
    answer:
      "We're technology-agnostic. We've rescued projects built on React, Angular, Vue, Next.js, Node.js, Python, Django, Ruby on Rails, .NET, Java, Go, and more. Our takeover process adapts to your existing stack — we don't force migrations to technologies we prefer. Whatever your previous vendor built it on, we can pick it up.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rescueFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Project Rescue & Recovery",
  description:
    "We rescue stalled, mismanaged, and abandoned software projects. Mid-project takeover, codebase stabilization, technical debt resolution, and ongoing delivery — without starting from scratch.",
  provider: {
    "@type": "Organization",
    name: "Baaz",
    url: "https://www.baaz.pro",
  },
  serviceType: "Software Project Rescue & Recovery",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
};

export default function ProjectRescue() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="rescue-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="rescue-hero">
        <div className="rescue-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.svg"
            alt="Project rescue and software recovery services background"
            className="rescue-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="rescue-hero-wrapper">
          <div
            className={`rescue-hero-header animate-fade-up ${isLoaded ? "animate-in" : ""}`}
          >
            <span className="rescue-hero-label">
              Project Rescue &amp; Recovery
            </span>
            <h1 className="rescue-hero-heading">
              We Rescue Failed Software Projects.
              <br />
              No Restart Required.
            </h1>
            <p className="rescue-hero-description">
              Baaz is a software project rescue agency. Over 50% of our
              engagements are mid-project takeovers — from companies burned by
              bad vendors, missed deadlines, and broken promises. We
              don&apos;t ask you to start over. We stabilize what&apos;s
              there and deliver what was promised.
            </p>
            <Link href="/get-in-touch" className="rescue-hero-cta">
              Get Free Codebase Audit
            </Link>
          </div>
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

      {/* CTA */}
      <section className="rescue-cta">
        <div className="rescue-cta-wrapper">
          <div className="rescue-cta-container">
            <div className="rescue-cta-background">
              <img
                src="/assets/readyToBuildBg.svg"
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

      <FAQ
        faqs={rescueFaqs}
        heading="Software Project Rescue & Recovery FAQs"
      />
      <Footer />
    </div>
  );
}
