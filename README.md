# Shermaine Yap — Portfolio

Personal portfolio at https://shermaineyap.github.io/, built with React, Vite and framer-motion.

## Run it locally

```bash
npm install
npm run dev        # opens http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Deploy to GitHub Pages (first time)

This replaces the old single-file site in the `shermaineyap.github.io` repo.

1. In the repo on GitHub, delete the old `index.html` (or move it to a folder called `old/`).
2. Copy everything in this folder into the repo (including the hidden `.github` folder, but **not** `node_modules` or `dist`).
3. Commit and push to the `main` branch.
4. On GitHub: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions**.
5. Wait about a minute. The `Deploy to GitHub Pages` workflow under the **Actions** tab builds the site and publishes it. Every future push to `main` redeploys automatically.

If the site ever shows a blank page, check that `base` in `vite.config.js` is `'/'` (correct for a `username.github.io` repo).

## Where to edit things

All the content lives in `src/data/`. You should rarely need to touch the components.

| File | What it controls |
| --- | --- |
| `src/data/profile.js` | Name, tagline, email, links, the four hero stats, the About paragraphs |
| `src/data/projects.js` | Project cards. Each has a summary, tags, links, metrics and a "How it works" list |
| `src/data/hackathons.js` | The timeline. `tier` is `win`, `place` or `entry`; `cert` is a filename in `public/certs/` |
| `src/data/certificates.js` | The certificate wall and its filter categories |
| `src/data/experience.js` | Experience, education and the Leadership & activities cards |
| `src/data/skills.js` | Skill groups and chips |

### Adding a new certificate

1. Save the image as a JPG in `public/certs/` with a short name, e.g. `32-my-new-award.jpg` (keep it under ~1600 px wide).
2. Make a thumbnail of the same image at about 520 px wide and save it as `32-my-new-award-thumb.jpg`.
3. Add a line to `src/data/certificates.js`:
   ```js
   { file: '32-my-new-award', title: 'My New Award', issuer: 'Who gave it', year: 2026, cat: 'Hackathons', star: true },
   ```
   `star: true` adds the "★ Highlight" ribbon. Leave it out for ordinary entries.
4. If it belongs on the hackathon timeline too, add an entry in `src/data/hackathons.js` with `cert: '32-my-new-award'`.

### Adding a project

Copy any block in `src/data/projects.js` and change the fields. `accent` can be `violet`, `teal`, `amber` or `rose`. Add the project's `id` to one of the filter groups at the top of `src/components/Projects.jsx` if you want it to appear under a filter other than "All".

### Colours and fonts

Everything is a CSS variable at the top of `src/index.css` (`--violet`, `--teal`, `--amber`, `--rose`, fonts). Dark-mode values are in the `[data-theme='dark']` block just below.

## Privacy note

The IC numbers printed on the badminton and LCCI certificates have been blurred in the copies in `public/certs/`. If you add any certificate that shows your IC, address or phone number, blur it first.
