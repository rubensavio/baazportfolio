# Blog writing framework — copy, SEO & GEO (Baaz)

Use this document when **authoring or refreshing** posts for **`/blog/[slug]`**. It combines:

- **Conversion copy principles** (clarity, structure, voice) — aligned with the workflow in `c:\Users\laxma\Documents\seomachine\.claude\skills\copywriting\`  
- **SEO, GEO, metadata, and template UI** — aligned with **[PAGE_OPTIMIZATION_FRAMEWORK.md](./PAGE_OPTIMIZATION_FRAMEWORK.md)** (single source of truth for lengths, schema, checklists)

**Rule of thumb:** Write copy with this framework; verify lengths, schema, and technical steps with **PAGE_OPTIMIZATION_FRAMEWORK.md §§3–6, 9, 11–13**.

---

## 1. How the live page maps to your draft (UI)

The client template renders data in this **order** (`app/blog/[slug]/BlogPostPageClient.js`):

| Order | UI | Data field | Notes |
|------|-----|------------|--------|
| 0 | **Theme shell** | `theme` (optional) | Omit or `"v2"` → editorial dark (`baaz-v2` + `styles/baaz-v2-shell.scss`). Set `"legacy"` only to opt out. See `lib/blogPostTheme.js`. |
| 1 | Muted **label** | `contentType` | e.g. Guide, Comparison, Checklist — `v2-label` styling |
| 2 | **H1** | `title` | One per page; can be slightly longer or more specific than `metaTitle` |
| 3 | **Direct answer** (extraction-first) | `directAnswer` | Class: `blog-direct-answer` — first screen under H1 |
| 4 | **Intro** | `intro` | Class: `blog-intro` — full-width promise and scope |
| 5 | **Sections** | `sections[]` | Each: `heading` → H2 (`blog-section-heading`); `body[]` → one `<p>` per string (`blog-section-paragraph`) |
| 6 | Optional **table** | `section.table` | `caption`, `headers`, `rows` — comparison / GEO-friendly structure |
| 7 | **FAQ** (visible + JSON-LD) | `faqs[]` | Same strings as FAQ schema in layout — **single source of truth** |
| 8 | **Fixed explore line** | *(hardcoded in template)* | Links to get in touch & case studies — v2 underline links |
| 9 | **Closing CTA + footer** | *(template + `HOME_CTA`)* | v2 arrow link to `/get-in-touch`; shared `Footer` via `baaz-v2-shell` |

**Metadata & schema** (not visible as body copy): `app/blog/[slug]/layout.js` — `generateMetadata` from `metaTitle` / `metaDescription`, Open Graph/Twitter images (`data.ogImage` or default), **Article** + **FAQPage** JSON-LD, breadcrumbs.

**Optional field:** `relatedLinks[]` — kept in data for parity with [PAGE_OPTIMIZATION_FRAMEWORK.md](./PAGE_OPTIMIZATION_FRAMEWORK.md); the default template does **not** render it yet. Until a list UI exists, satisfy internal-link intent via **related topics in section prose**, **`blog-explore`**, and **cross-links from the blog index** to sibling posts.

---

## 2. Copy principles (blogs)

These mirror the **copywriting** skill: clear, specific, honest copy that respects the reader.

### Before you write

Gather (or read from `.claude/product-marketing.md` if you add one):

1. **Purpose** — One main question the post answers; one primary reader (founder, EM, procurement, etc.).  
2. **Audience** — Problem, language they use, objections.  
3. **Outcome** — What they can *do* or *decide* after reading.  
4. **Traffic context** — Organic vs paid vs LinkedIn (adjust intro sharpness if needed).

### Principles

| Principle | For blogs |
|-----------|-----------|
| **Clarity over cleverness** | H1 and H2 say what the section *is*; avoid cryptic titles. |
| **Benefits over features** | Tie patterns to outcomes (shipping, risk, cost of delay). |
| **Specificity over vagueness** | Concrete examples, phases, criteria — not “streamline” / “robust” without detail. |
| **Customer language** | Match how buyers ask (e.g. “switch vendor”, “MVP scope”, “SLO”). |
| **One idea per section** | Each H2 advances one argument; split if you mix criteria + process + risks. |
| **Active voice** | Prefer “Ship a thin slice first” over “A thin slice should be shipped first.” |
| **Honest claims** | No fabricated stats; third-party numbers need **source + year**; first-party bands need **methodology** (per PAGE_OPTIMIZATION **§6 Editorial trust**). |

### Style quick check

- Jargon without definition?  
- Sentences doing triple duty?  
- Passive pile-up?  
- Exclamation points in professional posts?  
- Buzzwords with no proof?

### Engagement devices (use sparingly)

- **Rhetorical questions** in intros or transitions (“Tired of scope creeping every sprint?”).  
- **Analogies** for abstract architecture or process.  
- **Humor** only if it does not blur risk or compliance.

### Headlines (H1 + H2)

**H1 (`title`):** Specific promise or scope; matches search intent. Formulas that work well for Baaz-style guides:

- *How to {outcome} ({qualifier})*  
- *{Topic}: {subtitle with audience or year}*  
- *{Artifact} for {audience}* (e.g. reference architecture for B2B SaaS)

**H2s:** Descriptive; preview the section. Use transitions between sections (“Next, …”, “With that in mind, …”) — see natural-transition lists in the external skill’s `references/natural-transitions.md` if you need variety.

**Note:** The **SERPTitle** is `metaTitle` — it can be a tighter 50–60 character variant; H1 can be slightly more descriptive (PAGE_OPTIMIZATION **§3**).

### CTAs on blog posts

- **Do not** litter mid-article “contact us / book a call / free audit” blocks in `body[]`. The template already provides **`blog-explore`** + **CTA** (PAGE_OPTIMIZATION **§6 Editorial trust**).  
- **Optional:** One short **Baaz positioning** paragraph only in the **final** section before FAQs, or omit.

---

## 3. SEO & GEO (what to hit every time)

Full numeric targets, meta bands, and anti-patterns live in **[PAGE_OPTIMIZATION_FRAMEWORK.md §6](./PAGE_OPTIMIZATION_FRAMEWORK.md)**. Summary for blogs:

| Area | Target |
|------|--------|
| **`directAnswer`** | Standalone; **~25–50 words**; starts with topic; not a duplicate of full intro |
| **`intro`** | **~120–220 words**; audience, promise, boundaries; aligns with `directAnswer` |
| **H2 count** | **≥ 8** pillars / comparisons / deep technical; **≥ 6** focused guides |
| **Depth per H2** | **≥ 4** `body[]` paragraphs on average; **~3–6 sentences** each |
| **Total body words** (intro + sections, **excluding** FAQ) | **≥ 2,000** pillars (**stretch 2,400+**); **≥ 1,400** narrower guides (**stretch 1,800+**) |
| **Structure** | At least one **table**, step-like sequence, or distinct comparison sections |
| **Evidence** | **≥ 2** named external references **or** **≥ 2** labelled first-party statements |
| **Limitations** | Dedicated H2 (“What this is not”, “Assumptions”, …) on technical/buyer guides |
| **FAQ** | **≥ 4** for strong pillars; **≥ 5** ideal; answers **~40–120 words**; **identical** to JSON-LD |
| **Meta title** | **~50–60** characters; keyword early; `| Baaz` where it fits |
| **Meta description** | **~150–160** characters; one clear value proposition |
| **Primary keyword** | Natural use in first **~100 words** of body (intro + early sections) |

**GEO (AI/search extraction):** Direct answer up front, quotable definitions, FAQs as follow-up queries, tables for A vs B, limitations for trust — see PAGE_OPTIMIZATION **§§1, 11–12**.

---

## 4. Data shape (authoring contract)

```text
slug                 // lowercase, hyphenated, stable
contentType          // e.g. Guide, Comparison, Checklist, Architecture guide
theme?               // omit or "v2" (default); "legacy" opts out of editorial dark shell
metaTitle
metaDescription
title                // H1
directAnswer         // required for new posts
intro
sections[]:
  heading
  body[]             // each string → one <p>
  table?             // optional: caption, headers, rows
