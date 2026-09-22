# Silvacal Technologies website

Marketing site for Silvacal Technologies, a software engineering company in Nairobi.

## Stack

- Next.js 14 (App Router) with `output: 'export'`: every page is prerendered to static HTML in `out/`
- React 18, TypeScript, Tailwind CSS 3
- Fonts via `next/font`: Sora (headings) and Manrope (body)
- Contact form posts to Web3Forms (access key in `src/data/contact.ts`)
- No runtime dependencies beyond Next and React; icons are inline SVGs in `src/components/icons.tsx`

## Commands

```bash
pnpm install
pnpm dev      # dev server at http://localhost:3000
pnpm build    # static export to out/
pnpm lint
```

### Previewing the production build

`pnpm start` does **not** work with a static export (Next exits with an `output: export` error). Build, then serve the `out/` folder:

```bash
pnpm build
npx serve out
```

## Deploying to Vercel

1. Import the repository in Vercel.
2. Framework preset: **Next.js** (auto-detected). Build command `pnpm build`; leave the output directory at its default.
3. Deploy. Vercel detects `output: 'export'` and serves the static files, including clean URLs and the custom `404.html`.

No `vercel.json` is needed. You would only need one to deploy with the plain "Other" static preset, which this project doesn't use.

Set the production domain in `src/data/site.ts` (`siteConfig.url`) so canonical URLs, the sitemap and Open Graph tags point to the right host.

## Where content lives

All copy is in typed data files under `src/data/`. Pages and components only render it.

| File | Content |
| --- | --- |
| `site.ts` | Company name, URL, phone numbers, email, WhatsApp link, navigation, social links |
| `home.ts` | Hero, stats, homepage service cards, about strip, tech stack, industries, CTA band, testimonials |
| `services.ts` | The seven service pages: offerings, process, technologies, FAQs, SEO |
| `portfolio.ts` | Portfolio entries and case study content |
| `packages.ts` | Pricing tiers and packages FAQ |
| `about.ts` | About page story, mission, values |
| `contact.ts` | Contact page copy, budget ranges, Web3Forms key |
| `legal.ts` | Privacy policy and terms |

Phone numbers are stored once in `site.ts` in E.164 format; every `tel:` and `wa.me` link is built from them.

## Common edits

### Publish a portfolio entry

In `src/data/portfolio.ts`, set `published: true` on the entry. Only published entries appear on `/portfolio`, and only published entries with `hasDetail: true` get a `/portfolio/[slug]` case study page and a sitemap entry. The Crystal Fountain entry has a `TODO` noting its content needs review before publishing.

### Enable a social link

In `src/data/site.ts`, set `href` to the profile URL and `enabled: true` on that entry in `socialLinks`. The footer renders only enabled links, and hides the icon row entirely when none are enabled.

### Restore the testimonials section

1. Add real, client-approved items to `testimonials.items` in `src/data/home.ts` (a commented example of the shape is above it).
2. In `src/app/page.tsx`, uncomment the `Testimonials` import and the `{/* <Testimonials /> */}` line.

### Founder bio and team page

Not built yet. The team page (founder profile, credentials, "How We Work") was planned but deferred, so there is no `/team` route or founder bio to edit. When it is added, its content should live in a new `src/data/team.ts`, like the other data files.

### Swap fonts

Change the two `next/font/google` constructors at the top of `src/app/layout.tsx`. Everything else reads the `--font-heading` and `--font-body` variables.

## Motion and accessibility notes

- Content is fully visible in the server HTML. `MotionController` hides and animates elements only after mount, only below the fold, and only when `prefers-reduced-motion` is not set. A scroll/focus backstop reveals anything the observer misses.
- Use `<Reveal>` (or `<Reveal stagger>` on a grid) to add scroll reveals. Section `h2`s get the heading wipe automatically.
- Use `electric-strong` (`#2563EB`) for text on white and for button backgrounds; plain `electric` (`#3B82F6`) is for navy backgrounds and decoration only, since it fails WCAG AA contrast on white.
