# Repository Guidelines

## Project Structure & Module Organization

- Root static site files live at the repository root: `index.html`, `style.css`, `favicon.ico`, and `ads.txt`.
- `dead-simple-grid/` contains a vendored CSS grid demo and its README/LICENSE; avoid editing unless you are updating the upstream asset.
- `compose.yml` provides a local preview server via an Nginx autoindex container.

## Build, Test, and Development Commands

- `docker compose up` runs the `nginx-autoindex` container and serves the repository over HTTP for local preview.
- `pnpm install` installs linting/formatting dependencies listed in `package.json`.
- `pnpm lint` runs HTML/CSS/JS lint checks; run this before submitting changes.
- `pnpm format` formats supported file types with Prettier and fixes CSS with Stylelint.
- There is no build step; changes to HTML/CSS are served as-is by GitHub Pages/Cloudflare Pages.
- There is no automated test suite in this repository.

## Coding Style & Naming Conventions

- Use 2-space indentation in HTML and CSS to match existing files.
- Keep HTML5 markup simple and readable; prefer lowercase tags and double-quoted attributes.
- CSS lives in `style.css`; avoid introducing new files unless there is a clear need.
- Static assets (icons, images) should be placed at the repository root and referenced with relative paths (e.g., `favicon.ico`).

## Testing Guidelines

- No test framework is configured. Validate changes by running the local preview (`docker compose up`) and checking the rendered page in a browser.
- When you touch HTML/CSS/JS, run `pnpm lint` to catch formatting or linting issues.

## Commit & Pull Request Guidelines

- Commit messages are short, imperative, and plain (examples from history: "Update index.html", "Add GitHub Marketplace"). Keep to that style.
- PRs should include a brief summary of the change and, when visual updates are made, attach a screenshot or description of the rendered result.

## Configuration & Deployment Notes

- This repo is deployed as a static site; avoid adding server-side dependencies.
- Update `README.md` links only if deployment endpoints change.
