# OVS-RESOURCES-G01A — Source Intake & Compatibility Audit V001

**Audit date:** 2026-11-14 UTC/local session date
**Authority:** [Founder registry](OVS_RESOURCE_ADOPTION_G01_LOCK.md); [acceptance criteria](OVS_RESOURCE_ADOPTION_G01_ACCEPTANCE.md)
**Disposition:** PARTIAL PASS — source pinning and priority website discovery complete; detailed instruction/dependency/rights audit remains open. G01B entry not automatically authorized.
**Scope:** Read-only public upstream inspection; documentation-only branch update. No installation, execution, paid purchase, canonical change, merge, or deployment.

## 1. Immutable source register

GitHub default HEAD resolved on 2026-11-14. Recursive trees returned non-truncated results for all five pinned commits. File counts are tracked blob paths; entrypoint counts are SKILL.md paths, not approved capabilities.

| Source | Immutable revision | Commit date UTC | License header | Blob paths / skill entrypoints |
|---|---|---|---|---|
| [Cloudflare](https://github.com/cloudflare/security-audit-skill/tree/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8) | c1c8a8c1471069fb0e188eeaff69b8e8db6564a8 | 2026-09-14 | MIT | 22 / 1 |
| [Google EGM](https://github.com/google/elephant-goldfish-model/tree/e4747323aab66157812cd3a71755f6447b2803a2) | e4747323aab66157812cd3a71755f6447b2803a2 | 2026-11-14 | Apache-2.0 | 283 / 7 |
| [Addy Osmani](https://github.com/addyosmani/agent-skills/tree/39b723ceebf81474d0557c1fecd01eddab585563) | 39b723ceebf81474d0557c1fecd01eddab585563 | 2026-11-14 | MIT | 252 / 25 |
| [Matt Pocock](https://github.com/mattpocock/skills/tree/5863806dd4e15c63174bee4e7515a4256792ecfa) | 5863806dd4e15c63174bee4e7515a4256792ecfa | 2026-11-12 | MIT | 184 / 38 |
| [Obsidian](https://github.com/obsidianmd/obsidian-skills/tree/398127736bd4ba42d767b1419fee1a927508370b) | 398127736bd4ba42d767b1419fee1a927508370b | 2026-11-11 | MIT | 24 / 7 |

Original Obsidian URL https://github.com/kepano/obsidian-skills redirects to https://github.com/obsidianmd/obsidian-skills. GitHub API reports repository ID 1126947080; canonical owner path resolves pinned commit. Preserve original provenance. License classifications are based on pinned license files, not a complete redistribution or transitive-license review. Preserve applicable copyright/license notices; Apache-2.0 additional conditions and any NOTICE must be checked at adoption.

## 2. Selected entrypoints and execution boundaries

Paths below refer to pinned repositories above. Main README files and selected skill files were retrieved; keyword/metadata inspection and tree inventories are **not** exhaustive behavioral review. Files, scripts, references, command definitions, hooks and transitive dependencies not inspected in full remain unapproved.

| Role | Selected path(s) | Intake disposition |
|---|---|---|
| Security audit | Cloudflare skills/security-audit/SKILL.md | Retain for isolated pilot only. Requires parallel agents, Node.js validators, and OS-enforced sandbox, external networking disabled and sanitized environment. Without controls, no full audit / confirmed runtime findings. |
| Independent review | EGM skills/egm-review/SKILL.md; skills/egm-drift-report/SKILL.md; docs/harnesses.md | Retain. Requires genuinely fresh subagent contexts for independent review; review is not tests or founder approval. Reviewers read only scoped source material. |
| Quality constraints | Addy skills/constraint-driven-development/SKILL.md | Retain as candidate; adapt constraints to OVS rather than overwrite existing authority. |
| Test loop | Addy skills/test-driven-development/SKILL.md | Primary red-green-refactor candidate; no automatic project-wide test rewrites. |
| Frontend | Addy skills/frontend-ui-engineering/SKILL.md | Principles only until stack and brand checks pass. |
| Browser QA | Addy skills/browser-testing-with-devtools/SKILL.md | Chrome DevTools MCP required for advertised workflow; availability/permission not established. Test isolated browser profiles and fixtures. |
| Code review | Addy skills/code-review-and-quality/SKILL.md | Primary implementation review; distinct from EGM design review and Cloudflare audit. |
| Domain language | Matt skills/engineering/domain-modeling/SKILL.md | Retain; glossary/ADR proposal only. No automatic canonical edits. |
| Diagnosis | Matt skills/engineering/diagnosing-bugs/SKILL.md | Retain; execution limited to approved reproducible fixtures; redact data. |
| Architecture | Matt skills/engineering/improve-codebase-architecture/SKILL.md | Conditional; fresh subagent and temporary HTML report; no architecture change authority. |
| Agent handoff | Matt skills/productivity/handoff/SKILL.md | Retain as redacted handoff concept, inspect temporary path and data retention first. No copying private context into public repository. |
| Knowledge vault | Obsidian plugins/obsidian/skills/obsidian-cli/SKILL.md; plugins/obsidian/skills/obsidian-headless/SKILL.md | Defer. Vault reads/writes, JS/plugin controls, sync and publish exceed current authority; headless requires Node 22+ and subscription for Sync/Publish. |

### Explicit risk inventory

- Cloudflare tree includes validate-coverage-ledger.cjs and validate-findings.cjs with corresponding test files under skills/security-audit/. README describes zero-dependency validators. Do not execute before review.
- EGM tree includes multiple harness/plugin manifests, adapter installer, Python packaging configuration, CI and site dependencies. Review selected harness's exact plugin + agents/resources/standards; upstream's broader website development stack is not a required OVS app dependency.
- Addy tree includes hooks/session-start.sh, hooks/sdd-cache-pre.sh, hooks/sdd-cache-post.sh, hooks/simplify-ignore.sh, quality-gate.mjs, plugin manifests, commands, fixtures and scripts. README documents autonomous build and ship workflows and incomplete shared reference portability in individual-skill installation. Exclude ship, auto-build, hooks and live integrations until independently approved. Do not bind unreviewed scripts to agent events.
- Matt tree includes package.json, package-lock.json, setup/triage integrations, git guardrails, debugging templates and scripts. README says plugin paths may auto-update and duplicate skills if installed through both plugin and skills CLI. Prefer manually staged exact revisions, not auto-update. Exclude issue mutations, global Git changes, automatic setup and experimental skills from pilot.
- Obsidian tree includes plugin manifests, vault CLI/headless, defuddle and knap. Do not enable reading private vaults, web extraction, external sync/publish, or local JS/plugin execution. No approved vault identified.
- Overall: no secrets, broad filesystem grants, global installs, network fetches from skill paths, arbitrary shell commands, autonomous commits, deployments or third-party account linking. Actual command allowlists, transitive dependency graph and network-domain inventory are still required.

## 3. Design resources: priority reachability and rights

Seven priority homepages returned usable content on 2026-11-14. Reachability is not an account, licensing, or runtime test.

| Priority source | Observed offering / decision |
|---|---|
| https://beui.dev | React/React Native copy-paste components, Framer Motion + Tailwind, shadcn CLI, MIT claim for public components; Pro tier. Exact component revision, source, dependencies, and license required before use. HOLD Studio Brain direct integration. |
| https://motionin.design | Free/paid interactive section prompts. Reference/specification only; no purchase or unreviewed prompt execution. |
| https://mobbin.com | App/site design reference library; free entry and priced plans; MCP advertised. Reference only; no reuse of screenshot assets or MCP activation. |
| https://60fps.design | Motion references, snippets, storyboards and MCP entry. Use timing principles, not unlicensed snippets or integration. |
| https://recent.design | Design gallery across UI, branding, motion, print. Reference only. |
| https://landdding.com | Landing-page categories and templates. Research only; template license not assumed. |
| https://paperanimation.ai | Upload-based paper/text animation; free entry and pricing link. Synthetic/nonconfidential assets only if approved; retention/export rights TBD. |

Duplicate resolution: godly.website returned redirect to recent.design/?ref=godly (redirect destination with query failed to load in retrieval; Recent home page independently accessible). Treat as one reference family. Modulify and Modulify templates remain one provider as registered. Other twelve entries retain prior catalog/deferred dispositions; current availability, prices and license terms not verified comprehensively.

## 4. Compatibility baseline and ownership matrix

Studio Brain package.json at intake branch declares zero dependencies and scripts start/dev running python3 -m http.server 4173 --bind 0.0.0.0. The existing visual identity lock mandates ivory/black/emerald, editorial hierarchy, square geometry, no glass, gradient, or replacement logo. Do not import a React-based UI library or rewrite current stack just to use a component. Local browser storage and public hosting remain existing boundaries; no private data in public docs or browser test traces.

Other OVS target projects require exact authorized branch and dependency manifests before changes. Private app details deliberately omitted from this public registry. Candidate proof: a minimal isolated invitation/roster/profile interaction using fictional data, if target stack and rights pass review. LIKENESS source authority and canon remain untouched. Morning Edition paper animation remains an optional non-print derivative.

| Responsibility | Primary candidate | Avoid duplicate owner |
|---|---|---|
| Requirements terminology / ADR | Matt domain-modeling | Addy generic context/spec duplication |
| Spec-level independent challenge | EGM egm-review | Simulated self-review or second default review pipeline |
| Implementation constraints + TDD | Addy selected skills | Matt tdd, autonomous build |
| Runtime browser QA | Addy browser-testing-with-devtools (if enabled) | Unscoped browser/tool integration |
| Implementation code quality | Addy code-review-and-quality | Matt code-review by default |
| Specific bug diagnosis | Matt diagnosing-bugs | Parallel competing debugging loops |
| Independent security verification | Cloudflare security-audit | Unverified checklist security claims |
| Cross-agent handoff | Matt handoff concept | Duplicate unredacted context stores |
| Knowledge vault | None active | Obsidian deferred |

## 5. Exit criteria ledger

| G01A acceptance item | Status |
|---|---|
| All five canonical URLs and immutable revisions | PASS |
| All five recursive tree inventories | PASS |
| Seven priority websites and Godly redirect | PASS for source reachability only |
| License type identification | PASS for root license headers; downstream terms open |
| Full selected instruction, setup, executable, dependency and external-domain audit | PARTIAL — selected files/metadata and tree flags only; complete examination remains open |
| Target-stack baseline and project authority | PARTIAL — Studio Brain verified; private app and game-specific evidence must remain scoped |
| Duplicate/role matrix | PASS as recommendation, not installed |
| Exact beUI component, rights, version and performance baseline | OPEN |
| G01A closure | HOLD — no security clearance or production authorization |

## 6. Required correction gate

**G01A.1 — Selected Skill Closure & Permission Manifest:** inspect all selected entrypoints and referenced files in full, scripts/hooks/manifest dependency closures, exact network and tool permissions, pinned beUI component and redistribution terms, and target branch baseline. Exclude all unused source paths from executable scope rather than treating all 78 entrypoints as approved. Record each item as PASS / HOLD / REJECT with evidence, explicit egress policy and rollback. G01B remains pending founder review of this closure. No paid credits, installations, external service activation, production code, merge, publication or deployment.
