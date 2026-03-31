# The Oaks upgraded website

This package is ready to deploy with Vercel or Netlify.

## What changed
- Refined the site into a more premium-looking design
- Updated copy using details from the live Oaks website
- Wired leasing and resident portal links
- Left clean placeholders for the contact form, map embed, and gallery photos

## Why the gallery still uses placeholders
The live site exposes gallery structure and labels, but I could not reliably package the original image file links from here. To avoid broken assets, this version keeps polished placeholders that you can replace with the real photos.

## Deploy on Vercel
1. Unzip this folder
2. Upload it to a GitHub repo, or drag and drop the folder into Vercel
3. Framework preset: `Vite`
4. Build command: `npm run build`
5. Output directory: `dist`

## Run locally
```bash
npm install
npm run dev
```
deploy
