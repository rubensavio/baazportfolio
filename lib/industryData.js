export const industryData = {
  manufacturing: {
    slug: "manufacturing",
    relatedServices: [
      { slug: "ai-solution", label: "AI Development" },
      { slug: "web-development", label: "Custom Software" },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/smart-factory-iot-traceability",
        label: "Smart factory IoT and quality traceability (Minda Industries)",
      },
      { href: "/work1", label: "AI quality automation on manufacturing ERP" },
    ],
    title: "Software for Manufacturing Companies",
    directAnswer:
      "Baaz builds software for manufacturers: AI defect and quality inspection on the line, IoT production monitoring, component traceability, and integrations that extend the ERP and MES a plant already runs. Product engineering since 2018.",
    metaTitle: "Manufacturing Software - AI Inspection, IoT & ERP | Baaz",
    metaDescription:
      "Manufacturing software from Baaz: AI defect detection, IoT production monitoring, traceability and ERP integrations, proven across six plants. Since 2018.",
    definition:
      "Manufacturing software development is the practice of building applications for manufacturers, including production and quality management, computer-vision inspection, supply chain and inventory systems, and the ERP and MES integrations that connect the shop floor to the back office.",
    intro:
      "Manufacturing runs on uptime, quality, and coordination between the floor and the supply chain. We build software that fits how plants run: computer vision that catches defects inside the cycle time, dashboards that show line performance as it happens, and integrations that extend the ERP you already operate. Most of what we have shipped for manufacturers started on one line or one defect class and grew from there.",
    capabilitiesHeading: "What we build for manufacturers",
    capabilities: [
      {
        title: "AI defect and quality detection",
        description:
          "Camera-based inspection that classifies surface, assembly and dimensional defects on the line, with every judgement stored beside its image for audit.",
        href: "/technologies/defect-quality-detection",
      },
      {
        title: "IoT production monitoring and OEE",
        description:
          "Machine and PLC data over OPC-UA into one dashboard, with OEE, downtime and quality drift per line and shift, on screen and on a plant manager's phone.",
        href: "/case-studies/smart-factory-iot-traceability",
      },
      {
        title: "Component traceability",
        description:
          "QR and barcode tracking from raw-material batch through every station to OEM delivery, with a compliance portal for customer-facing quality queries.",
      },
      {
        title: "Edge deployment at the line",
        description:
          "Models running on Jetson or industrial PCs beside the camera, fully offline where the plant network cannot be trusted, with versioned rollback.",
        href: "/technologies/edge-vision-deployment",
      },
      {
        title: "Supply chain and inventory",
        description:
          "Inbound, stock and dispatch visibility connected to production, so planners see what the line consumed and what it will need next.",
        href: "/technologies/digital-supply-chain",
      },
      {
        title: "ERP and MES integration",
        description:
          "Defect signals, counts and traceability data fed back into the ERP and MES you run today through their APIs, so nothing is re-keyed into a second system.",
        href: "/erp/manufacturing-companies",
      },
    ],
    proof: {
      eyebrow: "Shipped work",
      title: "Smart factory IoT and quality traceability across six plants",
      description:
        "For Minda Industries, an auto-component supplier to OEMs, we deployed an IoT sensor layer across six assembly plants, built real-time production monitoring with AI defect detection on the line, and added QR-based traceability from raw material to OEM delivery. Defects are now caught at the source, days before they would have shown up in a yield report.",
      href: "/case-studies/smart-factory-iot-traceability",
      label: "Read the Minda case study",
      metrics: [
        { value: "-67%", label: "Defect escape rate to OEMs" },
        { value: "93.1% → 98.4%", label: "First-pass yield" },
        { value: "71% → 86%", label: "OEE across six plants" },
        { value: "3 days → 2 hrs", label: "Traceability audit time" },
      ],
    },
    sections: [
      {
        heading: "Why manufacturers work with us",
        body: [
          "We extend the systems a plant already runs. We have layered computer-vision inspection, IoT monitoring and traceability on top of existing manufacturing ERP and line operations, and in every case the ERP stayed. The new layer feeds it defect signals, quality data and production counts through the APIs and connectors it already exposes.",
          "We decide where inference runs based on the floor. A fast line with a 200 millisecond budget gets a model on a Jetson or industrial PC beside the camera. Weekly yield analytics can run in the cloud. Plants with no reliable connectivity get a fully offline deployment with store-and-forward sync.",
          "We deliver in phases. The first release proves value on one line or one defect class, with the plant's own quality team reviewing the results. Only then does the same approach roll out to other lines and plants. Production never depends on a big-bang cutover.",
        ],
      },
      {
        heading: "Defect and quality analysis on the line",
        body: [
          "Visual inspection is the work we are asked for most. We start with the defect classes that cost you the most, whether that is surface scratches, missing or misaligned components, dimensional drift, or print and label errors. We then fix the camera, lens and lighting for each station before any model is trained, because an unstable image is the usual reason inspection projects stall.",
          "Models are trained on images from your line, labelled with your quality engineers, and tuned to the balance you choose between missed defects and false rejects. Every decision is stored with its image so a disputed reject is a lookup, and drift monitoring flags when a new supplier batch or a lighting change starts to shift the results.",
          "On one programme, detection rate rose from 76.8% to 99.7% and per-component inspection time fell from 3.2 seconds to 0.23 seconds, with coverage moving from a 23% sample to every unit. For Minda Industries the same approach cut the defect escape rate to OEMs by 67% across six plants.",
        ],
      },
      {
        heading: "Production visibility and traceability",
        body: [
          "Quality data is more useful when it sits beside production data. We connect machines and PLCs over OPC-UA, stream the data through Kafka into a time-series store, and give plant managers OEE, downtime and quality drift per line and shift, on a dashboard and on a phone.",
          "Traceability closes the loop. QR or barcode tracking follows every component from raw-material batch through each station to OEM delivery, so a quality query from a customer is answered with evidence in hours. Before, the same answer took days of cross-referencing paper travelers. A compliance portal lets OEM-facing teams share that evidence without emailing spreadsheets.",
        ],
      },
      {
        heading: "How an engagement runs",
        body: [
          "Discovery happens on the floor. We walk the line with your quality and production leads, pick the first station or defect class, measure the cycle time and connectivity, and agree the acceptance criteria before any build starts.",
          "A pilot on one line typically takes 10 to 16 weeks and ships with the review tooling your inspectors need. Scaling to other lines and plants reuses the same pipeline, and we hand over models, data and documentation so your team can retrain without us.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a manufacturing software development company do?",
        answer:
          "A manufacturing software development company builds digital products for manufacturers: production and quality management systems, computer-vision inspection, IoT monitoring, traceability platforms, and the integrations that connect the shop floor to ERP and back-office systems. The work is judged on reliability at the line and on how cleanly it fits the systems a plant already runs.",
      },
      {
        question: "Can you add AI quality inspection to our existing ERP?",
        answer:
          "Yes. We usually layer computer-vision inspection and QA workflows on top of an existing manufacturing ERP and line operations, and the core system stays in place. The vision layer feeds defect signals and quality data back into ERP-aligned workflows through the APIs the ERP already exposes. Our manufacturing ERP case study walks through a real example.",
      },
      {
        question: "Do you run inference on the edge or in the cloud?",
        answer:
          "It depends on latency, connectivity and cost. For real-time inspection on a fast line we deploy optimised models on edge hardware beside the cameras. For analytics that can wait minutes or hours we use cloud inference. We measure your floor conditions during discovery and pick the split per station.",
      },
      {
        question: "Can you work with the cameras and PLCs we already have?",
        answer:
          "Usually, yes. Existing industrial cameras are kept where the image is stable enough for the defect class. Where it is not, we specify a camera, lens and lighting for that station. PLCs and machines are connected over OPC-UA or their vendor protocol, and we read from them without changing the control logic.",
      },
      {
        question: "What happens when the plant network drops?",
        answer:
          "Inspection keeps running. Edge deployments make the pass or reject decision locally, buffer results and images on the device, and sync them when the link returns. Nothing on the line waits for a cloud round-trip, so a dropped network only delays reporting.",
      },
      {
        question: "How long does a manufacturing software project take?",
        answer:
          "A focused first release, for example AI inspection on a single line or defect class, typically takes 10 to 16 weeks. Broader platforms covering quality, production visibility, traceability and ERP integration run several months. We phase delivery so you prove value on a narrow scope before scaling across lines and plants.",
      },
      {
        question: "Who owns the models and the image data?",
        answer:
          "You do. Training images, labels, model weights and the retraining pipeline are handed over with documentation, and they run inside your own cloud account or on your own hardware. We do not keep your production images, and your team can retrain on new defect classes without us.",
      },
      {
        question: "What technologies do you use for manufacturing software?",
        answer:
          "Computer vision with PyTorch and OpenCV, YOLO-family detectors, and ONNX or TensorRT for on-device inference. OPC-UA for machine connectivity, with Kafka and InfluxDB for streaming and time-series data. React and Next.js dashboards, React Native plant-manager apps, and Python or Node.js backends. REST or webhook integration layers keep the shop floor and back office in sync.",
      },
    ],
  },
  fintech: {
    slug: "fintech",
    relatedServices: [
      { slug: "ai-solution", label: "AI Development" },
      { slug: "web-development", label: "Custom Software" },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/nri-digital-banking-platform",
        label: "NRI remittance and investment platform (Federal Bank)",
      },
    ],
    title: "Software for Banking and FinTech Companies",
    directAnswer:
      "Baaz builds software for banks and FinTech companies: digital banking and remittance, lending and onboarding, payments integrations, and compliance automation, with security and audit trails designed in from the start. Product engineering since 2018.",
    metaTitle: "Banking & FinTech Software Development | Baaz",
    metaDescription:
      "Banking and FinTech software: digital banking, remittance, lending, KYC and compliance automation, plus AI fraud detection. Proven at Federal Bank. Since 2018.",
    definition:
      "FinTech software development is the practice of building secure, compliant and scalable applications for financial services, including digital banking, cross-border payments, lending platforms, investment servicing, and the regulatory reporting that sits behind them.",
    intro:
      "Financial software handles real money and real regulators. We build platforms for banks, lenders and FinTech products that have to stay correct under load, prove every transaction to an auditor, and still feel simple to a customer on a phone. Our largest programme in this space is a multilingual NRI banking platform for Federal Bank that now carries a large share of its cross-border remittance.",
    capabilitiesHeading: "What we build for banking and FinTech",
    capabilities: [
      {
        title: "Digital banking and remittance",
        description:
          "Mobile-first banking journeys, cross-border remittance with live FX, and deposit products a customer can open without paperwork or a branch visit.",
        href: "/case-studies/nri-digital-banking-platform",
      },
      {
        title: "Lending and onboarding",
        description:
          "Loan origination, credit decisioning workflows and KYC onboarding with document capture, verification and a full audit trail.",
        href: "/technologies/ocr-document-vision",
      },
      {
        title: "Payments and core integrations",
        description:
          "Core banking, SWIFT and GPI, payment gateways, UPI and card networks behind an API layer your product teams own and can swap providers on.",
        href: "/erp/banking-companies",
      },
      {
        title: "Compliance automation",
        description:
          "FEMA, AML and KYC reporting generated from transaction data as it happens, so compliance stops being a manual step on every transfer.",
      },
      {
        title: "AI fraud and risk scoring",
        description:
          "Fraud detection and credit risk models trained on your own transaction history and tuned to the false-positive rate your ops team can absorb.",
        href: "/technologies/ai-ml-models",
      },
      {
        title: "Relationship and support tooling",
        description:
          "CRM for relationship managers, ops consoles, and AI assistants that answer customer questions inside the policy you set.",
        href: "/technologies/agentic-ai",
      },
    ],
    proof: {
      eyebrow: "Shipped work",
      title: "A unified NRI remittance and investment platform for Federal Bank",
      description:
        "Federal Bank's NRI franchise ran on branch relationships, phone service and manual FX desks. We designed and built a mobile-first platform that brings instant remittance from the UAE, USA, UK and Bahrain, self-service NRI fixed deposits, Portfolio Investment Scheme servicing and automated FEMA reporting into one experience in Malayalam, Hindi and English.",
      href: "/case-studies/nri-digital-banking-platform",
      label: "Read the Federal Bank case study",
      metrics: [
        { value: "3.4×", label: "Remittance volume growth in 12 months" },
        { value: "8 min", label: "Average remittance turnaround" },
        { value: "₹4,200Cr", label: "NRI fixed deposits in year one" },
        { value: "62 → 81", label: "NRI customer NPS" },
      ],
    },
    sections: [
      {
        heading: "Why banks and FinTech teams work with us",
        body: [
          "We have built systems that move money across borders, book deposits, service investments and report to regulators, and we know where the hard parts are: strong authentication, idempotent transaction handling, audit trails that survive an inspection, and performance on the day a campaign lands.",
          "We work as an extension of your team. Product, compliance and operations are in the room from discovery, delivery runs in phases so a focused first release can reach the market early, and the code, infrastructure and documentation are yours.",
        ],
      },
      {
        heading: "What we build for banking and FinTech",
        body: [
          "Customer-facing products: digital banking apps, remittance, deposits and investment servicing, lending journeys, and multilingual experiences for customers your branches cannot reach.",
          "Operations and compliance: relationship manager CRM, ops consoles, automated FEMA, AML and KYC reporting, and dashboards that reconcile to the ledger.",
          "Integration: core banking, SWIFT and GPI, FX rate feeds, payment gateways, UPI, identity verification and Salesforce, behind an API layer that lets you change a provider without rebuilding the product.",
        ],
      },
      {
        heading: "Security and compliance in the architecture",
        body: [
          "Encryption at rest and in transit, role-based access, OTP and device binding, immutable audit logs, and data residency decided per market are settled in the first architecture review. We document those decisions so your auditors and risk team can follow them.",
          "Where a bank needs AI without sending customer data to a third-party API, we fine-tune and host models inside its own cloud account or on premise, with the same audit trail as the rest of the platform.",
        ],
      },
      {
        heading: "AI in financial services",
        body: [
          "The applications that have paid off for our clients are narrow ones. Fraud detection that cuts false positives on a known transaction mix, and credit scoring on alternative data. AML screening that ranks alerts for a human to review, and document extraction for KYC and loan files. Assistants that answer customer questions inside the policy you set.",
          "We scope each one against your risk framework and measure it against the manual process it replaces, so the business case is visible before the model goes live.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a FinTech software development company do?",
        answer:
          "A FinTech software development company builds digital products for financial services: payment processing, digital banking platforms, remittance, lending applications, investment servicing and compliance tooling. It handles the requirements that make financial software different, including regulatory compliance, encryption, transaction integrity and high-availability architecture.",
      },
      {
        question: "How much does FinTech software development cost?",
        answer:
          "FinTech software development typically costs $75,000 to $500,000 or more. A payments or remittance MVP runs $75,000 to $150,000. A full digital banking platform with compliance, multi-currency and core integrations can exceed $300,000 to $500,000. Costs run higher than general software because of security requirements, regulatory work and the testing and audit trails that come with them.",
      },
      {
        question: "What compliance requirements apply to FinTech software?",
        answer:
          "Depending on the market, FinTech software must meet PCI DSS for card data, SOC 2 for security controls, GDPR or local privacy law, KYC and AML rules for identity and screening, and jurisdiction-specific banking regulation such as FEMA for cross-border transactions in India. We build compliance into the architecture from the first review: encryption at rest and in transit, audit logging, and role-based access control.",
      },
      {
        question: "Can you work inside our existing core banking system?",
        answer:
          "Yes. Most of our banking work sits on top of an existing core. We integrate through the core's APIs or middleware, add SWIFT and GPI, FX feeds, payment gateways and identity providers as needed, and wrap them in an API layer your product teams own. The core keeps its role as the system of record.",
      },
      {
        question: "How long does it take to build a FinTech application?",
        answer:
          "A FinTech MVP takes 12 to 20 weeks. A production-ready platform with compliance, integrations and multi-role access takes 6 to 12 months. Timelines depend heavily on regulatory requirements and third-party integrations such as core banking, payment processors and identity verification. We phase delivery so a focused first release can go to market sooner.",
      },
      {
        question: "What technologies are used for FinTech software?",
        answer:
          "Our banking platforms use Flutter or React Native for mobile, React or Next.js for web, Java Spring Boot, Node.js or Python services, and PostgreSQL, deployed on AWS or GCP. Integration work covers SWIFT and GPI, exchange-rate APIs, Twilio OTP, Salesforce CRM, and services such as Stripe, Razorpay or Open Banking APIs where the market calls for them.",
      },
      {
        question: "Can AI be used in FinTech applications?",
        answer:
          "Yes. The cases that have paid off are fraud detection, credit scoring on alternative data, AML alert ranking, document extraction for KYC and loan files, and customer assistants that work inside a defined policy. We have built fraud detection and risk scoring for FinTech clients, and where customer data cannot leave the bank we fine-tune and host the models inside its own environment.",
      },
    ],
  },
  construction: {
    slug: "construction",
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "mobile-app", label: "Mobile App Development" },
    ],
    relatedCaseStudies: [
      {
        href: "/real-estate-erp-case-study",
        label: "Housingram: real-estate ERP and buyer app",
      },
    ],
    title: "Real Estate and Construction Software",
    directAnswer:
      "Baaz builds software for real-estate developers and contractors: ERP for inventory, sales and collections, buyer and resident apps, offline field apps for site teams, and procurement and reporting tools. Housingram, the real-estate platform we built, runs sales, site and accounts on one spine.",
    metaTitle: "Real Estate & Construction Software Development | Baaz",
    metaDescription:
      "Real estate and construction software from Baaz: developer ERP, buyer apps, offline field apps, procurement and reporting. See Housingram, our real-estate ERP.",
    definition:
      "Real estate and construction software covers the systems a developer or contractor runs a project on: inventory and sales, channel partners, agreements and milestone billing, site tasks and procurement, buyer and resident journeys, and the reporting that connects office, site and finance.",
    intro:
      "A development project is run by sales, site, procurement, marketing and accounts at the same time, and each of them usually keeps its own version of the truth. We build software that gives them one. Housingram, the real-estate ERP and buyer app we built for a multi-project developer, is the clearest example: what is sold, what is owed and what is still sellable this week is answered from one place.",
    capabilitiesHeading: "What we build for real estate and construction",
    capabilities: [
      {
        title: "Developer ERP, inventory to cash",
        description:
          "Units, holds, releases, agreements and milestone billing on one governed inventory, so finance recognises exactly what sales sold.",
        href: "/erp/real-estate-companies",
      },
      {
        title: "Buyer and resident apps",
        description:
          "Applications, deals, payments, documents and post-handover support in an app that shows buyers the same unit status the back office stands behind.",
        href: "/real-estate-erp-case-study",
      },
      {
        title: "Site and field apps",
        description:
          "Tasks, daily logs, inspections, photos and material requests that work offline on site and sync when connectivity returns.",
        href: "/services/mobile-app",
      },
      {
        title: "Procurement and vendor management",
        description:
          "Material planning, purchase orders, GRNs and vendor scoring with traceability through to project costing.",
        href: "/erp/construction-companies",
      },
      {
        title: "Sales, channel partner and CRM tooling",
        description:
          "Leads, follow-ups, rate lists and incentive math for sales teams and channel partners, fed by campaigns and landing forms without orphan leads.",
      },
      {
        title: "Site intelligence from drones and cameras",
        description:
          "Progress monitoring, safety-zone alerts and measured site geometry from drone captures and fixed cameras.",
        href: "/technologies/geospatial-digital-twin",
      },
    ],
    proof: {
      eyebrow: "Shipped work",
      title: "Housingram: sales, site, procurement and buyers on one spine",
      description:
        "Housingram is the real-estate platform we built for a residential developer with active towers across the NCR. Before it, work lived in Excel, WhatsApp, PDFs and legacy screens, two channel partners could quote overlapping views of the same inventory, and buyers waited on payment links. Now leads and partners work on governed stock, agreements and invoices come from the data finance closes on, site teams run tasks and material requests on mobile, and buyers see the same truth in their app.",
      href: "/real-estate-erp-case-study",
      label: "Read the Housingram case study",
      metrics: [
        { value: "6+", label: "Parallel systems before Housingram" },
        { value: "48 hr", label: "Lead-to-inventory lag before" },
        { value: "4.5 hrs", label: "Daily reconciliation before" },
        { value: "8", label: "Stakeholder roles on one platform" },
      ],
    },
    sections: [
      {
        heading: "Why developers and contractors work with us",
        body: [
          "We start with the workflows that hurt the most. Overlapping holds on the same unit, leads that reach ops two days after marketing saw them, daily reconciliation between broker sheets and tower plans, and payment links promised for the evening. We build the tools that fix those first, and we plug into the accounting and CRM systems you already run.",
          "We have built for the office, the site and the buyer in the same programme, which matters because a developer's problems usually sit in the handoffs between them.",
        ],
      },
      {
        heading: "Housingram: how a developer's business fits on one platform",
        body: [
          "Housingram gives leadership one command centre for company, projects and partner KPIs, through role-based dashboards. Sales and marketing work the same funnel from inquiry to booking, with campaigns, landing forms and source attribution feeding the CRM. Site operations and procurement run tasks, contractors, change requests, material planning, stock and purchase orders with approvals, so timelines and costing stay accountable.",
          "Accounts, documents and buyers sit on the same spine. Agreements and invoices are generated from the inventory and milestone data finance closes on, so the PDF, the app and the ledger stop disagreeing at month-end. Buyers and residents use a consumer-grade app for projects, applications, deals, payments and support, and see the same unit status the back office sees.",
          "Eight stakeholder roles run on it: sales and channel partners, buyers and residents, builder leadership, site and engineering, vendors, inventory, service partners and admin. A web console carries pricing grids, documents and finance, native-feel mobile carries site staff and buyers, and one API layer underneath keeps the KPIs honest.",
        ],
      },
      {
        heading: "Field software that works where connectivity does not",
        body: [
          "Site apps are built offline-first. Forms, photos, inspections, timesheets and task updates are stored on the device and sync when the signal returns, so a basement or a remote plot never stops the day's reporting. Lists and notifications update when the record changes, so sales and site are not refreshing ten tabs to find out what moved.",
          "Where a project benefits from measurement, we add drone and camera-based site intelligence: progress against plan, safety-zone alerts and measured geometry, delivered into the same dashboards.",
        ],
      },
      {
        heading: "From idea to rollout",
        body: [
          "We map how money and units move first. Inventory states, payment milestones and permissions are aligned to how you already sell and recognise revenue before any UI is polished, and handoffs to accounting and legacy CRM are scoped so nobody re-keys the business at go-live.",
          "Then we ship vertical slices people can run. Lead-to-deal goes end-to-end in staging early, mobile personas get their shells so field feedback lands while the back-office grids tighten, and rollout includes training and support. We measure the rollout by adoption.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is Housingram?",
        answer:
          "Housingram is the real-estate ERP and buyer app Baaz built for a multi-project residential developer in the NCR. It runs sales and channel partners, governed inventory, agreements and milestone billing, site tasks and procurement, accounts and documents on one platform, with a consumer app that shows buyers the same unit status the back office stands behind. The full story is in our real-estate ERP case study.",
      },
      {
        question: "Can you build something like Housingram for our projects?",
        answer:
          "Yes. Housingram was built for one developer, and the pattern transfers: governed inventory, one funnel for sales and marketing, site and procurement on mobile, and finance on the same data. We reuse the approach and none of the client's data, and we map the inventory states, milestones and permissions to how your business already sells before building.",
      },
      {
        question: "What is construction technology software?",
        answer:
          "Construction technology software, often called ConTech, means digital tools built for the construction and development industry: project management platforms, field reporting apps, procurement systems, safety and compliance tools, developer ERP, and BIM integrations. The aim is to cut delays, cost overruns and rework by giving office, site and finance one view of the project.",
      },
      {
        question: "How much does custom construction or real-estate software cost?",
        answer:
          "Custom construction and real-estate software costs $50,000 to $300,000 depending on scope. A field reporting app with offline capability runs $50,000 to $100,000. A developer ERP with inventory, sales, procurement and reporting costs $150,000 to $300,000. The return usually comes from less rework and reconciliation, fewer leaked deals, and faster collections.",
      },
      {
        question: "Why do developers and contractors need custom software?",
        answer:
          "Off-the-shelf tools are often too generic, do not work offline on remote sites, or cannot integrate with existing ERP and accounting systems. Custom software matches your exact inventory, approval and billing processes, removes double entry, and gives real-time visibility across projects, sites and teams.",
      },
      {
        question: "Can construction apps work offline on job sites?",
        answer:
          "Yes. We build mobile apps offline-first, so data is stored on the device and syncs when connectivity is restored. This covers forms, photos, inspections, timesheets, material requests and task updates, which is essential on sites with limited or no signal.",
      },
      {
        question: "How long does it take to build construction management software?",
        answer:
          "A focused tool such as field reporting or daily logs takes 8 to 12 weeks. A developer ERP or a comprehensive project management platform takes 4 to 8 months. We start with the highest-pain workflow, prove it with real users, then expand, which keeps adoption high and risk low.",
      },
      {
        question: "What integrations do construction and real-estate software products need?",
        answer:
          "Common integrations include accounting systems such as Tally, Sage, QuickBooks or Xero, ERP platforms, CRM and marketing tools, payment gateways for buyer collections, document management, GPS and equipment tracking, BIM tools such as Revit, and payroll. We handle these integrations as part of the build so data flows between your existing tools and the new software.",
      },
    ],
  },
  retail: {
    slug: "retail",
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "ui-ux-design", label: "UI/UX Design" },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/omnichannel-d2c-gifting-engine",
        label: "AI-powered omnichannel D2C storefront and gifting engine",
      },
    ],
    title: "Retail and eCommerce Software Development",
    directAnswer:
      "Baaz builds retail and eCommerce software: D2C storefronts, AI recommendation engines, unified inventory across online and stores, POS and ERP integrations, and in-store computer vision. Product engineering since 2018.",
    metaTitle: "Retail & eCommerce Software Development | Baaz",
    metaDescription:
      "Retail and eCommerce software from Baaz: D2C storefronts, AI recommendations, unified inventory, POS and ERP integrations, and in-store vision. Since 2018.",
    definition:
      "Retail and eCommerce software development is the practice of building the systems a retailer sells and operates on: storefronts and marketplaces, recommendation and search, inventory and order management across channels, point-of-sale and ERP integrations, CRM and loyalty, and the analytics that connect them.",
    intro:
      "Retail is omnichannel, data-heavy and under margin pressure. We build software that connects online and in-store, keeps inventory honest across both, and turns browsing into buying. For a lifestyle brand with more than 100 stores and a fast-growing D2C channel, our storefront and AI gifting engine now produce close to a third of online revenue.",
    capabilitiesHeading: "What we build for retail and eCommerce",
    capabilities: [
      {
        title: "D2C storefronts and marketplaces",
        description:
          "Fast, SEO-ready storefronts on Next.js with checkout, payments, gift and personalisation modules built for the way your customers buy.",
        href: "/services/web-development",
      },
      {
        title: "AI recommendations and search",
        description:
          "Recommendation models that match occasion, budget and recipient to curated sets, and search that handles misspellings, synonyms and intent.",
        href: "/technologies/ai-ml-models",
      },
      {
        title: "Unified inventory and order management",
        description:
          "One real-time stock layer across online and every store, so the website never sells what a shop sold an hour ago.",
        href: "/technologies/digital-supply-chain",
      },
      {
        title: "In-store computer vision",
        description:
          "Footfall counting, queue and dwell-time monitoring, and shelf availability from the cameras you already have.",
        href: "/technologies/object-detection-tracking",
      },
      {
        title: "CRM, lifecycle and loyalty",
        description:
          "Post-purchase and repeat-purchase journeys, loyalty mechanics and segmentation wired into Braze, Klaviyo or your own stack.",
      },
      {
        title: "POS, ERP and logistics integration",
        description:
          "Connections to POS, order management, ERP, payment and logistics platforms, with analytics dashboards merchandising teams use daily.",
        href: "/erp",
      },
    ],
    proof: {
      eyebrow: "Shipped work",
      title: "An AI-powered omnichannel storefront and gifting engine",
      description:
        "A lifestyle and home décor brand sold across more than 100 stores and a growing D2C channel, but its storefront showed every visitor the same category grid and regularly listed stock that had sold out in a shop. We rebuilt the storefront on Next.js, added an AI gifting engine that curates sets by occasion, budget and recipient, and unified online and in-store inventory into one real-time layer.",
      href: "/case-studies/omnichannel-d2c-gifting-engine",
      label: "Read the D2C gifting case study",
      metrics: [
        { value: "29%", label: "Of D2C revenue from the gifting engine in 8 months" },
        { value: "2.3×", label: "Higher order value for gifting journeys" },
        { value: "78% → 96%", label: "Cross-channel inventory accuracy" },
        { value: "14% → 27%", label: "Online repeat purchase rate" },
      ],
    },
    sections: [
      {
        heading: "Why retailers work with us",
        body: [
          "We start with the number you are trying to move: conversion, order value, inventory accuracy, checkout speed, or a single view of customer and stock. Then we design and build the products and integrations that move it, without locking you into one vendor or a legacy platform.",
          "Product strategy, UI and UX design, and engineering sit under one roof, so the people who design the shopper's journey also build it. We are used to launch dates tied to a season and KPIs reviewed weekly.",
        ],
      },
      {
        heading: "What we build for retail",
        body: [
          "Storefronts and marketplaces, mobile apps, in-store tools, POS and ERP integrations, and internal dashboards for merchandising, inventory and store operations. We build on modern, maintainable stacks so you can iterate as channels and assortments change.",
          "Inventory is where omnichannel promises usually break. We build a single real-time stock layer across online and physical stores, connected to your order management and POS, so availability on the site matches the shelf and avoidable cancellations stop.",
        ],
      },
      {
        heading: "AI in retail that pays for itself",
        body: [
          "The AI work that has paid back fastest in retail has been narrow: a gifting engine that turns occasion and budget into a curated set, demand forecasting that reduces stockouts without overbuying, and search that understands what a shopper means. Each is measured against the baseline it replaced, and the gifting engine alone produced 29% of a brand's online revenue within eight months.",
          "In stores, computer vision on existing cameras counts footfall, measures queues and dwell time, and checks shelf availability, so store teams and planners have measurements where they used to have estimates.",
        ],
      },
      {
        heading: "How we run a retail programme",
        body: [
          "Discovery maps the customer journey and the stock journey side by side, because the problems usually sit at the point where a customer's order meets the stock record. A focused first release, usually the storefront or inventory visibility, ships in 8 to 16 weeks. Broader programmes across channels and systems run 6 to 18 months, delivered in phases with real customers using each one.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is retail digital transformation?",
        answer:
          "Retail digital transformation is the adoption of technology to improve customer experience, operating efficiency and revenue across every channel. In practice it covers eCommerce platforms, omnichannel integration, unified inventory, personalisation and recommendation engines, in-store technology, and the analytics that tie them together.",
      },
      {
        question: "How much does retail software development cost?",
        answer:
          "Costs range from $50,000 for a focused eCommerce build to $500,000 or more for a full omnichannel programme. A custom storefront runs $50,000 to $150,000. Adding unified inventory, POS integration and customer analytics brings the total to $200,000 to $500,000. The return typically comes from higher online conversion and order value, lower inventory waste, and better retention.",
      },
      {
        question: "What is omnichannel retail and why does it matter?",
        answer:
          "Omnichannel retail gives customers one consistent experience across the online store, mobile app, physical stores, social channels and marketplaces. Customers expect to browse online, buy in-store and return through any channel, and that only works when inventory, orders and customer data are shared across all of them.",
      },
      {
        question: "How do you keep online and in-store inventory in sync?",
        answer:
          "We build a single real-time inventory layer that connects online orders, store POS and the order management or ERP system, so stock is reserved and released consistently wherever a sale happens. On one brand this moved cross-channel inventory accuracy from 78% to 96% and cut the cancellations caused by selling stock a store had already sold.",
      },
      {
        question: "How long does a retail software project take?",
        answer:
          "A focused project such as launching a storefront takes 8 to 16 weeks. A full programme spanning multiple systems and channels typically takes 6 to 18 months, delivered in phases. We start with the highest-impact initiative, usually the online sales channel or inventory visibility, and expand from there.",
      },
      {
        question: "What technologies are used for retail software?",
        answer:
          "Our retail stacks use Next.js for storefronts, Node.js or Python for backends and recommendation models, PostgreSQL for product and order data, Razorpay, Stripe or Adyen for payments, and a headless CMS where content changes often. We integrate with POS systems, order management platforms such as Unicommerce, ERPs, CRM tools such as Braze, and logistics providers as needed.",
      },
      {
        question: "How can AI improve retail operations?",
        answer:
          "Personalised recommendations raise order value and repeat purchase, demand forecasting reduces stockouts and overbuying, intent-aware search lifts conversion, and in-store computer vision gives store teams footfall, queue and shelf data from existing cameras. We measure each against the baseline it replaces. Our gifting engine, for example, drove 29% of a brand's online revenue within eight months at 2.3 times the order value of standard browsing.",
      },
    ],
  },
  healthcare: {
    slug: "healthcare",
    relatedServices: [
      { slug: "ai-solution", label: "AI Development" },
      { slug: "ui-ux-design", label: "UI/UX Design" },
    ],
    relatedCaseStudies: [
      {
        href: "/case-studies/pathology-lab-erp-patient-app",
        label: "Pathology network ERP and patient app (Healius)",
      },
      {
        href: "/healthcare-patient-app-case-study",
        label: "Healthcare patient engagement app",
      },
    ],
    title: "Healthcare Software Development",
    directAnswer:
      "Baaz builds healthcare software: patient engagement apps, lab and provider network ERP, EHR and FHIR integrations, teleconsultation, and AI that runs inside your own environment. Secure delivery for providers, diagnostics networks and healthtech teams since 2018.",
    metaTitle: "Healthcare Software - Patient Apps, ERP & FHIR | Baaz",
    metaDescription:
      "Healthcare software from Baaz: patient apps, lab and network ERP, EHR and FHIR integrations, teleconsultation and on-premise AI. Proven at Healius. Since 2018.",
    definition:
      "Healthcare software development is the practice of designing and building secure, compliant applications for the healthcare industry. It covers patient portals and apps, electronic health record integrations, telehealth, laboratory and network operations systems, and clinical decision support tools that meet HIPAA, GDPR, HL7 and FHIR requirements.",
    intro:
      "Healthcare software has to be reliable, secure, and easy for clinicians and patients under pressure. We build applications that fit existing clinical and operational workflows and the compliance that surrounds them. Our largest programme in the sector is a pathology network ERP and patient app for Healius, one of Australia's largest healthcare companies, serving more than 26 million patients a year.",
    capabilitiesHeading: "What we build for healthcare",
    capabilities: [
      {
        title: "Patient engagement apps",
        description:
          "Scheduling, results, prescriptions, lab and pharmacy, documents and push notifications in iOS and Android apps patients keep using.",
        href: "/healthcare-patient-app-case-study",
      },
      {
        title: "Lab and provider network ERP",
        description:
          "Scheduling, sample chain-of-custody, result delivery and billing across thousands of collection centres and labs.",
        href: "/erp/healthcare-companies",
      },
      {
        title: "EHR and FHIR integration",
        description:
          "HL7 FHIR integrations with Epic, Cerner and practice management, lab and pharmacy systems, so data moves without re-keying.",
      },
      {
        title: "Teleconsultation",
        description:
          "Video consultation, GP follow-up and e-prescription modules connected to the patient record and the referral flow.",
      },
      {
        title: "Document and claims extraction",
        description:
          "OCR and document AI for referrals, claims, consent forms and scanned records, with a review queue for the fields that matter.",
        href: "/technologies/ocr-document-vision",
      },
      {
        title: "AI inside your own environment",
        description:
          "Fine-tuned models for triage, coding and clinical summarisation hosted in your cloud account or on premise, so patient data never leaves.",
        href: "/technologies/llm-fine-tuning",
      },
    ],
    proof: {
      eyebrow: "Shipped work",
      title: "A connected pathology network ERP and patient app for Healius",
      description:
        "Healius runs more than 2,500 pathology collection centres, 60 day hospitals and radiology clinics. Samples moved between centres and labs with limited chain-of-custody visibility, results reached GPs through manual handoffs, and patients had no self-service access. We built a network ERP for scheduling, sample tracking, result delivery and billing, paired with a patient app for results and GP teleconsultation.",
      href: "/case-studies/pathology-lab-erp-patient-app",
      label: "Read the Healius case study",
      metrics: [
        { value: "3.8% → 0.6%", label: "Sample rejection rate" },
        { value: "-32%", label: "Result turnaround time" },
        { value: "1.8M", label: "Patient app downloads in 12 months" },
        { value: "4.2% → 0.3%", label: "Billing error rate" },
      ],
    },
    sections: [
      {
        heading: "Why healthcare teams work with us",
        body: [
          "We work with provider networks, diagnostics companies and digital health startups that need custom software: patient apps, scheduling, care pathways, lab operations and internal tools. We design for the people who will use it, clinicians, administrators and patients, and we build with security and privacy from the first architecture review.",
          "We are used to regulatory and governance constraints. Decisions are documented, development follows secure practices, and delivery supports audits and future handover to your own team.",
        ],
      },
      {
        heading: "What we build for healthcare",
        body: [
          "Patient-facing: engagement apps for scheduling, results, prescriptions and documents, teleconsultation with GPs, and notifications that bring patients back for follow-up. For Healius, the patient app reached 1.8 million downloads in its first year and now carries 28% of GP referral conversion.",
          "Operational: network ERP for scheduling, sample chain-of-custody, automated result delivery to referring doctors, and billing across thousands of sites. Chain-of-custody tracking cut Healius's sample rejection rate from 3.8% to 0.6% and billing errors from 4.2% to 0.3%.",
          "Integration: HL7 FHIR connections to EHRs, practice management, lab information and pharmacy systems, so a result, a referral or a prescription moves between systems without anyone re-keying it.",
        ],
      },
      {
        heading: "Compliance and data sovereignty",
        body: [
          "HIPAA, GDPR, Australian privacy law, HL7 and FHIR, SOC 2 and, where relevant, medical device regulation shape the architecture before the first screen is designed. Encryption, access control, audit logging and data residency are decided per deployment and documented for your auditors.",
          "Where patient data cannot leave your network, we host the whole stack, including any AI models, inside your own cloud account or on premise. Models are fine-tuned on your data and stay yours.",
        ],
      },
      {
        heading: "AI in healthcare software",
        body: [
          "The applications that have held up in production for us are narrow ones: triage and symptom assessment, extraction from referrals, claims and scanned records, clinical coding and summarisation for administrators, imaging analysis for defined findings, and readmission or resource forecasting. Each is scoped against a clinical or operational baseline, reviewed by the people responsible for the outcome, and deployed with the same audit trail as the rest of the system.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a healthcare software development company do?",
        answer:
          "A healthcare software development company builds custom applications for providers, diagnostics networks, insurers and healthtech companies: patient apps and portals, telehealth, EHR and FHIR integrations, lab and network operations systems, and clinical decision support. It handles the regulatory requirements, including HIPAA, GDPR and HL7 or FHIR, while building software clinicians and patients want to use.",
      },
      {
        question: "How much does healthcare software development cost?",
        answer:
          "Healthcare software costs $75,000 to $500,000 or more depending on complexity and compliance scope. A patient portal or scheduling app runs $75,000 to $150,000. A telehealth platform with video, prescriptions and EHR integration costs $150,000 to $300,000. Enterprise clinical and network operations systems with advanced interoperability can exceed $500,000.",
      },
      {
        question: "What compliance standards apply to healthcare software?",
        answer:
          "Key standards include HIPAA for US patient data, GDPR in the EU, the Privacy Act and APPs in Australia, HL7 and FHIR for interoperability, SOC 2 for security controls, and FDA or TGA rules where software acts as a medical device. We build compliance into the architecture: encryption, access controls, audit logging and data residency are part of every healthcare project from the first review.",
      },
      {
        question: "How long does healthcare software development take?",
        answer:
          "A focused application such as a patient portal or scheduling tool takes 10 to 16 weeks. A comprehensive platform with EHR integration, compliance validation and multiple user roles takes 6 to 12 months. Compliance review and user acceptance testing add time compared with unregulated industries, so we phase delivery to get a working product in front of users early.",
      },
      {
        question: "Can healthcare software integrate with existing EHR systems?",
        answer:
          "Yes. We build integrations with major EHR systems such as Epic and Cerner using HL7 FHIR APIs, the current standard for healthcare data interoperability, and with practice management, lab information and pharmacy systems. Interoperability is often a regulatory expectation as well as a product one.",
      },
      {
        question: "Can AI run without patient data leaving our network?",
        answer:
          "Yes. We fine-tune and host models inside your own cloud account or on your own hardware, including air-gapped deployments, so prompts, documents and images never reach a third-party API. The models, weights and training data stay yours, and inference carries the same audit trail as the rest of the platform.",
      },
      {
        question: "How is AI used in healthcare software?",
        answer:
          "In production, AI is used for triage and symptom assessment, extraction from referrals, claims and scanned records, clinical coding and summarisation for administrators, imaging analysis for defined findings, and forecasting of readmission risk and resource demand. We scope each against a clinical or operational baseline and keep a clinician or administrator in the review loop.",
      },
    ],
  },
};

export const industrySlugs = Object.keys(industryData);
