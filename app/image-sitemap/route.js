import { getImageSitemapPages } from "../../lib/imageSitemap";

function escapeXml(unsafe) {
  return String(unsafe)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const pages = getImageSitemapPages();

  const urlsXml = pages
    .map(
      ({ url, images }) => `    <url>
      <loc>${escapeXml(url)}</loc>
${images
  .map(
    (img) => `      <image:image>
        <image:loc>${escapeXml(img.url)}</image:loc>
        <image:title>${escapeXml(img.title)}</image:title>
      </image:image>`
  )
  .join("\n")}
    </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
