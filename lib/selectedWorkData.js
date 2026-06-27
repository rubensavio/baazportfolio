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
      "NRI Remittance & Investment Platform - Federal Bank | Baaz",
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
    industry: "eCommerce / Retail",
    anonymised: true,
    meta: [
      { label: "Industry", value: "eCommerce / Retail" },
      { label: "Category", value: "D2C Omnichannel" },
      { label: "Country", value: "India" },
    ],
    title:
      "Turning Browsing Into Gifting: An AI-Powered Omnichannel Storefront",
    summary:
      "A unified D2C storefront with an AI gifting engine - connecting online and in-store inventory and turning gift discovery into a personalised, high-converting journey.",
    metaTitle:
      "AI D2C Omnichannel Storefront & Gifting Engine | Baaz",
    metaDescription:
      "How Baaz built an AI-powered omnichannel D2C storefront and gifting engine for a lifestyle retailer: 29% of GMV from gifting, 2.3× AOV, inventory accuracy 78% → 96%, repeat purchase rate 14% → 27%.",
    clientOverview:
      "An India based lifestyle and home décor brand known for its quirky, India-inspired designs spanning 40+ product categories, sold across 100+ stores and a fast-growing direct-to-consumer (D2C) online channel.",
    challenge:
      "A large share of the brand's online demand was occasion-driven - birthdays, anniversaries, housewarmings, festive gifting - yet the existing storefront treated every visitor the same way, surfacing generic category grids instead of curated gift ideas. Shoppers browsing for a gift had no fast path from \"occasion and budget\" to \"the right product,\" which capped conversion and average order value. Behind the scenes, online and in-store inventory lived in disconnected systems, so the website regularly showed stock that had already sold out at a physical store, eroding customer trust and driving avoidable cancellations.",
    solution:
      "Baaz built a performant, modern D2C storefront for the brand on Next.js, anchored by an AI-driven gifting engine that curates personalised gift sets based on occasion, budget, and recipient profile. Online and offline inventory were unified into a single real-time layer, so stock visibility stayed accurate regardless of where a customer shopped.",
    approach: [
      {
        title: "D2C storefront on Next.js",
        description:
          "A storefront rebuilt on Next.js for speed and SEO performance, giving the brand a fast, modern foundation for its online channel.",
      },
      {
        title: "AI gifting recommendation engine",
        description:
          "Recommendation models matching occasion, budget, and recipient profile to curated gift sets - surfacing the right product at the right moment.",
      },
      {
        title: "Occasion-based product curator",
        description:
          "A curator that turns occasions - birthdays, anniversaries, festive gifting, and more - into the starting point of the shopping journey.",
      },
      {
        title: "Unified inventory management layer",
        description:
          "A single real-time inventory layer across online and offline (in-store) stock, so availability stayed accurate across every channel.",
      },
      {
        title: "Gift-wrapping & personalised messaging",
        description:
          "A gift-wrapping and personalised message module at checkout, built for the gifting use case the brand's buyers came for.",
      },
      {
        title: "CRM lifecycle journeys",
        description:
          "Post-purchase and repeat-gifting CRM journeys that keep customers engaged beyond a single occasion.",
      },
      {
        title: "Store analytics dashboard",
        description:
          "A store analytics dashboard giving merchandising and inventory teams visibility into demand and stock performance.",
      },
    ],
    results: [
      { value: "29%", label: "Of D2C GMV from the gifting engine in 8 months" },
      { value: "2.3×", label: "Higher AOV for gifting vs standard browsing" },
      { value: "78% → 96%", label: "Cross-channel inventory accuracy" },
      { value: "14% → 27%", label: "Online repeat purchase rate" },
    ],
    closingStatement:
      "By turning occasion and intent into the starting point of the shopping journey, not an afterthought, Baaz helped convert browsing into gifting at scale - while giving customers a storefront they could trust to reflect real stock.",
    stack: [
      "Next.js",
      "Python (recommendation ML)",
      "Node.js",
      "PostgreSQL",
      "Unicommerce API",
      "Braze",
      "Razorpay",
      "AWS",
    ],
  },
  "smart-factory-iot-traceability": {
    slug: "smart-factory-iot-traceability",
    client: "Minda Industries",
    industry: "Manufacturing / Industrial IoT",
    anonymised: false,
    meta: [
      { label: "Industry", value: "Manufacturing" },
      { label: "Category", value: "Industrial IoT" },
      { label: "Country", value: "India" },
    ],
    title:
      "From Shop Floor to OEM: A Smart Factory IoT & Quality Traceability Platform",
    summary:
      "An industrial IoT and traceability platform across six plants - connecting line data, AI defect detection, and end-to-end traceability so defects are caught before they reach OEMs.",
    metaTitle:
      "Smart Factory IoT & Quality Platform - Minda | Baaz",
    metaDescription:
      "How Baaz built a smart-factory IoT and quality traceability platform across 6 plants for Minda Industries: defect escape down 67%, first-pass yield 93.1% → 98.4%, OEE 71% → 86%, audit time 3 days → 2 hours.",
    clientOverview:
      "Minda Industries is one of India's leading auto-component manufacturers, supplying switches, sensors, horns, and locking systems to OEM companies.",
    challenge:
      "Across six assembly plants, production data lived in disconnected machine logs and paper travelers, which meant defects were typically caught after a batch had already moved downstream, or worse, after it had reached an OEM. Plant managers had no real-time view of line performance, so equipment slowdowns and quality drift went unnoticed until they showed up in yield reports days later. When an OEM raised a quality query, tracing a single component back to its raw material batch and shift required manually cross-referencing paper logs across plants, often taking days and straining the OEM relationship.",
    solution:
      "Baaz deployed an IoT sensor layer across all six assembly plants and built a real-time production monitoring platform with AI-based defect detection, giving plant teams visibility into quality and equipment performance as it happened. A QR/barcode-based traceability system was layered in to track every component from raw material to OEM delivery, backed by a compliance portal for OEM-facing reporting.",
    approach: [
      {
        title: "IoT sensor integration layer",
        description:
          "An IoT sensor integration layer across all 6 assembly plants, ingesting machine and line data into one platform for real-time visibility.",
      },
      {
        title: "Real-time production monitoring dashboard",
        description:
          "A real-time production monitoring dashboard giving plant teams live insight into line performance and quality as it happened.",
      },
      {
        title: "AI vision-based defect detection",
        description:
          "An AI vision-based defect-detection system that flagged defects on the line, catching quality issues at the source instead of in yield reports.",
      },
      {
        title: "End-to-end component traceability",
        description:
          "QR/barcode-based traceability tracking every component from raw material to OEM delivery, turning multi-day audits into minutes.",
      },
      {
        title: "OEM delivery compliance portal",
        description:
          "A compliance portal for OEM-facing reporting, so quality queries could be answered fast with traceable evidence.",
      },
      {
        title: "Plant manager mobile app",
        description:
          "A plant manager mobile app for on-the-floor visibility and alerts, putting real-time quality and equipment data in their hands.",
      },
    ],
    results: [
      { value: "-67%", label: "Defect escape rate to OEMs" },
      { value: "93.1% → 98.4%", label: "First-pass yield" },
      { value: "71% → 86%", label: "Overall Equipment Effectiveness (OEE), 6 plants" },
      { value: "3 days → 2 hours", label: "Traceability audit time" },
    ],
    closingStatement:
      "By putting real-time visibility and traceability directly into the hands of plant managers, Baaz helped Minda Industries catch quality issues at the source, protecting OEM relationships built over decades and turning audit days into audit hours.",
    stack: [
      "Python (YOLOv8, LSTM)",
      "OPC-UA",
      "Kafka",
      "InfluxDB",
      "React",
      "AWS IoT Core",
      "React Native",
    ],
  },
  "pathology-lab-erp-patient-app": {
    slug: "pathology-lab-erp-patient-app",
    client: "Healius Ltd",
    industry: "Healthcare / Diagnostics",
    anonymised: false,
    meta: [
      { label: "Industry", value: "Healthcare" },
      { label: "Category", value: "Diagnostics ERP" },
      { label: "Country", value: "Australia" },
    ],
    title:
      "From Sample to Result to Patient: A Connected Pathology Network ERP",
    summary:
      "A modern pathology lab network ERP plus a patient engagement app - connecting sample chain-of-custody, automated result delivery, and GP teleconsultation into one digital thread.",
    metaTitle:
      "Pathology Network ERP & Patient App - Healius | Baaz",
    metaDescription:
      "How Baaz built a connected pathology lab network ERP and patient app for Healius: sample rejection 3.8% → 0.6%, result TAT improved 32%, 1.8M app downloads, billing error rate 4.2% → 0.3%.",
    clientOverview:
      "Healius is one of Australia's largest healthcare companies, operating 2,500+ pathology collection centres, 60+ day hospitals, and radiology clinics serving more than 26 million patients annually.",
    challenge:
      "At Healius's scale, even small inefficiencies compound fast. Samples moving between thousands of collection centres and processing labs were tracked with limited chain-of-custody visibility, contributing to a rejection rate that meant patients were too often asked to be re-tested. Result delivery to referring GPs relied on manual handoffs that slowed turnaround, and patients had no self-service way to view results or follow up with their doctor — leaving a large share of demand for engagement and teleconsultation unmet. Billing, run across a sprawling network of centres and panels, carried an error rate that created downstream cost and reconciliation burden.",
    solution:
      "Baaz built a modern pathology lab network ERP covering patient scheduling, sample chain-of-custody tracking, automated result delivery, and billing — paired with a patient engagement app for result viewing and GP teleconsultation, so patients and referring doctors stayed connected throughout the diagnostic journey.",
    approach: [
      {
        title: "Pathology network ERP",
        description:
          "A network-wide ERP covering scheduling, sample tracking, and billing across thousands of collection centres and labs.",
      },
      {
        title: "Chain-of-custody IoT integration",
        description:
          "Chain-of-custody IoT integration for sample tracking, giving full visibility into samples moving between centres and processing labs.",
      },
      {
        title: "Automated result-delivery engine",
        description:
          "An automated result-delivery engine to referring GPs, replacing manual handoffs that slowed turnaround.",
      },
      {
        title: "Patient engagement app",
        description:
          "A patient engagement app (iOS/Android) for self-service result viewing, so patients could follow their own care journey.",
      },
      {
        title: "GP teleconsultation module",
        description:
          "A teleconsultation module connecting patients with their doctors directly, meeting previously unmet demand for engagement.",
      },
      {
        title: "Network operations analytics",
        description:
          "An analytics dashboard for network-wide operational visibility across centres, labs, and billing.",
      },
    ],
    results: [
      { value: "3.8% → 0.6%", label: "Sample rejection rate" },
      { value: "-32%", label: "Result turnaround time (TAT)" },
      { value: "1.8M", label: "Patient app downloads in 12 months" },
      { value: "28%", label: "GP referral conversion via app" },
      { value: "4.2% → 0.3%", label: "Billing error rate" },
    ],
    closingStatement:
      "By connecting sample, result, and patient into a single digital thread, Baaz helped Healius cut errors at scale while giving more than a million patients direct, self-service access to their own care journey.",
    stack: [
      "Java Spring Boot",
      "React",
      "React Native",
      "PostgreSQL",
      "HL7 FHIR",
      "AWS",
      "Twilio (telehealth)",
      "Firebase",
    ],
  },
  "corporate-mobility-crm-dispatch": {
    slug: "corporate-mobility-crm-dispatch",
    client: "Leading Corporate Mobility Provider from India",
    industry: "Travel & Tourism / Corporate Mobility",
    anonymised: true,
    meta: [
      { label: "Industry", value: "Travel & Tourism" },
      { label: "Category", value: "Corporate Mobility CRM" },
      { label: "Country", value: "India" },
    ],
    title:
      "Smarter Dispatch, Stronger SLAs: An AI Fleet Optimisation Platform for a Leading Corporate Mobility Provider",
    summary:
      "A Salesforce-integrated corporate mobility CRM with AI-driven fleet dispatch - giving account managers a 360° view of every client while AI matches drivers to bookings in real time to lift utilisation and hit SLAs.",
    metaTitle:
      "AI Fleet Optimisation & Corporate Mobility CRM | Baaz",
    metaDescription:
      "How Baaz built a Salesforce-integrated corporate mobility CRM and AI fleet dispatch platform: driver idle time down 29%, fleet utilisation 68% → 84%, SLA compliance 88% → 97%, client NPS 71 → 86.",
    clientOverview:
      "Our client is one of India's largest corporate chauffeur and car rental companies, serving 500+ corporate clients — including several Fortune 500 companies — with a fleet of 10,000+ vehicles across 150+ cities. (Client name withheld for confidentiality.)",
    challenge:
      "Running a fleet at this scale meant account managers were tracking client travel spend, SLA compliance, and driver performance across spreadsheets and disconnected systems, with no single view of how each corporate account was actually performing. Driver-to-booking assignment was largely manual, leaving vehicles idle in one part of a city while bookings went unfulfilled in another. As the fleet and client base grew, SLA compliance increasingly hinged on individual account managers' memory and effort rather than a system built to catch gaps before they became client escalations.",
    solution:
      "Baaz built a Salesforce-integrated corporate mobility CRM giving account managers a 360° view of client travel spend, SLA compliance, and driver performance, paired with an AI dispatch optimisation engine that matches drivers to bookings in real time to minimise idle time and cost.",
    approach: [
      {
        title: "Salesforce-integrated mobility CRM",
        description:
          "A corporate mobility CRM integrated with Salesforce, unifying client accounts, contracts, and travel spend in one place.",
      },
      {
        title: "Account manager 360° dashboard",
        description:
          "An account manager dashboard with 360° client visibility, so teams could act on real account health instead of guesswork.",
      },
      {
        title: "AI dispatch optimisation engine",
        description:
          "An AI dispatch optimisation engine for driver-to-booking assignment, matching supply to demand in real time across cities.",
      },
      {
        title: "Driver performance scoring",
        description:
          "Driver performance scoring that surfaced quality and reliability signals across the fleet.",
      },
      {
        title: "SLA compliance tracker",
        description:
          "An SLA compliance tracker that caught gaps before they became client escalations, not after.",
      },
      {
        title: "Corporate client self-booking portal",
        description:
          "A self-booking portal letting corporate clients raise and manage their own bookings directly.",
      },
      {
        title: "Invoice & reconciliation module",
        description:
          "An invoice and reconciliation module that streamlined billing across a sprawling corporate client base.",
      },
    ],
    results: [
      { value: "-29%", label: "Driver idle time" },
      { value: "68% → 84%", label: "Fleet utilisation" },
      { value: "88% → 97%", label: "Corporate client SLA compliance" },
      { value: "2.1×", label: "Account manager productivity (clients managed per AM)" },
      { value: "71 → 86", label: "Client NPS" },
    ],
    closingStatement:
      "By giving account managers a single, real-time view of every client relationship and letting AI handle the moment-to-moment dispatch decisions, Baaz helped this corporate mobility leader turn a manually managed fleet into a measurably more reliable, more profitable one.",
    stack: [
      "Salesforce CRM",
      "Python (OR-Tools, ML dispatch)",
      "React",
      "React Native (driver app)",
      "Node.js",
      "PostgreSQL",
      "Google Maps",
      "Kafka",
      "AWS",
    ],
  },
};

export const selectedWorkSlugs = Object.keys(selectedWorkData);
