import { caseStudyHubItems } from "./caseStudiesData";
import {
  BRAND_POSITIONING_COMBINED,
  BRAND_SCOPE_LINE,
} from "./brandPositioning";

export const HOME_MARQUEE_ITEMS = [
  "Product Strategy",
  "UI/UX Design",
  "Full-Stack Engineering",
  "Mobile Apps",
  "AI Development",
  "FinTech",
  "Healthcare",
  "Construction Tech",
  "Retail",
  "Enterprise SaaS",
  "React & Next.js",
  "Node.js",
];

// Home "What we do" services double as the nav "What we do" groups.
// `href` is the group's own page; `children` are the existing technology
// pages that fall under it (the subset shown in the nav dropdown).
export const HOME_SERVICES = [
  {
    num: "01",
    title: "Application modernization",
    href: "/technologies/application-modernization",
    children: [
      { label: "Web Development", href: "/technologies/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app" },
      { label: "Website & CMS", href: "/technologies/website-cms" },
      {
        label: "Database Management",
        href: "/technologies/database-management",
      },
    ],
    description:
      "Embracing AI is now crucial for enterprises globally to leverage the numerous opportunities it offers. Enterprise Agile, Low-code/No-code Mainframe Modernization, Open Source.",
  },
  {
    num: "02",
    title: "Digital process automation",
    href: "/technologies/digital-process-automation",
    children: [{ label: "Agentic AI", href: "/technologies/agentic-ai" }],
    description:
      "Automate your business processes leveraging cloud first strategies for faster decision & improved operational.",
  },
  {
    num: "03",
    title: "Digital supply chain",
    href: "/technologies/digital-supply-chain",
    children: [],
    description:
      "Digital Supply chain by implementing best of breed technologies and practices, proof of concepts, and the critical design-thinking led approaches to cope and respond to the disruption.",
  },
  {
    num: "04",
    title: "ERPs & CRMs",
    href: "/erp",
    children: [],
    description:
      "Bring in senior technologists to solve your hardest business problems right from AI strategy, architecture reviews, digital transformation, and beyond.",
  },
  {
    num: "05",
    title: "Vision intelligence platform",
    href: "/technologies/vision-intelligence",
    children: [{ label: "AI/ML Models", href: "/technologies/ai-ml-models" }],
    description:
      "Leveraging computer vision to solve some of the most complex problems in industries like manufacturing, supply chain, logistics, warehouse management among others.",
  },
  {
    num: "06",
    title: "DevOps & Cloud Infrastructure",
    href: "/technologies/devops-cloud",
    children: [],
    description:
      "End-to-end cloud architecture, CI/CD pipelines, and infrastructure management on AWS and Azure. Built for scale, security, and zero downtime.",
  },
];

// Shared "Industries we serve" link list - used by both the nav and footer
// so they stay identical. Each points at its dedicated page.
export const INDUSTRIES_WE_SERVE = [
  { label: "Manufacturing", href: "/erp/manufacturing-companies" },
  { label: "Banking & Finance", href: "/industry/fintech" },
  { label: "Retail & eCommerce", href: "/industry/retail" },
  { label: "Healthcare", href: "/industry/healthcare" },
  { label: "Real estate", href: "/industry/construction" },
  { label: "Enterprise AI Transformation", href: "/services/ai-solution" },
];

export const HOME_WORK_ITEMS = caseStudyHubItems
  .filter((item) => item.filterKey === "case-study")
  .slice(0, 4)
  .map((item, index) => ({
    num: String(index + 1).padStart(2, "0"),
    title: item.title,
    meta: item.industryTags,
    href: item.href,
  }));

export const HOME_STATS_HERO = [
  {
    value: "$2",
    suffix: " Billion",
    label: "Value of business generated for customers",
    suffixClass: "stat-suffix-sm",
  },
  {
    value: "$150",
    suffix: " Million",
    label: "Saved in annual losses & costs for customers",
    suffixClass: "stat-suffix-sm",
  },
  { value: "26", suffix: "+", label: "Countries served" },
];

export const HOME_STATS_DEEP = [
  {
    value: "40",
    suffix: "%",
    label: "Faster than traditional software delivery timelines",
  },
  { value: "100", suffix: "%", label: "Post sales customer support" },
  { value: "10", suffix: "", label: "Industries serviced" },
];

export const HOME_STATS = [...HOME_STATS_HERO, ...HOME_STATS_DEEP];

