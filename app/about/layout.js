import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { ABOUT_FAQ_ITEMS } from "../../lib/aboutFaq";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

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
      "Co-founder of Baaz, a Bangalore-based software engineering company delivering enterprise product engineering since 2018.",
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
  title: "About Baaz — Product Engineering Studio",
  description:
    "Meet Baaz: Bangalore software development and artificial intelligence company since 2018—team, values, research & product development for startups and enterprises.",
  openGraph: {
    title: "About Baaz — Product Engineering Studio",
    description:
      "Bangalore studio, global clients—team, values, and how we ship product engineering since 2018. Custom software with clear communication and honest scoping.",
    url: `${baseUrl}/about`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "About Baaz — product engineering studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Baaz — Product Engineering Studio",
    description:
      "Bangalore product engineers for startups and enterprises—team, craft, culture, and how we work from discovery to launch. Get in touch.",
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
