# G01A.1 Blinded Response Trial — Controlled Human Protocol V001
**Status:** Registered, **NO participant data observed**. **Use:** human perception exploration only, no product or film approval.

## Primary protocol
1. Recruit **8–12 separate binocular viewers** for the primary trial; optional monocular group separate, not pooled.
2. Use exact unannotated G01A A/B stills from the separately provided offline local package, 1080 × 1920, identical display size, ideally phone portrait.
3. Say: **“You will see two images separately for four seconds each. Answer what you saw.”** Do not tell them a second person, moving camera, eye-closing trick, or Mimic is the hypothesis.
4. Present A for 4 seconds and hide it. Ask whether they saw one / two or more / unsure.
5. Present B for 4 seconds and hide. Ask same count and open response: **“What, if anything, physically changed between the images?”**
6. Capture locally exported anonymous CSV. Retain original text and trial exclusion reasons. Facilitation cannot disclose the answer until completed.
7. Have a person *independent from the viewer* manually code the three `scorer_*` columns. Open-ended text is not automatically classified. Use two raters for ambiguity and record disagreement.
8. Score only complete, documented, independent valid primary binocular rows. Scores are descriptive proportions, not statistically representative.

## Corrected CSV contract (G01A.1)
`viewer_code,created_local_iso,viewing_condition,device,pre_count,post_count,causal_explanation,scorer_revised_interpretation,scorer_understands_two_physical_people,scorer_camera_motion_identified,exclusion_reason,reviewer_notes,software_version`

`scorer_revised_interpretation=yes` means a clear changed reading of the initial people count/arrangement, not simply that picture B differs.
`scorer_understands_two_physical_people=yes` means viewer explicitly describes two physically distinct people existing at both times (not a morph/teleport).
`scorer_camera_motion_identified=yes` means viewer attributes the change to camera/viewpoint, rather than actor repositioning or an editing effect.

### Automatic STOP / HOLD conditions
- Less than 8 valid binocular participants → **HOLD**, no sample percentage/acceptance claim.
- Human scorer column missing/ambiguous → **HOLD**, no invented scoring.
- Significant exposure to labeled comparison before session, technical failure, previous exposure, or cueing → document exclusion reason; never quietly drop.
- Thresholds as exploratory screening only: >=60% revised interpretation, >=70% separate people **and** camera motion. Not a scientific significance or marketing conversion standard.
- Still-to-still inference of camera motion can be difficult even for a valid moving-camera concept; capture separate qualitative reasons.

The offline HTML and Python validator are available in the G01A.1 local evidence ZIP; **no model-generated audience records** are allowed.
**Canon / shot rights / motion / paid credits:** NONE until separate founder sign-off after tests, exact source-plate qualification, identity reconciliation and independent review.