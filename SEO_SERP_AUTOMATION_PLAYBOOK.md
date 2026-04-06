---
title: SEO & SERP automation playbook
version: "1.0.0"
purpose: >
  Single source of truth for agents and CI-style automations: technical SEO,
  on-page SEO, SERP analysis, and audit reporting. Derived from seomachine
  seo-audit and Cursor skills technical-seo-checker, serp-analysis,
  on-page-seo-auditor.
repo_conventions:
  page_framework: PAGE_OPTIMIZATION_FRAMEWORK.md
  meta_length_script: npm run meta-audit
  canonical_hreflang: lib/regions.js getAlternates()
  site_url: lib/siteUrl.js NEXT_PUBLIC_SITE_URL
---

# SEO & SERP automation playbook

Use this document to drive **repeatable audits**, **agent prompts**, and **future automations** (scripts, scheduled checks, PR reviewers). It merges:

| Source | Path / skill |
|--------|----------------|
| SEO audit framework | `C:\Users\laxma\Documents\seomachine\.claude\skills\seo-audit\SKILL.md` |
| Technical SEO | Cursor skill **technical-seo-checker** (`on-page-seo-auditor` sibling in same library) |
| SERP intelligence | Cursor skill **serp-analysis** |
| On-page HTML & scoring | Cursor skill **on-page-seo-auditor** (there is no separate **on-page-seo-editor** skill; use this + meta-tags-optimizer if needed) |

For **this repo’s** page metadata, data shapes, and legal/blog patterns, always cross-check **`PAGE_OPTIMIZATION_FRAMEWORK.md`**.

---

## 1. Global rules (all automations)

### 1.1 Audit priority order (fix in this sequence)

1. **Crawlability & indexation** — Can search engines find and index the URL?
2. **Technical foundations** — Speed, HTTPS, mobile, redirects, canonicals.
3. **On-page optimization** — Title, meta, headings, content, internal links, images.
4. **Content quality** — Depth, intent match, E-E-A-T signals.
5. **Authority & links** — Off-page (out of scope for most page-level automations unless data provided).

### 1.2 Pre-flight context (ask or read once)

- Site type (SaaS, content, local, e-commerce).
- Priority URLs and primary keywords.
- Search Console / analytics access (or exports).
- Recent migrations or domain changes.
- Optional: `.claude/product-marketing-context.md` if present in a project.

### 1.3 Evidence rule (required for every finding)

Each issue in automated or agent output **must** include:

- **Issue** — What is wrong.
- **Impact** — High / Medium / Low (SEO).
- **Evidence** — URL, header name, tool output, line of code, or metric with units.
- **Fix** — Concrete action.
- **Priority** — P1–P5 or High/Medium/Low.

Generic advice with no evidence is **invalid** output for this playbook.

---

## 2. Technical SEO (automation checklist)

Aligned with **seo-audit** technical section and **technical-seo-checker** steps.

### 2.1 Crawlability

| Check | Pass criteria | Typical evidence |
|-------|----------------|------------------|
| `robots.txt` | Exists, valid syntax, sitemap URL declared, money pages not blocked | GET `/robots.txt` |
| XML sitemap | 200 OK, valid XML, indexable URLs only, `lastmod` where maintained | GET `/sitemap.xml` |
| Architecture | Key pages ≤ 3 clicks from home; no orphan money pages | Crawl map |
| Crawl budget (large sites) | Params/facets controlled; no session IDs in URLs; infinite scroll has fallback | URL inventory |

### 2.2 Indexation

| Check | Pass criteria |
|-------|----------------|
| Index status | `site:` sanity vs sitemap count; GSC coverage |
| Blockers | No accidental `noindex`, wrong `X-Robots-Tag`, robots disallow on important paths |
| Canonicals | Present; self-ref on unique pages; HTTPS; consistent www/non-www and trailing slash |
| Duplicates | Parameter dupes, HTTP/HTTPS dupes resolved with canonical or redirect |
| Soft 404s | No “OK” pages that are thin/empty |

### 2.3 Core Web Vitals & performance

| Metric | Good threshold | Notes |
|--------|------------------|--------|
| LCP | &lt; 2.5 s | LCP element, images, fonts |
| INP | &lt; 200 ms | JS, main thread |
| CLS | &lt; 0.1 | Images dimensions, fonts, embeds |
| TTFB | As low as practical | Hosting, caching |

