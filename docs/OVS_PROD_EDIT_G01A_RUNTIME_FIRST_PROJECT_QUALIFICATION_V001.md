# OVS-PROD-EDIT-G01A V001 — Runtime Verification + First Real Project Qualification

**Studio:** Omnia Vanitas Studios (OVS)  
**Date:** 2026-11-08  
**Parent authority:** OVS-PROD-EDIT-G01 V001  
**Disposition:** PARTIAL PASS / HOLD  
**Canon effect:** NONE  
**Paid generation:** NOT AUTHORIZED  
**Project mutation:** NONE  
**Selected proving lane:** THOREAU 3D / LIKENESS interactive production lane, Blender-first

## 1. Gate objective

Prove that the new editable-production standard can route a real OVS project into a locally available application without silently replacing source authority, flattening editability, or claiming control that is not actually available.

The first proving lane is Blender because the connected workstation currently exposes a verifiable Blender installation and active Blender-related MCP processes.

This gate is a runtime/source qualification only. It does not authorize identity reconstruction, mesh repair, rigging, texture alteration, scene redesign, paid generation, canon promotion, or final asset export.

## 2. Candidate project

**Candidate:** Thoreau 3D identity / LIKENESS interactive production lane  
**Known intended source:** `1_8_2024.glb` (previously registered in OVS project context as a partial Thoreau scan)  
**Intended workflow:** `/Scene-Builder — Blender`  
**Setup authority:** `/use-blender`  
**Native editable authority:** `.blend`  
**Portable derivative:** `.glb` only after source qualification and explicit project-level approval

### Why this is the correct first test
- It exercises a native editable 3D authority rather than a flattened render.
- It can verify source import, object hierarchy, transforms, materials, camera, lights, and later controlled reconstruction.
- It has a clear source-versus-proxy distinction.
- The MSI currently has Blender installed, making the route testable without inventing a toolchain.

## 3. Runtime verification evidence

### Connected workstation
- Device: **MSI**
- OS: Windows x64
- Remote workstation connection: **ONLINE**
- Desktop Commander runtime available.

### Blender installation
Verified on the workstation at:

`C:\Program Files\Blender Foundation\Blender 5.1\blender.exe`

Native version command returned:

`Blender 5.1.2`

Build date reported by the executable: 2026-05-19.

**Runtime result:** PASS — Blender is installed and executable on the selected workstation.

### Existing Blender-related MCP processes
Two running processes named `blender-mcp.exe` were observed under a Claude extension environment:

`C:\Users\thore\AppData\Roaming\Claude\Claude Extensions\ant.dir.gh.blender.blender-mcp\.venv\Scripts\blender-mcp.exe`

**Important:** these processes do **not** establish that the Higgsfield `/use-blender` control surface is available to this ChatGPT conversation.

## 4. Higgsfield workflow verification

The Higgsfield `/use-blender` verification contract requires the conversation to expose:
- `bl_health`
- `bl_get_scene_summary`
- `bl_get_skill`
- `bl_open_project`
- `bl_save_project`
- `bl_render`

Those tools are **not exposed in this conversation**.

Higgsfield's own verification rule states that a working shell or doctor result is not sufficient evidence that the conversation can control Blender.

**Higgsfield control result:** HOLD — local Blender exists, but conversation-level Higgsfield Blender control has not been proven.

No reinstall was attempted because a working local Blender environment and unrelated Blender MCP processes already exist; the standard explicitly forbids reinstalling merely because the current client does not expose the required tools.

## 5. Source qualification

### Library / conversation search
Searches were performed for:
- `1_8_2024.glb`
- Thoreau 3D scan / GLB descriptors
- prior Thoreau GLB pipeline materials

The exact production scan was not found.

Existing Library records do confirm an older **proxy-only** Thoreau GLB workflow and explicitly state that the proxy must not be treated as the final identity-locked model.

### MSI bounded search
A bounded local search under:

`C:\Users\thore`

did not locate:
- `1_8_2024.glb`
- the prior `create_thoreau_proxy_glb.py` file

The search window was bounded and therefore does not prove the file is absent from every attached volume or external drive.

**Source result:** HOLD — the exact real source asset is not mounted/qualified in the current proving environment.

## 6. Proxy firewall

The historical Blender proxy pipeline is useful for:
- movement tests
- scale tests
- GLB web-loader tests
- interaction tests
- pipeline smoke tests

It is **not** acceptable evidence for this gate's real-source qualification.

Therefore:
- no procedural proxy was generated,
- no proxy was promoted,
- no placeholder was relabeled as `1_8_2024.glb`,
- no identity conclusions were drawn from proxy geometry.

This prevents a false G01A pass.

## 7. Gate checklist

| Requirement | Result | Evidence / note |
|---|---|---|
| Real workstation reachable | PASS | MSI online |
| Target application installed | PASS | Blender 5.1.2 |
| Target executable verified | PASS | Native Blender executable path confirmed |
| Native editable format defined | PASS | .blend |
| Workflow selected by production problem | PASS | Scene-Builder / Blender |
| Higgsfield setup instructions loaded | PASS | /use-blender + verification contract inspected |
| Higgsfield conversation control verified | HOLD | required bl_* tools absent |
| Exact real source located | HOLD | 1_8_2024.glb not located in current Library/MSI bounded search |
| Existing source left untouched | PASS | no project mutation |
| Proxy kept separate from production authority | PASS | no proxy promotion/generation |
| Paid generation | PASS | none |
| Canon mutation | PASS | none |

## 8. Disposition

**OVS-PROD-EDIT-G01A V001 = PARTIAL PASS / HOLD**

The routing logic is validated:
- Blender is the correct first application for this candidate.
- Blender is genuinely installed and executable.
- Native editability requirements are defined.
- Source/proxy authority remains correctly separated.

The gate does **not** close because two mandatory proofs are missing:
1. conversation-level Higgsfield `bl_*` control;
2. the exact real Thoreau source asset mounted and hash-qualified.

## 9. Next legitimate sub-gate

### OVS-PROD-EDIT-G01A.1 — Higgsfield Blender Control Bridge + Real Source Mount

Required exit evidence:
1. `bl_health` returns Blender version, PID, background=true, active file and scene;
2. `bl_get_scene_summary` succeeds in the same session;
3. exact `1_8_2024.glb` (or founder-designated replacement real source) is located;
4. SHA-256 and file size are recorded before import;
5. source is copied/mounted into a controlled working path without altering the original;
6. a no-op import/open inspection proves object/material/texture state;
7. an editable `.blend` is saved to a **new** output path;
8. no reconstruction or identity modification occurs until founder review of the intake proof.

**STOP after G01A.1 proof.**
