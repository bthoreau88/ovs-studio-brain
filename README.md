# OVS Studio Brain

Local MVP for the Omnia Vanitas Studios creative operating system.

## Run

```bash
cd OVS_Studio_Brain_App
npm run start
```

Then open `http://localhost:4173`.

The app is dependency-free and stores data in browser `localStorage`.

## Hosting

GitHub Pages publishes the repository root from `main`. Because the app uses hash routes and browser storage, it works directly from a Pages subdirectory without server-side routing.

## Implemented

- Dashboard with active project, reference, prompt, deliverable, and QC panels.
- Projects with intake, project detail, edit, and delete.
- References with capture form, rights status, tags, scorecard, filters, and decode view.
- Prompt Factory with ten OVS templates, including a selectable 34-treatment lighting/relighting prompt, and copy-to-clipboard.
- Characters with identity locks, wardrobe, face notes, and performance notes.
- Deliverables with status, approval, publish/export fields, and notes.
- Studio-wide search across all local collections.
- Export Center for JSON and Markdown project handoff packages.
- Settings page with supplied OVS logo assets and local backup/reset controls.

## Visual Identity

The active interface identity is documented in:

- `docs/OVS_VISUAL_IDENTITY_LOCK.md`
- `docs/BRAND_UI_RULES.md`

The approved logo is `assets/logos/ovs_umbrella_primary.png`. The files under `assets/identity/` are the locked editorial references used for proportion, typography, grid, rule, and monochrome hierarchy.

## Cinematic Lighting & Relighting (OVS-LIGHT-G01 V001)

The studio lighting standard is versioned in `docs/OVS_CINEMATIC_LIGHTING_SYSTEM_G01_V001.md`. The companion catalog `docs/OVS_LIGHTING_REGISTRY_G01_V001.json` defines **34 numbered lighting treatments**, their dramatic functions, source pages and failure modes. `docs/OVS_LIGHTING_PROMPT_MASTER_G01_V001.md` provides the source-separation prompt, and `docs/OVS_LIGHTING_SHOT_CARD_G01_V001.csv` records shot-level decisions.

In **Prompt Factory**, select **OVS Lighting / Relighting Prompt** and choose one of the LIGHT IDs. The resulting draft requires original performance video + unchanged original audio (A), lighting-only visual reference (B), and approved shot/identity authorities (C). Source identity, camera, props, action, duration, speech and lip-sync must not change. A stored template does **not** authorize paid generation, guarantee a model output, clear reference-media rights or approve a particular film shot.

**Provenance:** [Higgsfield Video lighting guide](https://higgsfield.ai/@responsiveowl1667/blogs/video-lighting-guide) / user-provided 74-page reference PDF. Third-party video frames and full reference PDF are intentionally not in this public repository.

## Source Package

The original handoff package is preserved at:

`../OVS_Studio_Brain_Project_Package`

The build follows the PRD, schema, and Codex handoff prompt in `10_CODE_HANDOFF`.
