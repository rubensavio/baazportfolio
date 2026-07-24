import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/work1"),
  title: "AI Quality Automation on Manufacturing ERP | Baaz",
  description:
    "Manufacturing ERP plus an AI vision layer on the line: defect detection, QA workflows, and production rollout-how Baaz extended an existing stack with measurable quality outcomes.",
  openGraph: {
    title: "AI Quality Automation on Manufacturing ERP | Baaz",
    description:
      "Computer vision and QA automation integrated with manufacturing ERP-not a rip-and-replace. Approach, stack, and factory-floor outcomes in this Baaz case study.",
    url: `${baseUrl}/work1`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Manufacturing AI defect detection case study - Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Quality Automation on Manufacturing ERP | Baaz",
    description:
      "AI defect detection layered on manufacturing ERP: computer vision, QA, and production rollout-outcomes and approach from Baaz’s enterprise case study.",
    images: [ogImage],
  },
};

const articleUrl = `${baseUrl}/work1`;
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${articleUrl}/#article`,
  headline: "AI Quality Automation on Manufacturing ERP",
  description: metadata.description,
  url: articleUrl,
  image: [`${baseUrl}${ogImage}`],
  articleSection: "Case Study",
  author: { "@id": `${baseUrl}/#organization` },
  publisher: {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Baaz",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/assets/Logo.png`,
      width: 600,
      height: 60,
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  isPartOf: { "@id": `${baseUrl}/#website` },
};

export default function Work1Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Manufacturing AI on ERP", url: "/work1" },
        ]}
      />
      {children}
    </>
  );
}
