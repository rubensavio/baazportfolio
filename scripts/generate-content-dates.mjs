/**
 * Generates lib/contentDates.json: the real last-edit date per route, read
 * from git history.
 *
 * Why a generated file rather than reading git at build time: hosting
 * providers often clone shallow, so `git log` is unreliable during a deploy.
 * This runs where full history exists, and the committed JSON is what the
 * build consumes.
 *
 * A route's date is the most recent commit touching any of its source files -
 * its data module plus the page, layout, and component that render it. Dates
 * must reflect genuine edits, so nothing here ever falls back to "today".
 *
 * Usage: npm run content-dates
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Commits that touched many pages without changing a word anyone reads -
 * sitewide refactors, boilerplate, schema plumbing. They are skipped so a
 * mechanical change cannot make the whole site look freshly written, which
 * is the exact false freshness signal this file exists to avoid.
 *
 * Add a hash here when a commit edits page files but not page content.
 */
const IGNORED_COMMITS = new Set([
  // "fixed lastmodified date issue" - added the dateModified JSON-LD tag and
  // its import to every page; no prose changed.
  "46c9ac1",
]);

const ignored = (hash) =>
  [...IGNORED_COMMITS].some((h) => hash.startsWith(h) || h.startsWith(hash));

/** Last commit date (YYYY-MM-DD) touching any of these paths, or null. */
function lastCommitDate(paths) {
  const existing = paths.filter((p) => existsSync(resolve(root, p)));
  if (existing.length === 0) return null;
  try {
    const out = execFileSync(
      "git",
      ["log", "--format=%H %cs", "--", ...existing],
      { cwd: root, encoding: "utf8" },
    ).trim();
    if (!out) return null;
    for (const line of out.split("\n")) {
      const [hash, date] = line.trim().split(/\s+/);
      if (hash && date && !ignored(hash)) return date;
    }
    return null;
  } catch {
    return null;
  }
}

// The shared chrome (layout, nav, footer) is deliberately excluded. A footer
// tweak is not a content update, and letting it bump every page's
// dateModified is exactly the artificial freshness signal that erodes trust.
/** Exact route -> source files that determine its content. */
const ROUTES = {
  "/": ["app/page.js", "lib/homePageData.js", "components/Home"],
  "/about": ["app/about", "components/AboutPageClient"],
  "/services": ["app/services/page.js", "lib/servicesHubData.js"],
  "/industry": ["app/industry/page.js", "lib/industryData.js"],
  "/erp": ["app/erp/page.js", "lib/erpData.js", "components/ErpHubPageClient"],
  "/enterprise": ["app/enterprise"],
  "/work1": ["app/work1"],
  "/work2": ["app/work2"],
  "/get-in-touch": ["app/get-in-touch"],
  "/book-call": ["app/book-call"],
  "/privacy": ["app/privacy"],
  "/terms": ["app/terms"],
  "/blog": ["app/blog/page.js", "lib/blogData.js", "components/BlogPageClient"],
  "/case-studies": [
    "app/case-studies/page.js",
    "lib/caseStudyHubPageData.js",
    "components/CaseStudiesPageClient",
  ],
  "/real-estate-erp-case-study": ["app/real-estate-erp-case-study"],
  "/healthcare-patient-app-case-study": [
    "app/healthcare-patient-app-case-study",
  ],
  "/education-training-portal-case-study": [
    "app/education-training-portal-case-study",
  ],
  "/ecommerce": ["app/ecommerce"],
  "/gtm-engineering": ["app/gtm-engineering"],
  "/technologies/vision-intelligence/case-studies": [
    "app/technologies/vision-intelligence/case-studies/page.js",
    "lib/visionIntelligenceCaseStudy.js",
    "components/VisionIntelligenceCaseStudy",
  ],
};

/**
 * Prefix -> source files, for routes generated from one shared data module.
 * Every page in such a collection is rebuilt from the same source, so they
 * genuinely share an edit date. Resolved by longest prefix at read time, so
 * the nested vision-intelligence prefix wins over "/technologies/".
 */
const PREFIXES = {
  "/technologies/": [
    "lib/technologyCapabilitiesData.js",
    "app/technologies/[techSlug]",
  ],
  "/technologies/vision-intelligence/case-studies/": [
    "lib/datasetUseCases.js",
    "app/technologies/vision-intelligence/case-studies/[dataset]",
    "components/VisionIntelligenceCaseStudy",
  ],
  "/services/": ["lib/servicesData.js", "app/services/[serviceType]"],
  "/industry/": ["lib/industryData.js", "app/industry/[industrySlug]"],
  "/erp/": ["lib/erpData.js", "app/erp/[erpSlug]"],
  "/case-studies/": [
    "lib/caseStudiesData.js",
    "app/case-studies/[slug]",
    "components/CaseStudyPageClient",
  ],
};

const routes = {};
for (const [route, paths] of Object.entries(ROUTES)) {
  const d = lastCommitDate(paths);
  if (d) routes[route] = d;
}

const prefixes = {};
for (const [prefix, paths] of Object.entries(PREFIXES)) {
  const d = lastCommitDate(paths);
  if (d) prefixes[prefix] = d;
}

// Blog posts carry authored editorial dates in their own post files. Those
// are read straight from source so the consumer needs no runtime import of
// the (large) blog data module.
const BLOG_DIR = resolve(root, "lib/blogPosts");
for (const file of readdirSync(BLOG_DIR)) {
  if (!file.endsWith(".js")) continue;
  const src = readFileSync(resolve(BLOG_DIR, file), "utf8");
  const slug = src.match(/slug:\s*"([^"]+)"/)?.[1];
  const modified =
    src.match(/dateModified:\s*"([^"]+)"/)?.[1] ||
    src.match(/datePublished:\s*"([^"]+)"/)?.[1];
  if (slug && modified) routes[`/blog/${slug}`] = modified;
}

// Posts defined inline in blogData.js rather than their own file.
const blogDataSrc = readFileSync(resolve(root, "lib/blogData.js"), "utf8");
for (const m of blogDataSrc.matchAll(
  /slug:\s*"([^"]+)"[\s\S]{0,400}?dateModified:\s*"([^"]+)"/g,
)) {
  routes[`/blog/${m[1]}`] ??= m[2];
}

const payload = {
  generated: new Date().toISOString().slice(0, 10),
  routes: Object.fromEntries(
    Object.entries(routes).sort(([a], [b]) => a.localeCompare(b)),
  ),
  prefixes: Object.fromEntries(
    Object.entries(prefixes).sort(([a], [b]) => a.localeCompare(b)),
  ),
};

writeFileSync(
  resolve(root, "lib/contentDates.json"),
  `${JSON.stringify(payload, null, 2)}\n`,
  "utf8",
);

console.log(
  `Wrote lib/contentDates.json (${Object.keys(routes).length} routes, ${Object.keys(prefixes).length} prefixes)`,
);
