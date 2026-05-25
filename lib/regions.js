import { getSiteOrigin } from "./siteUrl";

/**
 * Geo-targeting: regional subdomains and hreflang codes.
 * Used for hreflang metadata and sitemap alternates.
 */
const REGIONS = [
  { subdomain: "www", hreflang: "en-US" },
  { subdomain: "uk", hreflang: "en-GB" },
  { subdomain: "fr", hreflang: "fr-FR" },
  { subdomain: "uae", hreflang: "en-AE" },
  { subdomain: "de", hreflang: "de-DE" },
  { subdomain: "au", hreflang: "en-AU" },
  { subdomain: "ca", hreflang: "en-CA" },
  { subdomain: "nl", hreflang: "nl-NL" },
  { subdomain: "sg", hreflang: "en-SG" },
  { subdomain: "sa", hreflang: "en-SA" },
  { subdomain: "in", hreflang: "en-IN" },
  { subdomain: "es", hreflang: "es-ES" },
  { subdomain: "fi", hreflang: "fi-FI" },
  { subdomain: "ie", hreflang: "en-IE" },
];

/** Maps hreflang codes to Schema.org Country names for areaServed JSON-LD. */
const HREFLANG_COUNTRY_NAME = {
  "en-US": "United States",
  "en-GB": "United Kingdom",
  "fr-FR": "France",
  "en-AE": "United Arab Emirates",
  "de-DE": "Germany",
  "en-AU": "Australia",
  "en-CA": "Canada",
  "nl-NL": "Netherlands",
  "en-SG": "Singapore",
  "en-SA": "Saudi Arabia",
  "en-IN": "India",
  "es-ES": "Spain",
  "fi-FI": "Finland",
  "en-IE": "Ireland",
};

/** All markets with regional hreflang subdomains — used in Organization / Service JSON-LD. */
export const AREA_SERVED_COUNTRIES = [
  ...new Set(
    REGIONS.map((r) => HREFLANG_COUNTRY_NAME[r.hreflang]).filter(Boolean),
  ),
].map((name) => ({ "@type": "Country", name }));

const DEFAULT_ORIGIN = getSiteOrigin();

function getOrigin(subdomain) {
  if (subdomain === "www") return DEFAULT_ORIGIN;
  return `https://${subdomain}.baaz.pro`;
}

/**
 * Returns alternates.languages and canonical for a given path.
 * Use in layout metadata: alternates: getAlternates(path)
 */
export function getAlternates(path) {
  // Normalize: "" → "" (homepage with no trailing slash), "/foo" → "/foo"
  const pathNorm =
    path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
  const languages = {};
  REGIONS.forEach((r) => {
    const origin = getOrigin(r.subdomain);
    languages[r.hreflang] = `${origin}${pathNorm}`;
  });
  languages["x-default"] = `${DEFAULT_ORIGIN}${pathNorm}`;
  // Path-relative canonical so root `metadataBase` resolves a single self-referencing
  // `<link rel="canonical">` per URL (matches Next.js metadata docs; avoids duplicate URL forms in HTML head).
  const canonicalPath = pathNorm === "" ? "/" : pathNorm;
  return {
    canonical: canonicalPath,
    languages,
  };
}

export { REGIONS, getOrigin };
