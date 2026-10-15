import { getContentDate } from "../lib/contentDates";
import { getSiteUrl } from "../lib/siteUrl";

/**
 * Emits a WebPage node carrying dateModified for pages whose primary schema
 * has no date of its own (technology, industry, ERP, service and hub pages).
 *
 * Search and AI engines use dateModified to judge freshness, and a page with
 * no date at all tends to be treated as stale. The date is the real last-edit
 * date from git, never the build date.
 *
 * Pages that already emit a dated Article (blog posts, case studies) do not
 * need this.
 */
export default function PageDatesJsonLd({ path, name, description }) {
  const dateModified = getContentDate(path);
  const url = `${getSiteUrl()}${path === "/" ? "" : path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${getSiteUrl()}/#website`,
      url: `${getSiteUrl()}/`,
      name: "Baaz",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
