# ZHEN LONG — V6 Hero Responsive Fix

This version keeps the original image assets unchanged and only changes the Hero Dragon implementation.

## Hero Dragon responsive behavior
- Desktop: original `hero-dragon-art.png` is rendered as a real `<img>` element.
- Tablet: width scales with the viewport while preserving the original 890×700 aspect ratio.
- Mobile: the same original PNG remains visible and scales down proportionally.
- No `background-size: cover` is used for the Hero Dragon.
- No forced cropping or stretching is used.
- No image conversion is performed.
- The original PNG remains `assets/hero-dragon-art.png`.
- The original Logo remains `assets/zhen-long-logo.png`.
- The existing radial edge fade is implemented with CSS masking only; it does not modify the source PNG.

## Files
- `index.html`
- `assets/hero-dragon-art.png`
- `assets/zhen-long-logo.png`
- `assets/golden-dragon-watermark.webp`
- `assets/favicon.png`
