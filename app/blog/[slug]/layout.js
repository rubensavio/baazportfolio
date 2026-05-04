import { notFound } from "next/navigation";
import { blogData } from "../../../lib/blogData";
import { BreadcrumbScript } from "../../../lib/breadcrumbSchema";
import { getAlternates } from "../../../lib/regions";
import { getSiteUrl } from "../../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";
/** Fallback when a post has no explicit dates (evergreen library content). */
const DEFAULT_ARTICLE_DATE = "2018-01-01";

function postOgImagePath(data) {
  return data.ogImage || ogImage;
}

function absoluteImageUrl(pathOrUrl) {
  if (!pathOrUrl) return `${baseUrl}${ogImage}`;
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${baseUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = slug ? blogData[slug] : null;
  if (!data) {
    notFound();
  }

  const shareImage = postOgImagePath(data);

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
          url: shareImage,
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
      images: [shareImage],
    },
  };
}

function buildArticleSchema(data, slug) {
  const published = data.datePublished || DEFAULT_ARTICLE_DATE;
  const modified = data.dateModified || published;
  const imageUrl = absoluteImageUrl(postOgImagePath(data));
  const articleUrl = `${baseUrl}/blog/${slug}`;
  const authorSlug = (data.author?.name || "baaz")
    .toLowerCase()
    .replace(/\s+/g, "-");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}/#article`,
    headline: data.title,
    description: data.metaDescription,
    url: articleUrl,
    datePublished: published,
    dateModified: modified,
    image: [imageUrl],
    articleSection: data.contentType,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".article-direct-answer", ".article-intro", "h2"],
    },
    author: data.author
      ? {
          "@type": "Person",
          "@id": `${baseUrl}/#author-${authorSlug}`,
          name: data.author.name,
          url: data.author.personalUrl || `${baseUrl}/about`,
          jobTitle: data.author.jobTitle || "Co-founder & Engineering Lead",
          worksFor: { "@id": `${baseUrl}/#organization` },
          sameAs: data.author.sameAs ||
            (data.author.url ? [data.author.url] : []),
          knowsAbout: data.author.knowsAbout || [
            "Custom Software Development",
            "Enterprise Product Engineering",
            "MVP Development",
            "Digital Transformation",
          ],
        }
      : {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: "Baaz",
          url: baseUrl,
        },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Baaz",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/Logo.svg`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    isPartOf: { "@id": `${baseUrl}/#website` },
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
          { name: data.title, url: `/blog/${slug}` },
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
