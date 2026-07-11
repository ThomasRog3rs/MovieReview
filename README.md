# 🎬 Movie Review Blog

A static site for movie reviews, built with [Eleventy (11ty)](https://www.11ty.dev/).

## Features

- Write reviews in plain Markdown (`.md`) files
- Automatic index page listing all reviews, sorted by date
- Star ratings, director, year, and tagline in front matter
- Dark-themed, responsive design
- Auto-deploy to **GitHub Pages** or **Netlify** on every push to `main`

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20+

### Install & run locally

```bash
npm install
npm start   # starts a local dev server at http://localhost:8080
```

### Build for production

```bash
npm run build   # output goes to _site/
```

---

## Writing a Review

Create a new `.md` file in `src/reviews/`. The filename becomes the URL slug.

```md
---
title: "Your Movie Title"
director: "Director Name"
year: 2024
rating: 4          # 1–5 stars
tagline: "A one-line hook for the index page."
date: 2024-06-15   # YYYY-MM-DD
---

Your review text goes here. Markdown is fully supported.

## Subheadings work too

> Block quotes are styled nicely.
```

That's it — the new review will appear on the homepage automatically.

---

## Deployment

### Netlify (recommended — zero config)

1. Connect your GitHub repo in the [Netlify dashboard](https://app.netlify.com/).
2. Netlify reads `netlify.toml` automatically and runs `npm run build`, publishing the `_site/` folder.

### GitHub Pages (Actions)

The workflow at `.github/workflows/deploy.yml` runs on every push to `main` and deploys to GitHub Pages.

Enable GitHub Pages in your repository settings:

1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow handles the rest

---

## Project Structure

```
├── src/
│   ├── _includes/
│   │   └── layouts/
│   │       ├── base.njk      # HTML shell
│   │       └── review.njk    # Single review layout
│   ├── css/
│   │   └── style.css
│   ├── reviews/
│   │   ├── reviews.json      # Default front matter for all reviews
│   │   ├── dune-part-two.md  # Sample review
│   │   ├── oppenheimer.md    # Sample review
│   │   └── past-lives.md     # Sample review
│   ├── about.md
│   └── index.njk             # Homepage
├── .eleventy.js              # Eleventy config
├── netlify.toml              # Netlify deploy config
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Pages deploy workflow
```
