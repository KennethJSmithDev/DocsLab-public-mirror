# Doc's Lab semantic site prototype

**Status:** `PROTOTYPE / REVIEW_REQUIRED`  
**Scope:** isolated implementation authorized by the website-building brief; production implementation gate remains separate.

## Purpose

This prototype proves the smallest coherent semantic/direct site surface for Doc's Lab. It provides stable, linkable destinations that remain useful without WebGL, animation, color, JavaScript-heavy interaction, or a live Lab runtime.

The implementation lives at [`prototypes/semantic-site`](../../prototypes/semantic-site/). It is not connected to Unreal, Three.js, IIGE, Atlas, an LLM, a CMS, analytics, authentication, a contact backend, or a production deployment.

## Stack and boundary

- Vite + TypeScript + semantic DOM + CSS custom-property tokens.
- No React, Redux, UI framework, CMS, backend, auth, or broad dependency set.
- The shared `public/assets/mascots/diagnostic-fox/` package is not copied or reimplemented. The site exposes a textual integration slot labeled `mascot.diagnostic-fox`.
- A future Lab bridge is represented by `docslab:intent` events and a small `window.docslab` resolver surface. No interactive runtime is started.

## Semantic destinations

| Object ID | Route | Current purpose |
|---|---|---|
| `operator.root` | `/operator` | Concise professional path |
| `portfolio.root` | `/portfolio` | One review-required case file |
| `diagnostics.iige` | `/diagnostics` | Future IIGE shell, no scan |
| `logs.root` | `/logs` | Evidence-state log surface |
| `contact.root` | `/contact` | Unconnected contact destination |
| `experiments.root` | deferred | Reserved, not rendered in this slice |

`src/router.ts` owns `openObject`, `resolveObject`, `getRouteForObject`, and `dispatchObjectIntent`. Navigation and a future binder/mascot/Three.js surface are expected to use that same boundary.

## Visual and accessibility contract

The visual language uses deep navy/charcoal surfaces, cyan system accents, blue actions, restrained orange review states, and restrained magenta experiment cues. Layout uses semantic landmarks, a skip link, visible focus, native links/buttons, responsive grids, readable text, and a reduced-motion media query. The interactive request is announced in a live region and never pretends that a capability scan occurred.

This is a prototype accessibility pass, not a complete WCAG conformance claim. Contrast, keyboard, screen-reader, zoom, reduced-motion, and assistive-technology review should be expanded at the production gate.
