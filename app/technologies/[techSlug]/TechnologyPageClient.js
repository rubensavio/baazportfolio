"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import {
  FiUsers,
  FiZap,
  FiShield,
  FiSearch,
  FiPenTool,
  FiCode,
  FiUploadCloud,
  FiGrid,
  FiLayers,
  FiWatch,
  FiGlobe,
  FiCreditCard,
  FiShoppingCart,
  FiHeart,
  FiTool,
} from "react-icons/fi";
import { technologyCapabilitiesData } from "../../../lib/technologyCapabilitiesData";
import "./page.scss";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });
const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"), {
  ssr: false,
});
const CTA = dynamic(() => import("../../../components/CTA/CTA"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../../../components/FAQ/FAQ"));
const Footer = dynamic(() => import("../../../components/Footer/Footer"), {
  ssr: false,
});

const CARD_ICON_MAP = {
  users: FiUsers,
  performance: FiZap,
  security: FiShield,
  discovery: FiSearch,
  design: FiPenTool,
  engineering: FiCode,
  deployment: FiUploadCloud,
  consulting: FiGrid,
  enterprise: FiLayers,
  wearable: FiWatch,
  web: FiGlobe,
  fintech: FiCreditCard,
  retail: FiShoppingCart,
  healthcare: FiHeart,
  construction: FiTool,
};

const STACK_BRIEFS = {
  HTML5: "Semantic structure for accessible, SEO-friendly web interfaces.",
  CSS3: "Responsive styling foundation for modern, consistent UI systems.",
  "JavaScript (ES6+)":
    "Core client-side logic for interactive web experiences.",
  TypeScript:
    "Typed JavaScript for safer code and easier long-term maintenance.",
  React: "Component-based frontend framework for scalable product UIs.",
  "Next.js":
    "Server rendering and routing framework for high-performance web apps.",
  "Node.js": "Backend runtime for APIs and real-time service layers.",
  "Express.js":
    "Lightweight API framework for service and integration workflows.",
  GraphQL: "Flexible API query layer that reduces over-fetching.",
  "Tailwind CSS":
    "Utility-first styling for fast and consistent UI development.",
  "React Native": "Single codebase approach for iOS and Android app delivery.",
  Flutter: "Cross-platform toolkit for performant, pixel-precise mobile apps.",
  Swift: "Native iOS development for platform-optimized experiences.",
  Kotlin: "Native Android development with robust language safety features.",
  Ionic: "Hybrid app framework for rapid multi-platform delivery.",
  Firebase: "Backend services for auth, storage, analytics, and messaging.",
  "App Store Deployment":
    "Build signing, release preparation, and Apple store submission support.",
  "Play Store Deployment":
    "Versioned Android releases with rollout and policy compliance support.",
  WordPress: "Flexible CMS for marketing sites and content-led platforms.",
  Webflow: "Visual website delivery with structured CMS capabilities.",
  Shopify: "Commerce platform for scalable online storefront operations.",
  Strapi: "Headless CMS for custom content modeling and API-driven delivery.",
  Contentful:
    "Enterprise-grade headless content platform for multi-channel teams.",
  Sanity: "Structured content platform with real-time collaboration workflows.",
  "Headless CMS Architecture":
    "Decoupled frontend and content systems for speed and flexibility.",
  "SEO and Performance Optimization":
    "Technical optimization for discoverability and faster page loads.",
  TensorFlow:
    "Deep learning framework for production model training pipelines.",
  PyTorch: "Flexible ML framework for experimentation and model development.",
  "Scikit-learn": "Reliable ML library for classical algorithms and baselines.",
  "OpenAI API":
    "LLM capabilities for assistants, automation, and language workflows.",
  "Anthropic API": "Enterprise-oriented LLM integrations with safety controls.",
  "Google Gemini API":
    "Multimodal AI integration for reasoning and generative workflows.",
  "Model Evaluation Pipelines":
    "Benchmarking quality, reliability, and drift before release.",
  "MLOps Fundamentals":
    "Deployment, monitoring, and iteration practices for model reliability.",
  LangChain: "Orchestration framework for LLM chains and tool integrations.",
  LlamaIndex: "Retrieval orchestration for knowledge-grounded AI experiences.",
  "RAG Pipelines":
    "Retrieval-augmented generation for context-aware AI answers.",
  "Vector Databases":
    "Semantic retrieval layer for embeddings and similarity search.",
  "Tool-Calling Agents":
    "AI agents that invoke external tools and APIs reliably.",
  "Prompt Orchestration":
    "Structured prompt workflows for predictable model behavior.",
  "Evaluation and Guardrails":
    "Quality checks and controls to reduce unsafe model outputs.",
  "Memory and Context Strategies":
    "Session-aware context handling for better multi-step interactions.",
  PostgreSQL:
    "Relational database for transactional, high-integrity workloads.",
  MySQL: "Widely adopted relational system for stable application data layers.",
  MongoDB: "Document database for flexible schema and rapid iteration.",
  "Firebase Firestore":
    "Serverless document storage for real-time app experiences.",
  Redis: "In-memory datastore for caching, queues, and low-latency access.",
  Elasticsearch: "Search and analytics engine for indexing large datasets.",
  "Schema Design and Indexing":
    "Data modeling and indexing to improve query performance.",
  "Migration and Backup Strategy":
    "Controlled migration planning with resilience and recovery safeguards.",
  AWS: "Cloud infrastructure for scalable compute, storage, and services.",
  Azure: "Enterprise cloud platform with strong integration capabilities.",
  "Google Cloud":
    "Cloud-native services for modern data and application workloads.",
  Docker:
    "Containerization standard for consistent development and deployment.",
  Kubernetes: "Container orchestration for scalable production workloads.",
  "GitHub Actions": "CI/CD pipelines for automated build, test, and release.",
  Terraform: "Infrastructure as code for repeatable cloud provisioning.",
  "Prometheus and Grafana":
    "Monitoring and observability stack for service health insights.",
};

export default function TechnologyPageClient({ techSlug }) {
  const data = technologyCapabilitiesData[techSlug];
  const labelLower = data.label.toLowerCase();
  const hasCustomStackGroups = data.stackGroups && data.stackGroups.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [techSlug]);

  return (
    <div className="technology-page">
      <Headroom>
        <Navbar />
      </Headroom>

      <section className="technology-hero">
        <div className="technology-hero-background">
          <img
            src="/assets/HomeHeroSectionBg.webp"
            alt="Technology capabilities background"
            className="technology-hero-bg-image"
            width={1200}
            height={600}
            fetchPriority="high"
          />
        </div>
        <div className="technology-content">
          <span className="technology-label">Technology capabilities</span>
          <h1 className="technology-heading">{data.heading}</h1>
          <p className="technology-direct-answer">{data.directAnswer}</p>
          <p className="technology-overview">{data.overview}</p>
        </div>
      </section>

      {data.webServices && data.webServices.length > 0 && (
        <section className="technology-web-services-section">
          <div className="technology-web-services-wrapper">
            <h2 className="technology-stack-heading">
              {data.webServicesHeading}
            </h2>
            {data.webServicesIntro && (
              <p className="technology-stack-intro">{data.webServicesIntro}</p>
            )}
            <div className="technology-web-services-grid">
              {data.webServices.map((service) => (
                <article key={service.title} className="technology-simple-card">
                  {service.icon && CARD_ICON_MAP[service.icon] && (
                    <span
                      className="technology-card-icon technology-card-icon--warm"
                      aria-hidden="true"
                    >
                      {React.createElement(CARD_ICON_MAP[service.icon])}
                    </span>
                  )}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="technology-stack-section">
        <div
          className={`technology-stack-band${hasCustomStackGroups ? " technology-stack-band--featured" : ""}`}
        >
          <div
            className={`technology-stack-wrapper${hasCustomStackGroups ? " technology-stack-wrapper--featured" : ""}`}
          >
            <h2 className="technology-stack-heading technology-stack-heading--primary">
              {data.stackHeading || "Stack we work with"}
            </h2>
            {data.stackIntro && (
              <p className="technology-stack-intro">{data.stackIntro}</p>
            )}
            <div
              className={`technology-stack-grid${hasCustomStackGroups ? " technology-stack-grid--featured" : ""}`}
            >
              {hasCustomStackGroups
                ? data.stackGroups.map((group) => (
                    <article
                      key={group.title}
                      className="technology-stack-card technology-stack-card--featured"
                    >
                      <h3>{group.title}</h3>
                      <p className="technology-stack-description">
                        {group.description}
                      </p>
                    </article>
                  ))
                : data.stack.map((item, index) => (
                    <article key={item} className="technology-stack-card">
                      <h3>
                        <span
                          className="technology-stack-index"
                          aria-hidden="true"
                        >
                          {index + 1}.
                        </span>{" "}
                        {item}
                      </h3>
                      <p className="technology-stack-description">
                        {STACK_BRIEFS[item] ||
                          "Production-ready implementation aligned to your delivery goals."}
                      </p>
                    </article>
                  ))}
            </div>
          </div>
        </div>
      </section>

      {data.highlights && data.highlights.length > 0 && (
        <section className="technology-extra-section">
          <div className="technology-extra-wrapper technology-highlights-wrapper--services-ui">
            <h2 className="technology-stack-heading">
              {data.highlightsHeading || `Why choose us for ${labelLower}?`}
            </h2>
            <div className="technology-highlights-grid technology-highlights-grid--services-ui">
              {data.highlights.map((item) => (
                <article
                  key={item.title}
                  className="technology-simple-card technology-simple-card--services-ui"
                >
                  {item.icon && CARD_ICON_MAP[item.icon] && (
                    <span
                      className="technology-card-icon technology-card-icon--warm technology-card-icon--services-ui"
                      aria-hidden="true"
                    >
                      {React.createElement(CARD_ICON_MAP[item.icon])}
                    </span>
                  )}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.workflow && data.workflow.length > 0 && (
        <section className="technology-stack-section">
          <div className="technology-stack-band technology-stack-band--featured">
            <div className="technology-stack-wrapper technology-stack-wrapper--featured">
              <h2 className="technology-stack-heading">
                {data.workflowHeading || `Our ${labelLower} workflow`}
              </h2>
              <div className="technology-workflow-grid technology-workflow-grid--featured">
                {data.workflow.map((step) => (
                  <article
                    key={step.title}
                    className="technology-simple-card technology-simple-card--workflow-featured"
                  >
                    {step.icon && CARD_ICON_MAP[step.icon] && (
                      <span className="technology-card-icon" aria-hidden="true">
                        {React.createElement(CARD_ICON_MAP[step.icon])}
                      </span>
                    )}
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.offerings && data.offerings.length > 0 && (
        <section className="technology-extra-section">
          <div className="technology-extra-wrapper technology-industries-wrapper">
            <h2 className="technology-stack-heading">
              {data.offeringsHeading ||
                `Our offerings in ${labelLower} services`}
            </h2>
            {data.offeringsIntro && (
              <p className="technology-stack-intro">{data.offeringsIntro}</p>
            )}
            <div className="technology-offerings-grid technology-offerings-grid--industries">
              {data.offerings.map((item) => (
                <article
                  key={item.title}
                  className="technology-simple-card technology-simple-card--industry"
                >
                  {item.icon && CARD_ICON_MAP[item.icon] && (
                    <span
                      className="technology-card-icon technology-card-icon--industry"
                      aria-hidden="true"
                    >
                      {React.createElement(CARD_ICON_MAP[item.icon])}
                    </span>
                  )}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.deployment && (
        <section className="technology-extra-section">
          <div className="technology-extra-wrapper deployment-wrapper">
            <h2 className="technology-stack-heading">
              {data.deployment.title}
            </h2>
            <p className="technology-deployment-intro">
              {data.deployment.description}
            </p>
            <ul className="technology-deployment-tools">
              {data.deployment.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {data.faqs && data.faqs.length > 0 && (
        <FAQ faqs={data.faqs} heading={data.faqsHeading} />
      )}

      <CTA />
      <Footer />
    </div>
  );
}
