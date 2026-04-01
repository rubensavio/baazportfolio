import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/ecommerce"),
  title: "Amazon & Flipkart Marketplace Management | Baaz",
  description:
    "Amazon and Flipkart management: PPC, listings, ops, analytics. Operator-led execution and proprietary tools—scale revenue, improve ACOS, protect margin.",
  openGraph: {
    title: "Amazon & Flipkart Marketplace Management | Baaz",
    description:
      "Amazon and Flipkart: ads, listings, ops, and analytics with operator-led execution. Scale revenue and profitability—request a free audit to start.",
    url: `${baseUrl}/ecommerce`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Amazon and Flipkart marketplace management — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon & Flipkart Marketplace Management | Baaz",
    description:
      "PPC, listings, ops, and analytics for Amazon and Flipkart—operator-led, tool-backed execution. Book a call to review your marketplace performance.",
    images: [ogImage],
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
