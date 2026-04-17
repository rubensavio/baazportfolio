import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";
import { getSiteUrl } from "../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

const path = "/healthcare-patient-app-case-study";

export const metadata = {
  alternates: getAlternates(path),
  title: "Healthcare Patient App — React Native Case Study | Baaz",
  description:
    "Anonymous case study: React Native patient engagement app—bookings, telehealth adjacency, prescriptions, lab and pharmacy surfaces, documents, and push—Redux-Saga, REST, and store-ready delivery.",
  openGraph: {
    title: "Healthcare Patient App | Case Study | Baaz",
    description:
      "Patient mobile programme: scheduling, care adjacency, and document flows on one React Native codebase with disciplined API boundaries.",
    url: `${baseUrl}${path}`,
    siteName: "Baaz",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Healthcare patient app case study — Baaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Patient App Case Study | Baaz",
    description:
      "React Native, Redux-Saga, and REST integration for a provider-network patient experience.",
    images: [ogImage],
  },
};

export default function HealthcarePatientAppCaseStudyLayout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Healthcare patient app case study", url: path },
        ]}
      />
      {children}
    </>
  );
}
