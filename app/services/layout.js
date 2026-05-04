import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/services"),
  title:
    "Product Engineering & Enterprise Software Development | Baaz Bangalore",
  description:
    "Product engineering services and enterprise software development from Bangalore since 2018—strategy, UI/UX, web, mobile, AI, integrations. Explore Baaz engagements.",
  openGraph: {
    title: "Product Engineering & Enterprise Software Development | Baaz",
    description:
      "Partner for product engineering programmes and scalable enterprise software—from discovery and UX to sustained delivery teams in India.",
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
    title: "Product Engineering & Enterprise Development | Baaz",
    description:
      "Bangalore-led product engineering: strategy through build for teams that need disciplined enterprise software shipping.",
    images: [ogImage],
  },
};

export default function ServicesSegmentLayout({ children }) {
  return children;
}
