# Chukwuemeka Ituma — Executive Personal Brand Website

A world-class executive personal brand website for **Chukwuemeka Ituma**, Founder
and Chairman of the **Enviable Group of Companies** — a diversified business
ecosystem spanning transportation, logistics, energy, mobility, and technology
across Africa.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom blue brand system)
- **Framer Motion** (scroll reveals, counters, parallax, interactions)
- **Lucide Icons**
- SEO metadata, Open Graph image, JSON-LD, sitemap & robots
- Fully responsive & accessibility-minded

## Sections

Hero · About · Entrepreneurial Journey · Enviable Ecosystem · Impact &
Achievements · Leadership Philosophy · Media & Recognition · Gallery (with
lightbox) · Partnerships & Opportunities · Testimonials · Contact · Footer.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # lint
```

## Customising Content

All copy, statistics, companies, milestones, media, and testimonials live in a
single file: [`lib/content.ts`](lib/content.ts). Update it to swap placeholder
content for verified data.

Brand colours and design tokens are defined in
[`tailwind.config.ts`](tailwind.config.ts).

Image placeholders (`components/ui/Portrait.tsx`,
`components/ui/VisualPlaceholder.tsx`) are designed to be replaced with real
photography while preserving framing and aspect ratios.

The contact form (`components/sections/Contact.tsx`) is wired for a submit
handler — connect it to an email service or an API route in production.

## Deploy

Optimised for **Vercel** — import the repository and deploy. No additional
configuration is required. Set the canonical domain in `lib/content.ts`
(`site.url`) before going live.
