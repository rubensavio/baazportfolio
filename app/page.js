import HomePageClient from "../components/HomePageClient/HomePageClient";
import HomeFaqJsonLd from "../components/HomeFaqJsonLd";
import { getAlternates } from "../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/"),
  title: "Custom Software Development Agency | Baaz — India",
  description:
    "Custom software development agency for startups and enterprises. Strategy, UI/UX, web, mobile, and AI—shipping production-grade products from India since 2018.",
  openGraph: {
    title: "Custom Software Development Agency | Baaz — India",
    description:
      "Custom software development agency for startups and enterprises. Strategy, design, web, mobile, and AI—from Bangalore to worldwide clients since 2018.",
    url: baseUrl,
    siteName: "Baaz",
    images: [
      {
        url: "/og-default.png",
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
      "Custom software development agency for startups and enterprises. Strategy, design, web, mobile, and AI since 2018.",
    images: ["/assets/ogdefault.png"],
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
