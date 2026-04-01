import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/blog"),
  title: "Product Engineering Blog | Baaz",
  description:
    "Guides on product engineering, custom software, choosing a partner, and AI builds—practical posts from Baaz, Bangalore since 2018. Read the latest articles.",
  openGraph: {
    title: "Product Engineering Blog | Baaz",
    description:
      "Practical guides on partners, agencies, rescue, architecture, and AI—from the Baaz product engineering team in Bangalore. Updated for 2026.",
    url: `${baseUrl}/blog`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz product engineering blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Engineering Blog | Baaz",
    description:
      "How to hire, ship, rescue, and scale software—architecture and product notes from Baaz. Practical posts for founders and engineering leaders.",
    images: [ogImage],
  },
};

export default function BlogLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      {children}
    </>
  );
}
