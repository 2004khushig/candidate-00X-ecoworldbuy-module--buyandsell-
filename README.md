Vercel Link- https://ecoworldbuy.vercel.app/
# EcoWorldBuy

EcoWorldBuy is a Next.js e-commerce demo focused on sustainability. Users can browse eco-friendly products and experience a Stripe-powered checkout flow.

## Features

- 🌱 Browse featured and Printful-powered eco products
- 🛒 Add to cart (UI only, demo)
- 💳 Stripe checkout integration (demo session)
- ⚡️ Fast, modern UI with Tailwind CSS
- 🖼️ Google Fonts: Roboto & Montserrat

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

You can start editing the main page by modifying [`app/page.tsx`](app/page.tsx). The page auto-updates as you edit the file.

## Project Structure

- [`app/page.tsx`](app/page.tsx): Home page with featured product and Stripe checkout button
- [`app/products/page.tsx`](app/products/page.tsx): Product listing page (fetches from `/api/printful-products`)
- [`app/api/printful-products/route.ts`](app/api/printful-products/route.ts): API route serving demo product data
- [`app/api/create-checkout-session/route.ts`](app/api/create-checkout-session/route.ts): API route for Stripe checkout session (demo)
- [`app/fail/page.tsx`](app/fail/page.tsx): Payment failure page

## Customization

- Update product data in [`app/api/printful-products/route.ts`](app/api/printful-products/route.ts)
- Adjust checkout logic in [`app/api/create-checkout-session/route.ts`](app/api/create-checkout-session/route.ts)
- Style with Tailwind in [`app/globals.css`](app/globals.css) and [`styles/tailwind.css`](src/styles/tailwind.css)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Stripe Docs](https://stripe.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
