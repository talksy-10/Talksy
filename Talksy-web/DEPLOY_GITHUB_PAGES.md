# Deploy Talksy On GitHub Pages

Talksy is now prepared as a static website, so it can work on:

- iPad
- laptop
- mobile phone

## What to upload

Put this whole folder into a GitHub repository.

Important files:

- `index.html`
- `style.css`
- `script.js`
- `manifest.webmanifest`
- `sw.js`
- `offline.html`
- `icon.svg`
- `.github/workflows/deploy-pages.yml`
- `.nojekyll`

## Quick setup

1. Create a new GitHub repository named `talksy`.
2. Upload all files from this folder to the repository.
3. Make sure the default branch is `main`.
4. In GitHub:
   `Settings` -> `Pages` -> `Source`
   Choose `GitHub Actions`.
5. Push to `main`.

## Result

GitHub Pages will publish the site to a URL like:

`https://<your-github-username>.github.io/talksy/`

That link will open on iPad, laptop, and mobile browsers.

## Offline support

Talksy includes a service worker, so after the site loads once, it can keep working offline on that device.

## Optional next step

If you later buy a custom domain, you can point it to GitHub Pages and use a cleaner link like:

`https://talksy.app`
