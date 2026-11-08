// OVS-LIGHT-G01 V001: UI selection must match docs/OVS_LIGHTING_REGISTRY_G01_V001.json.
export const lightingLooks = [
  { id: "LIGHT-01", name: "High-key", plan: "broad high-key frontal fill" },
  { id: "LIGHT-02", name: "Low-key", plan: "soft single key with deep controlled negative fill" },
  { id: "LIGHT-03", name: "Rembrandt", plan: "raised 45-degree key, far-cheek triangle" },
  { id: "LIGHT-04", name: "Butterfly (Paramount)", plan: "high frontal face key, small nose shadow" },
  { id: "LIGHT-05", name: "Split", plan: "hard 90-degree split key" },
  { id: "LIGHT-06", name: "Loop", plan: "soft slightly off-axis key and short nose shadow" },
  { id: "LIGHT-07", name: "Broad", plan: "key nearer camera-facing cheek" },
  { id: "LIGHT-08", name: "Short", plan: "key far cheek, near cheek in shadow" },
  { id: "LIGHT-09", name: "Chiaroscuro", plan: "directed painterly key into deep blacks" },
  { id: "LIGHT-10", name: "Silhouette", plan: "bright background and unlit foreground shape" },
  { id: "LIGHT-11", name: "Rim / backlight", plan: "back/rim source tracing hair and wardrobe" },
  { id: "LIGHT-12", name: "Hard light", plan: "compact hard source and crisp cast shadows" },
  { id: "LIGHT-13", name: "Soft light", plan: "large diffused source and gentle roll-off" },
  { id: "LIGHT-14", name: "Bounce", plan: "indirect reflected fill from existing surroundings" },
  { id: "LIGHT-15", name: "Top light", plan: "one overhead source and shadowed sockets" },
  { id: "LIGHT-16", name: "Under lighting", plan: "one low uplight and upward shadow directions" },
  { id: "LIGHT-17", name: "Golden hour", plan: "low warm sun with long shadows" },
  { id: "LIGHT-18", name: "Blue hour", plan: "soft blue dusk ambient" },
  { id: "LIGHT-19", name: "Day-for-night", plan: "controlled day-for-night darkening with sun/sky checks" },
  { id: "LIGHT-20", name: "Moonlight", plan: "low silver-blue exterior moon source" },
  { id: "LIGHT-21", name: "Window light", plan: "single large off-screen window-side source" },
  { id: "LIGHT-22", name: "Practical", plan: "existing tungsten lamp pools" },
  { id: "LIGHT-23", name: "Firelight / candlelight", plan: "warm firelike source with constrained flicker" },
  { id: "LIGHT-24", name: "Venetian blinds", plan: "parallel slatted shadow from established blinds" },
  { id: "LIGHT-25", name: "Dappled / gobo", plan: "motivated patterned sunlight through foliage or gobo" },
  { id: "LIGHT-26", name: "Volumetric (god rays)", plan: "credible haze rays from an established source" },
  { id: "LIGHT-27", name: "Overcast / flat", plan: "soft overcast grey ambient" },
  { id: "LIGHT-28", name: "Neon", plan: "saturated motivated off-screen neon" },
  { id: "LIGHT-29", name: "Teal & orange", plan: "warm skin key and teal environment separation" },
  { id: "LIGHT-30", name: "Monochrome red", plan: "motivated deep red wash with controlled shadow separation" },
  { id: "LIGHT-31", name: "Screen glow", plan: "soft cool localized off-screen screen bounce" },
  { id: "LIGHT-32", name: "Passing light", plan: "light beam traverses geometry with time-consistent tracking" },
  { id: "LIGHT-33", name: "Strobe / flicker", plan: "intermittent controlled light; PHOTOSENSITIVITY HOLD" },
  { id: "LIGHT-34", name: "Theatrical spotlight", plan: "hard focused spot with preserved dark space" }
];

