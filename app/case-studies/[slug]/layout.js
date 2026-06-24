import { notFound } from "next/navigation";
import { getAlternates } from "../../../lib/regions";
import { getSiteUrl } from "../../../lib/siteUrl";
import { selectedWorkData } from "../../../lib/selectedWorkData";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export async function generateMetadata({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;

  if (!slug || !selectedWorkData[slug]) {
    notFound();
  }

  const data = selectedWorkData[slug];
  const title = data.metaTitle || `${data.title} - Case Study | Baaz`;
  const description = data.metaDescription || data.summary;

  return {
    title,
    description,
    alternates: getAlternates(`/case-studies/${slug}`),
    openGraph: {
      title,
      description,
      url: `${baseUrl}/case-studies/${slug}`,
      siteName: "Baaz",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${data.title} - Baaz case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function CaseStudyDetailLayout({ children }) {
  return children;
}
