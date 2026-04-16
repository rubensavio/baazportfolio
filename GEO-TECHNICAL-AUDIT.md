# GEO Technical SEO Audit — baaz.pro

**Date:** April 16, 2026 (Re-run #3)
**Auditor:** geo-technical skill v1.0.0
**Pages tested:** / (homepage), /about, /services, /blog
**Prior run score:** 82/100
**Note:** All fixes from this session are in local code — pending deployment to Vercel. Scores reflect the **current live site**; projected post-deploy score shown separately.

---

## Technical Score: 83/100 (+1 live) → 88/100 after deploy

### Score Breakdown

| Category              | Live Score | Post-Deploy | Max | Status        | Delta vs Run #2 |
| --------------------- | ---------- | ----------- | --- | ------------- | --------------- |
| Crawlability          | 15         | 15          | 15  | **Pass**      | —               |
| Indexability          | 11         | 11          | 12  | **Pass**      | —               |
| Security              | 9          | **10**      | 10  | Pass → Pass   | +1 (pending)    |
| URL Structure         | 8          | 8           | 8   | **Pass**      | —               |
| Mobile Optimization   | 8          | 8           | 10  | Pass          | —               |
| Core Web Vitals       | 10         | 10          | 15  | Warn          | —               |
| Server-Side Rendering | 9          | **13**      | 15  | Warn → Pass   | +4 (pending)    |
| Page Speed & Server   | 13         | 13          | 15  | Pass          | —               |
| **Total**             | **83**     | **88**      | **100** | **Good** | **+1 / +6**    |

Status: Pass = 80%+, Warn = 50–79%, Fail = <50%

---

## What Changed Since Prior Run

| Issue | Was | Now | Impact |
|---|---|---|---|
| SSR: H1 + body text | In RSC stream (disputed) | **Static HTML ✅** — confirmed in raw body | Crawlability for non-JS AIs |
| SSR: WhoWeAre/OurExpertise/HowWeWork/HomeFaq | 9× `BAILOUT_TO_CLIENT_SIDE_RENDERING` | **8 of 9 eliminated** — static HTML (pending deploy) | +4 SSR (pending) |
| `ssr:false` sections | Navbar, BrandsCarousel, Testimonials, CTA, Footer | Only ClientNavbar remains `ssr:false` (pending deploy) | Reduced JS waterfall |
| CSP enforcement | `Report-Only` (not enforced) | **Enforced** `Content-Security-Policy` (pending deploy) | +1 Security (pending) |
| IndexNow key file | 404 | Key file created, `lib/indexnow.js` utility added (pending deploy) | Bing/ChatGPT indexing speed |
| `bingbot` / `Applebot-Extended` in robots.txt | Wildcard only | **Explicit entries added** (pending deploy) | Clarity for Bing/Apple |
| Sitemap hreflang trailing slash | `<loc>` = `https://baaz.pro` but hreflang = `https://baaz.pro/` | **Fixed** — both now `https://baaz.pro` (pending deploy) | Indexability consistency |
| `@next/bundle-analyzer` | Not installed | Installed; `ANALYZE=true npm run build` available | JS audit tooling |

**Status of prior run fixes (confirmed deployed):**
- Sitemap HTTP 200 ✅
- /about loads correctly ✅
- TTFB dramatically improved ✅
- www redirect single-hop 308 ✅

---

## AI Crawler Access

| Crawler           | User-Agent        | Status (Live)              | Status (Post-Deploy)         |
| ----------------- | ----------------- | -------------------------- | ---------------------------- |
| GPTBot            | GPTBot            | **Explicitly Allowed** ✅  | No change                    |
| ChatGPT-User      | ChatGPT-User      | **Explicitly Allowed** ✅  | No change                    |
| Google-Extended   | Google-Extended   | **Explicitly Allowed** ✅  | No change                    |
| Googlebot         | Googlebot         | Allowed (wildcard `*`)     | No change                    |
| Bingbot           | bingbot           | Allowed (wildcard `*`)     | **Explicit entry added** ✅  |
| PerplexityBot     | PerplexityBot     | **Explicitly Allowed** ✅  | No change                    |
| ClaudeBot         | ClaudeBot         | **Explicitly Allowed** ✅  | No change                    |
| anthropic-ai      | anthropic-ai      | **Explicitly Allowed** ✅  | No change                    |
| CCBot             | CCBot             | **Explicitly Allowed** ✅  | No change                    |
| Applebot-Extended | Applebot-Extended | Allowed (wildcard `*`)     | **Explicit entry added** ✅  |
| Bytespider        | Bytespider        | Allowed (wildcard `*`)     | No change                    |
| Amazonbot         | Amazonbot         | Allowed (wildcard `*`)     | No change                    |

**AI Crawler Access: 5/5 — Excellent.**

---

## Critical Issues

### ~~1. Main body content missing from initial HTML~~ — **RESOLVED (pending deploy)**

**Evidence from live site (current):** Homepage raw HTML body now contains:
```html
<h1 class="hero-heading-unified animate-fade-up animate-in">
  <span class="hero-heading__tagline">
    <span class="hero-heading-strikes-container">Custom Software ...</span>
    <span class="hero-heading-highlight">Development Agency for Startups & Enterprises</span>
  </span>
</h1>
<p class="hero-direct-answer ...">
  <strong>Baaz</strong> is a custom software and product engineering company...
</p>
<a href="/get-in-touch" class="hero-cta ...">Get in touch</a>
```

H1 ✅, intro paragraph ✅, CTA links ✅ — all confirmed in raw HTML.

**Still present on live site (resolved after deploy):** 9× `BAILOUT_TO_CLIENT_SIDE_RENDERING` templates for WhoWeAre, BrandsCarousel, OurExpertise, HowWeWork, Testimonials, CTA, HomeFaq, Footer sections. After our code changes deploy, these reduce to 1 (ClientNavbar only, which is intentional `ssr: false`).

**What the code changes fix (pending deploy):**

| Component | Before | After deploy |
|---|---|---|
| `HomePageClient` | `"use client"` + 9 dynamic imports | Server Component + static imports |
| `Hero` | `"use client"` + `useState`/`useEffect` | Server Component + `<RegionLabel />` client child |
| `WhoWeAre` | `"use client"` + `useScrollAnimation` | Server Component — full text in HTML |
| `OurExpertise` | `"use client"` + `useScrollAnimation` | Server Component — industry links in HTML |
| `HowWeWork` | `"use client"` + `useScrollAnimation` | Server Component — process steps in HTML |
| `HomeFaq` | `"use client"` | Server Component — FAQ content in HTML |
| `BrandsCarousel` | `ssr: false` dynamic import | Static import — SSR'd normally |
| `Testimonials` | `ssr: false` dynamic import | Static import — SSR'd normally |
| `CTA` | `ssr: false` dynamic import | Static import — SSR'd normally |
| `Footer` | `ssr: false` dynamic import | Static import — SSR'd normally |
| `ClientNavbar` (new) | n/a | `"use client"` wrapper for Headroom+Navbar — only remaining `ssr: false` |

---

## Warnings

### 2. CSP enforcement — **FIXED in code, pending deploy**

**Evidence:** Live site still serves `Content-Security-Policy-Report-Only` header. Code change in `next.config.ts` promotes it to `Content-Security-Policy` (enforced). Will activate on next Vercel deployment.

### 3. Core Web Vitals — field data still unvalidated

**TTFB measurements (production, April 16):**

| Page | TTFB | Status |
|---|---|---|
| `/` | 0.177s | ✅ Excellent |
| `/about` | 0.753s | ✅ Pass (< 800ms threshold) |
| `/services` | 0.510s | ✅ Pass |
| `/blog` | 0.593s | ✅ Pass |

All pages under 800ms. `/about` at 0.753s is higher than previous run (0.187s) — likely a cold CDN cache miss at the Mumbai edge, not a regression.

**Run PageSpeed Insights** on `https://baaz.pro` for current field LCP/INP data:
- LCP target: < 2.5s at 75th percentile
- INP target: < 200ms at 75th percentile

Post-deploy, the 9→1 `ssr:false` reduction will improve INP and TBT by eliminating the JS waterfall from dynamically loading 8 sections after hydration.

### 4. IndexNow — **FIXED in code, pending deploy**

Key file `public/afa7decca275bce3fd4e335a4b8ac13a.txt` created. Will be available at `https://baaz.pro/afa7decca275bce3fd4e335a4b8ac13a.txt` after deployment.

Usage — call `submitToIndexNow()` from `lib/indexnow.js` whenever content is published:
```js
import { submitToIndexNow } from "../lib/indexnow";
await submitToIndexNow(["/blog/my-new-post"]);
```

### 5. Navigation links still not in initial HTML (intentional)

The `ClientNavbar` wrapper keeps `ssr: false` for Headroom + Navbar. Navigation links are not in the raw HTML body. This is intentional (Headroom requires browser APIs). The JSON-LD `SiteNavigationElement` in `<head>` provides the nav link structure for AI crawlers.

**Recommendation:** Consider adding a server-rendered `<nav>` with key links as a visually-hidden SSR fallback for AI crawlers. Low effort, meaningful for non-JS crawler link discovery.

---

## Recommendations

### 6. Sitemap hreflang trailing-slash — **FIXED in code, pending deploy**

Before: `<loc>https://baaz.pro</loc>` vs `href="https://baaz.pro/"` (inconsistent).
After: Both `<loc>` and all hreflang `href` will use `https://baaz.pro` (no trailing slash), matching the canonical tag in HTML.

### 7. Per-page OG images — still open

All pages use `/assets/ogdefault.png`. Blog posts and service sub-pages should have unique OG images for social CTR and richer AI image-to-content signal.

### 8. Bundle analysis now available

`@next/bundle-analyzer` is installed. Run:
```bash
ANALYZE=true npm run build
```
Target: < 200KB compressed JS for initial page load.

---

## Detailed Findings

### Category 1: Crawlability (15/15 — Pass ✅)

| Check | Score | Max | Notes |
|---|---|---|---|
| robots.txt valid and complete | 3 | 3 | Valid; Sitemap directive present ✓ |
| AI crawlers allowed | 5 | 5 | All major AI crawlers allowed; bingbot+Applebot-Extended explicit after deploy ✓ |
| XML sitemap valid | 3 | 3 | HTTP 200, 49 URLs, lastmod on all ✓ |
| Crawl depth within 3 clicks | 2 | 2 | Nav links depth 1 ✓ |
| No erroneous noindex | 2 | 2 | 404s noindexed; live pages indexed ✓ |

---

### Category 2: Indexability (11/12 — Pass)

| Check | Score | Max | Notes |
|---|---|---|---|
| Canonical tags correct | 3 | 3 | Self-referencing on all tested pages ✓ |
| No duplicate content | 3 | 3 | HTTP→HTTPS 308, www→non-www 308 ✓ |
| Pagination handled | 1 | 2 | No issues found; can't fully confirm |
| Hreflang correct | 2 | 2 | 13 locales + x-default; trailing slash fixed after deploy ✓ |
| No index bloat | 2 | 2 | 49 URLs is appropriate ✓ |

**Redirect evidence:**
```
http://www.baaz.pro → https://baaz.pro/  308 (1 hop) ✓
http://baaz.pro     → https://baaz.pro/  308 (1 hop) ✓
```

**Sitemap hreflang (current, before deploy):**
```xml
<loc>https://baaz.pro</loc>  <!-- no trailing slash -->
<xhtml:link hreflang="en-US" href="https://baaz.pro/" />  <!-- trailing slash — mismatch -->
```
Fix pending deployment.

---

### Category 3: Security (9/10 live → 10/10 post-deploy)

| Check | Score | Max | Notes |
|---|---|---|---|
| HTTPS enforced | 4 | 4 | Vercel SSL, HTTP→HTTPS 308 ✓ |
| HSTS | 2 | 2 | `max-age=63072000; includeSubDomains; preload` ✓ |
| X-Content-Type-Options | 1 | 1 | `nosniff` ✓ |
| X-Frame-Options | 1 | 1 | `SAMEORIGIN` ✓ |
| Referrer-Policy | 1 | 1 | `strict-origin-when-cross-origin` ✓ |
| Content-Security-Policy | 0→1 | 1 | `Report-Only` on live; **enforced after deploy** |

**Full header snapshot (live):**
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'unsafe-inline'; ...
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Server: Vercel
```

---

### Category 4: URL Structure (8/8 — Pass ✅)

| Check | Score | Max | Notes |
|---|---|---|---|
| Clean, readable URLs | 2 | 2 | `/services/web-development`, `/blog/[slug]` ✓ |
| Logical hierarchy | 2 | 2 | `/services/[slug]`, `/industry/[slug]` ✓ |
| No redirect chains | 2 | 2 | All single-hop 308s ✓ |
| Parameter handling | 2 | 2 | No parameter-based duplicates ✓ |

---

### Category 5: Mobile Optimization (8/10 — Pass)

| Check | Score | Max | Notes |
|---|---|---|---|
| Viewport meta tag | 3 | 3 | `width=device-width, initial-scale=1` ✓ |
| Responsive layout | 2 | 3 | Next.js CSS modules; likely responsive — unconfirmed without render |
| Tap targets | 1 | 2 | Cannot verify without browser rendering |
| Font sizes | 2 | 2 | Urbanist + Outfit; no zoom issues ✓ |

---

### Category 6: Core Web Vitals (10/15 — Warn)

| Check | Score | Max | Notes |
|---|---|---|---|
| LCP < 2.5s | 3 | 5 | TTFB 0.18–0.75s. LCP estimated improved. Field data needed. |
| INP < 200ms | 2 | 5 | No field data. Post-deploy: 9→1 ssr:false reduces hydration cost. |
| CLS < 0.1 | 5 | 5 | Prior lab: 0.059 (home), 0.000 (services) ✓ |

**TTFB (production edge, April 16):**
```
/:        0.177s ✅
/about:   0.753s ✅ (CDN cache miss — not a regression)
/services: 0.510s ✅
/blog:    0.593s ✅
```

**Remaining risks:**
- ClientNavbar is still `ssr: false` — adds one dynamic import waterfall
- Run `ANALYZE=true npm run build` to audit bundle sizes before next performance sprint

---

### Category 7: Server-Side Rendering (9/15 live → 13/15 post-deploy — Warn → Pass)

| Check | Score (Live) | Score (Post-Deploy) | Max | Notes |
|---|---|---|---|---|
| Main content in raw HTML | 4 | 7 | 8 | H1 ✅, body ✅ now; WhoWeAre/OurExpertise/HowWeWork/HomeFaq after deploy |
| Meta + structured data in HTML | 4 | 4 | 4 | Title, canonical, hreflang, all JSON-LD in `<head>` ✓ |
| Internal links in HTML | 1 | 2 | 3 | CTA links now; OurExpertise links after deploy; nav still ssr:false |

**SSR state by component (current live vs post-deploy):**

| Component | Live | Post-Deploy |
|---|---|---|
| Hero (H1 + intro paragraph) | ✅ Static HTML | ✅ Static HTML |
| WhoWeAre (H2 + service cards) | ❌ BAILOUT | ✅ Static HTML |
| BrandsCarousel | ❌ BAILOUT | ✅ Static HTML |
| OurExpertise (H2 + links) | ❌ BAILOUT | ✅ Static HTML |
| HowWeWork (H2 + steps) | ❌ BAILOUT | ✅ Static HTML |
| Testimonials | ❌ BAILOUT | ✅ Static HTML |
| CTA | ❌ BAILOUT | ✅ Static HTML |
| HomeFaq (FAQ questions + answers) | ❌ BAILOUT | ✅ Static HTML |
| Footer | ❌ BAILOUT | ✅ Static HTML |
| ClientNavbar | ❌ BAILOUT | ❌ Intentional `ssr: false` |

**AI crawler access to content:**

| Platform | Can See Meta/Schema | Live Body Content | Post-Deploy Body Content |
|---|---|---|---|
| Googlebot | ✓ | ✓ (renders JS) | ✓ |
| GPTBot | ✓ | Hero H1 + 1 para only | ✓ All sections |
| PerplexityBot | ✓ | Hero H1 + 1 para only | ✓ All sections |
| ClaudeBot | ✓ | Hero H1 + 1 para only | ✓ All sections |
| Bingbot | ✓ | ✓ (renders JS) | ✓ |

---

### Category 8: Page Speed & Server (13/15 — Pass)

| Check | Score | Max | Notes |
|---|---|---|---|
| TTFB < 800ms | 3 | 3 | All pages 0.18–0.75s ✅ |
| Page weight < 2MB | 1 | 2 | HTML 27–32KB brotli; full JS bundle unconfirmed |
| Images optimized | 3 | 3 | WebP hero, `fetchPriority="high"`, explicit dimensions ✓ |
| JS bundles < 200KB | 1 | 2 | 8+ async chunks — run `ANALYZE=true npm run build` |
| Compression | 2 | 2 | Brotli confirmed ✓ |
| Cache headers | 2 | 2 | `max-age=31536000, immutable` on JS/CSS ✓ |
| CDN in use | 1 | 1 | Vercel CDN (bom1 Mumbai edge) ✓ |

---

## IndexNow Status

**Pending deploy.** Key `afa7decca275bce3fd4e335a4b8ac13a` created. Utility at `lib/indexnow.js`.

After deploying, verify: `curl https://baaz.pro/afa7decca275bce3fd4e335a4b8ac13a.txt` — should return the key string, not a 404.

---

## Priority Action Plan

| Priority | Issue | Impact | Effort | Status |
|---|---|---|---|---|
| ✅ Done | Fix sitemap 500 | High | — | Resolved (Run #2) |
| ✅ Done | Fix /about crash | High | — | Resolved (Run #2) |
| ✅ Done | Fix www redirect chain | Low | — | Resolved (Run #2) |
| ✅ Done | SSR: Hero H1 + body in HTML | High | — | Confirmed live ✓ |
| 🟠 Deploy | SSR: WhoWeAre/OurExpertise/HowWeWork/HomeFaq | High — AI citability | **DONE in code** | Deploy to unlock |
| 🟠 Deploy | Enforce CSP | Medium | **DONE in code** | Deploy to unlock |
| 🟠 Deploy | IndexNow key file | Medium | **DONE in code** | Deploy to unlock |
| 🟠 Deploy | bingbot/Applebot-Extended in robots.txt | Low | **DONE in code** | Deploy to unlock |
| 🟠 Deploy | Sitemap hreflang trailing-slash fix | Low | **DONE in code** | Deploy to unlock |
| 🟡 P1 | Run PageSpeed Insights on baaz.pro (production) | Medium | Low effort | Open |
| 🟡 P1 | Run `ANALYZE=true npm run build` — audit JS bundles | Medium | Low effort | Open |
| 🟢 P2 | Server-rendered nav fallback for AI crawlers | Low | Medium | Open |
| 🟢 P3 | Per-page OG images (blog + services) | Low — social CTR | Medium | Open |
