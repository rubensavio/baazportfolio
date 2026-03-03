import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/gtm-engineering"),
  title: "GTM Engineering — Go-to-Market Systems That Scale Pipeline | Baaz",
  description:
    "Full-stack GTM engineering agency. We build automated go-to-market systems across content, outbound, ads, SEO, lead capture, nurture, and conversion — engineered for predictable pipeline.",
  openGraph: {
    title: "GTM Engineering — Go-to-Market Systems That Scale Pipeline | Baaz",
    description:
      "End-to-end GTM engineering: demand generation, outbound automation, ABM campaigns, and revenue operations built as one interconnected system.",
    url: `${baseUrl}/gtm-engineering`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Engineering — Go-to-Market Systems That Scale Pipeline | Baaz",
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
