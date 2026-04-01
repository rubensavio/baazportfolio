import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export const metadata = {
  alternates: getAlternates("/work2"),
  title: "Tech Hiring Automation Case Study | Baaz",
  description:
    "Tech hiring automation: screening, assessments, pipeline for engineering teams. How Baaz cut time-to-hire without losing signal—metrics, stack, outcomes inside.",
  openGraph: {
    title: "Tech Hiring Automation Case Study | Baaz",
    description:
      "Screening, assessments, and pipeline automation for engineering hiring—how Baaz built it and what changed for recruiters and candidates.",
    url: `${baseUrl}/work2`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Tech hiring automation case study — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Hiring Automation Case Study | Baaz",
    description:
      "Hiring automation for engineering: screening, assessments, pipeline—time-to-hire and quality outcomes from Baaz. Read the case study.",
    images: [ogImage],
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
