import { Urbanist, Outfit } from "next/font/google";
import "./globals.css";
import { getAlternates } from "../lib/regions";
import { getSiteUrl } from "../lib/siteUrl";

const baseUrl = getSiteUrl();

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ogImage = "/assets/ogdefault.png";

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: getAlternates("/"),
  title: "Custom Software & Product Engineering | Baaz",
  description:
    "Custom software for startups and enterprises—strategy, UI/UX, web, mobile, AI. Bangalore-based Baaz since 2018. Book a call to scope your build and roadmap.",
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
      ],
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: "Worldwide",
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
