# OVS-PROD-EDIT-G01 V001 — Editable Production Project Standard
**Studio:** Omnia Vanitas Studios (OVS)  
**Date:** 2026-11-08  
**Disposition:** FOUNDER APPROVED + LOCKED AS STUDIO METHOD. Project canon, shot approvals, paid generation, provider publication, deployment, and final masters remain separately gated.  
**Applies to:** narrative film, music video, game/FMV, commercial/editorial, VFX, previs, 3D, motion design, still-image finishing, live visuals, and color finishing.

## 1. Purpose
OVS-PROD-EDIT-G01 converts an idea, source asset set, or partially built project into a **production project that remains editable at the scene, layer, path, timeline, node, grade, and source-file level wherever the chosen application supports it**.

This system is additive. It does not replace OVS identity, performance, lighting, transition, source-authority, project-canon, or human-approval rules.

### Governing principle
> **SOURCE BEFORE SURFACE. NATIVE BEFORE BAKE. ONE AUTHORITY PER LAYER.**

A flattened export is a review or delivery derivative unless a project-specific gate explicitly promotes it. The editable native project and its source manifest remain the production authority.

## 2. Authority chain
- **A — Source assets:** original video, audio, stills, scans, 3D models, textures, vectors, logos, fonts the studio is permitted to use, LUTs, EDL/XML/AAF, scripts, storyboards, and existing project files.
- **B — Reference assets:** visual, editorial, lighting, motion, layout, transition, or design references. B controls only the qualities explicitly assigned to it. A bundle banner, UI screenshot, marketing card, or workflow thumbnail is never source artwork.
- **C — OVS authorities:** approved face/body/hair/wardrobe sheets, source-image reconstruction rules, performance direction, camera/lens rules, lighting authority, transition authority, scene continuity, brand rules, and project-specific canon.
- **D — Production intent:** the exact problem to solve: build, organize, composite, clean, vectorize, repair, simulate, interact, edit, or grade.
- **E — Output contract:** target runtime, frame rate, aspect ratio, resolution, color space, audio layout, review/master codecs, editability requirements, and archive package.

If A, B, C, D, or E conflict, HOLD. Do not silently let a tool infer a new authority.

## 3. Workflow selection law
Choose the workflow by the **primary production problem**, not by what looks impressive.

| Workflow | Primary use | Native editable authority | Do not use as |
|---|---|---|---|
| /Scene-Builder — Blender | Environment, blocking, camera, lighting, previs, 3D shot construction | .blend with named collections/objects/cameras/lights/materials | Automatic replacement for source photography |
| /Destruction-Studio — Blender | Fracture, rigid-body, debris, destruction simulation | .blend with non-destructive setup/cache provenance | Generic action enhancer |
| /Exploded-view — Blender | Product/prop assembly, technical separation, spatial explanation | .blend with object hierarchy and animation controls | Narrative transition by default |
| /Cartoon-shaders — Blender | Deliberate stylized shader R&D | .blend node groups/materials | Photoreal canon conversion unless approved |
| /Project-sorter — Adobe Premiere Pro | Ingest, bins, proxies, sequences, editorial organization | .prproj + source path manifest | VFX compositor or final color authority |
| /Shot-Composer — Adobe After Effects | Layered compositing, graphics, masks, mattes, tracking, 2.5D/3D shot assembly | .aep with precomps/layers/masks/expressions | Primary long-form editorial database |
| /Shot-Cleanup — Adobe After Effects | Roto, paint, cleanup, tracked patches, screen/rig removal | .aep with cleanup layers and source plate preserved | Identity reconstruction or beauty retouch |
| /Vectorize — Adobe Illustrator | Logos, title marks, graphic/vector reconstruction | .ai with editable paths/type where licensed | Raster-photo enhancement |
| /Image-fixer — Adobe Photoshop | Still repair, cleanup, compositing, texture-preserving correction | layered .psd with masks/smart objects | New face/body invention under a repair brief |
| /use-touchdesigner — TouchDesigner | Real-time, interactive, audio-reactive, installation/live visual systems | .toe/.tox network with named operators and inputs | Offline film finishing when interactivity adds no value |
| /color-grading — DaVinci Resolve Studio | Color management, conform, shot matching, finishing grade, delivery | .drp/project database + node tree/stills/versioning | Source reconstruction or editorial redesign |

