# Legacy Landscaping — website

Static site. No build step, no dependencies. Every page is plain HTML + one CSS file.

## Files
- `index.html` — home (hero, recent work, contact banner)
- `services.html` — all six services, each with photos; anchors: `#interlock`, `#sod`, `#lawn`, `#mulch`, `#snow`, `#junk`
- `work.html` — photo gallery
- `why.html` — about, stats, Google reviews
- `contact.html` — estimate form + contact details
- `style.css`, `script.js` — shared styles and the mobile nav toggle
- `assets/` — logo and photos

## Publishing on GitHub Pages
1. Push these files to the repo root (or a `docs/` folder).
2. Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/` (or `/docs`).
3. For a custom domain (e.g. legacylandscaping.ca), add it under Settings → Pages and point an ALIAS/A record at GitHub's IPs.

## Before going live — things to replace
1. **Contact form.** `contact.html` posts to Formspree. Create a free form at formspree.io and swap `YOUR_FORM_ID` in the `action` attribute. Netlify Forms or Basin work the same way. GitHub Pages cannot process forms itself.
2. **Email address.** `llgexteriors@gmail.com` appears in `contact.html` — change if different.
3. **Stats on `why.html`.** "10+ years", "450+ properties", "24h quote turnaround", "12 months a year" are placeholders — set them to real numbers or delete them.
4. **Service areas** listed in `contact.html`.
5. **Photo captions** in `work.html` — currently descriptive guesses.

## Google reviews
The reviews on `why.html` are hard-coded from the Google listing, with a link to the full profile. To make them update automatically, pick one:
- **Widget (easiest):** Elfsight, Trustindex or EmbedSocial. Paste their snippet where the `.reviews` block is. Works on GitHub Pages. Small monthly fee.
- **Google Places API:** needs a Google Cloud API key and a small server/serverless function to keep the key private. Returns the 5 most recent reviews. Free tier is generous.
- **Manual:** paste new reviews into the `reviews` block in `why.html` as they come in. Fastest-loading option.

## Adding a photo
Drop the file in `assets/photos/`, then add a `<figure>` to the grid on the relevant page. A "Before"/"After" badge is `<figure class="has-cap">…<figcaption>Before</figcaption></figure>`.
