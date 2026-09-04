# Paths & Patterns — Zi Wei Dou Shu Landing Page

A lightweight, mobile-first static landing page for a premium English-language Chinese metaphysics / Zi Wei Dou Shu personal brand.

## Why static HTML/CSS/JS?

For this first phase, a static site is the best fit:
- No backend required
- Very fast on mobile
- Easy to edit
- Deploys directly to Vercel
- Easy to connect later to WhatsApp, Telegram, booking, payments or forms
- No framework overhead for a single marketing page

## Files

- `index.html` — complete page structure, copy, SEO and Open Graph tags
- `styles.css` — visual design system and responsive layout
- `script.js` — CTA link configuration + mobile menu
- `robots.txt` — basic crawler instructions
- `sitemap.xml` — basic sitemap
- `README.md` — deployment notes

## First edit: CTA links

Open `script.js` and replace:

```js
const LINKS = {
  "free-question": "https://example.com/private-reading",
  "telegram": "https://t.me/your-community",
  "facebook": "https://facebook.com/your-group",
  "booking": "https://example.com/booking",
  "payment": "https://example.com/payment",
  "email": "mailto:hello@example.com"
};
```

The first two are currently used on the page.

## Update your domain

Before production, replace `https://example.com/` in:
- `index.html` → `og:url`
- `index.html` → `og:image`
- `robots.txt`
- `sitemap.xml`

## Vercel deployment

### Option A — GitHub
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. In Vercel, import the GitHub repository.
4. Framework Preset: `Other`
5. Build Command: leave empty.
6. Output Directory: leave empty / root.
7. Deploy.

### Option B — Vercel CLI
From this folder:

```bash
npx vercel
```

For production:

```bash
npx vercel --prod
```

## Future integrations

The page intentionally has no complex backend. You can later replace the placeholder CTA URLs with:

- WhatsApp private reading
- Telegram community
- Facebook Group
- Calendly / Cal.com / other booking system
- Stripe / payment checkout
- ConvertKit / Mailchimp / Brevo / custom email form

For an actual form or payment flow, keep this landing page static and send users to the external service. That keeps the first version fast and reliable.

## Brand direction

The visual system intentionally avoids:
- Generic AI astrology visuals
- Neon gradients
- Traditional red/gold clichés
- Dragon / temple / tourist-style Chinese imagery
- "Guaranteed prediction" language

It uses:
- Ink black
- Mineral / paper neutrals
- Restrained warm-gold accents
- Editorial typography
- Constellation geometry
- Mountain / moon imagery
- Large negative space
- Quiet, premium copy
