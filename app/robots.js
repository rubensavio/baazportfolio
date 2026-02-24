const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://baaz.pro";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
