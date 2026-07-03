# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page marketing website for "Papírnictví Hračky Roztoky", a family-run stationery and toy shop in Roztoky, Czech Republic. The entire site is one static HTML file with no build step, no framework, and no package manager — just `index.html` with inline `<style>` and `<script>` tags.

## Commands

There is no build, lint, or test tooling. To preview the site locally:

```
python -m http.server 8080 --directory .
```

Then open `http://localhost:8080`. The file can also be opened directly in a browser (`file://`) since it has no server-side dependencies.

## Architecture

- `index.html` — the entire site: markup, all CSS (in a single `<style>` block in `<head>`), and all JS (in a single `<script>` block before `</body>`). Sections are anchored (`#top`, `#novinky`, `#produkty`, `#o-nas`, `#kontakt`) and correspond to the nav tabs in the header.
- Two small vanilla-JS behaviors at the bottom of the file: an `IntersectionObserver` that highlights the active nav tab based on scroll position, and a second `IntersectionObserver` that adds `.in-view` to `.reveal` elements for scroll-in animations.
- Illustrations (hero shelf, product icons) are hand-drawn inline `<svg>` elements directly in the HTML, not external image files.
- `assets/logo.svg` — the actual shop logo (pencil mascot), referenced by `index.html` in the header, hero, and footer.
- CSS custom properties for the color palette / spacing are defined once in `:root` at the top of the `<style>` block (`--paper`, `--ink`, `--kraft`, `--honey`, `--sage`, `--brick`, etc.) — reuse these vars rather than hardcoding colors.
- Google Fonts (`Fraunces`, `Karla`, `Caveat`) are loaded via `@import` inside the `<style>` block.
- Responsive layout collapses to single-column via one `@media (max-width: 860px)` block at the end of the stylesheet.

## Known loose ends

- `hrackyroztoky upravené.jpg` / `hrackyroztoky upravené.svg` at the repo root are earlier/working versions of the logo, not referenced anywhere in `index.html` — `assets/logo.svg` is the one actually in use.
- Contact section (`#kontakt`) still has placeholder text (`[doplňte ulici a číslo]`, `[doplňte číslo]`, `[doplňte e‑mail]`) that needs real shop details.
- Footer social links (Facebook/Instagram) are placeholder `href="#"`.
- No hosting/deploy is configured yet — the repo is only pushed to GitHub (`origin` = `https://github.com/Salemonk/papirnictvi-hracky-roztoky.git`), not deployed anywhere public.
