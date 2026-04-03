# Page optimization framework — SEO, GEO & meta (Baaz)

Use this as the **single checklist** when you add or substantially refresh **blog posts**, **service pages**, **industry pages**, or other **marketing URLs**. It covers:

- **SEO** — titles, descriptions, hierarchy, internal links, technical metadata  
- **GEO** — content that search and AI systems can extract, quote, and match to questions  
- **Meta & social** — length targets, where fields live in the repo, `npm run meta-audit`  

Targets align with the **meta-tags-optimizer** and **on-page SEO auditor** rubrics where applicable.

---

## 1. Goals (what “good” looks like)

1. **Direct answer early** — In the first screen of body copy, a standalone sentence or short paragraph answers the main question without requiring the prior paragraph.  
2. **Quotable facts** — Prefer specific claims with **sources** (reports, regulators, vendors) or explicit **first-party labels** (“per Baaz’s internal project classification”) when citing your own metrics.  
3. **Structure** — Short sections (roughly 3–5 sentences per idea), **lists** where steps matter, **tables** for comparisons (A vs B, pattern vs pattern). For **blog** posts, also meet the **minimum depth** targets in **§6** (intro length, H2 count, paragraphs per section, body word-count band)—FAQs alone are not sufficient “vast” content.  
4. **Q&A** — An FAQ block that mirrors real follow-up questions; **visible answers must match JSON-LD** where FAQ schema is used.  
5. **Schema** — `Article` (blog), `Service` + `FAQPage` (services), `BreadcrumbList` + `FAQPage` (industries), etc., emitted from **server layouts** when possible so crawlers always see them.  
6. **Meta honesty** — Title and description match what the page delivers (no bait-and-switch); length in sensible bands for SERP and social previews.

---

## 2. How templates map to the codebase

| Concern | Blog posts | Service pages | Industry pages |
|--------|------------|---------------|----------------|
| URL | `/blog/[slug]` | `/services/[serviceType]` | `/industry/[industrySlug]` |
| Primary data | `lib/blogData.js` (+ optional `lib/blogPosts/*.js`) | `lib/servicesData.js` | `lib/industryData.js` |
| Metadata + hreflang | `app/blog/[slug]/layout.js` | `app/services/[serviceType]/layout.js` | `app/industry/[industrySlug]/layout.js` |
| Visible page | `app/blog/[slug]/page.js` | `app/services/[serviceType]/page.js` | `app/industry/[industrySlug]/page.js` |
| JSON-LD | **Article** + **FAQPage** (when `faqs`) in **blog layout**; breadcrumbs in blog layouts | **Service** + **BreadcrumbList** + **FAQPage** (when `faqs`) in **service layout** | **BreadcrumbList** + **FAQPage** (when `faqs`) in **industry layout** |
| FAQ UI | Rendered on **page** from `data.faqs` | Same pattern | Same pattern |
| Sitemap | `app/sitemap.js` (entries from data keys) | Same | Same |

**Global technical rules**

- Canonical + `hreflang` come from `getAlternates(path)` in `lib/regions.js` — no manual canonical tags in JSX.  
- Site origin for metadata/sitemap uses `NEXT_PUBLIC_SITE_URL` / `lib/siteUrl.js`.  
- After adding a new slug, confirm `app/sitemap.js` still includes it.

---

## 3. Where metadata lives

| Layer | Source of truth |
|--------|------------------|
| **Site default** (OG image, `metadataBase`) | `app/layout.js` |
| **Blog index** | `app/blog/layout.js` |
| **Each blog post** | `lib/blogData.js` / `lib/blogPosts/*.js` — `metaTitle`, `metaDescription` |
| **Blog post route** | `app/blog/[slug]/layout.js` → `generateMetadata` reads post data; merges OG/Twitter |
| **Each service** | `lib/servicesData.js` — `metaTitle`, `metaDescription` |
| **Service route** | `app/services/[serviceType]/layout.js` |
| **Each industry** | `lib/industryData.js` — `metaTitle`, `metaDescription` |
| **Industry route** | `app/industry/[industrySlug]/layout.js` |
| **Other marketing pages** | `app/<route>/layout.js` |

Keep **one set of strings** in the data object (or layout export); `generateMetadata` maps them into `openGraph` and `twitter`.

### Length and format targets

