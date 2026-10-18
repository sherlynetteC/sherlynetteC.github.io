# Sherlynette Pérez Castro — faculty application website

Static, responsive website for free hosting on GitHub Pages. No build step required.

## Publish
1. Create a public GitHub repository named `YOURUSERNAME.github.io` (replace YOURUSERNAME with your GitHub username).
2. Upload **the contents of this folder** (not the enclosing folder) to the repository's main branch.
3. In repository **Settings → Pages**, select **Deploy from a branch**, **main**, **/(root)** and save.
4. Open `https://YOURUSERNAME.github.io` after deployment finishes.

## Customize before sharing with search committees
- Replace the abstract CSS hero background with your own fieldwork, microscopy, or other research image. One option: add `assets/hero.jpg`, then append `.hero-image{background:linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.12)),url('assets/hero.jpg') center/cover}` to `style.css`.
- Replace the *illustrative placeholder* SVG in the Research Highlights section with an actual publication figure (with any needed permissions/attribution).
- Add your CV as `assets/CV-ADD-YOURS.pdf` and remove `data-placeholder="true"` from its link in index.html.
- Add verified publication titles, links, and DOIs.
- Edit the research statements to match the exact framing of your faculty applications.
- Review contact email and affiliation before publishing.

## Custom domain (optional)
Configure your domain in Settings → Pages → Custom domain and follow GitHub's DNS instructions.

No Squarespace subscription required. The site uses Google Fonts, so fonts need internet access.

## Photos and dark theme
The starter now includes your four field/lab photographs in assets/ and a black theme. The salt-marsh image is the homepage hero; the soil pit is in Research Highlights. To change image cropping edit background-position in style.css. The CV link and publications are still placeholders; review them before sending to search committees.
