/** FAQ copy and JSON-LD for the education/training portal case study route. */

export const EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_HEADING =
  "Training operations portal — questions this case study answers";

export const EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_ITEMS = [
  {
    question:
      "Is this only operations and finance, or does it carry how they teach?",
    answer:
      "The portal is built so programme structure—modules, sessions, materials, homework, and coach visibility—is as much a first-class object as payments and rosters. Commerce (registration, GST, instalments) unlocks and tracks against that same teaching spine, so “what the owner paid for” and “what the cohort is doing this week” stay aligned.",
  },
  {
    question:
      "How does one portal support workshops in several cities without duplicate rosters?",
    answer:
      "City and batch dimensions sit on the same cohort model: each workshop or programme run gets dates, venue, capacity, and pricing—while participant identity and payment history stay unified. Bulk CSV and barcode flows attach to the specific event, so Delhi and another metro never maintain two “official” spreadsheets for the same programme week.",
  },
  {
    question:
      "Why a single React SPA instead of separate apps for staff and participants?",
    answer:
      "One codebase with role-based routing and menus reduces duplicate logic and keeps cohort data consistent. Staff and participants see different subtrees, but share the same design system, auth boundary, and API patterns—so fixes and features ship once.",
  },
  {
    question: "How do CSV imports and barcodes coexist with day-to-day UI?",
    answer:
      "Bulk paths are explicit screens with validation and feedback—used when scale beats manual entry—while daily work stays in searchable lists and detail views. Barcode and QR flows for workshops sit on the same participant records as the rest of the programme.",
  },
  {
    question: "What is the CRM split in the portal?",
    answer:
      "Institute-wide CRM admin, batch-scoped CRM, and participant-facing tickets and messages share patterns but different scopes—so coaches see only their cohorts while leadership retains oversight and helpdesk routing remains structured.",
  },
  {
    question: "How are payments and access control connected?",
    answer:
      "Payment status, overdue lists, and access approval queues are first-class surfaces so content unlocks and financial truth align—reducing informal overrides outside the system.",
  },
  {
    question: "Is this the same as a full ERP replacement?",
    answer:
      "The portal operationalises training delivery, CRM, and participant experience. General ledger and deep ERP may still integrate with finance stacks; this case study focuses on the operational and participant layer we shipped in the browser.",
  },
  {
    question: "What stack choices mattered for maintainability?",
    answer:
      "MUI and React Router gave a stable foundation for hundreds of screens; disciplined list/detail patterns and protected layouts kept new modules from becoming one-off pages. Rich text and file upload were used only where the workflow required them.",
  },
];
