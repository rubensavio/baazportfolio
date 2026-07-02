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

function buildArticleSchema(slug, data) {
  const articleUrl = `${baseUrl}/case-studies/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}/#article`,
    headline: data.title,
    description: data.metaDescription || data.summary,
    url: articleUrl,
    image: [`${baseUrl}${ogImage}`],
    articleSection: "Case Study",
    author: { "@id": `${baseUrl}/#organization` },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Baaz",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/Logo.png`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    isPartOf: { "@id": `${baseUrl}/#website` },
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

export default async function CaseStudyDetailLayout({ children, params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = slug ? selectedWorkData[slug] : null;
  const articleSchema = data ? buildArticleSchema(slug, data) : null;
  const faqSchema = data ? buildFaqSchema(data) : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {children}
    </>
  );
}
