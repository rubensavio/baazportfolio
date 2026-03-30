import HomePageClient from "../components/HomePageClient/HomePageClient";
import HomeFaqJsonLd from "../components/HomeFaqJsonLd";
import { getAlternates } from "../lib/regions";
import { getSiteUrl } from "../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/"),
  title: "Custom Software Development Agency | Baaz — India",
  description:
    "Baaz is a Bangalore-based custom software agency shipping production-grade web and mobile products worldwide since 2018. Enterprise product engineering: strategy, UI/UX, full-stack build, and post-launch scaling for startups and enterprises.",
  openGraph: {
    title: "Custom Software Development Agency | Baaz — India",
    description:
      "Bangalore-based Baaz ships production-grade custom web and mobile software worldwide since 2018. Enterprise product engineering: strategy, design, full-stack build, and scaling.",
    url: baseUrl,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Baaz — Custom Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Agency | Baaz — India",
    description:
      "Baaz: custom software from Bangalore since 2018—strategy, design, web, mobile, and AI for startups and enterprises worldwide.",
    images: [ogImage],
  },
};

export default function Home() {
  return (
    <>
      <HomeFaqJsonLd />
      <HomePageClient />
    </>
  );
}
