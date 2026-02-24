export const industryData = {
  fintech: {
    slug: "fintech",
    relatedServices: [
      { slug: "ai-solution", label: "AI Development" },
      { slug: "web-development", label: "Custom Software" },
    ],
    title: "Software for FinTech Companies",
    metaTitle: "Software for FinTech Companies | Baaz — Enterprise Product Engineering",
    metaDescription:
      "We build secure, compliant software for FinTech. Core banking, payments, lending—digital products that scale. Since 2018.",
    intro:
      "FinTech runs on trust and speed. We build software that handles real money and real users—secure, scalable, and built for the way regulators and ops teams actually work. From core banking and payments to lending and wealth tech, we've helped startups and enterprises ship products that don't break under load.",
    sections: [
      {
        heading: "Why FinTech teams work with us",
        body: [
          "We've built systems that process transactions, manage risk, and stay compliant. We understand both the product side and the technical constraints: strong auth, audit trails, performance under load. We deliver in phases so you can iterate with real users and regulators—no over-promising on timelines.",
          "Launching something new or modernising legacy? We work as an extension of your team. Clear communication, transparent pricing, and code you own and maintain.",
        ],
      },
      {
        heading: "What we build for FinTech",
        body: [
          "Custom software for payments, lending, core banking modules, and internal tools. We integrate with existing cores and third-party APIs, and build dashboards and workflows that ops and compliance teams actually use.",
          "Exploring AI for fraud detection, automation, or customer support? We scope, build, and deploy in a way that fits your risk and compliance framework.",
        ],
      },
    ],
  },
  construction: {
    slug: "construction",
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "mobile-app", label: "Mobile App Development" },
    ],
    title: "Construction Tech Development",
    metaTitle: "Construction Tech Development | Baaz — Enterprise Product Engineering",
    metaDescription:
      "Custom software for construction. Project management, field apps, procurement. Built for the way construction teams work.",
    intro:
      "Construction runs on coordination—office, site, supply chain. We build software that fits how your teams actually work: project and resource management, field apps, procurement, and reporting that cut rework and delays.",
    sections: [
      {
        heading: "Software built for construction workflows",
        body: [
          "We’ve worked with teams who needed better visibility into projects, resources, and costs. We start with the workflows that hurt the most—delays, double entry, missing updates—and build tools that fix them without forcing a full ERP replacement.",
          "Web and mobile apps that work offline where connectivity is poor, sync when back online, and plug into your existing systems where it makes sense.",
        ],
      },
      {
        heading: "From idea to rollout",
        body: [
          "We help you go from idea to a product your teams will use. Discovery to align on scope, iterative design and development, and a rollout plan that includes training and support. We focus on adoption, not just delivery.",
          "If you’re in construction tech and want a partner who can ship and maintain custom software, we’d like to hear from you.",
        ],
      },
    ],
  },
  retail: {
    slug: "retail",
    relatedServices: [
      { slug: "web-development", label: "Custom Software" },
      { slug: "ui-ux-design", label: "UI/UX Design" },
    ],
    title: "Retail Digital Transformation",
    metaTitle: "Retail Digital Transformation | Baaz — Enterprise Product Engineering",
    metaDescription:
      "We help retailers transform with custom software: e-commerce, omnichannel, inventory, and in-store tech. Outcomes that drive sales and efficiency.",
    intro:
      "Retail is omnichannel, data-heavy, and under margin pressure. We build software that connects online and in-store, improves inventory and operations, and gives customers a consistent experience. We focus on outcomes—revenue, efficiency, speed to market.",
    sections: [
      {
        heading: "How we support retail transformation",
        body: [
          "We start with your goals: higher conversion, better inventory accuracy, faster checkout, or a unified view of customer and stock. Then we design and build the products and integrations that get you there, without locking you into one vendor or a legacy stack.",
          "E-commerce, marketplaces, in-store tools, POS integrations, internal dashboards. Modern, maintainable tech so you can iterate as your business and channels evolve.",
        ],
      },
      {
        heading: "Why retailers choose Baaz",
        body: [
          "Product strategy, UI/UX design, and engineering under one roof. A team that thinks about user experience and business metrics, not just features. We’ve helped brands launch and scale digital channels and we’re comfortable with tight timelines and clear KPIs.",
          "If you’re planning a digital transformation or a specific product? We can help you scope it, build it, and run it.",
        ],
      },
    ],
  },
  healthcare: {
    slug: "healthcare",
    relatedServices: [
      { slug: "ai-solution", label: "AI Development" },
      { slug: "ui-ux-design", label: "UI/UX Design" },
    ],
    title: "Healthcare Software Development",
    metaTitle: "Healthcare Software Development | Baaz — Enterprise Product Engineering",
    metaDescription:
      "We build healthcare software that's secure, compliant, and easy to use. Patient and provider portals, clinical tools, operational systems. Since 2018.",
    intro:
      "Healthcare software has to be reliable, secure, and easy for clinicians and patients. We build applications that fit into existing workflows and compliance requirements—patient and provider portals, clinical and operational tools, and integrations with EHRs and other systems.",
    sections: [
      {
        heading: "Healthcare software that fits your workflow",
        body: [
          "We work with healthcare organisations and digital health startups who need custom software: portals, scheduling, care pathways, and internal tools. We design for real users—clinicians, admins, and patients—and build with security and privacy in mind from day one.",
          "We're used to working within regulatory and governance constraints. We document decisions, follow secure development practices, and deliver in a way that supports audits and future handover.",
        ],
      },
      {
        heading: "Why healthcare teams work with us",
        body: [
          "We don’t sell a single product—we build what you need. A patient-facing app, a clinician dashboard, or an operational system that cuts admin load. Clear scope, iterative delivery, and a focus on adoption and outcomes.",
          "Have a healthcare software project in mind? We'd love to hear about it.",
        ],
      },
    ],
  },
};

export const industrySlugs = Object.keys(industryData);
