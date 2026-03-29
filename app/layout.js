import "./globals.css";
import { getAlternates } from "../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: getAlternates("/"),
  title: "Custom Software Development Agency | Baaz — India",
  description:
    "Custom software development agency for startups and enterprises. Product strategy, UI/UX, web, mobile, and AI—shipping from India since 2018.",
  openGraph: {
    title: "Custom Software Development Agency | Baaz — India",
    description:
      "Custom software development agency for startups and enterprises. Strategy, design, web, mobile, and AI since 2018.",
    url: baseUrl,
    siteName: "Baaz",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Baaz — Custom Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Agency | Baaz — India",
    description:
      "Custom software development agency for startups and enterprises. Strategy, design, web, mobile, and AI since 2018.",
    images: ["/assets/ogdefault.png"],
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
        "Baaz is a Bangalore-based custom software development agency. Since 2018 we ship product strategy, UI/UX, custom web and mobile software, and AI solutions for startups and enterprises worldwide.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/HomeHeroSectionIcon.svg"
        />
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
