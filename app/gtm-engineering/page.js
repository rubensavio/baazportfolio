"use client";

import React, { useEffect } from "react";
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
    title: "Random Acts of Marketing",
    description:
      "A blog post here, a cold email there — no system connecting content to pipeline.",
    color: "#2E68FD",
  },
  {
    title: "Channel Silos",
    description:
      "Outbound doesn't talk to content. Ads don't feed nurture. Every channel operates in isolation.",
    color: "#D77E1B",
  },
  {
    title: "Spray-and-Pray Outbound",
    description:
      "Mass emails to unqualified lists with zero signal intelligence or personalization at scale.",
    color: "#3B7793",
  },
  {
    title: "No Lead Lifecycle",
    description:
      "Leads enter the funnel and disappear. No scoring, no routing, no multi-touch nurture.",
    color: "#08A965",
  },
  {
    title: "Vanity Metrics Over Pipeline",
    description:
      "Tracking impressions and clicks instead of meetings booked and revenue influenced.",
    color: "#932EFA",
  },
];

const approachItems = [
  {
    title: "Systems Over Tactics",
    description:
      "We don't run campaigns in isolation. Every channel feeds the next — content fuels outbound, outbound triggers ads, engagement feeds lead capture, and scoring drives conversion.",
  },
  {
    title: "Signal-Based Execution",
    features: [
      "Website visitor identification and scoring",
      "Social engagement capture and enrichment",
      "Job-change and intent-signal monitoring",
      "Real-time routing based on buyer behavior",
      "ICP scoring before a single message is sent",
    ],
  },
  {
    title: "Full-Funnel Ownership",
    description:
      "From the first touchpoint to closed-won and beyond — we engineer every stage of your go-to-market motion, including retention and expansion.",
  },
  {
    title: "Multi-Channel Orchestration",
    description:
      "LinkedIn, email, cold calling, ads, SEO, AI search — coordinated into a single revenue engine, not managed as disconnected tools.",
  },
  {
    title: "Compounding, Not Linear",
    description:
      "Every asset we build generates data. That data sharpens targeting. Sharper targeting improves conversion. This is how GTM systems compound over time.",
  },
];

const serviceCategories = [
  {
    id: 1,
    title: "Demand Generation & Content Engine",
    goal: "Create demand across every channel that feeds into pipeline.",
    bgColor: "#FFF7F2",
    features: [
      "Multi-platform content strategy (LinkedIn, X, YouTube)",
      "Team-wide account amplification system",
      "Engagement-to-outbound data capture",
      "Content-led lead magnet funnels",
      "Thought leadership ad amplification",
      "AI search & answer engine optimization (AEO)",
    ],
  },
  {
    id: 2,
    title: "Outbound & Pipeline Automation",
    goal: "Build automated, signal-driven outbound that books qualified meetings.",
    bgColor: "#ECF0FB",
    features: [
      "Account tiering and ICP scoring models",
      "Signal-based campaign architecture",
      "Multi-channel sequencing (email, LinkedIn, calling, WhatsApp)",
      "Intent-triggered workflows",
      "ABM air-and-ground coordination",
      "CRM pipeline integration and tracking",
    ],
  },
  {
    id: 3,
    title: "Lead Capture & Nurture Systems",
    goal: "Convert anonymous traffic into scored contacts and nurture them to conversion.",
    bgColor: "#FBF6EF",
    features: [
      "Multi-mechanism lead capture (social, website, content)",
      "Progressive profiling via behavior + enrichment",
      "Multi-channel nurture sequences (email, LinkedIn, retargeting)",
      "Community and event-driven engagement loops",
      "Health scoring and engagement tracking",
      "Automated re-engagement for cold leads",
    ],
  },
  {
    id: 4,
    title: "Conversion, Qualification & Expansion",
    goal: "Turn nurtured leads into revenue and expand within existing accounts.",
    bgColor: "#EDE2FF",
    features: [
      "High-intent trigger detection and routing",
      "Sales process architecture (discovery → close)",
      "Deal scoring and prioritization models",
      "Onboarding and customer success workflows",
      "Expansion and upsell playbooks",
      "Customer-to-content flywheel",
    ],
  },
];

