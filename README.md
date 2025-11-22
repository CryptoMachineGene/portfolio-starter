# Eugene McGrath — Portfolio (React + Vite + Tailwind + Router)

![React](https://img.shields.io/badge/React-18.0-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?logo=react-router&logoColor=white&style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Backup-GitHub_Pages-181717?logo=github&logoColor=white&style=for-the-badge)


This repository is the source code for my personal developer portfolio, built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **React Router**.  
It serves as a clean, fast-loading hub to showcase my work, skills, and current blockchain development projects.

A short demo video walkthrough of the portfolio will be added soon.

---

## 🚀 Quickstart
```bash
npm install
npm run dev
```

📦 Build & Preview
```bash
npm run build
npm run preview
```

🌐 Deployment

This project is deployed in two environments:

1. Vercel (Primary Deployment)

Fastest global deployment with automatic previews and CI/CD:

Zero-config React/Vite support

Auto-deployment on push

Production + Preview URLs

2. GitHub Pages (Static Backup Deployment)

Configured using the /portfolio-starter/ base path in vite.config to maintain compatibility.
```
export default defineConfig({
  base: "/portfolio-starter/",
});
```

📄 Pages

/ — Home

/resume — Resume (primary landing page)

/projects — Projects overview

/proofmint — Showcase page for my capstone project

/about — Background and purpose

* — Custom 404 page

🧩 Tech Stack

React 18

Vite

TypeScript

Tailwind CSS

React Router

Vercel (primary deployment)

GitHub Pages (backup static deployment)

Additional tools used across my broader project ecosystem:

Solidity

Hardhat

Foundry

Rust

Solana / Anchor

Node.js

Ethers.js / Viem

🗂️ Project Structure

src/main.tsx — Application entry + router

src/App.tsx — Global layout wrapper

src/pages/ — Route views (Home, Resume, Projects, etc.)

src/components/ — Shared UI components

src/styles/ — Tailwind and custom global styles

🎞️ Demo Video (Coming Soon)

A short walkthrough video of the site will be added here soon, demonstrating:

Navigation

Responsiveness

Portfolio structure

Design decisions

Overview of my dev workflow

🛠️ Release Notes
v0.2.0 — Resume Landing + Dark Mode Polish (Oct 2025)

Highlights

Set Resume as default landing route

Unified dark-mode background across layout

Added full tech-stack icon grid with hover tooltips

Cleaned router + layout for GitHub Pages compatibility

General UI/UX refinements

Next

Add Resume to navbar and optional Home button

Footer spacing and grid alignment

Add short About intro + updated profile photo

📬 Contact

Name: Eugene McGrath
Email: emcgrath@startmail.com

Location: Duncan, SC (USA)
Update: minor improvements to IT support portfolio – 2025-11-21
