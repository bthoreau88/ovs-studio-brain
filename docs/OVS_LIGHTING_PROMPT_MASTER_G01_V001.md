# OVS-LIGHT-G01 V001 — Source-Aware Relighting Master Prompt
**Method authority:** `OVS_CINEMATIC_LIGHTING_SYSTEM_G01_V001.md`  
**Catalog:** `OVS_LIGHTING_REGISTRY_G01_V001.json`  
**Scope:** single-source-shot relight study / practical plate + grade + VFX / optional model video-to-video. No automatic generation or credits.

## Required inputs before use
```text
PROJECT / SCENE / SHOT ID:
SOURCE A ORIGINAL MOVING IMAGE (with original audio, exact file hash, fps, duration):
SOURCE B LIGHTING REFERENCE (lighting ONLY; URL/file + permissions):
CANON C (approved face/body/hair/wardrobe and scene authorities):
LIGHT LOOK ID (LIGHT-01..LIGHT-34):
DRAMATIC PURPOSE (specific beat, not "cinematic"):
VISIBLE OR MOTIVATED LIGHT SOURCES IN A:
KNOWN ORIGINAL CAMERA / LENS / GRADE CONTROLS:
SELECTED ROUTE (capture / Resolve / Blender/VFX / video-to-video study):
RENDER AUTHORIZATION (zero-credit study by default):
```

## MASTER — insert filled metadata, attach video A and reference B
```text
OVS-LIGHT-G01 V001 | CINEMATIC RELIGHT / PRESERVATION-PRIORITY
SHOT: [PROJECT / SCENE / SHOT ID]
STYLE: [LIGHT-XX — EXACT CATALOG NAME]
INTENT: [ONE OBSERVABLE STORY OR PERFORMANCE REASON]
APPROVAL: CANDIDATE ONLY. ZERO PAID GENERATION UNLESS SEPARATELY AUTHORIZED.

INPUT A is the original performance video. Its frames and original audio
are the only authority for the scene and shot: all people and their identity,
skin texture/tone, cranial and body geometry, hair, wardrobe and accessories,
pose/behavior, props, environment, spatial layout, lens and perspective,
framing, focus and camera trajectory, exact movement, facial expressions,
dialogue, lip-sync, frame order, duration, timing and audio.

INPUT B is only a reference for the requested lighting characteristics:
direction, apparent source size, color temperature, intensity, fill ratio,
light softness, shadow/falloff geometry, atmospheric effect and reflections.
Never adopt or recreate B's people, clothing, background, story, framing,
camera angle, identity or composition. B must NOT be used as the start frame.

Respect CANON C as an independent immutable identity/wardrobe/scene check.
Do not change, insert, remove, reposition, re-interpret or beautify any
person or physical object. Do not add a lamp/window/fire/screen/vehicle,
invent a new reflection, or alter original speech, sound or lip-sync.
Retain original fine skin pores and material texture, natural color
variation and approved motion grain. No synthetic plastic smoothing.

RELIGHTING DIRECTION:
[INSERT ONLY THE REGISTRY LIGHTING_SETUP FOR LIGHT-XX, PARAPHRASED
FOR THE ESTABLISHED LOCATION AND ITS CREDIBLE MOTIVATED SOURCES.]
Match consistent shadows, speculars, occlusions and reflections on every
frame as the original actor and camera move. If this is physically
inconsistent with A or cannot be achieved without reconstructing content,
report the limitation; do not silently manufacture changed footage.

FINISH / DELIVERY:
Original shot length, original timing, unchanged original speech/audio
and perspective. Preserve skin complexion and real texture. Retain
color-management, highlight detail and physically credible falloff.
Produce an isolated lighting-only comparison; keep a reversible
unmodified A master. Do not add text, graphics, new music or sound.

FAIL / REJECT if identity, acting, geometry, objects, audio, framing,
duration, grain, face/body/wardrobe, or source provenance changes.
Flag flicker-sensitive treatments for human accessibility review.
```

## A/B/C evaluation requirement
- **A — Control:** unchanged original source.
- **B — Editorial/physical route:** practical re-key, Resolve node tree, tracked power windows, composited 3D bounced/area/spot light, or conservative grade without content generation.
- **C — Synthetic relight:** only for shots where B cannot deliver the desired dramatic light without excessive labor; no paid output unless separately authorized. Reject if it invents missing pixels or facial states.
- Score A vs B vs C by legibility of the intended character beat; source identity and geometry; skin/wardrobe material; light-source physics; tracking across motion; audio and frame accuracy; image consistency; and flashing safety. No merely "prettier" winner.

## Shot-specific adaptation examples (non-canonical)
### LIGHT-02 — Low-key, existing motel interior
Use the existing night practical as a believable soft key; reduce environmental fill conservatively. Keep original furniture, tungsten lamp position, hallway teal leakage, shot blocking and actor action exactly as recorded. **Fail** if the model replaces the lamp, warps the face, or obliterates legible hands.

### LIGHT-21 — Window light, copy-shop daytime
Push an already established window-side falloff into the actors' existing surfaces without introducing a new window or re-staging. Preserve the shop's counter, documents, gestures, eyelines and lip-sync. **Fail** if cast shadow direction contradicts the captured room.

### LIGHT-32 — Passing light, nighttime performance
Only use when a passing off-camera light source is narratively/plausibly established. Track highlight speed across the original headwear and glass; do not insert an automobile or alter the person's movement. **Fail** if speculars stay painted on when the subject turns.

### LIGHT-33 — Strobe/flicker, music video R&D
HOLD for distribution photosensitivity and flashing review. Use the untouched movement and timing; never convert light pulses into jump cuts or motion frame deletion. Seek an alternative if safety cannot be validated.

## QC and manifest
Use `OVS_LIGHTING_SHOT_CARD_G01_V001.csv` to record source asset hashes, LIGHT ID(s), approved source geometry, method, actual render version, duration, cost, first/middle/last frame QC, temporal motion QC, audio checksum, source/identity rights, photosensitivity review, founder approval and final disposition. Documentation lock is not a creative shot lock.

## Provenance
Adapted from the user-supplied 74-page `Video lighting guide.pdf` / [Higgsfield creator page](https://higgsfield.ai/@responsiveowl1667/blogs/video-lighting-guide). This OVS template is newly written; do not redistribute source stills or treat the creator examples as footage you own.
