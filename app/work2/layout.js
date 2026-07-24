import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/work2"),
  title: "AI Hiring Automation on HRMS | Case Study | Baaz",
  description:
    "HRMS-native hiring automation: screening, ranking, and assessments for engineering teams. How Baaz extended an existing hiring-management stack-metrics, stack, outcomes.",
  openGraph: {
    title: "AI Hiring Automation on HRMS | Baaz",
    description:
      "Recruiting automation on top of HRMS: screening, assessments, and pipeline flow-what changed for recruiters and candidates in this Baaz case study.",
    url: `${baseUrl}/work2`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Tech hiring automation case study - Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Hiring Automation Case Study | Baaz",
    description:
      "Hiring automation for engineering: screening, assessments, pipeline-time-to-hire and quality outcomes from Baaz. Read the case study.",
    images: [ogImage],
  },
};

const articleUrl = `${baseUrl}/work2`;
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${articleUrl}/#article`,
  headline: "AI Hiring Automation on HRMS",
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

export default function Work2Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "HRMS & Hiring Automation", url: "/work2" },
        ]}
      />
      {children}
    </>
  );
}
