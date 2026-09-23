# Doc's Lab public site

This directory contains the Vite + TypeScript source for the sanitized public site.

## Local checks

```bash
npm ci
npm run typecheck
npm run build
```

The rendered interface is limited to public professional content: home, selected work, case-study summaries, about, and contact. Internal development logs, diagnostic shells, unpublished experiments, credentials, and machine-local state are not rendered.

Azure Static Web Apps is the hosting target. Deployment credentials remain outside the repository.
