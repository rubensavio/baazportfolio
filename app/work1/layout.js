import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/work1"),
  title: "AI Defect Detection Case Study | Baaz",
  description:
    "Manufacturing AI: computer vision, QA, production deployment. How Baaz improved factory-floor quality—case study with approach, stack, measurable outcomes.",
  openGraph: {
    title: "AI Defect Detection Case Study | Baaz",
    description:
      "Computer vision, QA workflows, and production rollout for defect detection—measurable gains on the factory floor. Baaz manufacturing AI case study.",
    url: `${baseUrl}/work1`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Manufacturing AI defect detection case study — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Defect Detection Case Study | Baaz",
    description:
      "AI defect detection: computer vision, QA, and production rollout—how Baaz improved manufacturing quality. Case study with outcomes and approach.",
    images: [ogImage],
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
