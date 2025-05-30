# 🧪 Feature Flags Dashboard

A fast, modern feature flag dashboard built with React, Zustand, and Vite. Designed to showcase senior frontend practices with mocked APIs, vertical architecture, and polished UI.

![screenshot](./screenshot.png)

## 🚀 Live Demo

[https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

## 🧰 Tech Stack

- **React + Vite** — lightning-fast dev setup
- **Zustand** — local state (e.g., theme toggle)
- **TanStack React Query** — async data and optimistic updates
- **Tailwind CSS v4** — modern utility-first styling
- **ShadCN UI + Radix** — styled, accessible UI components
- **Mock Service Worker (MSW v2)** — realistic in-browser API simulation
- **LocalStorage** — theme persistence across sessions

---

## 📦 Features

- 💡 **Toggle feature flags** with instant feedback
- 🎨 **Dark mode switcher** with persisted theme state
- 🧱 **Vertical slice architecture** for scalable components
- ⚡ **Optimistic updates** via React Query
- 🧪 **In-memory API state** with full MSW mocking

---

## 🗂️ Project Structure

```txt
src/
├── app/               # App entry + providers
│   └── AppBootstrapper.tsx
├── features/
│   ├── flags/         # FlagList, toggle logic, API
│   └── theme/         # Theme store + UI toggle
├── components/        # UI (ShadCN)
├── mocks/             # MSW handlers + worker
└── lib/               # Utility (e.g., cn)
```

git clone https://github.com/hinoga/flags-dashboard.git
cd flags-dashboard
npm install
npm run dev
