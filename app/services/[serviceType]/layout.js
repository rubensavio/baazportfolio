import { servicesData } from "../../../lib/servicesData";
import { getAlternates } from "../../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export async function generateMetadata({ params }) {
  const resolved = await params;
  const serviceType = resolved?.serviceType;
  const data = servicesData[serviceType] || servicesData["product-strategy"];
  const title =
    data.metaTitle || `${data.label} | Baaz — Enterprise Product Engineering`;
  const description =
    data.metaDescription ||
    data.description ||
    "Building world-class digital products since 2018. Expert team delivering Product Strategy, UI/UX Design, Web Development, Mobile Apps, and AI Solutions.";

  return {
    title,
    description,
    alternates: getAlternates(`/services/${serviceType}`),
    openGraph: {
      title,
      description,
      url: `${baseUrl}/services/${serviceType}`,
      siteName: "Baaz",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function buildServiceSchema(serviceType, data) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.label,
    description: data.metaDescription || data.description,
    url: `${baseUrl}/services/${serviceType}`,
    provider: {
      "@type": "Organization",
      name: "Baaz",
      url: baseUrl,
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
  };
}

export default async function ServiceLayout({ children, params }) {
  const resolved = await params;
  const serviceType = resolved?.serviceType;
  const data = servicesData[serviceType] || servicesData["product-strategy"];
  const serviceSchema = buildServiceSchema(serviceType, data);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services/product-strategy`,
      },
      { "@type": "ListItem", position: 3, name: data.label, item: `${baseUrl}/services/${serviceType}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
