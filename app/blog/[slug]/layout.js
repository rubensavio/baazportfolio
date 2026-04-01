import { notFound } from "next/navigation";
import { blogData } from "../../../lib/blogData";
import { BreadcrumbScript } from "../../../lib/breadcrumbSchema";
import { getAlternates } from "../../../lib/regions";
import { getSiteUrl } from "../../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

export async function generateMetadata({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = slug ? blogData[slug] : null;
  if (!data) {
    notFound();
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: getAlternates(`/blog/${slug}`),
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Baaz",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: data.title,
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

function buildArticleSchema(data, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.metaDescription,
    url: `${baseUrl}/blog/${slug}`,
    articleSection: data.contentType,
    author: {
      "@type": "Organization",
      name: "Baaz",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Baaz",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/assets/Logo.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
  };
}

function buildBlogFaqSchema(data) {
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

export default async function BlogPostLayout({ children, params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = slug ? blogData[slug] : null;
  if (!data) {
    notFound();
  }
  const articleSchema = buildArticleSchema(data, slug);
  const faqSchema = buildBlogFaqSchema(data);

  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: data.title },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
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
