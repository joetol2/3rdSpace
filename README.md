# 3RD SPACE — Santa Ynez

A one-page community website for 3RD SPACE.

## Run locally

```bash
bun install
bun run dev
```

## Replace embed URLs

Open `src/config/site.ts` and replace the placeholder constants:

- `GOOGLE_CALENDAR_EMBED_URL` — iframe `src` from Google Calendar share settings.
- `GOOGLE_CALENDAR_PUBLIC_LINK` — public calendar link (fallback).
- `TALLY_FORM_EMBED_URL` — Tally form iframe URL.
- `TALLY_FORM_DIRECT_LINK` — Tally form direct link (fallback).
- `CAL_COM_EMBED_URL` — optional Cal.com booking iframe.
- `CAL_COM_DIRECT_LINK` — Cal.com direct link (fallback).

While a placeholder is still in place, the section shows a friendly notice instead of an iframe.

## Replace logo and hero assets

Brand assets are stored as Lovable asset pointers in `src/assets/`:

- `3rdspace-logo.png.asset.json` (header + hero card)
- `3rdspace-hero.png.asset.json` (hero background + social preview)

To swap, replace the underlying image and re-generate the pointer, or update the `url` field in the JSON to a hosted image URL.

## Deploy

This is a static-friendly TanStack Start app. For pure static hosting (Cloudflare Pages / GitHub Pages), build the site and publish the build output:

```bash
bun run build
```

- **Cloudflare Pages**: connect the GitHub repo, set build command `bun run build`, output directory per the build log.
- **GitHub Pages**: push the build output to the `gh-pages` branch or use a GitHub Actions workflow.

## Stack

- React 19 + TypeScript
- TanStack Start + TanStack Router
- Tailwind CSS v4
- Vite 7

## External services required

- Google Calendar (public calendar embed)
- Tally (form embed)
- Cal.com (optional walkthrough scheduling)

No backend, database, authentication, or payment processing is required.
