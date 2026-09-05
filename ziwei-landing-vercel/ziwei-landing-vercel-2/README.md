# XUAN YI — Eastern Metaphysics & Daoist Divination

Production-ready static site package for:
https://ziweidoushu-livid.vercel.app/

## Included
- `index.html` — English homepage with SEO metadata, canonical URL and Schema.org structured data
- `styles.css` — responsive visual system
- `script.js` — interactions and links
- `og-image.png` — 1200×630 social sharing preview image
- `favicon.svg` — browser favicon
- `apple-touch-icon.png` — mobile home-screen icon
- `robots.txt` — crawler rules + sitemap location
- `sitemap.xml` — XML sitemap for the current production URL

## Vercel deployment
Upload/deploy the contents of this folder as the site root. No build command is required for this static package.

After deployment, verify:
- https://ziweidoushu-livid.vercel.app/robots.txt
- https://ziweidoushu-livid.vercel.app/sitemap.xml
- https://ziweidoushu-livid.vercel.app/og-image.png

## SEO next step
Once the site is live, add `https://ziweidoushu-livid.vercel.app/sitemap.xml` to Google Search Console. If the domain changes later, update the canonical URL, Open Graph URL/image URL, robots sitemap URL, Schema.org URLs and sitemap URL to the new domain.

## Note
The Vercel domain is currently treated as the canonical production URL. When you move to a custom domain, replace every occurrence of `ziweidoushu-livid.vercel.app` with the final domain before launch.
