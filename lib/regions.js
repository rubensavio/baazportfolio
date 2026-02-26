/**
 * Geo-targeting: subdomains, hreflang codes, and "We serve [region]" labels.
 * Used for hreflang metadata, sitemap alternates, and Hero/Footer region line.
 */
const REGIONS = [
  { subdomain: "www", hreflang: "en-US", label: "" },
  { subdomain: "uk", hreflang: "en-GB", label: "We serve the UK & Europe" },
  { subdomain: "fr", hreflang: "fr-FR", label: "Nous accompagnons la France" },
  { subdomain: "uae", hreflang: "en-AE", label: "We serve UAE & MENA" },
  { subdomain: "de", hreflang: "de-DE", label: "We serve Germany & DACH" },
  { subdomain: "au", hreflang: "en-AU", label: "We serve Australia & APAC" },
  { subdomain: "ca", hreflang: "en-CA", label: "We serve Canada" },
  { subdomain: "nl", hreflang: "nl-NL", label: "We serve the Netherlands & Europe" },
  { subdomain: "sg", hreflang: "en-SG", label: "We serve Singapore & APAC" },
  { subdomain: "sa", hreflang: "en-SA", label: "We serve Saudi & MENA" },
  { subdomain: "in", hreflang: "en-IN", label: "We serve India" },
  { subdomain: "es", hreflang: "es-ES", label: "We serve Spain" },
  { subdomain: "fi", hreflang: "fi-FI", label: "We serve Finland & Nordics" },
  { subdomain: "ie", hreflang: "en-IE", label: "We serve Ireland" },
];

const DEFAULT_ORIGIN = "https://www.baaz.pro";

function getOrigin(subdomain) {
  if (subdomain === "www") return DEFAULT_ORIGIN;
  return `https://${subdomain}.baaz.pro`;
}

/**
 * Returns alternates.languages and canonical for a given path.
 * Use in layout metadata: alternates: getAlternates(path)
 */
export function getAlternates(path) {
  const pathNorm = path.startsWith("/") ? path : `/${path}`;
  const languages = {};
  REGIONS.forEach((r) => {
    const origin = getOrigin(r.subdomain);
    languages[r.hreflang] = `${origin}${pathNorm}`;
  });
  languages["x-default"] = `${DEFAULT_ORIGIN}${pathNorm}`;
  return {
    canonical: `${DEFAULT_ORIGIN}${pathNorm}`,
    languages,
  };
}

/**
 * Returns the "We serve [region]" label for a hostname, or "" if not a region subdomain.
 * Use in Hero/Footer (client): getRegionLabel(window.location.hostname)
 */
export function getRegionLabel(hostname) {
  if (!hostname || typeof hostname !== "string") return "";
  const sub = hostname.split(".")[0];
  const r = REGIONS.find((x) => x.subdomain === sub);
  return r ? r.label : "";
}

export { REGIONS, DEFAULT_ORIGIN, getOrigin };
