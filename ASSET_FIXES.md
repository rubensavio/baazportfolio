# Asset Import Fixes for Next.js

## Issue
Components were trying to import assets from `/assets/` which doesn't work in Next.js. Assets in the `public` folder cannot be imported as modules.

## Solution
Replaced all asset imports with direct string paths.

### Changes Made

#### Fixed Components:
1. ✅ **HowWeWork** - `howWeWorkBg` → `"/assets/HowWeWorkBg.svg"`
2. ✅ **BrandsCarousel** - All brand logos converted to string paths
3. ✅ **CaseStudyHero** - `workHeroBg` → `"/assets/workHeroSectionBg.svg"`
4. ✅ **EnterpriseCTA** - `ctaBg` → `"/assets/readyToBuildBg.svg"`
5. ✅ **EnterpriseHero** - `enterpriseHeroBg` → `"/assets/EnterpriseHeroSectionBg.svg"`
6. ✅ **EnterpriseSolutions** - All solution icons converted to string paths
7. ✅ **OurExpertise** - All expertise icons converted to string paths
8. ✅ **OurValues** - All value icons converted to string paths
9. ✅ **Testimonials** - `userDP` → `"/assets/uerDP.svg"`
10. ✅ **WhoWeAre** - All service icons converted to string paths

## Before & After Examples

### Before (React):
```javascript
import howWeWorkBg from "../../assets/HowWeWorkBg.svg";

<img src={howWeWorkBg} alt="background" />
```

### After (Next.js):
```javascript
// No import needed

<img src="/assets/HowWeWorkBg.svg" alt="background" />
```

## Key Principle

In Next.js:
- ✅ Assets in `/public` are served at the root URL
- ✅ Reference them as strings: `"/assets/filename.svg"`
- ❌ Don't import them as modules from `/public`

## Result

All asset references now work correctly in Next.js without build errors!

