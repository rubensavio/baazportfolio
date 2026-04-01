import { notFound } from "next/navigation";
import { industryData } from "../../../lib/industryData";
import { getAlternates } from "../../../lib/regions";
import { getSiteUrl } from "../../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

function buildBreadcrumbSchema(industrySlug, data) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${baseUrl}/industry`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data?.title || "Industries",
        item: `${baseUrl}/industry/${industrySlug}`,
      },
    ],
  };
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const industrySlug = resolved?.industrySlug;
  const data = industrySlug ? industryData[industrySlug] : null;
  if (!data) {
    notFound();
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: getAlternates(`/industry/${industrySlug}`),
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${baseUrl}/industry/${industrySlug}`,
      siteName: "Baaz",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${data.title} — Baaz`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [ogImage],
    },
  };
}

function buildIndustryFaqSchema(data) {
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

export default async function IndustryLayout({ children, params }) {
  const resolved = await params;
  const industrySlug = resolved?.industrySlug;
  const data = industrySlug ? industryData[industrySlug] : null;
  if (!data) {
    notFound();
  }
  const breadcrumbSchema = buildBreadcrumbSchema(industrySlug, data);
  const faqSchema = buildIndustryFaqSchema(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      {children}
    </>
  );
}
