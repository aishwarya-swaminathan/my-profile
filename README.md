# Aishwarya Swaminathan — portfolio

Responsive static HTML, CSS and vanilla JavaScript. No framework, build dependency, external fonts, analytics or third-party scripts.

Production URL: https://aishwarya-swaminathan.github.io/my-profile/

## Preview and validate

From the parent folder, run `python -m http.server 8000`, then open `http://localhost:8000/my-profile/`. This previews the real project-site prefix. Run `python scripts/check_site.py` from the repository to check local assets, anchor targets and phone privacy.

## GitHub Pages

In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**. Merge the portfolio branch into `main`. The workflow validates the site, stages only `index.html`, `.nojekyll`, `css`, `js` and `assets`, then deploys via GitHub Pages. Pull requests validate and upload an artifact without deploying. Manual dispatch on `main` is supported.

All local asset URLs are relative (`./css/…`, `./js/…`, `./assets/…`) so the site works at `/my-profile/`. `.nojekyll` also permits direct static branch hosting if needed. No custom domain is configured.

## Editing

- Content, career history, contact links: `index.html`
- Colors, spacing, responsive layout: `css/styles.css`
- Mobile navigation, current section and year: `js/main.js`
- Browser icon: `assets/favicon.svg`

The existing repository supplied role titles, career dates, email and social links. The rebuild brief supplied 12+ years, the updated Visa/Lowe’s metrics, 6–8 engineer leadership, RAG/MCP work and Skillloop. Staff Software Engineer remains the actual current title; Principal is career positioning. Approximate throughput and peak figures remain qualified. Enterprise AI descriptions avoid unprovided outcomes or confidential implementation details. Skillloop has a discussion CTA until a verified public project URL is available.

The published site contains no phone number. Historical Git commits are not rewritten.
