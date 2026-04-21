import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

const path = "/education-training-portal-case-study";

export const metadata = {
  alternates: getAlternates(path),
  title: "Education & Training Operations Portal | Case Study | Baaz",
  description:
    "Case study with Rahul Jain: national training institute portal—multi-city workshops, long cohorts, tiered CRM, GST-aware payments, barcodes, homework, and participant UX in one product.",
  openGraph: {
    title: "Education & Training Operations Portal | Case Study | Baaz",
    description:
      "Founder-led institute at scale: one browser portal for metro workshops, cohorts, coaches, finance, and alumni-style volume—without duplicate rosters.",
    url: `${baseUrl}${path}`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Education and training portal case study — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education & Training Portal Case Study | Baaz",
    description:
      "Operations portal for training institutes: cohorts, workshops, CRM, and participant UX.",
    images: [ogImage],
  },
};

export default function EducationTrainingPortalCaseStudyLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Education & training portal case study", url: path },
        ]}
      />
      {children}
    </>
  );
}
