# Riyan Purba — Portfolio

Vite + React 18 + TypeScript + Tailwind CSS 3.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # outputs dist/
npm run preview
```

- SEO meta, Open Graph, JSON-LD and Google Analytics live in `index.html`.
- Google Tag Manager is initialised in `src/main.tsx`.
- Content lives in `src/json/*` (projects, experience, rate card, testimonials, tech).
- Deploy `dist/` to Vercel (framework preset: Vite) or build the included Dockerfile (nginx).
