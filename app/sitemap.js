import { servicesData } from "../lib/servicesData";
import { industryData } from "../lib/industryData";
import { blogData } from "../lib/blogData";
import { getAlternates } from "../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

function withAlternates(path, entry) {
  return { ...entry, alternates: { languages: getAlternates(path).languages } };
}

export default function sitemap() {
  const staticRoutes = [
    withAlternates("/", { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }),
    withAlternates("/about", { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 }),
    withAlternates("/enterprise", { url: `${baseUrl}/enterprise`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 }),
    withAlternates("/work1", { url: `${baseUrl}/work1`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/work2", { url: `${baseUrl}/work2`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/get-in-touch", { url: `${baseUrl}/get-in-touch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/book-call", { url: `${baseUrl}/book-call`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/blog", { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 }),
    withAlternates("/ecommerce", { url: `${baseUrl}/ecommerce`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 }),
  ];

  const serviceRoutes = Object.keys(servicesData).map((slug) =>
    withAlternates(`/services/${slug}`, {
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const industryRoutes = Object.keys(industryData).map((slug) =>
    withAlternates(`/industry/${slug}`, {
      url: `${baseUrl}/industry/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const blogPostRoutes = Object.keys(blogData).map((slug) =>
    withAlternates(`/blog/${slug}`, {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogPostRoutes,
  ];
}
