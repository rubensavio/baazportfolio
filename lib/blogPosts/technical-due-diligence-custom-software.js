/** Technical due diligence guide — imported by blogData.js */
export const technicalDueDiligenceCustomSoftwarePost = {
  slug: "technical-due-diligence-custom-software",
  datePublished: "2026-03-01",
  dateModified: "2026-04-06",
  author: {
    name: "Chitresh",
    personalUrl: "https://baaz.pro/about",
    url: "https://in.linkedin.com/company/baazpro",
    jobTitle: "Co-founder & Engineering Lead",
    sameAs: ["https://in.linkedin.com/company/baazpro"],
    knowsAbout: [
      "Custom Software Development",
      "Enterprise Product Engineering",
      "MVP Development",
      "Digital Transformation",
    ],
  },
  contentType: "Guide",
  metaTitle: "Technical Due Diligence for Custom Software & Vendors | Baaz",
  metaDescription:
    "Technical due diligence checklist: IP, repos, security, dependencies, team access & continuity—what investors and buyers should verify before signing or funding.",
  title:
    "Technical Due Diligence for Custom Software: What Investors and Buyers Should Actually Check",
  directAnswer:
    "Solid technical due diligence verifies you own the code and accounts, the system is buildable and operable by someone other than the original vendor, and security and compliance claims hold up under evidence—not under slide decks.",
  intro:
    "Whether you are a founder raising a round, a corporate venture team reviewing an acquisition, or a procurement group renewing a seven-figure statement of work, the central question is the same: if the team in front of us disappeared tomorrow, could we still build and operate this product? The mistake is treating diligence as a code-review beauty pageant. What actually matters is a short list of verifiable facts: repository and cloud access, IP assignment, dependency and secret hygiene, deployment path, on-call reality, and documentation that lives in repos rather than in someone's head. This guide covers what to ask, what strong answers look like, and where buyers are most often caught off-guard. It reflects how Baaz prepares engineering artefacts for serious buyers, and how we advise clients evaluating new software partners—without turning diligence into a months-long paper chase.",
  sections: [
    {
      heading: "Why diligence is a continuity exercise, not a scorecard",
      body: [
        "A codebase can look messy yet be salvageable; it can look polished yet hide deployment fragility or licensing landmines. Diligence should reduce continuity risk: ownership, operability, and truth about production.",
        "If you only skim architecture diagrams, you learn how vendors sell. If you verify access, runbooks, and incident history, you learn how they ship.",
      ],
    },
    {
      heading: "Ownership and IP: what must be in writing",
      body: [
        'Confirm contracts assign work product to your entity, including contributions from subcontractors. Beware "license to use" language that does not convey ownership of custom code.',
        "List third-party and open-source components with licenses compatible with your commercial plans. GPL-style obligations in the wrong layer can constrain distribution models.",
        "Capture who holds domain names, app store accounts, analytics properties, and DNS—these are often forgotten until a breakup.",
      ],
    },
    {
      heading: "Access you should demand (and test)",
      body: [
        "Read access to source control with history, not a ZIP export. You want to see branching, review culture, and release tags—not a sanitized snapshot.",
        "Access to cloud accounts or a documented handover path: which accounts own production, who can create IAM users, and whether MFA is enforced.",
        'CI/CD pipelines: can a neutral engineer run a build and deploy to a non-production environment following written steps? If the answer is "only Raj knows," you have a bus-factor problem.',
      ],
    },
    {
      heading: "Security and data handling: evidence, not adjectives",
      body: [
        "Request recent dependency scan results, penetration test summaries if applicable, and how secrets are stored (never committed in git). Ask for subprocessors and data-flow diagrams for personal or regulated data.",
        "Verify backup and restore were tested on a schedule you find credible—not assumed. Untested backups are wishes.",
        "Check authentication and authorisation boundaries: admin APIs, tenant isolation tests, and audit logs for sensitive actions.",
      ],
    },
    {
      heading: "Architecture and technical debt: questions that surface truth",
      body: [
        'Ask for a current architecture diagram and a list of known technical debt with business impact—not a generic "we have some debt" shrug.',
        "Identify single points of failure: one server, one founder with root, one opaque integration. Ask what happens when that dependency fails.",
        "Understand data migration and schema evolution: how are database changes shipped safely? Missing migration discipline predicts production incidents.",
      ],
    },
    {
      heading: "Delivery hygiene: how you know the team can keep shipping",
      body: [
        "Look for automated tests on critical paths, PR reviews, and trunk-based or short-lived branch habits. Absence does not always doom a project, but it raises the cost of every future hire.",
        "Inspect observability: structured logs, metrics, tracing hooks, and alerting tied to user-impacting symptoms—not only CPU graphs.",
        "Review incident history for the last six to twelve months: frequency, severity, time to restore, and post-incident changes. Mature teams learn in public; opaque teams repeat failures quietly.",
      ],
    },
    {
      heading: "Vendor-specific diligence: continuity if you switch partners",
      body: [
        "Ask how knowledge is documented for handover: runbooks, environment inventory, architecture decision records, and backlog hygiene.",
        "Clarify escrow or exit terms if the vendor hosts critical artefacts. Escrow is rarely exercised, but forcing the conversation surfaces who actually holds the keys.",
        "For fixed-scope contracts, verify milestone definitions map to deployable increments—not document deliverables that never touched production.",
      ],
    },
    {
      heading: "Red flags that deserve a pause",
      body: [
        "You cannot get independent git access after an NDA. Serious builders do not hide the repository from paying owners.",
        "No staging environment or staging diverges wildly from production. You will pay for that gap in incidents.",
        'Undocumented environment variables and "tribal" deploy steps. That is operational debt compounding weekly.',
        "Inability to explain who is on call and how outages are declared. If production matters, someone answers the pager.",
      ],
    },
    {
      heading: "A practical half-day diligence agenda",
      body: [
        "Morning: legal/IP pass with counsel, repository access verification, dependency and license export. Afternoon: walkthrough of deploy pipeline, staging demo, incident and backlog review with engineering leads.",
        "End with a written findings list: blockers, mitigations, and costed remediation options. Numbers beat vibes when boards ask what you learned.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/blog/how-to-choose-software-development-partner",
      label: "How to choose a software development partner",
    },
    {
      href: "/blog/how-to-switch-software-development-vendors",
      label: "How to switch software development vendors",
    },
    { href: "/enterprise", label: "Enterprise software development at Baaz" },
  ],
  faqs: [
    {
      question: "Who should run technical due diligence?",
      answer:
        "A senior engineer or engineering leader independent of the vendor—often supported by your CTO, a fractional technical advisor, or a diligence firm for larger transactions. Legal counsel should review IP clauses; engineers should verify access, build, deploy, and security evidence.",
    },
    {
      question: "How long does technical due diligence take?",
      answer:
        "A focused pass on a single product can take a few days when access and documentation are ready. Complex portfolios, regulated environments, or adversarial vendors stretch timelines. Front-load access requests; waiting for credentials burns most schedules.",
    },
    {
      question:
        "What is the difference between code quality review and due diligence?",
      answer:
        "Code quality review asks whether the implementation is elegant. Due diligence asks whether you can own, operate, and evolve the system under realistic personnel changes. Overlap exists, but diligence prioritises continuity, security, and legal clarity over style preferences.",
    },
    {
      question: "Should diligence include a penetration test?",
      answer:
        "For products handling sensitive data or facing enterprise security questionnaires, structured testing or a recent third-party assessment is appropriate. For early MVPs, dependency scanning, secret scanning, and threat modelling may suffice until risk profile rises. Match depth to data classification and contractual obligations.",
    },
    {
      question: "What if the vendor refuses to share repository access?",
      answer:
        "Treat it as a negotiation or walk-away signal. Without verifiable engineering artefacts, you cannot assess continuity or validate security claims. Alternatives include paid technical spikes under strict confidentiality or escrow arrangements— but opacity rarely ages well.",
    },
  ],
};
