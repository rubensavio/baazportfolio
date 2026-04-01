import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/book-call"),
  title: "Book a Call — Product Engineering with Baaz",
  description:
    "Book a call on vision, risk, timelines, and scope—fast replies from Baaz, Bangalore since 2018. Product engineering for startups and enterprises. Book today.",
  openGraph: {
    title: "Book a Call — Product Engineering with Baaz",
    description:
      "Schedule a strategy or scoping call: product vision, stack, rescue, or greenfield. Baaz replies quickly—book your slot and get clarity on next steps.",
    url: `${baseUrl}/book-call`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Book a call with Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call — Product Engineering with Baaz",
    description:
      "Book a call for product vision, technical risk, rescue, or greenfield scope—fast response from Baaz, Bangalore. Secure your slot today.",
    images: [ogImage],
  },
};

export default function BookCallLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Book a Call", url: "/book-call" },
        ]}
      />
      {children}
    </>
  );
}
