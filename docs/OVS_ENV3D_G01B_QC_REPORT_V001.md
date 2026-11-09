# OVS-ENV-3D-G01B V001 — Native Tesseract QC

**Dated:** 2026-11-09  
**Project:** LIKENESS : SECOND HAND / Dellwood Motel Room 14  
**Disposition:** **HOLD — G01B NATIVE VERIFICATION NOT EXECUTED**  
**Cost:** zero paid generation; **canon:** unchanged; **branch:** `claude/ovs-env3d-g01-v001`.

## Findings

- The MSI desktop was **OFFLINE** at the time of the Remote Desktop Commander check.
- The local alternative container had no `tsrct` CLI installed, no accessible GPU device (`/dev/dri` absent), and GitHub network resolution unavailable. Presence of the Vulkan loader does **not** establish functional rendering.
- Consequently **no native Tesseract smoke render, GLB import, model diagnostics, three-camera renders, light-only rerender, editable `.tsrct` project, or reopen/re-render test was performed**. None may be marked PASS.

## Verified input audit

The supplied `ROOM14_PROXY_G01_V001.glb` loads with Trimesh and matches `ROOM14_SCENE_MANIFEST.json`:
- 259 individual mesh objects and 259 matching manifest records
- 3,348 triangles; 2,214 vertices
- no empty meshes or nonfinite vertex coordinates
- meter units; extents X [-3.805,3.805], Y [0,6], Z [-0.24,2.805]
- GLB SHA-256: `0240b096ed2f952b528508ae95ea695a778c93ca3db0306f74cd66b45f53b1b8`

These are **noncanonical provisional geometry measurements**, not the approved still's original camera solve.

## Gate table

| Test | Result |
|---|---|
| GLB structure, geometry and manifest parity | PASS |
| Remote MSI availability | BLOCKED |
| CLI 0.6.0 and `createFxScene3DLayer` schema | NOT RUN |
| Native cube/camera/light smoke preview | NOT RUN |
| Native GLB import and conversion diagnostics | NOT RUN |
| Three native camera/light views | NOT RUN |
| Tungsten-only modification and rerender | NOT RUN |
| Save/reopen `.tsrct` and rerender | NOT RUN |
| Real Tesseract render timings | NOT RUN |

## Native requirements and hard stop

The official Mirage **tesseract-3d** skill pins CLI version **0.6.0** and requires the schema to support `createFxScene3DLayer`. The original GLB uses **meters, +Z up**; Tesseract's authored Scene3D is **pixels, X right/Y down/Z depth**. Imported GLB maintains its original orientation; transform camera/light poses with proper `pixelsPerMeter` and **do not blindly copy XYZ or rotate 90 degrees**.

Official installation: https://github.com/mirage-hq/Tesseract/blob/main/skills/tesseract-3d/references/install-cli.md . Official import guide: https://dev.mirage.app/tesseract/features/3d-model-import

## Finish G01B when MSI is online

1. Run the provided `G01B_WINDOWS_PREFLIGHT.ps1` (downloadable in the ChatGPT handoff ZIP): check source SHA-256, device, GPU, installed CLI and Scene3D schema without installing anything.
2. Obtain and verify official v0.6.0 installer/checksum if required; respect Windows security warnings.
3. Execute a true native smoke preview.
4. Import the immutable GLB and preserve conversion diagnostics.
5. Author and render three actual native camera/light views; perform a light-only revision without changing geometry.
6. Save and reopen an editable native `.tsrct`, rerender, and capture full test evidence.
7. Hold G01C and any canon promotion until separate founder review.

**Do not confuse the original G01A VTK software renders with Tesseract output. No native Tesseract file is included in the current package.**
