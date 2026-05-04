import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/enterprise"),
  title: "Enterprise Software Development & Integrations | Baaz Bangalore",
  description:
    "Enterprise custom software and integrations from Bangalore (since 2018): internal platforms, legacy ERP/CRM connectivity, phased delivery, security-minded architecture. Book a discovery call with Baaz.",
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
