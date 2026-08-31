import "./style.css";
import { featuredCaseFile } from "./content";
import {
  dispatchObjectIntent,
  emitIntent,
  getRouteForObject,
  objectForRoute,
  openObject,
  resolveObject,
  type SemanticObjectId,
} from "./router";

const appElement = document.querySelector<HTMLDivElement>("#app");
if (!appElement) throw new Error("App root is missing");
const app: HTMLDivElement = appElement;

const navItems: Array<[SemanticObjectId, string]> = [
  ["operator.root", "Operator"],
  ["portfolio.root", "Portfolio"],
  ["diagnostics.iige", "Diagnostics"],
  ["logs.root", "Logs"],
  ["contact.root", "Contact"],
];

function escapeHtml(value: string): string {
  return value.replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character] ?? character);
}

function semanticLink(id: SemanticObjectId, label: string, className = "") {
  return `<a class="${className}" href="${getRouteForObject(id)}" data-object-id="${id}">${label}</a>`;
}

function layout(content: string, current: SemanticObjectId | null): string {
  const nav = navItems.map(([id, label]) => `<a href="${getRouteForObject(id)}" data-object-id="${id}" class="nav-link${current === id ? " is-current" : ""}"${current === id ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  return `<a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header"><div class="header-inner">
      <a class="wordmark" href="/" aria-label="Doc's Lab home"><span class="wordmark-mark">DL</span><span>Doc's Lab</span></a>
      <nav aria-label="Primary navigation"><div class="nav-list">${nav}</div></nav>
    </div></header>
    <main id="main-content" tabindex="-1">${content}</main>
    <footer class="site-footer"><div><span class="eyebrow">SEMANTIC / DIRECT</span><p>Doc's Lab is an accessible destination layer. Interactive presentation remains optional.</p></div><div class="footer-meta"><span>Prototype status</span><span class="status-chip status-amber">REVIEW_REQUIRED</span></div></footer>`;
}

function shell(title: string, kicker: string, intro: string, body: string, current: SemanticObjectId): string {
  return `<section class="page-heading"><span class="eyebrow">${kicker}</span><h1>${title}</h1><p class="lede">${intro}</p></section>${body}<div class="assistant-slot" data-assistant-id="mascot.diagnostic-fox" aria-label="Diagnostic Fox integration slot"><span class="fox-dot" aria-hidden="true">✦</span><div><strong>Diagnostic Fox hook reserved</strong><p>The mascot can supplement status in a future build. Text remains the source of meaning here.</p></div></div>`;
}

function home(): string {
  return `<section class="hero-grid">
    <div class="hero-copy"><span class="eyebrow">DOC'S LAB / ACCESSIBLE DIRECT SITE</span><h1>Evidence-led work, with a clear path in.</h1><p class="lede">A semantic front door for Kenneth J. Smith's professional work and future interactive experiments.</p><div class="action-row">${semanticLink("operator.root", "Open the professional path", "button button-primary") }<button class="button button-secondary" type="button" data-interactive>Request interactive experience</button></div><p class="microcopy" id="interactive-status" aria-live="polite">Interactive Lab is optional and not connected in this prototype.</p></div>
    <aside class="hero-panel" aria-label="Prototype boundary"><span class="panel-index">01 / ENTRY</span><h2>One meaning. Multiple surfaces.</h2><p>Navigation, a future binder, Diagnostic Fox, and Three.js can all resolve the same semantic object IDs.</p><dl class="axis-list"><div><dt>Canonical path</dt><dd>Semantic HTML</dd></div><div><dt>Optional layer</dt><dd>Interactive Lab</dd></div><div><dt>Current state</dt><dd><span class="status-chip status-amber">Prototype</span></dd></div></dl></aside>
  </section><section class="section-block"><div class="section-label"><span>DESTINATIONS</span><span>STABLE OBJECT IDS</span></div><div class="destination-grid">${navItems.map(([id, label]) => `<a class="destination-card" href="${getRouteForObject(id)}" data-object-id="${id}"><span class="card-id">${id}</span><h2>${label}</h2><span class="card-arrow" aria-hidden="true">↗</span></a>`).join("")}</div></section>`;
}

function operator(): string {
  return shell("Operator", "OPERATOR.ROOT", "A concise professional path, designed to stay understandable without an interactive layer.", `<section class="two-column"><article class="surface"><span class="eyebrow">CURRENT FOCUS</span><h2>Building useful systems at the boundary of proof and possibility.</h2><p>This prototype keeps the public surface intentionally modest while the underlying project evidence and publication decisions remain review-required.</p><div class="callout"><span class="status-chip status-amber">PROTOTYPE_LIMITATION</span><p>No full biography, client list, outcome claim, or live Lab capability is asserted here.</p></div></article><aside class="surface"><span class="eyebrow">NEXT READ</span><h2>Choose a direct destination.</h2><div class="stacked-links">${semanticLink("portfolio.root", "Review the case file →")} ${semanticLink("contact.root", "Contact path →")}</div></aside></section>`, "operator.root");
}

function portfolio(): string {
  const item = featuredCaseFile;
  return shell("Portfolio", "PORTFOLIO.ROOT", "One small case-file surface, kept honest while evidence and publication status are still being qualified.", `<article class="case-file"><div class="case-file-top"><span class="eyebrow">${item.id}</span><span class="status-chip status-amber">${item.status}</span></div><h2>${item.title}</h2><p class="case-summary">${item.summary}</p><dl class="case-details"><div><dt>Truth state</dt><dd>${item.truthState}</dd></div><div><dt>Evidence</dt><dd>${item.evidence}</dd></div><div><dt>Open action</dt><dd>${semanticLink(item.objectId, "Portfolio root")}</dd></div></dl></article>`, "portfolio.root");
}

function diagnostics(): string {
  return shell("Diagnostics", "DIAGNOSTICS.IIGE", "A stable destination for future capability-aware experiences, without pretending that a scan is running.", `<section class="two-column"><article class="surface diagnostic-surface"><div class="case-file-top"><span class="eyebrow">IIGE INTEGRATION SHELL</span><span class="status-chip status-blue">DEFERRED</span></div><h2>Interactive diagnostics are not connected.</h2><p>No device result, browser fingerprint, renderer claim, or capability scan is performed by this build.</p><button class="button button-secondary" type="button" data-interactive>Request interactive experience</button><p class="microcopy" id="diagnostic-intent" aria-live="polite">The request will remain a bounded intent.</p></article><aside class="surface"><span class="eyebrow">BOUNDARY</span><h2>What this route guarantees</h2><ul class="plain-list"><li>Direct linkable destination</li><li>Accessible text and status</li><li>Future bridge point for IIGE</li><li>No runtime or Unreal dependency</li></ul></aside></section>`, "diagnostics.iige");
}

function logs(): string {
  return shell("Logs", "LOGS.ROOT", "A quiet record surface for evidence states, not a fictional activity feed.", `<article class="log-entry"><div class="log-time">2026-08-30 / prototype</div><div><span class="status-chip status-amber">REVIEW_REQUIRED</span><h2>Semantic site boundary declared</h2><p>Direct routes, shared object resolution, accessible fallback, and future bridge hooks are represented in this isolated prototype. Validation remains a separate step.</p></div></article>`, "logs.root");
}

function contact(): string {
  return shell("Contact", "CONTACT.ROOT", "A normal, accessible contact destination—kept unconnected until an authoritative channel is selected.", `<section class="surface contact-panel"><span class="eyebrow">CONTACT DELIVERY</span><h2>This route is ready for a verified channel.</h2><p>No email address, social handle, or submission backend is invented by the prototype. Add an approved destination when the content lock establishes one.</p><span class="status-chip status-amber">UNKNOWN / NOT CONNECTED</span></section>`, "contact.root");
}

function render(): void {
  const current = objectForRoute(window.location.pathname);
  const content = window.location.pathname === "/" ? home() : current === "operator.root" ? operator() : current === "portfolio.root" ? portfolio() : current === "diagnostics.iige" ? diagnostics() : current === "logs.root" ? logs() : current === "contact.root" ? contact() : `<section class="page-heading"><span class="eyebrow">NOT FOUND</span><h1>That destination is not in this prototype.</h1>${semanticLink("operator.root", "Return to Operator", "button button-primary")}</section>`;
  app.innerHTML = layout(content, current);
  document.title = current ? `${current} — Doc's Lab` : "Doc's Lab — semantic site prototype";
  wireInteractions();
}

function wireInteractions(): void {
  app.querySelectorAll<HTMLElement>("[data-object-id]").forEach((element) => element.addEventListener("click", (event) => { event.preventDefault(); const id = resolveObject(element.dataset.objectId ?? ""); if (id) dispatchObjectIntent(id); }));
  app.querySelectorAll<HTMLButtonElement>("[data-interactive]").forEach((button) => button.addEventListener("click", () => { emitIntent("REQUEST_INTERACTIVE_EXPERIENCE"); const status = app.querySelector<HTMLElement>("#interactive-status, #diagnostic-intent"); if (status) status.textContent = "REQUEST_INTERACTIVE_EXPERIENCE recorded. Interactive Lab is not connected in this build."; }));
}

window.addEventListener("popstate", render);
window.addEventListener("docslab:intent", (event) => { const customEvent = event as CustomEvent<{ type: string; payload?: Record<string, string> }>; document.documentElement.dataset.lastIntent = customEvent.detail.type; });

declare global { interface Window { docslab?: { openObject: typeof openObject; resolveObject: typeof resolveObject; getRouteForObject: typeof getRouteForObject; }; } }
window.docslab = { openObject, resolveObject, getRouteForObject };
render();
