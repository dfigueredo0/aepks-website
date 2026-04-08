# &Phi;&Kappa;&Sigma; &ndash; Alpha Epsilon of Phi Kappa Sigma

> **The official website for the Alpha Epsilon chapter of Phi Kappa Sigma at the Illinois Institute of Technology.**
>
> This codebase has been migrated to &rarr; **[github.com/AEPKS1850/aepks.org](https://github.com/AEPKS1850/aepks.org)**

---

## Overview

This repository contains the full source code for [aepks.org](https://aepks.org) &mdash; the recruitment, brotherhood, and informational website for the Alpha Epsilon chapter of Phi Kappa Sigma Fraternity (est. 1850), located at 3366 S Michigan Ave, Chicago, IL 60616.

The site is a multi-page static website built with **React + Vite**, using plain HTML pages linked together, with React components mounted at specific DOM injection points for interactive features.

---

## Key Features

### Dynamic Brothers Roster (`brothers.js`)

Fetches `brothers_{year}.json` at runtime and dynamically generates officer profile cards. Splits brothers into **Executive Board** and **Other Officers** based on Greek position titles (Alpha, Beta, Pi, Iota, Sigma, Tau, Chi). Falls back gracefully to a placeholder image if a headshot is unavailable.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
cd frontend
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

Uses ESLint 9 flat config with React hooks rules enforced.

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Data: Brothers Roster

Brother and officer data lives in:

```
frontend/public/data/brothers_2025.json
```

**Schema:**

```jsonc
{
  "actives": [
    {
      "lastname": "",
      "name": "",
      "positions": [""],
      "major": "",
      "classOf": "",
      "hasImg": ""             // "true" | "false" - controls headshot display
    }
  ],
  "advisors": [ ... ]
}
```

To update the roster for a new year, add a `brothers_2026.json` file in the same directory. The `brothers.js` component fetches based on `new Date().getFullYear()` automatically.

---

## Design System

**Color Palette:**

| Token          | Hex       | Usage                        |
| -------------- | --------- | ---------------------------- |
| Gold primary   | `#c5a028` | Headings, accents, gradients |
| Gold highlight | `#d2b34a` | Gradient end, hover states   |
| Gold muted     | `#897437` | Inactive values numbers      |
| Off-white      | `#f8f7f4` | Body text, active labels     |
| Dark muted     | `#585858` | Inactive labels              |

---

## Known Issues / Areas for Improvement

- **Contact form is non-functional** &mdash; the `<form>` in `index.html` and `contacts.html` has no submit handler or backend integration. Needs Formspree, Netlify Forms, or a custom endpoint.
- **Event cards are hardcoded** &mdash; recruitment event data in `index.html` is static HTML. These should be data-driven (JSON or CMS).
- **Duplicate footer markup** &mdash; `brothers.html` contains two separate `<footer>` elements; one should be removed.
- **Image path casing inconsistency** &mdash; `brothers.js` fetches from `/img/Officer_images/` (lowercase `i`) while the actual directory in `public/img/` is `Officers_Images/` (capital `I`, plural). This will cause 404s on case-sensitive hosts.
- **No TypeScript** &mdash; the ESLint config notes TypeScript is recommended for production; migrating would improve maintainability.
- **`assets/recruitment/` is a stale artifact** &mdash; the pre-built bundles in `assets/recruitment/` appear to be an old standalone deploy of `RecruitmentTrail`. This directory should either be removed or integrated into the build pipeline.
- **No `vite.config.js` present** &mdash; Vite runs with defaults. A config file is recommended to pin base path, aliases, and build options explicitly.

---

## License

Copyright &copy; 2025 The Brothers of Alpha Epsilon of Phi Kappa Sigma. All rights reserved.

All content contained herein is and remains the sole property of Alpha Epsilon of Phi Kappa Sigma.

---

## Contact

**Alpha Epsilon of Phi Kappa Sigma**
3366 S Michigan Ave, Chicago, IL 60616

[Facebook](https://www.facebook.com/aepks/) &bull; [Instagram](https://www.instagram.com/phikappasigmaiit/) &bull; [pks.org](https://pks.org/)
