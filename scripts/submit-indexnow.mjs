/**
 * Submits all sitemap URLs to IndexNow - runs automatically after `npm run build`.
 * No env vars required; the key is already public at /afa7decca275bce3fd4e335a4b8ac13a.txt
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { submitToIndexNow } from "../lib/indexnow.js";
import { SITEMAP_STATIC_PATHS } from "../lib/sitemapStaticPaths.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libDir = path.join(__dirname, "../lib");

/** Extract top-level object keys from a lib/*Data.js export without executing imports. */
function extractExportKeys(fileName, exportName) {
  const src = fs.readFileSync(path.join(libDir, fileName), "utf8");
  const marker = `export const ${exportName} = {`;
  const start = src.indexOf(marker);
  if (start === -1) return [];

  const keys = [];
  let depth = 0;
  let i = start + marker.length - 1;

  while (i < src.length) {
    const ch = src[i];
    if (ch === "{") {
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0) break;
    } else if (depth === 1) {
      const rest = src.slice(i);
      const quoted = rest.match(/^"([^"]+)":/);
      const unquoted = rest.match(/^([a-zA-Z][a-zA-Z0-9_-]*):/);
      const match = quoted || unquoted;
      if (match) {
        keys.push(match[1]);
        i += match[0].length - 1;
      }
    }
    i++;
  }

  return keys;
}

function getSitemapPaths() {
  return [
    ...SITEMAP_STATIC_PATHS,
    ...extractExportKeys("servicesData.js", "servicesData").map(
      (slug) => `/services/${slug}`
    ),
    ...extractExportKeys("industryData.js", "industryData").map(
      (slug) => `/industry/${slug}`
    ),
    ...extractExportKeys("erpData.js", "erpData").map((slug) => `/erp/${slug}`),
    ...extractExportKeys("technologyCapabilitiesData.js", "technologyCapabilitiesData").map(
      (slug) => `/technologies/${slug}`
    ),
    ...extractExportKeys("blogData.js", "blogData").map((slug) => `/blog/${slug}`),
  ];
}

const paths = getSitemapPaths();
console.log(`Submitting ${paths.length} URLs to IndexNow…`);

const { status, ok } = await submitToIndexNow(paths);

if (!ok) {
  console.error(`IndexNow failed (HTTP ${status}).`);
  process.exit(1);
}

console.log(`IndexNow complete (HTTP ${status}).`);