Tools: PageSpeed Insights, CrUX, GSC CWV report, WebPageTest, Lighthouse (local/CI).

### 2.4 Mobile, security, URLs

- Responsive layout; viewport; tap targets; parity with desktop content where required for mobile-first indexing.
- HTTPS sitewide; valid cert; no mixed content; HTTP→HTTPS redirects; **HSTS** in production where policy allows.
- Readable, lowercase, hyphenated URLs; consistent patterns; audit redirect chains and loops; avoid long 302 chains for permanent moves.

### 2.5 Structured data & international

- Validate JSON-LD / microdata with Rich Results Test / Schema.org validator where applicable.
- **Hreflang**: reciprocal tags, `x-default`, same path on each host if using regional domains/subdomains.

### 2.6 Technical audit output template (for agents / jobs)

```markdown
## Technical SEO summary
**Health score (optional)**: X/10
**Data source**: [crawl | PSI | manual | GSC export | repo file]

### Critical (P1)
- [Issue] — Evidence: … — Fix: …

### High (P2)
- …

### Quick wins
- …

### Roadmap
- Week 1: …
- Week 2–4: …
```

---

## 3. On-page SEO (automation checklist)

Merged from **seo-audit** on-page section and **on-page-seo-auditor** scoring dimensions.

### 3.1 Title tag

| Criterion | Target |
|-----------|--------|
| Length | ~50–60 characters visible in SERP (avoid habitual truncation) |
| Keyword | Primary term near the front when natural |
| Uniqueness | Unique per URL |
| Intent | Matches page purpose; compelling, not stuffed |

### 3.2 Meta description

| Criterion | Target |
|-----------|--------|
| Length | ~150–160 chars; **this repo**: run `npm run meta-audit` (blog/services/industry bands) |
| Content | Primary keyword once, value prop, soft CTA |
| Honesty | Matches on-page content (no bait-and-switch) |

### 3.3 Headings

- Exactly **one H1** per view; H1 aligned with primary topic.
- Logical **H2 → H3** order; no skipped levels for styling hacks.
- Headings describe content, not decoration.

### 3.4 Body content

- Primary keyword in **first ~100 words** where natural; related terms throughout.
- Depth appropriate to intent and SERP competitors (see §4).
- Avoid thin/duplicate/doorway patterns.

### 3.5 Images

- Descriptive file names; meaningful **alt** (empty alt only if decorative).
- Compression, modern formats where supported, lazy load, responsive sizing.

### 3.6 Internal linking

- Money pages and pillars linked from relevant contexts; descriptive anchors; no broken internal links; avoid orphan pillars.

### 3.7 Keyword mapping (site-level automation)

- One **primary keyword** per URL; title/H1/URL aligned where possible.
- Track **cannibalization** (two URLs competing for the same intent).

### 3.8 On-page audit summary template

```markdown
## On-page audit: [URL]
**Primary keyword**: …

| Element | Score 1–10 | Notes |
|---------|------------|--------|
| Title | | |
| Meta description | | |
| H1/H2 structure | | |
| Content depth | | |
| Keywords | | |
| Internal links | | |
| Images | | |
| Technical on-page (canonical, mobile) | | |

**Overall**: X/10
**Top 3 fixes**: …
```

---

## 4. SERP analysis (pre-content & competitive)

Use **before** writing or refactoring pages targeting a query. From **serp-analysis** skill.

### 4.1 Required inputs

- Keyword(s), **locale**, **device** (mobile/desktop), **date** of SERP snapshot.

### 4.2 Steps (automate or manual)

1. **Map SERP composition** — AI Overview, ads, featured snippet, organic 1–10, PAA, knowledge panel, images, video, local pack, news, sitelinks, related searches.
2. **Top 10 URL profile** — Content type, title/H1 patterns, freshness signals, schema, format (list vs longform), estimated depth.
3. **Patterns** — What formats dominate top 5? What SERP features can you win (snippet, PAA) vs blue-link #1?
4. **Intent** — Informational / commercial / transactional / mixed; cite SERP evidence.
5. **Difficulty** — Domain strength, content bar, SERP stability; suggest alternative keywords if unrealistic.
6. **Recommendations** — Outline, format, snippet/PAA strategy, differentiation.

