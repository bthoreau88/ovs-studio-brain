export const nowIso = () => new Date().toISOString();

export const uid = (prefix) =>
  `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

export const seedData = {
  projects: [
    {
      id: "proj_omnia_archive",
      name: "Omnia Archive Campaign",
      type: "Editorial AI campaign",
      status: "Active",
      objective: "Build a luxury reference-led campaign system for OVS prompt packs and cinematic stills.",
      audience: "Creative directors, film-fashion clients, and internal studio development.",
      deliverables: "Prompt pack, image set, pitch deck, export package",
      brand_rules: "Black field, cream typography, antique gold rules, restrained OVS mark, no loud SaaS styling.",
      visual_territory: "Archive room, couture texture, old-world print discipline, cinematic darkness.",
      wrong_if_rules: "Feels playful, copies a reference directly, loses the skull/umbrella restraint, or looks generic.",
      created_at: "2026-06-19T10:30:00.000Z",
      updated_at: "2026-06-19T10:30:00.000Z"
    },
    {
      id: "proj_vanitas_runway",
      name: "Vanitas Runway Video Study",
      type: "Runway / image-to-video",
      status: "Planning",
      objective: "Turn decoded fashion references into controlled motion prompts for short vertical video.",
      audience: "Internal OVS testing and future client pitch examples.",
      deliverables: "Runway prompt set, QC notes, motion reference board",
      brand_rules: "Cinematic, severe, elegant. Every output must retain OVS mood and rights notes.",
      visual_territory: "Black runway, antique textile detail, candlelit editorial motion.",
      wrong_if_rules: "Looks like a generic fashion ad or uses overdone neon/gloss effects.",
      created_at: "2026-06-19T10:45:00.000Z",
      updated_at: "2026-06-19T10:45:00.000Z"
    }
  ],
  references: [
    {
      id: "ref_public_domain",
      project_id: "proj_omnia_archive",
      title: "Public Domain Review textile archive",
      url: "https://publicdomainreview.org",
      source_type: "Public domain / archive",
      rights_status: "Check item page",
      tags: ["archive", "texture", "public-domain"],
      mood_score: 8,
      structure_score: 7,
      texture_score: 10,
      ovs_fit_score: 9,
      originality_score: 8,
      surface_read: "Aged paper, engraved detail, muted cream and black contrast.",
      structure_read: "Single hero artifact supported by archival captions and negative space.",
      production_read: "Useful for print texture, background plates, and restrained graphic systems.",
      emotional_read: "Historical, tactile, serious, ceremonial.",
      ovs_translation: "Use the material aging and archival restraint, not the source composition.",
      do_not_copy: "Do not reproduce a full plate or recognizable illustration without checking rights.",
      original_take: "Create a new OVS emblem plate with invented symbols, strict margins, and gold ink logic.",
      created_at: "2026-06-19T10:50:00.000Z"
    },
    {
      id: "ref_shotdeck",
      project_id: "proj_vanitas_runway",
      title: "ShotDeck cinematic blocking board",
      url: "https://shotdeck.com/welcome/home",
      source_type: "Film still database",
      rights_status: "Subscription / reference only",
      tags: ["film", "blocking", "lighting"],
      mood_score: 9,
      structure_score: 8,
      texture_score: 6,
      ovs_fit_score: 8,
      originality_score: 7,
      surface_read: "Directional light, deep blacks, precise silhouettes.",
      structure_read: "Subject isolated by negative space and hard light falloff.",
      production_read: "Translate into camera distance, lens language, and light placement.",
      emotional_read: "Controlled, tense, elegant.",
      ovs_translation: "Borrow the blocking grammar and shadow discipline.",
      do_not_copy: "Do not recreate an identifiable frame or character pose.",
      original_take: "Stage a new couture figure in a black void with antique gold edge light.",
      created_at: "2026-06-19T10:55:00.000Z"
    }
  ],
  prompts: [
    {
      id: "prompt_original_take",
      project_id: "proj_omnia_archive",
      reference_id: "ref_public_domain",
      prompt_type: "OVS Original-Take Prompt",
      title: "Archive emblem image prompt",
      prompt_text:
        "Create an original Omnia Vanitas Studios visual system inspired by archival print discipline: black field, warm cream typography, antique gold linework, invented umbrella/skull ritual mark, aged paper texture, strict editorial spacing. Do not copy any source plate.",
      model_target: "Image generation",
      version: "v1",
      quality_score: 8,
      result_notes: "Ready for first image pass.",
      wrong_if_rules: "Wrong if it becomes ornate, playful, neon, or derivative.",
      created_at: "2026-06-19T11:00:00.000Z"
    }
  ],
  characters: [
    {
      id: "char_archivist",
      project_id: "proj_omnia_archive",
      name: "The Archivist",
      identity_lock: "Tall, still, ceremonial posture; obscured gaze; severe black tailoring.",
      wardrobe: "Black wool coat, antique gold clasp, ivory gloves, no bright color.",
      face_notes: "Partially veiled, high contrast light, no celebrity likeness.",
      performance_notes: "Minimal movement, deliberate hand gestures, quiet authority.",
      linked_references: ["ref_public_domain"],
      created_at: "2026-06-19T11:05:00.000Z"
    }
  ],
  deliverables: [
    {
      id: "deliv_prompt_pack",
      project_id: "proj_omnia_archive",
      title: "OVS archive prompt pack",
      format: "Markdown + PDF-ready copy",
      status: "In progress",
      export_path: "exports/omnia-archive-prompt-pack.md",
      publish_link: "",
      approval_status: "Needs QC",
      notes: "Include source notes and wrong-if rules with every prompt.",
      created_at: "2026-06-19T11:10:00.000Z"
    }
  ]
};

export const emptyRecord = {
  projects: {
    name: "",
    type: "",
    status: "Planning",
    objective: "",
    audience: "",
    deliverables: "",
    brand_rules: "",
    visual_territory: "",
    wrong_if_rules: ""
  },
  references: {
    project_id: "",
    title: "",
    url: "",
    source_type: "",
    rights_status: "Needs review",
    tags: [],
    mood_score: 5,
    structure_score: 5,
    texture_score: 5,
    ovs_fit_score: 5,
    originality_score: 5,
    surface_read: "",
    structure_read: "",
    production_read: "",
    emotional_read: "",
    ovs_translation: "",
    do_not_copy: "",
    original_take: ""
  },
  prompts: {
    project_id: "",
    reference_id: "",
    prompt_type: "Brainstorming Prompt",
    title: "",
    prompt_text: "",
    model_target: "Image generation",
    version: "v1",
    quality_score: 5,
    result_notes: "",
    wrong_if_rules: ""
  },
  characters: {
    project_id: "",
    name: "",
    identity_lock: "",
    wardrobe: "",
    face_notes: "",
    performance_notes: "",
    linked_references: []
  },
  deliverables: {
    project_id: "",
    title: "",
    format: "Prompt pack",
    status: "In progress",
    export_path: "",
    publish_link: "",
    approval_status: "Needs QC",
    notes: ""
  }
};

export const navItems = [
  ["dashboard", "Dashboard"],
  ["projects", "Projects"],
  ["references", "References"],
  ["prompts", "Prompt Factory"],
  ["characters", "Characters"],
  ["deliverables", "Deliverables"],
  ["search", "Search"],
  ["export", "Export Center"],
  ["settings", "Settings"]
];

export const rightsStatuses = [
  "Needs review",
  "Check item page",
  "Public domain",
  "Subscription / reference only",
  "Client supplied",
  "Cleared",
  "Do not use"
];

export const projectStatuses = ["Planning", "Active", "In review", "Archived"];

export const deliverableStatuses = ["Queued", "In progress", "Needs QC", "Approved", "Published", "Archived"];
