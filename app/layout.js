import { Urbanist, Outfit, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import "../styles/arrow-icons.scss";
import "../styles/baaz-v2-global.scss";
import { getAlternates, AREA_SERVED_COUNTRIES } from "../lib/regions";
import { getSiteUrl } from "../lib/siteUrl";
import {
  BRAND_POSITIONING_COMBINED,
  BRAND_SCOPE_LINE,
} from "../lib/brandPositioning";
import { COMPANY_SCHEMA_ADDRESSES } from "../lib/companyAddresses";
import Script from "next/script";

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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  display: "swap",
  fallback: ["Georgia", "serif"],
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  adjustFontFallback: true,
});

const ogImage = "/assets/ogdefault.png";
const gtmId = "GTM-WRXJ3WNB";

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: getAlternates("/"),
  applicationName: "Baaz",
  title: `${BRAND_POSITIONING_COMBINED} | Baaz`,
  description: `Baaz is a ${BRAND_POSITIONING_COMBINED} ${BRAND_SCOPE_LINE}. Strategy, UI/UX, web, mobile, and AI since 2018. Book a call to scope your build.`,
  openGraph: {
    title: `${BRAND_POSITIONING_COMBINED} | Baaz`,
    description: `${BRAND_POSITIONING_COMBINED} ${BRAND_SCOPE_LINE}. Strategy, UI/UX, web, mobile, and AI since 2018.`,
    url: baseUrl,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `Baaz - ${BRAND_POSITIONING_COMBINED}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_POSITIONING_COMBINED} | Baaz`,
    description:
      "Software development company for custom software and product engineering worldwide since 2018. Book a call to scope your next build.",
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
      email: "support@baaz.pro",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/Logo.png`,
        width: 600,
        height: 60,
      },
      description: `Baaz is a ${BRAND_POSITIONING_COMBINED} ${BRAND_SCOPE_LINE}, operating since 2018 across 26+ countries. Strategy, UI/UX, full-stack web and mobile, and post-launch scaling; $2B in business value generated for customers across 10 industries. HQ in Bangalore, India; US office in Sheridan, WY.`,
      slogan: "Enterprise-grade products, without the enterprise wait.",
      foundingDate: "2018-01-01",
      founder: {
        "@type": "Person",
        "@id": `${baseUrl}/#founder`,
        name: "Chitresh",
        url: `${baseUrl}/about`,
        jobTitle: "Co-founder",
        sameAs: ["https://in.linkedin.com/company/baazpro"],
      },
      address: COMPANY_SCHEMA_ADDRESSES,
      areaServed: AREA_SERVED_COUNTRIES,
      knowsAbout: [
        BRAND_POSITIONING_COMBINED,
        "Custom Software Development",
        "Enterprise Product Engineering",
        "Software Company",
        "Information Technology Services",
        "Product Engineering Studio",
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
        "Professional Services",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@baaz.pro",
          areaServed: AREA_SERVED_COUNTRIES,
          availableLanguage: ["en"],
          url: `${baseUrl}/get-in-touch`,
        },
      ],
      sameAs: ["https://in.linkedin.com/company/baazpro"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#professional-service`,
      name: `Baaz - ${BRAND_POSITIONING_COMBINED}`,
      url: baseUrl,
      image: `${baseUrl}/assets/Logo.png`,
      description: `Baaz is a ${BRAND_POSITIONING_COMBINED}. It delivers custom software development, enterprise product engineering, MVP development, and digital transformation-strategy through design, build, and launch-for startups and enterprises worldwide.`,
      serviceType: [
        BRAND_POSITIONING_COMBINED,
        "Software Company",
        "Software Development Agency",
        "Software Development Company",
        "Information Technology Services",
        "Product Engineering Studio",
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
      areaServed: AREA_SERVED_COUNTRIES,
      address: COMPANY_SCHEMA_ADDRESSES,
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Baaz",
      publisher: { "@id": `${baseUrl}/#organization` },
      description: `Baaz (${new URL(baseUrl).hostname}) is a ${BRAND_POSITIONING_COMBINED} for product teams worldwide, also described as a software company and IT services firm focused on enterprise product engineering.`,
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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
  const gtmScript = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;

  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${outfit.variable} ${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/assets/HomeHeroSectionIcon.webp"
          as="image"
          type="image/webp"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {gtmScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
