# OVS-RESOURCES-G01 — EVALUATION, ACCEPTANCE & RELEASE CHECKLIST

**Linked authority:** [OVS_RESOURCE_ADOPTION_G01_LOCK.md](./OVS_RESOURCE_ADOPTION_G01_LOCK.md)
**Status:** PROPOSED IMPLEMENTATION CHECKLIST / NO RUNTIME ADOPTION
**Date:** 2026-11-09
**Owner:** OVS founder (all decision gates)
**Working mode:** Isolated branch + disposable test environments + evidence-first human review

## Gates and exit conditions

### G01A — Source intake and compatibility audit
- [ ] Record upstream repository/source URL, immutable commit/tag and retrieval date for all 5 agent-skill repos.
- [ ] For 19 screenshot entries, verify 7 prioritized websites and flag redirects, duplicate providers, paid features and unavailable services.
- [ ] Inspect complete skill instruction files, install/setup paths, scripts, dependency manifests, external domains and requested credentials.
- [ ] Capture license terms and downstream requirements, particularly for templates, fonts, icons and animated components.
- [ ] Document OVS target-project stack and project-specific brand/identity/canon constraints.
- [ ] Write overlap matrix for multiple testing/review/handoff agents and designate one primary owner per role.

### G01B — Supply-chain, security and governance review
- [ ] Security-review executable code, privileged instructions, remote fetches and data egress behavior; treat upstream skill prompts as untrusted.
- [ ] Define authorized sandbox boundaries and prohibit production endpoint scanning without separate scope authorization.
- [ ] Identify data handling, secrets, and third-party telemetry risks.
- [ ] Confirm rollback/removal plan and pinned dependencies; no auto-update or one-line remote installers.
- [ ] Independently review licensing and image/visual-reference usage.

### G01C — Three isolated proof scenarios
**Proof A: GRLFND invitation / companion interaction**
- [ ] Storyboard a one-screen invitation-open → roster → profile-selection flow using fictional/placeholder data.
- [ ] Produce a mobile and desktop design specification before implementation.
- [ ] Test 1–2 selected component or motion techniques; avoid a wholesale framework replacement.
- [ ] Verify accessible keyboard/focus order, reduced-motion preference, contrast, touch targets, responsive behavior and sensible no-JS fallback.
- [ ] Record LCP/INP/CLS baselines and performance impact where a functioning web implementation exists.
- [ ] No real account flows, messaging vendors, paid assets, production deployments or canon likeness changes.

**Proof B: Cross-agent design and code review**
- [ ] Supply an OVS-constrained specification to the architecture/design agent.
- [ ] Conduct a fresh-context, independent review (EGM concept) and show disagreements with evidence.
- [ ] Test selective domain modeling/requirements/handoff skills against a non-production example.
- [ ] Check that reviewer suggestions cannot override locked project authority or founder decisions.
- [ ] Avoid conflicting duplicate skills for the same responsibility.

**Proof C: Security audit pilot**
- [ ] Use a disposable authorized application fixture with deliberately safe test cases.
- [ ] Record exactly which checks ran, what access was available, and how findings were validated.
- [ ] Separate verified vulnerabilities, suspected issues, and untested areas.
- [ ] Do not run the full claimed audit methodology if parallel agents / OS sandbox controls are missing.

### G01D — Standardized documentation
- [ ] Create an OVS skill manifest with upstream source, revision, scope, entrypoint, allowed actions and human checkpoint.
- [ ] Prepare per-project `AGENTS.md` or equivalent instructions only if needed, with explicit precedence over external skills.
- [ ] Add tool-selection/deduplication policy: no duplicate agents owning the same gate.
- [ ] Supply reproducible prompts, tests, evidence and rollback instructions.
- [ ] For Studio Brain, verify against `docs/OVS_VISUAL_IDENTITY_LOCK.md` and `docs/BRAND_UI_RULES.md`.

### G01E — Verification & founder review packet
- [ ] CI/lint/tests pass for any code changes; no new security regression.
- [ ] QA with source-authority, reference-rights and brand-fidelity checklist.
- [ ] Produce before/after comparisons and disclose any benchmark uncertainty.
- [ ] Deliver concise decision table: KEEP / REVISE / REJECT / DEFER, with evidence and cost.

### G01F — Release authorization
- [ ] Obtain separate explicit founder approval for each selected installed/integrated capability.
- [ ] Obtain separate approval for merges and production deployments.
- [ ] Obtain separate approval for paid services, purchased assets, or model credits.
- [ ] Track version, license, owner, review date, rollback path, and upgrade policy in the registry.

## Current gate ledger

| Gate | State | Evidence |
| --- | --- | --- |
| Founder decision: shortlist and priorities | **APPROVED + LOCKED** | This recorded decision |
| G01A source listing | **REGISTERED / AUDIT PENDING** | Catalog and candidate URLs |
| G01B supply-chain and permissions | NOT STARTED | Requires upstream inspection |
| G01C sandbox proofs | NOT STARTED | No execution authorized |
| G01D implementation integration | NOT STARTED | No skills or components installed |
| G01E full QC | NOT STARTED | No reviewed build |
| G01F merge/deploy authorization | **ON HOLD** | Separate founder approval required |

## Red-line constraints

Never modify the current published `main` from an intake test. Never let external design materials override the locked Studio Brain brand or source/face authority for LIKENESS. Never infer that a reviewed component automatically grants permission to reproduce screenshots or third-party trademarks. Never treat an AI-generated security issue as confirmed without evidence. Never imply a successful install, security clearance, test pass or deployment until verified.
