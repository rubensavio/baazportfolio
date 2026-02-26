const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
