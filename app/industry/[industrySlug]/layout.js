import { industryData } from "../../../lib/industryData";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baaz.pro";

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
        item: `${baseUrl}/industry/fintech`,
      },
      { "@type": "ListItem", position: 3, name: data?.title || "Industries" },
    ],
  };
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const industrySlug = resolved?.industrySlug;
  const data = industryData[industrySlug];

  if (!data) {
    return {
      title: "Industries | Baaz — Enterprise Product Engineering",
      description:
        "We build software for FinTech, construction tech, retail, and healthcare. Custom product engineering since 2018.",
      alternates: { canonical: `${baseUrl}/industry/${industrySlug}` },
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `${baseUrl}/industry/${industrySlug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${baseUrl}/industry/${industrySlug}`,
      siteName: "Baaz",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function IndustryLayout({ children, params }) {
  const resolved = await params;
  const industrySlug = resolved?.industrySlug;
  const data = industryData[industrySlug];
  const breadcrumbSchema = buildBreadcrumbSchema(industrySlug, data);

  return (
    <>
      {data && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
      {children}
    </>
  );
}