**Title (`metaTitle` or `metadata.title`)**

- **Target:** **50–60 characters** (including spaces); primary topic in the **first ~35**; end with `| Baaz` where it fits the pattern.  
- **Avoid:** Duplicating a long H1 verbatim; the title can be a tighter SERP variant.

**Meta description**

- **Target:** **150–160 characters**; prefer a **complete sentence**; do not rely on ellipses.  
- **Formula:** `[What the page is]` + `[Who it’s for / outcome]` + `[Soft CTA or differentiator]`; main keyword **once**, naturally.

**Open Graph / Twitter**

- Usually **same** title/description as SEO fields.  
- Default OG image is on the root layout; add per-page `openGraph.images` only for a **1200×630** (or equivalent) asset worth swapping in.  
- Keep `og:url` / canonical patterns consistent with `getSiteUrl()` + path, as in existing layouts.

### Content-type hints (tone + SERP)

| Content type | Title pattern ideas | Description emphasis |
|--------------|--------------------|----------------------|
| Guide / how-to | `How to X \| Guide \| Baaz` | Steps, audience, outcome |
| Comparison / listicle | Topic + scope/year + `\| Baaz` | What’s compared, honest scope |
| Architecture / technical | Topic + artifact (APIs, SLOs) + `\| Baaz` | What you’ll learn, prerequisites |
| Checklist | `X Checklist \| Baaz` | Phases, rescue/delivery context |
| Service | `{Service} \| Baaz` or `{Service}: {platform} \| Baaz` | Deliverables, stack, engagement model |
| Industry | `{Vertical} {Software/Transformation} \| Baaz` | Compliance, workflows, outcomes |

### Automate length checks

From the repo root:

```bash
npm run meta-audit
```

Rows prefixed with `!` flag a title over **62** characters or a description outside **140–170** (loose band around 150–160).

### Meta self-review (30 seconds)

1. Title + description: would I know **which URL** this is vs another page?  
2. Does the **first paragraph** deliver the same promise?  
3. Title ~≤60 chars; description ~**155** chars and **one clear thought**?  
4. No **duplicate** descriptions across two live URLs?

---

## 4. Global checklist (every important URL)

