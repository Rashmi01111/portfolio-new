# Rashmi Sharma — Portfolio

A premium, production-ready personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and GSAP.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS v4** for styling
- **Framer Motion** & **GSAP** for animations
- **React Router** for routing
- **React Icons** & **Lucide Icons**
- **React Hot Toast** for notifications

## Features

- Dark/Light theme toggle
- Glassmorphism UI with gradient accents
- Animated hero with typing effect
- 6 featured project cards with tilt effects
- Skills, experience timeline, education & certifications
- GitHub stats integration
- Contact form with toast notifications
- SEO optimized (meta tags, Open Graph, JSON-LD, sitemap, robots.txt)
- Fully responsive (mobile, tablet, desktop)
- Lazy loading & code splitting
- Scroll progress bar, mouse glow, page loader

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

All personal information, social links, and URLs are centralized in one file for easy updates:

### `src/constants/config.ts`

Update your name, email, location, resume URL, GitHub username, and social links here.

### `src/data/projects.ts`

Add, edit, or remove projects. Set `liveDemoUrl` to an empty string to show the "Coming Soon" badge. When you add a URL, the Live Demo button appears automatically.

### `src/constants/skills.ts`

Modify skill categories and technologies.

### `src/constants/experience.ts`

Update experience, education, and certification entries.

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy — no additional configuration needed

The included `vercel.json` handles SPA routing.

## Project Structure

```
src/
├── animations/       # GSAP & Framer Motion variants
├── components/
│   ├── effects/    # Page loader, mouse glow, backgrounds
│   ├── layout/     # Navbar, footer, scroll progress
│   ├── sections/   # Hero, about, skills, projects, etc.
│   ├── seo/        # Structured data
│   └── ui/         # Reusable UI components
├── constants/      # Config, skills, experience, navigation
├── data/           # Project data
├── hooks/          # Custom React hooks
├── pages/          # Route pages
├── styles/         # Global CSS
├── types/          # TypeScript interfaces
└── utils/          # Utility functions
```

## Customization Checklist

- [ ] Update `src/constants/config.ts` with your details
- [ ] Replace GitHub username in config
- [ ] Update social links (GitHub, LinkedIn, LeetCode, Email)
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update project data in `src/data/projects.ts`
- [ ] Replace project placeholder images in `public/assets/projects/`
- [ ] Update education institution name in `src/constants/experience.ts`
- [ ] Update domain in `index.html`, `sitemap.xml`, and `robots.txt`

## License

MIT
