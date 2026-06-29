/**
 * Vision Intelligence case study data.
 * Surfaced at /technologies/vision-intelligence/case-studies and linked from
 * the Vision Intelligence technology page. Content is sourced from the HAIP
 * platform (Human Activity Intelligence Platform).
 */
export const VISION_INTELLIGENCE_CASE_STUDY = {
  label: "Vision intelligence - Case study",
  title: "HAIP: turning real human work into robot-ready datasets",
  summary:
    "A computer-vision platform that goes from wearable camera to training set - capturing real-world tasks and auto-generating structured, labeled AI and robotics datasets, end to end, with every label verified.",
  metaTitle: "HAIP - Vision Intelligence Case Study | Baaz",
  metaDescription:
    "How Baaz built HAIP, a vision-intelligence platform that turns real human activity into structured, robot-ready training datasets - wearable capture, AI annotation, human review, knowledge graphs, and one-click export to LeRobot, RLDS, Open X-Embodiment, DROID and more.",
  overview:
    "Robotics and foundation-model teams are bottlenecked by data: real-world demonstrations are expensive to capture and even harder to label consistently. HAIP closes that gap with an end-to-end pipeline. A worker wears a camera and performs a task; computer vision automatically understands every moment - extracting the actions, objects, and context frame by frame - and turns it into reviewable, version-controlled datasets in every major training format. What synthetic data cannot replicate, HAIP captures from real human activity.",
  metrics: [
    { value: "94%", label: "Hand detection accuracy" },
    { value: "92%", label: "Action (slide) detection" },
    { value: "88%", label: "Object (bottle) detection" },
    { value: "7", label: "Training formats supported" },
  ],
  workflow: [
    {
      step: "01",
      title: "Capture",
      description:
        "A worker wears a camera and performs the task. Voice intent captures the task context as it happens.",
    },
    {
      step: "02",
      title: "Upload",
      description:
        "Footage streams securely to the cloud - resumable and offline-capable, so capture never depends on connectivity.",
    },
    {
      step: "03",
      title: "Process",
      description:
        "Computer vision analyzes the footage automatically, labeling every action, object, and step with confidence scores.",
    },
    {
      step: "04",
      title: "Export",
      description:
        "Approved episodes become versioned datasets, ready for AI and robotics training.",
    },
  ],
  capabilities: [
    {
      title: "Wearable capture",
      description:
        "Record any task with smart glasses, helmet cams, or mobile devices - with reliable offline sync.",
    },
    {
      title: "AI processing",
      description:
        "The model automatically understands every moment, extracting actions, objects, and context from raw footage.",
    },
    {
      title: "Smart annotations",
      description:
        "Every chunk is labeled with objects, actions, transcript, and confidence scores - no manual tagging.",
    },
    {
      title: "Episode builder",
      description:
        "Individual chunks are merged into complete task workflows with steps, tools, and knowledge graphs.",
    },
    {
      title: "Human review",
      description:
        "A built-in review queue for quality assurance - approve, reject, or modify AI-generated labels before shipping.",
    },
    {
      title: "Dataset export",
      description:
        "Export to LeRobot, RLDS, Parquet, or JSONL - version-controlled with quality scoring.",
    },
  ],
  modules: [
    {
      title: "Live Record",
      description:
        "Wearable capture with a live camera preview and voice-driven task intent.",
    },
    {
      title: "Episodes",
      description:
        "Captured chunks assembled into complete, step-by-step task workflows.",
    },
    {
      title: "Review Queue",
      description:
        "Human-in-the-loop QA to approve, reject, or correct AI labels.",
    },
    {
      title: "Datasets",
      description:
        "Versioned, quality-scored datasets ready to export to any training format.",
    },
    {
      title: "Knowledge Graph",
      description:
        "Actions and objects mapped across episodes with occurrences and average confidence.",
    },
    {
      title: "Search & Analytics",
      description:
        "Search episodes by action or annotation; track episodes, duration, annotations, and confidence.",
    },
  ],
  useCases: [
    {
      title: "Foundation model training",
      description:
        "High-quality multimodal datasets for training next-gen AI models.",
    },
    {
      title: "Robotics & manipulation",
      description:
        "Real-world demonstrations in LeRobot format for robot learning.",
    },
    {
      title: "Agent training",
      description:
        "Step-by-step task workflows to train autonomous agents.",
    },
    {
      title: "Enterprise SOPs",
      description:
        "Auto-generate standard operating procedures from expert demonstrations.",
    },
  ],
  exportFormats: [
    "LeRobot",
    "RLDS",
    "Open X-Embodiment",
    "DROID",
    "AgiBot World",
    "Parquet",
    "JSONL",
  ],
};
