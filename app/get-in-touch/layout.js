import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/get-in-touch"),
  title: "Contact Baaz — Strategy, Design & Engineering",
  description:
    "Contact Baaz for strategy, UI/UX, web, mobile, AI, or rescue. Honest scoping, quick replies—Bangalore product engineering for global teams since 2018.",
  openGraph: {
    title: "Contact Baaz — Strategy, Design & Engineering",
    description:
      "Reach Baaz for strategy, design, engineering, mobile, AI, or rescue—fast replies from Bangalore. Startups and enterprises welcome.",
    url: `${baseUrl}/get-in-touch`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Baaz — product engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Baaz — Strategy, Design & Engineering",
    description:
      "Strategy, UI/UX, custom software, mobile, and AI—message Baaz for a fast reply. Project rescue and greenfield builds from Bangalore.",
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
