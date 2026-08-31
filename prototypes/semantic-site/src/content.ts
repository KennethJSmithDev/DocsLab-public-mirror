import type { SemanticObjectId } from "./router";

export type TruthState = "PROTOTYPE_LIMITATION" | "DEFERRED" | "REVIEW_REQUIRED";

export type CaseFile = {
  id: string;
  title: string;
  summary: string;
  status: string;
  truthState: TruthState;
  evidence: string;
  objectId: SemanticObjectId;
};

export const featuredCaseFile: CaseFile = {
  id: "project.semantic-site-prototype",
  title: "Doc's Lab semantic site prototype",
  summary: "A small direct site surface testing shared semantic destinations, accessible fallback, and future Lab boundaries.",
  status: "Prototype / review required",
  truthState: "REVIEW_REQUIRED",
  evidence: "The local prototype implementation is the current evidence surface; independent public publication is not established.",
  objectId: "portfolio.root",
};
