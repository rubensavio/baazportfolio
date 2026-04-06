import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/terms"),
  title: "Terms of Service | Baaz",
  description:
    "Terms of Service for ATIIAD Technologies Pvt Ltd (Baaz): services, IP, payments, liability, governing law (India), arbitration in Bengaluru. Effective April 6, 2026.",
  openGraph: {
    title: "Terms of Service | Baaz",
    description:
      "ATIIAD Technologies Pvt Ltd (Baaz) terms: consulting, product engineering, client responsibilities, IP, payments, and dispute resolution.",
    url: `${baseUrl}/terms`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Baaz",
    description:
      "Website and services terms for ATIIAD Technologies Pvt Ltd (Baaz), including arbitration in Bengaluru.",
    images: [ogImage],
  },
};

export default function TermsLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ]}
      />
      {children}
    </>
  );
}
