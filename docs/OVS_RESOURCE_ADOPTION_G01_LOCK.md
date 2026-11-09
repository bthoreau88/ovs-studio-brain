# OVS RESOURCE ADOPTION — G01 FOUNDER DISPOSITION & REGISTRY

**Decision ID:** OVS-RESOURCES-G01
**Disposition:** APPROVED + LOCKED — shortlist, prioritization, intake policy, and evaluation gates ONLY
**Decision date:** 2026-11-09
**Authority:** OVS founder direction recorded in conversation
**Status of implementation:** REGISTERED FOR EVALUATION; NOT INSTALLED, INTEGRATED, PURCHASED, RELEASED, OR MERGED
**Scope:** OVS-wide agent-skill governance and design-resource discovery, with project-specific adoption controlled by separate gates.

## Scope of the lock

The founder has approved a controlled *evaluation plan* covering five agent-skills repositories and 19 design-resource entries. The priority assignments below are frozen for G01 intake unless the founder revises them. The decision is **not** authorization to execute unreviewed skill instructions, load arbitrary scripts, purchase assets, create paid generation, change character canon, modify production code, merge to `main`, or deploy.

The registry is a reference catalog and gate plan. Naming a service or repository does not certify its safety, trustworthiness, present availability, legal rights, or compatibility. Pin upstream commits; verify licenses and supply-chain dependencies before any use.

### Authority precedence

1. Founder disposition and explicit project approval
2. Project-specific locked canon, source/reference authority, brand identity, and branch policy
3. Existing application architecture and repository governance
4. G01 security, licensing, accessibility, and performance acceptance criteria
5. External skills, templates, component libraries, prompt suggestions, and community examples

**Studio Brain exception that is not optional:** `docs/OVS_VISUAL_IDENTITY_LOCK.md` and `docs/BRAND_UI_RULES.md` govern its UI. The locked editorial black/ivory/emerald identity forbids gold, glow, glass, gradients, rounded SaaS cards, and substitute logos. GRLFND is a distinct project with different visual direction. Never cross-apply GRLFND design aesthetics to Studio Brain.

**Character and film pipeline:** Skills can recommend or audit, but cannot promote a generated face, source reconstruction, screenplay element, performance, or cut to canon; cannot bypass human review; and cannot spend paid credits without separate authorization.

## A. Agent skill candidates — FIVE tracked sources