faqs[]?              // question, answer — matches schema
relatedLinks[]?      // optional; for future UI / handoff
datePublished        // Article schema
dateModified
ogImage?             // optional; else default OG path in layout
```

Register: **`lib/blogData.js`** (or `lib/blogPosts/*.js` + import), **`lib/sitemapLastmod.js`** (`BLOG_SLUG_LASTMOD`).

---

## 5. Authoring workflow (end-to-end)

1. **Brief** — Audience, main query, content type, competitor angle (PAGE_OPTIMIZATION **§15** keywords + intent).  
2. **`directAnswer`** — Write first; extraction-optimized.  
3. **`title` + outline** — H1 + **≥ 6–8** H2s before heavy drafting.  
4. **`metaTitle` / `metaDescription`** — Draft early; refine after body (PAGE_OPTIMIZATION **§3**).  
5. **`intro`** — Hit word band; no contradiction with `directAnswer`.  
6. **Sections** — Paragraph count and depth per §3 above; add **`table`** where it clarifies.  
7. **Limitations H2** — Trust + GEO.  
8. **`faqs`** — Mirror real follow-ups; align wording with layout FAQ schema.  
9. **Copy pass** — Principles in **§2** (clarity, specificity, no mid-article CTA).  
10. **Technical** — `npm run meta-audit`; word-count on body only; Rich Results Test after deploy (PAGE_OPTIMIZATION **§§3–4, 13**).

---

## 6. Pre-publish checklist (blog-only)

- [ ] **Copy:** H1 + H2s clear; no buzzword soup; stats sourced or labelled  
- [ ] **PAGE_OPTIMIZATION §6:** Intro length, H2 count, paragraphs/H2, body word minimum, limitations H2  
- [ ] **`directAnswer`** present and not duplicated as entire intro  
- [ ] **FAQ ≥ 4–5** for pillars; visible = schema  
- [ ] **Meta** unique; `meta-audit` clean for this slug  
- [ ] **`sitemapLastmod`** updated for slug  
- [ ] **No mid-article sales CTA** in sections  
- [ ] Preview **`/blog/{slug}`** — label → H1 → direct answer → intro → sections → FAQ → explore → CTA  

---

## 7. Reference files

| Topic | File |
|--------|------|
| Meta lengths, global checklist, FAQ discipline, §6 tables | [PAGE_OPTIMIZATION_FRAMEWORK.md](./PAGE_OPTIMIZATION_FRAMEWORK.md) |
| Blog UI & theme | `app/blog/[slug]/BlogPostPageClient.js`, `app/blog/[slug]/page.scss`, `lib/blogPostTheme.js`, `styles/baaz-v2-shell.scss` |
| Schema + metadata | `app/blog/[slug]/layout.js` |
| Post data | `lib/blogData.js`, `lib/blogPosts/*.js` |
| Index sort / listing | `app/blog/page.js` |
| Sitemap | `app/sitemap.js`, `lib/sitemapLastmod.js` |

**External copy references (optional):** Headline formulas and transition phrases — `seomachine\.claude\skills\copywriting\references\copy-frameworks.md` and `natural-transitions.md`.

---

## 8. Sign-off (blog post)

**Slug:**  
**Type:**  

- [ ] Copy framework §2–3 satisfied  
- [ ] PAGE_OPTIMIZATION §6 depth + §3 meta satisfied  
- [ ] FAQ/schema aligned  
- [ ] Lastmod + meta-audit done  

**Reviewer / date:**

---

*Baaz Next.js blog. Keep in sync with PAGE_OPTIMIZATION_FRAMEWORK.md when template or schema changes.*
