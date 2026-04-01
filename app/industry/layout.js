import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/industry"),
  title: "Industries We Serve | Baaz",
  description:
    "Custom software for FinTech, retail, healthcare, and construction—product engineering from Baaz, Bangalore since 2018. Pick an industry to see fit and FAQs.",
  openGraph: {
    title: "Industries We Serve | Baaz",
    description:
      "FinTech, construction, retail, healthcare—how Baaz ships compliant, scalable products for regulated and operations-heavy sectors.",
    url: `${baseUrl}/industry`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Industries served by Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Baaz",
    description:
      "Explore industry-specific software development—security, workflows, and integrations—with Baaz.",
    images: [ogImage],
  },
};

export default function IndustrySegmentLayout({ children }) {
  return children;
}
