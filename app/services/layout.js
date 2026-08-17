import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/services"),
  title: "Custom Software Development Services | Baaz",
  description:
    "Baaz delivers custom software development and product engineering worldwide: strategy, UI/UX, web, mobile, AI, and integrations since 2018. Book a free call.",
  openGraph: {
    title: "Custom Software Development Services | Baaz",
    description:
      "Baaz delivers custom software development and product engineering worldwide: strategy, UI/UX, web, mobile, AI, and integrations since 2018. Book a free call.",
    url: `${baseUrl}/services`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz custom software development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Services | Baaz",
    description:
      "Baaz delivers custom software development and product engineering worldwide: strategy, UI/UX, web, mobile, AI, and integrations since 2018. Book a free call.",
    images: [ogImage],
  },
};

export default function ServicesSegmentLayout({ children }) {
  return children;
}
