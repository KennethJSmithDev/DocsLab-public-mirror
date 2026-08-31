export type SemanticObjectId =
  | "operator.root"
  | "portfolio.root"
  | "diagnostics.iige"
  | "logs.root"
  | "contact.root"
  | "experiments.root";

export type SemanticIntent =
  | "OPEN_OBJECT"
  | "REQUEST_INTERACTIVE_EXPERIENCE"
  | "OPEN_SETTINGS"
  | "OPEN_DIAGNOSTICS";

const routes: Record<SemanticObjectId, string> = {
  "operator.root": "/operator",
  "portfolio.root": "/portfolio",
  "diagnostics.iige": "/diagnostics",
  "logs.root": "/logs",
  "contact.root": "/contact",
  "experiments.root": "/experiments",
};

export function getRouteForObject(id: SemanticObjectId): string {
  return routes[id];
}

export function resolveObject(id: string): SemanticObjectId | null {
  return id in routes ? (id as SemanticObjectId) : null;
}

export function objectForRoute(pathname: string): SemanticObjectId | null {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return (Object.entries(routes).find(([, route]) => route === normalized)?.[0] as SemanticObjectId | undefined) ?? null;
}

export function openObject(id: SemanticObjectId): void {
  window.history.pushState({ objectId: id }, "", getRouteForObject(id));
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function emitIntent(type: SemanticIntent, payload?: Record<string, string>): void {
  window.dispatchEvent(new CustomEvent("docslab:intent", { detail: { type, payload } }));
}

export function dispatchObjectIntent(id: SemanticObjectId): void {
  emitIntent("OPEN_OBJECT", { id });
  openObject(id);
}
