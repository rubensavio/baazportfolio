import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/privacy"),
  title: "Privacy Policy | Baaz",
  description:
    "Privacy policy for ATIIAD Technologies Pvt Ltd (Baaz): information we collect, cookies, storage, sharing, international transfers, and your rights. Effective April 6, 2026.",
  openGraph: {
    title: "Privacy Policy | Baaz",
    description:
      "ATIIAD Technologies Pvt Ltd (Baaz) privacy policy: data collection, cookies, use, storage, sharing, and contact.",
    url: `${baseUrl}/privacy`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Baaz",
    description:
      "Privacy practices for ATIIAD Technologies Pvt Ltd (Baaz): cookies, analytics, user rights, and contact.",
    images: [ogImage],
  },
};

export default function PrivacyLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ]}
      />
      {children}
    </>
  );
}
