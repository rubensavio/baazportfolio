import { BreadcrumbScript } from "../../lib/breadcrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baaz.pro";

export const metadata = {
  title:
    "Tech Hiring Automation | Baaz — Enterprise Product Engineering",
  description:
    "Case study: How Baaz built a tech hiring automation platform. Streamlined screening, assessments, and candidate pipeline for engineering teams.",
  openGraph: {
    title:
      "Tech Hiring Automation | Baaz — Enterprise Product Engineering",
    description:
      "Case study: How Baaz built a tech hiring automation platform for engineering teams.",
    url: `${baseUrl}/work2`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tech Hiring Automation | Baaz — Enterprise Product Engineering",
    description:
      "Case study: How Baaz built a tech hiring automation platform for engineering teams.",
  },
};

export default function Work2Layout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Tech Hiring Automation", url: "/work2" },
        ]}
      />
      {children}
    </>
  );
}
