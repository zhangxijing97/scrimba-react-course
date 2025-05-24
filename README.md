# scrimba-react-course

## 📚 JavaScript Libraries & Frameworks Comparison

| Tool        | Year  | Type       | Description                                                   |
|-------------|-------|------------|---------------------------------------------------------------|
| **jQuery**      | 2006  | Library     | DOM manipulation, simple API. Outdated by modern standards.      |
| **AngularJS**   | 2010  | Framework   | Google's first frontend framework. Replaced by Angular (2+).    |
| **Ember.js**    | 2010  | Framework   | Convention-over-configuration. Full-featured, opinionated.      |
| **Backbone.js** | 2010  | Framework   | Lightweight MVC. Popular before React/Vue.                      |
| **React**       | 2013  | Library     | Component-based UI library. Extremely popular and flexible.     |
| **Angular**     | 2013  | Framework   | Full-featured, TypeScript-based. Steep learning curve.          |
| **Vue.js**      | 2013  | Framework   | Progressive, easy to learn, combines React & Angular features.  |
| **Svelte**      | 2016  | Compiler    | No virtual DOM. Compiles components into fast vanilla JS.       |
| **Next.js**     | 2016  | Framework   | React-based SSR/SSG framework. Ideal for SEO and performance.   |
| **Remix**       | 2020+ | Framework   | React framework focused on performance & data handling.         |
| **Solid**       | 2020+ | Library     | React-like syntax with better performance and reactivity.       |
| **Astro**       | 2020+ | Framework   | Ships 0 JS by default. Supports multiple frameworks.            |
| **Qwik**        | 2020+ | Framework   | Ultra-fast. Uses resumable JavaScript to load instantly.        |

## 📦 What is Node.js?

**Node.js** lets you run JavaScript on your computer, not just in the browser.  
It helps you build websites, run tools, and create servers using JavaScript.

## 📚 What is npm?

**npm** stands for **Node Package Manager**.  
It helps you **install and manage tools or libraries** (like React) in your project.

## 📁 What is `node_modules/`?

This folder contains all the code packages downloaded using `npm install`.  
You don’t need to push it to GitHub — just keep `package.json` and `package-lock.json`.

## 🛠️ What is `package.json` vs `package-lock.json`?

- `package.json`: Lists the packages you want in your project.
- `package-lock.json`: Freezes the exact version installed to avoid bugs due to updates.

## ⚙️ What is `vite.config.js`?

This is the config file for Vite. It tells Vite how to build and serve your app.  
`base: '/repo/project/'` is important when hosting subfolder projects on GitHub Pages.

## 🧠 React Key Concepts (from your learning)

- **Props**: Pass info from parent to child component. Like attributes.
- **State**: Data that changes over time, stored inside a component.
- **useState**: Hook that lets a component have state.
- **.map()**: Used to render lists dynamically in JSX.
- **Event Handling**: You use functions like `onClick={handleClick}` to update state.
- **Conditional Rendering**: `isShown && <p>text</p>` or `isShown ? <p>text</p> : null`.

## Deploying React Project to GitHub Pages (Inside Monorepo)

This guide helps you deploy a React project located inside a subfolder of your GitHub repository.

### 🔧 Step 1: Edit `vite.config.js`

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/scrimba-react-course/repo-name/',  // 👈 important for GitHub Pages
  plugins: [react()]
})
```

### 📦 Step 2: Edit `package.json`

Add the following inside your `react-facts/package.json`:

```json
{
  "homepage": "https://zhangxijing97.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 📥 Step 3: Install `gh-pages`

```bash
cd repo-name
npm install --save-dev gh-pages
```

### 🚀 Step 4: Deploy the Project

```bash
npm run deploy
```

This will:
- Build the project into `dist/`
- Push `dist/` to the `gh-pages` branch
- GitHub will serve from this branch

## ✅ Final URL

Your project will be live at:

```
https://zhangxijing97.github.io/repo-name/
```

## 🚀 How to Set Up This Project with Vite

To create a new React project using Vite:

```bash
npm create vite@latest
```

Follow the prompts:
- Project name: first-react
- Select a framework: React
- Select a variant: JavaScript

Next Steps:

```bash
cd first-react
npm install
npm run dev
```

Your React app will now be running locally at http://localhost:5173