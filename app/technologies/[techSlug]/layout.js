import { notFound } from "next/navigation";
import { getAlternates } from "../../../lib/regions";
import { getSiteUrl } from "../../../lib/siteUrl";
import { technologyCapabilitiesData } from "../../../lib/technologyCapabilitiesData";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export async function generateMetadata({ params }) {
  const resolved = await params;
  const techSlug = resolved?.techSlug;

  if (!techSlug || !technologyCapabilitiesData[techSlug]) {
    notFound();
  }

  const data = technologyCapabilitiesData[techSlug];
  const title = data.metaTitle || `${data.label} Technology Stack | Baaz`;
  const description = data.metaDescription || data.directAnswer;

  return {
    title,
    description,
    alternates: getAlternates(`/technologies/${techSlug}`),
    openGraph: {
      title,
      description,
      url: `${baseUrl}/technologies/${techSlug}`,
      siteName: "Baaz",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${data.label} technology stack - Baaz`,
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

function buildTechBreadcrumbSchema(techSlug, data) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technology capabilities",
        item: `${baseUrl}/technologies/${techSlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.label,
        item: `${baseUrl}/technologies/${techSlug}`,
      },
    ],
  };
}

function buildTechCollectionSchema(techSlug, data) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.heading,
    description: data.directAnswer || data.overview,
    url: `${baseUrl}/technologies/${techSlug}`,
    about: {
      "@type": "Thing",
      name: data.label,
    },
  };
}

export default async function TechnologyLayout({ children, params }) {
  const resolved = await params;
  const techSlug = resolved?.techSlug;

  if (!techSlug || !technologyCapabilitiesData[techSlug]) {
    notFound();
  }

  const data = technologyCapabilitiesData[techSlug];
  const breadcrumbSchema = buildTechBreadcrumbSchema(techSlug, data);
  const collectionSchema = buildTechCollectionSchema(techSlug, data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
