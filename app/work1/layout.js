import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baaz.pro";

export const metadata = {
  title:
    "Defect Detection in Manufacturing | Baaz — Enterprise Product Engineering",
  description:
    "Case study: How Baaz built an AI-powered defect detection system for manufacturing. Computer vision, quality assurance, and scalable deployment.",
  openGraph: {
    title:
      "Defect Detection in Manufacturing | Baaz — Enterprise Product Engineering",
    description:
      "Case study: How Baaz built an AI-powered defect detection system for manufacturing.",
    url: `${baseUrl}/work1`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Defect Detection in Manufacturing | Baaz — Enterprise Product Engineering",
    description:
      "Case study: How Baaz built an AI-powered defect detection system for manufacturing.",
  },
};

export default function Work1Layout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Defect Detection in Manufacturing", url: "/work1" },
        ]}
      />
      {children}
    </>
  );
}
