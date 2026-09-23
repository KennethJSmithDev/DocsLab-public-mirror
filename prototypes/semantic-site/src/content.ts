export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: string;
  focus: string[];
};

export const projects: Project[] = [
  {
    slug: "assembly",
    title: "Assembly",
    summary:
      "An intent-first Unreal Engine 5.8 composition system that maps bounded creator intent to validated, inspectable Unreal capabilities.",
    status: "Current reproduced proof",
    focus: ["Unreal Engine", "Editor tooling", "Semantic composition"],
  },
  {
    slug: "atlas-cortex",
    title: "Atlas Cortex",
    summary:
      "A local-first orchestration prototype where model proposals are constrained by deterministic verification, provenance, and authority boundaries.",
    status: "Prototype",
    focus: ["AI workflows", "Verification", "Local-first systems"],
  },
  {
    slug: "iige",
    title: "IIGE / Iggy",
    summary:
      "A capability and benchmarking prototype that keeps detected, predicted, measured, and unknown hardware facts separate.",
    status: "Functional for supported scope",
    focus: ["Hardware capability", "Benchmarking", "Evidence"],
  },
  {
    slug: "slime-survivor",
    title: "Slime Survivor",
    summary:
      "A browser-playable vertical slice focused on tutorial clarity, responsive controls, combat timing, and readable progression.",
    status: "Playable browser prototype",
    focus: ["Game prototyping", "Web", "Interaction design"],
  },
  {
    slug: "household-budget",
    title: "Two Homes Lab / Household Budget",
    summary:
      "A local-first budgeting application designed around offline/private-network use, recoverable history, and bounded synchronization.",
    status: "Private / anonymized case study",
    focus: ["Local-first software", "Data design", "Resilience"],
  },
  {
    slug: "docslab",
    title: "Doc's Lab",
    summary:
      "A documentation-first showcase and development environment for explaining, testing, and presenting technical systems.",
    status: "Public showcase",
    focus: ["Documentation", "Web", "Technical communication"],
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
