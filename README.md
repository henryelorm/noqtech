# noqtech
Official NoqTech site — https://henryelorm.github.io/noqtech/

Next.js (App Router) + TypeScript + Tailwind CSS, exported as static HTML and deployed to
GitHub Pages by `.github/workflows/static.yml` on every push to `main`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000/noqtech/
npm run build      # static export to ./out (plus a prefetch-file fix, see scripts/)
npm run lint       # type-check
```

## Where things live

| Path | Purpose |
|---|---|
| `src/lib/constants.ts` | All site copy and data: company info, projects, services, process, tech stack |
| `src/app/*/page.tsx` | Routes: `/`, `/services`, `/our-work`, `/about`, `/contact` |
| `src/components/layout` | Header (with mobile drawer), Footer, MobileTabBar |
| `src/components/ui` | Button, Badge, Section primitives |
| `src/components/sections` | Page sections (Hero, ProjectCard, ServiceDetail, …) |
| `src/styles/globals.css` | Design tokens (colours, type scale, radii, shadows) |
| `public/` | Images, project screenshots, `app-ads.txt` |

## Common edits

- **Add a project:** append to `PROJECTS` in `src/lib/constants.ts`. Put screenshots in
  `public/projects/<slug>/` and list them in `images`; without images a branded cover is shown.
- **Change the project brief form or contact email:** `COMPANY` in `src/lib/constants.ts`.
- **Custom domain:** set `NEXT_PUBLIC_BASE_PATH=''` (or edit `next.config.ts`) so paths are served from `/`.
