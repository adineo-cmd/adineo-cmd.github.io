<div align="center">

# Portfolio

**The portfolio at the root of adineo-cmd.github.io.**

[![Live site](https://img.shields.io/badge/live-site-2ea44f?logo=githubpages&logoColor=white)](https://adineo-cmd.github.io/)
![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/Actions-2088FF?logo=githubactions&logoColor=white)

[![Stars](https://img.shields.io/github/stars/adineo-cmd/adineo-cmd.github.io?style=flat&logo=github&label=stars)](https://github.com/adineo-cmd/adineo-cmd.github.io/stargazers) [![Last commit](https://img.shields.io/github/last-commit/adineo-cmd/adineo-cmd.github.io?style=flat)](https://github.com/adineo-cmd/adineo-cmd.github.io/commits)

[Live site](https://adineo-cmd.github.io/) · [Quick start](#quick-start) · [How it works](#how-it-works) · [Features](#features)

</div>

---

A single-page portfolio built with Astro and Tailwind: introduction, about,
selected projects, writings, reading library, a frozen list of 100 life goals,
and a timeline of milestones.

Content is data-driven, so the page changes without touching layout code.

## Features

| | Feature | What it does |
| --- | --- | --- |
| 🪪 | **Hero and about** | Who I am, what I work with and how I approach building. |
| 🧩 | **Project showcase** | Selected work with live and source links. |
| 📚 | **Writings and library** | Essays, reading list and collected notes. |
| 🗓️ | **List 100 and timeline** | Long-horizon goals next to the milestones so far. |

## How it works

The site is intentionally small:

1. `src/data/content.js` holds the about text, links, projects and timeline.
2. `src/pages/index.astro` renders the single page through one layout.
3. Tailwind and a custom zinc palette provide the theme; there is no client-side
   framework.
4. The Pages workflow builds and deploys on every push to `main`.

```mermaid
flowchart LR
  A[src/data/content.js] --> B[index.astro]
  C[src/components] --> B
  B --> D[static build]
  D --> E[GitHub Pages root]
```

## Quick start

**Install and run**

```bash
npm install
npm run dev
```

**Production build**

```bash
npm run build
npm run preview
```

## Project structure

```text
src/pages/index.astro  the page
src/data/content.js    projects, about, links, timeline
src/components/        section components
src/layouts/           shared document shell
src/styles/            global CSS
public/images/         project and portrait images
```

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages through
`.github/workflows/deploy.yml`:

**https://adineo-cmd.github.io/**

The repository is the user site for the account, so it serves the domain root
rather than a sub-path.
