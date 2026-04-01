import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/enterprise"),
  title: "Enterprise Software & Integrations | Baaz",
  description:
    "Enterprise custom software from Bangalore since 2018—platforms, integrations, security-aware architecture, product engineering at scale. Book a discovery call.",
  openGraph: {
    title: "Enterprise Software & Integrations | Baaz",
    description:
      "Scalable custom software for enterprises: internal platforms, integrations, and digital transformation. Product engineering from Baaz, Bangalore—since 2018.",
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
    title: "Enterprise Software & Integrations | Baaz",
    description:
      "Platforms, integrations, and transformation at scale—enterprise product engineering from Baaz, Bangalore since 2018. Book a call to scope your program.",
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
