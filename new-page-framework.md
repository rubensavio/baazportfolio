# Baaz — New Page Creation Framework

Use this document as a master reference when building any new service/offering page on the Baaz website. Provide the AI your page idea, key points, and attach this file. It will handle the rest.

---

## What You Provide

When requesting a new page, supply:

1. **Page title** — e.g. "E-commerce Marketplace Management"
2. **URL slug** — e.g. `ecommerce` (short, lowercase, hyphens only)
3. **Content sections** — a writeup with headings and bullet points covering:
   - Hero headline + subtext
   - Problem / pain points (3–6 items)
   - Approach / how Baaz solves it (3–6 items)
   - Service breakdown (2–4 categories with feature lists)
   - Case study or proof points (results + actions)
   - Technology / differentiator (if applicable)
   - Target audience
   - CTA (what the user gets)
   - FAQs (5–8 questions with answers)
4. **SEO keywords** — a list of 8–12 keywords to weave naturally into headings and copy

---

## Project Architecture

The site is a **Next.js 16 App Router** project at `e:\portfoliobaaz`.

### Key directories

```
app/                    ← Pages (each folder = route)
  ecommerce/            ← Reference page (use as template)
    layout.js           ← Server component: metadata + structured data
    page.js             ← Client component: all sections + FAQ
    page.scss           ← All page-specific styles
components/             ← Shared components (Navbar, Footer, FAQ, CTA, etc.)
hooks/                  ← useScrollAnimation hook
lib/                    ← Shared utilities (breadcrumbSchema, regions, servicesData, etc.)
public/assets/          ← SVGs and images
```

### Shared dependencies used by every page

| Import | Path | Purpose |
|--------|------|---------|
| `BreadcrumbScript` | `../../lib/breadcrumbSchema` | Renders BreadcrumbList JSON-LD |
| `getAlternates` | `../../lib/regions` | Generates hreflang alternates for 14 regional subdomains |
| `Navbar` | `../../components/Navbar/Navbar` | Dynamic import, wrapped in `<Headroom>` |
| `Footer` | `../../components/Footer/Footer` | Dynamic import |
| `FAQ` | `../../components/FAQ/FAQ` | Dynamic import, accepts `faqs` array and optional `heading` |
| `useScrollAnimation` | `../../hooks/useScrollAnimation` | Intersection Observer hook (use where appropriate) |

### Background assets available

- `/assets/HomeHeroSectionBg.svg` — Hero section background
- `/assets/HowWeWorkBg.svg` — Used as subtle overlay in container sections (pain points, approach)
- `/assets/readyToBuildBg.svg` — Dark CTA container background

---

## File-by-File Blueprint

### 1. `app/<slug>/layout.js` — Server Component (Metadata + Schema)

This file handles all SEO metadata. It is a **server component** (no "use client").

```js
import { BreadcrumbScript } from "../../lib/breadcrumbSchema";
import { getAlternates } from "../../lib/regions";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.baaz.pro";

export const metadata = {
  alternates: getAlternates("/<slug>"),
  title: "<Page Title> | Baaz",
  description: "<120-160 char description with primary keyword>",
  openGraph: {
    title: "<Page Title> | Baaz",
    description: "<Shorter OG description>",
    url: `${baseUrl}/<slug>`,
    siteName: "Baaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "<Page Title> | Baaz",
    description: "<Shorter Twitter description>",
  },
};

export default function <Name>Layout({ children }) {
  return (
    <>
      <BreadcrumbScript
        items={[
          { name: "Home", url: "/" },
          { name: "<Page Title>", url: "/<slug>" },
        ]}
      />
      {children}
    </>
  );
}
```

**Rules:**
- `title` must contain the primary SEO keyword and end with `| Baaz`
- `description` should be 120–160 chars, contain the primary keyword, and be compelling
- Always include `alternates: getAlternates("/<slug>")` for hreflang
- BreadcrumbScript items: Home → Page Name

### 2. `app/<slug>/page.js` — Client Component (All Sections)

This is the main page. It is a **client component** (`"use client"`).

**Structure (top to bottom):**

```
Imports (React, Link, dynamic imports for Navbar/FAQ/Footer)
Data arrays (painPoints, approachItems, serviceCategories, etc.)
FAQ array + faqSchema + serviceSchema (JSON-LD objects)
Default export function:
  <Headroom><Navbar /></Headroom>
  <script> faqSchema </script>
  <script> serviceSchema </script>
  HERO section
  PAIN POINTS section (HowWeWork-style grid)
  APPROACH section (cards with colored top borders)
  SERVICES section (2-col card grid with colored headers)
  CASE STUDY section (2-col results + actions)
  PROOF BLOCKS section (2-col warm cards)
  TECHNOLOGY section (2-col colored cards)
  AUDIENCE section (pill tags)
  CTA section (dark container)
  <FAQ />
  <Footer />
```

**Key patterns in the JSX:**

