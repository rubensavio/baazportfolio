import { industryData } from "../../../lib/industryData";
import { getAlternates } from "../../../lib/regions";
import { getSiteUrl } from "../../../lib/siteUrl";

const baseUrl = getSiteUrl();

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
  const data = industryData[industrySlug];

  if (!data) {
    return {
      title: "Industries We Serve | Baaz",
      description:
        "Custom software for FinTech, construction, retail, and healthcare—product engineering from Baaz, Bangalore, since 2018. Explore industry pages or get in touch.",
      alternates: getAlternates(`/industry/${industrySlug}`),
    };
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
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
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
  const data = industryData[industrySlug];
  const breadcrumbSchema = buildBreadcrumbSchema(industrySlug, data);
  const faqSchema = data ? buildIndustryFaqSchema(data) : null;

  return (
    <>
      {data && (
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
        </>
      )}
      {children}
    </>
  );
}