### 4.3 Output validation (SERP)

- [ ] SERP features listed completely for the snapshot date.
- [ ] Recommendations cite **observed** SERP patterns, not generic SEO lore.
- [ ] Data source labeled (tool API vs manual screenshot vs user paste).

---

## 5. Content quality & E-E-A-T (cross-cutting)

From **seo-audit**; deeper scoring in **content-quality-auditor** (80-item CORE-EEAT) when needed.

| Pillar | Automation-friendly signals |
|--------|------------------------------|
| Experience | First-party examples, case language, specific delivery detail |
| Expertise | Accurate depth; credentials where relevant |
| Authoritativeness | External citations, recognized entities |
| Trustworthiness | Correct facts; contact; privacy/terms; HTTPS; transparent business |

---

## 6. Site-type quick reference

| Type | Common failures to script-check |
|------|-----------------------------------|
| SaaS / product | Thin product pages; blog not linked to product; no comparison/alternative URLs |
| E-commerce | Thin categories; duplicate PDP copy; faceted dupes; product schema gaps |
| Content / blog | Stale posts; cannibalization; weak internal links; missing author/context |
| Local | NAP inconsistency; missing LocalBusiness schema; weak location content |

---

## 7. Baaz portfolio repo hooks (automation targets)

When running checks against **this** codebase:

| Concern | Location |
|---------|-----------|
| Meta titles/descriptions (length) | `npm run meta-audit` → `lib/blogData.js`, `servicesData.js`, `industryData.js` |
| Page SEO / GEO checklist | `PAGE_OPTIMIZATION_FRAMEWORK.md` |
| Canonical + hreflang | `lib/regions.js` `getAlternates(path)` |
| Sitemap / lastmod | `app/sitemap.js`, `lib/sitemapStaticPaths.js`, `lib/sitemapLastmod.js` |
| Robots | `app/robots.js` |
| Blog Article schema | `app/blog/[slug]/layout.js` |
| Legal indexability | `/privacy`, `/terms` in sitemap static paths |

---

## 8. Tooling matrix

| Tool | Use |
|------|-----|
| Google Search Console | Indexing, CWV, queries, hreflang |
| PageSpeed Insights / CrUX | LCP/INP/CLS |
| Rich Results Test | Structured data |
| Mobile-Friendly Test | Mobile UX |
| Bing Webmaster | Secondary engine |
| Screaming Frog / Sitebulb / Ahrefs / Semrush | Crawl, links (when licensed) |

---

## 9. Machine-readable issue schema (optional JSON)

Automations can emit an array of objects:

```json
{
  "id": "canonical-mismatch",
  "category": "technical|onpage|serp|content",
  "severity": "critical|high|medium|low",
  "url": "https://example.com/path",
  "evidence": "string or object",
  "recommendation": "string",
  "skill_ref": "technical-seo-checker|on-page-seo-auditor|serp-analysis|seo-audit"
}
```

---

## 10. Standard prompts (copy for agents)

```
Technical: Perform a technical SEO audit for [DOMAIN] using SEO_SERP_AUTOMATION_PLAYBOOK.md §2; cite evidence per §1.3.
On-page: Audit on-page SEO for [URL] targeting [KEYWORD] using §3; include scores and locations of fixes.
SERP: Analyze the SERP for [KEYWORD] in [LOCALE] on [DEVICE] using §4; map features and top 10 patterns.
Full: Run §1 priority order for [URL or SITE]; output executive summary + P1–P3 fixes.
```

---

## 11. Changelog

| Version | Date | Notes |
|---------|------|--------|
| 1.0.0 | 2026-04-06 | Initial merge of seomachine seo-audit + technical-seo-checker + serp-analysis + on-page-seo-auditor |

---

## 12. Related internal docs

- `PAGE_OPTIMIZATION_FRAMEWORK.md` — Baaz URL/metadata/content checklist.
- `BLOG_WRITING_FRAMEWORK.md` — Long-form blog rules (if present).
- Seomachine skill references: `seo-audit/references/` (AEO/GEO patterns, AI writing detection) when expanding this playbook.
