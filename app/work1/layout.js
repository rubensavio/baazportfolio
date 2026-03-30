import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/work1"),
  title: "Manufacturing AI Defect Detection Case Study | Baaz",
  description:
    "Case study: AI-powered defect detection for manufacturing—computer vision, QA workflows, and production deployment. How Baaz shipped measurable quality gains on the factory floor.",
  openGraph: {
    title: "Manufacturing AI Defect Detection Case Study | Baaz",
    description:
      "AI defect detection for manufacturing: computer vision, QA, and production rollout—Baaz case study.",
    url: `${baseUrl}/work1`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing AI Defect Detection Case Study | Baaz",
    description:
      "AI defect detection for manufacturing: computer vision, QA, and production rollout from Baaz.",
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
