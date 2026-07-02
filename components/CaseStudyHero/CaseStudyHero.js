import "./CaseStudyHero.scss";

export default function CaseStudyHero() {
  return (
    <section className="case-study-hero">
      <div className="case-study-hero-background">
        <img
          src="/assets/workHeroSectionBg.webp"
          alt="Manufacturing AI quality automation case study background - Baaz"
          className="case-study-hero-bg-image"
          width={1200}
          height={600}
          fetchPriority="high"
        />
      </div>
      <div className="case-study-hero-wrapper">
        <span className="case-study-label">Enterprise case study</span>
        <h1 className="case-study-heading">
          AI Quality Automation on Manufacturing ERP
        </h1>
        <p className="case-study-context">
          Baaz layered an AI computer-vision quality system onto an existing
          manufacturing ERP-defect detection, QA workflows, and a phased
          production rollout-without a rip-and-replace, delivering measurable
          factory-floor quality gains.
        </p>
      </div>
    </section>
  );
}
