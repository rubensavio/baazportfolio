/**
 * Rasterize large hero/section SVGs to WebP for faster download + next/image optimization.
 * Run: node scripts/optimize-hero-images.mjs
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
    width: 1200,
    quality: 85,
  },
  {
    inFile: "readyToBuildBg.svg",
    outFile: "readyToBuildBg.webp",
    width: 1400,
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
    await sharp(input)
      .resize(job.width, null, {
        fit: "inside",
      })
      .webp({ quality: job.quality, effort: 4 })
      .toFile(output);
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
