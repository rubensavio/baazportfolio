import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/ecommerce"),
  title: "Amazon & Flipkart Marketplace Management | Baaz",
  description:
    "Full-service Amazon and Flipkart marketplace management: PPC, listing optimization, ops, and analytics. Operator-led execution and proprietary tools—scale revenue and protect margin.",
  openGraph: {
    title: "Amazon & Flipkart Marketplace Management | Baaz",
    description:
      "Full-service Amazon marketplace management and Flipkart advertising optimization. Scale revenue, improve ACOS, and increase profitability with operator-led execution.",
    url: `${baseUrl}/ecommerce`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon & Flipkart Marketplace Management | Baaz",
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
