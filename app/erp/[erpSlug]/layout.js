import { notFound } from "next/navigation";
import { erpData } from "../../../lib/erpData";
import { getAlternates } from "../../../lib/regions";
import { getSiteUrl } from "../../../lib/siteUrl";

const baseUrl = getSiteUrl();
const ogImage = "/assets/ogdefault.png";

function buildBreadcrumbSchema(erpSlug, data) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "ERP Solutions",
        item: `${baseUrl}/erp`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data?.title || "ERP Solutions",
        item: `${baseUrl}/erp/${erpSlug}`,
      },
    ],
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

export async function generateMetadata({ params }) {
  const resolved = await params;
  const erpSlug = resolved?.erpSlug;
  const data = erpSlug ? erpData[erpSlug] : null;
  if (!data) {
    notFound();
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: getAlternates(`/erp/${erpSlug}`),
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${baseUrl}/erp/${erpSlug}`,
      siteName: "Baaz",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${data.title} - Baaz`,
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

export default async function ErpLayout({ children, params }) {
  const resolved = await params;
  const erpSlug = resolved?.erpSlug;
  const data = erpSlug ? erpData[erpSlug] : null;
  if (!data) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema(erpSlug, data);
  const faqSchema = buildFaqSchema(data);

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
