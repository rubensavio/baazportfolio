/**
 * Case-study FAQs — copy should match visible FAQ markup and FAQPage JSON-LD on each route.
 */

export const WORK1_CASE_STUDY_FAQ_ITEMS = [
  {
    question:
      "Why extend manufacturing ERP with an AI vision layer instead of replacing the whole stack?",
    answer:
      "Plants already run production orders, batches, and inventory through ERP and shop-floor systems. Replacing them is costly and risky. Layering computer vision on the line preserves those workflows while closing the gap where humans hit fatigue and inconsistency—so quality signals feed back into the same operational truth the business already trusts.",
  },
  {
    question: "How does AI inspection work alongside human quality inspectors?",
    answer:
      "Automation is positioned for high-volume, repetitive visual checks at line speed, while inspectors focus on edge cases, audits, and process improvements. The goal is not zero humans—it is consistent coverage at scale, with clear escalation when the model is uncertain or when defects fall outside trained patterns.",
  },
  {
    question:
      "What kinds of defects are a good fit for computer vision on an electronics line?",
    answer:
      "Repeatable visual signatures—scratches, misalignment, contamination, soldering issues, and packaging problems—are strong candidates when lighting and camera placement can be standardized. Highly contextual judgments that require tactile feel or deep domain reasoning may still need human review or additional instrumentation.",
  },
  {
    question:
      "How do you integrate AI quality signals with existing QA and rework processes?",
    answer:
      "Outputs are wired into the same batch and order concepts the factory already uses: hold/release, rework routing, and traceability to suppliers or stations. That keeps compliance and root-cause workflows intact while reducing the time from detection to corrective action.",
  },
  {
    question:
      "What should leadership expect when rolling out AI inspection in production?",
    answer:
      "Expect a phased rollout—baseline metrics, pilot lines, model calibration with real defects, and operator training—before full throughput. Success is measured by fewer escapes to customers, lower scrap and warranty cost, and stable cycle time, not by removing QA headcount on day one.",
  },
];

export const WORK1_CASE_STUDY_FAQ_HEADING =
  "Viz Pro & manufacturing AI — questions this case study answers";

export const WORK2_CASE_STUDY_FAQ_ITEMS = [
  {
    question:
      "Why build hiring automation on top of the existing HRMS instead of switching ATS products?",
    answer:
      "Requisitions, approvals, and candidate records already live in HRMS; recruiters live in those workflows daily. Extending that system with intelligent screening and routing avoids a disruptive migration, keeps compliance and audit trails consistent, and delivers faster time-to-value than replatforming the entire hiring stack.",
  },
  {
    question:
      "Which recruiting steps are automated first—resume screening, routing, or assessments?",
    answer:
      "Typically the highest-friction, highest-volume step comes first: normalizing inbound resumes, scoring fit against the role, and routing promising profiles to the right hiring manager or panel. Assessments and structured interviews are layered once the pipeline is clean enough that humans spend time on conversations—not triage.",
  },
  {
    question: "How do recruiters stay in control if screening is automated?",
    answer:
      "Automation proposes and prioritizes; recruiters decide. Shortlists, rejection reasons, and override paths stay visible so teams can correct edge cases, watch for bias drift, and align on what “qualified” means for each role. The system reduces noise; it does not remove accountability.",
  },
  {
    question:
      "How does this address missed qualified candidates and screening fatigue?",
    answer:
      "Consistent rules and ranking reduce the chance that a strong profile is lost in an inbox spike. Recruiters spend fewer hours on repetitive first-pass review, which lowers fatigue-driven mistakes—especially when application volume is high for senior technical roles.",
  },
  {
    question:
      "What outcomes should engineering and talent leaders expect from HRMS-native hiring automation?",
    answer:
      "Teams typically target faster time-to-hire, lower cost per hire, and higher signal-to-noise in the funnel—without forcing candidates through redundant portals. Exact gains depend on role mix, employer brand, and process discipline, but the operational win is a pipeline that scales when headcount plans change.",
  },
];

export const WORK2_CASE_STUDY_FAQ_HEADING =
  "HRMS hiring automation — questions this case study answers";
