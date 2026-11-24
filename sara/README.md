# Sara’s Workshop Club

**[🌿 Open Sara’s Workshop Club](https://galarnon42.github.io/sara/)**

The website link will work once GitHub Pages is enabled and publication finishes. See the [one-time hosting setup and visibility notes](#optional-github-pages-hosting) below.

A cheerful, responsive website template for Sara to discover academic biology workshops and keep a shortlist of favorites.

**All workshop listings, dates, venues, and prices are fictional sample content.** The template is intended for academic biology workshops; Sara’s precise research interests and search criteria are still to be decided. It filters its bundled sample data in the browser and has no search backend, automated source ingestion, or live workshop feed.

## Run locally

No dependencies, installation, or build step are required. From this folder, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). Use a local server rather than opening `index.html` directly, because the JavaScript uses modules. Stop the server with `Ctrl+C`.

## What works

- Search the sample listings by keyword and filter by topic, format, and month.
- Sort by date or title and reset the filters.
- Save favorites and view the saved shortlist.
- Use the layout on desktop, tablet, or mobile.

Favorites are stored in this browser’s `localStorage`. They are not sent to a server or synchronized between browsers or devices. Clearing browser storage removes them.

## Customize

- `data.js`: replace the fictional workshops and adjust the `FILTERS` definitions once Sara’s biology interests and preferences are known. Topic, format, and month are configurable starting points. Keep sample labels until the listings are real and verified.
- `filters.js`: adjust the filtering and sorting behavior.
- `index.html`: edit the page structure and copy.
- `styles.css`: change colors, spacing, typography, and responsive layout.
- `app.js`: edit rendering, interaction, and favorite storage.
- `assets/flower.svg`: the decorative flower artwork.

Keep asset references relative so the site can also work under a GitHub Pages project path such as `/sara/`.

For a future search or source-ingestion service, normalize verified workshop information into the record structure in `data.js`. This allows the existing cards, details, filters, and saved view to be reused. Selecting academic sources, retrieving their listings, and connecting a live service are later work; no such integration is implemented here.

## Tests

With a current Node.js installation, run:

```sh
node --test
```

The project uses JavaScript modules (`"type": "module"` in `package.json`). No `npm install` is needed.

## Push to GitHub when ready

This folder is prepared for local use; creating it does not publish a website. The intended remote is `https://github.com/galarnon42/sara.git`, with branch `main`. Remote authentication and the current remote branch contents have not been verified.

Before pushing, confirm the local branch and remote, then fetch:

```sh
git status --short --branch
git remote -v
git fetch origin
git branch -r
```

If `origin/main` exists, inspect its history and differences before integrating any existing remote work:

```sh
git log --oneline --graph --decorate --all -20
git diff --stat origin/main main
```

Push only when the remote is empty or its existing history has been reconciled with the local branch:

```sh
git push -u origin main
```

If authentication fails or Git rejects the push, resolve that issue first. Do not force-push or overwrite existing remote work.

## Optional GitHub Pages hosting

After the files are pushed and you decide to publish, open the repository’s **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/ (root)**, then save. The included `.nojekyll` file supports serving this static site without Jekyll processing. No custom workflow is required. Follow the [official publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

**A private repository does not automatically make its Pages website private.** GitHub Pages supports private repositories on GitHub Pro, Team, and Enterprise plans; standard published Pages sites are publicly accessible even when the source repository is private. Restricted access requires an eligible GitHub Enterprise Cloud organization and an organization-owned private or internal project repository. See [GitHub’s plan and publication requirements](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [private Pages access requirements](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/about-privately-published-github-pages-sites).

Keep the repository private. Review the intended website audience before enabling Pages, and include only content appropriate for that audience. No repository visibility or hosting settings are changed by this template.
