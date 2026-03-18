# Rajneesh Kumar — Portfolio

Production-grade personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**.

## Tech

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Lucide React + React Icons
- Nodemailer (contact form API)

## Getting started

```bash
cd portfolio
npm install
npm run dev
```

## Assets

Place these in `public/`:

- `Rajneesh.png`
- `RajneeshKumar_SoftwareEngineer.pdf`

## Contact form (SMTP)

1. Copy env file:

```bash
copy .env.example .env.local
```

2. Fill in SMTP variables in `.env.local`:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

Optional:

- `CONTACT_TO` (defaults to `personalInfo.email`)
- `CONTACT_FROM` (defaults to `SMTP_USER`)

## Production build

```bash
npm run build
npm run start
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