#### Hero
```jsx
<section className="<prefix>-hero">
  <div className="<prefix>-hero-background">
    <img src="/assets/HomeHeroSectionBg.svg" ... fetchPriority="high" />
  </div>
  <div className="<prefix>-hero-wrapper">
    <div className={`<prefix>-hero-header animate-fade-up ${isLoaded ? "animate-in" : ""}`}>
      <span className="<prefix>-hero-label">Label Text</span>
      <h1 className="<prefix>-hero-heading">Headline</h1>
      <p className="<prefix>-hero-description">Subtext</p>
      <Link href="/get-in-touch" className="<prefix>-hero-cta">CTA Text</Link>
    </div>
  </div>
</section>
```

#### Pain Points (HowWeWork-style)
- Wrap items in a container div with `::before` pseudo-element for `HowWeWorkBg.svg` overlay
- 3-column grid (3 top, 2 bottom row) with gradient vertical dividers
- Each item gets a colored circle badge (32px, white number, colored bg)
- Colors used: `#2E68FD` (blue), `#D77E1B` (orange), `#3B7793` (teal), `#08A965` (green), `#932EFA` (purple)
- Grid classes: `pain-step-1` through `pain-step-N` with explicit grid-column/grid-row placement
- Mobile: stacks vertically, dividers hidden, text centered

#### Approach Cards
- White cards on warm cream (`#fbf6ef`) background
- Each card gets a colored `border-top: 3px solid <accent>` using the same color palette
- Cards can contain either a description paragraph or a feature list (ul)

#### Service Cards (2-column grid)
- Card has a colored header bar (`bgColor` from data: `#FFF7F2`, `#ECF0FB`, `#FBF6EF`, `#EDE2FF`)
- Faded large number in the header (`0N`)
- Body contains feature list + a goal line with accent color

#### Case Study
- 2-column grid: results card (green left border `#08A965`) + actions card (blue left border `#2E68FD`)
- Each has h3 heading + checkmark list items
- Warm cream section background (`#fbf6ef`)
- Closing tagline with green left border accent

#### Proof Blocks
- 2-column grid on white background
- Cards use warm cream (`#fbf6ef`) background
- Arrow bullet points (`→`) in purple (`#932EFA`)

#### Technology
- 2-column grid on warm cream background
- Cards get individual tinted backgrounds (`#ECF0FB`, `#EDE2FF`) with matching colored top borders
- Dot bullet points in blue (`#5b71f6`)

#### Audience
- Pill/tag layout using `flex-wrap` with `justify-content: center`
- Purple-tinted pills (`#f3f0ff` bg, `#e0d4fc` border)

#### CTA
- Dark container (`#1a1a1a` bg) with `readyToBuildBg.svg` overlay at 0.6 opacity
- White text, checkmark benefit list, blue CTA button (`#0066ff`)
- Links to `/get-in-touch`

#### FAQ
```jsx
<FAQ faqs={faqsArray} heading="Custom FAQ Heading" />
```

#### Structured Data
Always include two JSON-LD scripts at the top of the return:
1. **FAQPage schema** — from the faqs array
2. **Service schema** — `@type: "Service"` with name, description, provider (Baaz), serviceType

**Data format for each section:**

```js
// Pain points
const painPoints = [
  { title: "...", description: "...", color: "#2E68FD" },
  ...
];

// Approach items
const approachItems = [
  { title: "...", description: "...", accent: "#08A965" },
  { title: "...", features: ["...", "..."], accent: "#2E68FD" },
  ...
];

// Service categories
const serviceCategories = [
  { id: 1, title: "...", goal: "...", bgColor: "#FFF7F2", features: ["...", "..."] },
  ...
];

// Case study
const caseStudyResults = [{ label: "..." }, ...];
const caseStudyActions = ["...", ...];

// Proof blocks
const proofBlocks = [
  { title: "...", items: ["...", "..."] },
  ...
];

// Technology
const techTools = [
  { title: "...", bgColor: "#ECF0FB", accent: "#2E68FD", features: ["...", "..."] },
  ...
];

// Audience
const audienceList = ["...", "..."];

// Audit / CTA benefits
const auditBenefits = ["...", "..."];

// FAQs
const faqs = [
  { question: "...", answer: "..." },
  ...
];
```

### 3. `app/<slug>/page.scss` — Styles

Copy the SCSS structure from `app/ecommerce/page.scss` and do a **find-and-replace** of the class prefix (e.g. `ecom-` → `newprefix-`). Keep all values identical.

