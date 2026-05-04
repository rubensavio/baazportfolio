import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/erp"),
  title:
    "Custom ERP Development India | ERP Software Services | Baaz Bangalore",
  description:
    "Custom ERP development & ERP software development services from Bangalore, India—manufacturing, healthcare, banking, insurance, logistics, construction, real estate & more. Phased ERP implementation with Baaz.",
  openGraph: {
    title: "Custom ERP Development India | ERP Software Services | Baaz",
    description:
      "ERP development company in Bangalore delivering custom ERP, integrations, and industry playbooks—from manufacturing ERP to healthcare and real estate.",
    url: `${baseUrl}/erp`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "ERP solutions by industry from Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom ERP Development | Baaz Bangalore",
    description:
      "Custom ERP & implementation services—manufacturing, healthcare, logistics, banking. Talk to Baaz engineers.",
    images: [ogImage],
  },
};

export default function ErpSegmentLayout({ children }) {
  return children;
}
