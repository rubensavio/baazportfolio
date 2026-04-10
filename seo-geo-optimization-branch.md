## Technical SEO

- XML sitemap (main pages + services + industries + ERP + blog + technologies) — **Done**
- `robots.txt` + sitemap link — **Done**
- Canonical URLs (one preferred URL per page) — **Done**
- Regional / hreflang alternates — **Done**
- Redirect `www` → main domain (production) — **Done**
- Redirects when URLs change (e.g. old path → new path) — **Done** (where configured)
- HTTPS + strong security headers (HSTS, etc.) — **Done**
- Fast fonts (e.g. `next/font`, swap) — **Done**
- Core Web Vitals (speed, layout shift, responsiveness) — **Partial** (measure in PageSpeed / Search Console; fix per page)
- Home page image optimisation (`next/image` on hero, brands, testimonials, CTA; other sections may still use plain `<img>`) — **Partial**
- Crawl errors / 404s / broken links — **Todo** (check in Search Console + occasional audit)

---

## On-page SEO

- Unique **title** and **meta description** on key templates (home, services, blog, industries, ERP, tech stacks, etc.) — **Done**
- **Open Graph** + **Twitter** preview tags on those templates — **Done**
- **Structured data** (JSON-LD: organisation, services, FAQs, articles, breadcrumbs where relevant) — **Done**
- Clear **URL slugs** (`/services/...`, `/blog/...`, etc.) — **Done**
- One clear **H1** and sensible **H2/H3** order on every page — **Done** (Manual audit completed)
- **Alt text** on all meaningful images — **Done**
- **Internal links** from nav, services, technologies, blog to important pages — **Partial** (can always add more)
- Thin or duplicate copy across regions — **Todo** (content / strategy; keep regions useful, not empty)

---

## Off-page SEO

_(Mostly not something the repo “finishes”—you track it in tools and outreach.)_

- **Backlinks** (quality sites linking to you) — **Todo** / ongoing
- **Google Business Profile** and other listings (if you want local visibility) — **Todo** / optional
- **Brand mentions** (social, press, directories) — **Todo** / ongoing
- **Reviews / reputation** on third-party sites — **Todo** / optional

---

## GEO (show up well in AI answers & overviews)

- **FAQ-style** blocks and **short “direct answer”** text on services and tech pages — **Done**
- **FAQ schema** where FAQs exist (home, services, some blog posts) — **Done**
- **Clear “who we are”** entity info (organisation schema, contact, topics you cover) — **Done**
- **robots.txt** allows common AI crawlers (along with everyone else) — **Done**
- **`/llms.txt`** (short file telling AI systems what your site is and what to trust) — **Done**
- **Facts and numbers** tied to a **source** or date (so models can cite safely) — **Partial**
- **Named authors** on blog posts + person-style trust signals — **Done**

---

## Quick read

| Area      | Strongest in repo now                                    | Weakest / next focus                      |
| --------- | -------------------------------------------------------- | ----------------------------------------- |
| Technical | Sitemap, canonicals, hreflang, redirects, security       | CWV tuning, full image + performance pass |
| On-page   | Meta, OG/Twitter, JSON-LD, clean URLs, H1s, Alt text     | Extra internal links                      |
| Off-page  | —                                                        | Backlinks, listings, brand (outside code) |
| GEO       | FAQs, direct answers, org schema, llms.txt, author trust | Sourced stats                             |
