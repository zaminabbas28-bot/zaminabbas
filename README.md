# Zamin Abbas — SEO Portfolio (Next.js)

Portfolio website of **Zamin Abbas**, SEO Specialist & Web Developer — rebuilt as a modern Next.js project with full SEO optimization.

**Live reference:** https://zaminabbas.me

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- CSS-only animations (no animation libraries)

## SEO Included

- **On-page:** optimized titles, meta descriptions, keywords, Open Graph + Twitter cards, canonical URLs, semantic HTML5 (`header/nav/main/section/article/footer`), single H1 per page, descriptive alt text, aria labels, skip-to-content link
- **Technical:** `sitemap.xml`, `robots.txt`, JSON-LD structured data (Person, ProfessionalService, FAQPage, BreadcrumbList, Service), `next/font` optimization, static generation (SSG)
- **Off-page ready:** `sameAs` social links in structured data, Open Graph social card (`/opengraph-image`)

## Routes

| Route | Description |
|---|---|
| `/` | Homepage: Hero, About, Services, Reviews, FAQ, Contact |
| `/services/local-seo` | Local SEO service page |
| `/services/social-media-marketing` | Social Media Marketing service page |
| `/services/technical-seo` | Technical SEO service page |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy on [Vercel](https://vercel.com) — import this repository and deploy with default settings.
