# SquareUp

A portfolio website for SquareUp, a digital product studio. It's built with [Astro](https://astro.build) from the SquareUp Figma Community template.

The site has seven pages: Home, Services, Work, Process, About, Careers and Contact. It's a dark theme with lime-green accents, and it uses scroll-reveal and hover animations.

## Tech stack

- **Astro 7** + TypeScript
- **Barlow** font, from `@fontsource/barlow`
- **Lucide** icons, from `@lucide/astro`
- **Supabase** (`@supabase/supabase-js`), installed for the contact and job application forms. It isn't connected yet.
- **Playwright**, a dev dependency, for checking layouts at different screen widths

## Getting started

Requires Node.js 22.22 or later.

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321`        |
| `npm run build`   | Build the production site to `./dist/`          |
| `npm run preview` | Preview the production build locally            |
| `npx astro check` | Type-check `.astro` and `.ts` files             |

## Project structure

```text
public/
  images/            Banners, brand logos, project mockups, testimonial photos
src/
  components/        Shared sections (navbar, footer, banners, FAQ, contact form...)
    home/            Home page sections (hero, services, featured work...)
  data/              Page content as typed TypeScript arrays
  layouts/           BaseLayout: <head>, navbar, footer, scripts
  pages/             One file per route
  scripts/           Scroll reveal and card spotlight effects
  styles/global.css  Design tokens, reset, buttons, shared helpers
design-exports/      Figma screenshots used as the reference for each page
```

Most text, such as services, projects, testimonials, FAQs and job openings, lives in `src/data/`. To change it, edit those files rather than the page markup.

## Responsive design

Every page follows three Figma frames, and each frame has its own CSS tier:

| Tier    | Figma frame | Media query                 |
| :------ | :---------- | :-------------------------- |
| Desktop | 1920px      | Base styles                 |
| Laptop  | 1440px      | `@media (max-width: 1799px)` |
| Mobile  | 390px       | `@media (max-width: 1023px)` |

Two extra blocks handle the sizes in between:
- Small laptop: `max-width: 1279px`
- Tablet: `700px` to `1023px`, which puts card grids back into two columns

Spacing comes from shared tokens in `global.css`, so similar blocks match across pages:
- `--space-intro`
- `--space-section`
- `--space-cell`
- `--space-card`

## Notes

- The logos, mockups, testimonials and job listings are placeholder content from the template. They will be replaced later.
- The "Our Recent Works" cards on the home page aren't in the Figma template. They reuse the projects from the Work page.
