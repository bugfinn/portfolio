# Portfolio — Affan Naveed

Personal portfolio and blog built on a modern serverless stack.

## Stack
- **Frontend:** Next.js 15 (App Router), Tailwind CSS v4
- **Hosting:** Vercel (GitOps — auto deploys on push to main)
- **Backend:** AWS Lambda with native Function URLs (no API Gateway)
- **Database:** Amazon DynamoDB (Always Free tier)

## Structure
- `frontend/` — Next.js app (Vercel root directory)
- `backend/` — AWS Lambda functions

## Local Development
cd frontend && npm install && npm run dev