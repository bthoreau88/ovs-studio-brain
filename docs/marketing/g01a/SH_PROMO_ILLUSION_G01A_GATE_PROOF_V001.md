# SH-PROMO-ILLUSION-G01A / THE OTHER ANGLE
## Zero-Credit Optical Geometry & Perception Proof — V001

**Parent standard:** `docs/marketing/SH_PROMO_ILLUSION_G01_V001.md`  
**Dependency:** `claude/sh-promo-illusion-g01-v001` (this branch was cut from the G01 proposal branch, not main).  
**Status:** **COMPUTATIONAL TECHNICAL PASS / HUMAN PERCEPTION HOLD**.  
**Film canon effect:** NONE. **Video permission:** NONE. **Spend:** ZERO. **Likeness promotion:** NONE.  
**View date:** 2026-11-08 (Pacific).

### A. What has actually been proved

The rig uses a deterministic pinhole projection and **two separate stationary human-shaped geometry proxies**, standing 4.40 m and 7.30 m from the camera datum. The only world-state change is a 40 cm camera translation (X = -0.20 m to +0.20 m). There is **no** actor translation, face morph, changed body mesh, object displacement, hidden jump cut or video output.

At the five tested camera stations, the calculated horizontal separation between the projected head centers increases monotonically. The independently rendered rear-head mask also becomes progressively more exposed as foreground occlusion changes.

| Camera translation | Near head x | Far head x | Relative head-center separation | Far-head mask outside near person |
| ---: | ---: | ---: | ---: | ---: |
| 0 cm | 721.63 px | 732.68 px | 11.05 px | 5.81% |
| 10 cm | 630.81 px | 677.94 px | 47.12 px | 25.02% |
| 20 cm | 540.00 px | 623.20 px | 83.20 px | 54.60% |
| 30 cm | 449.19 px | 568.46 px | 119.28 px | 83.13% |
| 40 cm | 358.37 px | 513.73 px | 155.35 px | 100.00% |

The analytical prediction is `144.31 px` additional relative head-center displacement for the complete 40 cm track; the rounded five-station rendered measurement changes by `144.30 px`. Discrepancy is rounding only.

**Scope of metric:** mask area measures geometric nonocclusion, not what a human perceives. A viewer might see two people immediately; two distinct silhouette plates may also look like an animation instead of a physical camera move. Neither outcome can be decided from pixel math.

### B. Equipment model — independently verified hardware assumption

- ARRI ALEXA 35 nominal 4.6K Open Gate sensor: **27.99 × 19.22 mm**, ARRI manufacturer technical specification: https://www.arri.com/en/cine-systems/cine-cameras/legacy-cine-cameras/alexa-35
- This is a **modeled 9:16 center crop**, not an assertion that the camera directly records the crop: active vertical height 19.22 mm, width `19.22 × 9/16 = 10.81125 mm`.
- Rectilinear 40 mm focal length. 1080 × 1920 projection. Camera height 1.55 m.
- Near proxy: `(x,z)=(0.000,4.400)m`. Rear proxy: `(0.152,7.300)m`. Camera x from `-0.20m` to `+0.20m`, fixed orientation.
- Horizontal projection: `screen_x = 540 + fpx * (world_x - camera_x) / world_z`, `fpx = 1080 × 40/10.81125`.
- Relative disparity derivative: `d(separation)/d(camera_x) = fpx × (1/zNear - 1/zFar)`.
- No lens distortion, realistic light-transport, shadows, measured set geometry, depth of field, focal breathing or performer microexpression are simulated.

### C. Six deliberate boundaries

1. **This is an abstract rig, not an exact Dellwood Motel Room 14 scene-source reconstruction.** A source shot or real location geometry has not been mounted or verified at G01A.
2. **The proxies are anonymous graphic humanoids, not new Thoreau, Mimic, Beni or any other approved character plates.** Preserve later face/body/hair/wardrobe locks and the ten source-sheet SHA registry from G01.
3. **The start plate is not scientifically guaranteed to be a “single person” to observers.** The rear-head mask is 5.81% exposed even before the dolly.
4. **Closing one eye does not make hidden phone pixels appear.** The creative mechanism is a changing camera viewpoint; do not conflate this with binocular stereopsis.
5. **SH-G07 retirement firewall remains fully active:** no Twelve Photographs, Recorder A/B, predictive recordings/audio, evidence puzzles, displaced objects, hand following/correction, or tapping.
6. **No video, AI generation, paid credit, public release, narrative canon lock, or production merge** is triggered by this result.

### D. Validation receipt

**Automated gates:** PASS for field-of-view math, stated sensor crop aspect, immutable two-figure world coordinates, five 0/10/20/30/40 cm stills, monotonic relative head-center displacement, monotonic rear-head exposure and independent pinhole analytical expectation. Included in the separate ZIP: `source/render_geometry.py`, `source/validate_geometry.py`, `G01A_OFFLINE_VIEWPOINT_REVIEW.html`, `G01A_OFFLINE_BLIND_READ_TEST.html`, all stills, CSV and ten-page PDF.

**NOT validated:** any human viewer, actual Room 14 source match, performer identities, motivated performance, continuity of real wardrobe, accurate production lighting, rendered moving footage, or distribution appeal. Do not mark G01A perceptual success or G01B eligibility on this document alone.

### E. Next allowed evidence collection — G01A.1

1. Founder compares A/B proxy and floor plan to G01 intent. Reject or revise if concept relies on a hidden prop trick or a false eye-closing claim.
2. Run **8–12 independent** cold reads on real devices; record binocular/monocular condition. Show A briefly, hide and ask person count; show B, hide and ask person count and what physically changed.
3. Preliminary G01 targets: >=60% change initial interpretation and >=70% accurately understand that two separately present people were revealed. These are internal exploration thresholds, **not** research findings.
4. Stop if most viewers interpret the second figure as a teleportation, editing trick or morph. Review physical blocking and re-test; do not simply add exposition or CGI.
5. Mount and verify the actual shot/location reference before exact reconstruction. Founder must explicitly PASS / REVISE / REJECT.

**Disposition:** independent geometry **PASS**; perceptual audience proof **HOLD**; character/source matching **HOLD**; video/motion **STOP**.

_This file is versioned and may not be silently rewritten. Supersede only with G01A V002+ and a change register / independent QC._
