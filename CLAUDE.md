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

## High-Level Code Architecture
The codebase is organized with clear separation of concerns:
- **Frontend**: React-based UI in `app/` directory, with `app/book-call/` handling book call functionality
- **API Integration**: Direct client-side API calls to external services or same-domain endpoints
- **Configuration**: Environment variables via `.env` files, no separate backend server

## Key Files to Note
- `app/book-call/BookCallClient.js`: Core client-side logic for book call operations
- `README.md`: Setup instructions and contribution guidelines