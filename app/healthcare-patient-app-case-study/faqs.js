/** FAQ copy and JSON-LD for the healthcare patient-app case study route. */

export const HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_HEADING =
  "Healthcare patient app — questions this case study answers";

export const HEALTHCARE_PATIENT_APP_CASE_STUDY_FAQ_ITEMS = [
  {
    question:
      "Why React Native with Redux and sagas for a patient-facing healthcare app?",
    answer:
      "The team needed one codebase for iOS and Android with predictable async behaviour: sagas isolate login, appointment lists, and other API flows from UI components, so screens stay testable and errors recover gracefully. That pattern scales as modules—lab, pharmacy, documents—ship on staggered timelines.",
  },
  {
    question: "How do WebViews fit without compromising the native experience?",
    answer:
      "WebViews are used selectively where embedded journeys or partner content change faster than store release cycles justify rebuilding natively. Core booking, lists, and authenticated API traffic stay in native screens; WebView surfaces are bounded, cookie-aware where needed, and kept out of critical path where stability matters most.",
  },
  {
    question: "How are medical documents and images handled on device?",
    answer:
      "The app uses document picker, image capture, and blob utilities to move files into the provider’s pipeline with explicit user action—no background surprises. Runtime permissions align with current Android and iOS policies for camera, storage, and media access.",
  },
  {
    question: "What role do push notifications play?",
    answer:
      "They support booking confirmations, reminders, and engagement nudges where users opt in—reducing no-shows and keeping follow-up surfaces visible without spamming generic marketing.",
  },
  {
    question: "Is this the same as hospital ERP?",
    answer:
      "No. This case study is a patient engagement mobile client—scheduling, visits, prescriptions, and adjacencies—integrated with provider services. Hospital ERP typically covers procurement, finance, workforce, and inventory at enterprise scale; see our healthcare ERP pages for that positioning.",
  },
  {
    question: "How did releases stay safe under store and OS policy changes?",
    answer:
      "Upgrade work included validation against new Android behaviour (for example location and media rules), crash analytics on staging builds, and phased rollout so production matched rehearsal—not a one-day big bang.",
  },
];
