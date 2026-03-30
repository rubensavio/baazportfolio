import { servicesData } from "../lib/servicesData";
import { industryData } from "../lib/industryData";
import { blogData } from "../lib/blogData";
import { getAlternates } from "../lib/regions";
import { getSiteUrl } from "../lib/siteUrl";
import {
  lastModStatic,
  lastModBlog,
  lastModService,
  lastModIndustry,
} from "../lib/sitemapLastmod";

const baseUrl = getSiteUrl();

function withAlternates(path, entry) {
  return { ...entry, alternates: { languages: getAlternates(path).languages } };
}

export default function sitemap() {
  const staticRoutes = [
    withAlternates("/", { url: baseUrl, lastModified: lastModStatic("/"), changeFrequency: "weekly", priority: 1 }),
    withAlternates("/about", { url: `${baseUrl}/about`, lastModified: lastModStatic("/about"), changeFrequency: "monthly", priority: 0.9 }),
    withAlternates("/enterprise", { url: `${baseUrl}/enterprise`, lastModified: lastModStatic("/enterprise"), changeFrequency: "monthly", priority: 0.9 }),
    withAlternates("/work1", { url: `${baseUrl}/work1`, lastModified: lastModStatic("/work1"), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/work2", { url: `${baseUrl}/work2`, lastModified: lastModStatic("/work2"), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/get-in-touch", { url: `${baseUrl}/get-in-touch`, lastModified: lastModStatic("/get-in-touch"), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/book-call", { url: `${baseUrl}/book-call`, lastModified: lastModStatic("/book-call"), changeFrequency: "monthly", priority: 0.8 }),
    withAlternates("/blog", { url: `${baseUrl}/blog`, lastModified: lastModStatic("/blog"), changeFrequency: "weekly", priority: 0.9 }),
    withAlternates("/case-studies", {
      url: `${baseUrl}/case-studies`,
      lastModified: lastModStatic("/case-studies"),
      changeFrequency: "monthly",
      priority: 0.85,
    }),
    withAlternates("/ecommerce", { url: `${baseUrl}/ecommerce`, lastModified: lastModStatic("/ecommerce"), changeFrequency: "monthly", priority: 0.9 }),
    withAlternates("/gtm-engineering", { url: `${baseUrl}/gtm-engineering`, lastModified: lastModStatic("/gtm-engineering"), changeFrequency: "monthly", priority: 0.9 }),
    withAlternates("/project-rescue", { url: `${baseUrl}/project-rescue`, lastModified: lastModStatic("/project-rescue"), changeFrequency: "monthly", priority: 0.9 }),
  ];

  const serviceRoutes = Object.keys(servicesData).map((slug) =>
    withAlternates(`/services/${slug}`, {
      url: `${baseUrl}/services/${slug}`,
      lastModified: lastModService(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const industryRoutes = Object.keys(industryData).map((slug) =>
    withAlternates(`/industry/${slug}`, {
      url: `${baseUrl}/industry/${slug}`,
      lastModified: lastModIndustry(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const blogPostRoutes = Object.keys(blogData).map((slug) =>
    withAlternates(`/blog/${slug}`, {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: lastModBlog(slug),
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
