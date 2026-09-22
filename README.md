# Yafet Daniel — academic portfolio

This repository publishes [japhd.github.io](https://japhd.github.io/), a concise research-oriented portfolio for graduate opportunities, laboratory collaboration, and embedded or digital hardware work.

## Structure

- `index.html` contains all public content and semantic page structure.
- `styles.css` defines the editorial design, responsive layouts, print rules, and reusable media styles.
- `script.js` progressively enhances the mobile navigation and project galleries.
- `assets/images/` holds optimized, public-safe profile and project evidence.

The site has no build step or third-party runtime dependency. If JavaScript is unavailable, navigation remains visible and every gallery image remains readable.

## Add project images

1. Create `assets/images/projects/<project-slug>/` and place only images that can be published publicly.
2. Record each image's real pixel dimensions in its `width` and `height` attributes, write specific alt text, and add a short evidence-focused caption.
3. For a single card image, add `class="card-media"` to the `<img>` inside a compact project or credential card.
4. For multiple images, copy the existing `data-gallery` structure in `index.html`. Each slide needs `data-gallery-slide`; keep the previous/next controls and the `aria-live` status. `script.js` will initialize it automatically.

Do not add empty image placeholders. A project without verified media should remain text-only until suitable evidence is available.

## Add certificate or credential images

Store public-safe certificate images in `assets/images/credentials/<credential-slug>/` and use the same `card-media` pattern. Crop or redact student IDs, document numbers, addresses, QR codes, signatures, and other private information before committing. Do not publish the CV, transcript, or source document scans from which the site copy was prepared.

## Test locally

Run the contract tests:

```powershell
python -m unittest -v tests/test_site.py
```

Preview through an HTTP server:

```powershell
python -m http.server 4173 --directory .
```

Then open `http://127.0.0.1:4173/`.

## Deploy

GitHub Pages serves this repository. A push to `main` triggers the Pages deployment; after it completes, verify the live URL, external links, gallery controls, and mobile layout.
