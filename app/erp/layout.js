import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/erp"),
  title: "ERP Implementation by Industry — Insurance to Logistics | Baaz",
  description:
    "Industry ERP implementation guides for insurance, banking, manufacturing, healthcare, hospitals, real estate, construction, automotive, logistics, and training—approach, modules, FAQs, and how Baaz phases rollout.",
  openGraph: {
    title: "ERP Implementation by Industry — Insurance to Logistics | Baaz",
    description:
      "Industry ERP guides: challenges, modules, phased rollout, and FAQs—with implementation support from Baaz.",
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
    title: "ERP Implementation by Industry | Baaz",
    description:
      "Sector-specific ERP: insurance, banking, manufacturing, healthcare, logistics, and more—approach, modules, and rollout.",
    images: [ogImage],
  },
};

export default function ErpSegmentLayout({ children }) {
  return children;
}
