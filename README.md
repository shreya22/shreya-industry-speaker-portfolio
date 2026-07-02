# Shreya Sahu — Personal Website

Personal website positioning Shreya as an engineering leader, speaker and writer: conference talks, guest lectures, workshops, mentoring, and essays.

Built with Next.js (App Router), Tailwind CSS, and shadcn/ui. Fully static — no backend or database required.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you go live

A handful of image/document assets are wired into the site but not included in the repo — the page renders gracefully without them, but you should add the real files:

1. **Headshot** — save your photo as `public/images/headshot.jpg`. Until it exists, the hero section shows an "SS" monogram placeholder automatically.
2. **About photo** — save a candid photo as `public/images/about.jpg`. Until it exists, the About section shows a placeholder block automatically.
3. **Banner photo** — save a wide photo (on stage, speaking at a conference, etc.) as `public/images/banner.jpg`. Until it exists, the full-width banner shows a placeholder block automatically.
4. **Resume** — save your resume as `public/resume/ShreyaResume.pdf`. Until it exists, the "Download Resume" button links to a file that doesn't exist yet; once added, downloads just work.

No code changes are needed for any of these — all are detected automatically at build/request time.

Also worth reviewing before launch:

- `src/lib/site-config.ts` — name, email, social links, all section copy (speaking formats, speaking topics, writing essays, experience, community, invite audiences).
- Email address in `site-config.ts` is currently `hello@shreyasahu.com` — update to your real inbox.
- `src/app/layout.tsx` — SEO metadata, including `siteConfig.url` (currently a placeholder domain) — update once you have a real domain, since it's used for canonical URLs and Open Graph tags.

## Tech stack

- [Next.js](https://nextjs.org) — App Router, static rendering
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Base UI primitives)
- [next-themes](https://github.com/pacocoursey/next-themes) — light/dark mode
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings) + [Geist Sans](https://vercel.com/font) (body)

## Deployment

Any static-friendly host works. The fastest options:

**Vercel** (built by the makers of Next.js — zero config):
```bash
npx vercel
```

**Netlify**:
```bash
npm run build
# then drag the .next output, or connect the GitHub repo in the Netlify dashboard
```

**Any static/Node host**: `npm run build && npm run start` serves it, or export and host the static output on any CDN.

## Project structure

```
src/
  app/               # App Router: layout, page, global styles
  components/
    sections/        # Hero, About, Speaking Formats, Photo Banner, Speaking Topics, Writing, Community, Experience, Invite
    ui/               # shadcn/ui primitives
  lib/
    site-config.ts   # All editable content lives here
    files.ts         # Helper for detecting optional public assets
public/
  images/            # Drop headshot.jpg, about.jpg, banner.jpg here
  resume/            # Drop ShreyaResume.pdf here
```
