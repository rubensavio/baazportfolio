/**
 * Detail content for each Vision Intelligence dataset use case.
 * Keyed by the same `slug` used in visionIntelligenceCaseStudy.js `datasets`.
 * Media (video/image/poster/playbackRate) lives with the datasets in
 * visionIntelligenceCaseStudy.js; this file holds the long-form page content.
 * Surfaced at /technologies/vision-intelligence/case-studies/[dataset].
 */
export const DATASET_USE_CASES = {
  traffic: {
    slug: "traffic",
    eyebrow: "Autonomous driving · ADAS · Smart cities",
    title: "Traffic & autonomous-driving annotation",
    metaTitle: "Traffic & Autonomous-Driving Data Annotation | Baaz Vision Intelligence",
    metaDescription:
      "AI-assisted traffic video annotation: per-frame instance masks, multi-object tracking with occlusion handling, and semantic road-scene segmentation-delivered in COCO, YOLO and Pascal VOC.",
    lede: "Traffic video is where annotation quality becomes a safety issue. Perception models for autonomous vehicles, ADAS, and smart-city analytics are only as reliable as the labeled data behind them-and traffic scenes are among the hardest to label: dozens of objects per frame, constant occlusion, tiny distant objects, motion blur, and night scenes.",
    sections: [
      {
        heading: "What we annotate in traffic scenes",
        body: [
          "A production traffic dataset is rarely one label type. It combines several, and our pipeline supports all of them natively in the same project workspace.",
        ],
        table: {
          headers: ["Label type", "Traffic use", "Typical classes"],
          rows: [
            ["Bounding boxes", "Vehicle & pedestrian detection", "car, bus, truck, motorcycle, bicycle, auto-rickshaw, pedestrian"],
            ["Instance segmentation", "Pixel-accurate vehicle shape, free-space", "per-vehicle polygon masks"],
            ["Semantic segmentation", "Road-scene understanding", "road, lane marking, sidewalk, vegetation, sky"],
            ["Video object tracks", "Multi-object tracking (MOT), trajectory", "persistent per-vehicle identity across frames"],
            ["Classification tags", "Scene-level attributes", "day/night, weather, congestion, intersection type"],
          ],
        },
      },
      {
        heading: "How AI-assisted traffic labeling works",
        body: [
          "An annotator clicks once on a vehicle and the GPU-backed segmentation engine returns a clean, tight polygon in about a second. For video, tracking then propagates that object through the entire clip-a mask on every frame, not sparse keyframes joined by interpolation, which drifts on turning or braking vehicles.",
          "Occlusion handling is built into the tracker: when a car disappears behind a bus, the track is marked outside rather than hallucinating a box, then resumes the same identity when the car re-emerges. Motion-adaptive smoothing removes boundary flicker without lagging genuinely fast motion.",
        ],
      },
      {
        heading: "Regional realism most datasets miss",
        body: [
          "Detectors trained only on Western freeway footage fail on dense, mixed traffic-two-wheelers weaving between lanes, auto-rickshaws, hand carts, pedestrians crossing mid-block, unmarked lanes. Operating from India, we label the real distribution of South-Asian road scenes as fluently as structured highway footage-precisely the gap most global AV datasets leave open.",
        ],
      },
      {
        heading: "Formats & delivery",
        body: [
          "Traffic datasets export directly into the formats perception teams train with: COCO JSON for detection and instance segmentation, YOLO text labels with a generated data.yaml, Pascal VOC XML for legacy pipelines, and PNG masks for semantic segmentation. Every export is a versioned snapshot with a reproducible train/valid/test split.",
        ],
      },
    ],
    callout:
      "Recently delivered: a multi-class traffic dataset-vehicles and pedestrians tracked through full video clips with per-frame instance masks, exported to COCO and YOLO with versioned splits.",
    faqs: [
      {
        question: "Can you label dashcam, drone, and CCTV traffic footage?",
        answer:
          "Yes. The pipeline is viewpoint-agnostic: dashcam ego-view, fixed CCTV at intersections, and aerial drone footage are all supported, including mixed datasets that combine all three.",
      },
      {
        question: "How do you handle vehicles that leave and re-enter the frame?",
        answer:
          "The tracker marks the object outside for the frames it is not visible and automatically resumes the same identity when it reappears-no duplicate identities, no ghost boxes drifting over other vehicles.",
      },
      {
        question: "Do you support night and adverse-weather scenes?",
        answer:
          "Yes, and we recommend including them deliberately. Scene-level tags (day/night, weather, congestion) are part of the schema, and class-balance reporting shows their distribution so the dataset covers the conditions your model must survive in production.",
      },
    ],
  },

  "medical-xray": {
    slug: "medical-xray",
    eyebrow: "Radiology · Orthopedics · Medical AI",
    title: "Medical imaging annotation: X-ray & bone segmentation",
    metaTitle: "Medical Image & X-ray Bone Segmentation Annotation | Baaz Vision Intelligence",
    metaDescription:
      "Medical image annotation with a segmentation engine fine-tuned on medical imagery: per-bone masks, pathology localization, and anatomical landmarks-human-reviewed and exported as COCO JSON and PNG masks.",
    lede: "Medical image annotation has a different center of gravity than any other domain: the boundary is the diagnosis. A fracture detector or joint-measurement model lives or dies on whether its training masks follow true anatomical boundaries-cortical edges, joint margins, fracture lines-rather than approximate blobs.",
    sections: [
      {
        heading: "A dedicated medical segmentation engine",
        body: [
          "Projects created in Medical mode route to a segmentation model fine-tuned specifically on medical imagery-X-ray, dermoscopy, endoscopy, microscopy, ultrasound. It is concept-prompted: the label's clinical name ('femur', 'fracture line') is part of the prompt, so the model searches the image for that concept and the annotator's click simply disambiguates which instance is meant.",
          "This matters because general-purpose segmentation models underperform on radiographs. They are trained on natural photos where objects have texture and contrast; bone edges are gradual intensity gradients with overlapping structures. A medically fine-tuned engine is the difference between a usable pre-label and a from-scratch hand-tracing job.",
        ],
      },
      {
        heading: "What we annotate in medical projects",
        items: [
          "Bone & anatomy segmentation-per-bone instance masks on X-rays (femur, tibia, radius, vertebrae), joint regions, and implant hardware.",
          "Pathology localization-boxes or masks on fractures, lesions, opacities, and foreign objects.",
          "Keypoint annotation-anatomical landmarks for measurement models: joint centers, cortical reference points, orthopedic planning angles.",
          "Study-level classification-normal/abnormal tags, view labels (AP, lateral, oblique), and quality flags.",
        ],
      },
      {
        heading: "AI proposes, a human disposes",
        body: [
          "Model-generated masks are treated as fast drafts for expert correction, never final answers. The annotator selects the label, clicks the region, and the medical engine returns candidate regions; the click picks the intended one and the mask lands as an editable polygon, adjusted vertex-by-vertex wherever clinical judgment disagrees. Medical projects are expected to arrive de-identified, and datasets are only ever delivered back to the originating client.",
        ],
      },
      {
        heading: "Formats & delivery",
        body: [
          "All standard image formats are accepted (PNG, JPEG, frames exported from DICOM), annotated at native resolution so subtle fracture lines are not lost to downscaling. Exports ship as COCO JSON and PNG masks with versioned train/valid/test splits, and we can run double-annotation on a sampled subset to report inter-annotator agreement (IoU).",
        ],
      },
    ],
    callout:
      "Recently delivered: a bone X-ray dataset with per-bone segmentation masks reviewed by a human annotator, exported as COCO JSON and PNG masks with versioned splits.",
    faqs: [
      {
        question: "Why not use a general segmentation model on X-rays?",
        answer:
          "General models are trained on natural images where objects have texture and contrast boundaries. Bone edges on radiographs are gradual intensity gradients-general models under-segment or bleed across joints. Our medical engine is fine-tuned on medical imagery specifically to follow those boundaries.",
      },
      {
        question: "Can our clinicians review the annotations?",
        answer:
          "Yes. Many clients have their own radiologist or orthopedist do final sign-off; we deliver review-ready projects where every mask remains editable, and incorporate clinical corrections into the final export.",
      },
      {
        question: "Which medical modalities do you support?",
        answer:
          "X-ray and any modality exportable as standard images or video: dermoscopy, endoscopy and surgical video, ultrasound clips, microscopy, and fundus photography. CT and MRI are annotated slice-by-slice as image series.",
      },
    ],
  },

  sports: {
    slug: "sports",
    eyebrow: "Sports analytics · Broadcast · Performance science",
    title: "Sports video annotation: player tracking, pose & ball data",
    metaTitle: "Sports Video Annotation-Player Tracking & Pose Data | Baaz Vision Intelligence",
    metaDescription:
      "Sports video annotation with per-frame player masks, occlusion-safe identities, configurable pose skeletons, ball tracking, and event tags-exported in COCO keypoints and YOLO.",
    lede: "Sports video is the most demanding tracking environment we label. A player serves at full extension, sprints, and changes direction in a fraction of a second; the ball travels faster than almost any object in consumer video; broadcast cuts change the angle without warning. Sports-analytics models need annotation that survives all of it.",
    sections: [
      {
        heading: "What we annotate in sports footage",
        body: [
          "Tennis is the reference sport we have shipped, but the same schema transfers directly to badminton, cricket, football, basketball, hockey, and combat sports-anywhere the questions are 'who is where, doing what, when.'",
        ],
        table: {
          headers: ["Label type", "Sports use", "Examples"],
          rows: [
            ["Player tracks (per-frame masks)", "Player tracking, movement & speed metrics", "each player tracked with a persistent identity for the whole rally"],
            ["Bounding boxes", "Detection models, broadcast graphics", "players, referees, ball kids, equipment"],
            ["Keypoints / skeletons", "Pose estimation, biomechanics, technique", "full-body joint skeletons per player per frame"],
            ["Ball annotation", "Ball tracking, bounce detection, trajectory", "small-object boxes with occlusion-aware tracks"],
            ["Event / frame tags", "Action recognition, highlight generation", "serve, forehand, backhand, volley, point start/end"],
            ["Court segmentation", "Homography, coordinate mapping", "court surface, lines, net"],
          ],
        },
      },
      {
        heading: "How athlete tracking works",
        body: [
          "An annotator clicks the player once; the segmentation engine returns a body-accurate mask-including through motion blur-and one more click sends it to the tracker, which follows the athlete through the full clip. Players cross behind the net post, behind each other, behind graphics: the track marks those frames outside and re-acquires the same identity, so identities never swap mid-rally.",
          "Player-tracking metrics-distance covered, sprint counts, court-coverage heatmaps-are integrals over per-frame positions. Jittery or interpolated annotation adds noise to every one of those integrals, which is why we produce a mask on every frame with motion-adaptive smoothing rather than the keyframe shortcuts most tools take.",
        ],
      },
      {
        heading: "Pose data & event grammar",
        body: [
          "Keypoint skeletons turn tracking into biomechanics: a serve annotated at joint level lets a model measure racket-drop depth, knee flexion, or landing asymmetry. Skeleton definitions are configurable per project. Frame-level event tags segment a broadcast into its grammar-point start, serve, stroke type, bounce, point end-and live in the same project as the tracks, so the export aligns them on a shared frame clock.",
        ],
      },
      {
        heading: "Formats & delivery",
        body: [
          "Sports datasets export as COCO JSON (boxes, masks, and keypoints in the standard keypoints schema), YOLO for real-time player detectors, and per-frame annotated images with tracking applied for sequence models. Event tags export alongside, so an action-recognition model and a detection model train from the same versioned delivery.",
        ],
      },
    ],
    callout:
      "Recently delivered: tennis rally footage with players tracked on every frame through serves and direction changes-per-frame instance masks with occlusion-aware identity, exported to COCO.",
    faqs: [
      {
        question: "Can you track the ball? It's tiny and fast.",
        answer:
          "Yes, with honest caveats: balls are annotated as small-object tracks, and frames where the ball is invisible (motion blur, out of frame) are marked outside rather than guessed. For high-precision trajectory work we combine tracking with human keyframe verification at bounce and contact points.",
      },
      {
        question: "Do you handle broadcast footage with camera cuts?",
        answer:
          "Yes. Each continuous shot is tracked as its own segment, and identities are re-linked across cuts during review, so a rally spanning three camera angles still produces one coherent player timeline.",
      },
      {
        question: "Can you produce pose (skeleton) data for biomechanics?",
        answer:
          "Yes-keypoint/skeleton projects are a native type. Skeleton definitions are configurable per project (e.g., 17-point COCO body, racket-arm detail) and export in COCO keypoints format.",
      },
    ],
  },

  "plant-disease": {
    slug: "plant-disease",
    eyebrow: "AgTech · Precision farming · Crop science",
    title: "Agriculture annotation: plant & leaf-disease datasets",
    metaTitle: "Plant & Leaf-Disease Data Annotation for AgTech | Baaz Vision Intelligence",
    metaDescription:
      "Agricultural image annotation: per-leaf instance masks, disease classification, and severity attributes from a single pass-plus plant-level video tracking-exported as classification folders, COCO JSON and PNG masks.",
    lede: "Agricultural computer vision starts with a deceptively hard problem: everything is green, organic, overlapping, and variable. A leaf-disease model must distinguish early blight from nutrient deficiency from insect damage from ordinary senescence-distinctions that live in subtle texture, color gradients, and lesion morphology.",
    sections: [
      {
        heading: "What we annotate in agricultural imagery",
        body: [
          "Disease datasets usually combine levels: a classification label for the disease, a segmentation mask for the diseased region, and attributes for severity. Every label carries attributes, so one annotation pass produces data for a classifier, a segmenter, and a severity grader simultaneously.",
        ],
        table: {
          headers: ["Label type", "Agriculture use", "Examples"],
          rows: [
            ["Instance segmentation", "Per-leaf, per-fruit, per-plant masks", "individual leaves, fruits for yield, weeds vs. crop"],
            ["Semantic segmentation", "Field & canopy analysis", "healthy tissue vs. lesion area, soil, canopy cover"],
            ["Bounding boxes", "Detection at field scale", "plants, pests, flowers, fruit clusters"],
            ["Classification", "Disease identification", "early blight, late blight, rust, mosaic virus, healthy"],
            ["Severity attributes", "Grading & progression models", "lesion coverage %, growth stage, severity grade"],
          ],
        },
      },
      {
        heading: "AI-assisted labeling on organic shapes",
        body: [
          "Organic boundaries are where click-to-segment assistance shines. Leaves have serrated edges, lesions have irregular margins, and neither is fun to trace by hand. A click on a leaf returns its full boundary-serrations included-as an editable polygon; a rough box around a lesion cluster returns the lesion region. The annotator's time goes into the judgment calls (is this blight or burn?) rather than the geometry.",
          "Class balance is the silent killer of agricultural models: diseases are rare relative to healthy tissue. Every delivery includes class-distribution reporting, and annotators flag underrepresented classes during labeling so collection can be redirected while the field season is still open.",
        ],
      },
      {
        heading: "Greenhouse video & plant-level tracking",
        body: [
          "Controlled-environment agriculture adds a temporal dimension field photos lack. A plant labeled once in a camera pass is tracked through the traverse with a persistent identity, and identities are linked across daily passes during review-producing per-plant timelines that disease-progression models, growth-rate estimators, and treatment-response studies all train from.",
        ],
      },
      {
        heading: "Formats & delivery",
        body: [
          "Agriculture datasets export as classification folder structures or CSV (for disease classifiers), COCO JSON and YOLO (for detection), and PNG masks (for segmentation)-with versioned splits that keep images from the same field or survey flight together, preventing the leakage that inflates validation accuracy. Multi-source datasets (drone + phone + greenhouse camera) are tagged by source.",
        ],
      },
    ],
    callout:
      "Recently delivered: a plant leaf-disease dataset-per-leaf segmentation with disease classification labels, exported as classification folders and COCO JSON with versioned splits.",
    faqs: [
      {
        question: "Our disease classes look similar. How do you keep labels consistent?",
        answer:
          "With a labeling guide agreed before annotation starts-reference images per class, decision rules for ambiguous cases-plus a review pass. Where classes are genuinely confusable, we recommend an 'uncertain' attribute rather than forced guesses; honest labels train better models.",
      },
      {
        question: "Can you annotate drone imagery of whole fields?",
        answer:
          "Yes. Large orthomosaics and survey frames are annotated with detection and semantic segmentation (crop rows, bare soil, weed pressure, lodging). Very large images are tiled for annotation and the labels merged back to original coordinates.",
      },
      {
        question: "Do you support severity grading, not just disease presence?",
        answer:
          "Yes-attributes on each label carry severity grades or lesion-coverage estimates, so the same dataset trains detection and severity models together.",
      },
    ],
  },
};

export function getDatasetUseCase(slug) {
  return DATASET_USE_CASES[slug] || null;
}
