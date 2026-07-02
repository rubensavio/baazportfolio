/**
 * Vision Intelligence case study data.
 * Surfaced at /technologies/vision-intelligence/case-studies and linked from
 * the Vision Intelligence technology page. Describes a Human Activity
 * Intelligence Platform Baaz engineered.
 */
export const VISION_INTELLIGENCE_CASE_STUDY = {
  label: "Vision Intelligence - Case Study",
  title: "We turn real human work into robot-ready datasets",
  summary:
    "Robotics and foundation-model teams don't fail on algorithms - they fail on data. We built an end-to-end pipeline that captures real-world tasks from a wearable camera and auto generates structured, labeled, human-verified datasets in every major training format.",
  metaTitle: "Video Annotation - Vision Intelligence Case Study | Baaz",
  metaDescription:
    "How Baaz built a vision-intelligence platform that turns real human activity into structured, robot-ready training datasets - wearable capture, AI annotation, human review, knowledge graphs, and one-click export to LeRobot, RLDS, Open X-Embodiment, DROID and more.",
  overview:
    "Robotics and foundation-model teams are bottlenecked by data: real-world demonstrations are expensive to capture and even harder to label consistently. This platform closes that gap with an end-to-end pipeline. A worker wears a camera and performs a task; computer vision automatically understands every moment - extracting actions, objects, and context frame by frame - and turns it into reviewable, version-controlled datasets. What synthetic data cannot replicate, we capture from real human activity.",
  metrics: [
    { value: "94%", label: "Hand detection accuracy" },
    { value: "92%", label: "Action detection accuracy" },
    { value: "88%", label: "Object detection accuracy" },
    { value: "7", label: "Training formats supported" },
  ],
  whyChoose: [
    {
      title: "Real Data, Not Synthetic",
      description:
        "Synthetic data can't replicate the noise, variation, and edge cases of real human work. We capture it at the source - from an actual worker doing an actual task.",
    },
    {
      title: "Every Label, Human-Verified",
      description:
        "Computer vision does the first pass. A structured human review queue approves, corrects, or rejects every annotation before it ships - so nothing reaches your training set unchecked.",
    },
    {
      title: "Export-Ready, Not Just Labeled",
      description:
        "Datasets are versioned, quality-scored, and exportable in the format your training pipeline already expects - LeRobot, RLDS, Open X-Embodiment, DROID, and more.",
    },
    {
      title: "Built for Scale, Pilot to Production",
      description:
        "Start with a single wearable capture session. Scale to fleets of workers, thousands of episodes, and continuous dataset growth - without changing your pipeline.",
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Capture",
      description:
        "A worker wears a camera - smart glasses, a helmet cam, or a mobile device - and performs the task naturally. Voice intent captures context as it happens, with no separate documentation step.",
    },
    {
      step: "02",
      title: "Upload",
      description:
        "Footage streams securely to the cloud. Upload is resumable and offline-capable, so capture in the field never depends on a live connection.",
    },
    {
      step: "03",
      title: "Process",
      description:
        "Computer vision analyzes every frame automatically - extracting actions, objects, and steps, and scoring each with a confidence level.",
    },
    {
      step: "04",
      title: "Review",
      description:
        "Every AI-generated label passes through a human review queue. Reviewers approve, correct, or reject before anything is marked final.",
    },
    {
      step: "05",
      title: "Export",
      description:
        "Approved episodes become versioned, quality-scored datasets - ready to export directly into your training pipeline.",
    },
  ],
  capabilities: [
    {
      title: "Wearable Capture",
      description:
        "Record any task with smart glasses, helmet cams, or mobile devices, with reliable offline sync built in.",
    },
    {
      title: "AI-Powered Processing",
      description:
        "The model automatically understands every moment of footage - extracting actions, objects, and context without manual tagging.",
    },
    {
      title: "Smart Annotations",
      description:
        "Every chunk of footage is labeled with objects, actions, transcript, and a confidence score - generated automatically, not typed by hand.",
    },
    {
      title: "Episode Builder",
      description:
        "Individual annotated chunks are merged into complete task workflows, complete with steps, tools used, and a knowledge graph.",
    },
    {
      title: "Human Review Queue",
      description:
        "A built-in quality assurance layer where reviewers approve, reject, or modify AI-generated labels before a dataset is finalized.",
    },
    {
      title: "Dataset Export",
      description:
        "One-click export to LeRobot, RLDS, Parquet, or JSONL - version-controlled, with a quality score attached to every dataset.",
    },
  ],
  modules: [
    {
      title: "Live Record",
      description:
        "Wearable capture with a live camera preview and voice-driven task intent, so context is captured in real time - not reconstructed later.",
    },
    {
      title: "Episodes",
      description:
        "Captured footage chunks assembled automatically into complete, step-by-step task workflows - steps, tools, and timing intact.",
    },
    {
      title: "Review Queue",
      description:
        "The human-in-the-loop layer for QA - approve, reject, or correct AI labels before they ship into a dataset.",
    },
    {
      title: "Datasets",
      description:
        "Versioned, quality-scored datasets, ready to export to any supported training format - with full lineage on every release.",
    },
    {
      title: "Knowledge Graph",
      description:
        "Actions and objects mapped across every episode, with occurrence counts and average confidence scores.",
    },
    {
      title: "Search & Analytics",
      description:
        "Search episodes by action or annotation, and track episode counts, duration, annotation volume, and confidence trends over time.",
    },
  ],
  useCases: [
    {
      title: "Foundation Model Training",
      description:
        "High-quality, multimodal datasets for training next-generation AI models on real-world human activity.",
    },
    {
      title: "Robotics & Manipulation",
      description:
        "Real-world demonstrations exported in LeRobot format, ready for robot learning and manipulation research.",
    },
    {
      title: "Agent Training",
      description:
        "Step-by-step task workflows that teach autonomous agents how real tasks actually unfold, not just how they're described.",
    },
    {
      title: "Enterprise SOPs",
      description:
        "Auto-generate standard operating procedures directly from expert demonstrations - no manual documentation required.",
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
