import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/blog"),
  title: "Product Engineering & Software Blog | Baaz",
  description:
    "Guides on product engineering, custom software, choosing a development partner, and AI product builds—practical posts from Baaz, shipping from Bangalore since 2018.",
  openGraph: {
    title: "Product Engineering & Software Blog | Baaz",
    description:
      "Practical guides: partners, agencies, rescue, and AI—from the Baaz product engineering team.",
    url: `${baseUrl}/blog`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Engineering & Software Blog | Baaz",
    description:
      "Product engineering and software insights—how to hire, ship, and scale—from Baaz.",
  },
};

export default function BlogLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      {children}
    </>
  );
}