- [ ] **Slug** — Lowercase, hyphenated, stable.  
- [ ] **`metaTitle`** — ~50–60 characters; primary keyword near the start; `| Baaz` where it fits.  
- [ ] **`metaDescription`** — ~150–160 characters; unique; value + intent; entity (Baaz), **location** if relevant (Bangalore / global).  
- [ ] **One H1** — Close to the user’s query phrasing; matches expectation (can differ slightly from a shortened title).  
- [ ] **`directAnswer`** — See §5; 25–45 words (max ~60), standalone, first screen under H1 for blog/service/industry templates that use it.  
- [ ] **Definition** (if technical) — Formal 1–3 sentence definition on pillar/service/industry pages where applicable.  
- [ ] **H2s / H3s** — Descriptive; no skipped levels (H1 → H2 → H3).  
- [ ] **FAQ** — ≥4 questions for strong pillar content when you use FAQ; answers **40–120 words** unless a list is clearer; **same strings** as JSON-LD.  
- [ ] **Blog article body** — For `/blog/[slug]`, meet **§6 long-form targets** (sections + intro word band); do not ship pillar posts where the FAQ block is the only long copy.  
- [ ] **Internal links** — Services, industries, `/project-rescue`, `/get-in-touch`, related posts where natural.  
- [ ] **Limitations** — For architecture/opinion posts, a short “what this is not / assumptions” section builds trust (GEO).  
- [ ] **Images** — Meaningful `alt` for content images; decorative backgrounds may use `alt=""`; hero/LCP: dimensions + `fetchPriority` where appropriate (see service pattern).  
- [ ] **`lib/sitemapLastmod.js`** — Update if you maintain realistic `lastModified` for that section.  
- [ ] **Validate** — After deploy: [Google Rich Results Test](https://search.google.com/test/rich-results); spot-check View Source for `application/ld+json`.

---

## 5. Field reference: `directAnswer`

**What it is:** Short copy **immediately under the H1** on blog posts, service pages, and industry pages (classes: `blog-direct-answer`, `services-direct-answer`, `industry-direct-answer`).

**Rules**

- Start with the **topic term** or a clear subject.  
- **Do not** duplicate the entire `intro`; expand or compress for extraction.  
- Aim **≤ 50 words**; max ~60 if needed.  
- No unverified statistics unless **sourced** in body/FAQ or labeled **internal**.

**Where to set it**

| Content type | Location |
|--------------|----------|
| Blog | `directAnswer` on the post object in `lib/blogData.js` or `lib/blogPosts/*.js` |
| Service | `directAnswer` on the entry in `lib/servicesData.js` |
| Industry | `directAnswer` on the entry in `lib/industryData.js` |

---

## 6. Blog posts (`/blog/[slug]`)

### Data shape

- `slug`, `contentType`, `metaTitle`, `metaDescription`, `title`  
- **`directAnswer`** (required for new posts)  
- `intro`  
- `sections[]`: `heading`, `body[]`, optional `table` (`caption`, `headers`, `rows`)  
- `faqs[]` — optional; **recommended** for pillars; must match FAQ JSON-LD  
- `relatedLinks[]` — optional  

### Long-form body targets (“vast” pillar content)

Use these **minimums for new or fully refreshed posts** so article body depth matches strong SEO/GEO competitors—not just FAQ depth.

| Layer | Target | Notes |
|--------|--------|--------|
| **`intro`** | **120–220 words** (one `<p>` in data = one string; use **2–4 sentences minimum**, often 5–8) | States audience, promise, scope, and what the reader leaves with; must not contradict `directAnswer`. |
| **H2 sections** | **≥ 8** for pillar guides, comparisons, and deep technical posts; **≥ 6** for focused guides/listicles | Each H2 = one major intent (problem, criteria, process, risks, examples, limitations). |
| **Paragraphs per H2** | **≥ 4 `body[]` strings** per section on average; avoid habitual **1–2 paragraph** sections unless they are deliberate summaries | Each paragraph: **roughly 3–6 sentences** (~80–180 words). Prefer several focused paragraphs over one wall of text. |
| **Total article body** (intro + all `sections[].body`, **excluding** FAQ) | **≥ 2,000 words** for pillars/comparisons/architecture (**stretch 2,400+** for flagship URLs); **≥ 1,400** for narrower guides (**stretch 1,800+**) | Count in an editor before shipping; thin bodies hurt crawl quality and AI extraction. Iteratively raise older posts toward the stretch band. |
| **Structural variety** | At least **one** of: `table` (comparison), step-like sequences in prose, or **3+** sections that answer distinct sub-questions | Tables: `caption` + clear headers; cite that numbers are ballparks when applicable. |
| **Evidence** | **≥ 2** explicit references (named report/vendor/book/regulator) **or** **≥ 2** first-party labels (“per Baaz’s project mix…”) where stats appear | Avoid unsourced percentages in body/FAQ; framework §1. |
| **Limitations / scope** | **Dedicated H2** on technical or buyer guides (“What this is not”, “Assumptions”, “When to get specialist help”) | Short trust win for GEO; already standard on architecture posts—apply to buyer guides too. |
| **Internal links** | **≥ 2** `relatedLinks` or inline `Link` targets where the template supports it | Cross-link services, `/project-rescue`, `/get-in-touch`, related `/blog/[slug]`. |

**Authoring order (repeatable)**

1. **`directAnswer`** — extraction-first, ≤ ~50 words.  
2. **`intro`** — expand to word target; set reader and boundaries.  
3. **Outline H2s** — aim for section count target before writing.  
4. **Draft each section** — minimum paragraph count per H2; add examples, anti-patterns, and transitions.  
5. **Add table or comparison block** where it reduces ambiguity (options, phases, risks).  
6. **Limitations H2** + **relatedLinks**.  
7. **`faqs`** — ≥ **5** items for pillars; align wording with JSON-LD.  
8. **Meta** (`metaTitle`, `metaDescription`) + **`npm run meta-audit`**.  
9. **Word-count pass** — body only; if under target, **deepen** existing H2s before adding thin H2s.

**Anti-patterns**

- **FAQ as the only long copy** — FAQs support the article; they do not replace sections.  
- **Many H2s with 1–2 short paragraphs** — merge or deepen until averages meet the table.  
- **Duplicate stacks** — `directAnswer`, `intro`, and first H2 should not repeat the same sentence thrice; vary depth and angle.

**Editorial trust (blogs & long guides)**

1. **No mid-article sales CTAs** — Do not drop “contact us”, “book a call”, “free audit”, or “our [service] is built for this” paragraphs inside unrelated H2 bodies. The `/blog/[slug]` template already ends with the `blog-explore` block (services + `/project-rescue` + `/get-in-touch`) and the site CTA. Keep the article body educational; **one** optional Baaz-positioning section is acceptable **only** at the **end** of `sections[]` (immediately before FAQs), or omit and rely on the template footer.  
2. **Third-party statistics** — Any figure from an external report must include **source + publication year** in the same paragraph or FAQ answer, or soften to directional language (“surveys often find…”, “analyst estimates vary by year…”) so informed buyers are not handed stale numbers without context. Refresh or remove undated **2023-or-older** market stats when you cannot cite a current edition.  
3. **First-party ranges (e.g. codebase preservation 60–80%)** — Treat as **audit-dependent**, not a universal guarantee. Required pattern: tie the band to **methodology** (e.g. “per Baaz’s internal classification across N takeovers, post-audit”), state that **share varies by codebase**, and note that **salvage vs. replace** is documented in the audit. For buyer diligence, it must be defensible: offer **anonymized patterns and reference conversations under NDA**—do not imply public case studies exist where they do not. Prefer **one** detailed formulation in the canonical rescue content; elsewhere use a **shorter cross-reference** rather than repeating the identical claim in many posts.

### Technical notes

- **Article** + **FAQPage** JSON-LD: `app/blog/[slug]/layout.js` (do not duplicate FAQ script in the client page).  
- **Breadcrumbs**: Home → Blog → post title (layout).  
- Invalid slug: metadata still resolves alternates for `/blog/[slug]` — avoid linking to non-existent slugs.

### New post workflow

1. Add the post to `lib/blogData.js` or `lib/blogPosts/` and import in `blogData.js`.  
2. Register slug for sitemap if your setup requires it (`app/sitemap.js`, exports in `blogData.js`).  
3. Fill **`directAnswer`**, then **`intro`** (see long-form targets), then **sections** to depth targets; add **FAQ** with the same strings as schema.  
4. **Meta:** `metaTitle` / `metaDescription` per §3; align with H1 and intro.  
5. Preview `/blog/your-slug` — order: label → H1 → direct answer → intro → sections → FAQ.  
6. Run a **body word-count check** against §6 long-form table before merge.

### Blog-specific checklist

- [ ] `contentType` label is accurate (Guide, Listicle, Comparison, etc.).  
- [ ] **Long-form targets** (§6 table): intro length, section count, paragraphs per H2, body word minimum, limitations H2.  
- [ ] Tables use `table.caption` when context is needed.  
- [ ] Link **out** to authoritative sources for stats or vendors (GEO + E-E-A-T).  
- [ ] **No mid-article CTAs**; any Baaz-specific close lives in the **last** section only, or rely on the template `blog-explore` + site CTA (see **Editorial trust** above).  
- [ ] **Stats**: third-party numbers dated or softened; first-party bands (e.g. preservation %) methodology-labelled and not copy-pasted across every post.  
- [ ] Optional: `datePublished` / `dateModified` / `image` in Article schema when stable (`buildArticleSchema` in blog layout).  
- [ ] Optional: default or per-post `openGraph.images` for blog layout (improves shares vs homepage-only default).

---

## 7. Service pages (`/services/[serviceType]`)

### Data shape

- `label`, `heading`, **`directAnswer`**, `sectionHeading`  
- `metaTitle`, `metaDescription`  
- `description`, `definition`, `services[]`, `industryLinks[]`, `faqs[]`  

### Technical notes

- **Service** + **BreadcrumbList** + **FAQPage** (when `faqs`): `app/services/[serviceType]/layout.js`.  
- Invalid slug: page may **fall back** to default service content — avoid typos in internal links; new services need a **new key** in `servicesData`.  
- Breadcrumb middle item for “Services” follows current code in layout; if you add a `/services` hub, update the schema `item` for position 2.

### Workflow

1. Add or edit the key (slug = URL segment).  
2. **`directAnswer`**: Baaz + offering + Bangalore + global + since 2018 where true.  
3. **`metaDescription`**: tuned for CTR; can differ slightly from `directAnswer`.  
4. **`faqs`** aligned with JSON-LD (layout generates FAQ schema).

### Service-specific checklist

- [ ] **`metaTitle`** set explicitly — do not rely only on short `label` if length suffers.  
- [ ] **`definition`** is clear and quotable (AI summaries).  
- [ ] Each card: unique H3 + body.  
- [ ] `industryLinks` lists industries you want cross-linked.  
- [ ] Hero: `fetchPriority="high"` only if LCP-relevant.  
- [ ] **H1** (`heading`) vs **title tag** (`metaTitle`) may differ by design (brand vs keyword); if a page underperforms, test H1 closer to the primary keyword (one H1 only).

---

## 8. Industry pages (`/industry/[industrySlug]`)

### Data shape

- `slug`, `title`, **`directAnswer`**, `metaTitle`, `metaDescription`  
- `definition`, `intro`, `sections[]`, `relatedServices[]`, `faqs[]`  

### Technical notes

- **BreadcrumbList** + **FAQPage** (when `faqs`): `app/industry/[industrySlug]/layout.js`.  
- Invalid slug: dedicated fallback UI with links to real industries.  
- Breadcrumb “Industries” middle `item` follows current layout; update if you add an `/industries` hub.

### Workflow

1. Add key to `industryData`; export slug for sitemap if needed.  
2. **`directAnswer`**: Baaz + vertical + geography + since 2018.  
3. **`definition`**: textbook-style for “What is X development?”  
4. **FAQ** for commercial and compliance questions common in AI/search.  
5. **Meta:** vertical-specific title/description per §3.

### Industry-specific checklist

- [ ] `title` (H1) distinct from other industries.  
- [ ] `relatedServices` covers main monetization paths.  
- [ ] Regulated verticals: accurate language; FAQ for compliance where useful.  
- [ ] Optional: hero image `alt` parity with service pages if you want consistency.

---

## 9. FAQ + JSON-LD discipline

- **Single source of truth:** The same `faqs` array drives visible `<FAQ>` and schema in **layouts** (blog/services/industry); home/about/project-rescue use their respective `lib/*Faq*.js` modules.  
- **Never** change FAQ text in one place without updating the other.  
- Answers work as **standalone snippets** (avoid “see above” only).

---

## 10. New marketing route (not blog / service / industry)

1. Add `app/…/layout.js` with `generateMetadata` or `metadata` and `alternates: getAlternates('/your-path')`.  
2. Append URL to `app/sitemap.js` (and `withAlternates` if locales matter).  
3. Add JSON-LD appropriate to the content (`WebPage`, `FAQPage`, `Article`, etc.) — follow existing layouts.  
4. Extend performance audit scripts if you track CWV per template (e.g. `scripts/page-speed-audit.mjs`).  
5. Add a short note under this section when the pattern stabilizes.

---

## 11. Optional GEO enhancements

- Comparison tables in blog sections for “A vs B”.  
- **`Key takeaways`** at the top of long guides.  
- **Article** `datePublished` / `dateModified` when you maintain real dates.  
- **Citation line** under bold third-party stats (source + year).

---

## 12. Quick self-score before publish (GEO)

Score 1–5: direct answer present? Definitions clear? FAQs cover top queries? Table or list for comparisons? Claims sourced or labeled? Schema valid?

Target: **4+** on each before shipping major pages.

---

## 13. Files quick reference

| Action | Files |
|--------|--------|
| New blog post | `lib/blogData.js`, `lib/blogPosts/*.js` |
| New service | `lib/servicesData.js` |
| New industry | `lib/industryData.js` |
| Sitemap / lastmod | `app/sitemap.js`, `lib/sitemapLastmod.js` |
| Schema / metadata | Matching `app/.../layout.js` |
| Re-audit meta lengths | `npm run meta-audit`; grep `metaTitle` / `metaDescription` in `lib/*Data.js` |

---

## 14. Reference audit — template health (March 2026)

Snapshot from a **codebase review** of blog, service, and industry templates (not a live crawl). Use it as a **backlog**; re-run `meta-audit` after content changes.

### Blog posts — length table (ideal: title **50–60**, meta **150–160**)

| Slug | Title chars | Meta desc chars | Notes |
|------|-------------|-----------------|--------|
| `thoughtworks-alternatives` | 57 ✓ | 178 — long | Trim meta |
| `best-software-development-agencies-for-startups` | 54 ✓ | 187 — long | Trim meta |
| `how-to-choose-software-development-partner` | 59 ✓ | 200 — long | Pillar; tighten meta |
| `how-to-build-ai-powered-product` | 41 — short | 192 — long | Lengthen title; trim meta |
| `software-development-outsourcing-vs-in-house` | 51 ✓ | 181 — long | Trim meta |
| `product-engineering-process-for-enterprises` | 50 ✓ | 187 — long | Trim meta |
| `signs-your-software-project-is-failing` | 45 — short | 177 — long | Lengthen title; trim meta |
| `how-to-switch-software-development-vendors` | 57 ✓ | 191 — long | Trim meta |
| `software-project-rescue-checklist` | 40 — short | 185 — long | Lengthen title; trim meta |
| `reference-architecture-b2b-saas` | 51 ✓ | 194 — long | Trim meta |
| `slos-error-budgets-reliability` | 57 ✓ | 188 — long | Trim meta |
| `reliable-data-integration-events-cdc-outbox` | 54 ✓ | 190 — long | Trim meta |

**Blog template gaps:** `openGraph.images` / Twitter images not set per post in blog layout; Article schema may omit dates/image until extended; keep `metaTitle` and H1 **aligned on intent**.

**Approximate template score:** **72–78 / 100** — depth and FAQ/schema strong; losses mostly **title/meta tuning**, **OG images**, **Article completeness**.

### Service pages

| Key | Title chars | Meta desc chars | Notes |
|-----|-------------|-----------------|--------|
| `product-strategy` | 34 — short | 198 — long | Expand title; cut meta |
| `ui-ux-design` | 26 — short | 189 — long | Same |
| `web-development` | 41 — short | 158 ✓ | Title still short |
| `mobile-app` | 60 ✓ | 136 — short | Lengthen meta |
| `ai-solution` | 49 — short | 140 — short | Lengthen both |

**Approximate template score:** **68–74 / 100**.

### Industry pages

| Key | Title chars | Meta desc chars | Notes |
|-----|-------------|-----------------|--------|
| `fintech` | 35 — short | 172 — long | Lengthen title; trim meta |
| `construction` | 45 — short | 161 ✓ | Title short |
| `retail` | 36 — short | 183 — long | Lengthen title; trim meta |
| `healthcare` | 38 — short | 168 — long | Lengthen title; trim meta |

**Approximate template score:** **70–75 / 100**.

### Cross-cutting backlog

| Priority | Item |
|----------|------|
| High | Normalize **meta title** toward **50–60** characters. |
| High | Normalize **meta description** toward **150–160** characters. |
| Medium | **OG/Twitter images** for blog posts (layout default + optional per-post). |
| Medium | Enrich **Article** JSON-LD with dates + image when available. |
| Low | Industry hero `alt` parity with services if desired. |

---

## 15. Pre-publish procedure (on-page + meta)

1. **Keywords** — One primary + 2–3 secondary; note **intent** (informational / commercial).  
2. **`metaTitle`** — Per §3.  
3. **`metaDescription`** — Per §3; optional explicit CTA.  
4. **H1** — One; matches user expectation.  
5. **Body** — Primary term in **first ~100 words** where natural; internal links per §4.  
6. **`directAnswer`**, **definition**, **FAQ** — Per §§5–9.  
7. **Images** — Alt text and LCP hints per §4.  
8. **Technical** — Slug in sitemap; `getAlternates` path correct.  
9. **Live** — Render check + Rich Results Test.

**Character counting** — Editor/IDE or `meta-audit`; SERP display is **pixel-approximate**.

---

## 16. Sign-off (copy for PR or Notion)

**Page URL:**  
**Type:** Blog / Service / Industry / Other  

- [ ] Metadata unique and length-checked  
- [ ] H1 + heading hierarchy OK  
- [ ] Internal links added  
- [ ] FAQ + schema aligned (if applicable)  
- [ ] Live URL validated (render + Rich Results Test)  

**Reviewer / date:**

---

*Single framework for the Baaz Next.js app. Update when you add route types or change schema/metadata strategy.*
