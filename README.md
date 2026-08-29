# Affan Naveed's Portfolio

**[Live Site](https://portfolio-tau-two-vtnj2hljh0.vercel.app) · [Blog](https://portfolio-tau-two-vtnj2hljh0.vercel.app/blog)**

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss)
![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-FF9900?logo=awslambda)
![DynamoDB](https://img.shields.io/badge/AWS-DynamoDB-4053D6?logo=amazondynamodb)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)

A personal portfolio built to actually demonstrate cloud infrastructure and
full-stack skills in practice. The frontend is a standard Next.js site. The
backend is a real serverless service: AWS Lambda functions talking directly to
DynamoDB, with no managed backend platform doing the work behind the scenes.

## What's actually running

- **Frontend:** Next.js 15 (App Router), Tailwind CSS v4 (CSS-first, no config
  file), deployed on Vercel with automatic deploys on every push to `main`
- **Backend:** Four AWS Lambda functions, each exposed through its own native
  Function URL, no API Gateway in front
- **Database:** A single DynamoDB table (`PortfolioData`) using single-table
  design, blog posts, contact messages, and a page view counter all share one
  table, told apart by a prefix on the partition key (`BLOG#`, `CONTACT#`,
  `COUNTER#`)
- **Bot/spam protection on the contact form:** a hidden honeypot field,
  Cloudflare Turnstile (verified server-side against Cloudflare's API before
  anything gets written), server-side payload validation, and origin-restricted
  CORS on the Function URL
- **Cost:** entirely inside AWS's free tier

## Features

- Blog with markdown rendering, syntax-highlighted code blocks, and an
  auto-generated Table of Contents (headings are extracted from the post
  content itself and slugged to match real anchor IDs, no manual TOC
  maintenance per post)
- Live view counter using DynamoDB's atomic `ADD`, avoiding the classic
  read-then-write race condition, with `localStorage` gating so a single
  visitor only counts once per day
- Dark / light mode with a custom warm-toned palette in both directions
  (not the default cool-gray Tailwind palette), with hydration-safe theme
  detection to avoid a flash of the wrong theme on load
- Secured contact form: honeypot, Turnstile verification, and strict
  server-side validation on every field before anything reaches the database
- Fully responsive, verified on an actual phone over real mobile data, not
  just a resized browser window

## Local development

```bash
git clone https://github.com/bugfinn/portfolio.git
cd portfolio/frontend
npm install
```

Create a `.env.local` inside `frontend/` with:

```
NEXT_PUBLIC_LAMBDA_BLOG_POSTS_URL=
NEXT_PUBLIC_LAMBDA_BLOG_POST_URL=
NEXT_PUBLIC_LAMBDA_CONTACT_URL=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

Then:

```bash
npm run dev
```

## Project structure

```
portfolio/
├── frontend/              Next.js app (root directory for Vercel)
│   ├── app/                Routes: home, about, blog, blog/[id]
│   ├── components/         Layout, sections, and shared UI components
│   └── lib/api.js          Single source of truth for all Lambda calls
└── backend/                Lambda function source (deployed via AWS Console)
```

## Author

Built by **Affan Naveed** · [Portfolio](https://portfolio-tau-two-vtnj2hljh0.vercel.app) · [LinkedIn](https://www.linkedin.com/in/affan-naveed-b2696237a/) · [X](https://x.com/AffanNaveed004)