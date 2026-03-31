/**
 * Logs meta title/description lengths for blog, services, and industry data.
 * Run: npm run meta-audit
 */
import { dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const { blogData } = await import(pathToFileURL(join(root, "lib/blogData.js")).href);
const { servicesData } = await import(pathToFileURL(join(root, "lib/servicesData.js")).href);
const { industryData } = await import(pathToFileURL(join(root, "lib/industryData.js")).href);

const TITLE_WARN = 62;
const DESC_MIN = 140;
const DESC_MAX = 170;

function row(label, titleLen, descLen, issues) {
  const ok = issues.length === 0;
  console.log(
    `${ok ? "  " : "! "}${label.slice(0, 44).padEnd(46)} T:${String(titleLen).padStart(3)} D:${String(descLen).padStart(3)}${issues.length ? "  " + issues.join("; ") : ""}`,
  );
}

console.log("\n=== Blog (lib/blogData) ===\n");
for (const [slug, d] of Object.entries(blogData)) {
  const t = (d.metaTitle || "").length;
  const m = (d.metaDescription || "").length;
  const issues = [];
  if (t > TITLE_WARN) issues.push(`title>${TITLE_WARN}`);
  if (m < DESC_MIN) issues.push(`desc<${DESC_MIN}`);
  if (m > DESC_MAX) issues.push(`desc>${DESC_MAX}`);
  row(slug, t, m, issues);
}

console.log("\n=== Services (lib/servicesData) ===\n");
for (const [slug, d] of Object.entries(servicesData)) {
  const title = d.metaTitle || `${d.label} | Baaz`;
  const t = title.length;
  const m = (d.metaDescription || "").length;
  const issues = [];
  if (t > TITLE_WARN) issues.push(`title>${TITLE_WARN}`);
  if (m < DESC_MIN) issues.push(`desc<${DESC_MIN}`);
  if (m > DESC_MAX) issues.push(`desc>${DESC_MAX}`);
  row(slug, t, m, issues);
}

console.log("\n=== Industries (lib/industryData) ===\n");
for (const [slug, d] of Object.entries(industryData)) {
  const t = (d.metaTitle || "").length;
  const m = (d.metaDescription || "").length;
  const issues = [];
  if (t > TITLE_WARN) issues.push(`title>${TITLE_WARN}`);
  if (m < DESC_MIN) issues.push(`desc<${DESC_MIN}`);
  if (m > DESC_MAX) issues.push(`desc>${DESC_MAX}`);
  row(slug, t, m, issues);
}

console.log(
  "\nTargets: title ≤60 ideal (warn >62); description ~150–160 (allow 140–170).\n",
);
