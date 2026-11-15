# OVS-RESOURCES-G01A.1 — Selected Skill Closure & Permission Manifest V001

Date: 2026-11-14
Founder disposition: G01A V001 accepted; proceed with G01A.1 qualification only.
Predecessor: [G01A intake](OVS_RESOURCE_ADOPTION_G01A_INTAKE_V001.md)
Authority: [G01 lock](OVS_RESOURCE_ADOPTION_G01_LOCK.md) and [acceptance gates](OVS_RESOURCE_ADOPTION_G01_ACCEPTANCE.md)
Disposition: **PASS for proposed default-deny permission manifest; PARTIAL for upstream closure; HOLD all executable adoption.**
No skill was activated, installed, or executed. No network service was connected. No tests of third-party executable code were run. No private application details are recorded in this public repository.

## 1. Exact source boundary

Use the five immutable Git commit pins in G01A. All unlisted file paths are excluded from the candidate pilot scope. Listed paths are source-inspection candidates, not an executable allowlist. The current executable allowlist is EMPTY. Documentation-only adaptations must be written in OVS language without copying proprietary content or authorizing action. No external package or agent commands may be run on the basis of this manifest.

### Retrieved selected entrypoints and dependency evidence

The following blob IDs were returned by GitHub for complete file retrieval at the pinned source refs. Inspection used selected excerpts and dependency-reference extraction; it is not a line-by-line security review or an exhaustive import/call-graph analysis. Root license headers are already recorded in G01A.

| Source/path (relative to pinned repository) | Git blob SHA | Disposition |
|---|---|---|
| Matt skills/engineering/domain-modeling/SKILL.md | a4438c6879c517d1a08e2b5fbca049b632688dfe | OVS glossary/ADR methodology candidate |
| Matt skills/engineering/domain-modeling/GLOSSARY-FORMAT.md | 9c0b4c7a2e8507c23cbb5e0baa66d81699321cc6 | Reference only |
| Matt skills/engineering/domain-modeling/ADR-FORMAT.md | d7e61f30a9fd8ca70d9ee68f019c2a9ebf2d13f7 | Reference only |
| Matt skills/productivity/handoff/SKILL.md | a224edc643a20ddb989f9bca1547440169159810 | Redacted handoff methodology, no temp-file execution |
| Matt skills/engineering/diagnosing-bugs/SKILL.md | d039541ddd1c46e6ddbd662fe99d49b686fc5e12 | HOLD execution; reproducible fixtures only |
| Matt skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh | 243198464a8401a7ba1d63b3708fa43c3d067665 | HOLD shell template |
| Matt skills/engineering/improve-codebase-architecture/SKILL.md | f1eabb568464f03ae79a3346fc1918fdde6d8285 | HOLD fresh agent and temp HTML report |
| Matt skills/engineering/codebase-design/SKILL.md | 3f63c8146dd2604b419c929e9876b90c30d410e9 | Reference dependency, not activated |
| Addy skills/constraint-driven-development/SKILL.md | 20cef20c0938923fe784c77c625f9f9256d665fe | OVS constraints methodology |
| Addy skills/constraint-driven-development/references/floor-guard.md | 6ba8b6dac977228c50f157564b6e6a31efbcca0d | Reference implementation, held |
| Addy skills/constraint-driven-development/scripts/quality-gate.mjs | 33b33a728150b71a6ceccecfde09a59fc139d719 | HOLD execution |
| Addy skills/test-driven-development/SKILL.md | 5dc0ae7e4ae4e4f6d60a6815f2643cda6ba3e99c | Test-first methodology |
| Addy references/testing-patterns.md | 86abe519a60566535ec2b3092bf6a04a0f6722f7 | Reference only |
| Addy skills/frontend-ui-engineering/SKILL.md | 556b9878808486abb0d3e39daa985e6e34fa341c | Reference only; project design laws prevail |
| Addy references/accessibility-checklist.md | 214ab49b504869227015bfd8eaaeb44e4355467e | Reference only |
| Addy skills/code-review-and-quality/SKILL.md | 673d8ff56e50302f0975b4338429eba8bbb21ba5 | Implementation review methodology |
| Addy references/security-checklist.md | dbad3cc327ae035b64c762560ff779fae226ae48 | Reference only, not security certification |
| Addy references/performance-checklist.md | 81f754909440211c3a925a770abccf2da6d1d0fc | Reference only |
| Addy skills/browser-testing-with-devtools/SKILL.md | ca0044e859e5637c33250dbba1fc1a24540b7ad3 | HOLD MCP qualification |
| Addy hooks/session-start.sh | cf93e771d2d6ac24536de88407fc7a8e1de34534 | EXCLUDE auto hook |
| EGM skills/egm-review/SKILL.md | cf7adae0473d566687b39617aacac8946d68f28d | HOLD until genuine fresh context is verified |
| EGM skills/egm-drift-report/SKILL.md | 1947221778bea357a98409c0d580c741a7b72be9 | HOLD automated reporting; scoped read-only concept |
| EGM docs/harnesses.md | 00e214a43217e7031a21b1da7b50ebfa2bd6ac16 | Harness qualification reference |
| EGM docs/codex.md | bdb11640e913fb91689a638f79b568cec2742a02 | Harness qualification reference |
| EGM docs/claude.md | acf89a29220923d0d2869d02ae683c22072016fd | Harness qualification reference |
| EGM agents/zoom_out.md | fc2b24bfa8cc295072915e7197401dd70b111129 | HOLD agent activation |
| EGM agents/comprehension.md | b4e32cbae3cc60d322ba00cccff188d95dfb49a8 | HOLD agent activation |
| EGM resources/document_standards/zoom-out-standard.md | de01edd8c458730241dea17a2d7bcaad153c9f94 | Reference only |
| Cloudflare skills/security-audit/SKILL.md | 92178dad304d3f63e37582a297026a7874e12c62 | HOLD OS sandbox and coverage proof |
| Cloudflare skills/security-audit/validate-findings.cjs | 2843feceddb7e30bf10d6e4f7bbe6640e4c57799 | HOLD execution |
| Cloudflare skills/security-audit/validate-coverage-ledger.cjs | 0ef58657bef18b26a92321df6c8e3d31bc8e6659 | HOLD execution |

