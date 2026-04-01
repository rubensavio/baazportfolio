/**
 * Rasterize large hero/section SVGs to WebP for faster download.
 * Covers home, enterprise, work1/work2 case-study heroes, and get-in-touch / book-call backgrounds.
 * Run: npm run optimize-images
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assets = join(root, "public", "assets");

const jobs = [
  {
    inFile: "HomeHeroSectionBg.svg",
    outFile: "HomeHeroSectionBg.webp",
    width: 1920,
    quality: 82,
  },
  {
    inFile: "HomeHeroSectionIcon.svg",
    outFile: "HomeHeroSectionIcon.webp",
    /** ~2× typical half-viewport column; enough for retina without 2880px bloat */
    width: 2000,
    sharpInputOptions: { density: 150 },
    quality: 90,
    effort: 6,
    webpExtra: {
      smartSubsample: false,
      alphaQuality: 100,
    },
  },
  {
    inFile: "readyToBuildBg.svg",
    outFile: "readyToBuildBg.webp",
    width: 1400,
    quality: 82,
  },
  {
    inFile: "EnterpriseHeroSectionBg.svg",
    outFile: "EnterpriseHeroSectionBg.webp",
    width: 1920,
    quality: 82,
  },
  {
    inFile: "workHeroSectionBg.svg",
    outFile: "workHeroSectionBg.webp",
    width: 1920,
    quality: 82,
  },
  {
    inFile: "GetInTouchBG.svg",
    outFile: "GetInTouchBG.webp",
    width: 1920,
    quality: 82,
  },
];

async function main() {
  for (const job of jobs) {
    const input = join(assets, job.inFile);
    const output = join(assets, job.outFile);
    if (!fs.existsSync(input)) {
      console.warn("Skip (missing):", job.inFile);
      continue;
    }
    const pipeline = sharp(input, job.sharpInputOptions || {}).resize(
      job.width,
      null,
      { fit: "inside" }
    );

    const webpOpts = job.losslessWebp
      ? { lossless: true, effort: job.effort ?? 6 }
      : {
          quality: job.quality,
          effort: job.effort ?? 4,
          ...(job.webpExtra || {}),
        };

    await pipeline.webp(webpOpts).toFile(output);
    const inStat = fs.statSync(input);
    const outStat = fs.statSync(output);
    console.log(
      `${job.outFile}: ${(outStat.size / 1024).toFixed(1)} KB (was ${(inStat.size / 1024).toFixed(1)} KB SVG)`
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
