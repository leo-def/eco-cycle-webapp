# EcoCycle Webapp - Technical Specification

> Standalone React + TypeScript frontend for the EcoCycle platform.
> Served via Express static file server with Heroku deployment support.

## Executive Summary

EcoCycle Webapp is a **React + TypeScript** SPA (Create React App) for the EcoCycle recycling platform. It is served in production via a lightweight **Express static file server** (`server.js`). The app supports i18n via a `locales/` directory. Deployable to Heroku via Procfile or Docker.

---

## 1. Problem Statement

### Context
Frontend for the EcoCycle platform — provides the user interface for eco-cycle/recycling operations.

### Goals
- React SPA with TypeScript type safety
- i18n support via locales
- Express static server for Heroku/Docker deployment
- Separate from the monorepo for independent deployment

---

## 2. Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | React | 17+ |
| Language | TypeScript | 4.x |
| Bundler | Create React App | Latest |
| Server | Express (static files) | 4.x |
| i18n | Custom locales | - |
| Testing | React Testing Library | Latest |
| Deployment | Heroku + Docker | - |

---

## 3. Architecture

```
eco-cycle-webapp/
├── server.js          # Express static server (serves build/)
├── src/
│   ├── index.tsx      # React entry point
│   ├── app/           # App root component and routing
│   ├── config/        # App configuration
│   ├── locales/       # i18n strings
│   └── index.css      # Global styles
├── public/            # Static assets
├── Procfile           # Heroku: web: node server.js
└── Dockerfile
```

---

## 4. Production Serving

```javascript
// server.js
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || 8080);
```

---

## 5. Deployment & Operations

```bash
# Build React app
npm run build

# Serve (production)
node server.js

# Development
npm start     # CRA dev server (port 3000)
npm test      # React Testing Library
```

**Heroku:** `web: node server.js`  
**Docker:** `Dockerfile` present

---

## 6. Issues Found

### Critical
- **`server.js` only handles `GET /`** — all other routes return a 404 from Express (the static middleware won't catch client-side routes like `/dashboard`). For a React SPA with client-side routing, the catch-all should be:
  ```javascript
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));
  ```
  Without this, direct URL navigation to any non-root route fails in production.

### Missing
- No API proxy configuration for production (CORS or nginx proxy needed to reach eco-cycle backend).
- Build artifact (`build/`) should not be committed to git — verify `.gitignore`.
- No environment variable management for API base URL in production.
