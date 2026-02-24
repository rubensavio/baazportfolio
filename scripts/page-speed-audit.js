/**
 * Runs performance audits for every page and writes page-speed-report.md.
 *
 * PageSpeed Insights API (public URLs; no Chrome):
 *   node scripts/page-speed-audit.js https://yoursite.com
 *
 * Lighthouse CLI (localhost; requires Chrome):
 *   node scripts/page-speed-audit.js http://localhost:3000
 *
 * Options: --limit=N  --lighthouse (use Lighthouse CLI for any URL; avoids API quota)
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const limitArg = process.argv.find((a) => a.startsWith("--limit="));
const LIMIT = limitArg ? parseInt(limitArg.split("=")[1], 10) : null;
const FORCE_LIGHTHOUSE = process.argv.includes("--lighthouse");
const baseUrlRaw = args[0] || "http://localhost:3000";
const BASE_URL = baseUrlRaw.replace(/\/$/, "");
const USE_PSI =
  !FORCE_LIGHTHOUSE &&
  (BASE_URL.startsWith("https://") || BASE_URL.startsWith("http://")) &&
  !BASE_URL.includes("localhost") &&
  !BASE_URL.includes("127.0.0.1");

const STATIC_ROUTES = [
  "/",
  "/about",
  "/book-call",
  "/enterprise",
  "/get-in-touch",
  "/work1",
  "/work2",
  "/blog",
];

const BLOG_SLUGS = [
  "thoughtworks-alternatives",
  "best-software-development-agencies-for-startups",
  "how-to-choose-software-development-partner",
  "how-to-build-ai-powered-product",
  "software-development-outsourcing-vs-in-house",
  "product-engineering-process-for-enterprises",
];

const INDUSTRY_SLUGS = ["fintech", "construction", "retail", "healthcare"];

const SERVICE_SLUGS = [
  "product-strategy",
  "ui-ux-design",
  "web-development",
  "mobile-app",
  "ai-solution",
];

function allUrls() {
  const urls = [...STATIC_ROUTES];
  BLOG_SLUGS.forEach((s) => urls.push(`/blog/${s}`));
  INDUSTRY_SLUGS.forEach((s) => urls.push(`/industry/${s}`));
  SERVICE_SLUGS.forEach((s) => urls.push(`/services/${s}`));
  return urls;
}

function runPageSpeedInsights(fullUrl) {
  const key = process.env.PAGE_SPEED_API_KEY;
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(fullUrl)}&category=performance&strategy=desktop${key ? `&key=${key}` : ""}`;
  return new Promise((resolve) => {
    https
      .get(apiUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (json.error)
              resolve({
                error: json.error.message || JSON.stringify(json.error).slice(0, 150),
              });
            else resolve(json.lighthouseResult || { error: "No lighthouseResult" });
          } catch (e) {
            resolve({ error: e.message || "Parse error" });
          }
        });
      })
      .on("error", (e) => resolve({ error: e.message }));
  });
}

function extractJsonFromStdout(out) {
  const start = out.indexOf("{");
  const end = out.lastIndexOf("}") + 1;
  if (start === -1 || end <= start) return null;
  try {
    return JSON.parse(out.slice(start, end));
  } catch (_) {
    return null;
  }
}

function runLighthouse(url) {
  const fullUrl = url === "/" ? BASE_URL : `${BASE_URL}${url}`;
  try {
    const cmd = `npx --yes lighthouse "${fullUrl}" --output=json --output-path=stdout --only-categories=performance --form-factor=desktop --chrome-flags="--headless --no-sandbox --disable-gpu --disable-dev-shm-usage" --quiet --no-enable-error-reporting`;
    const out = execSync(cmd, {
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
      stdio: ["pipe", "pipe", "pipe"],
      timeout: 120000,
    });
    const report = extractJsonFromStdout(out);
    if (!report) return { error: "Could not parse Lighthouse JSON", url: fullUrl };
    return report;
  } catch (e) {
    const msg = e.stderr || e.message || String(e);
    return { error: msg.slice(0, 200), url: fullUrl };
  }
}

function extractMetrics(report) {
  if (report.error) return { error: report.error };
  const c = report.categories?.performance;
  const a = report.audits || {};
  return {
    performanceScore: c?.score != null ? Math.round(c.score * 100) : null,
    firstContentfulPaint: a["first-contentful-paint"]?.numericValue,
    largestContentfulPaint: a["largest-contentful-paint"]?.numericValue,
    totalBlockingTime: a["total-blocking-time"]?.numericValue,
    cumulativeLayoutShift: a["cumulative-layout-shift"]?.numericValue,
    speedIndex: a["speed-index"]?.numericValue,
  };
}

function formatMs(n) {
  if (n == null) return "—";
  if (n >= 1000) return `${(n / 1000).toFixed(2)}s`;
  return `${Math.round(n)}ms`;
}

async function main() {
  let urls = allUrls();
  if (LIMIT != null && LIMIT > 0) urls = urls.slice(0, LIMIT);
  const results = [];
  console.log(
    `Auditing ${urls.length} pages at ${BASE_URL} (${USE_PSI ? "PageSpeed Insights" : "Lighthouse CLI"})...`
  );

  const reportPath = path.join(process.cwd(), "page-speed-report.md");

  function writeReport(data, isPartial) {
    const lines = [
      "# Page Speed Report",
      "",
      `Base URL: ${BASE_URL}`,
      `Generated: ${new Date().toISOString()}${isPartial ? " (partial)" : ""}`,
      "",
      "| Page | Performance | LCP | FCP | TBT | CLS | Speed Index |",
      "|------|-------------|-----|-----|-----|-----|-------------|",
    ];
    data.forEach((r) => {
      const perf = r.performanceScore != null ? `${r.performanceScore}` : "—";
      const lcp =
        r.largestContentfulPaint != null
          ? formatMs(r.largestContentfulPaint)
          : "—";
      const fcp =
        r.firstContentfulPaint != null
          ? formatMs(r.firstContentfulPaint)
          : "—";
      const tbt =
        r.totalBlockingTime != null ? formatMs(r.totalBlockingTime) : "—";
      const cls =
        r.cumulativeLayoutShift != null
          ? r.cumulativeLayoutShift.toFixed(3)
          : "—";
      const si = r.speedIndex != null ? formatMs(r.speedIndex) : "—";
      const err = r.error ? ` (error: ${r.error.slice(0, 40)}…)` : "";
      lines.push(
        `| ${r.label || r.url}${err} | ${perf} | ${lcp} | ${fcp} | ${tbt} | ${cls} | ${si} |`
      );
    });
    lines.push("");
    lines.push("## Legend");
    lines.push("- **Performance**: 0–100 (Lighthouse)");
    lines.push("- **LCP**: Largest Contentful Paint");
    lines.push("- **FCP**: First Contentful Paint");
    lines.push("- **TBT**: Total Blocking Time");
    lines.push("- **CLS**: Cumulative Layout Shift");
    lines.push("- **Speed Index**: How quickly content is visibly populated");
    fs.writeFileSync(reportPath, lines.join("\n"), "utf8");
  }

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const label = url === "/" ? "Home" : url.slice(1);
    const fullUrl = url === "/" ? BASE_URL : `${BASE_URL}${url}`;
    process.stderr.write(`  [${i + 1}/${urls.length}] ${label}\n`);
    const report = USE_PSI
      ? await runPageSpeedInsights(fullUrl)
      : runLighthouse(url);
    const metrics = extractMetrics(report);
    results.push({ url: url === "/" ? "/" : url, label, ...metrics });
    writeReport(results, true);
  }

  writeReport(results, false);
  console.log(`\nReport written to ${reportPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
