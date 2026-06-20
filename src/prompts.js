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
  }
];

export function buildPrompt(templateName, context) {
  const template = promptTemplates.find((item) => item.name === templateName) || promptTemplates[0];
  return template.body(context);
}
