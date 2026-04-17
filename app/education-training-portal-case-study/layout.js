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
    "Anonymous case study: React SPA for cohort and workshop operations—multi-role CRM, attendance, barcodes, payments, homework, and participant experience on one MUI-based portal.",
  openGraph: {
    title: "Education & Training Operations Portal | Case Study | Baaz",
    description:
      "Multi-role training portal: programmes, workshops, CRM, and participant journeys—Create React App, MUI, and a large guarded route matrix.",
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
