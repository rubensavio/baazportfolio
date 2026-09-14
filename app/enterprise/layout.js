import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/enterprise"),
  title: "Enterprise Software Development & Integrations | Baaz",
  description:
    "Enterprise software development for organizations worldwide-internal platforms, legacy ERP and CRM integrations, phased delivery, and outsourcing-ready engineering teams. Since 2018-talk to Baaz.",
  openGraph: {
    title: "Enterprise Software Development & Integrations | Baaz",
    description:
      "Platforms, integrations, and transformation-enterprise product engineering from Baaz since 2018. Book a discovery call.",
    url: `${baseUrl}/enterprise`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Enterprise custom software development - Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Development & Integrations | Baaz",
    description:
      "Custom enterprise software, integrations, and phased delivery for global teams. Book a call to scope your programme.",
    images: [ogImage],
  },
};

const enterpriseFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What enterprise software services does Baaz provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baaz provides enterprise software development including internal platform builds, legacy ERP and CRM integrations, API development, process automation, and outsourcing-ready engineering teams. Engagements are scoped for phased delivery to reduce risk.",
      },
    },
    {
      "@type": "Question",
      name: "How does Baaz handle legacy system integrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baaz uses API-first integration strategies — building middleware, event-driven connectors, and ETL pipelines — to modernise legacy ERP, CRM, and data systems without requiring full replacement. This keeps business continuity intact during transformation.",
      },
    },
    {
      "@type": "Question",
      name: "Does Baaz offer dedicated development teams for enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Baaz provides dedicated, outsourcing-ready engineering teams that embed into client workflows. Teams are structured around product squads with designers, engineers, and QA, operating across time zones.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Baaz serve with enterprise software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baaz serves enterprises in manufacturing, healthcare, banking, insurance, logistics, real estate, and e-commerce. Each solution is tailored to industry-specific compliance, scale, and workflow requirements.",
      },
    },
  ],
};

export default function EnterpriseLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(enterpriseFaqSchema),
        }}
      />
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Enterprise", url: "/enterprise" },
        ]}
      />
      {children}
    </>
  );
}
