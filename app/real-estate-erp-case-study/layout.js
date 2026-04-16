import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

const path = "/real-estate-erp-case-study";

export const metadata = {
  alternates: getAlternates(path),
  title: "Real-Estate ERP & Consumer App | Case Study | Baaz",
  description:
    "Anonymous case study: real-estate operations console plus React Native field app—inventory-to-cash, multi-role workflows, procurement, and production-grade analytics for a multi-phase developer.",
  openGraph: {
    title: "Real-Estate ERP & Consumer App | Baaz",
    description:
      "Case study: real-estate ERP backbone plus consumer app—inventory, bookings, collections, and field alignment for developers and channel partners.",
    url: `${baseUrl}${path}`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Real-estate ERP case study — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Estate ERP Case Study | Baaz",
    description:
      "Operations and consumer app for real estate: one stack from inventory to collections. Read the Baaz case study.",
    images: [ogImage],
  },
};

export default function RealEstateErpCaseStudyLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Real-estate ERP case study", url: path },
        ]}
      />
      {children}
    </>
  );
}
