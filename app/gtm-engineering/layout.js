import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/gtm-engineering"),
  title: "GTM Engineering — B2B Pipeline Systems | Baaz",
  description:
    "Internet marketing service and GTM engineering: content, outbound, ads, SEO, nurture, and business development—one system for predictable B2B pipeline. Baaz since 2018.",
  openGraph: {
    title: "GTM Engineering — B2B Pipeline Systems | Baaz",
    description:
      "Demand gen, outbound automation, ABM, and RevOps as one interconnected system—compound pipeline instead of random acts of marketing. Talk to Baaz.",
    url: `${baseUrl}/gtm-engineering`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "GTM engineering — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Engineering — B2B Pipeline Systems | Baaz",
    description:
      "Automated pipeline: demand creation, outbound, nurture, and RevOps in one system. GTM engineering from Baaz for teams that need repeatable revenue.",
    images: [ogImage],
  },
};

export default function GtmEngineeringLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "GTM Engineering", url: "/gtm-engineering" },
        ]}
      />
      {children}
    </>
  );
}
