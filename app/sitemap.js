import { servicesData } from "../lib/servicesData";
import { industryData } from "../lib/industryData";
import { erpData } from "../lib/erpData";
import { blogData } from "../lib/blogData";
import { technologyCapabilitiesData } from "../lib/technologyCapabilitiesData";
import { SITEMAP_STATIC_PATHS } from "../lib/sitemapStaticPaths";
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
  const staticRoutes = SITEMAP_STATIC_PATHS.map((path) => {
    // Use "" for the homepage so hreflang alternates match the <loc> (no trailing slash)
    const pathNorm = path === "/" ? "" : path;
    const url = path === "/" ? baseUrl : `${baseUrl}${pathNorm}`;
    const priority =
      path === "/"
        ? 1
        : path === "/about" ||
            path === "/enterprise" ||
            path === "/blog" ||
            path === "/services" ||
            path === "/industry" ||
            path === "/erp"
          ? 0.9
          : path === "/case-studies" ||
              path === "/real-estate-erp-case-study" ||
              path === "/healthcare-patient-app-case-study" ||
              path === "/education-training-portal-case-study"
            ? 0.85
            : path === "/ecommerce" ||
                path === "/gtm-engineering" ||
                path === "/project-rescue"
              ? 0.9
              : 0.8;
    const changeFrequency =
      path === "/" || path === "/blog" ? "weekly" : "monthly";
    return withAlternates(path === "/" ? "" : pathNorm, {
      url,
      lastModified: lastModStatic(pathNorm),
      changeFrequency,
      priority,
    });
  });

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

  const erpRoutes = Object.keys(erpData).map((slug) =>
    withAlternates(`/erp/${slug}`, {
      url: `${baseUrl}/erp/${slug}`,
      lastModified: lastModIndustry(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const technologyRoutes = Object.keys(technologyCapabilitiesData).map((slug) =>
    withAlternates(`/technologies/${slug}`, {
      url: `${baseUrl}/technologies/${slug}`,
      lastModified: lastModService(),
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...erpRoutes,
    ...technologyRoutes,
    ...blogPostRoutes,
  ];
}
