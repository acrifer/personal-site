# Personal Site

A magazine-inspired personal portfolio built with Next.js, Tailwind CSS, and an HTML Canvas hero.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content editing

All placeholder portfolio content lives in:

- `src/data/portfolio.ts`

Update these fields when replacing placeholders:

- `profile.name`
- `profile.role`
- `profile.intro`
- `profile.email`
- `profile.socialLinks`
- `projects`

## Structure

- `src/app/page.tsx`: homepage layout
- `src/components/canvas-atlas.tsx`: Canvas hero animation
- `src/app/globals.css`: global visual system
- `src/data/portfolio.ts`: site content

## Checks

```bash
npm run lint
npm run build
```

## Deployment

Production deployment target:

- GitHub repository: `personal-site`
- Vercel project: `personal-site`
