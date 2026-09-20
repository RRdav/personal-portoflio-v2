# Architecture

## Overview

Next.js (App Router) site written in TypeScript, styled with Tailwind CSS utility classes plus some plain CSS/SCSS. No component library (no MUI/Chakra/shadcn on this particular site, unlike some of the projects showcased on the Portfolio page).

## Directory structure

```
src/
  app/
    page.tsx           # Home ("/") — intro + tech stack summary
    profile/
      page.tsx         # Profile ("/profile") — bio, experience, education, CV download
    portfolio/
      page.tsx         # Portfolio ("/portfolio") — project grid
    layout.tsx          # Root layout: shared nav (Home/Profile/Portfolio) + footer contact links
    globals.css         # Tailwind base/components/utilities imports
  components/           # Shared UI: nav bar, project card, footer/contact links
public/
  RR-DAVID.jpg          # Hero image on Home
  Raphael_Resume.pdf    # CV, linked from the Profile page
  # project screenshots: gacha-sc.png, npm-sc.png, jellicate-text.png,
  # prenatal-ratings.png, placeholder.jpg (used where no real screenshot yet)
```

> Note: file/folder names above are inferred from the standard Next.js
> App Router layout `create-next-app` scaffolds and the real asset
> filenames visible on the live site — double check against the actual
> repo before treating this as gospel.

## Routing

Three top-level routes: `/`, `/profile`, `/portfolio`. No dynamic routes (each project on the Portfolio page appears to be a static entry in a list, not a separate page per project).

## Adding a new project to the Portfolio page

Each project entry has: title, screenshot/image, external link (or `#` if there's no live link yet, e.g. private/in-house work), a status badge (Live / Down / In Development), a short description, and a list of tech tags. To add one, add an entry to whatever data structure the Portfolio page reads from (likely an array in `portfolio/page.tsx` or a separate data file) — it should render automatically via the existing project card component.