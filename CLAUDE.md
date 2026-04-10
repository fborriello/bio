# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Fabio Borriello — plain HTML, CSS, and JavaScript. No build step, no framework, no package manager. Open `index.html` directly in a browser or serve with any static file server.

## Serving Locally

```bash
# Python (simplest)
python3 -m http.server 8080

# Node (if available)
npx serve .
```

JS modules (`type="module"`) require a server — opening `index.html` via `file://` will fail due to CORS.

## Architecture

Everything is a single page (`index.html`). Sections in order: `#home` → `#about` → `#skills` → `#experience` → `#projects` → `#writing` → `#contact`.

### CSS

`css/main.css` is the import chain — it `@import`s every other CSS file in order. Edit individual files, not `main.css` directly. `css/variables.css` defines all design tokens (colors, spacing, typography, shadows); change theme colors here first.

### JS

ES modules loaded via `<script type="module" src="js/main.js">`. Each feature is a separate module with a single exported `init*` function, all called from `main.js` on `DOMContentLoaded`:

| File | Responsibility |
|---|---|
| `theme.js` | Dark/light toggle; reads/writes `localStorage` |
| `nav.js` | Sticky nav, hamburger menu, active section highlight via `IntersectionObserver` |
| `typewriter.js` | Hero cycling text animation |
| `animations.js` | Scroll reveal (`IntersectionObserver`) + stat counter animation |
| `contact.js` | Formspree form submission + copy-email to clipboard |

### Theming

Theme is applied as `data-theme="dark|light"` on `<html>`. An inline `<script>` at the top of `<head>` (before CSS) sets the initial value from `localStorage` or `prefers-color-scheme` to prevent flash of wrong theme. All colors reference CSS custom properties from `variables.css`, so the light theme only needs to override those properties in the `[data-theme="light"]` block.

### Scroll animations

Elements with class `reveal` start hidden (`opacity:0`, `translateY`). `animations.js` uses `IntersectionObserver` to add `is-visible` when they enter the viewport. Stagger delays use `reveal-delay-1` through `reveal-delay-6` utility classes.

## Key Files to Know

- `css/variables.css` — all design tokens; start here for any visual change
- `css/main.css` — CSS import order matters; new CSS files must be added here
- `js/main.js` — entry point; new JS modules must be imported and called here
- `index.html` — all content; sections are self-contained and follow a consistent pattern
- `docs/MANAGING.md` — human guide for updating content (bio, skills, projects, articles, CV, etc.)
- `.ai/plans/` — AI-generated planning documents for this project

## Content Assets

- `assets/images/profile.jpg` — profile photo (used in About section)
- `assets/resume.pdf` — downloadable CV linked from About section
- Tech logos are loaded from `cdn.simpleicons.org/{slug}/{hex}` — find slugs at simpleicons.org

## Contact Form

The form `action` in `index.html` contains a placeholder `YOUR_FORM_ID`. Replace with a real Formspree endpoint to activate. See `docs/MANAGING.md` for setup steps.
