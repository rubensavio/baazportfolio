const commonFaqs = (industryLabel) => [
  {
    question: `Why do ${industryLabel} need industry-specific ERP instead of generic ERP?`,
    answer:
      "Generic ERP often misses domain workflows, compliance, and reporting expectations. Industry-specific ERP implementation maps your real operations first, then configures modules, integrations, and controls so teams adopt the system faster and avoid expensive custom rework later.",
  },
  {
    question: `How long does ERP implementation for ${industryLabel} usually take?`,
    answer:
      "A focused phase can go live in 10-16 weeks, while full multi-module ERP programs usually run 6-12 months. Timeline depends on data quality, integration complexity, compliance approvals, and how many departments are included in phase one.",
  },
  {
    question: `Can ERP integrate with our existing tools and legacy systems?`,
    answer:
      "Yes. Most projects require API, file, and event-based integrations across finance, CRM, HR, operations, and analytics systems. We design integration architecture early so data remains consistent and teams avoid duplicate entries.",
  },
  {
    question: "What is the biggest reason ERP projects fail?",
    answer:
      "Low adoption caused by poor process mapping and weak change management. Successful ERP programs define target workflows, role-based training, clear ownership, and measurable outcomes before wider rollout.",
  },
  {
    question: "How do you reduce ERP implementation risk?",
    answer:
      "We use phased rollouts, sandbox validation, migration rehearsals, and KPI checkpoints. This approach limits operational disruption, validates data integrity, and gives leadership clear go/no-go decisions at each milestone.",
  },
];

function buildErpPage({
  slug,
  title,
  heroSubtitle,
  challenges,
  solutionFeatures,
  keyModules,
  benefits,
  useCases,
  relatedServices,
  caseStudyLink,
}) {
  return {
    slug,
    title,
    heroSubtitle,
    metaTitle: `${title} | Baaz`,
    metaDescription:
      `${title} with finance, operations, compliance, and integrations designed for real business workflows. ` +
      "Plan, build, and roll out with Baaz.",
    challenges,
    solutionFeatures,
    keyModules,
    benefits,
    useCases,
    relatedServices,
    caseStudyLink: caseStudyLink ?? null,
    faqs: commonFaqs(title.replace("ERP for ", "").toLowerCase()),
  };
}

