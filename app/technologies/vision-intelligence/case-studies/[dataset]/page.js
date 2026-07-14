import { notFound } from "next/navigation";
import { getSiteUrl } from "../../../../../lib/siteUrl";
import { getAlternates } from "../../../../../lib/regions";
import { BreadcrumbScript } from "../../../../../lib/breadcrumbSchema";
import { VISION_INTELLIGENCE_CASE_STUDY } from "../../../../../lib/visionIntelligenceCaseStudy";
import { DATASET_USE_CASES, getDatasetUseCase } from "../../../../../lib/datasetUseCases";
import DatasetDetail from "../../../../../components/VisionIntelligenceCaseStudy/DatasetDetail";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";
const basePath = "/technologies/vision-intelligence/case-studies";

function getMedia(slug) {
  return (
    VISION_INTELLIGENCE_CASE_STUDY.datasets.find((d) => d.slug === slug) || null
  );
}

export function generateStaticParams() {
  return Object.keys(DATASET_USE_CASES).map((dataset) => ({ dataset }));
}

export async function generateMetadata({ params }) {
  const { dataset } = await params;
  const data = getDatasetUseCase(dataset);
  if (!data) return {};
  const path = `${basePath}/${dataset}`;
  return {
    alternates: getAlternates(path),
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${baseUrl}${path}`,
      siteName: "Baaz",
      images: [{ url: ogImage, width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [ogImage],
    },
  };
}

function buildFaqSchema(data) {
  if (!data?.faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export default async function DatasetUseCasePage({ params }) {
  const { dataset } = await params;
  const data = getDatasetUseCase(dataset);
  const media = getMedia(dataset);
  if (!data) {
    notFound();
  }
  const path = `${basePath}/${dataset}`;
  const faqSchema = buildFaqSchema(data);

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
          { name: "Case study", url: basePath },
          { name: data.title, url: path },
        ]}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <DatasetDetail data={data} media={media} />
    </>
  );
}