Obsidian remains deferred with no permitted vault access. Other upstream entrypoints, adapters, manifests, package scripts, hooks, agents, references, and assets default to EXCLUDED until individually scoped and independently reviewed.

## 2. Findings

- EGM review requires harness-specific integration documents and persona/standard resources, plus genuinely fresh subagents. Its Claude integration specifies Claude Code 2.1.271+ for omitClaudeMd support. Do not infer that version or isolation is present on OVS machines. Do not count a second prompt to the same conversation as an independent reviewer.
- Addy browser testing explicitly requires Chrome DevTools MCP; example uses a floating @latest version and automatic confirmation. Prohibit the example installation as-is. Require pinned package and browser version, isolated profile, scrubbed environment, scoped fixture, no external networking or live authenticated tabs, and explicit review of the server tool surface.
- Addy constraints references a quality-gate script and floor-guard reference; the session-start hook uses jq and injects routing context. Do not load hooks or auto-routing. The attempted hooks/hooks.json retrieval returned 404; actual hook wiring remains unresolved. No assumption that hooks are absent.
- Matt architecture review requires the codebase-design skill, fresh context and temp HTML output. The debugging skill can replay traces or run browser, HTTP, fuzz, bisect and shell reproductions. Keep execution held. Handoff writes to system temp by default; OVS adaptation should write only redacted, approved handoff content to a designated scratch directory and not expose prior private conversation.
- Cloudflare validators import Node built-ins (fs, path, util/decoder); retrieval does not prove all I/O behavior safe. Full audit requires isolated hunters/verifiers, OS-enforced sandbox, no external network, sanitized environment, read-only target, resource limits, and isolated scratch writes. Remaining phase files, schemas and validator test closures must be inspected before any execution.
- MIT and Apache-2.0 root licenses are identified at pinned refs. Preserve required notices if copying substantial material; no third-party snippets, fonts, media, or package redistribution rights assumed. This file stores identifiers and paraphrased findings, not vendored code.

## 3. beUI bounded component candidate

Proposed candidate: public Bouncy Accordion for a profile-details disclosure, not the whole GRLFND roster. Chosen as a minimal, reversible interaction to test disclosure state, keyboard access and reduced-motion behavior.

Public evidence retrieved 2026-11-14:
- https://beui.dev/components/motion/bouncy-accordion — source page documents React component, theme setup, clsx, lucide-react, motion, tailwind-merge dependencies and shared utilities.
- https://beui.dev/r/bouncy-accordion.json — live registry reachable; references shared easing and class-merging utilities. Mutable URL; no immutable content digest captured. Not an approved pin.
- https://beui.dev/ — vendor states public library MIT and commercial use allowed; keep copyright and license notice. Pro has separate terms; no token or purchase permitted.
- https://beui.dev/docs/theme — theme layer requires Tailwind CSS v4; do not import entire theme or overwrite project design tokens.

Status: HOLD actual component copying/build. Need immutable component and utility bytes with SHA256, complete license notice, package lock resolution, exact target branch/stack compatibility, baseline performance and independent accessibility review. Use original native disclosure or existing project primitives for any separately authorized zero-dependency prototype. No production React import into Studio Brain. No private app or branch data exposed here.

## 4. Proposed permission manifest

Default deny. Intake fetches from named public GitHub and resource URLs are read-only. Runtime allowlist (third-party scripts, commands, tool endpoints, package installs, outbound domains) = empty. No secrets, personal data, real customer data, private vaults, live browser sessions, global Git config, upstream auto-updates, or vendor account activation. Human authorizes a later nonproduction fixture, test runner and per-command list before execution. Localhost-only test traffic may be separately approved inside isolated network namespace; never production scans or public deployment. Only approved docs can be written on isolated branch. No automated source modifications, canon promotion, merges, release, purchases or deployments.

Rollback: retain predecessor Git commit 6374bd5ddebff374acc36263ca40626e0ccf4b51 as documentation baseline; discard any future disposable test environment after extracting scrubbed evidence; revert only explicitly introduced files/dependencies on approved pilot branch. No changes to current production environment occurred, so no runtime rollback needed.

## 5. G01A.1 acceptance disposition

PASS: exact decision scope, selected source/blob registry, default-deny permission manifest, proposed duplicate-free methodologies, explicit rollback, component candidate and rights screening.
PARTIAL: complete referenced-file and executable call graph, package/transitive dependency closure, exact egress and permissions for any future runtime, component byte pin and notice, private target-branch baseline. Full files were retrieved where recorded; extracted excerpts are not proof of full review.
HOLD: all third-party execution, installs, browser/MCP integration, EGM independence claim, Cloudflare audit certification, beUI imported component, Obsidian activation.
BLOCKED: declaring G01A fully closed or G01B passed.

Recommended next founder decision: approve G01B **read-only supply-chain verification of the narrowed scope**, keeping unresolved closure items as explicit blocking prerequisites rather than adding executable permissions. Start with non-executable OVS-native engineering procedures; require independent review of any candidate code before promoting it into a sandbox pilot. This recommendation is not itself authorization to advance or install.
