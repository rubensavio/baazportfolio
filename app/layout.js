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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Baaz",
  url: baseUrl,
  logo: `${baseUrl}/assets/Logo.svg`,
  description:
    "Baaz is a Bangalore-based software product development studio. We build scalable digital products with Product Strategy, UI/UX Design, Web Development, Mobile Apps, and AI Solutions.",
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
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
