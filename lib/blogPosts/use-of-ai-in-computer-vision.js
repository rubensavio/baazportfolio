/** Use of AI in computer vision - imported by blogData.js */
export const useOfAiInComputerVisionPost = {
  slug: "use-of-ai-in-computer-vision",
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: {
    name: "Sanjay Suthar",
    personalUrl: "https://www.linkedin.com/in/sanjay-suthar-621921227/",
    url: "https://www.linkedin.com/in/sanjay-suthar-621921227/",
    jobTitle: "AI/ML Engineer",
    sameAs: ["https://www.linkedin.com/in/sanjay-suthar-621921227/"],
    knowsAbout: [
      "Computer Vision",
      "Convolutional Neural Networks",
      "Vision Transformers",
      "Edge AI",
    ],
  },
  contentType: "Guide",
  metaTitle: "Use of AI in Computer Vision: CNNs, ViTs & Edge | Baaz",
  metaDescription:
    "How AI changed computer vision - from hand-written rules to CNNs and vision transformers, plus real uses in factories, hospitals, and self-driving cars.",
  title: "The Use of AI in Computer Vision: From Pixels to Understanding",
  directAnswer:
    "AI turned computer vision from a set of hand-written rules into systems that learn what images mean. Convolutional neural networks read local detail like cracks and scratches, vision transformers read the whole scene at once, and hybrids of the two now run live inspection, medical imaging, and self-driving perception on hardware small enough to sit beside the camera.",
  intro:
    "For most of their history, cameras were very good at capturing and completely hopeless at understanding. A sensor could record millions of pixels a second without having the faintest idea what any of them meant. Early machine vision tried to close that gap with rules written by hand - edge filters, brightness thresholds, template matching - and those rules worked beautifully right up until a light moved, a part was rotated, or a supplier changed the finish on a component. AI replaced that brittle rulebook with something that learns. This guide walks through what actually changed: how convolutional networks and vision transformers see differently, where each one earns its place, how these models are used today on production lines, in hospitals, and inside vehicles, and what it takes to run them on real hardware with real latency budgets. It also covers the parts nobody puts in a demo - the data problems, the failure modes, and the limits worth planning around before you commit to a build.",
  sections: [
    {
      heading: "Why Rule-Based Vision Kept Breaking",
      body: [
        "Traditional machine vision ran on explicit instructions. An engineer would describe a defect mathematically - a dark line thinner than four pixels, a blob above a certain area, a contour that fails to match a reference shape - and the system applied that description to every frame. Sobel edge filters, morphological operations, and geometric template matching were the workhorses, and on a fixed line under fixed lighting they were fast, cheap, and completely predictable.",
        "The trouble is that the real world refuses to hold still. Move a lamp and the threshold that separated a scratch from a shadow no longer separates anything. Change a surface from matte to gloss and the edge detector starts flagging reflections as cracks. Introduce a second product variant and the template stops matching. Every one of those breaks needed a human to go back in, re-tune the parameters, and hope nothing else shifted in the process.",
        "That fragility is the real reason older vision projects had a reputation for stalling after the pilot. The system did not fail because the maths was wrong. It failed because a rule written for one set of conditions cannot generalise to conditions it never saw, and factories, hospitals, and roads are nothing but conditions nobody saw.",
        "Deep learning changed the shape of the problem. Instead of describing what a defect looks like, you show the model examples and let it work out which visual patterns separate good from bad. The description becomes learned rather than written, which means it can carry nuance no engineer would have thought to encode - and, more importantly, it can be improved by adding data rather than by rewriting logic.",
      ],
      references: [
        {
          label: "Wikipedia - Computer vision (history and classical methods)",
          href: "https://en.wikipedia.org/wiki/Computer_vision",
        },
        {
          label:
            "Krizhevsky et al. - ImageNet Classification with Deep CNNs (AlexNet)",
          href: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks",
        },
      ],
    },
    {
      heading: "Two Ways a Model Can Look at an Image",
      body: [
        "Almost every modern vision system is built on one of two architectures, or a blend of both. They differ in something quite fundamental: how much of the image the model considers at once.",
        "A convolutional neural network (CNN) looks through a small window that slides across the image. At each position it multiplies the pixels under the window by a set of learned weights, passes the result through a non-linear function such as ReLU, and pools nearby responses together. Stack enough of those layers and simple edge responses in the early layers combine into textures, then parts, then whole objects. Because the same window is reused everywhere, a CNN needs relatively few parameters and naturally copes with an object appearing anywhere in the frame.",
        "A vision transformer (ViT) throws the sliding window away. It chops the image into a grid of fixed-size patches, flattens each patch into a vector, adds a positional encoding so the model knows where the patch came from, and feeds the whole set through self-attention layers. Attention lets every patch compare itself with every other patch, so from the very first layer the model can relate the top-left corner to the bottom-right one. Nothing in a CNN's early layers can do that.",
        "The practical consequence is a difference in what each architecture notices easily. CNNs are excellent at fine local detail - a hairline crack, an abrasion, a chipped edge - and they get there on modest compute. ViTs are better at relationships that span the frame: a component seated at a slight angle relative to everything around it, a texture that is subtly wrong across a whole panel, a scene whose meaning depends on how objects sit together.",
      ],
      table: {
        caption: "Convolutional networks vs. vision transformers at a glance",
        headers: ["Aspect", "CNN", "Vision transformer"],
        rows: [
          [
            "How it reads the image",
            "Sliding kernels over local neighbourhoods",
            "Patches compared to each other via self-attention",
          ],
          [
            "Built-in assumptions",
            "Locality and translation equivariance",
            "Almost none - relationships are learned",
          ],
          [
            "Strongest at",
            "Fine local texture and small defects",
            "Global layout and long-range context",
          ],
          [
            "Data appetite",
            "Works well on modest datasets",
            "Needs large datasets or heavy pre-training",
          ],
          [
            "Typical deployment",
            "Embedded boards, high-speed inline inspection",
            "Server or high-end edge, complex anomaly work",
          ],
        ],
      },
      body2: [
        "Neither is simply better. The inductive biases that make a CNN efficient are the same biases that narrow its view, and the freedom that makes a ViT powerful is the same freedom that makes it hungry for data. Which is exactly why most production systems today are not purely one or the other.",
      ],
      references: [
        {
          label: "Dosovitskiy et al. - An Image Is Worth 16x16 Words (ViT)",
          href: "https://arxiv.org/abs/2010.11929",
        },
        {
          label: "Liu et al. - Swin Transformer: Hierarchical Vision Transformer",
          href: "https://arxiv.org/abs/2103.14030",
        },
      ],
    },
    {
      heading: "How an AI Vision Pipeline Runs End to End",
      body: [
        "It helps to see where the model actually sits, because in a working system it is a small part of a much longer chain. A typical inspection or perception pipeline looks like this:",
      ],
      steps: [
        "Capture - one or more cameras, usually with controlled lighting, produce frames at a fixed rate. Optics and illumination set the ceiling on everything downstream.",
        "Preprocess - frames are resized, normalised, and sometimes corrected for lens distortion or colour so the model sees inputs that match its training distribution.",
        "Infer - the CNN, transformer, or hybrid backbone turns pixels into predictions: a class, a set of boxes, a segmentation mask, or an anomaly score.",
        "Post-process - raw outputs are filtered by confidence, merged across overlapping detections, and converted into units the business actually cares about, such as millimetres or pass and fail.",
        "Act - a PLC rejects a part, a robot adjusts its path, a radiologist sees a highlighted region, a vehicle updates its trajectory.",
        "Feed back - the frames the model got wrong are captured, labelled, and folded into the next training round. This loop is what stops accuracy from decaying.",
      ],
      body2: [
        "That last step is the one most teams underestimate. A model is a snapshot of the data it was trained on, and the moment a supplier changes a material or a camera is swapped out, the snapshot starts ageing. The systems that stay accurate for years are the ones with a boring, reliable pipeline for capturing edge cases and retraining on them.",
      ],
    },
    {
      heading: "AI Vision on the Factory Floor",
      body: [
        "Manufacturing was one of the first places deep learning vision paid for itself, largely because the value is easy to measure. A missed defect has a known cost, and so does a false reject.",
        "CNN backbones such as ResNet variants and the YOLO detector family handle the high-throughput end of the work. They inspect printed circuit boards for missing or misaligned components, check automotive weld points for porosity and spatter, and scan silicon wafers for particle contamination, often at hundreds of frames per second. They run comfortably on embedded accelerators bolted to the line, which matters when the alternative is streaming raw video to a server room.",
        "Transformer and hierarchical attention models such as Swin take on the problems where a defect is not a local blemish at all. Misalignment across a wide assembly, a texture that drifts across a composite panel, a subassembly that is individually fine but wrong in relation to its neighbours - these are relational faults, and a model that only ever looks at small neighbourhoods struggles to describe them.",
        "Beyond inspection, vision now drives movement. Autonomous mobile robots in warehouses use visual SLAM (simultaneous localisation and mapping) to build a map of the building while tracking their own position inside it, then layer detection and segmentation on top to see pallets, people, and obstacles that were not there yesterday. That combination is what let logistics operators drop the magnetic tape and painted guide lines older AGVs depended on.",
        "The common thread is that vision stopped being a camera bolted to a rule engine and became a sensor that produces meaning. A well-built line today does not just ask whether a part passed. It records what was wrong, where, and how often, which quietly turns quality control into a data source for process engineering.",
      ],
    },
    {
      heading: "Healthcare, Vehicles, and Other High-Stakes Uses",
      body: [
        "The same architectures show up wherever the cost of a missed detail is high, though the engineering around them gets considerably more careful.",
        "In diagnostic imaging, segmentation and classification networks work across volumetric CT scans, multi-sequence MRI, and histopathology slides that can run to billions of pixels. The division of labour mirrors the architectures themselves: convolutional layers pick out local structure such as cell boundaries and micro-calcifications, while attention layers place those findings in anatomical context. That context is what cuts false positives, because a bright speck means something very different depending on what surrounds it. These systems assist clinicians rather than replace them, and in most jurisdictions they carry regulatory clearance that constrains exactly how they may be used.",
        "In autonomous vehicles and aerospace, vision is one input among several. Frames from surround cameras are fused with LiDAR and radar returns, and attention mechanisms correlate features across camera angles to build a unified bird's-eye-view representation of the space around the vehicle. From that shared view the system predicts where pedestrians are heading, reads signage and signals, and issues control adjustments on a millisecond budget, in rain and glare and at night.",
        "What these domains share is that a confident wrong answer is worse than no answer at all. That pushes the engineering toward redundancy across sensors, calibration checked continuously rather than once at install, and models that report uncertainty instead of a bare label. It also means evaluation looks nothing like a leaderboard score - the questions are all about the rare cases, not the average one.",
      ],
      references: [
        {
          label: "Ronneberger et al. - U-Net for biomedical image segmentation",
          href: "https://arxiv.org/abs/1505.04597",
        },
      ],
    },
    {
      heading: "Hybrid Models and Running Vision at the Edge",
      body: [
        "Pure transformers are demanding. They want large training sets and generous memory bandwidth, neither of which is abundant on a board mounted beside a conveyor. So the practical answer has converged on hybrids: a convolutional front end that extracts low-level spatial features quickly, followed by transformer blocks that reason about how those features relate. You get the CNN's efficiency on detail and the transformer's grasp of context without paying full price for either.",
        "Getting these models onto edge hardware is its own discipline. Post-training quantisation drops weights and activations from 32-bit floats to INT8 or FP8, shrinking the model and speeding up inference at a small, measurable accuracy cost. Structured pruning removes whole channels or attention heads that contribute little. Compilation with a runtime such as TensorRT or OpenVINO fuses operations and picks kernels tuned to the specific accelerator.",
        "The payoff is not only speed. Running inference locally means no round trip to the cloud, so latency is bounded and the line keeps working when the network does not. It also means images never leave the building, which is frequently the deciding factor in medical, defence, and any setting where the footage contains people.",
        "The trade-off worth planning for is that every optimisation step is a place accuracy can quietly slip. Quantise a model and validate it on the same held-out set you used before, not on a fresh one, or you will have no way to tell what the quantisation actually cost you.",
      ],
      references: [
        {
          label: "NVIDIA TensorRT documentation (quantisation and deployment)",
          href: "https://docs.nvidia.com/deeplearning/tensorrt/",
        },
      ],
    },
    {
      heading: "Vision-Language Models and Open-Vocabulary Inspection",
      body: [
        "The newest shift is that vision models are learning to take instructions in plain language. Vision-language models (VLMs) are trained on images paired with text, which lets them connect what they see to words they were never explicitly taught to detect.",
        "In practice that means an operator can point a model at a live feed and ask for something in a sentence - flag any pallet wrapped in torn film, show me trays where a label is upside down - and get useful results without anyone collecting a thousand examples and training a bespoke classifier first. That is what open-vocabulary detection means: the set of things the system can look for is no longer fixed at training time.",
        "For long-tail defects, this changes the economics. Historically, a fault that appeared twice a year was never worth a training run, so it simply went unmonitored. A promptable model can watch for it from day one at the cost of writing a sentence.",
        "The honest caveat is that prompted detection is not yet as reliable as a purpose-trained classifier on a defect you have thousands of examples of. The sensible pattern is to use VLMs for exploration and rare cases, then promote anything that turns out to matter into a dedicated, properly evaluated model.",
      ],
      references: [
        {
          label:
            "Radford et al. - Learning Transferable Visual Models From Natural Language (CLIP)",
          href: "https://arxiv.org/abs/2103.00020",
        },
        {
          label: "Meta AI - Segment Anything (promptable segmentation)",
          href: "https://segment-anything.com/",
        },
      ],
    },
    {
      heading: "What AI Vision Still Cannot Do",
      body: [
        "It is worth being blunt about the limits, because most disappointing vision projects fail on these rather than on architecture choice.",
      ],
      items: [
        "It cannot fix bad optics. If a defect is not resolvable in the image, no model recovers it. Lighting and lens selection still decide the ceiling.",
        "It cannot learn from data you do not have. Rare defects are rare in the training set too, and a model that has seen three examples of a fault will not reliably catch the fourth.",
        "It does not survive domain shift on its own. A new camera, a new supplier, a different shift pattern with different ambient light - each can move the input distribution far enough to degrade accuracy quietly.",
        "It does not explain itself the way an auditor wants. Saliency maps show where a model looked, not why it decided, and that gap matters in regulated settings.",
        "It rarely reaches zero false positives and zero false negatives at the same time. You are choosing a point on that trade-off, and the right point is a business decision, not a technical one.",
      ],
      body2: [
        "None of this argues against using AI for vision. It argues for scoping projects around the data and the physical setup rather than around the model, and for budgeting for the retraining loop from the start instead of treating it as maintenance.",
        "That is the part Baaz tends to spend the most time on with clients: getting the capture setup, the labelling standard, and the feedback loop right so the model has something solid to stand on. The architecture question usually answers itself once those are settled.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/technologies/vision-intelligence",
      label: "Baaz Vision Intelligence platform",
    },
    {
      href: "/blog/what-is-semantic-segmentation",
      label: "What is semantic segmentation?",
    },
    { href: "/services/ai-solution", label: "AI & computer vision development" },
    { href: "/book-call", label: "Book a call with Baaz" },
  ],
  faqs: [
    {
      question: "How is AI used in computer vision?",
      answer:
        "AI replaces hand-written image rules with models that learn from examples. Instead of an engineer describing a defect as a dark line of a certain width, a neural network is shown labelled images and works out the visual patterns itself. That learned representation is what powers modern detection, segmentation, and anomaly spotting in factories, hospitals, and vehicles, and it is why these systems keep working when lighting or surfaces change.",
    },
    {
      question: "What is the difference between a CNN and a vision transformer?",
      answer:
        "A CNN slides a small learned filter across the image, so it builds understanding from local neighbourhoods outward. That makes it efficient and very good at fine detail such as cracks and scratches. A vision transformer splits the image into patches and uses self-attention so every patch can relate to every other one from the first layer, which makes it stronger on global layout and long-range context but hungrier for data and memory.",
    },
    {
      question: "Which is better for defect detection, a CNN or a transformer?",
      answer:
        "It depends on what the defect is. If the fault is a small local blemish such as a scratch, a crack, or a chip, a CNN is usually faster, cheaper, and accurate enough. If the fault is relational, such as misalignment across a wide assembly or an odd texture across a whole panel, a transformer or a hybrid model tends to do better. Many production systems now use a convolutional front end with transformer blocks on top to get both.",
    },
    {
      question: "Can AI vision models run without the cloud?",
      answer:
        "Yes. Quantisation to INT8 or FP8, structured pruning, and compilation with runtimes such as TensorRT or OpenVINO shrink models enough to run on edge accelerators next to the camera. This bounds latency, keeps the line running when the network drops, and means footage never leaves the site, which is often a hard requirement in medical and other privacy-sensitive settings.",
    },
    {
      question: "What are vision-language models used for in industry?",
      answer:
        "Vision-language models let an operator describe what to look for in plain language rather than training a classifier for it. That makes open-vocabulary inspection practical for rare or newly discovered defects that would never justify their own training run. They work best for exploration and long-tail cases, with anything that proves important promoted to a dedicated, properly evaluated model.",
    },
    {
      question: "Why do computer vision projects fail after the pilot?",
      answer:
        "Usually because of data and physical setup rather than model choice. Poor optics or lighting cap what any model can see, rare defects stay rare in the training set, and domain shift from a new camera or supplier degrades accuracy quietly. Projects that last build a feedback loop from day one, capturing the frames the model gets wrong and retraining on them.",
    },
  ],
};
