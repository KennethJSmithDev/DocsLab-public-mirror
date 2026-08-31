# Doc's Lab semantic site prototype

This is an isolated, documentation-authorized prototype. It is not the production site and does not connect to Unreal, Three.js, IIGE, Atlas, a CMS, analytics, or a contact backend.

Run `npm install`, then `npm run dev`. `npm run typecheck` and `npm run build` are the available checks.

The prototype keeps semantic object resolution in `src/router.ts`; future interactive surfaces should call the same `openObject`/intent boundary rather than creating parallel destinations.
