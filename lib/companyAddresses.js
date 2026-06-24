/** Shared company addresses - keep in sync with footer, schema, privacy/terms, and llms.txt. */

export const INDIA_ADDRESS_LINE =
  "WeWork, RMZ Latitude, Hebbal, Bengaluru, Karnataka 560024";

export const US_ADDRESS_LINE =
  "30 N Gould St Ste R, Sheridan, Sheridan County, WY 82801";

export const COMPANY_SCHEMA_ADDRESSES = [
  {
    "@type": "PostalAddress",
    streetAddress: "WeWork, RMZ Latitude, Hebbal",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560024",
    addressCountry: "IN",
  },
  {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
];
