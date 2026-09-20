# Personal Portfolio v2

Raphael David's personal portfolio website. Built with Next.js, TypeScript, and Tailwind CSS. Live at [rrdavid.xyz](https://rrdavid.xyz) (custom domain, deployed via Vercel).

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, plain CSS/SCSS where needed
- **Backend/data (used across Raphael's other projects, showcased on the site)**: Node.js, MySQL, Supabase
- **Deployment**: Vercel, custom domain (rrdavid.xyz)

## Pages

| Route | Purpose |
|---|---|
| `/` (Home) | Landing page — short intro, tech stack summary, link into Profile |
| `/profile` | Full bio, work experience, and education history, with a downloadable CV/resume (PDF) |
| `/portfolio` | Grid of projects, each with an image, live/down/in-development status, description, and tech tags |


See `docs/ARCHITECTURE.md` for codebase structure and `docs/CONTENT_GUIDE.md` for what belongs on each page and how to update it.

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm run start
```

## Deployment

Pushes to `main` deploy automatically via Vercel, served on the custom domain rrdavid.xyz. See `docs/DEPLOYMENT.md`.

## Contributing / Issues

Personal project, but bug reports and suggestions are welcome via GitHub Issues. Please include:
- What page the issue relates to (Home / Profile / Portfolio)
- Expected vs. actual behaviour
- Browser/device, if it's a rendering issue