export const CALENDAR_URL = "/book-call";

export const HOME_HERO = {
  headline:
    "In today’s hyper evolving world of AI, building software is no longer a novelty, but building it with a <strong>taste</strong> is<strong>.</strong>",
  sub: `Baaz is a ${BRAND_POSITIONING_COMBINED.toLowerCase()} ${BRAND_SCOPE_LINE}, shipping production-grade web and mobile products since 2018.`,
  ctas: [{ label: "Book a 30-min call", href: CALENDAR_URL, style: "primary" }],
  stats: HOME_STATS_HERO,
};

export const HOME_MID_CTA = {
  line: "Your numbers could be next.",
  sub: "Tell us your hardest problem - we'll tell you how we'd solve it, how fast, and what it'll cost.",
  button: { label: "Book a 30-min call", href: CALENDAR_URL },
};

export const HOME_PHILOSOPHY = {
  label: "Who we are",
  heading: "8 Years. 3 Continents. One standard taste & speed.",
  paragraphs: [
    "Founded in 2018 in Bangalore by Chitresh Parihar, Baaz has grown into a full-stack technology partner trusted by global enterprises. We combine global product thinking with India's engineering depth to deliver outcomes at scale.",
    "Backed by eminent VCs from the US, Middle East and India. Our leadership team includes former builders from enterprises & startups who chose to build something extraordinary softwares.",
  ],
};

export const HOME_INDUSTRIES = [
  {
    num: "01",
    title: "Manufacturing",
    description:
      "Intelligent automation and supply chain optimization that eliminates inefficiency at enterprise scale.",
    tags: "Predictive maintenance, Supply chain intelligence",
  },
  {
    num: "02",
    title: "Banking & Finance",
    description:
      "Secure, compliant, scalable fintech infrastructure for the world's leading financial institutions.",
    tags: "Fraud detection ML models, Real-time trxn processing",
    href: "/industry/fintech",
  },
  {
    num: "03",
    title: "Retail & eCommerce",
    description:
      "Omnichannel commerce platforms, video selling, and personalization engines that convert.",
    tags: "Digital and In-store shopping experience tech",
    href: "/industry/retail",
  },
  {
    num: "04",
    title: "Healthcare",
    description:
      "AI-powered clinical decision tools and patient experience platforms built to hospital-grade standards.",
    tags: "Diagnostic assistance systems, Workflow automation",
    href: "/industry/healthcare",
  },
  {
    num: "05",
    title: "Real estate",
    description:
      "Full-stack ERP platforms that connect builders, contractors, and project managers on one system.",
    tags: "End-to-end ERP systems, Custom CRM platforms",
    href: "/industry/construction",
  },
  {
    num: "06",
    title: "Enterprise AI Transformation",
    description:
      "Upgrade existing technology stacks with production-grade AI - RAG, computer vision, NLP and more.",
    tags: "LLM integrations & RAG, Computer vision systems",
    href: "/services/ai-solution",
  },
];

export const HOME_TECH_DEPTH = {
  heading: "Technology depth",
  sub: "Every day evolving capabilities.\nZero dependency on shortcuts.",
  footer:
    "SOC 2 compliant processes, data residency options, and enterprise-grade security protocols. Your data stays protected throughout every engagement - by design, not as an afterthought.",
  categories: [
    {
      title: "Mobile",
      items: "React native, Flutter, Swift(iOS) and Kotlin(Android)",
    },
    {
      title: "Frontend",
      items: "React.js, Next.js, Vue.js, Angular, TypeScript, Tailwind CSS",
    },
    {
      title: "Backend",
      items: "Go Lang, Node.js, Django, Express, Ruby on Rails",
    },
    {
      title: "AI / ML Stack",
      items:
        "Open AI API, Claude API, Gemini API, Groq, LangChain, LlamaIndex, HuggingFace, Vision AI and LLM Ops",
    },
    {
      title: "DevOps and Cloud",
      items: "AWS, Azure, Docker, Kubernetes, Jenkins, CI/CD",
    },
    {
      title: "Vector & ML Libraries",
      items: "Pinecone, FAISS, Weaviate, TensorFlow, PyTorch, NumPy / Pandas",
    },
    {
      title: "Databases",
      items: "PostgreSQL, MySQL, MongoDB, Firebase, Kafka & Redis",
    },
    {
      title: "eCommerce",
      items: "Shopify / Liquid, WooCommerce, WixCommerce, Prestashop",
    },
    {
      title: "Workflow & Orchestration",
      items: "AirFlow, Jupyter",
    },
  ],
};

