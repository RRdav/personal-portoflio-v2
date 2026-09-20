# Deployment

## Hosting

Deployed on [Vercel](https://vercel.com), connected to this GitHub repository. Every push to `main` triggers a production deployment, served on the custom domain **rrdavid.xyz** (configured in Vercel's Domains settings, with DNS pointed at Vercel). Pushes to other branches/PRs get their own preview deployment URL.

## Environment variables

There's no contact form on this site (contact is via static LinkedIn/GitHub/mailto links), so there are currently no environment variables required for core site functionality. If a contact form or any dynamic data source (e.g. pulling project data from Supabase instead of a static list) is added later, document the required variable names here and set them in Vercel's project settings — never commit secrets to the repo.

## Custom domain

The domain rrdavid.xyz is configured under the Vercel project's Domains tab, with the domain's DNS records pointed at Vercel per their custom-domain setup instructions.

## Rollbacks

Vercel retains deployment history - a bad deploy can be rolled back instantly from the Vercel dashboard without needing a git revert.