| Priority | Source | G01 disposition | Intended function |
| --- | --- | --- | --- |
| P0 | [Cloudflare security-audit-skill](https://github.com/cloudflare/security-audit-skill) | Pilot, sandbox-only | Controlled security reconnaissance, validation, and reporting |
| P0 | [Google elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) | Pilot, review-only | Independent design/specification and implementation-drift critique |
| P1 | [Addy Osmani agent-skills](https://github.com/addyosmani/agent-skills) | Selective intake | Constraint-driven development, TDD, UI engineering, browser tests, code quality |
| P1 | [Matt Pocock skills](https://github.com/mattpocock/skills) | Selective complementary intake | Domain modeling, debugging, architecture and cross-agent handoff |
| P2 | [Kepano obsidian-skills](https://github.com/kepano/obsidian-skills) | Conditional only | Optional structured knowledge management if an OVS vault is approved |

**Overlap rule:** Select one primary implementation/test/review routine for each responsibility. Do not install two equivalent skills simply because both repositories offer them. No automatic continuous updates.

## B. Design resources — ALL 19 source entries tracked

The number in the first column is the exact screenshot-list position; some are alternate views of the same platform. **Seven prioritized resources** are explicitly approved for controlled evaluation. Others are registered as catalog-only, deferred, or conditional.

| # | Resource | Priority / disposition | Intended OVS use |
| --- | --- | --- | --- |
| 1 | [modulify.ai](https://modulify.ai) | P2 / sandbox-only | Rapid landing-page prototype, if needed |
| 2 | [landdding.com](https://landdding.com) | **P1 / evaluate** | Landing-page composition and conversion references |
| 3 | [modulify.ai/templates](https://modulify.ai/templates) | P2 / same provider as #1 | Templates; not a distinct integration |
| 4 | [motionin.design](https://motionin.design) | **P0 / evaluate** | Website interaction specification and motion references |
| 5 | [iconly.design](https://iconly.design) | P2 / reference-only | Icon research; license verification required |
| 6 | [fontinlogo.com](https://fontinlogo.com) | P2 / reference-only | Brand typography research; fonts licensed separately |
| 7 | [on.design](https://on.design) | P2 / reference-only | Community inspiration |
| 8 | [godly.website](https://godly.website) | P2 / catalog-only | Website inspiration; check relationship/redirect to #11 |
| 9 | [60fps.design](https://60fps.design) | **P1 / evaluate** | Interaction timing, easing, mobile gesture references |
| 10 | [footer.design](https://footer.design) | P2 / reference-only | Footer interaction and layout references |
| 11 | [recent.design](https://recent.design) | **P1 / evaluate** | Curated visual and interaction direction |
| 12 | [backgrounds.supply](https://backgrounds.supply) | P2 / reference-only | Background/textural material, rights reviewed |
| 13 | [posts.design](https://posts.design) | P2 / reference-only | Social/editorial layout inspiration |
| 14 | [beui.dev](https://beui.dev) | **P0 / evaluate** | Narrowly selected animated UI components |
| 15 | [wonderlist.design](https://wonderlist.design) | P2 / defer purchase | Paid design references; no spend approved |
| 16 | [mobbin.com](https://mobbin.com) | **P0 / evaluate** | Real-app flow references for onboarding, navigation and discovery |
| 17 | [sent.dm](https://sent.dm) | P2 / defer | Messaging/SMS infrastructure; privacy/consent review before consideration |
| 18 | [logotouse.com](https://logotouse.com) | P2 / reference-only | Logo/mockup examples; never replace locked OVS identity |
| 19 | [paperanimation.ai](https://paperanimation.ai) | **P1 / evaluate** | Optional editorial motion teasers for newspaper-inspired projects |

**Deduplication:** There are 19 screenshot entries, not 19 distinct integration obligations; #1 and #3 belong to one provider. #8 and #11 may be related, and that relationship must be verified during intake. No implicit license to reuse example designs or trademark assets.

## C. Project-specific application boundaries

- **GRLFND / marketing threshold and app:** The first candidate proof is one isolated invitation opening → companion-selection → profile transition using dummy/fictional data and existing application architecture. Only selected motion/component references may be implemented after security/licensing review. Preserve premium private-club identity, usability, and reduced-motion fallback. Do not rebuild the backend.
- **OVS Studio Brain:** Use the resources as references only until they pass the existing UI brand locks. No generic dashboard theme, glass effect, gradients, unauthorized asset replacements, or runtime dependency injection. Current `main` publishes the site, so prototype off the release branch.
- **LIKENESS : SECOND HAND / other film work:** Design resources cannot supersede source-image authority, character likeness locks, camera and lighting continuity, dialogue governance, or human approval checkpoints.
- **OVS Morning Edition:** `paperanimation.ai` may be tested only for a separate motion derivative. The two-page newspaper PDF and locked visual DNA are not altered by this authorization.
- **OVS game projects:** Use engineering and security skills on isolated code/design reviews, without changing canonical film identity or shipping gameplay outside approved gates.

## D. Protection and provenance rules

For every actual use, record source URL, fetched date, exact upstream commit/tag/version, checksum where appropriate, license + attribution requirements, maintained status, transitive dependencies, requested permissions, external network/telemetry behavior, cost, source materials reproduced, and human reviewer disposition.

No shell/curl installer, package, generated migration, model instruction, remote script, exfiltrating telemetry, security probe against third parties, SMS activation, or API integration is authorized by this G01 record.

Security findings must distinguish confirmed evidence from hypotheses and unsupported checks. Tests must run in authorized disposable environments with no production secrets. Model-generated code and copied designs require manual inspection for licensing, privacy, accessibility, and fidelity to project identity.

## E. Disposition and next action

- **LOCKED:** Repository/source list; seven design priority candidates; four primary skill candidates; Obsidian conditional; governance hierarchy; no-spend/no-deploy/no-canon-change posture.
- **NOT LOCKED:** Vendor claims, compatibility, specific upstream revisions, purchase decisions, component approvals, new film canon, application implementations, or production release.
- **G01A next:** Pin repository commits and asset versions, inventory licenses/scripts/permissions, classify duplicate functionality, record baseline project requirements and security boundaries.
- **Then:** G01B supply-chain/security review → G01C isolated proofs → G01D integration documentation → G01E independent QC → G01F explicit founder disposition for each real adoption.

**Document control:** This is a founder decision record proposed on an isolated branch; it does not become part of the published Studio Brain `main` until separately reviewed and merged. Changes to this lock require a dated revision and founder sign-off.
