import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/erp"),
  title: "ERP Solutions by Industry | Baaz",
  description:
    "Industry-focused ERP solutioning for insurance, manufacturing, banking, healthcare, hospitals, real estate, construction, automobile, and supply chain operations.",
  openGraph: {
    title: "ERP Solutions by Industry | Baaz",
    description:
      "ERP strategy and implementation by industry with rollout plans, module priorities, and integration guidance.",
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
    title: "ERP Solutions by Industry | Baaz",
    description:
      "Explore ERP implementation approaches for insurance, manufacturing, banking, healthcare, and operations-heavy industries.",
    images: [ogImage],
  },
};

export default function ErpSegmentLayout({ children }) {
  return children;
}
