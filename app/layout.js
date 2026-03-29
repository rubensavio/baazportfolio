import "./globals.css";
import { getAlternates } from "../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: getAlternates("/"),
  title: "Product Engineering Agency | Baaz — Enterprise Product Engineering",
  description:
    "Baaz is a product engineering agency. We build world-class digital products since 2018: product strategy, UI/UX design, custom software development, mobile apps, and AI software development.",
  openGraph: {
    title: "Product Engineering Agency | Baaz — Enterprise Product Engineering",
    description:
      "Baaz is a product engineering agency. We build world-class digital products since 2018.",
    url: baseUrl,
    siteName: "Baaz",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Baaz — Enterprise Product Engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Engineering Agency | Baaz — Enterprise Product Engineering",
    description:
      "Baaz is a product engineering agency. We build world-class digital products since 2018.",
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
        "Baaz is a Bangalore-based product engineering agency. Since 2018, we specialize in Product Engineering, MVP Development, and Digital Transformation—helping teams ship scalable digital products with product strategy, UI/UX design, custom software, mobile apps, and AI solutions.",
      slogan: "Enterprise-grade products, without the enterprise wait.",
      foundingDate: "2018-01-01",
      knowsAbout: [
        "Enterprise Product Engineering",
        "Product Engineering",
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
        "Baaz provides professional services in Product Engineering (end-to-end product design and build), MVP Development (rapid validation and launch of minimum viable products), and Digital Transformation (modernizing technology, processes, and customer experiences).",
      serviceType: [
        "Enterprise Product Engineering",
        "Product Engineering",
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
