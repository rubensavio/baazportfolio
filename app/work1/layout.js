import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/work1"),
  title: "AI Quality Automation on Manufacturing ERP | Case Study | Baaz",
  description:
    "Manufacturing ERP plus an AI vision layer on the line: defect detection, QA workflows, and production rollout—how Baaz extended an existing stack with measurable quality outcomes.",
  openGraph: {
    title: "AI Quality Automation on Manufacturing ERP | Baaz",
    description:
      "Computer vision and QA automation integrated with manufacturing ERP—not a rip-and-replace. Approach, stack, and factory-floor outcomes in this Baaz case study.",
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
    title: "AI Quality Automation on Manufacturing ERP | Baaz",
    description:
      "AI defect detection layered on manufacturing ERP: computer vision, QA, and production rollout—outcomes and approach from Baaz’s enterprise case study.",
    images: [ogImage],
  },
};

export default function Work1Layout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Manufacturing AI on ERP", url: "/work1" },
        ]}
      />
      {children}
    </>
  );
}
