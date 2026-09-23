# Doc's Lab public site

This repository is the curated public publication surface for Kenneth J. Smith's Doc's Lab site and selected supporting documentation.

## Public site source

The deployable site source lives in [`prototypes/semantic-site`](prototypes/semantic-site/).

The public interface is intentionally limited to professional content:

- Home
- Selected work
- Project case-study summaries
- About
- Contact

Internal coordination notes, development logs, diagnostic shells, semantic object identifiers, unpublished experiments, credentials, account metadata, and machine-local state are not part of the rendered public interface.

## Publication boundary

This repository remains a sanitized public mirror, not the private canonical development workspace. See [`docs/PUBLIC_REPOSITORY_POLICY.md`](docs/PUBLIC_REPOSITORY_POLICY.md).

## Deployment

Azure Static Web Apps is the current hosting target. Deployment credentials and Azure account details are intentionally not stored in this repository.

A repository workflow validates the static site build and checks the generated public artifact for known internal-only markers before changes are accepted.