const caseStudyResults = [
  { label: "3x increase in qualified pipeline within 90 days" },
  { label: "60% reduction in cost per qualified meeting" },
  { label: "Outbound reply rates improved from 2% to 11%" },
  { label: "Content-sourced pipeline grew from 0% to 35% of total" },
];

const caseStudyActions = [
  "Designed and deployed a full-funnel GTM system from scratch",
  "Built ICP scoring model and tiered account architecture",
  "Launched coordinated content + outbound + ABM motion",
  "Implemented signal-based campaigns across 6 intent triggers",
  "Engineered multi-channel nurture with automated lead routing",
  "Connected every touchpoint into a single reporting layer",
];

const proofBlocks = [
  {
    title: "Early-Stage SaaS",
    items: [
      "Went from zero outbound infrastructure to a repeatable pipeline engine",
      "Content system generated engagement data that directly fed outbound sequences",
      "Achieved predictable monthly meeting volume within the first quarter",
    ],
  },
  {
    title: "Scaling B2B Company",
    items: [
      "Consolidated 5 disconnected tools into one orchestrated GTM system",
      "Reduced sales cycle length by aligning marketing and sales handoff",
      "Expanded revenue from existing customers through structured expansion plays",
    ],
  },
];

const techTools = [
  {
    title: "GTM Automation Layer",
    features: [
      "Signal detection and real-time lead routing",
      "Multi-channel sequence orchestration",
      "ICP scoring and account enrichment",
      "Engagement-to-pipeline data flow",
    ],
  },
  {
    title: "Revenue Intelligence Dashboard",
    features: [
      "Full-funnel attribution from first touch to close",
      "Pipeline velocity and conversion tracking",
      "Channel performance comparison",
      "Lead health and deal scoring visibility",
    ],
  },
];

const audienceList = [
  "B2B SaaS companies building their first GTM motion",
  "Funded startups ready to scale pipeline",
  "Companies with disconnected sales and marketing systems",
  "Revenue teams relying on manual, unscalable outbound",
  "Businesses investing in content but not converting it to pipeline",
  "Teams looking to add AI search and AEO to their GTM strategy",
];

const auditBenefits = [
  "Where your current GTM system is leaking pipeline",
  "Which channels have the highest untapped potential",
  "How your ICP targeting and scoring can improve",
  "What a connected GTM engine looks like for your business",
  "A prioritized 90-day roadmap to predictable pipeline",
];