### Minimal-tool rule
Use the fewest applications that preserve authority and deliver the shot. A Blender -> After Effects -> Premiere -> Resolve chain is valid when each handoff has a distinct job; it is not the default simply because all tools exist.

## 4. Setup and local-tool verification
Before editing in a selected desktop application:
- Blender workflow: load and follow **/use-blender** setup.
- Premiere workflow: load and follow **/use-premiere** setup.
- After Effects workflow: load and follow **/use-after-effects** setup.
- Illustrator workflow: load and follow **/use-illustrator** setup.
- Photoshop workflow: load and follow **/use-photoshop** setup.
- TouchDesigner: inspect the available TouchDesigner workflow instructions before project mutation.
- DaVinci Resolve Studio: inspect the available Resolve/color-grading workflow instructions before project mutation.

Verification means confirming the required application/runtime is actually available and that the source/project files can be opened or ingested. Do not claim local edit capability from the existence of a workflow description alone.

## 5. Native editability requirements
### Blender
Keep scene hierarchy, transforms, camera, lens, lights, geometry, modifiers, constraints, materials, simulations, and animation editable. Prefer linked/packed assets with provenance. Cache simulation when needed, but preserve the procedural setup and source.

### Premiere Pro
Preserve original media paths, metadata, bins, selects, sync, multicam/source sequences, proxies, markers, sequence versions, nested sequences, and audio channel mapping. Do not flatten VFX or graded media into the only surviving editorial source.

### After Effects
Preserve source layers, precomps, masks, mattes, trackers, expressions, adjustment layers, 3D layers, cameras, lights, cleanup patches, and effect controls. Pre-render only for performance or handoff; retain the source comp.

### Illustrator
Preserve editable paths, compound shapes, type when font rights permit, swatches, symbols, and artboards. Rasterized exports are derivatives.

### Photoshop
Prefer masks, adjustment layers, smart objects, editable type, non-destructive transforms, and separate cleanup/reconstruction layers. Never paint irreversible changes into the only source copy.

### TouchDesigner
Name and group operators; expose user controls; preserve input/output routing, CHOP/TOP/SOP/DAT dependencies, timing, audio/MIDI/OSC inputs, and performance settings. Record external dependencies and device mappings.

### DaVinci Resolve Studio
Preserve the original conform, color-management settings, node tree, versions, groups, tracked windows, keyframes, stills, OFX settings, audio mapping, and delivery presets. Keep an untreated source/reference version. Baking a look into an intermediate does not erase the grade authority.

## 6. Cross-system contracts
- **OVS-EDIT-TRANSITION-G01 V003:** controls edit/transition grammar. Effects do not earn a transition; story, performance, rhythm, spatial understanding, and source continuity do.
- **OVS-LIGHT-G01 V001:** controls lighting/relighting. Light may change authorized illumination/color only; it does not gain authority over identity, acting, objects, camera, or audio.
- **OVS-PERF-G01:** performance remains observable behavior. A tool may not fabricate a reaction to repair weak staging without a new performance gate.
- **OVS identity/source-authority pipeline:** approved face/body/hair/wardrobe and source-image reconstruction rules override application convenience.
- **Project canon:** the latest project-specific approved gate outranks this generic production router.
- **Audio authority:** original production audio remains authoritative unless a dedicated sound gate authorizes alteration.
- **Paid generation:** no credits, paid renders, or provider publication are authorized by this system lock.

## 7. Recommended project structure
```text
PROJECT_ROOT/
  00_ADMIN/
    brief/
    approvals/
    manifests/
  01_SOURCE/
    video/
    audio/
    stills/
    3d/
    graphics/
    project_files_original/
  02_REFERENCE/
    visual/
    lighting/
    editorial/
    motion/
  03_WORK/
    blender/
    premiere/
    after_effects/
    illustrator/
    photoshop/
    touchdesigner/
    resolve/
  04_INTERCHANGE/
    exr/
    png/
    prores/
    xml_aaf_edl/
    alembic_usd_glb/
  05_REVIEW/
  06_MASTER/
  07_ARCHIVE/
```

Never overwrite `01_SOURCE`. App-specific autosaves and caches live outside source authority.

