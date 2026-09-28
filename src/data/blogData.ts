export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Scientific Discovery' | 'Clinical Trials' | 'Caregiver Guide' | 'Therapeutic Pipeline';
  author: {
    name: string;
    role: string;
    institution: string;
  };
  publishedDate: string;
  readTime: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
  citations?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'spg11-alr-breakthrough',
    slug: 'spatacsin-lysosomal-reformation-breakthrough',
    title: 'Breakthrough in Spatacsin Lysosomal Reformation: Therapeutic Targets in SPG11',
    excerpt: 'Recent molecular discoveries show how loss of spatacsin impairs autophagic lysosome reformation (ALR), causing pathological lipid accumulation and axonal degeneration.',
    category: 'Scientific Discovery',
    author: {
      name: 'Dr. Elena Rostova, MD, PhD',
      role: 'Associate Professor of Neurogenetics',
      institution: 'European HSP Consortium & Brain Institute',
    },
    publishedDate: 'September 2026',
    readTime: '6 min read',
    tags: ['ALR', 'Spatacsin', 'Lysosomes', 'Autophagy', 'Axonal Degeneration'],
    keyTakeaways: [
      'Spatacsin (encoded by SPG11) forms a critical functional complex with spatacsidin (SPG15) and AP5 to regenerate lysosomes.',
      'When spatacsin is mutated, autolysosomes fail to reform into functional lysosomes, trapping gangliosides and lipids.',
      'Small-molecule modulators targeting lysosomal membrane trafficking show promise in clearing trapped cellular waste in preclinical models.'
    ],
    content: [
      'Hereditary Spastic Paraplegia type 11 (SPG11) represents the most common autosomal recessive complex HSP worldwide. While clinical symptoms predominantly feature progressive spasticity of the lower extremities and cognitive impairment, laboratory investigations have pinpointed the root cause to fundamental defects in cellular recycling.',
      'Spatacsin, a large 2,443-amino acid transmembrane protein, functions as an essential mediator of Autophagic Lysosome Reformation (ALR). During sustained nutrient starvation or cellular stress, cells degrade damaged proteins and organelles inside autolysosomes. To prevent cellular depletion of lysosomes, tubules extrude from autolysosomes and pinch off into proto-lysosomes — a process strictly regulated by spatacsin.',
      'In neurons carrying truncating SPG11 mutations, ALR fails catastrophically. The lysosomes become engorged with undigested gangliosides and neutral lipids, causing membrane stress, impaired retrograde axonal transport, and eventual dying-back axonopathy of long corticospinal tracts.',
      'Crucially, recent preclinical screening has identified pharmacological chaperones and autophagy enhancers capable of partially bypassing spatacsin requirements. These findings provide immediate biological rationales for ongoing and upcoming phase I/II clinical trials.'
    ],
    citations: [
      'Chang J, Lee S, Blackstone C. Spastic paraplegia proteins spatacsin and spastizin regulate lysosome reformation. Cell. 2014;158(3):547-560.',
      'Boutry M, Branchu J, Lustrement C, et al. Inhibition of glucosylceramide synthase improves motor function in a mouse model of SPG11. Brain. 2018;141(3):729-743.'
    ]
  },
  {
    id: 'snfl-biomarker-tracking',
    slug: 'understanding-serum-neurofilament-light-chain-snfl',
    title: 'Understanding Serum Neurofilament Light Chain (sNfL) in SPG11 Progression',
    excerpt: 'Serum neurofilament light chain (sNfL) is revolutionizing how neurologists quantify active neuroaxonal damage and monitor drug efficacy in complex hereditary spastic paraplegia.',
    category: 'Clinical Trials',
    author: {
      name: 'Prof. Marcus Vance, MD',
      role: 'Clinical Neurologist & Trial Investigator',
      institution: 'Neurodegenerative Disease Center',
    },
    publishedDate: 'August 2026',
    readTime: '5 min read',
    tags: ['Biomarkers', 'sNfL', 'Neuroaxonal Injury', 'Clinical Endpoints'],
    keyTakeaways: [
      'Serum NfL levels are elevated approximately 3-fold to 5-fold in active SPG11 compared to age-matched controls.',
      'Unlike clinical motor scales (SPRS), sNfL responds dynamically to active axonal degeneration over months rather than years.',
      'Establishing baseline sNfL is now a mandatory entry criterion in major global natural history registries.'
    ],
    content: [
      'Measuring clinical progression in rare, slowly progressive neurodegenerative disorders like SPG11 has historically been challenging. Clinical scales such as the Spastic Paraplegia Rating Scale (SPRS) require 12 to 24 months to detect statistically meaningful motor changes, lengthening clinical trial duration.',
      'The advent of ultrasensitive Single Molecule Array (Simoa) technology has enabled the precise quantification of neurofilament light chain directly from routine peripheral blood draws. Neurofilaments are structural scaffolding proteins in long axons; when upper motor neurons suffer structural damage, neurofilaments shed into cerebrospinal fluid and cross into the bloodstream.',
      'Recent multicenter cohort studies demonstrated that SPG11 patients show consistently elevated sNfL levels throughout the active stages of motor decline. Intriguingly, levels peak during periods of rapid gait alteration, offering clinicians an objective biological gauge of disease activity.',
      'As trial sponsors design clinical protocols for therapeutic agents, sNfL is poised to serve as a surrogate secondary endpoint to assess whether investigational drugs succeed in halting ongoing neuroaxonal breakdown.'
    ],
    citations: [
      'Wilke C, Rattay TW, Hengel H, et al. Serum neurofilament light chain in hereditary spastic paraplegias. Ann Clin Transl Neurol. 2018;5(9):1106-1112.',
      'Schüle R, Wiethoff S, Martus P, et al. Hereditary spastic paraplegia: Clinicogenetic lessons from 608 patients. Ann Neurol. 2016;79(4):646-658.'
    ]
  },
  {
    id: 'caregiver-neurology-appointment-prep',
    slug: 'preparing-for-your-neurology-visit-a-family-guide',
    title: 'Preparing for Your SPG11 Neurology Visit: A Caregiver & Patient Guide',
    excerpt: 'Maximize the impact of your clinical appointments with structured preparation, symptom tracking logs, mobility notes, and essential medication reviews.',
    category: 'Caregiver Guide',
    author: {
      name: 'Sarah Jenkins, RN, BSN',
      role: 'Rare Disease Care Coordinator',
      institution: 'Pediatric & Adult Neuromuscular Foundation',
    },
    publishedDate: 'August 2026',
    readTime: '4 min read',
    tags: ['Caregiver Toolkit', 'Neurology Visit', 'Medical Records', 'Spasticity Log'],
    keyTakeaways: [
      'Document functional changes in 3 specific domains: mobility/gait, speech/swallowing, and cognitive fatigue.',
      'Bring a consolidated 1-page health report including current genetic variant, medications, and physical therapy frequency.',
      'Always verify that your emergency medical wallet card has the succinylcholine contraindication prominently displayed.'
    ],
    content: [
      'Specialist appointments with pediatric or adult neuromuscular teams are often spaced six to twelve months apart. Because 30 to 45 minutes can pass quickly, structured preparation ensures every vital symptom and daily challenge is addressed.',
      'First, bring a chronologically organized log of mobility milestones and spasticity triggers. Note whether stiffness worsens with cold weather, urinary tract infections, or emotional stress, and document how long morning muscle stiffness lasts.',
      'Second, prepare targeted questions regarding adjunctive therapies: ankle-foot orthoses (AFOs), intrathecal baclofen pump evaluations, robotic gait training, or speech pathology assessments for early dysphagia prevention.',
      'Using our SPG11 Journey Tracker, families can automatically generate and print a clean 1-page Clinical Visit Summary that clinicians can review in less than two minutes, giving you more face-to-face time to discuss next treatment steps.'
    ],
    citations: [
      'Fink JK. Hereditary spastic paraplegia: Overview. GeneReviews®. University of Washington, Seattle; 2021.'
    ]
  },
  {
    id: 'global-trials-update-2026',
    slug: 'global-clinical-trial-pipeline-spatax-treathsp',
    title: 'Global Clinical Trial Pipeline: Updates from SPATAX and TreatHSP Networks',
    excerpt: 'An overview of active multi-center observational registries, prospective natural history studies, and upcoming interventional trials for SPG11.',
    category: 'Therapeutic Pipeline',
    author: {
      name: 'Dr. Aris Thorne, PhD',
      role: 'Director of Clinical Trial Operations',
      institution: 'International Hereditary Ataxia & Paraplegia Alliance',
    },
    publishedDate: 'July 2026',
    readTime: '7 min read',
    tags: ['Clinical Trials', 'SPATAX', 'TreatHSP', 'Natural History', 'Registry'],
    keyTakeaways: [
      'Over 400 patients are actively enrolled across international SPATAX and TreatHSP natural history cohorts.',
      'Harmonized composite digital endpoints (wearable gait sensors and digital motor biomarkers) are entering Phase II trials.',
      'Patient engagement in natural history registries remains the single most critical factor in attracting commercial drug sponsors.'
    ],
    content: [
      'The international landscape for hereditary spastic paraplegias has shifted dramatically from purely descriptive research toward unified clinical trial readiness networks. The European TreatHSP consortium and the international SPATAX network have aligned protocol standards across Europe, North America, and Latin America.',
      'Prospective natural history studies have reached unprecedented maturity. Standardized gait lab analyses, high-resolution corpus callosum volumetry via 3T MRI, and longitudinal sNfL measurements are establishing the definitive natural rate of progression.',
      'For families, participating in an observational study or submitting de-identified registry data is not just research participation — it is laying the mandatory regulatory foundation for FDA and EMA trial approvals.',
      'Stay connected through our Clinical Trials section to track recruiting sites, primary inclusion criteria, and upcoming therapeutic readouts.'
    ],
    citations: [
      'Stevanin G, Azzedine H, Denora P, et al. Mutations in SPG11 are frequent in autosomal recessive spastic paraplegia with thin corpus callosum, cognitive impairment and neuropathy. Brain. 2008;131(3):772-784.'
    ]
  }
];
