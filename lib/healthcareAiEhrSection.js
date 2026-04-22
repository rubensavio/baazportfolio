/**
 * Shared AI-native EHR & revenue-cycle narrative for healthcare:
 * used on /erp/healthcare-companies and /healthcare-patient-app-case-study.
 */
export const HEALTHCARE_AI_EHR_SECTION = {
  title: "AI-native EHR & revenue cycle",
  lead:
    "Where ERP meets the clinical and billing front line: intelligent features that remove repetitive data entry, surface denial risk before submission, and explain patient responsibility in plain language—always with clinician or biller confirmation where regulations require it.",
  workflowSubtitle: "Daily workflow automation",
  workflowFeatures: [
    {
      title: "AI insurance card scan",
      description:
        "Patient or front desk photographs the card; OCR plus structured extraction fills payer name, member ID, group, plan type, copays, and effective dates. Staff confirm in seconds, then eligibility can run automatically—replacing five minutes of error-prone typing.",
    },
    {
      title: "AI-suggested coding from clinical notes",
      description:
        "As physicians document encounters, the system proposes likely ICD-10 and CPT codes with confidence scores. One tap to accept or adjust—reducing under-coding drift and query volume while keeping the provider in control.",
    },
    {
      title: "Smart denial prediction",
      description:
        "Before a claim goes out, models flag probable denial drivers from historical payer behaviour—missing modifiers, code pairs, prior auth gaps—with concrete fixes (for example: “Aetna: add modifier 25 when billing 99214 with this add-on”).",
    },
    {
      title: "AI patient cost estimator",
      description:
        "After eligibility (e.g. 271 responses), rules combine fee schedules and planned procedures to estimate out-of-pocket cost and generate a patient-friendly explanation—supporting transparency and No Surprises Act-style expectations.",
    },
    {
      title: "AI-prioritised A/R work queue",
      description:
        "Open balances are ranked by dollar at risk, filing deadlines, likelihood of collection, and typical payer response times—each line gets a recommended next action so billers attack the highest-impact work first.",
    },
    {
      title: "AI claim scrubbing before submission",
      description:
        "Pre-837 checks catch missing fields, invalid combinations, outdated codes, modifier conflicts, missing authorisations, and duplicate claims—mixing deterministic edits (CCI, age/gender) with model-assisted edge cases.",
    },
  ],
  strategicTitle: "Strategic intelligence layer",
  strategicLead:
    "Turns billing from reactive clean-up into proactive revenue optimisation—patterns no single practice sees alone.",
  strategicFeatures: [
    {
      title: "Denial pattern intelligence",
      description:
        "Continuous analysis of denial history surfaces systemic payer quirks and auto-generates “cheat sheets” per payer—alerting teams before the same mistake repeats and cutting re-bill cycles.",
    },
    {
      title: "Ambient pre-authorisation intelligence",
      description:
        "When a superbill includes certain CPTs, the system infers whether prior auth is likely required, lists documentation payers usually want, and drafts a first-pass auth request from the clinical note—learning which language speeds approvals.",
    },
    {
      title: "AI call prep for denial follow-up",
      description:
        "Before a biller phones the payer, they get a brief: talking points, appeal phrasing that has worked for this denial reason, department routing, expected hold times, and documents to have ready—capturing expertise that usually walks out with senior staff.",
    },
    {
      title: "Patient payment propensity scoring",
      description:
        "Scores likelihood to pay by history, balance, plan type, and context—recommending whether to collect at check-in, text a statement, offer a plan, or flag financial counselling—reducing bad debt and redundant dunning.",
    },
    {
      title: "Revenue forecasting & cash-flow prediction",
      description:
        "30/60/90-day outlooks with confidence bands from pipeline claims, historical adjudication speeds, denial rates, and seasonality—flagging revenue at risk before it becomes a write-off so leaders can staff and plan with CFO-grade visibility.",
    },
  ],
  architectureTitle: "From assistance → prediction → decision support",
  architectureIntro:
    "AI capabilities are staged by autonomy: start with assistive tasks (capture and coding help), add prediction (denials, payments, cash), then support higher-judgement workflows (auth drafting, appeal calls, queue ranking).",
  architectureLayers: [
    {
      name: "Assistive AI",
      items: [
        "Insurance card capture & field mapping",
        "ICD/CPT suggestions from notes",
        "Pre-submission claim scrubbing",
        "Patient responsibility estimates & explanations",
      ],
    },
    {
      name: "Predictive AI",
      items: [
        "Denial likelihood & pattern intelligence",
        "Payment propensity scoring",
        "Revenue & cash-flow forecasting",
      ],
    },
    {
      name: "Autonomous decision support",
      items: [
        "Prior auth drafting from clinical context",
        "Appeal call briefs and payer-specific guidance",
        "A/R queue prioritisation & recommended actions",
        "Cross-tenant alerts as models improve",
      ],
    },
  ],
  flywheelTitle: "The learning flywheel",
  flywheel:
    "Unlike static rule engines, the platform tightens with volume: more claims improve denial prediction and payer fingerprints; more appeals sharpen call-prep language; more payments refine collection recommendations; more forecasts narrow confidence bands. New sites benefit from accumulated network intelligence while retaining appropriate data boundaries and governance.",
};