export const erpData = {
  "insurance-companies": buildErpPage({
    slug: "insurance-companies",
    title: "ERP for Insurance Companies",
    heroSubtitle:
      "Unified operations platform for policy lifecycle, claims workflows, compliance reporting, and finance controls — purpose-built for insurers.",
    challenges: [
      {
        title: "Fragmented Policy Data",
        description:
          "Policy, claims, and premium data scattered across siloed systems makes reconciliation manual and error-prone.",
      },
      {
        title: "Slow Claims Processing",
        description:
          "Multi-step manual handoffs between underwriting, claims, and finance create bottlenecks and delay settlements.",
      },
      {
        title: "Regulatory Compliance Gaps",
        description:
          "Evolving IRDAI/NAIC regulations require audit trails and reporting that spreadsheet workflows cannot sustain.",
      },
      {
        title: "Broker & Channel Complexity",
        description:
          "Managing commissions, channel partner performance, and multi-tier distribution without a unified system creates revenue leakage.",
      },
    ],
    solutionFeatures: [
      {
        title: "Centralised Premium Accounting",
        description:
          "Automate premium collection, commission calculation, and revenue recognition across all distribution channels.",
      },
      {
        title: "Claims Workflow Automation",
        description:
          "End-to-end claims tracking from FNOL to settlement with role-based approvals and SLA monitoring.",
      },
      {
        title: "Compliance & Audit Engine",
        description:
          "Built-in regulatory reporting templates, audit trail generation, and governance dashboards for every transaction.",
      },
      {
        title: "Branch Operations Management",
        description:
          "Unified view of branch-level costs, productivity, and service metrics with standardised approval workflows.",
      },
    ],
    keyModules: [
      { name: "Finance & Accounting", description: "GL, AP/AR, premium accounting, commission management" },
      { name: "Claims Management", description: "FNOL intake, assessment, approval workflows, settlement tracking" },
      { name: "Procurement", description: "Vendor onboarding, PO management, contract lifecycle" },
      { name: "HR & Payroll", description: "Employee records, payroll processing, leave management" },
      { name: "Compliance & Reporting", description: "Regulatory filings, audit trails, governance dashboards" },
      { name: "Document Management", description: "Policy documents, claim files, digital archival" },
    ],
    benefits: [
      {
        title: "40% Faster Claims Cycle",
        description: "Automated workflows reduce manual handoffs and accelerate claim-to-settlement time.",
      },
      {
        title: "Audit-Ready Compliance",
        description: "Every transaction logged with full audit trails for regulatory reviews.",
      },
      {
        title: "15-20% Reduction in Operational Costs",
        description: "Eliminate duplicate data entry, manual reconciliations, and paper-based processes.",
      },
      {
        title: "Real-Time Portfolio Visibility",
        description: "Consolidated dashboards for premium performance, loss ratios, and channel profitability.",
      },
    ],
    useCases: [
      {
        title: "End-to-End Claims Processing",
        description:
          "From first notice of loss through investigation, approval, and settlement — fully automated with exception-based human review.",
      },
      {
        title: "Multi-Channel Commission Reconciliation",
        description:
          "Automatic commission calculation across agents, brokers, and digital channels with variance detection.",
      },
      {
        title: "Regulatory Reporting Automation",
        description:
          "Pre-configured report templates for quarterly and annual regulatory filings with data validation checks.",
      },
    ],
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "ai-solution", label: "AI Development" },
    ],
  }),

  "manufacturing-companies": buildErpPage({
    slug: "manufacturing-companies",
    title: "ERP for Manufacturing Companies",
    heroSubtitle:
      "Integrated production planning, procurement, inventory, quality assurance, and cost control — built for plant-level precision.",
    challenges: [
      {
        title: "Production Schedule Disruptions",
        description:
          "Unplanned downtime, material shortages, and poor demand forecasting lead to missed delivery commitments.",
      },
      {
        title: "Inventory Imbalances",
        description:
          "Excess raw material stockpiling or critical shortages due to disconnected procurement and production systems.",
      },
      {
        title: "Quality Control Gaps",
        description:
          "Inconsistent quality checks across shifts and plants result in rework, scrap, and customer complaints.",
      },
      {
        title: "Cost Visibility Issues",
        description:
          "Difficulty tracking actual vs. standard costs at product, batch, and plant level prevents accurate margin analysis.",
      },
    ],
    solutionFeatures: [
      {
        title: "Material Requirement Planning (MRP)",
        description:
          "Demand-driven material planning with BOM explosion, lead-time buffers, and automated purchase requisitions.",
      },
      {
        title: "Shop-Floor Visibility",
        description:
          "Real-time tracking of work orders, machine utilisation, and production output with IoT-ready data capture.",
      },
      {
        title: "Quality Management System",
        description:
          "Inspection plans, non-conformance tracking, CAPA workflows, and supplier quality scorecards.",
      },
      {
        title: "Standard Costing & Variance Analysis",
        description:
          "Automated cost roll-ups, variance reports by cost centre, and margin analysis at SKU level.",
      },
    ],
    keyModules: [
      { name: "Production Planning", description: "MRP, scheduling, capacity planning, work order management" },
      { name: "Inventory & Warehouse", description: "Stock tracking, bin management, reorder automation" },
      { name: "Procurement", description: "Supplier management, PO automation, goods receipt" },
      { name: "Quality Assurance", description: "Inspection, CAPA, non-conformance, certifications" },
      { name: "Finance & Costing", description: "Standard costing, variance analysis, GL integration" },
      { name: "Maintenance (CMMS)", description: "Preventive maintenance scheduling, downtime tracking" },
    ],
    benefits: [
      {
        title: "25% Reduction in Inventory Carrying Cost",
        description: "Demand-driven procurement and accurate MRP eliminate over-stocking.",
      },
      {
        title: "30% Fewer Production Delays",
        description: "Integrated planning and shop-floor visibility reduce schedule disruptions.",
      },
      {
        title: "Accurate Product Costing",
        description: "Real-time cost tracking enables better pricing decisions and margin protection.",
      },
      {
        title: "Improved First-Pass Quality",
        description: "Systematic quality checks reduce scrap rates and customer returns.",
      },
    ],
    useCases: [
      {
        title: "Order-to-Delivery Workflow",
        description:
          "Sales order triggers MRP run → material procurement → production scheduling → quality check → dispatch with full traceability.",
      },
      {
        title: "Preventive Maintenance Scheduling",
        description:
          "Automated maintenance triggers based on machine hours or calendar cycles to reduce unplanned downtime.",
      },
      {
        title: "Supplier Performance Management",
        description:
          "Track delivery timelines, quality scores, and pricing compliance across the vendor base for informed sourcing decisions.",
      },
    ],
    relatedServices: [
      { slug: "product-strategy", label: "Product Strategy" },
      { slug: "web-development", label: "Custom Software" },
    ],
  }),

  "banking-companies": buildErpPage({
    slug: "banking-companies",
    title: "ERP for Banking Companies",
    heroSubtitle:
      "Strengthen financial controls, procurement governance, branch operations, and audit-ready reporting for regulated banking environments.",
    challenges: [
      {
        title: "Governance & Control Gaps",
        description:
          "Multi-branch operations with inconsistent approval workflows create compliance risks and audit findings.",
      },
      {
        title: "Manual Reconciliation Burden",
        description:
          "Finance teams spend excessive time on inter-branch reconciliation, vendor payments, and GL closing.",
      },
      {
        title: "Vendor & Procurement Opacity",
        description:
          "Decentralised procurement across branches leads to maverick spending and missed volume discounts.",
      },
      {
        title: "Regulatory Reporting Pressure",
        description:
          "Frequent RBI/central bank reporting requirements demand accurate, timely, and auditable data extraction.",
      },
    ],
    solutionFeatures: [
      {
        title: "Role-Based Approval Workflows",
        description:
          "Multi-level approval chains with delegation rules, SLA tracking, and escalation for every transaction type.",
      },
      {
        title: "Centralised Procurement",
        description:
          "Unified vendor management, contract compliance monitoring, and spend analytics across all branches.",
      },
      {
        title: "Automated GL & Reconciliation",
        description:
          "Auto-posting rules, inter-branch settlement, and period-end closing checklists to cut finance cycle times.",
      },
      {
        title: "Audit Trail & Compliance Dashboard",
        description:
          "Complete transaction lineage, exception reports, and real-time compliance status for risk and audit teams.",
      },
    ],
    keyModules: [
      { name: "General Ledger", description: "Multi-entity GL, auto-posting, period close management" },
      { name: "Accounts Payable/Receivable", description: "Invoice processing, payment runs, ageing reports" },
      { name: "Procurement & Contracts", description: "Vendor lifecycle, PO management, contract compliance" },
      { name: "Fixed Assets", description: "Asset tracking, depreciation, disposal, audit reporting" },
      { name: "HR & Administration", description: "Employee management, payroll, leave, branch staffing" },
      { name: "Regulatory Reporting", description: "Pre-built report templates, data extraction, submission tracking" },
    ],
    benefits: [
      {
        title: "50% Faster Month-End Close",
        description: "Automated reconciliation and posting rules compress the financial closing cycle.",
      },
      {
        title: "Zero Audit Surprises",
        description: "Complete audit trails and real-time dashboards keep compliance teams proactive.",
      },
      {
        title: "Centralised Spend Control",
        description: "Consolidated procurement reduces maverick spend and improves vendor negotiation leverage.",
      },
      {
        title: "Operational Consistency",
        description: "Standardised workflows across branches ensure uniform service and governance levels.",
      },
    ],
    useCases: [
      {
        title: "Procure-to-Pay Automation",
        description:
          "Requisition → approval → PO → goods receipt → invoice match → payment — fully controlled with exception handling at each stage.",
      },
      {
        title: "Inter-Branch Reconciliation",
        description:
          "Automated matching of inter-branch transactions with variance flagging and settlement workflows.",
      },
      {
        title: "Regulatory Data Extraction",
        description:
          "Scheduled extraction of transactional data into regulatory report formats with validation and submission tracking.",
      },
    ],
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "ui-ux-design", label: "UI/UX Design" },
    ],
  }),

  "healthcare-companies": buildErpPage({
    slug: "healthcare-companies",
    title: "ERP for Healthcare Companies",
    heroSubtitle:
      "Centralised finance, procurement, supply chain, HR, and compliance workflows for healthcare organisations and provider networks.",
    challenges: [
      {
        title: "Supply Chain Fragility",
        description:
          "Critical medical supply stockouts and expiry-driven wastage due to disconnected inventory systems.",
      },
      {
        title: "Budget Overruns",
        description:
          "Lack of real-time spend visibility across departments and facilities makes cost control reactive rather than proactive.",
      },
      {
        title: "Compliance Complexity",
        description:
          "HIPAA, NABH, and JCI requirements demand documented processes, access controls, and auditable records.",
      },
      {
        title: "Workforce Coordination",
        description:
          "Shift scheduling, credentialing, and staff allocation across multiple facilities without centralised HR workflows.",
      },
    ],
    solutionFeatures: [
      {
        title: "Medical Supply Chain Management",
        description:
          "Expiry-aware inventory, automated reorder points, and lot traceability from vendor to point of care.",
      },
      {
        title: "Department-Level Budgeting",
        description:
          "Budget allocation, commitment tracking, and variance alerts by department, facility, and cost centre.",
      },
      {
        title: "Compliance Workflow Engine",
        description:
          "Pre-configured compliance checklists, access control policies, and document lifecycle management.",
      },
      {
        title: "Workforce & Credential Management",
        description:
          "Centralised staff records, credential expiry alerts, shift scheduling, and multi-facility assignments.",
      },
    ],
    keyModules: [
      { name: "Procurement & Supply Chain", description: "Vendor management, PO automation, medical supply tracking" },
      { name: "Finance & Budgeting", description: "GL, AP/AR, department budgets, revenue cycle support" },
      { name: "Inventory Management", description: "Lot tracking, expiry management, auto-replenishment" },
      { name: "HR & Workforce", description: "Credentialing, shift rosters, payroll, training records" },
      { name: "Compliance & Quality", description: "Accreditation tracking, audit management, incident reporting" },
      { name: "Asset Management", description: "Medical equipment tracking, maintenance schedules, depreciation" },
    ],
    benefits: [
      {
        title: "35% Reduction in Supply Wastage",
        description: "Expiry-aware tracking and demand-based ordering eliminate overstocking and obsolescence.",
      },
      {
        title: "Accreditation-Ready Operations",
        description: "Documented processes and audit trails built into daily workflows for NABH/JCI readiness.",
      },
      {
        title: "Real-Time Budget Visibility",
        description: "Department-level dashboards show committed, actual, and forecasted spend in real time.",
      },
      {
        title: "Improved Staff Utilisation",
        description: "Centralised scheduling and credential tracking ensure right-staffing across facilities.",
      },
    ],
    useCases: [
      {
        title: "Medical Procurement Cycle",
        description:
          "Department request → approval → PO with vendor compliance check → GRN with lot capture → invoice processing with 3-way match.",
      },
      {
        title: "Credential & License Management",
        description:
          "Automated tracking of clinician licenses with expiry alerts, renewal workflows, and compliance dashboards.",
      },
      {
        title: "Multi-Facility Inventory Balancing",
        description:
          "Cross-facility stock visibility with automated inter-facility transfer requests when thresholds are breached.",
      },
    ],
    relatedServices: [
      { slug: "product-strategy", label: "Product Strategy" },
      { slug: "mobile-app", label: "Mobile App Development" },
    ],
  }),

  hospitals: buildErpPage({
    slug: "hospitals",
    title: "ERP for Hospitals",
    heroSubtitle:
      "Integrated procurement, pharmacy inventory, finance, workforce management, and multi-unit operational visibility for hospital groups.",
    challenges: [
      {
        title: "Pharmacy & Consumable Stockouts",
        description:
          "Life-critical supplies running out due to manual reordering processes and lack of consumption-based forecasting.",
      },
      {
        title: "Departmental Silos",
        description:
          "Finance, procurement, HR, and operations running on separate systems creates data gaps and delays.",
      },
      {
        title: "Cost Centre Blind Spots",
        description:
          "Inability to track true operating costs by department, ward, or service line hampers financial planning.",
      },
      {
        title: "Scheduling & Staffing Chaos",
        description:
          "Manual shift planning across departments and facilities leads to overstaffing, burnout, and compliance risks.",
      },
    ],
    solutionFeatures: [
      {
        title: "Pharmacy & Consumable Automation",
        description:
          "Consumption-based reordering, batch/lot tracking, near-expiry alerts, and vendor performance scoring.",
      },
      {
        title: "Unified Financial Management",
        description:
          "Multi-entity accounting, department cost centres, automated revenue recognition, and period-end closing.",
      },
      {
        title: "Shift & Workforce Management",
        description:
          "Department-wise rostering, overtime tracking, credential verification, and leave management.",
      },
      {
        title: "Maintenance & Facility Operations",
        description:
          "Preventive maintenance schedules, work order management, and facility asset lifecycle tracking.",
      },
    ],
    keyModules: [
      { name: "Pharmacy & Inventory", description: "Drug inventory, batch tracking, auto-replenishment, expiry management" },
      { name: "Finance & Accounting", description: "GL, cost centres, AP/AR, department-level P&L" },
      { name: "Procurement", description: "Purchase requests, vendor management, contract compliance" },
      { name: "HR & Shift Management", description: "Rostering, payroll, attendance, credential tracking" },
      { name: "Facility Maintenance", description: "Work orders, preventive maintenance, asset tracking" },
      { name: "Reporting & Analytics", description: "Operational dashboards, KPI tracking, custom reports" },
    ],
    benefits: [
      {
        title: "Near-Zero Stockout Rate",
        description: "Automated reordering and consumption tracking ensure critical supplies are always available.",
      },
      {
        title: "20% Reduction in Admin Costs",
        description: "Unified systems eliminate duplicate data entry and manual report compilation.",
      },
      {
        title: "Accurate Department-Level Costing",
        description: "Cost centre tracking enables revenue-to-expense analysis by ward and service line.",
      },
      {
        title: "Improved Staff Satisfaction",
        description: "Fair, transparent shift scheduling with automated overtime and leave management.",
      },
    ],
    useCases: [
      {
        title: "Ward-Level Consumable Replenishment",
        description:
          "Consumption triggers auto-requisition → pharmacy review → supply dispatch → ward acknowledgement with full traceability.",
      },
      {
        title: "Department Financial Performance Review",
        description:
          "Monthly automated reports showing revenue vs. cost by department with variance analysis and trend charts.",
      },
      {
        title: "Equipment Maintenance Lifecycle",
        description:
          "Scheduled preventive maintenance with work order automation, parts procurement, and downtime logging.",
      },
    ],
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "ai-solution", label: "AI Development" },
    ],
  }),

  "real-estate-companies": buildErpPage({
    slug: "real-estate-companies",
    title: "ERP for Real Estate Companies",
    heroSubtitle:
      "Unified project finance, leasing operations, procurement, vendor management, and portfolio reporting for property developers and managers.",
    challenges: [
      {
        title: "Project Cost Overruns",
        description:
          "Fragmented tracking of construction costs, change orders, and contractor billing leads to budget surprises.",
      },
      {
        title: "Lease & Revenue Complexity",
        description:
          "Managing lease terms, escalations, CAM charges, and tenant billing across a diverse portfolio manually.",
      },
      {
        title: "Vendor & Contractor Sprawl",
        description:
          "Hundreds of contractors and material suppliers across projects without centralised performance tracking.",
      },
      {
        title: "Portfolio Visibility Gaps",
        description:
          "Leadership lacks consolidated views of occupancy, receivables, operating costs, and project status.",
      },
    ],
    solutionFeatures: [
      {
        title: "Project Accounting & Budget Control",
        description:
          "Budget-vs-actual tracking at project, phase, and line-item level with change order management.",
      },
      {
        title: "Lease Lifecycle Management",
        description:
          "Tenant onboarding, lease terms, escalation schedules, billing, and renewal tracking in one system.",
      },
      {
        title: "Contractor & Vendor Management",
        description:
          "Centralised vendor database, performance scorecards, contract compliance, and payment milestone tracking.",
      },
      {
        title: "Portfolio Performance Dashboard",
        description:
          "Consolidated views of occupancy rates, revenue collections, operating expenses, and project timelines.",
      },
    ],
    keyModules: [
      { name: "Project Finance", description: "Budgeting, cost tracking, WIP, change order management" },
      { name: "Lease Management", description: "Tenant records, lease terms, escalations, billing" },
      { name: "Procurement", description: "Material POs, contractor onboarding, invoice matching" },
      { name: "Accounts Receivable", description: "Rent invoicing, collection tracking, ageing analysis" },
      { name: "Fixed Assets", description: "Property records, depreciation, valuation tracking" },
      { name: "Reporting & BI", description: "Portfolio dashboards, occupancy analytics, cash flow projections" },
    ],
    benefits: [
      {
        title: "Project Budget Accuracy Within 5%",
        description: "Real-time cost tracking and change order controls keep projects on budget.",
      },
      {
        title: "30% Faster Rent Collection",
        description: "Automated invoicing, reminders, and escalation workflows accelerate receivables.",
      },
      {
        title: "Unified Portfolio View",
        description: "Leadership sees occupancy, revenue, and costs across all properties in one dashboard.",
      },
      {
        title: "Vendor Cost Optimisation",
        description: "Performance scorecards and consolidated procurement drive better vendor terms.",
      },
    ],
    useCases: [
      {
        title: "Construction-to-Handover Workflow",
        description:
          "Project budget → contractor POs → milestone billing → quality checkpoint → completion certificate → tenant onboarding.",
      },
      {
        title: "Lease Renewal Automation",
        description:
          "Automatic renewal reminders → updated terms → tenant approval → new billing schedule — reducing vacancy gaps.",
      },
      {
        title: "Monthly Owner Reporting",
        description:
          "Automated P&L, cash flow, and occupancy reports generated and distributed to property owners/investors.",
      },
    ],
    relatedServices: [
      { slug: "product-strategy", label: "Product Strategy" },
      { slug: "web-development", label: "Custom Software" },
    ],
    caseStudyLink: {
      href: "/real-estate-erp-case-study",
      label: "Real-estate ERP operations and consumer app",
      description:
        "A shipped programme: browser-based operations console, role-based mobile suite, and shared APIs for inventory, bookings, and collections.",
    },
  }),

  "construction-companies": buildErpPage({
    slug: "construction-companies",
    title: "ERP for Construction Companies",
    heroSubtitle:
      "Integrated project controls, procurement, subcontractor management, site costing, and financial reporting for builders and contractors.",
    challenges: [
      {
        title: "Cost Overrun Visibility",
        description:
          "Delayed cost data from sites means project managers learn about overruns weeks after they occur.",
      },
      {
        title: "Subcontractor Coordination",
        description:
          "Tracking work progress, billing milestones, and contract compliance across dozens of subcontractors per project.",
      },
      {
        title: "Material Wastage & Theft",
        description:
          "Loose material tracking at job sites leads to wastage, pilferage, and unaccounted procurement.",
      },
      {
        title: "Cash Flow Unpredictability",
        description:
          "Misaligned billing cycles between client invoicing and vendor/subcontractor payments strain working capital.",
      },
    ],
    solutionFeatures: [
      {
        title: "Real-Time Project Costing",
        description:
          "Site-level data capture for labour, material, and equipment costs with daily cost-to-budget comparison.",
      },
      {
        title: "Subcontractor Lifecycle Management",
        description:
          "Contract creation, milestone tracking, measurement verification, billing, and retention management.",
      },
      {
        title: "Material & Equipment Tracking",
        description:
          "Gate-pass controlled material receipt, consumption tracking, inter-site transfers, and idle equipment alerts.",
      },
      {
        title: "Cash Flow Forecasting",
        description:
          "Project-level receivables and payables forecasting with milestone-based billing schedules.",
      },
    ],
    keyModules: [
      { name: "Project Management", description: "WBS, scheduling, milestone tracking, resource allocation" },
      { name: "Procurement & Materials", description: "Material indent, PO, GRN, stock register, site transfers" },
      { name: "Subcontractor Management", description: "Contracts, work measurement, billing, retention" },
      { name: "Equipment Management", description: "Fleet tracking, hire charges, maintenance, utilisation reports" },
      { name: "Finance & Billing", description: "Project GL, client invoicing, payment tracking, WIP analysis" },
      { name: "Site Reporting", description: "Daily progress, labour logs, material consumption, incident reports" },
    ],
    benefits: [
      {
        title: "Real-Time Cost-to-Budget Visibility",
        description: "Daily cost capture eliminates surprise overruns and enables proactive corrective actions.",
      },
      {
        title: "20% Reduction in Material Wastage",
        description: "Gate-pass controls and consumption tracking reduce pilferage and over-ordering.",
      },
      {
        title: "Predictable Cash Flow",
        description: "Milestone billing and payment forecasting keep working capital healthy.",
      },
      {
        title: "Subcontractor Accountability",
        description: "Measurement-based billing and contract compliance tracking reduce disputes.",
      },
    ],
    useCases: [
      {
        title: "Site Material Management",
        description:
          "Material indent → approval → PO → gate-pass receipt → consumption booking → variance analysis at project level.",
      },
      {
        title: "Subcontractor Billing Cycle",
        description:
          "Work measurement → rate application → billing generation → retention calculation → approval → payment release.",
      },
      {
        title: "Project Financial Review",
        description:
          "Weekly cost reports showing budget-vs-actual by WBS element with earned value analysis and completion forecasts.",
      },
    ],
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "mobile-app", label: "Mobile App Development" },
    ],
    caseStudyLink: {
      href: "/real-estate-erp-case-study",
      label: "Developer ERP, site workflows, and field app",
      description:
        "See how inventory, procurement-style flows, tasks, and finance alignment were delivered as one system—with web and mobile surfaces.",
    },
  }),

  "automobile-companies": buildErpPage({
    slug: "automobile-companies",
    title: "ERP for Automobile Companies",
    heroSubtitle:
      "Connected production planning, supplier operations, quality tracking, inventory control, and finance performance for OEMs and component manufacturers.",
    challenges: [
      {
        title: "Supply Chain Disruptions",
        description:
          "Single-source dependencies and poor supplier visibility cause production line stoppages and delivery delays.",
      },
      {
        title: "Complex BOM Management",
        description:
          "Multi-level bill of materials with frequent engineering changes create version control and costing challenges.",
      },
      {
        title: "Quality & Traceability Requirements",
        description:
          "OEM quality standards (IATF 16949) demand lot traceability, PPAP documentation, and CAPA processes.",
      },
      {
        title: "Multi-Plant Coordination",
        description:
          "Synchronising production schedules, inventory, and deliveries across plants and warehouses without a unified system.",
      },
    ],
    solutionFeatures: [
      {
        title: "Multi-Level BOM & Engineering Change",
        description:
          "Version-controlled BOMs with engineering change order workflows and automatic cost roll-up on design changes.",
      },
      {
        title: "Supplier Relationship Management",
        description:
          "Supplier scorecards, delivery performance tracking, alternate source management, and schedule sharing.",
      },
      {
        title: "Quality & Traceability Engine",
        description:
          "Lot/batch traceability, inspection plans, SPC data capture, and IATF 16949-aligned CAPA workflows.",
      },
      {
        title: "Multi-Plant Production Planning",
        description:
          "Consolidated demand planning, plant-wise capacity scheduling, and inter-plant transfer optimisation.",
      },
    ],
    keyModules: [
      { name: "Production Planning", description: "MRP, capacity planning, production scheduling, kanban" },
      { name: "BOM & Engineering", description: "Multi-level BOMs, ECN management, revision tracking" },
      { name: "Supplier Management", description: "Vendor scorecards, schedule sharing, ASN, PPAP tracking" },
      { name: "Quality Management", description: "Inspection, SPC, CAPA, traceability, certificate management" },
      { name: "Inventory & Logistics", description: "WMS, inter-plant transfers, JIT delivery, packaging" },
      { name: "Finance & Costing", description: "Standard costing, variance analysis, customer pricing, GL" },
    ],
    benefits: [
      {
        title: "95%+ On-Time Delivery Rate",
        description: "Integrated planning and supplier visibility ensure consistent delivery performance.",
      },
      {
        title: "Full Lot Traceability",
        description: "Track every component from raw material through production to finished goods dispatch.",
      },
      {
        title: "15% Improvement in Supplier Adherence",
        description: "Scorecards and schedule sharing drive supplier accountability and performance.",
      },
      {
        title: "Engineering Change Control",
        description: "Managed ECN process ensures cost, BOM, and routing updates are synchronized across plants.",
      },
    ],
    useCases: [
      {
        title: "Customer Order to Dispatch",
        description:
          "Customer schedule → MRP run → supplier call-offs → production scheduling → quality inspection → dispatch with ASN.",
      },
      {
        title: "Engineering Change Workflow",
        description:
          "ECN request → impact analysis (BOM, cost, routing) → approval → effectivity date control → production switchover.",
      },
      {
        title: "Supplier Quality Management",
        description:
          "Incoming inspection → lot accept/reject → supplier notification → CAPA tracking → performance score update.",
      },
    ],
    relatedServices: [
      { slug: "product-strategy", label: "Product Strategy" },
      { slug: "ai-solution", label: "AI Development" },
    ],
  }),

  "transportation-supply-chain-companies": buildErpPage({
    slug: "transportation-supply-chain-companies",
    title: "ERP for Transportation & Supply Chain Companies",
    heroSubtitle:
      "Unified planning, fleet operations, warehouse workflows, vendor control, and financial visibility for logistics and supply chain businesses.",
    challenges: [
      {
        title: "Route & Fleet Inefficiency",
        description:
          "Manual route planning, inconsistent fleet utilisation, and lack of real-time vehicle tracking increase costs.",
      },
      {
        title: "Warehouse Operations Gaps",
        description:
          "Disconnected WMS and ERP systems cause inventory discrepancies, pick errors, and delayed order fulfilment.",
      },
      {
        title: "Order Visibility Bottlenecks",
        description:
          "Customers and internal teams lack real-time visibility into order status, ETAs, and exception handling.",
      },
      {
        title: "Fuel & Maintenance Cost Overruns",
        description:
          "Untracked fuel consumption, missed maintenance schedules, and unplanned vehicle downtime erode margins.",
      },
    ],
    solutionFeatures: [
      {
        title: "Fleet & Route Management",
        description:
          "Vehicle assignment, route optimisation, driver allocation, fuel tracking, and real-time GPS integration.",
      },
      {
        title: "Warehouse Operations Integration",
        description:
          "Putaway, picking, packing, and dispatch workflows connected to order management and inventory.",
      },
      {
        title: "Order-to-Delivery Tracking",
        description:
          "End-to-end order visibility with milestone updates, exception alerts, and customer notification triggers.",
      },
      {
        title: "Fleet Maintenance & Compliance",
        description:
          "Preventive maintenance scheduling, fitness certificate tracking, and driver compliance documentation.",
      },
    ],
    keyModules: [
      { name: "Fleet Management", description: "Vehicle records, route assignment, GPS tracking, fuel logs" },
      { name: "Warehouse Management", description: "Inventory, putaway, picking, packing, dispatch" },
      { name: "Order Management", description: "Order intake, allocation, status tracking, customer notifications" },
      { name: "Finance & Billing", description: "Freight billing, AP/AR, cost allocation, revenue recognition" },
      { name: "Procurement", description: "Fuel procurement, spare parts, vendor management" },
      { name: "Compliance & Documentation", description: "Permits, fitness certificates, driver licenses, insurance" },
    ],
    benefits: [
      {
        title: "15% Reduction in Fleet Operating Costs",
        description: "Route optimisation, fuel tracking, and preventive maintenance reduce per-km costs.",
      },
      {
        title: "99% Order Visibility",
        description: "Real-time tracking and milestone updates for every shipment from pickup to delivery.",
      },
      {
        title: "Faster Warehouse Throughput",
        description: "Integrated WMS workflows reduce pick errors and accelerate order fulfilment.",
      },
      {
        title: "Regulatory Compliance Assurance",
        description: "Automated tracking of permits, certificates, and driver documentation prevents lapses.",
      },
    ],
    useCases: [
      {
        title: "Order-to-Delivery Lifecycle",
        description:
          "Order receipt → warehouse allocation → pick-pack → vehicle assignment → route dispatch → delivery confirmation → POD capture.",
      },
      {
        title: "Fleet Maintenance Scheduling",
        description:
          "Odometer/hours-based triggers → maintenance work order → spare parts procurement → breakdown logging → vehicle re-deployment.",
      },
      {
        title: "Freight Cost Reconciliation",
        description:
          "Trip completion → distance-based cost calculation → client invoicing → transporter payment → variance analysis.",
      },
    ],
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "mobile-app", label: "Mobile App Development" },
    ],
  }),
};

export const erpSlugs = Object.keys(erpData);