export const promptTemplates = [
  {
    name: "Brainstorming Prompt",
    target: "LLM / strategy",
    body: ({ project }) =>
      `Act as the Omnia Vanitas Studios creative strategy brain. Develop 12 original campaign directions for ${project.name}. Objective: ${project.objective}. Audience: ${project.audience}. Stay inside these brand rules: ${project.brand_rules}. Wrong if: ${project.wrong_if_rules}.`
  },
  {
    name: "Visual Decode Prompt",
    target: "LLM / analysis",
    body: ({ reference }) =>
      `Analyze this reference for OVS use. Title: ${reference.title}. Source: ${reference.url}. Extract composition, camera distance, lens logic, lighting, palette, type hierarchy if present, material texture, era cues, emotional tone, audience promise, and what must not be copied. Current read: ${reference.surface_read}`
  },
  {
    name: "Private Recreation Study Prompt",
    target: "Image generation",
    body: ({ project, reference }) =>
      `Private study only. Recreate the structural grammar of ${reference.title} without copying protected expression. Preserve only abstract principles: ${reference.structure_read}. Route the study through ${project.visual_territory}. Do not publish.`
  },
  {
    name: "OVS Original-Take Prompt",
    target: "Image generation",
    body: ({ project, reference }) =>
      `Create an original Omnia Vanitas Studios asset for ${project.name}. Use the decoded principles from ${reference.title}: ${reference.ovs_translation}. Brand rules: ${project.brand_rules}. Visual territory: ${project.visual_territory}. Original take: ${reference.original_take}. Do not copy: ${reference.do_not_copy}. Wrong if: ${project.wrong_if_rules}.`
  },
  {
    name: "Runway / Image-to-Video Prompt",
    target: "Runway / video",
    body: ({ project, reference }) =>
      `Generate a controlled image-to-video prompt for ${project.name}. Motion should feel cinematic, restrained, and editorial. Reference grammar: ${reference.production_read}. Emotional tone: ${reference.emotional_read}. Camera: slow, deliberate, no chaotic movement. Wrong if: ${project.wrong_if_rules}.`
  },
  {
    name: "Character Identity Lock Prompt",
    target: "LLM / image generation",
    body: ({ character, project }) =>
      `Create an identity lock for ${character.name} in ${project.name}. Identity: ${character.identity_lock}. Wardrobe: ${character.wardrobe}. Face notes: ${character.face_notes}. Performance: ${character.performance_notes}. Maintain continuity across outputs; no celebrity likeness.`
  },
  {
    name: "Client Pitch Prompt",
    target: "LLM / pitch",
    body: ({ project }) =>
      `Write a concise client-facing pitch for ${project.name}. Explain the objective, audience, visual territory, deliverables, production logic, and why the OVS approach is distinctive. Keep the tone premium, editorial, and direct.`
  },
  {
    name: "QC Prompt",
    target: "LLM / critique",
    body: ({ project }) =>
      `Compare this output against the ${project.name} brief. Identify what works, what drifts, what feels generic, what should be regenerated, and which prompt or reference rule should be updated. Wrong if: ${project.wrong_if_rules}.`
  },
  {
    name: "Archive Write-Back Prompt",
    target: "LLM / documentation",
    body: ({ project }) =>
      `Summarize the completed work for ${project.name} as an OVS archive note. Include final deliverables, source references, rights notes, prompt lessons, QC findings, reusable rules, and next actions.`
  },
  {
    name: "OVS Lighting / Relighting Prompt",
    target: "Video relighting / Resolve / VFX",
    body: ({ project, reference, lighting_style }) => {
      const chosen = lightingLooks.find((item) => item.id === lighting_style) || lightingLooks[0];
      return [
        `OVS-LIGHT-G01 V001 — ${chosen.id}: ${chosen.name}. Project: ${project?.name || "[PROJECT]"}.`,
        `Story purpose: [SPECIFIC DRAMATIC BEAT]. Light plan: ${chosen.plan}.`,
        "Attach INPUT A: the exact original moving image WITH original recorded audio. A alone controls people, identity, skin, hair, wardrobe, scene geometry, props, framing, lens, timing, facial performance, camera motion, dialogue, lip sync and audio.",
        `Attach INPUT B: a lighting-only visual reference, if rights permit. Current project reference record: ${reference?.title || "none"} (${reference?.url || "no URL"}). Only use this if it is actually a qualified lighting reference. Do not copy people, environment, composition or props from B; B is NEVER the start frame.`,
        "CANON C: check the approved project face/body/wardrobe/scene authorities. No face improvement, added objects, skin-tone substitution, synthetic smoothing or camera/performance edits.",
        "Apply lighting and color changes ONLY; keep shadow/falloff/reflections coherent through movement, retain natural skin texture, unchanged speech and sound, identical duration, fps and frame order. If source lighting is impossible, report a hold; do not fabricate a new scene.",
        `Project constraints: ${project?.brand_rules || "Use approved OVS authority"}; wrong if: ${project?.wrong_if_rules || "identity, geometry, audio or motion changes"}.`,
        "Make an untouched A control and compare B (physical/Resolve/VFX) with C (synthetic only if separately authorized). Before production, verify source hashes, usage rights, shadow tracking, face/body, complexion, highlights, background, original audio and flicker safety. LIGHT-33 requires photosensitivity review.",
        "No paid generation, canon approval or export granted by this prompt. Human review required. Master spec: docs/OVS_LIGHTING_PROMPT_MASTER_G01_V001.md."
      ].join("\n\n");
    }
  }
];

export function buildPrompt(templateName, context) {
  const template = promptTemplates.find((item) => item.name === templateName) || promptTemplates[0];
  return template.body(context);
}
