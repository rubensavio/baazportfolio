import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { ABOUT_FAQ_ITEMS } from "../../lib/aboutFaq";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";
import { BRAND_POSITIONING_COMBINED } from "../../lib/brandPositioning";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

function buildFounderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#founder`,
    name: "Chitresh Parihar",
    url: `${baseUrl}/about`,
    jobTitle: "Co-founder",
    worksFor: { "@id": `${baseUrl}/#organization` },
    description: `Co-founder at Baaz, a ${BRAND_POSITIONING_COMBINED} headquartered in Bangalore with a US office in Sheridan, WY, delivering enterprise product engineering since 2018.`,
    disambiguatingDescription: "Co-founder of Baaz (baaz.pro), a software and product engineering company. Not affiliated with any aviation or airline entity.",
    sameAs: ["https://in.linkedin.com/company/baazpro"],
    knowsAbout: [
      "Custom Software Development",
      "Enterprise Product Engineering",
      "Startup Product Strategy",
      "Digital Transformation",
    ],
  };
}

export const metadata = {
  alternates: getAlternates("/about"),
  title: `About Baaz - Custom Software Development Company`,
  description: `Baaz is a custom software development company for startups and enterprises since 2018. Meet the team, our values, and how we ship enterprise-grade products. Book a call.`,
  openGraph: {
    title: `About Baaz - Custom Software Development Company`,
    description: `Baaz is a custom software development company since 2018 — team, values, and outcome-led builds for global clients across 26+ countries. Book a call.`,
    url: `${baseUrl}/about`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `About Baaz - Software factory for the world`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Baaz - Custom Software Development Company`,
    description: `Baaz — custom software development company for teams worldwide. Learn about our team, craft, and discovery-to-launch process. Book a call.`,
    images: [ogImage],
  },
};

function aboutFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ABOUT_FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

const aboutOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Baaz",
  url: baseUrl,
  description:
    "Baaz is a custom software development and product engineering company for startups and enterprises worldwide. It is not an AI-powered content platform or aviation company.",
  disambiguatingDescription:
    "Baaz (baaz.pro) builds custom software, web/mobile apps, ERP systems, and AI-powered products for global clients since 2018. Headquartered in Bangalore, India.",
  sameAs: [
    "https://in.linkedin.com/company/baazpro",
    "https://x.com/baaz_hq",
  ],
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutFaqJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFounderSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutOrganizationSchema),
        }}
      />
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      {children}
    </>
  );
}