**Design system tokens used throughout:**

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Urbanist", sans-serif` | All text |
| Heading color | `#1a1a1a` | h1, h2, h3 |
| Body text color | `#4d525f` | Descriptions, subtexts |
| Secondary text | `#6b7280` | Lighter descriptions |
| Label color | `#932efa` | Section labels (uppercase) |
| Primary blue | `#0066ff` | CTA buttons |
| Primary blue hover | `#0052cc` | CTA hover state |
| Accent blue | `#5b71f6` | Borders, bullet dots |
| Success green | `#22c55e` | Checkmark icons |
| Warm cream bg | `#fbf6ef` | Alternating section backgrounds |
| Container bg | `#f5f5f7` | Pain points / grid containers |
| Light gray bg | `#f8f9fb` | Tagline / conclusion backgrounds |
| Card shadow | `0 2px 8px rgba(0,0,0,0.06–0.08)` | Card resting state |
| Card hover shadow | `0 4px 16px rgba(0,0,0,0.1–0.12)` | Card hover state |
| Card hover lift | `translateY(-4px)` or `translateY(-5px)` | Card hover transform |
| Border radius | `16px` for cards, `20px` for larger cards, `24px` for CTA container, `30px` for buttons, `1.25rem` for hero | |
| Max width | `1440px` (wrapper), `1200px` (content), `900px` (headers/CTA) | |

**Responsive breakpoints:**

| Breakpoint | Target |
|------------|--------|
| `max-width: 64rem` (1024px) | Tablet — reduce padding, adjust dividers |
| `max-width: 48rem` (768px) | Mobile — single-column grids, center text, stack vertically |
| `max-width: 30rem` (480px) | Small mobile — tighter padding |

**Section background alternation pattern:**
```
Hero:        white (with SVG bg image)
Pain Points: white (container inside is #f5f5f7)
Approach:    #fbf6ef (warm cream)
Services:    white
Case Study:  #fbf6ef (warm cream)
Proof:       white
Technology:  #fbf6ef (warm cream)
Audience:    white
CTA:         white (dark container inside)
```

---

## Wiring Up (Post-Creation Checklist)

After creating the three files above, update these existing files:

### 4. Add to sitemap — `app/sitemap.js`

Add a new entry to the `staticRoutes` array:

```js
withAlternates("/<slug>", {
  url: `${baseUrl}/<slug>`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
}),
```

### 5. Add to Navbar — `components/Navbar/Navbar.js`

Add a `<li>` item in **both** the desktop menu (`<ul className="navbar-menu desktop-menu">`) and the mobile menu (`<ul className="mobile-menu-list">`):

**Desktop:**
```jsx
<li className="navbar-item">
  <Link
    href="/<slug>"
    className={`navbar-link ${pathname === "/<slug>" ? "active" : ""}`}
  >
    Page Name
  </Link>
</li>
```

**Mobile:**
```jsx
<li className="mobile-menu-item">
  <Link href="/<slug>" onClick={toggleMenu}>
    Page Name
  </Link>
</li>
```

Place them after the last existing nav item (currently "E-commerce").

---

## SEO / GEO Content Rules

1. **H1** — one per page, contains the primary keyword, placed in the hero heading
2. **H2** — one per section, each should contain a secondary keyword naturally
3. **H3** — subheadings within sections (service titles, card titles)
4. **Keyword density** — weave the provided SEO keywords naturally into headings and body copy; never keyword-stuff
5. **Meta title** — `<Primary Keyword> | Baaz` format, under 60 chars
6. **Meta description** — 120–160 chars, contains primary keyword, compelling and actionable
7. **FAQ answers** — naturally include long-tail keywords; these feed into FAQ rich snippets
8. **Structured data** — every page gets BreadcrumbList + Service + FAQPage schemas
9. **hreflang** — always use `getAlternates("/<slug>")` for all 14 regional subdomains
10. **Internal linking** — CTA buttons link to `/get-in-touch`; consider linking to related service/industry pages where relevant
11. **Alt text** — descriptive and keyword-aware for all images
12. **Semantic HTML** — proper heading hierarchy (h1 > h2 > h3), `<section>` for each block, `<ul>` for lists

---

## Color Palette Quick Reference

### Badge / accent colors (used for numbered badges, card borders)

| Color | Hex | Usage example |
|-------|-----|---------------|
| Blue | `#2E68FD` | Badge 1, card border |
| Orange | `#D77E1B` | Badge 2, card border |
| Teal | `#3B7793` | Badge 3, card border |
| Green | `#08A965` | Badge 4, card border |
| Purple | `#932EFA` | Badge 5, card border, section labels |

### Card header tint colors

| Color | Hex | Card position |
|-------|-----|---------------|
| Peach | `#FFF7F2` | Card 1 |
| Blue tint | `#ECF0FB` | Card 2 |
| Cream | `#FBF6EF` | Card 3 |
| Purple tint | `#EDE2FF` | Card 4 |

---

## Example Prompt to AI

> I want to create a new page for **[Page Title]** at `/<slug>`.
>
> Here's the content:
> [Paste your section-by-section writeup with headings and bullets]
>
> SEO keywords to include: [list 8-12 keywords]
>
> Use `@new-page-framework.md` as the blueprint. Follow the same file structure, styling patterns, section layout, and SEO approach as the ecommerce page.

---

## Reference Implementation

The complete reference is the ecommerce page:
- `app/ecommerce/layout.js`
- `app/ecommerce/page.js`
- `app/ecommerce/page.scss`

When in doubt, match what that page does.
