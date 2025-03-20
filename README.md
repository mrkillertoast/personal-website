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
GOOGLE_ANALYTICS_ID=<your_google_analytics_id>
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

## Cookie Banner Implementation

This project includes a cookie banner that allows users to control their privacy preferences for Google Analytics.

### Features

- Cookie banner that matches the site's design using shadcn-ui components
- Options to accept or decline Google Analytics
- User selection is saved in a cookie that expires after 365 days
- Google Analytics is blocked until consent is given

### Configuration

1. Replace the placeholder value in the `.env` file with your actual Google Analytics ID:

```
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX  # Replace with your actual Google Analytics ID
```

2. The cookie banner will automatically appear to users who haven't made a selection yet.

3. The user's selection is stored in a cookie named `cookie-consent` that contains a JSON object with the user's preferences.

### How It Works

-How It Works
The cookie banner component (components/CookieBanner.vue) displays the privacy options to the user
The Google Analytics integration is configured through the nuxt-gtag module
Google Analytics tracking is disabled by default until consent is given

### Customization
You can customize the cookie banner by editing the components/CookieBanner.vue file. The text is currently in German, but you can change it to any language you prefer.