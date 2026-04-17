/** FAQ copy and JSON-LD for the education/training portal case study route. */

export const EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_HEADING =
  "Training operations portal — questions this case study answers";

export const EDUCATION_TRAINING_PORTAL_CASE_STUDY_FAQ_ITEMS = [
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
