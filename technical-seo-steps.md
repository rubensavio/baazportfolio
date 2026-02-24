# Technical SEO — External & Manual Steps

Code changes for the Technical SEO checklist are done. The items below are for **you to do manually** (no integration or API in the codebase).

---

## 1. XML sitemap submission — Manual

### Google Search Console

1. Go to https://search.google.com/search-console
2. Click **Add property** → choose **URL prefix** → enter `https://baaz.pro`
3. Verify ownership (DNS TXT record, HTML file upload, or Google Analytics — pick whichever is easiest for your hosting)
4. Once verified, go to **Sitemaps** (left sidebar)
5. Enter `https://baaz.pro/sitemap.xml` → click **Submit**
6. Wait 24–48 hours; check back to confirm "Success" status

### Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Sign in → **Add your site** → enter `https://baaz.pro`
3. You can import from GSC (fastest) or verify manually via DNS/meta tag
4. Once verified, go to **Sitemaps** (left sidebar)
5. Enter `https://baaz.pro/sitemap.xml` → click **Submit**

---

## 2. Broken links and redirect chains — Manual

### Using Screaming Frog (free up to 500 URLs)

1. Download from https://www.screamingfrog.co.uk/seo-spider/
2. Enter `https://baaz.pro` in the URL bar → click **Start**
3. After the crawl, filter by **Response Codes → Client Error (4xx)** — fix any broken internal links
4. Check **Response Codes → Redirection (3xx)** — look for redirect chains (A → B → C) and shorten them
5. Export the results and fix links in your codebase or hosting config

### Alternative: Ahrefs Site Audit

1. Go to https://ahrefs.com → Site Audit → New project → enter `https://baaz.pro`
2. Run the crawl; review the "Broken links" and "Redirect chains" reports

---

## 3. Default social share image — Done

The code points to `/assets/ogdefault.png` and the image is at `public/assets/ogdefault.png`. No further action needed in code.

After deploy, you can verify the preview:
- https://developers.facebook.com/tools/debug/ — enter `https://baaz.pro`
- https://cards-dev.twitter.com/validator — enter `https://baaz.pro`

---

## 4. Mobile-first check — Done (lighthouse test pending)

Tested all 5 pages at **375px** (iPhone SE) and **768px** (iPad) viewports. Results:

### Pages tested
- `/` (Home)
- `/about`
- `/services/web-development`
- `/blog`
- `/get-in-touch`

### `display: none` audit
- `ul.navbar-menu.desktop-menu` hidden on mobile — **expected** (hamburger menu replaces it)
- `a.cta-button.desktop-cta` hidden on mobile — **expected** (hamburger provides access)
- `a.hero-cta.desktop-cta-btn` hidden on mobile — **expected** (a separate mobile CTA is rendered)
- Testimonial prev/next buttons hidden on mobile — **expected** (all 3 cards stack vertically; no carousel needed)

**No content is improperly hidden on mobile.**

### `overflow: hidden` audit
- `div.brands-carousel-wrapper` (scrollWidth ≫ clientWidth) — **expected** for the infinite-scroll marquee
- `div.hero-illustration` at 768px (7px overflow) — **negligible**, not visible to users

### Other checks
- No horizontal scroll on any page at either viewport
- Typography readable, cards stack vertically, forms full-width and usable
- Footer and CTA sections render correctly at both widths

### Remaining (manual, post-deploy)
Run Lighthouse Mobile audit on the live site (`https://baaz.pro`) to check for "Content not sized correctly for viewport" warnings

---

## 5. Hreflang (US, UK, UAE) — Deferred

No action needed now. The site is single-locale (`lang="en"`).

**When to revisit:** Only when you introduce region-specific URLs (e.g. `/uk/`, `/uae/`, or subdomains like `uk.baaz.pro`). At that point, add `alternates.languages` in metadata and hreflang entries in the sitemap.

---

## 6. Backlink & Authority Building — Directory Listings

Below is the exact content to use when filling out each directory profile. Copy/paste and adjust as needed.

---

### Reusable Company Profile Content

Use this across all directories:

**Company Name:** Baaz

**Tagline:** Enterprise Product Engineering Agency

**Website:** https://baaz.pro

**Founded:** 2018

**Headquarters:** Bangalore, India

