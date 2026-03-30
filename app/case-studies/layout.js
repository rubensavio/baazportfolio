import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  title: "Case Studies | Baaz — Product Engineering",
  description:
    "Production case studies and deep-dives: manufacturing AI, hiring automation, SaaS architecture, reliability, and integrations—how Baaz ships real systems.",
  alternates: getAlternates("/case-studies"),
  openGraph: {
    title: "Case Studies | Baaz — Product Engineering",
    description:
      "Architecture notes and case studies from Baaz—manufacturing AI, hiring tech, and enterprise delivery.",
    url: `${baseUrl}/case-studies`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz case studies and product engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Baaz — Product Engineering",
    description:
      "How we architect and ship: manufacturing AI, hiring automation, SaaS, and more.",
    images: [ogImage],
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
