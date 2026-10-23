# Online Tuitions — website redesign

A responsive, buildless redesign of Online Teaching & Practice - Tuitions.

## Open or host the website

The complete website is in `dist/`. Open `dist/index.html` in a browser, or upload the **contents** of `dist/` to GitHub Pages, Netlify, or any static web host. Preserve the spelling and letter case of all filenames. There are no required packages or build commands.

For a local web preview, run `python -m http.server 8000 --directory dist` and visit `http://localhost:8000`.

## Included

- All nine original page URLs retained.
- Responsive navigation, clear focus states, reduced-motion support and mobile layouts.
- Mathematics, Physics, Chemistry and French subject pages.
- Original learning-guide content, fees, contact details and parent feedback.
- India/Canada hourly pricing switch and expandable FAQs.
- Existing Google Form embedded on the demo page, with a direct fallback link.
- The first generated student photograph, optimised as a local WebP asset.

## Edit the content

Edit the HTML files in `dist/` directly for simple changes. Shared styles and interactions live in `dist/assets/styles.css` and `dist/assets/main.js`.

For coordinated changes across all pages, edit `scripts/build_pages.py`. Learning-guide text is in `scripts/learning-guides.json`. Run `python scripts/build_pages.py` to regenerate the HTML. **Regenerating overwrites direct HTML edits.** It does not overwrite the CSS, JavaScript, or hero image.

The brand is displayed as “Online Tuitions”; the original full name is retained in the footer and About page. Update the phone number, email, or booking form URL in the generator if these change.

## Booking and data

The booking page uses the original Google Form. Form responses continue to be managed by its owner. The website itself adds no database, analytics, account system or data collection. The form was checked for successful loading; no test request was submitted.

## Validation

Checked all nine pages for local asset/link targets and fragment links; one primary heading, page title and mobile viewport metadata per page; JavaScript syntax; mobile navigation; pricing switching; FAQ expansion; and the live Google Form embed. Phone and tablet layouts were checked in the browser.
