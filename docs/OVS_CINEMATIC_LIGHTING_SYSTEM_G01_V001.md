# OVS-LIGHT-G01 V001 — Cinematic Lighting & Relighting Authority
**Studio:** Omnia Vanitas Studios (OVS)  
**Date:** 2026-11-07  
**Disposition:** STUDIO METHOD APPROVED FOR VERSIONED DOCUMENTATION; shot-level tests, film canon, publication, and paid generation remain separately gated.  
**Applies to:** LIKENESS films and universe, OVS narrative and music video, Blender/CG environments, practical capture, DaVinci Resolve grades, and optional video-to-video relighting.

## Source and limits
- Research source: [Video lighting guide](https://higgsfield.ai/@responsiveowl1667/blogs/video-lighting-guide) attributed to Higgsfield creator `@responsiveowl1667`; user-supplied PDF titled `Video lighting guide.pdf`, **74 pages**, SHA-256 `4ace3ffa92ead26df2dd8b90528a78131e99e573b5dc19e7af3a1d1474dc4d7f`. The page's public HTML was not sufficient to inspect the guide; this derived standard was prepared from the PDF.
- Source catalog: **34 numbered treatments**, source pages 4–74; IDs are preserved in `OVS_LIGHTING_REGISTRY_G01_V001.json`. Source numbering is evidence attribution, not evidence of reliable model output.
- This is an **original OVS operational derivative**, not a copied prompt library, an endorsement, a film-look LUT, or a claim that a model can relight any shot without artifacts.
- The PDF's full source imagery, third-party frame reproductions, and the 50 MB file must not be committed or redistributed through the public repo. Source link, title and document hash supply provenance. Rights to reference media remain unverified and do not transfer from the guide.

## Governing authority — SOURCE BEFORE STYLE
1. **A / Source motion-performance plate** is the only authority for who/what is visible: face, skin, body proportions, hair, wardrobe, accessories, geometry, props, background, framing, lens perspective, movement, cuts, expression, timing, lip-sync, original speech and production sound.
2. **B / Lighting reference** is a limited authority for lighting placement/direction, source size, softness, contrast, color, intensity, shadows, bounce, falloff and motivated effects; **never** for transferring people, settings, pose, objects or composition. Never use B as a start frame for source-A recreation.
3. **C / OVS identity and shot authorities** override all generated interpretation of the subject (approved face/body/hair/wardrobe sheets, approved camera/lens/scene/continuity); if A and C contradict, HOLD for explicit human adjudication. No beauty smoothing, face normalization, skin lightening, synthetic texture or replacement anatomy.
4. **D / Dramatic necessity** governs look selection. Lighting conveys psychology, class, place, time, culture or action. It is not a random visual preset. Existing approved tone/production grades take precedence unless the founder approves a variant.
5. **E / Source fidelity** is the benchmark. If the proposed illumination cannot be reconciled with source physics or geometry, use practical relighting, a controlled grade/VFX pass or stop. Do not silently invent windows, lamps, flames, screens, rain, furniture or new backgrounds.
6. Preserve the **recorded audio** bit-for-bit where possible; generated sound, dialogue, music and audio alteration require a separate audio gate. Keep image duration, frame order, frame rate/timecode and camera movement unless authorized.
7. No paid credits, provider renders, deployment or canon promotion are authorized by this documentation lock alone.

## Selection protocol
1. Record a story/performance intent and scene constraints, then choose **one primary** LIGHT ID and at most **one compatible secondary**. Do not stack preset names indiscriminately.
2. Establish an untreated **A control**. Compare **B physical/camera/Resolve lighting-and-grade treatment** against **C synthetic relight only when needed**. Default to genuine practical sources, local masks, power windows, tracked exposure, and color management over generative replacement.
3. Write a *source feasibility map*: existing visible lamps, windows, ceiling lights, motivated off-screen sources, shadow angles, glass/specular behavior, practical movement, reflections, windows/sky and ambient direction.
4. Identify the look as **capture direction**, **post-grade**, **compositing/3D relight** or **video-to-video study**. A guide's video-to-video example is not proof that all looks can be generated physically or consistently.
5. Log primary and secondary look IDs, selected source plate, reference permissions, known limits, node map/model version/settings, estimated cost and human approval before any run.

## Operating gates
| Gate | Required proof | Exit |
|---|---|---|
| G01A Source intake | Exact A video & original audio; clip duration, fps, frame size, shot identity, approved C refs, B source provenance and rights; file hashes | Missing original source / consent -> HOLD |
| G01B Story lighting decision | Why the look serves the scene; selected ID, source motivation, material/skin constraints, comparison with untreated A | Generic aesthetic-only selection -> REJECT |
| G01C Zero-credit lighting design | Virtual or practical light diagram; Resolve CST/color-management/node plan; B vs C feasibility; no paid generation | Impossible source geometry -> redesign / HOLD |
| G01D Controlled test | A master retained; B grade/practical proof; C only if approved/available; one isolated change per test; full-length original audio | Drift -> REJECT; model cost requires separate authorization |
| G01E Temporal/source QC | Frame-accurate side-by-side and first/middle/last review plus motion segments, gesture/lip sync, masks/shadow tracks, face and wardrobe | Any new object/identity/camera/audio drift -> FAIL |
| G01F Safety and color QC | Exposure/HDR/clipping, highlight roll-off, deep-black detail, complexion/texture, specular/reflection, grain consistency, accessibility/flicker | Strobe/flicker requires photosensitivity review before export |
| G01G Founder disposition | APPROVE / REVISE / REJECT one variant, with project + shot ID; no silent canonical merge | No human approval -> CANDIDATE ONLY |
| G01H Archive | Version, hash, exact source, permitted look IDs, QC notes, provider parameters, cost, approvals, exported assets | Record lock; not generalized proof for other shots |

### Hard QC failures
- Changes to recognizable face or skull shape; hairline; nose, lip, jaw, hands or body; ethnic skin-color handling; clothing/accessory material or placement.
- Reframing, horizon shifts, lens-geometry changes, unexpected parallax; moved or hallucinated physical objects; added off-screen fixtures seen on-screen.
- Audio or lip-sync edits; altered action, performance beats, camera speed, duration, timing, dialog, source grain or existing narrative evidence.
- Lighting that does not track moving subjects/occluders; drifting shadows, reflections or color across frames; blown practical bulbs, clipped faces, inaccessible black levels.
- Deliberate rapid flashes without review and mitigation for photosensitive audiences.

## Cross-system contracts
- **OVS source-authority / face-identity pipeline:** C controls face/body/wardrobe authority; LIGHT changes only authorized photons/color, not facial design or behavior.
- **OVS-EDIT-TRANSITION-G01:** Relighting is not a transition; transition choice must earn its emotional/story purpose. A/B/C editorial comparisons remain separate.
- **OVS-PERF-G01:** An unchanged performance remains unchanged. Only one primary + one secondary observable behavior beat per clip; light cannot fabricate a reaction.
- **LIKENESS : SECOND HAND SH-G07:** Retired Twelve Photographs, Recorder A/B, predictive audio, evidence puzzles, prop displacement and hand-following/tapping remain retired. No lighting variant introduces those plot mechanics.
- **DaVinci Resolve:** Preserve original version. Recommended node concept: INPUT/CST -> WB/EXPOSURE -> PRIMARY CONTRAST -> TRACKED RELIGHT/MASKS -> SKIN/REFLECTION QC -> LOOK SHAPING -> TEXTURE -> OUTPUT/CST. Node order may vary with actual color-management needs.
- **Blender/CG:** Match chosen light source to environment geometry, emission/specular response and character materials. Approved faces, hair and physical light motivation must survive compositing.

## Risk-specific qualification
- LIGHT-10 Silhouette: must be expressly approved when face legibility is required; do not infer identity through generated face.
- LIGHT-19 Day-for-night and LIGHT-20 Moonlight: consider sun shadows, sky, windows and background practicals; a blue grade alone is usually insufficient.
- LIGHT-25 Gobo / LIGHT-26 Volumetric: animated occlusion, haze continuity and motivated source geometry; never inject decorative floating beams.
- LIGHT-28 Neon / LIGHT-29 Teal & orange / LIGHT-30 Monochrome red: retain natural complexion integrity and readable face detail where story requires it.
- LIGHT-31 Screen glow: imply light only if a screen is established or plausibly off-screen; never introduce a device.
- LIGHT-32 Passing light: animate light path/shadow timing consistently with movement; no unauthorized passing vehicle.
- LIGHT-33 Strobe/flicker: HOLD for flicker safety checks and distribution review; avoid as decorative default.

## Deliverables and evidence
1. `docs/OVS_LIGHTING_REGISTRY_G01_V001.json` — machine-readable **34-treatment** catalog with source page, setup, use and QC risk.
2. `docs/OVS_LIGHTING_PROMPT_MASTER_G01_V001.md` — source-aware prompt with selectable look ID and independent control/variant test.
3. `docs/OVS_LIGHTING_SHOT_CARD_G01_V001.csv` — fillable shot gate manifest for source hashes, methods, approval and QC.
4. The OVS Studio Brain Prompt Factory gets an **OVS Lighting / Relighting Prompt** template (with a look ID to insert from the registry). The documented catalog is version-controlled; there is no claim of provider sync or automated model QC.

**Lock semantics:** This document freezes the *method and catalog version*, not any particular relight, provider model result, actor image, source footage license, film canon, shot treatment or export. Any future new look or substantive rule change increments the version, keeps prior history, and requires review.
