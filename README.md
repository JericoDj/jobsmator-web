# jobsmator-web

Next.js (App Router) web client for JobsMator. Architecture: `../ARCHITECTURE.md`.

```bash
cp .env.example .env.local     # API URL + Firebase web config
npm install
npm run dev                    # http://localhost:3000
```

- `lib/contracts.ts` is **generated** — edit `jobsmator-backend/src/contracts/index.ts` and run `bun run sync:web` there.
- Design tokens live in `app/globals.css` (from `docs/design-guide.html`) and are exposed to Tailwind as `bg-cobalt`, `text-match-deep`, etc.
- Auth: Firebase Web SDK; every API call sends the ID token (`lib/api.ts`). Uploads go straight to Firebase Storage (`lib/upload.ts`).
