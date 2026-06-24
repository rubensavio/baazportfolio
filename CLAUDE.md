# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Behavior Rules
- NEVER plan or describe changes before making them
- ALWAYS directly edit files immediately
- Do not show implementation notes, next steps, or summaries
- Do not ask for confirmation - just apply changes directly
- Write to files first, explain after if needed

## Common Development Commands
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `npm test`
- **Start**: `npm start`
- **Run Single Test**: `npm test -- <test-file-or-pattern>`
- **Run Development Server**: `npm run dev` (if defined)

## High-Level Code Architecture
The repository is a Next.js 14 application using the App Router. Key aspects:
- **Frontend (App Router)**: All UI lives under `app/`. Each top‑level folder corresponds to a route (e.g., `app/about/`, `app/book-call/`). Dynamic routes such as `app/services/[serviceType]/` render service pages based on the URL segment.
- **Components**: Reusable React components are stored in `components/` (e.g., Navbar, Hero, Footer) and are imported throughout the app.
- **Styling**: SCSS modules and global styles (`app/globals.css`).
- **Data & API**: Calls to external services (Google Apps Script forms, calendar APIs) are made client‑side via fetch or helper utilities. No separate backend server; environment variables (`.env`) provide configuration.
- **Routing**: Next.js file‑system routing replaces React Router. Navigation uses `next/link` and `next/navigation` hooks.
- **Build & Deploy**: Standard Next.js scripts (`npm run dev`, `npm run build`, `npm start`).

## Key Files to Note
- `app/book-call/BookCallClient.js`: Core client-side logic for book call operations
- `README.md`: Setup instructions and contribution guidelines