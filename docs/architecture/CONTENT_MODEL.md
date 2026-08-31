# Content model

Use TypeScript types for schema validation and colocated JSON/TS records for V1. Do not introduce MDX or a CMS until repeated long-form editing proves necessary. This keeps content reviewable in Git and avoids runtime parsing/dependency cost.

```ts
type TruthState = 'CURRENTLY_WORKING'|'PROVEN_TECHNICALLY'|'HUMAN_VALIDATED'|'PROTOTYPE_LIMITATION'|'TARGET_WORKLOAD'|'VISION'|'DEFERRED'|'UNKNOWN';
type VisualRepresentation = 'B0'|'S0'|'R0'|'semantic'|'web'|'native'|'streamed';
type Project = { slug:string; title:string; shortDescription:string; category:string[]; status:string; truthState:TruthState; role?:string; projectType:string; technologies:string[]; problem?:string; constraints?:string[]; implementation?:string; evidence:Evidence[]; validation?:string[]; limitations:string[]; media:Media[]; repoUrl?:string; demoUrl?:string; publication:'PUBLIC'|'REVIEW_REQUIRED'|'PRIVATE'|'OMIT'; provenance:string[]; relatedCapabilities:string[]; dates?:string; featured:boolean; moduleId?:string; representations?:VisualRepresentation[]; themeFamilies?:string[]; themeOverlays?:string[]; performanceProfile?:string };
type Evidence = { label:string; state:TruthState; summary:string; source:string; reviewer?:string; date?:string };
type Media = { src:string; kind:'image'|'video'|'diagram'; alt:string; caption:string; provenance:string; license:string; approved:boolean };
```

Do not render `PRIVATE`, unapproved, or unsupported records. Unknown is valid data and should display as unknown when material to a claim.

For Doc's Lab modules, asset-level provenance, adoption, normalization, representation, and performance metadata follows the canonical [Doc's Lab Asset Contract](DOCSLAB_ASSET_CONTRACT.md). A vendor package is not a production representation merely because it is licensed or visually close.

Theme family, theme overlay, visual representation, performance profile, delivery, device policy, and user intent are independent fields. PCG Themes may select approved presentation pools but do not own module logic, interaction semantics, evidence, or publication state; see [PCG Theme Architecture](PCG_THEME_ARCHITECTURE.md).
