import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/about"),
  title: "About Us | Baaz — Enterprise Product Engineering",
  description:
    "Baaz is a Bangalore-based software product development studio. Building world-class digital products since 2018. Learn about our team, values, and approach.",
  openGraph: {
    title: "About Us | Baaz — Enterprise Product Engineering",
    description:
      "Baaz is a Bangalore-based software product development studio. Building world-class digital products since 2018.",
    url: `${baseUrl}/about`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Baaz — Enterprise Product Engineering",
    description:
      "Baaz is a Bangalore-based software product development studio. Building world-class digital products since 2018.",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      {children}
    </>
  );
}
