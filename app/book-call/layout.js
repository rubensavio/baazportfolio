import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/book-call"),
  title: "Book a Call with Baaz | Product Engineering",
  description:
    "Book a call with Baaz to discuss product vision, technical risk, timelines, and scope. Fast responses—startup and enterprise product engineering from Bangalore since 2018.",
  openGraph: {
    title: "Book a Call with Baaz | Product Engineering",
    description:
      "Schedule a strategy or scoping call: product vision, stack, rescue, or greenfield. Baaz replies quickly—book your slot.",
    url: `${baseUrl}/book-call`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call with Baaz | Product Engineering",
    description:
      "Book a call: product vision, technical challenges, or scope. Fast response from Baaz.",
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
