import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/book-call"),
  title: "Book a Call | Baaz — Enterprise Product Engineering",
  description:
    "Schedule a call with Baaz. Discuss your product vision, technical challenges, or project scope. We respond quickly.",
  openGraph: {
    title: "Book a Call | Baaz — Enterprise Product Engineering",
    description:
      "Schedule a call with Baaz. Discuss your product vision, technical challenges, or project scope.",
    url: `${baseUrl}/book-call`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call | Baaz — Enterprise Product Engineering",
    description:
      "Schedule a call with Baaz. Discuss your product vision, technical challenges, or project scope.",
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
