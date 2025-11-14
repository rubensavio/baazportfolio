# Baaz - Next.js 14 Version

> **Successfully migrated from Create React App to Next.js 14!**

## 🚀 Quick Start

```bash
cd baaz-nextjs
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 What's Included

- **40+ React Components** - All fully migrated with Next.js compatibility
- **8 Pages** - Home, About, Enterprise, Work1, Work2, GetInTouch, BookCall, Services
- **Dynamic Routing** - Services pages with dynamic [serviceType] parameter
- **SCSS Styling** - All original styles preserved
- **Responsive Design** - Mobile, Tablet, Desktop optimized
- **Form Integration** - Google Apps Script for contact forms
- **Calendar Booking** - Interactive date/time selection

## 📂 Project Structure

```
baaz-nextjs/
├── app/                    # Next.js App Router
│   ├── page.js            # Home page
│   ├── about/             # About Us page
│   ├── enterprise/        # Enterprise page
│   ├── work1/             # Case Study 1
│   ├── work2/             # Case Study 2
│   ├── get-in-touch/      # Contact form
│   ├── book-call/         # Calendar booking
│   ├── services/[serviceType]/ # Dynamic service pages
│   ├── layout.js          # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar/
│   ├── Hero/
│   ├── Footer/
│   └── ... (40+ components)
└── public/
    └── assets/            # Images and static files
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Routes

- `/` - Home page
- `/about` - About Us
- `/enterprise` - Enterprise solutions
- `/work1` - Case Study: Event Management Platform
- `/work2` - Case Study: Job Portal
- `/get-in-touch` - Contact form
- `/book-call` - Calendar booking
- `/services/product-strategy` - Product Strategy services
- `/services/ui-ux-design` - UI/UX Design services
- `/services/web-development` - Web Development services
- `/services/mobile-app` - Mobile App services
- `/services/ai-solution` - AI Solution services

## 🎨 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript/React
- **Styling**: SCSS/Sass
- **UI Library**: react-headroom
- **Fonts**: Urbanist (Google Fonts)
- **Forms**: Native HTML + Google Apps Script integration

## 📝 Key Features

### Navigation

- Responsive navbar with dropdown menus
- Mobile hamburger menu
- Active link highlighting
- Smooth scroll with Headroom

### Pages

1. **Home** - Hero, Services, Brands, Expertise, Process, Testimonials
2. **About** - Company story, Values
3. **Enterprise** - Solutions, Benefits, Custom CTA
4. **Work** - Detailed case studies with metrics
5. **Services** - Dynamic pages for each service type
6. **Contact** - Form with category selection
7. **Booking** - Interactive calendar with time slots

### Components

- Reusable header and footer
- Dynamic carousel for brand logos
- Testimonial slider
- CTA sections
- Form components
- Modal dialogs

## 🔄 Migration from React

All features from the original React application are preserved:

- Same UI/UX
- Same functionality
- Same responsive behavior
- Better performance with Next.js optimizations

### Key Changes

- `react-router-dom` → Next.js file-based routing
- `<Link to="">` → `<Link href="">`
- `useLocation()` → `usePathname()`
- Asset imports → `/public/assets/` references

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎯 Next Steps

1. Test all pages and functionality
2. Configure environment variables if needed
3. Deploy to Vercel, Netlify, or your preferred platform
4. Set up analytics and monitoring

## 📞 Contact

For any questions about this migration or the application, refer to:

- `MIGRATION_COMPLETE.md` - Detailed migration notes
- `README_MIGRATION.md` - Migration guide

---

**Built with ❤️ using Next.js 14**
# portfolio
