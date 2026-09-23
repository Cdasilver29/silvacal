# Silvacal Technologies website

Marketing site for Silvacal Technologies, a software engineering company in Nairobi.

## Stack

- **Next.js 14** (App Router) with `output: 'export'`: every page is prerendered to static HTML in `out/`. There is no server at runtime.
- **TypeScript** and **Tailwind CSS 3**
- **Fonts:** Sora (headings) and Manrope (body) via `next/font`, exposed as `--font-heading` and `--font-body`
- **Icons:** inline SVG components in `src/components/icons.tsx`. There is no icon library dependency.
- **Contact form:** posts to Web3Forms (access key in `src/data/contact.ts`)
- **Runtime dependencies:** only `next`, `react` and `react-dom`

## Commands

```bash
pnpm install
pnpm dev      # dev server at http://localhost:3000
pnpm build    # static export to out/
pnpm lint
```

### Previewing the production build

`pnpm start` does **not** work with a static export; Next exits with an `output: export` error. Build, then serve the `out/` folder:

```bash
pnpm build
npx serve out
```

## Deploying to Vercel

1. Import the repository in Vercel.
2. Framework preset: **Next.js** (auto-detected). Build command `pnpm build`; leave the output directory at its default.
3. Deploy. Vercel detects `output: 'export'` and serves the static files, including clean URLs and the custom `404.html`.

No `vercel.json` is needed. You would only need one to deploy with the plain "Other" static preset, which this project doesn't use.

Set the production domain in `src/data/site.ts` (`siteConfig.url`) so canonical URLs, the sitemap, Open Graph tags and JSON-LD point to the right host.

### Filenames must stay lowercase

Vercel builds on Linux, where file paths are case-sensitive. Windows and macOS are not, so a reference like `/brand/Founder.jpg` pointing at `founder.jpg` works locally and 404s in production. Keep every filename in `public/` lowercase, and reference it in lowercase.

## Content map

All copy lives in typed data files under `src/data/`. Pages and components only render it.

| What | Where | Notes |
| --- | --- | --- |
| Company name, URL, phones, email, WhatsApp link | `site.ts` | Phones are stored once in E.164; every `tel:` and `wa.me` link is built from them |
| Navigation, including the Services and About dropdowns | `site.ts` → `navItems` | The footer's Services and Quick Links lists are derived from this |
| Social links | `site.ts` → `socialLinks` | See "Enable a social link" below |
| The seven service pages | `services.ts` | Offerings, process, technologies, FAQs and SEO per service |
| Homepage hero, stats, service cards, tech stack, industries, CTA band | `home.ts` | Homepage service cards are a separate short list from `services.ts` |
| Portfolio entries and case studies | `portfolio.ts` | Six entries; see "Portfolio entries" below |
| Team page: founder bio, credentials, How We Work | `team.ts` | The bio is marked as a placeholder |
| Packages and pricing tiers | `packages.ts` | Each group has tiers; `popular: true` adds the "Most Popular" badge |
| About page | `about.ts` | |
| Contact page copy, budget ranges, Web3Forms key | `contact.ts` | |
| Privacy policy and terms | `legal.ts` | |

## Common edits

### Portfolio entries

`portfolio.ts` holds six entries. Two flags control what renders:

- `published: true`: the entry appears on `/portfolio`. Unpublished entries appear nowhere.
- `hasDetail: true`: a published entry also gets a `/portfolio/[slug]` case study page and a sitemap entry, and its card links to it.

The case study pages are generated at build time from the published entries, so adding or unpublishing an entry needs a rebuild and deploy.

### Add or change a service

A service appears in three places:

1. Its page content in `services.ts`
2. Its homepage card in `home.ts` → `services`
3. Its nav link in `site.ts` → the Services `children`

A new service also needs a route file at `src/app/services/<slug>/page.tsx`. Copy any existing one and change the slug. The contact form's service list and the sitemap pick it up automatically.

### Team page

Edit `founder` in `team.ts`: `bio` holds three paragraphs, and `credentials` is a list of `{ title, institution }`. The current bio is a draft, marked `PLACEHOLDER`, so replace it with the founder's own wording.

The photo is `public/brand/founder.jpg`, shown in a 4:5 frame. If the file is missing, the build still succeeds and shows the SC mark instead. The uncompressed original is kept locally in `assets-src/` (git-ignored). To replace the photo, compress it to about 800px wide first: `public/` files ship unoptimised on a static export.

### Enable a social link

In `site.ts` → `socialLinks`, set the profile URL as `href` and `enabled: true`. The footer renders only enabled links, and hides the icon row entirely while none are enabled.

### Restore the testimonials section

The section is removed until there are real, client-approved testimonials.

1. Add items to `testimonials.items` in `home.ts` (a commented example of the shape sits above it).
2. In `src/app/page.tsx`, uncomment the `Testimonials` import and the `{/* <Testimonials /> */}` line.

### Swap fonts

Change the two `next/font/google` constructors at the top of `src/app/layout.tsx`. Everything else reads the CSS variables.

## Motion and accessibility

- Content is fully visible in the server HTML. `MotionController` hides and animates elements only after mount, only below the fold, and only when `prefers-reduced-motion` is not set. Scroll and focus backstops reveal anything the observer misses. The hero entrance only runs when an inline script has added the `js` class.
- Use `<Reveal>` for a scroll reveal, or `<Reveal stagger>` on a grid to reveal its children in sequence. Section `h2`s in `<main>` get the heading wipe automatically.
- Colour: use `electric-strong` (`#2563EB`) for text on white and for button backgrounds. Plain `electric` (`#3B82F6`) is for navy backgrounds and decoration only, because it fails WCAG AA contrast on white. Silver is for text on navy and for borders, never for text on white.
- On mobile, small text links use the `tap-target` class to get a 44px hit area without changing layout.
