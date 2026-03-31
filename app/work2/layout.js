import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();

export const metadata = {
  alternates: getAlternates("/work2"),
  title: "Tech Hiring Automation Platform Case Study | Baaz",
  description:
    "Case study: a tech hiring automation platform—screening, assessments, and pipeline for engineering teams. How Baaz reduced time-to-hire without sacrificing signal.",
  openGraph: {
    title: "Tech Hiring Automation Platform Case Study | Baaz",
    description:
      "Hiring automation for engineering: screening, assessments, and pipeline—how Baaz built it.",
    url: `${baseUrl}/work2`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Hiring Automation Platform Case Study | Baaz",
    description:
      "Hiring automation for engineering teams: screening, assessments, and pipeline—Baaz case study.",
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
