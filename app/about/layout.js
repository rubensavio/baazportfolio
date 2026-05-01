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
    name: "Chitresh",
    url: `${baseUrl}/about`,
    jobTitle: "Co-founder",
    worksFor: { "@id": `${baseUrl}/#organization` },
    description:
      `Co-founder at Baaz, a ${BRAND_POSITIONING_COMBINED} headquartered in Bangalore, delivering enterprise product engineering since 2018.`,
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
  title: `About Baaz — ${BRAND_POSITIONING_COMBINED}`,
  description:
    `Meet Baaz: a ${BRAND_POSITIONING_COMBINED} based in Bangalore since 2018—team, values, AI-enabled delivery, research and product development.`,
  openGraph: {
    title: `About Baaz — ${BRAND_POSITIONING_COMBINED}`,
    description:
      `${BRAND_POSITIONING_COMBINED} based in Bangalore—team, values, global clients since 2018; software company framing with outcome-led builds.`,
    url: `${baseUrl}/about`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `About Baaz — ${BRAND_POSITIONING_COMBINED}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Baaz — ${BRAND_POSITIONING_COMBINED}`,
    description:
      `Baaz—${BRAND_POSITIONING_COMBINED} based in Bangalore—team, craft, discovery to launch. Get in touch.`,
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