const gtmFaqs = [
  {
    question: "What is GTM engineering and how is it different from traditional marketing?",
    answer:
      "GTM engineering treats your go-to-market motion as a system — not a collection of disconnected campaigns. Instead of running content, outbound, and ads separately, we engineer them as interconnected workflows where each channel feeds the next. The result is compounding pipeline growth instead of linear, one-off results.",
  },
  {
    question: "What does your GTM engineering service include?",
    answer:
      "Our GTM engineering covers the full revenue lifecycle: demand generation and content systems, outbound automation and pipeline building, paid amplification and ABM campaigns, SEO and AI search optimization, lead capture and nurture architecture, conversion optimization, and retention and expansion playbooks. Every component is connected into one system.",
  },
  {
    question: "How long does it take to see results from a GTM system?",
    answer:
      "Signal-based outbound and content-to-pipeline motions typically show measurable impact within 30–60 days. Full-system compounding — where content, outbound, ads, SEO, and nurture are all reinforcing each other — takes 90–120 days. We design for both quick wins and long-term compounding.",
  },
  {
    question: "Do you work with early-stage startups or only established companies?",
    answer:
      "We work with both. For early-stage companies, we build foundational GTM systems that scale. For established companies, we audit and re-engineer existing go-to-market motions to eliminate waste, connect silos, and improve pipeline velocity. The approach adapts to your stage.",
  },
  {
    question: "How is Baaz different from a demand gen agency or outbound agency?",
    answer:
      "Most agencies specialize in one channel — outbound, content, or ads. We engineer the entire go-to-market system. Every channel is connected: content generates engagement data that feeds outbound, outbound engagement triggers ad retargeting, and all signals route through scoring and nurture. You get one unified pipeline engine, not fragmented vendor outputs.",
  },
  {
    question: "What tools and platforms do you use?",
    answer:
      "We are tool-agnostic and work with whatever fits your stack. Our systems typically involve CRM platforms, enrichment tools, multi-channel sequencing, ad platforms, SEO tools, and AI-powered scoring. We also build custom automation layers that connect your existing tools into a single workflow.",
  },
  {
    question: "Do you handle SEO and AI search optimization as part of GTM?",
    answer:
      "Yes. SEO and AI search optimization (AEO) are core pillars of our GTM system. We build topic clusters for organic traffic, optimize for AI search engines like ChatGPT and Perplexity, and connect organic discovery directly into your lead capture and nurture flows. It is not a separate effort — it is part of the pipeline engine.",
  },
  {
    question: "How does the free GTM audit work?",
    answer:
      "We analyze your current go-to-market across five dimensions: channel connectivity, ICP targeting, lead lifecycle, pipeline attribution, and system efficiency. You receive a detailed assessment showing where pipeline is leaking, which channels have untapped potential, and a prioritized 90-day roadmap. No obligation.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: gtmFaqs.map((faq) => ({
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
  name: "GTM Engineering",
  description:
    "Full-stack go-to-market engineering — demand generation, outbound automation, ABM campaigns, SEO, AI search optimization, lead nurture, and revenue operations built as one interconnected pipeline system.",
  provider: {
    "@type": "Organization",
    name: "Baaz",
    url: "https://www.baaz.pro",
  },
  serviceType: [
    "GTM Engineering",
    "Internet Marketing Service",
    "Marketing Consultant",
    "Business Development Service",
  ],
};

export default function GtmEngineering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gtm-page">
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
      <section className="gtm-hero">
        <div className="gtm-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.webp"
            alt="GTM engineering background"
            className="gtm-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="gtm-hero-wrapper">
          <div
            className="gtm-hero-header animate-fade-up animate-in"
          >
            <span className="gtm-hero-label">GTM Engineering</span>
            <h1 className="gtm-hero-heading">
              We Don&apos;t Run Campaigns.
              <br />
              We Engineer Go-to-Market Systems.
            </h1>
            <p className="gtm-hero-description">
              Full-stack GTM engineering — content, outbound, ads, SEO, lead
              capture, nurture, and conversion — built as one interconnected
              system that compounds pipeline, not just activity.
            </p>
            <Link href="/get-in-touch" className="gtm-hero-cta">
              Get Free GTM Audit
            </Link>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="gtm-pain">
        <div className="gtm-pain-wrapper">
          <div className="gtm-pain-header">
            <span className="gtm-section-label">The Problem</span>
            <h2 className="gtm-pain-heading">
              Why Most Go-to-Market Motions Fail
            </h2>
            <p className="gtm-pain-subtext">
              Pipeline doesn&apos;t come from working harder on individual channels.
              It comes from connecting them into one system.
            </p>
          </div>
          <div className="gtm-pain-container">
            <div className="gtm-pain-grid">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className={`gtm-pain-step pain-step-${index + 1}`}
                >
                  <div
                    className="gtm-pain-badge"
                    style={{ backgroundColor: point.color }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="gtm-pain-title">{point.title}</h3>
                  <p className="gtm-pain-description">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="gtm-pain-conclusion">
            GTM engineering replaces disconnected tactics with a unified
            revenue system.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="gtm-approach">
        <div className="gtm-approach-wrapper">
          <div className="gtm-approach-header">
            <span className="gtm-section-label">Our Approach</span>
            <h2 className="gtm-approach-heading">
              The Baaz GTM Engineering System
            </h2>
            <p className="gtm-approach-subtext">
              We build go-to-market systems where every channel reinforces
              every other channel — creating compounding pipeline growth.
            </p>
          </div>
          <div className="gtm-approach-grid">
            {approachItems.map((item, index) => (
              <div key={index} className="gtm-approach-card">
                <h3 className="gtm-approach-title">{item.title}</h3>
                {item.description && (
                  <p className="gtm-approach-description">
                    {item.description}
                  </p>
                )}
                {item.features && (
                  <ul className="gtm-approach-features">
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
      <section className="gtm-services">
        <div className="gtm-services-wrapper">
          <div className="gtm-services-header">
            <span className="gtm-section-label">What We Build</span>
            <h2 className="gtm-services-heading">
              End-to-End GTM Engineering — From Demand to Revenue
            </h2>
            <p className="gtm-services-subtext">
              Four interconnected systems that cover every stage of your
              go-to-market motion — from creating demand to closing deals and
              expanding accounts.
            </p>
          </div>
          <div className="gtm-services-grid">
            {serviceCategories.map((cat) => (
              <div key={cat.id} className="gtm-service-card">
                <div
                  className="gtm-service-card-header"
                  style={{ backgroundColor: cat.bgColor }}
                >
                  <span className="gtm-service-number">0{cat.id}</span>
                  <h3 className="gtm-service-title">{cat.title}</h3>
                </div>
                <div className="gtm-service-card-body">
                  <ul className="gtm-service-features">
                    {cat.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <p className="gtm-service-goal">{cat.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="gtm-casestudy">
        <div className="gtm-casestudy-wrapper">
          <div className="gtm-casestudy-header">
            <span className="gtm-section-label">Results</span>
            <h2 className="gtm-casestudy-heading">
              Case Study: B2B SaaS Pipeline Transformation
            </h2>
          </div>
          <div className="gtm-casestudy-content">
            <div className="gtm-casestudy-results">
              <h3>Results Achieved</h3>
              <ul>
                {caseStudyResults.map((r, i) => (
                  <li key={i}>{r.label}</li>
                ))}
              </ul>
            </div>
            <div className="gtm-casestudy-actions">
              <h3>What We Engineered</h3>
              <ul>
                {caseStudyActions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="gtm-casestudy-tagline">
            Pipeline is not a channel problem. It&apos;s a systems problem.
          </p>
        </div>
      </section>

      {/* PROOF BLOCKS */}
      <section className="gtm-proof">
        <div className="gtm-proof-wrapper">
          <div className="gtm-proof-grid">
            {proofBlocks.map((block, index) => (
              <div key={index} className="gtm-proof-card">
                <h3 className="gtm-proof-title">{block.title}</h3>
                <ul className="gtm-proof-items">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="gtm-proof-tagline">
            Connected GTM systems outperform disconnected tactics — every time.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="gtm-tech">
        <div className="gtm-tech-wrapper">
          <div className="gtm-tech-header">
            <span className="gtm-section-label">
              Engineered Infrastructure
            </span>
            <h2 className="gtm-tech-heading">
              Custom Automation. Full Visibility.
            </h2>
            <p className="gtm-tech-subtext">
              We build custom automation layers and dashboards so every signal,
              every touchpoint, and every conversion is tracked and actionable.
            </p>
          </div>
          <div className="gtm-tech-grid">
            {techTools.map((tool, index) => (
              <div key={index} className="gtm-tech-card">
                <h3 className="gtm-tech-title">{tool.title}</h3>
                <ul className="gtm-tech-features">
                  {tool.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="gtm-tech-tagline">
            Visibility drives decisions. Automation drives speed. Together they
            drive pipeline.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="gtm-audience">
        <div className="gtm-audience-wrapper">
          <div className="gtm-audience-header">
            <span className="gtm-section-label">Who This Is For</span>
            <h2 className="gtm-audience-heading">
              Built for Revenue-Focused Teams
            </h2>
          </div>
          <ul className="gtm-audience-list">
            {audienceList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="gtm-audience-tagline">
            If you want a go-to-market system that compounds — not a collection
            of one-off campaigns — GTM engineering is for you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="gtm-cta">
        <div className="gtm-cta-wrapper">
          <div className="gtm-cta-container">
            <div className="gtm-cta-background">
              <img
                src="/assets/readyToBuildBg.webp"
                alt="Start your GTM audit background"
                className="gtm-cta-bg-image"
              />
            </div>
            <div className="gtm-cta-content">
              <h2 className="gtm-cta-heading">
                Start With a Free GTM Audit
              </h2>
              <p className="gtm-cta-description">We&apos;ll show you:</p>
              <ul className="gtm-cta-benefits">
                {auditBenefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="gtm-cta-note">
                No obligation. No retainers upfront.
              </p>
              <Link href="/get-in-touch" className="gtm-cta-button">
                Get My Free GTM Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={gtmFaqs} heading="GTM Engineering FAQs" />
      <Footer />
    </div>
  );
}
