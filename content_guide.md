# Content Guide

What's actually on each page, and how to keep it updated.

## Home (`/`)

Short intro headline ("Hello, I'm RR!"), a one-line summary (software developer, web applications, plays guitar in spare time), a hero photo, an "About me" link into Profile, and a summary of the tech stack grouped into Front-end / Backend / Languages / DevOps.

## Profile (`/profile`)

The fullest page on the site. Contains:
- A short bio and a "Download CV" link (`Raphael_Resume.pdf`)
- The same tech stack summary as Home
- **Work experience**:
  - PHP Web Developer, full-time, March 2023–Present, at Jala Design (Bella Vista, Sydney) — WordPress/WooCommerce backend work, client communication
  - Freelance Junior Full Stack Developer, part-time, July 2021–July 2024, at The Handsome Devs (Sydney) — React/Next.js, headless CMS (WordPress, Strapi), MUI/Chakra UI initially, moved to Tailwind for later projects
- **Education**:
  - Queensland University of Technology — Bachelor of IT, major in Computer Science, Feb 2022–Present
  - Macquarie University — Diploma of Information Technology, Feb–Dec 2021

## Portfolio (`/portfolio`)

A grid of projects, each with a status badge:

| Project | Status | Tech | Notes |
|---|---|---|---|
| Gacha App | Down | Tailwind, NextJS, Supabase, TypeScript | Full-stack Gacha game item/character manager; down due to expired database |
| VS Code Extension | Live | TypeScript | In-house company tool for developer productivity |
| JSON Placeholder Generator | Live | TypeScript | Published npm package (`rrd-placeholder-generator`); CLI built with Commander.js |
| Tattoomeister | In Development | Tailwind, NextJS, TypeScript, Shadcn UI | Team project — SaaS for tattoo artist bookings, managed via ClickUp |
| Jellicate Nailz | Down | CSS, JavaScript, PHP, WordPress, WooCommerce | Client site, design handed off, WooCommerce e-commerce |
| Prenatal Ratings | Live | CSS, JavaScript, PHP, Shopify | Client site, frontend + Shopify theme customisation |
| SizeMatch | In Development | Tailwind, React, NextJS, Redux | Clothing size comparison tool, personal project |

To add a new project: same status/tech-tag/description shape as the table above.

## Contact

No dedicated Contact page — LinkedIn, GitHub, and a mailto link appear as a persistent footer/sidebar block on every page.

## Known issues / things to keep in mind

- Some projects use placeholder screenshots (`placeholder.jpg`) where a real one hasn't been added yet (VS Code Extension, Tattoomeister, SizeMatch) — worth swapping in real screenshots as those projects progress.
- Project statuses (Live/Down/In Development) should be kept current — e.g. Gacha App is marked Down due to an expired database, not a code issue.