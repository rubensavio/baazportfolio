import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baaz.pro";

export const metadata = {
  title: "Get in Touch | Baaz — Enterprise Product Engineering",
  description:
    "Contact Baaz for product strategy, UI/UX design, custom software development, mobile apps, or AI solutions. We build digital products that scale.",
  openGraph: {
    title: "Get in Touch | Baaz — Enterprise Product Engineering",
    description:
      "Contact Baaz for product strategy, UI/UX design, custom software development, mobile apps, or AI solutions.",
    url: `${baseUrl}/get-in-touch`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch | Baaz — Enterprise Product Engineering",
    description:
      "Contact Baaz for product strategy, UI/UX design, custom software development, mobile apps, or AI solutions.",
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
