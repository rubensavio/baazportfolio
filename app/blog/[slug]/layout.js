import { blogData } from "../../../lib/blogData";
import { BreadcrumbScript } from "../../../lib/breadcrumbSchema";
import { getAlternates } from "../../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export async function generateMetadata({ params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = blogData[slug];

  if (!data) {
    return {
      title: "Blog | Baaz — Enterprise Product Engineering",
      description:
        "Guides and insights on product engineering, software development, and building AI-powered products. From Baaz.",
      alternates: getAlternates(`/blog/${slug}`),
    };
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
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
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
  };
}

export default async function BlogPostLayout({ children, params }) {
  const resolved = await params;
  const slug = resolved?.slug;
  const data = blogData[slug];
  const articleSchema = data ? buildArticleSchema(data, slug) : null;

  return (
    <>
      {data && (
        <>
          <BreadcrumbScript
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: data.title },
            ]}
          />
          {articleSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleSchema),
              }}
            />
          )}
        </>
      )}
      {children}
    </>
  );
}
