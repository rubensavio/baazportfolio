import { getSiteUrl } from "../../../../lib/siteUrl";
import { getAlternates } from "../../../../lib/regions";
import { BreadcrumbScript } from "../../../../lib/breadcrumbSchema";
import { VISION_INTELLIGENCE_CASE_STUDY } from "../../../../lib/visionIntelligenceCaseStudy";
import VisionIntelligenceCaseStudy from "../../../../components/VisionIntelligenceCaseStudy/VisionIntelligenceCaseStudy";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";
const cs = VISION_INTELLIGENCE_CASE_STUDY;
const path = "/technologies/vision-intelligence/case-studies";

export const metadata = {
  alternates: getAlternates(path),
  title: cs.metaTitle,
  description: cs.metaDescription,
  openGraph: {
    title: cs.metaTitle,
    description: cs.metaDescription,
    url: `${baseUrl}${path}`,
    siteName: "Baaz",
    images: [{ url: ogImage, width: 1200, height: 630, alt: cs.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: cs.metaTitle,
    description: cs.metaDescription,
    images: [ogImage],
  },
};

export default function VisionIntelligenceCaseStudiesPage() {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          {
            name: "Vision Intelligence",
            url: "/technologies/vision-intelligence",
          },
          { name: "Case study", url: path },
        ]}
      />
      <VisionIntelligenceCaseStudy />
    </>
  );
}
