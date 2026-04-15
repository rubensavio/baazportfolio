import { Urbanist, Outfit } from "next/font/google";
import "./globals.css";
import { getAlternates } from "../lib/regions";
import { getSiteUrl } from "../lib/siteUrl";

const baseUrl = getSiteUrl();

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  adjustFontFallback: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  adjustFontFallback: true,
});

const ogImage = "/assets/ogdefault.png";

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: getAlternates("/"),
  applicationName: "Baaz",
  title: "Custom Software & Product Engineering | Baaz",
  description:
    "Software development service for startups and enterprises—strategy, UI/UX, web, mobile, AI, and IT consulting. Bangalore-based Baaz since 2018. Book a call to scope your build.",
  openGraph: {
    title: "Custom Software & Product Engineering | Baaz",
    description:
      "Strategy, UI/UX, web, mobile, and AI—custom software from Bangalore since 2018. Startups to enterprises. Book a call to discuss scope, stack, and timelines.",
    url: baseUrl,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz — Custom Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & Product Engineering | Baaz",
    description:
      "Custom software from Bangalore since 2018—strategy, UI/UX, web, mobile, and AI for startups and enterprises worldwide. Book a call to scope your next build.",
    images: [ogImage],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Baaz",
      url: baseUrl,
      email: "support@baaz.live",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/Logo.svg`,
      },
      description:
        "Baaz is a Bangalore-based custom software and product engineering company, operating since 2018. It delivers enterprise product engineering—strategy, UI/UX, full-stack web and mobile development, and post-launch scaling—for startups and enterprises worldwide, with 100+ shipped applications per Baaz's internal portfolio records.",
      slogan: "Enterprise-grade products, without the enterprise wait.",
      foundingDate: "2018-01-01",
      knowsAbout: [
        "Custom Software Development",
        "Enterprise Product Engineering",
        "MVP Development",
        "Digital Transformation",
        "Software Development Service",
        "Artificial Intelligence",
        "Information Technology Consulting",
        "Business Management Consulting",
        "Internet Marketing",
        "Research & Product Development",
        "Engineering Consulting",
        "Business Development",
        "Marketing Consulting",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@baaz.live",
          areaServed: "Worldwide",
          availableLanguage: ["en"],
          url: `${baseUrl}/get-in-touch`,
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#professional-service`,
      name: "Baaz — Product Engineering, MVP & Digital Transformation",
      url: baseUrl,
      image: `${baseUrl}/assets/Logo.svg`,
      description:
        "Baaz provides custom software development, product engineering, MVP development, and digital transformation—strategy through design, build, and launch.",
      serviceType: [
        "Custom Software Development",
        "Enterprise Product Engineering",
        "MVP Development",
        "Digital Transformation",
        "Software Development Service",
        "Artificial Intelligence Company",
        "Information Technology Consultant",
        "Business Management Consultant",
        "Internet Marketing Service",
        "Research & Product Development",
        "Engineering Consultant",
        "Business Development Service",
        "Marketing Consultant",
      ],
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: "Worldwide",
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Baaz",
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "ContactPage",
      "@id": `${baseUrl}/get-in-touch/#webpage`,
      url: `${baseUrl}/get-in-touch`,
      name: "Contact Baaz",
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/ogdefault.png`,
      },
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${baseUrl}/#site-navigation`,
      name: "Main Navigation",
      hasPart: [
        { "@type": "WebPage", name: "About", url: `${baseUrl}/about` },
        { "@type": "WebPage", name: "Services", url: `${baseUrl}/services` },
        {
          "@type": "WebPage",
          name: "Case Studies",
          url: `${baseUrl}/case-studies`,
        },
        { "@type": "WebPage", name: "Blog", url: `${baseUrl}/blog` },
        {
          "@type": "WebPage",
          name: "Enterprise",
          url: `${baseUrl}/enterprise`,
        },
        {
          "@type": "WebPage",
          name: "ERP Solutions",
          url: `${baseUrl}/erp`,
        },
        {
          "@type": "WebPage",
          name: "Get in Touch",
          url: `${baseUrl}/get-in-touch`,
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${outfit.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