export const HOME_IMPACT = {
  heading: "Impact stories",
  sub: "We measure success in outcomes, not deliverables.",
  stories: [
    {
      industry: "Manufacturing",
      client: "Global Manufacturing Enterprise",
      headline: {
        value: "58%",
        label: "reduction in tyre-related breakdowns across enrolled fleets",
      },
      metrics: [
        {
          value: "€3,200",
          label: "avg tyre replacement savings per truck, per year",
        },
        {
          value: "4.1%",
          label: "fuel efficiency gained via optimal pressure maintenance",
        },
        { value: "81", label: "fleet manager NPS" },
      ],
    },
    {
      industry: "Financial Services",
      client: "Leading global financial services firm",
      headline: { value: "85%", label: "improvement in fraud detection rate" },
      metrics: [
        { value: "0.4%", label: "false-positive rate after rollout" },
        { value: "58%", label: "faster AML case resolution" },
        {
          value: "Zero",
          label: "regulatory audit findings in monitored segments",
        },
      ],
    },
    {
      industry: "Retail",
      client: "Europe's retail major",
      headline: {
        value: "3.6×",
        label: "higher coupon redemption with personalisation vs broadcast",
      },
      metrics: [
        {
          value: "$54",
          label: "incremental revenue per loyalty household, per year",
        },
        { value: "31%", label: "improvement in promotional ROI" },
        { value: "17%", label: "churn reduction in targeted segments" },
      ],
    },
    {
      industry: "Healthcare",
      client: "Global healthcare network",
      headline: { value: "87%", label: "theatre utilisation, up from 69%" },
      metrics: [
        {
          value: "1.1%",
          label: "elective surgery cancellation rate, down from 6.2%",
        },
        {
          value: "14 hrs",
          label: "scheduling coordinator time saved per week",
        },
        { value: "28%", label: "reduction in patient surgical wait time" },
      ],
    },
  ],
};

export const HOME_WHY_BAAZ = {
  heading: "Why baaz",
  sub: "Four reasons why the world's best companies choose to work with us.",
  reasons: [
    {
      num: "01",
      title: "Taste",
      paragraphs: [
        "Most software gets built. Ours gets crafted with taste.",
        "We've built 7 products of our own - which means we bring a founder's eye to every client engagement. We see what users will feel, not just what developers can ship.",
      ],
    },
    {
      num: "02",
      title: "Speed",
      paragraphs: [
        "We deliver 40% faster than traditional timelines. Not by cutting corners - because we've done this before.",
        "No figuring it out on your time. From first call to first delivery in under two weeks. Every month of delay has a cost - and that cost is yours.",
      ],
    },
    {
      num: "03",
      title: "Continuity",
      paragraphs: [
        "Great software isn't a moment. It's a commitment.",
        "We show up beyond the delivery milestone. 100% post-sales support. No knowledge loss, no handoff gaps. Our clients don't onboard new vendors every 18 months. They deepen a partnership.",
      ],
    },
    {
      num: "04",
      title: "Impact",
      paragraphs: [
        "We don't count features & bill-able hours. We count outcomes.",
        "$2B in business value generated. $150M saved in annual costs. One question matters most: what measurably improves in your business when this ships?",
      ],
    },
  ],
};

export const HOME_QUOTE = {
  text: "Baaz delivered beyond expectations. Their team truly understands product development and business needs. We launched faster and smarter with their help.",
  attr: "Ravi Verma - Digital Marketing Specialist",
};

export const HOME_CTA = {
  heading: "Let’s build together",
  leftLines: [
    "Tell us what you'd like to build.",
    "We'll tell you how fast we can ship it and what it'll cost to the rupee.",
  ],
  contact: {
    title: "Get in touch!",
    addresses: [
      {
        label: "India",
        text: "WeWork, RMZ Latitude, Bellary Road, Hebbal, Bengaluru 560024",
      },
      {
        label: "US",
        text: "30 N Gould St Ste R, Sheridan, Sheridan County, WY 82801",
      },
    ],
    phone: "+91-9986255177",
    email: "chitresh@baaz.pro",
    role: "Founder & CEO",
    website: "https://baaz.pro",
  },
  reassurance: "Response within 24 hours · NDA-friendly · No obligation",
  briefHref: "/get-in-touch",
  callHref: CALENDAR_URL,
};
