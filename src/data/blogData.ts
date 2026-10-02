export interface ArticleSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  internalLink?: {
    text: string;
    target: string;
    description: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  excerpt: string;
  category: 'Guides & Organization' | 'Caregiver Tools' | 'Clinical Preparation' | 'Digital Health';
  author: {
    name: string;
    role: string;
    institution: string;
  };
  publishedDate: string;
  readTime: string;
  tags: string[];
  coverImage: {
    alt: string;
    aspectRatio: string;
    badgeText: string;
  };
  keyTakeaways: string[];
  sections: ArticleSection[];
  conclusion: string;
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'what-is-an-spg11-journey-tracker-and-how-does-it-work',
    title: 'What Is an SPG11 Journey Tracker and How Does It Work?',
    metaDescription: 'Learn what an SPG11 Journey Tracker is, how it helps individuals and caregivers organize symptoms, and how digital health tracking aids clinical discussions.',
    canonicalUrl: 'https://www.spg11journey.com/blog/what-is-an-spg11-journey-tracker-and-how-does-it-work',
    excerpt: 'An SPG11 Journey Tracker is a specialized, patient-first organizational tool designed to document changes in mobility, daily symptoms, and medical visits over time.',
    category: 'Guides & Organization',
    author: {
      name: 'Sarah Jenkins, RN, BSN',
      role: 'Rare Disease Care Coordinator',
      institution: 'Neurogenetics Patient Support Network',
    },
    publishedDate: 'October 2, 2026',
    readTime: '6 min read',
    tags: ['SPG11 Journey', 'Health Tracker', 'Caregiver Guide', 'Neurology Appointments'],
    coverImage: {
      alt: 'Digital dashboard layout displaying patient journey milestones, spasticity scales, and appointment logs',
      aspectRatio: '16:9',
      badgeText: 'Foundational Overview',
    },
    keyTakeaways: [
      'An SPG11 Journey Tracker helps families maintain a chronological, privacy-first record of mobility, spasticity, and medical notes.',
      'It bridges the communication gap between multi-month gaps in specialty neurology appointments.',
      'The tracker does not diagnose or treat medical conditions; rather, it consolidates factual observations for informed medical dialogue.'
    ],
    sections: [
      {
        heading: 'Introduction: The Need for Longitudinal Tracking in Complex HSP',
        paragraphs: [
          'Spastic Paraplegia Type 11 (SPG11) is a rare, complex form of hereditary spastic paraplegia caused by variations in the KIAA1840/SPG11 gene. Because symptoms progress gradually over years—often starting with gait stiffness and later encompassing speech, balance, and fine motor changes—recalling exact dates and symptom shifts during a brief 30-minute clinic visit can be overwhelming for families.',
          'An SPG11 Journey Tracker serves as a structured digital notebook tailored specifically to the unique needs of people living with SPG11 and their caregivers. Rather than relying on scattered paper notes or memory, it creates a coherent chronological timeline of functional abilities, therapy milestones, and medication changes.'
        ]
      },
      {
        heading: 'How Does an SPG11 Journey Tracker Work in Practice?',
        subheading: 'Core Functional Modules for Daily and Monthly Use',
        paragraphs: [
          'At its core, a journey tracker breaks down complex health monitoring into manageable, low-burden entries. Instead of requiring daily essays, users can record quick check-ins whenever a noticeable shift or milestone occurs.',
          'The tracker typically operates across three interconnected functional areas:'
        ],
        bulletPoints: [
          'Symptom and Mobility Logging: Recording perceived lower-limb stiffness, changes in walking endurance, assistive device use (AFOs, trekking poles, walkers), and fatigue levels.',
          'Clinical Visit Documentation: Noting clinician recommendations, physical therapy exercise regimens, and physician contact details.',
          'Secure Record Archiving: Storing genetic reports, brain MRI summaries highlighting the corpus callosum, and emergency safety instructions.'
        ],
        internalLink: {
          text: 'Explore the Interactive Journey Tracker',
          target: 'journey',
          description: 'Try logging baseline entries in our privacy-focused personal health organizer.'
        }
      },
      {
        heading: 'Enhancing the Patient-Clinician Partnership',
        paragraphs: [
          'Neurologists and physical therapists rely on objective history to gauge whether a patient’s spasticity management plan is performing well. When caregivers can provide a 1-page summary showing that muscle tone noticeably worsened during cold weather or improved with morning stretching, physicians gain actionable context.',
          'A journey tracker acts as a communication bridge. It translates daily living realities into standardized, succinct summaries that clinical teams can review in seconds, allowing more appointment time to be devoted to collaborative care planning.'
        ]
      }
    ],
    conclusion: 'Documenting an SPG11 journey is not about cataloging limitations—it is about establishing a clear, proactive record that supports the entire care circle. By centralizing observations in a single structured digital space, families gain peace of mind and clinicians receive the clarity they need.',
    relatedSlugs: [
      'how-to-organize-your-spg11-journey-information-digitally',
      'a-beginners-guide-to-using-an-spg11-journey-tracker',
      'what-information-can-you-keep-in-an-spg11-journey-tracker'
    ]
  },
  {
    id: 'post-2',
    slug: 'how-to-organize-your-spg11-journey-information-digitally',
    title: 'How to Organize Your SPG11 Journey Information Digitally',
    metaDescription: 'A practical guide on structuring digital medical files, genetic reports, MRI scans, and physical therapy logs for individuals affected by SPG11.',
    canonicalUrl: 'https://www.spg11journey.com/blog/how-to-organize-your-spg11-journey-information-digitally',
    excerpt: 'Transform fragmented medical paperwork into an accessible digital archive with standardized folders, secure backups, and visit summaries.',
    category: 'Guides & Organization',
    author: {
      name: 'Michael Chen',
      role: 'Digital Health Advocate & Caregiver',
      institution: 'HSP Family Alliance',
    },
    publishedDate: 'October 2, 2026',
    readTime: '5 min read',
    tags: ['Digital Organization', 'Medical Records', 'Caregiver Toolkit', 'Genetic Reports'],
    coverImage: {
      alt: 'Illustration of categorized digital health records and document folders for SPG11 management',
      aspectRatio: '16:9',
      badgeText: 'Digital Organization',
    },
    keyTakeaways: [
      'Organize digital documents into 4 core buckets: Genetics & Diagnosis, Imaging & Labs, Clinic Visit Summaries, and Emergency Plans.',
      'Use consistent file naming conventions with dates in YYYY-MM-DD format for instant retrieval.',
      'Keep copies accessible both locally on your smartphone and in secure, encrypted cloud backups.'
    ],
    sections: [
      {
        heading: 'The Challenge of Scattered Rare Disease Documentation',
        paragraphs: [
          'Families navigating SPG11 often interact with multiple hospital systems, physical therapy clinics, genetic counselors, speech therapists, and orthotists. Over several years, paper binders become unwieldy, and critical diagnostic letters can easily be misplaced.',
          'Transitioning to an organized digital system relieves administrative stress, ensures emergency preparedness, and empowers caregivers when consulting new specialists or participating in research studies.'
        ]
      },
      {
        heading: 'Creating a Standardized 4-Folder Digital Hierarchy',
        paragraphs: [
          'The simplest way to maintain order without overwhelming yourself is to create four standardized digital folders on your computer or encrypted cloud drive:'
        ],
        bulletPoints: [
          'Folder 1: Genetic Confirmation & Diagnosis — Store the definitive KIAA1840/SPG11 molecular genetic report, variant interpretations, and genetic counselor notes.',
          'Folder 2: Neuroimaging & Diagnostics — Keep brain and spine MRI radiology reports (specifically those referencing corpus callosum thickness), nerve conduction studies, and bloodwork.',
          'Folder 3: Therapy & Mobility Plans — Save physical therapy evaluations, orthotic prescription slips, wheelchair assessments, and speech-language baseline reports.',
          'Folder 4: Emergency & Anesthesia Safety — Retain the emergency medical card with explicit anesthesia contraindications (such as succinylcholine avoidance).'
        ],
        internalLink: {
          text: 'Generate Your Emergency Medical Wallet Card',
          target: 'wallet-card',
          description: 'Create a printable safety card containing vital medical precautions.'
        }
      },
      {
        heading: 'Adopt a Universal File-Naming Formula',
        paragraphs: [
          'Avoid saving files as generic names like "Scan_001.pdf" or "Doctor_Note.pdf". Use the standard ISO date format (YYYY-MM-DD) followed by the category and clinician:',
          'Example: "2026-04-12_Brain-MRI_Report_DrSmith.pdf" or "2026-08-20_Genetic-Sequencing_KIAA1840.pdf". This simple habit ensures all files automatically sort chronologically in your file viewer.'
        ]
      }
    ],
    conclusion: 'A well-structured digital filing system turns anxiety into confidence. When a specialist requests your genetic variant report or baseline MRI, you can retrieve it in under thirty seconds from your phone.',
    relatedSlugs: [
      'how-to-keep-your-spg11-records-organized-in-one-place',
      'digital-tools-for-documenting-an-spg11-journey',
      'what-is-an-spg11-journey-tracker-and-how-does-it-work'
    ]
  },
  {
    id: 'post-3',
    slug: 'why-keeping-an-spg11-journey-journal-can-be-helpful',
    title: 'Why Keeping an SPG11 Journey Journal Can Be Helpful',
    metaDescription: 'Discover the practical and emotional benefits of keeping a journey journal for SPG11, from identifying symptom triggers to celebrating personal triumphs.',
    canonicalUrl: 'https://www.spg11journey.com/blog/why-keeping-an-spg11-journey-journal-can-be-helpful',
    excerpt: 'A journey journal does more than track medical data—it validates emotional resilience, highlights treatment patterns, and preserves cherished family moments.',
    category: 'Caregiver Tools',
    author: {
      name: 'Elena Rostova, MD, PhD',
      role: 'Clinical Neurogeneticist',
      institution: 'European HSP Consortium',
    },
    publishedDate: 'October 2, 2026',
    readTime: '5 min read',
    tags: ['Journaling', 'Emotional Health', 'Symptom Patterns', 'Family Support'],
    coverImage: {
      alt: 'Caregiver and patient reviewing journal entries and timeline of physical milestones',
      aspectRatio: '16:9',
      badgeText: 'Caregiver Insights',
    },
    keyTakeaways: [
      'Journaling helps distinguish gradual, long-term disease progression from transient day-to-day fluctuations.',
      'Documenting emotional well-being helps prevent caregiver burnout and fosters open family communication.',
      'Preserving non-medical achievements reinforces that a person’s identity is far broader than their diagnosis.'
    ],
    sections: [
      {
        heading: 'Unraveling the Noise of Day-to-Day Symptom Changes',
        paragraphs: [
          'In Spastic Paraplegia Type 11, muscle stiffness and fatigue rarely follow a straight line from one day to the next. A poor night of sleep, an oncoming viral infection, or sudden cold weather can temporarily increase leg stiffness, leading families to worry that the disease has suddenly progressed.',
          'Keeping a brief periodic journal helps clarify whether an uptick in spasticity is an acute response to external stressors or part of a broader trend. When reviewing months of notes, families can look back and realize: "Every time autumn arrives, leg stiffness increases for two weeks until our heating adjusts."'
        ]
      },
      {
        heading: 'Correlating Lifestyle Factors with Comfort',
        paragraphs: [
          'A journey journal is an ideal place to record how gentle stretching routines, warm baths, hydration, or specialized seating affect daily ease of movement. Over time, these observations highlight customized coping strategies that scientific textbooks cannot predict.'
        ],
        bulletPoints: [
          'Identify specific times of day when energy and focus are at their highest.',
          'Note the impact of new footwear or orthotic adjustments before your next orthotist follow-up.',
          'Track whether changes in seating posture reduce back fatigue during study or work sessions.'
        ]
      },
      {
        heading: 'Preserving the Human Story Behind the Clinical Charts',
        paragraphs: [
          'Medical charts necessarily focus on deficits and scores. A journey journal counterbalances this clinical focus by celebrating real-life milestones: an enjoyable adaptive biking outing, completing a school semester, or mastering an assistive technology app.',
          'Documenting these moments preserves a balanced narrative that reminds both patients and caregivers of their strength, adaptability, and personal victories.'
        ]
      }
    ],
    conclusion: 'A journey journal is a companion for the road. Whether you write once a week or once a month, those written reflections bring clarity to medical appointments and honor the human journey beyond the medical condition.',
    relatedSlugs: [
      'how-to-create-a-simple-spg11-journey-timeline',
      'how-families-can-organize-important-spg11-journey-information',
      'why-keeping-an-spg11-journey-journal-can-be-helpful'
    ]
  },
  {
    id: 'post-4',
    slug: 'how-to-keep-your-spg11-records-organized-in-one-place',
    title: 'How to Keep Your SPG11 Records Organized in One Place',
    metaDescription: 'Step-by-step strategies for unifying clinic letters, imaging discs, lab results, and therapy prescriptions into a single secure hub for SPG11 care.',
    canonicalUrl: 'https://www.spg11journey.com/blog/how-to-keep-your-spg11-records-organized-in-one-place',
    excerpt: 'Consolidate multiple hospital portals and physical paperwork into a single, cohesive health vault that travels with you.',
    category: 'Guides & Organization',
    author: {
      name: 'Michael Chen',
      role: 'Digital Health Advocate & Caregiver',
      institution: 'HSP Family Alliance',
    },
    publishedDate: 'October 2, 2026',
    readTime: '6 min read',
    tags: ['Health Vault', 'Records Management', 'Patient Advocacy', 'Care Coordination'],
    coverImage: {
      alt: 'Concept of a centralized, secure digital health vault consolidating scattered patient files',
      aspectRatio: '16:9',
      badgeText: 'Records Management',
    },
    keyTakeaways: [
      'Centralize records across different health systems using a dedicated digital vault or secure portal.',
      'Always request complete copies of diagnostic imaging reports and molecular genetic testing in PDF format.',
      'Maintain an updated Master Medication and Allergy List that can be printed on a single sheet of paper.'
    ],
    sections: [
      {
        heading: 'The Fragmented Health System Reality',
        paragraphs: [
          'Because SPG11 is an ultra-rare condition, care is rarely confined to one health system. A patient may receive primary care locally, attend an academic university medical center for neuromuscular neurology, visit a pediatric genetics center, and receive physical therapy in the community.',
          'Each system maintains its own proprietary patient portal. Without a central hub managed by the family, crucial health data remains trapped in silos, forcing caregivers to repeatedly explain the patient’s medical background.'
        ]
      },
      {
        heading: 'Building Your Single Source of Truth',
        subheading: 'Essential Elements to Include in One Hub',
        paragraphs: [
          'To create a reliable single source of truth, ensure that the following core items are saved directly in your personal digital vault:'
        ],
        bulletPoints: [
          'Complete Molecular Genetic Sequencing Report: The specific KIAA1840 mutations and interpretation.',
          'Radiology Reports: Highlighting baseline and follow-up corpus callosum thickness and white matter signals.',
          'Neurological Assessment Summaries: Including Spastic Paraplegia Rating Scale (SPRS) or clinical motor notes.',
          'Orthotic Prescriptions: Specifications for ankle-foot orthoses (AFOs) or mobility equipment.',
          'Emergency Care Protocol: Detailing contraindications such as succinylcholine avoidance.'
        ],
        internalLink: {
          text: 'Review the SPG11 Medical FAQ & Glossary',
          target: 'faq',
          description: 'Understand clinical terminology and common diagnostic phrases.'
        }
      },
      {
        heading: 'Maintaining the Vault: The 15-Minute Rule',
        paragraphs: [
          'Organization fails when it feels like a second full-time job. Implement a 15-minute routine after every specialist visit: immediately download the visit summary from the clinic portal, rename it with the visit date, and file it in your digital vault.',
          'By doing this promptly, your centralized repository remains continuously up to date without stressful catch-up sessions.'
        ]
      }
    ],
    conclusion: 'When all your records live in one organized location, you transform from reactive paper-gatherers into proactive care leaders. Your medical team will appreciate the clarity, and you will save valuable time.',
    relatedSlugs: [
      'how-to-organize-your-spg11-journey-information-digitally',
      'digital-tools-for-documenting-an-spg11-journey',
      'spg11-journey-documentation-a-simple-digital-approach'
    ]
  },
  {
    id: 'post-5',
    slug: 'digital-tools-for-documenting-an-spg11-journey',
    title: 'Digital Tools for Documenting an SPG11 Journey',
    metaDescription: 'A review of modern digital tools, security considerations, and tailored software features that assist in tracking an SPG11 health journey.',
    canonicalUrl: 'https://www.spg11journey.com/blog/digital-tools-for-documenting-an-spg11-journey',
    excerpt: 'Explore how specialized web applications, document vaults, and mobile-friendly trackers make rare disease documentation effortless.',
    category: 'Digital Health',
    author: {
      name: 'Sarah Jenkins, RN, BSN',
      role: 'Rare Disease Care Coordinator',
      institution: 'Neurogenetics Patient Support Network',
    },
    publishedDate: 'October 2, 2026',
    readTime: '5 min read',
    tags: ['Digital Health', 'Software Tools', 'Data Privacy', 'Assistive Technology'],
    coverImage: {
      alt: 'Clean interface illustration highlighting digital accessibility, privacy toggles, and health cards',
      aspectRatio: '16:9',
      badgeText: 'Technology Guide',
    },
    keyTakeaways: [
      'General note apps lack structured fields for spasticity scales, genetic loci, and clinical endpoints.',
      'Dedicated rare-disease trackers prioritize accessibility features like high contrast and dyslexia-friendly fonts.',
      'Prioritize tools with client-side privacy that store sensitive health information locally on your personal device.'
    ],
    sections: [
      {
        heading: 'Why Generic Note-Taking Apps Fall Short',
        paragraphs: [
          'Many caregivers initially begin by jotting down symptoms in generic note apps or spreadsheets. While better than paper napkins, these unstructured formats soon become cluttered and difficult to navigate during clinical appointments.',
          'Generic tools lack specialized prompts for hereditary spastic paraplegia: they do not prompt for spasticity scale numbers, assistive device adaptations, or genetic variant notations. Dedicated web platforms tailored to SPG11 provide the exact taxonomy needed for meaningful documentation.'
        ]
      },
      {
        heading: 'Key Features to Look for in a Digital Journey Tracker',
        subheading: 'Functionality That Makes a Practical Difference',
        paragraphs: [
          'When choosing a digital platform to document an SPG11 journey, look for features designed around real-world constraints:'
        ],
        bulletPoints: [
          'High Accessibility Standards: WCAG 2.1 Level AA compliance, font resizing, high contrast modes, and plain-language toggles.',
          'Client-Side Privacy: Platforms that keep personal data in browser storage rather than selling data to third-party brokers.',
          'One-Click Report Generation: The ability to export a standardized 1-page PDF summary for neurologist consultations.',
          'Cross-Device Responsiveness: Clean usability across desktop monitors, tablets, and mobile smartphones.'
        ],
        internalLink: {
          text: 'Explore Platform Features & Capabilities',
          target: 'features',
          description: 'Learn about all the tools integrated into the SPG11 Hub.'
        }
      },
      {
        heading: 'Privacy and Data Sovereignty in Rare Disease Management',
        paragraphs: [
          'Because rare diseases involve highly specific genetic identifiers, protecting family privacy is paramount. Ensure your chosen tools do not mandate public sharing of medical data, and always keep encrypted local backups of any uploaded clinical documents.'
        ]
      }
    ],
    conclusion: 'The right digital tools eliminate administrative friction so you can focus on daily living and wellness. By leveraging modern, accessible platforms, you take command of your medical narrative.',
    relatedSlugs: [
      'how-to-organize-your-spg11-journey-information-digitally',
      'what-is-an-spg11-journey-tracker-and-how-does-it-work',
      'spg11-journey-documentation-a-simple-digital-approach'
    ]
  },
  {
    id: 'post-6',
    slug: 'what-information-can-you-keep-in-an-spg11-journey-tracker',
    title: 'What Information Can You Keep in an SPG11 Journey Tracker?',
    metaDescription: 'A complete inventory of data points to document in an SPG11 tracker, including mobility milestones, genetic variants, therapies, and emergency contacts.',
    canonicalUrl: 'https://www.spg11journey.com/blog/what-information-can-you-keep-in-an-spg11-journey-tracker',
    excerpt: 'From genetic variant notations to daily spasticity scores and physical therapy regimens, discover what details are most valuable to record.',
    category: 'Caregiver Tools',
    author: {
      name: 'Dr. Aris Thorne, PhD',
      role: 'Director of Clinical Trial Operations',
      institution: 'International Hereditary Ataxia & Paraplegia Alliance',
    },
    publishedDate: 'October 2, 2026',
    readTime: '6 min read',
    tags: ['Data Points', 'Clinical Metrics', 'Mobility Scores', 'Caregiver Checklist'],
    coverImage: {
      alt: 'Checklist diagram showing medical categories, mobility indicators, and clinical reports',
      aspectRatio: '16:9',
      badgeText: 'Data Inventory',
    },
    keyTakeaways: [
      'Capture baseline genetic variant details, such as chromosome 15q21.1 KIAA1840 mutations.',
      'Record functional mobility metrics: walking endurance, assistive device needs, and balance changes.',
      'Keep comprehensive logs of physical and speech therapy goals, medication dosages, and side effects.'
    ],
    sections: [
      {
        heading: 'Categorizing Meaningful Information',
        paragraphs: [
          'One common question families ask is: "What should I actually record in the tracker?" Trying to write down every minor occurrence leads to tracker fatigue. The secret is focusing on structured information that clinicians and therapists directly use to evaluate care plans.',
          'Here is the complete inventory of high-value information categories recommended for an SPG11 journey tracker.'
        ]
      },
      {
        heading: 'The 5 Essential Data Categories',
        subheading: 'From Molecular Details to Functional Milestones',
        paragraphs: [
          'Group your information into these five categories for maximum clinical utility:'
        ],
        bulletPoints: [
          '1. Diagnostic & Genetic Profile: Exact mutation description (e.g., frameshift or nonsense mutation in SPG11/KIAA1840), date of diagnosis, and treating neuromuscular center.',
          '2. Mobility & Spasticity Severity: Monthly self-assessed 1-to-10 stiffness scores, morning stiffness duration, gait observations, and falls frequency.',
          '3. Assistive Technology & Orthotics: Ankle-foot orthosis (AFO) types, adjustments made by the orthotist, cane/walker/wheelchair usage, and home safety adaptations.',
          '4. Speech, Swallowing & Cognition: Any perceived voice changes, swallowing safety observations, cognitive energy levels, or learning fatigue patterns.',
          '5. Clinical Appointments & Care Team Contacts: Primary neurologist, physical therapist, genetic counselor, and emergency contact details.'
        ],
        internalLink: {
          text: 'View Cellular Biology & Research Insights',
          target: 'pathology',
          description: 'Learn how spatacsin protein mutations affect lysosomal reformation.'
        }
      },
      {
        heading: 'Photos and Milestone Memories',
        paragraphs: [
          'Numbers and notes only tell part of the story. Adding milestone photos—such as the first day wearing new carbon-fiber AFOs, or a photo from an adaptive sports event—adds qualitative richness to your records and serves as an inspiring family archive.'
        ]
      }
    ],
    conclusion: 'Focus on quality over quantity. By maintaining consistent entries across these five core categories, your SPG11 Journey Tracker becomes an indispensable health resume.',
    relatedSlugs: [
      'how-to-create-a-simple-spg11-journey-timeline',
      'a-beginners-guide-to-using-an-spg11-journey-tracker',
      'how-families-can-organize-important-spg11-journey-information'
    ]
  },
  {
    id: 'post-7',
    slug: 'how-to-create-a-simple-spg11-journey-timeline',
    title: 'How to Create a Simple SPG11 Journey Timeline',
    metaDescription: 'Learn how to construct a chronological health timeline for SPG11 that clarifies disease progression and simplifies clinical intake for new specialists.',
    canonicalUrl: 'https://www.spg11journey.com/blog/how-to-create-a-simple-spg11-journey-timeline',
    excerpt: 'A step-by-step framework to map diagnostic dates, symptom onset, equipment introductions, and therapy milestones into a clear timeline.',
    category: 'Guides & Organization',
    author: {
      name: 'Elena Rostova, MD, PhD',
      role: 'Clinical Neurogeneticist',
      institution: 'European HSP Consortium',
    },
    publishedDate: 'October 2, 2026',
    readTime: '5 min read',
    tags: ['Timeline', 'Clinical History', 'Care Milestones', 'Diagnostic Journey'],
    coverImage: {
      alt: 'Chronological timeline infographic highlighting onset, diagnosis, therapy, and clinical milestones',
      aspectRatio: '16:9',
      badgeText: 'Timeline Guide',
    },
    keyTakeaways: [
      'A chronological timeline helps specialists immediately understand the historical pace of functional changes.',
      'Anchor your timeline to key milestone events: first symptoms noticed, MRI date, genetic confirmation, and orthotic adoption.',
      'Keep the timeline concise enough to fit on one or two pages for easy doctor review.'
    ],
    sections: [
      {
        heading: 'Why Timelines are Clinically Invaluable',
        paragraphs: [
          'Whenever you consult a new neurologist, physiatrist, or clinical trial investigator, the first question is always: "When did symptoms begin, and how have they evolved over time?"',
          'Attempting to piece together dates on the spot often leads to inaccuracies. A pre-built SPG11 Journey Timeline provides an immediate, authoritative summary of your family’s medical history from onset to the present day.'
        ]
      },
      {
        heading: 'Step-by-Step: Constructing Your SPG11 Timeline',
        subheading: '4 Chronological Milestones to Include',
        paragraphs: [
          'Construct your timeline in four distinct milestone stages:'
        ],
        bulletPoints: [
          'Phase 1: Onset & Early Observation — Record the age or year when subtle gait stiffness, tripping, or toe-walking was first noticed.',
          'Phase 2: Diagnostic Evaluation — Note the initial pediatric/neurology consult, the date of brain MRI showing thin corpus callosum, and date of definitive genetic testing.',
          'Phase 3: Therapeutic Interventions — Document the start of physical therapy, trials of antispasticity medications (baclofen, tizanidine), or introduction of AFOs.',
          'Phase 4: Current Functional Status — Summarize current baseline mobility (distance walked unassisted, assistive device used, daily endurance).'
        ],
        internalLink: {
          text: 'Read How SPG11 Journey Tracker Works',
          target: 'how-it-works',
          description: 'Follow our 3-step walkthrough to build your digital timeline.'
        }
      },
      {
        heading: 'Keeping the Timeline Dynamic',
        paragraphs: [
          'A timeline is not a static relic; it grows as life continues. Add a brief update every 6 to 12 months following major clinic visits or upon achieving significant personal milestones.'
        ]
      }
    ],
    conclusion: 'A clean timeline transforms complex medical years into a readable, coherent story. It saves time in waiting rooms and ensures every doctor understands your journey from day one.',
    relatedSlugs: [
      'a-beginners-guide-to-using-an-spg11-journey-tracker',
      'spg11-journey-documentation-a-simple-digital-approach',
      'what-is-an-spg11-journey-tracker-and-how-does-it-work'
    ]
  },
  {
    id: 'post-8',
    slug: 'a-beginners-guide-to-using-an-spg11-journey-tracker',
    title: "A Beginner's Guide to Using an SPG11 Journey Tracker",
    metaDescription: 'New to SPG11 tracking? Follow this beginner-friendly guide to set up your profile, log baseline symptoms, and prepare for doctor visits.',
    canonicalUrl: 'https://www.spg11journey.com/blog/a-beginners-guide-to-using-an-spg11-journey-tracker',
    excerpt: 'Step-by-step guidance for newly diagnosed individuals and families getting started with health documentation without feeling overwhelmed.',
    category: 'Clinical Preparation',
    author: {
      name: 'Sarah Jenkins, RN, BSN',
      role: 'Rare Disease Care Coordinator',
      institution: 'Neurogenetics Patient Support Network',
    },
    publishedDate: 'October 2, 2026',
    readTime: '6 min read',
    tags: ['Beginners Guide', 'Getting Started', 'Caregiver Setup', 'Baseline Health'],
    coverImage: {
      alt: 'Clean step-by-step visual diagram illustrating setup, logging, and reviewing an SPG11 journey',
      aspectRatio: '16:9',
      badgeText: 'Beginner Walkthrough',
    },
    keyTakeaways: [
      'Start small: begin with a 10-minute setup of basic profile details and treating neurologist info.',
      'Record a single baseline entry today rather than trying to backfill years of historical detail.',
      'Schedule a recurring reminder every month or two to log new observations.'
    ],
    sections: [
      {
        heading: 'Starting Fresh After Diagnosis',
        paragraphs: [
          'Receiving a diagnosis of Spastic Paraplegia Type 11 can be emotionally overwhelming. In the first few months, families face a flood of medical terminology: KIAA1840 mutations, thin corpus callosum, spasticity scores, and physical therapy regimens.',
          'It is completely natural to feel uncertain about where to start. An SPG11 Journey Tracker is built to ease this transition, providing a calm, structured space to organize information at your own pace.'
        ]
      },
      {
        heading: 'Three Simple Steps to Get Started',
        subheading: 'Your First 15 Minutes with the Tracker',
        paragraphs: [
          'You do not need to reconstruct your entire life history today. Follow these three actionable steps:'
        ],
        bulletPoints: [
          'Step 1: Set Up Your Profile — Enter basic information: patient age, diagnosed variant (if known), primary neuromuscular clinic, and emergency caregiver phone numbers.',
          'Step 2: Log Your Baseline Today — Record how you or your loved one is moving today. What is the current spasticity score (1-10)? Are braces or canes currently used?',
          'Step 3: Upload Key Documents — Attach a digital copy of your genetic test result and brain MRI report into your local vault so you always have them on hand.'
        ],
        internalLink: {
          text: 'Check Active SPG11 Clinical Trials',
          target: 'trials',
          description: 'Browse global observational registries and natural history pipelines.'
        }
      },
      {
        heading: 'Overcoming Documentation Fatigue',
        paragraphs: [
          'The most common pitfall is attempting to log every daily twitch or muscle ache, leading to burnout within two weeks. SPG11 is a slowly evolving condition; monthly or bi-monthly check-ins are more than sufficient to build high-quality longitudinal trends.'
        ]
      }
    ],
    conclusion: 'Health tracking is a marathon, not a sprint. By taking small, consistent steps today, you build an invaluable personal asset that serves your care team for years to come.',
    relatedSlugs: [
      'what-is-an-spg11-journey-tracker-and-how-does-it-work',
      'how-to-organize-your-spg11-journey-information-digitally',
      'spg11-journey-documentation-a-simple-digital-approach'
    ]
  },
  {
    id: 'post-9',
    slug: 'how-families-can-organize-important-spg11-journey-information',
    title: 'How Families Can Organize Important SPG11 Journey Information',
    metaDescription: 'Practical advice for families and caregiver circles to coordinate care, share responsibilities, and keep essential SPG11 medical details up to date.',
    canonicalUrl: 'https://www.spg11journey.com/blog/how-families-can-organize-important-spg11-journey-information',
    excerpt: 'Discover collaborative routines for parents, siblings, and care partners to manage appointments, therapy equipment, and emergency preparedness together.',
    category: 'Caregiver Tools',
    author: {
      name: 'Michael Chen',
      role: 'Digital Health Advocate & Caregiver',
      institution: 'HSP Family Alliance',
    },
    publishedDate: 'October 2, 2026',
    readTime: '5 min read',
    tags: ['Family Care', 'Caregiver Circle', 'Emergency Preparedness', 'Communication'],
    coverImage: {
      alt: 'Family and caregiver team reviewing medical schedule and coordinated care notes',
      aspectRatio: '16:9',
      badgeText: 'Family Coordination',
    },
    keyTakeaways: [
      'Distribute care coordination tasks (appointment booking, records filing, equipment upkeep) among family members.',
      'Ensure all primary caregivers have immediate digital access to emergency medical cards.',
      'Conduct a quarterly family check-in to review therapy goals and school or workplace accommodations.'
    ],
    sections: [
      {
        heading: 'Caregiving is a Team Endeavor',
        paragraphs: [
          'In many rare disease households, administrative knowledge lives solely in the head of one primary caregiver—often a parent or spouse. If that caregiver falls ill or becomes unavailable, other family members can struggle to find records, doctors’ numbers, or emergency protocols.',
          'Organizing SPG11 journey information in a centralized digital format creates transparent, shared visibility for the entire family circle.'
        ]
      },
      {
        heading: 'Collaborative Organizational Strategies',
        subheading: 'Practical Habits for Families',
        paragraphs: [
          'Adopt these collaborative habits to distribute the caregiving load effectively:'
        ],
        bulletPoints: [
          'Shared Emergency Access: Make sure secondary caregivers, grandparents, and school nurses know where to find the emergency wallet card with the succinylcholine contraindication.',
          'Consolidated Equipment Inventory: Keep serial numbers, warranties, and orthotist contacts for wheelchairs, standing frames, and AFOs in one document.',
          'Quarterly Family Alignment: Spend twenty minutes every three months reviewing upcoming clinic dates, prescription refills, and adaptive equipment adjustments.'
        ],
        internalLink: {
          text: 'Contact the SPG11 Alliance Community',
          target: 'contact',
          description: 'Connect with support organizations and peer family groups.'
        }
      },
      {
        heading: 'Supporting the Person with SPG11',
        paragraphs: [
          'Whenever possible, involve the individual with SPG11 in selecting their own goals, rating their comfort, and choosing photos for the timeline. Fostering self-advocacy and agency is one of the greatest benefits of collaborative health documentation.'
        ]
      }
    ],
    conclusion: 'When families organize together, care becomes more coordinated, resilient, and compassionate. Shared knowledge builds confidence for the entire household.',
    relatedSlugs: [
      'why-keeping-an-spg11-journey-journal-can-be-helpful',
      'how-to-keep-your-spg11-records-organized-in-one-place',
      'a-beginners-guide-to-using-an-spg11-journey-tracker'
    ]
  },
  {
    id: 'post-10',
    slug: 'spg11-journey-documentation-a-simple-digital-approach',
    title: 'SPG11 Journey Documentation: A Simple Digital Approach',
    metaDescription: 'A streamlined, stress-free digital method for documenting SPG11 progression, maintaining records, and preparing concise doctor summaries.',
    canonicalUrl: 'https://www.spg11journey.com/blog/spg11-journey-documentation-a-simple-digital-approach',
    excerpt: 'Cut through administrative complexity with a minimalist, high-impact digital documentation routine tailored to life with complex HSP.',
    category: 'Digital Health',
    author: {
      name: 'Dr. Aris Thorne, PhD',
      role: 'Director of Clinical Trial Operations',
      institution: 'International Hereditary Ataxia & Paraplegia Alliance',
    },
    publishedDate: 'October 2, 2026',
    readTime: '5 min read',
    tags: ['Minimalist Tracking', 'Digital Routine', 'Doctor Prep', 'Longitudinal Records'],
    coverImage: {
      alt: 'Clean illustration of a simplified, stress-free digital health documentation workflow',
      aspectRatio: '16:9',
      badgeText: 'Streamlined Approach',
    },
    keyTakeaways: [
      'Documentation should relieve stress, not create it; keep entries concise and purposeful.',
      'Focus on the 3 Ms: Mobility, Medications, and Milestones.',
      'Generate a standardized 1-page visit report prior to each neurology appointment.'
    ],
    sections: [
      {
        heading: 'Simplicity Over Perfection',
        paragraphs: [
          'The greatest obstacle to consistent medical documentation is overcomplication. When families feel pressured to log dozens of variables every day, tracking quickly becomes unsustainable.',
          'A simple, minimalist digital approach focuses strictly on what matters most for clinical care and peace of mind: high-signal data captured at steady, manageable intervals.'
        ]
      },
      {
        heading: 'The 3-M Rule of Minimalist Documentation',
        subheading: 'What Really Matters in SPG11 Management',
        paragraphs: [
          'Whenever you open your digital tracker, keep the "3-M Rule" in mind:'
        ],
        bulletPoints: [
          '1. Mobility: Did walking distance, balance, or stair-climbing change this month? Are orthotics or assistive devices working comfortably?',
          '2. Medications & Therapies: Have antispasticity dosages changed? Are there any side effects like drowsiness or dry mouth? How frequently is physical therapy occurring?',
          '3. Milestones: Note key medical dates (new MRI, clinic visit) and meaningful personal milestones.'
        ],
        internalLink: {
          text: 'Start Your Journey with SPG11 Tracker',
          target: 'journey',
          description: 'Experience a streamlined digital health organizer built for families.'
        }
      },
      {
        heading: 'Pre-Visit Preparation: The 1-Page Summary',
        paragraphs: [
          'Before attending your semi-annual or annual neurology appointment, print or export a clean 1-page summary. Handing your doctor a concise report showing your current spasticity score, recent milestones, and specific questions ensures every minute of your visit is utilized effectively.'
        ]
      }
    ],
    conclusion: 'By adopting a simple, disciplined digital routine, you safeguard your health history while keeping administrative burdens light. Focus on living life, and let your tracker handle the details.',
    relatedSlugs: [
      'what-is-an-spg11-journey-tracker-and-how-does-it-work',
      'digital-tools-for-documenting-an-spg11-journey',
      'a-beginners-guide-to-using-an-spg11-journey-tracker'
    ]
  }
];
