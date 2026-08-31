# Site architecture

V1 is a static Vite site with typed content and route-level code splitting only where it improves measured performance.

```text
Home /
Work /work
  project case studies (data-driven routes)
Capabilities /capabilities (single overview; filter links, not five thin pages)
About /about
Resume /resume (download or readable page, only when current)
Contact /contact
Lab /lab (optional; only published R&D, otherwise omit from nav)
```

The initial brief's seven top-level destinations and five capability pages were simplified. Work is the primary proof surface; capability filters and cross-links preserve discoverability without page sprawl. A project can have a stable URL without being in primary navigation.

## Architecture boundaries

Content is local and versioned. The rendering layer does not infer truth states. Media is referenced by approved manifests. The 3D hero is an isolated, lazy-loaded enhancement with a DOM-equivalent story.

