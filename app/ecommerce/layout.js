import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/ecommerce"),
  title:
    "E-commerce Marketplace Management for Amazon & Flipkart | Baaz",
  description:
    "Full-service Amazon & Flipkart marketplace management agency. PPC advertising, listing optimization, operations, and analytics powered by proprietary tools and operator experience.",
  openGraph: {
    title:
      "E-commerce Marketplace Management for Amazon & Flipkart | Baaz",
    description:
      "Full-service Amazon marketplace management and Flipkart advertising optimization. Scale revenue, improve ACOS, and increase profitability with operator-led execution.",
    url: `${baseUrl}/ecommerce`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "E-commerce Marketplace Management for Amazon & Flipkart | Baaz",
    description:
      "Full-service Amazon marketplace management and Flipkart advertising optimization. Scale revenue, improve ACOS, and increase profitability.",
  },
};

export default function EcommerceLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "E-commerce Marketplace Management", url: "/ecommerce" },
        ]}
      />
      {children}
    </>
  );
}
