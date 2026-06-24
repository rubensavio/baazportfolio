import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/get-in-touch"),
  title: "Get in Touch - Start a Project with Baaz",
  description:
    "Tell us what you're building. Baaz is a product engineering studio in Bengaluru - working with startups and enterprises globally on custom software, design, and AI.",
  openGraph: {
    title: "Get in Touch - Baaz",
    description:
      "Tell us what you're building. We'll tell you how to make it better.",
    url: `${baseUrl}/get-in-touch`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Baaz - product engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch - Baaz",
    description:
      "Tell us what you're building. Baaz responds within one business day on strategy, design, engineering, mobile, and AI projects.",
    images: [ogImage],
  },
};

export default function GetInTouchLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Get in Touch", url: "/get-in-touch" },
        ]}
      />
      {children}
    </>
  );
}
