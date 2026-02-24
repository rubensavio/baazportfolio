import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baaz.pro";

export const metadata = {
  title: "Blog | Baaz — Enterprise Product Engineering",
  description:
    "Guides and insights on product engineering, software development, and building AI-powered products. ThoughtWorks alternatives, how to choose a partner, and more.",
  openGraph: {
    title: "Blog | Baaz — Enterprise Product Engineering",
    description:
      "Guides and insights on product engineering, software development, and building AI-powered products.",
    url: `${baseUrl}/blog`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Baaz — Enterprise Product Engineering",
    description:
      "Guides and insights on product engineering, software development, and building AI-powered products.",
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
