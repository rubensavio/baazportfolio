/**
 * Representative "Selected work" case studies (anonymised). Data-driven pages at
 * /case-studies/[slug]; also surfaced on the home "Selected work" section.
 */
export const selectedWorkData = {
  "nri-digital-banking-platform": {
    slug: "nri-digital-banking-platform",
    client: "Federal Bank Ltd",
    industry: "BFSI / NRI Banking",
    anonymised: false,
    meta: [
      { label: "Industry", value: "BFSI" },
      { label: "Category", value: "NRI Banking" },
      { label: "Country", value: "India" },
    ],
    title:
      "Reimagining NRI Banking: A Unified Digital Remittance & Investment Platform",
    summary:
      "A unified, multilingual NRI banking platform for Federal Bank - instant cross-border remittance, self-service fixed deposits, and Portfolio Investment Scheme servicing brought together in one mobile-first experience.",
    metaTitle:
      "NRI Digital Remittance & Investment Platform for Federal Bank - Case Study | Baaz",
    metaDescription:
      "How Baaz built a unified NRI digital remittance, fixed deposit and investment platform for Federal Bank: 3.4× remittance growth, 8-minute settlement, ₹4,200Cr in NRI FDs, and multilingual support in Malayalam, Hindi and English.",
    clientOverview:
      "Federal Bank Ltd is a Kerala-headquartered private sector bank with 1,400+ branches and one of India's most established NRI banking franchises, handling more than ₹30,000 crore in annual NRI remittances - primarily from the Gulf and the United States.",
    challenge:
      "Federal Bank's NRI franchise had been built over decades on branch relationships and phone-based service - a model that worked well for a generation of depositors, but increasingly fell short for a younger, mobile-first diaspora across the UAE, USA, UK and Bahrain. Remittances routed through manual FX desks took days to settle, fixed deposit bookings required physical paperwork during home visits, and investment servicing under the Portfolio Investment Scheme (PIS) sat outside any self-service channel. English-only servicing also left a large share of Malayalam- and Hindi-speaking customers underserved, while FEMA compliance reporting added manual overhead to every transaction the bank processed.",
    solution:
      "Baaz partnered with Federal Bank to design and build a comprehensive NRI digital platform from the ground up - unifying instant remittance from four key corridors (UAE, USA, UK, Bahrain), NRI fixed deposit booking, portfolio investment servicing, and relationship management into a single, multilingual experience supporting Malayalam, Hindi and English.",
    approach: [
      {
        title: "Multi-corridor NRI remittance",
        description:
          "Instant remittance across four country corridors - UAE, USA, UK and Bahrain - powered by a real-time FX conversion engine with live, transparent rate display.",
      },
      {
        title: "Self-service NRI fixed deposits",
        description:
          "A fully digital FD booking module that removed physical paperwork and the dependence on home visits to book deposits.",
      },
      {
        title: "Portfolio Investment Scheme servicing",
        description:
          "PIS integration bringing NRI equity and securities investment into self-service for the first time, alongside remittance and deposits.",
      },
      {
        title: "Multilingual experience",
        description:
          "End-to-end servicing in Malayalam, Hindi and English, so language was no longer a barrier for a large share of the diaspora.",
      },
      {
        title: "Diaspora CRM for relationship managers",
        description:
          "A CRM that lets relationship managers track NRI customers across geographies and keep relationship-led service intact in a digital channel.",
      },
      {
        title: "Automated FEMA compliance",
        description:
          "FEMA compliance reporting generated automatically, removing the manual overhead that previously sat on every transaction.",
      },
    ],
    results: [
      { value: "3.4×", label: "Remittance volume growth in 12 months" },
      { value: "8 min", label: "Average remittance turnaround time" },
      { value: "₹4,200Cr", label: "NRI fixed deposits mobilised in Year 1" },
      { value: "62 → 81", label: "NRI customer NPS" },
      { value: "+4 pts", label: "Gulf remittance market share" },
    ],
    closingStatement:
      "Baaz helped Federal Bank turn one of India's most established NRI banking relationships into a fully digital, multilingual, and compliant remittance and investment experience - without losing the trust built over decades.",
    stack: [
      "Flutter",
      "Java Spring Boot",
      "PostgreSQL",
      "SWIFT/GPI integration",
      "ExchangeRate APIs",
      "Twilio OTP",
      "AWS",
      "Salesforce CRM",
    ],
  },
  "omnichannel-d2c-gifting-engine": {
    slug: "omnichannel-d2c-gifting-engine",
    client: "Leading Retailer from India",
    industry: "eCommerce / D2C Lifestyle",
    title: "Omnichannel D2C Storefront & Personalised Gifting Engine",
    summary:
      "A unified D2C storefront with an AI gifting engine-connecting online and in-store inventory and turning gift discovery into a personalised, high-converting journey.",
    metaTitle: "D2C Storefront & AI Gifting Engine - Case Study | Baaz",
    metaDescription:
      "How Baaz built an omnichannel D2C storefront and AI gifting engine for a lifestyle retailer: 29% of GMV from gifting, 2.3× AOV, inventory accuracy 78% → 96%.",
    challenge:
      "The retailer ran disconnected online and in-store systems with unreliable inventory, and gift shoppers-its highest-intent buyers-had to wade through generic catalogues. Stockouts, mismatched availability, and poor discovery left conversion and average order value on the table.",
    approach: [
      {
        title: "Unified omnichannel storefront",
        description:
          "A single commerce platform syncing online and in-store inventory in real time, so availability and fulfilment stayed accurate across channels.",
      },
      {
        title: "AI personalised gifting engine",
        description:
          "Recommendation models that turn occasion, recipient, and budget signals into curated gift sets-surfacing the right product at the right moment.",
      },
      {
        title: "Conversion-focused journeys",
        description:
          "Re-designed discovery, bundling, and checkout flows tuned for gifting intent and higher basket sizes.",
      },
      {
        title: "Inventory intelligence",
        description:
          "Reconciliation and accuracy tooling that closed the gap between system stock and shelf reality.",
      },
    ],
    results: [
      { value: "29%", label: "Of D2C GMV from the AI gifting engine in 8 months" },
      { value: "2.3×", label: "Higher AOV vs standard browsing" },
      { value: "78% → 96%", label: "Inventory accuracy" },
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Recommendation models",
      "Headless commerce",
      "PostgreSQL",
      "Redis",
    ],
  },
  "smart-factory-iot-traceability": {
    slug: "smart-factory-iot-traceability",
    client: "Large Manufacturing Company from Europe",
    industry: "Manufacturing / Industrial IoT",
    title: "Smart Factory IoT & Quality Traceability Platform",
    summary:
      "An industrial IoT and traceability platform across six plants-connecting line data, quality inspection, and end-to-end traceability so defects are caught before they reach OEMs.",
    metaTitle: "Smart Factory IoT & Traceability Platform - Case Study | Baaz",
    metaDescription:
      "How Baaz built a smart-factory IoT and quality traceability platform across 6 plants: defect escape down 67%, OEE 71% → 86%, audit time 3 days → 2 hours.",
    challenge:
      "Quality data lived in silos across six plants, defects were caught late-sometimes only after parts reached OEM customers-and traceability audits meant days of manual spreadsheet archaeology. Leadership had no real-time view of overall equipment effectiveness or where quality was slipping.",
    approach: [
      {
        title: "Connected line & sensor data",
        description:
          "Ingested machine, sensor, and line data across plants into one platform for real-time production and quality visibility.",
      },
      {
        title: "Vision-assisted quality inspection",
        description:
          "Computer-vision inspection on the line flagged defects early and fed results into quality workflows, with edge inference where latency mattered.",
      },
      {
        title: "End-to-end traceability",
        description:
          "Genealogy from raw material to finished part, so any defect could be traced-and audited-in minutes instead of days.",
      },
      {
        title: "OEE & quality dashboards",
        description:
          "Plant and group dashboards that made effectiveness and defect trends visible to operators and leadership alike.",
      },
    ],
    results: [
      { value: "-67%", label: "Defect escape rate to OEMs" },
      { value: "71% → 86%", label: "OEE across 6 plants" },
      { value: "3 days → 2 hours", label: "Traceability audit time" },
    ],
    stack: [
      "Industrial IoT",
      "Computer vision (PyTorch)",
      "Edge inference",
      "Kafka",
      "TimescaleDB",
      "React dashboards",
    ],
  },
  "pathology-lab-erp-patient-app": {
    slug: "pathology-lab-erp-patient-app",
    client: "A Healthcare Major from USA",
    industry: "Healthcare / Diagnostics",
    title: "Pathology Lab Network ERP & Digital Patient Engagement Platform",
    summary:
      "An ERP for a multi-site pathology lab network plus a patient engagement app-streamlining sample-to-result operations while giving patients a modern, self-serve experience.",
    metaTitle: "Pathology Lab ERP & Patient Engagement App - Case Study | Baaz",
    metaDescription:
      "How Baaz built a pathology lab network ERP and patient app: sample rejection 3.8% → 0.6%, result TAT improved 32%, 1.8M app downloads in 12 months.",
    challenge:
      "Across a network of labs, sample handling, accessioning, and result delivery ran on fragmented systems. Rejected samples meant re-collection and delays, turnaround times were inconsistent, and patients had no clean way to book, track, and receive results-eroding trust and repeat visits.",
    approach: [
      {
        title: "Sample-to-result lab ERP",
        description:
          "Unified accessioning, tracking, and quality controls across sites to cut rejections and standardise turnaround.",
      },
      {
        title: "Patient engagement app",
        description:
          "Booking, sample tracking, digital reports, and notifications in a privacy-aware app patients actually adopt.",
      },
      {
        title: "Workflow & TAT optimisation",
        description:
          "Reworked operational flows and SLAs so results moved faster without compromising quality.",
      },
      {
        title: "Hospital-grade architecture",
        description:
          "Privacy, access control, and reliability designed to healthcare standards from day one.",
      },
    ],
    results: [
      { value: "3.8% → 0.6%", label: "Sample rejection rate" },
      { value: "-32%", label: "Result turnaround time" },
      { value: "1.8M", label: "Patient app downloads in 12 months" },
    ],
    stack: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "HL7/FHIR-aware integration",
      "Role-based access",
      "AWS",
    ],
  },
  "corporate-mobility-crm-dispatch": {
    slug: "corporate-mobility-crm-dispatch",
    client: "A Travel Tech Growth Stage Company from UK",
    industry: "Travel & Mobility / Corporate CRM",
    title: "Corporate Mobility CRM & AI Fleet Dispatch Optimisation Platform",
    summary:
      "A corporate mobility CRM with AI-driven fleet dispatch-matching demand to supply in real time to lift utilisation, hit SLAs, and keep enterprise clients happy.",
    metaTitle: "Corporate Mobility CRM & AI Dispatch - Case Study | Baaz",
    metaDescription:
      "How Baaz built a corporate mobility CRM and AI fleet dispatch platform: fleet utilisation 68% → 84%, SLA compliance 88% → 97%, client NPS 71 → 86.",
    challenge:
      "Manual dispatch and a thin CRM meant idle vehicles in one zone while another ran short, SLA breaches on corporate contracts, and account teams flying blind on client health. Growth was capped by how much the ops team could juggle by hand.",
    approach: [
      {
        title: "Corporate mobility CRM",
        description:
          "A single view of corporate accounts, contracts, SLAs, and usage so account teams could act on real client health-not guesswork.",
      },
      {
        title: "AI fleet dispatch optimisation",
        description:
          "Real-time demand-supply matching and routing that lifted utilisation and cut idle time across the fleet.",
      },
      {
        title: "SLA monitoring & alerts",
        description:
          "Live SLA tracking with proactive alerts so breaches were prevented, not explained after the fact.",
      },
      {
        title: "Scalable operations",
        description:
          "Automation that let the ops team handle far more volume without proportional headcount.",
      },
    ],
    results: [
      { value: "68% → 84%", label: "Fleet utilisation" },
      { value: "88% → 97%", label: "SLA compliance" },
      { value: "71 → 86", label: "Client NPS" },
    ],
    stack: [
      "React",
      "Node.js",
      "Dispatch optimisation models",
      "PostgreSQL",
      "Real-time (WebSockets)",
      "AWS",
    ],
  },
};

export const selectedWorkSlugs = Object.keys(selectedWorkData);
