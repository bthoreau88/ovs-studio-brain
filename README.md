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
- Prompt Factory with nine OVS templates and copy-to-clipboard.
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

## Source Package

The original handoff package is preserved at:

`../OVS_Studio_Brain_Project_Package`

The build follows the PRD, schema, and Codex handoff prompt in `10_CODE_HANDOFF`.
