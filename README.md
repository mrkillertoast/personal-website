# My Portfolio Website

This is my personal portfolio website built with Nuxt 3 and Vue.js. It showcases my work experience, education, skills,
and projects.

## Features

- Modern and responsive design
- Sections for about me, experience, education, skills, and projects
- Contact form
- Dynamic content loading
- Carousel for personal images
- Skills display with categories

## Technologies Used

- [Nuxt 3](https://nuxt.com/): A free and open source web application framework, based on Vue.js
- [Vue.js](https://vuejs.org/): A progressive JavaScript framework for building user interfaces
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript
- [Lucide Vue Next](https://lucide.dev/icons): Beautifully simple, pixel-perfect icons
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs
- [Headless UI](https://headlessui.com/): Completely unstyled, fully accessible UI components, designed to integrate
  beautifully with Tailwind CSS.
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/): A user-friendly, privacy-respecting
  alternative to CAPTCHA

## Setup

### Prerequisites

- Node.js (>=18.0)
- NPM or Yarn or Pnpm or Bun

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Create a .env file in the root directory and add your environment variables:

```bash
PLUNK_API_KEY=<your_plunk_api_key>
RECEIVER_EMAIL=<your_email_address>
TURNSTILE_SECRET_KEY=<your_turnstile_secret_key>
TURNSTILE_SITE_KEY=<your_turnstile_site_key>
```

### Development

Start the development server:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

Open http://localhost:3000 in your browser.

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
