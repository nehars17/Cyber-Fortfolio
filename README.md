# Cyber-Fortfolio

Cyber-Fortfolio is a cybersecurity-themed personal portfolio web application built with React, TypeScript, Tailwind CSS, and Framer Motion.

It presents professional experience, projects, certifications, testimonials, and contact details in a modern single-page layout with smooth section navigation and animated interactions.

## Live Portfolio

https://nehars.netlify.app/

## Highlights

- Cyber-style visual design with motion effects and responsive layout
- Single-page portfolio sections: Hero, About, Skills, Experience, Testimonials, Projects, Certifications, Contact
- Reusable UI components built with Radix UI + Tailwind utilities
- Static portfolio data model for fast loading and easy customization
- Vite development experience with an Express server for local/dev and production serving

## Tech Stack

- Frontend: React 18, TypeScript, Vite, Wouter
- Styling/UI: Tailwind CSS, Radix UI primitives, class-variance-authority
- Animation/UX: Framer Motion, react-scroll, react-type-animation
- Data/state: Local typed data objects, TanStack Query hooks wrapper
- Server/runtime: Node.js, Express, TypeScript (tsx)

## Project Structure

- `client/src/pages/Home.tsx`: Main page composition and all portfolio sections
- `client/src/lib/data.tsx`: Portfolio content (skills, projects, certifications, experiences, testimonials)
- `client/src/components/`: Reusable section and UI components
- `client/src/hooks/use-portfolio.ts`: Data access hooks for portfolio content and contact submission simulation
- `server/`: Express runtime and static/prod serving logic
- `script/build.ts`: Build pipeline entry

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The app starts the server and Vite-powered client for local development.

## Build and Run (Production)

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production assets and server bundle
- `npm run start`: Run production server
- `npm run check`: TypeScript type check

## Content Customization

To personalize the portfolio, update the content arrays in `client/src/lib/data.tsx`:

- `skills`
- `experiences`
- `projects`
- `certifications`
- `testimonials`

Also replace or add asset files under:

- `client/src/assets/`
- `client/public/assets/`

## Contact Form Behavior

The contact form currently runs in static mode and simulates submission success from the client hook (`useSendMessage`).

If you want real message delivery, add an API endpoint and update the mutation logic in `client/src/hooks/use-portfolio.ts`.

## Deployment Notes

- The project includes a static build output path and server-side static serving support.
- `_redirects` is present for SPA routing support on static hosts.
- Set `NODE_ENV=production` and `PORT` as needed in deployment environments.

## License

MIT