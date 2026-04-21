/** FAQ copy and JSON-LD for the real-estate ERP case study route. */

export const REAL_ESTATE_ERP_CASE_STUDY_FAQ_HEADING =
  "Real-estate ERP — questions this case study answers";

export const REAL_ESTATE_ERP_CASE_STUDY_FAQ_ITEMS = [
  {
    question:
      "How do the operations ERP and the consumer application fit together?",
    answer:
      "The back-office platform is the system of record for inventory, pricing rules, bookings, collections, and partner performance. The consumer application is the customer-facing surface for discovery, applications, document upload, payment milestones, and service requests—reading and writing through the same APIs so sales, finance, and field teams never reconcile two spreadsheets again.",
  },
  {
    question:
      "Why build industry-specific real-estate ERP instead of adapting generic ERP?",
    answer:
      "Developers run phased inventory, channel partner hierarchies, construction-linked milestones, and complex cancellation or transfer rules. Generic ERP can store GL entries but rarely models unit-level inventory and booking velocity the way real-estate teams operate. A domain-shaped data model reduces customization debt and keeps reporting aligned with how leadership actually measures the business.",
  },
  {
    question: "What does “inventory-to-cash” mean in this context?",
    answer:
      "It means a unit’s status, pricing history, hold rules, booking, agreement, and collection schedule stay connected from first expression of interest through handover. Finance sees receivables ageing tied to real inventory state; sales sees what is actually sellable—not a shadow forecast in email.",
  },
  {
    question:
      "How do integrations typically work with existing finance or CRM tools?",
    answer:
      "Core workflows stay in the operations platform for operational truth, while summaries and journals sync to accounting stacks and optional CRM or marketing tools via APIs and scheduled exports. The goal is one operational spine with controlled handoffs—not duplicate manual entry at every boundary.",
  },
  {
    question: "Who benefits most from this architecture?",
    answer:
      "Mid-to-large developers and structured channel programs that sell multi-phase projects and need consistent governance across internal teams, brokers, and customers. The payoff is fewer revenue leaks, faster reconciliation, and a branded digital experience buyers expect in competitive markets.",
  },
  {
    question:
      "Why split a heavy web console and a React Native app instead of one responsive web app?",
    answer:
      "Desk workflows—pricing grids, Gantt views, long reports—fit a large canvas; field staff and buyers need offline-tolerant sessions, camera capture, and push-friendly navigation on phones. Native shells also align with app-store distribution for customers while the operations team stays on a fast-iterating browser deployment.",
  },
  {
    question: "How do real-time features coexist with REST APIs?",
    answer:
      "REST remains the source of truth for transactional writes and reporting exports. WebSocket channels broadcast changes—new tasks, feed items, or status updates—so active screens refresh without polling every list. That pattern keeps servers predictable while the UI feels immediate for sales and site users.",
  },
];
