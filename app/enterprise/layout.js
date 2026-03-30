import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/enterprise"),
  title: "Enterprise Custom Software Development | Baaz",
  description:
    "Baaz delivers enterprise custom software from Bangalore since 2018—internal platforms, integrations, security-aware architecture, and product engineering at scale for global organizations.",
  openGraph: {
    title: "Enterprise Custom Software Development | Baaz",
    description:
      "Scalable custom software for enterprises—internal platforms, integrations, and transformation. Product engineering from Baaz, Bangalore.",
    url: `${baseUrl}/enterprise`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Custom Software Development | Baaz",
    description:
      "Scalable custom software for enterprises—platforms, integrations, digital transformation. Engineering from Baaz since 2018.",
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