**Company Size:** Small (< 50)

**Short Description (1–2 lines):**
> Baaz is a product engineering agency. We build world-class digital products: product strategy, UI/UX design, custom software development, mobile apps, and AI solutions. Since 2018.

**Long Description (about section):**
> Baaz is a Bangalore-based software product development studio driven by a passion for building purposeful digital products. Since 2018, we've partnered with startups, scale-ups, and enterprises to design, develop, and launch over 100 web and mobile applications across diverse sectors including eCommerce, fintech, AI/ML, AR/VR, real estate, retail, and ERP systems.
>
> Our team brings deep technical expertise, strategic thinking, and a collaborative mindset to every project. We follow a founder-first, product-led approach that helps businesses move from idea to prototype, MVP to scale — quickly and efficiently. We don't just write code — we craft scalable solutions that solve real problems and create long-term value.

**Services (select/tag these):**
- Product Strategy Consulting
- UI/UX Design
- Custom Software Development
- Mobile App Development (iOS, Android, Flutter, React Native)
- AI/ML Development (Computer Vision, NLP, Predictive Analytics)

**Industries Served:**
- FinTech
- Healthcare
- Retail / eCommerce
- Construction Tech

**Key Clients / Brands (from site):**
Uber, Decathlon, Livpure, Nalli, Damas, Pestle

**Portfolio / Case Studies:**
- `https://baaz.pro/work1` — AI-powered visual inspection platform
- `https://baaz.pro/work2` — Tech hiring automation platform

**Contact Page:** https://baaz.pro/get-in-touch

**Logo:** Use `public/assets/Logo.svg` from the project (export as PNG if the platform requires it)

---

### 6.1 Clutch.co

1. Go to https://clutch.co/register
2. Click **"Create Free Profile"** or **"Claim Your Company"** (search for Baaz first)
3. Fill in:
   - Company name, website, HQ location, founding year, size — use values above
   - **Focus areas:** Custom Software Development, Mobile App Development, UX/UI Design, AI Development
   - **Industry focus:** Financial Services, Healthcare, Retail, Construction
   - **Min. project size:** Set based on your actual minimum (e.g. $25,000)
   - **Hourly rate:** Set your range
   - **Description:** Paste the long description above
4. Add portfolio items (link to `/work1` and `/work2`)
5. **Request reviews:** Clutch ranks heavily on verified client reviews — send review invites to past clients from within the Clutch dashboard

---

### 6.2 G2

1. Go to https://www.g2.com/products/new
2. Search for Baaz first; if not listed, click **"List Your Product"**
3. Choose category: **Software Development Company** or **Product Design**
4. Fill in:
   - Product/Company name, website, description — use values above
   - Upload logo
   - Add screenshots of the site or case studies
5. **Collect reviews:** G2 provides a review link you can share with clients; reviews drive visibility on G2

---

### 6.3 GoodFirms

1. Go to https://www.goodfirms.co/add-company
2. Register with company email
3. Fill in:
   - Company name, website, founding year, HQ, size — use values above
   - **Services:** Select Software Development, Mobile App Development, UI/UX Design, AI Development
   - **Description:** Paste the long description
   - Add portfolio links (`/work1`, `/work2`)
   - Set hourly rate and min. project size
4. Submit for review (GoodFirms verifies before listing)

---

### 6.4 DesignRush

1. Go to https://www.designrush.com/agency/profile/create (or look for "List Your Agency")
2. Fill in:
   - Company name, website, location, founding year, team size
   - **Categories:** Product Design, Software Development, Mobile App Development, AI Development
   - **Description:** Paste the long description
   - Add case study links
3. Submit; DesignRush team reviews and publishes

---

### 6.5 Manifest

1. Go to https://manifest.co (look for "Add Your Company" or "Get Listed")
2. Fill in:
   - Company name, website, HQ, services — use values above
   - **Description:** Paste the short or long description
   - Add case study links
3. Submit for listing

---

### 6.6 TopDevelopers.co

1. Go to https://www.topdevelopers.co/submit-agency
2. Fill in:
   - Company name, website, founding year, HQ, size
   - **Services:** Web Development, Mobile App Development, UI/UX Design, AI/ML
   - **Description:** Paste the long description
   - Add portfolio and contact page links
3. Submit for review
