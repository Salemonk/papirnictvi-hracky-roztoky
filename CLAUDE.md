# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page marketing website for "Papírnictví Hračky Roztoky", a family-run stationery and toy shop in Roztoky, Czech Republic. The entire site is one static HTML file with no build step, no framework, and no package manager — just `index.html` with inline `<style>` and `<script>` tags, plus a handful of self-hosted asset files (SVG illustrations, fonts, a couple of product photos).

## Commands

There is no build, lint, or test tooling. To preview the site locally:

```
python -m http.server 8080 --directory .
```

Then open `http://localhost:8080`. The file can also be opened directly in a browser (`file://`) since it has no server-side dependencies and fonts/images are all local (no CDN calls at runtime).

## Architecture

- `index.html` — the entire site: markup, all CSS (in a single `<style>` block in `<head>`), and all JS (in a single `<script>` block before `</body>`). Sections are anchored (`#top`, `#novinky`, `#produkty`, `#o-nas`, `#recenze`, `#kontakt`) and correspond to the nav tabs in the header.
- CSS custom properties for the color palette / spacing are defined once in `:root` at the top of the `<style>` block (`--paper`, `--ink`, `--kraft`, `--honey`, `--sage`, `--brick`, etc.) — reuse these vars rather than hardcoding colors.
- Fonts (`Fraunces`, `Karla`, `Caveat`) are **self-hosted** via `@font-face` rules pointing at `fonts/*.woff2` (latin + latin-ext subsets, variable-font files so one file covers all weights). They used to load from Google's CDN via `@import`, but that transmits visitors' IP addresses to Google on every page view — a real GDPR issue for a site that otherwise collects zero data — so don't reintroduce the `@import`.
- Responsive layout collapses to single-column via one `@media (max-width: 860px)` block at the end of the stylesheet. That same block also switches the header nav to wrap onto its own row (`.header-inner{flex-wrap:wrap}` + `nav.tabs{width:100%}`) — without it, the non-shrinking brand name squeezes `nav.tabs` down to a few px on narrow screens, so don't remove those rules without re-testing mobile widths.
- A simple click-to-zoom lightbox (`#lightbox`, wired up at the bottom of the `<script>` block) applies to any `<img class="note-img">` or `<img class="note-art">` in the Novinky section.
- **Novinky cards are data-driven**: `.notes-grid` is empty in the HTML and populated at runtime by `renderNovinky()` (top of the `<script>` block) from the `window.NOVINKY` array in `data/novinky.js`. The owner edits only that data file (heavily commented in Czech) to add/change/remove news. It's a plain `<script src>`-loaded `.js` (not JSON+fetch) on purpose so it also works via `file://`. Render runs before the reveal/lightbox observers so they pick up the generated cards. Two card shapes: with `nadpis` → tag+image+title+text card; without → image-only card (gets `.note-plain`). An item with `rezervace: true` also gets a `.note-reserve` "Rezervovat k vyzvednutí" button whose `mailto:` is built in JS (encodeURIComponent) with the product title pre-filled — click&collect reservations, no form/backend/GDPR surface. Note this makes Novinky content JS-dependent (core shop info stays static + JSON-LD, so SEO is fine).
- `#skolni-balicky` (nav tab "Škola", placed right after Novinky) holds two things: a **seasonal** school-supply-packages banner (`.skolni-card`) and a `.skolni-guide` how-to on choosing textbook covers. No backend anywhere — contact is `mailto:` (pre-filled subject + body template) and `tel:`, deliberately no form (no GDPR surface). An HTML comment above the section explains how to hide it off-season (comment out the `<section>` and its "Škola" nav tab). Owner dislikes em-dashes in body copy — use commas/periods.
- `#recenze` section is just a `.rating-banner` (aggregate 4,6/5 stars + link to Google) — the individual quoted reviews were removed as stale/self-congratulatory. Don't re-add specific quotes without asking.
- `#kontakt` embeds an OpenStreetMap iframe (`.map-embed`) rather than Google Maps — a Google Maps embed was unreliable/blocked in testing, and OSM avoids sending visitor data to Google (same reasoning as the self-hosted fonts).

### Illustrations and images

- `images/policka-cela.svg` — the big two-shelf illustration used in the hero. It's a hand-composed scene built from the individual component SVGs also present in `images/` (`kelimek-s-tuzkami.svg`, `knihy.svg`, `rubikova-kostka*.svg`, `vlacek.svg`, `medvidek.svg`, `pocitadlo.svg`, `kostky*.svg`) — those standalone files exist so the user can edit each piece in Inkscape; only `policka-cela.svg` (which embeds its own copies of the shapes) is actually referenced by `index.html`. If a component is edited standalone, the matching embedded copy inside `policka-cela.svg` needs updating too — they're not linked automatically.
- `images/vyloha.svg` — storefront illustration in the "O nás" section. Also edited in Inkscape by the user; the door window has a clip-path showing a shrunk copy of the shelf scene through the glass.
- `images/dovolena.svg` — the text-free "vacation hours" note card art (sun umbrella, ball, suitcase).
- `images/produkty/` — real product photos (JPG/PNG) used in Novinky cards.
- `images/platby/` — accepted payment method icons (Visa, Mastercard, Amex, Maestro, V Pay, Apple/Google/Samsung Pay) shown in the footer. Sourced from `github.com/datatrans/payment-logos` (CC-BY-SA-4.0, see `images/platby/CREDITS.txt`).
- `assets/logo.svg` — full logo (pencil mascot + wordmark), used at large size in the hero.
- `assets/logo-icon.svg` — mascot only, no text, tightly cropped; used as the small round icon in the header/footer brand (rendered on a white circle via CSS).
- `assets/favicon.svg` — same mascot icon, baked onto a white rounded-square background, used as the page favicon.

## Known loose ends

- No hosting/deploy is configured yet — the repo is only pushed to GitHub (`origin` = `https://github.com/Salemonk/papirnictvi-hracky-roztoky.git`), not deployed anywhere public. GitHub Pages preview is enabled for sharing drafts. Deploy target is FORPSI FTP for domain hrackyroztoky.cz (awaiting current FTP credentials; the 2015 ones are dead). Upload set: `index.html`, `robots.txt`, `sitemap.xml`, `data/`, `assets/`, `images/`, `fonts/` (exclude CLAUDE.md, README.md, .git). SEO absolute URLs point at `https://www.hrackyroztoky.cz/`, so they only resolve correctly once deployed there.
- Business identification footer text (name, IČO, sídlo) satisfies §435 občanského zákoníku; update it if the legal form or registered seat ever changes.
