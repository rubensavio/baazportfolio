import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  title: "Case Studies — How Baaz Ships Real Systems",
  description:
    "Case studies: manufacturing AI, hiring automation, SaaS architecture, reliability, integrations—how Baaz designs and ships production systems since 2018.",
  alternates: getAlternates("/case-studies"),
  openGraph: {
    title: "Case Studies — How Baaz Ships Real Systems",
    description:
      "Deep-dives on manufacturing AI, hiring platforms, enterprise delivery, and architecture—real outcomes from Baaz product engineering. Explore before you engage.",
    url: `${baseUrl}/case-studies`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz case studies and product engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — How Baaz Ships Real Systems",
    description:
      "Manufacturing AI, hiring automation, SaaS, reliability—see how Baaz architects and ships. Case studies and technical notes from Bangalore since 2018.",
    images: [ogImage],
  },
};

export default function CaseStudiesLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Case studies", url: "/case-studies" },
        ]}
      />
      {children}
    </>
  );
}
