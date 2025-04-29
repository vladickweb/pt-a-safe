# PT-A-SAFE

## Table of Contents
- [PT-A-SAFE](#pt-a-safe)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
  - [Technical Overview](#technical-overview)
  - [Authentication](#authentication)
  - [Dashboard](#dashboard)
  - [Data Management](#data-management)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Useful Links](#useful-links)

---

## Overview

**PT-A-SAFE** is a full-stack web app built with Next.js 15, TypeScript, and Tailwind CSS. It includes secure authentication, reusable components, light/dark themes, efficient data management, performance optimization, and full testing coverage.

## Features

- Secure authentication (NextAuth.js - email/password)
- Reusable UI components (Storybook)
- Light/Dark theme support
- Interactive dashboard (Chart.js)
- Large data handling with optimized pagination
- Server-side rendering and streaming (Next.js 15)
- Unit and E2E tests (Jest, Cypress)
- Code quality with ESLint, Prettier, and TypeScript

## Getting Started

1. Clone the repo:
   ```bash
   git clone <repository-url>
   cd pt-a-safe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (see [Environment Variables](#environment-variables)).

4. Start the dev server:
   ```bash
   npm run dev
   ```
   Access [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

## Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Run production server
- `npm run test` – Run unit tests
- `npm run test:e2e` – Run E2E tests
- `npm run storybook` – Launch Storybook
- `npm run lint` – Run ESLint
- `npm run format` – Run Prettier

## Technical Overview

- **Next.js 15** (App Router, server components, SSR, streaming)
- **TypeScript**, **Tailwind CSS**, **NextAuth.js**, **React Query**
- **Chart.js** for data visualization
- **Storybook** for component documentation
- **Jest** and **Cypress** for testing

## Authentication

- Secure login with NextAuth.js.
- Example credentials:
  - **Email:** `john@doe.com`
  - **Password:** `password123`

## Dashboard

- Available at `/dashboard`
- Dynamic data visualizations.

## Data Management

- `/users` page with optimized pagination for large datasets.

## Testing

- **Unit Tests:** Jest + React Testing Library
- **E2E Tests:** Cypress

## Deployment

- Deployed on Vercel: [https://pt-a-safe.vercel.app](https://pt-a-safe.vercel.app)

## Useful Links

- **Production:** [https://pt-a-safe.vercel.app](https://pt-a-safe.vercel.app)
- **Repository:** [https://github.com/vladickweb/pt-a-safe](https://github.com/vladickweb/pt-a-safe)

---
