import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/enterprise"),
  title: "Enterprise Software Development & Integrations | Baaz Bangalore",
  description:
    "Bangalore enterprise software development company for internal platforms, legacy ERP and CRM integrations, phased delivery, and outsourcing-ready engineering teams collaborating with India-facing and global product groups. Since 2018—talk to Baaz.",
  openGraph: {
    title: "Enterprise Software Development & Integrations | Baaz Bangalore",
    description:
      "Platforms, integrations, and transformation—enterprise product engineering from Baaz since 2018. Book a discovery call.",
    url: `${baseUrl}/enterprise`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Enterprise custom software development — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Development & Integrations | Baaz",
    description:
      "Custom enterprise software, integrations, and phased delivery from Bangalore. Book a call to scope your programme.",
    images: [ogImage],
  },
};

export default function EnterpriseLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Enterprise", url: "/enterprise" },
        ]}
      />
      {children}
    </>
  );
}
