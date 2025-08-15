# 🚀 npm-template-odin

A modern and reusable project template for [The Odin Project](https://www.theodinproject.com/) assignments and personal JavaScript experiments. This template includes Webpack bundling, ESLint linting, Prettier formatting, and Jest testing—all configured and ready to roll.

---

## 📦 Features

- ⚙️ Webpack: Modular build setup with separate dev and prod configs.
- 🧪 Jest: Testing suite with watch mode enabled.
- 🎨 Prettier: Enforces consistent code style.
- 🧹 ESLint: Lints both JavaScript and CSS with recommended rules.
- 📁 Organized structure: Clean `src/`, `dist/`, and test directories.
- 🔍 GitHub integration with bugs, homepage, and repository metadata.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Lemuller04/npm-template-odin.git
cd npm-template-odin
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open http://localhost:8080 to view your app.

---

## Available Scripts

| Script          | Description                                 |
|-----------------|---------------------------------------------|
| `npm run dev`   | Launches dev server with live reloading     |
| `npm run build` | Creates production bundle in `dist/`        |
| `npm run test`  | Runs Jest in watch mode for all tests       |
| `npm run lint`  | Lints source files using ESLint             |
| `npm run prettier` | Checks code format in `src/` using Prettier  |

---

## 📁 Project Structure
```bash
├── dist/               # Webpack output
│   └── index.html
│   └── main.js
├── src/                # Application source code
│   └── index.js
│   └── styles.css
│   └── template.html
├── test/               # Tests
│   └── jest-works.test.js
├── package.json
├── webpack.*.mjs       # Webpack configs
├── eslint.config.mjs
├── prettier.config.mjs
└── README.md
```
