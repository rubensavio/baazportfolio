import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/gtm-engineering"),
  title: "GTM Engineering: Pipeline Systems That Scale | Baaz",
  description:
    "Full-stack GTM engineering: automated content, outbound, ads, SEO, capture, nurture, and conversion—one system for predictable pipeline. Built by Baaz for revenue teams.",
  openGraph: {
    title: "GTM Engineering: Pipeline Systems That Scale | Baaz",
    description:
      "End-to-end GTM engineering: demand generation, outbound automation, ABM campaigns, and revenue operations built as one interconnected system.",
    url: `${baseUrl}/gtm-engineering`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Engineering: Pipeline Systems That Scale | Baaz",
    description:
      "Full-stack GTM engineering: automated pipeline generation, demand creation, and revenue operations that compound.",
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
