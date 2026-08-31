# Technical stack decision

| Choice | Why | Alternative | Decision |
|---|---|---|---|
| React + TypeScript | typed interactive shell and content components; matches inspected Assembly work | semantic HTML/CSS or Astro | Use if the first slice needs state; retain static HTML accessibility path. |
| Vite | small static build and familiar local workflow | Next/Remix/Astro | Use Vite; no server framework for V1. |
| CSS tokens | small site, transparent cascade, low dependency cost | Tailwind | Start with CSS; add Tailwind only if repeated utility composition is demonstrated. |
| local TS/JSON content | reviewable, typed, no CMS cost | MDX/CMS | Use TS/JSON V1; revisit MDX after content repetition is real. |
| R3F/Three/Drei | convenient React boundary if 3D survives testing | CSS/SVG/DOM | Defer; fallback ships first and may remain final. |
| Motion library | not needed for basic transitions | CSS transitions | Use CSS first; add library only for a measured multi-state need. |
| backend/analytics | no V1 requirement | serverless endpoint, privacy analytics | None initially. Revisit only with a concrete contact/measurement requirement and retention plan. |

