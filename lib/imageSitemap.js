import { getSiteUrl } from "./siteUrl";
import { erpData } from "./erpData";

/**
 * Entries for `/image-sitemap` (Google image sitemap extension).
 * Each item is a page `<loc>` with one or more `<image:image>` children.
 */
export function getImageSitemapPages() {
  const baseUrl = getSiteUrl();

  /** @param {string} path path only, leading slash optional */
  const abs = (path) =>
    `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;

  const heroIcon = "/assets/HomeHeroSectionIcon.webp";
  const heroBg = "/assets/HomeHeroSectionBg.webp";
  const ogImage = "/assets/ogdefault.png";

  const homepage = abs("/");

  const erpSlugs = Object.keys(erpData);

  /** @type {Array<{ url: string; images: Array<{ url: string; title: string }> }>} */
  const pages = [
    {
      url: homepage,
      images: [
        {
          url: abs(heroIcon),
          title:
            "Baaz custom software developer illustration — startups and enterprises hero visual",
        },
        {
          url: abs(heroBg),
          title:
            "Baaz homepage hero gradient background — product engineering Bangalore",
        },
      ],
    },
    {
      url: abs("/erp"),
      images: [{ url: abs(ogImage), title: "Baaz ERP implementation and customization services — Open Graph banner" }],
    },
  ];

  for (const slug of erpSlugs) {
    const entry = erpData[slug];
    const title = entry?.title ?? slug;
    pages.push({
      url: abs(`/erp/${slug}`),
      images: [
        {
          url: abs(heroBg),
          title: `${title} industry ERP landing page hero background`,
        },
      ],
    });
  }

  return pages;
}
