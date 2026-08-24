import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/erp"),
  title: "ERP Development for Enterprises | Baaz",
  description:
    "Custom ERP development for enterprises worldwide-manufacturing, healthcare, banking, insurance, logistics, construction, real estate & more. Phased ERP implementation with Baaz.",
  openGraph: {
    title: "ERP Development for Global Enterprises | Baaz",
    description:
      "ERP development for global enterprises-custom ERP, integrations, and industry playbooks from manufacturing to healthcare and real estate.",
    url: `${baseUrl}/erp`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "ERP solutions by industry from Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Development for Enterprises | Baaz",
    description:
      "Custom ERP & implementation for global teams-manufacturing, healthcare, logistics, banking. Talk to Baaz engineers.",
    images: [ogImage],
  },
};

const erpFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is ERP development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP (Enterprise Resource Planning) development is the process of building or customizing software that integrates core business processes—finance, HR, supply chain, manufacturing, and more—into a single unified system. Baaz builds custom ERP solutions tailored to each client's industry and workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How long does ERP development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP development timelines vary by scope. A phased implementation typically starts with a core module (8–16 weeks) and expands iteratively. Baaz uses a phased approach to deliver value quickly while reducing risk.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Baaz build ERP for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baaz builds ERP systems for manufacturing, healthcare, banking, insurance, logistics, construction, and real estate. Each solution is tailored with industry-specific workflows and compliance requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can Baaz integrate a custom ERP with existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Baaz designs ERP solutions with open APIs and integration layers that connect to existing tools such as CRMs, accounting software, payment gateways, and third-party data sources.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom ERP development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom ERP costs depend on complexity, number of modules, integrations, and team size. Baaz offers phased engagements so enterprises can start with a scoped MVP and expand over time. Book a free discovery call to get an estimate.",
      },
    },
  ],
};

export default function ErpSegmentLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(erpFaqSchema) }}
      />
      {children}
    </>
  );
}