## 8. Interchange and handoff rules
1. Freeze the upstream version and record its hash/version before handoff.
2. State what the next application is allowed to change.
3. Export the least-destructive interchange appropriate to the job: EXR/image sequence for VFX, ProRes/DNx mezzanine when necessary, XML/AAF/EDL for conform, Alembic/USD/GLB for 3D interchange when supported, layered PSD/AI where appropriate.
4. Preserve frame rate, timecode, pixel aspect, resolution, color-management metadata, alpha semantics, audio sync, and naming.
5. Never use a review encode as a silent source replacement.
6. On return, compare against the upstream control for identity, geometry, timing, framing, audio, grain/texture, and color-management drift.

## 9. Production gates
| Gate | Required proof | Exit condition |
|---|---|---|
| G01A — Brief + source intake | Goal, source assets, existing project files, authority labels, rights/provenance, preferred tools, output format, duration | Missing authority/source -> HOLD |
| G01B — Toolchain verification | Required local application/runtime available; project/source opens; version recorded | Missing tool/runtime -> alternate route or HOLD |
| G01C — Workflow + editability plan | Primary workflow selected; secondary tools justified; native deliverables and handoffs named | Tool chosen only for novelty -> REJECT |
| G01D — Ingest / no-op proof | Sources linked without changes; timeline/scene matches duration, fps, resolution, color/audio | Source mismatch -> FIX before creative work |
| G01E — Editable build | Scene/layers/paths/timeline/nodes remain editable; one authority per layer | Destructive-only build -> REVISE |
| G01F — Cross-app handoff QC | Hash/version + allowed-change contract + interchange checks | Drift or missing source -> FAIL |
| G01G — Grade/finish | Resolve or project-authorized finishing with reversible versioning | Grade masks source error -> REJECT |
| G01H — Technical + continuity QC | First/middle/last + motion segments; audio sync; identity; geometry; texture; color; flash safety | Any unauthorized drift -> FAIL |
| G01I — Founder disposition | APPROVE / REVISE / REJECT for the specific project/shot | No human approval -> CANDIDATE ONLY |
| G01J — Archive/write-back | Native projects, manifests, source hashes, dependency list, review/master derivatives, disposition | Archive incomplete -> HOLD |

## 10. Hard failures
- Flattening or baking away the only editable authority without an approved archival source.
- Replacing source media with a proxy/review encode and losing provenance.
- Inventing face, body, hair, wardrobe, prop, environment, camera, dialogue, or performance information under a cleanup/repair brief.
- Silent frame-rate, timecode, aspect, resolution, alpha, audio-channel, or color-space changes between applications.
- Treating a workflow banner, UI card, thumbnail, or generated preview as source art.
- Letting a reference asset control qualities outside its assigned authority.
- Unapproved identity smoothing, beautification, skin-lightening, plastic texture, generic CG replacement, or continuity drift.
- Paid generation, publication, deployment, or canon promotion without separate explicit authorization.

## 11. Decision examples
- **Need a motel room camera move and relight with editable geometry:** Scene-Builder / Blender first; OVS-LIGHT governs illumination; After Effects only if compositing is needed; Resolve for final shot match.
- **Need to clean a boom reflection from a locked live-action plate:** Shot-Cleanup / After Effects. Do not rebuild the room in Blender.
- **Need to organize 80 takes and preserve source audio:** Project-sorter / Premiere Pro first.
- **Need an OVS title mark from a raster sketch:** Vectorize / Illustrator; keep paths editable, then export SVG/PDF/PNG derivatives.
- **Need a still repaired without identity invention:** Image-fixer / Photoshop; layered masks/smart objects, source untouched.
- **Need an interactive audio-reactive projection:** TouchDesigner; preserve the network and external mappings.
- **Need final cinematic color:** DaVinci Resolve Studio; OVS-LIGHT supplies lighting intent, but the grade remains reversible and shot-matched.

## 12. Required records
- `OVS_EDITABLE_PRODUCTION_ROUTING_G01_V001.json` — machine-readable workflow router.
- `OVS_EDITABLE_PROJECT_MANIFEST_G01_V001.json` — per-project authority, dependency, handoff, QC, and archive template.
- `OVS_EDITABLE_PRODUCTION_INTAKE_G01_V001.md` — intake and selection prompt.
- Existing OVS transition and lighting registries remain independent specialist authorities.

## 13. Lock semantics
This lock freezes the **routing, editability, authority, setup-verification, handoff, and QC method** at V001. It does not approve any particular edit, scene, generated asset, shot, grade, render, source-rights claim, external provider run, or final master.

A future change that adds/removes a supported workflow, changes authority priority, permits destructive-only work, changes the paid-generation rule, or alters a QC gate requires a new version and founder review.
