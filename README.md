# Saffron Skies — Next.js

Standalone Next.js port of the Saffron Skies luxury villa website. Runs fully locally with no external services required.

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3** with custom Saffron Skies theme
- **Framer Motion** for animations
- **Radix UI** components
- **Lucide React** icons
- Local font files (Inter + Playfair Display)
- All images served from Wix CDN (no local image files needed)

## Notes

- The enquiry form simulates submission locally (no backend required)
- All images load from `static.wixstatic.com` — internet connection needed for images
- Fonts are served locally from `/public/fonts/`
