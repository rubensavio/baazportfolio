import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/services"),
  title: "Product Engineering Services | Baaz",
  description:
    "Software development services: product strategy, UI/UX, web, mobile, AI, and engineering consulting—delivered from Bangalore since 2018. Explore each service.",
  openGraph: {
    title: "Product Engineering Services | Baaz",
    description:
      "Strategy through build: product consulting, design, web, mobile, and AI. Pick a service to see scope, FAQs, and fit.",
    url: `${baseUrl}/services`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz product engineering services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Engineering Services | Baaz",
    description:
      "Explore Baaz services—strategy, UX, web, mobile, AI—and find the right engagement for your roadmap.",
    images: [ogImage],
  },
};

export default function ServicesSegmentLayout({ children }) {
  return children;
}
