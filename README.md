# SYNCORE Games website

Official bilingual website for SYNCORE. Static HTML/CSS/JS, no build step or runtime dependencies. Genuine screenshots and the published promotional media are served from the official `IMC93Labs/Syncore-Releases` repository. Download links always resolve through GitHub's `releases/latest` endpoint.

## Local preview

Run any static HTTP server in this directory, for example `python -m http.server 8080`, then open http://localhost:8080.

## Cloudflare Pages deployment

Add GitHub Actions secrets `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` (Cloudflare Pages: Edit permission). Pushes to `main` deploy automatically through Cloudflare's official Wrangler GitHub Action. Cloudflare Pages provides HTTPS and the `syncoregames.pages.dev` address when that Pages project name is available in the account.
