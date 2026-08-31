# Public Repository Policy

This repository is a curated public mirror of selected Doc's Lab material. It is not the canonical development workspace.

## Boundaries

- The canonical local workspace contains broader experiments, private coordination, generated state, and material that has not passed publication review.
- This mirror contains only reviewed, repository-relative, reproducible material with a clear public purpose.
- Azure staging is independently operational. This repository does not own Azure resources, credentials, DNS, custom domains, or deployment configuration.

## Publication rules

Include authored source, architecture, evidence, and devlog material when its claims are supportable and its paths, identifiers, secrets, and private context have been removed. Label prototype, inferred, unknown, and deferred states plainly. Do not publish client, household, medical, financial, machine, account, or user data.

Provenance and redistribution rights must be clear before publishing media, packages, or third-party content. Vendor, Fab, Marketplace, and other third-party material remains outside this mirror unless rights are explicitly verified. Diagnostic Fox media/source is pending provenance review and is not included.

## Unreal boundary

Unreal project files, `.uasset` files, `.umap` files, generated state, and vendor dependency trees are excluded. Unreal work may be described through carefully reviewed summaries or evidence in a later milestone; raw content is not implied to be redistributable. Assembly remains a future composition boundary and does not replace the direct semantic site.

## Evidence and devlog

Evidence records retain useful observations, test scope, limitations, and dates while removing local paths, account identifiers, authentication details, and worker transcripts. The devlog records public milestones, not internal coordination. Claims about shipping, customers, employment, metrics, performance, licensing, production readiness, or compliance require direct evidence or explicit qualification.

## Security and large files

No secrets, tokens, connection strings, credentials, account identifiers, or private machine state belong here. Generated dependencies and build output are ignored. Large binaries require a specific public reason, provenance, and review; Git LFS is not part of this baseline. The baseline should contain no unexplained files over 10 MB.

## History and maintenance

The mirror has its own Git history and must remain useful if GitHub or Azure disappears. Updates should be curated at meaningful public milestones, with a fresh secret/privacy, provenance, path, claim, and build review. Licensing is intentionally unresolved and deferred; no license file or license grant is made by this baseline.
