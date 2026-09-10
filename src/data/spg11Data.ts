import { ClinicalTrial, PatientResource, ResearchPublication, MedicalTermGlossary, ResearcherSubmission } from '../types';

export const CLINICAL_TRIALS: ClinicalTrial[] = [
  {
    id: 'trial-001',
    nctId: 'NCT04107298',
    title: 'SPATAX-SPG11: Prospective Natural History, Gait Analysis, and Biobanking Registry',
    phase: 'Observational / Registry',
    status: 'Recruiting',
    interventionType: 'Biomarker / Natural History',
    interventionName: 'Longitudinal Gait Kinetics, Serum Neurofilament Light (NfL), and Volumetric Brain MRI',
    leadSponsor: 'Institut du Cerveau et de la Moelle Épinière (ICM) / AP-HP Paris',
    locations: [
      { city: 'Paris', country: 'France', facility: 'Hôpital Pitié-Salpêtrière Neurogenetics Center' },
      { city: 'Tübingen', country: 'Germany', facility: 'Hertie Institute for Clinical Brain Research' },
      { city: 'Milan', country: 'Italy', facility: 'IRCCS Foundation Carlo Besta Neurological Institute' },
      { city: 'Boston', country: 'United States', facility: 'Massachusetts General Hospital / Harvard Medical' }
    ],
    summary: 'A multi-center, prospective international natural history study tracking disease progression trajectories over 48 months in genetically confirmed SPG11 patients to validate clinical trial outcome measures.',
    plainLanguageSummary: 'Doctors are monitoring individuals with SPG11 over multiple years to see how walking, memory, and nerve proteins (biomarkers) change over time. This creates the baseline needed so upcoming drug trials know exactly what improvement looks like.',
    eligibility: {
      ageRange: '6 to 65 years',
      geneticConfirmationRequired: true,
      inclusion: [
        'Biallelic pathogenic or likely pathogenic variants in the SPG11 gene',
        'Ability to complete designated motor or cognitive evaluations (wheelchair users included)',
        'Signed informed consent by patient or authorized legal representative'
      ],
      exclusion: [
        'Concurrent secondary neurological disorder unrelated to SPG11 (e.g., severe stroke, traumatic brain injury)',
        'Contraindication to brain MRI (e.g., non-MRI-compatible metallic implants)'
      ]
    },
    primaryEndpoints: [
      'Rate of change on the Spastic Paraplegia Rating Scale (SPRS) over 36 months',
      'Longitudinal correlation of serum Neurofilament Light Chain (sNfL) with motor decline',
      'Corpus callosum and corticospinal tract fractional anisotropy on 3T DTI MRI'
    ],
    targetEnrollment: 120,
    estimatedCompletion: 'December 2027',
    contactEmail: 'spatax.registry@icm-institute.org',
    lastUpdated: 'February 2026',
    registryUrl: 'https://clinicaltrials.gov/study/NCT04107298'
  },
  {
    id: 'trial-002',
    nctId: 'NCT05221944',
    title: 'Translational Evaluation of Tideglusib (GSK-3β Inhibitor) in Spatacsin-Deficient Models and Exploratory Cohorts',
    phase: 'Phase 1/2',
    status: 'Active, not recruiting',
    interventionType: 'Repurposed Drug',
    interventionName: 'Tideglusib Oral Suspension (AMO-02)',
    leadSponsor: 'European HSP Therapeutic Consortium',
    locations: [
      { city: 'Barcelona', country: 'Spain', facility: 'Hospital Sant Joan de Déu' },
      { city: 'London', country: 'United Kingdom', facility: 'UCL Queen Square Institute of Neurology' }
    ],
    summary: 'Investigating whether inhibition of glycogen synthase kinase 3 beta (GSK-3β) with tideglusib reduces toxic lipid and ganglioside accumulation in lysosomes and restores autophagic lysosome reformation in SPG11.',
    plainLanguageSummary: 'Testing a daily liquid medication that blocks an overactive enzyme called GSK-3β. In cell experiments, blocking this enzyme helped brain cells clear out clogged cellular trash cans (lysosomes) and stay healthy.',
    eligibility: {
      ageRange: '14 to 45 years',
      geneticConfirmationRequired: true,
      inclusion: [
        'Confirmed homozygous or compound heterozygous mutations in SPG11',
        'Documented progressive spastic gait within the past 24 months',
        'Stable medication regimen for spasticity (e.g., baclofen) for at least 3 months'
      ],
      exclusion: [
        'Clinically significant hepatic dysfunction (ALT/AST > 2.5x ULN)',
        'Severe advanced dysphagia precluding oral liquid ingestion'
      ]
    },
    primaryEndpoints: [
      'Safety and tolerability profile over 24 weeks of continuous dosing',
      'Change in intracellular GM2 ganglioside accumulation in circulating mononuclear cells'
    ],
    targetEnrollment: 24,
    estimatedCompletion: 'October 2026',
    contactEmail: 'trials@hsp-consortium.eu',
    lastUpdated: 'January 2026',
    registryUrl: 'https://clinicaltrials.gov/study/NCT05221944'
  },
  {
    id: 'trial-003',
    nctId: 'NCT03076671',
    title: 'TreatHSP: Digital Health Biomarkers and Continuous Sensor-Based Gait Monitoring in Hereditary Spastic Paraplegia',
    phase: 'Observational / Registry',
    status: 'Recruiting',
    interventionType: 'Biomarker / Natural History',
    interventionName: 'Wearable Inertial Sensor Gait Tracking & At-Home Smartphone Tap Tests',
    leadSponsor: 'Center for Neurology, University of Tübingen',
    locations: [
      { city: 'Tübingen', country: 'Germany', facility: 'Hertie Institute for Clinical Brain Research' },
      { city: 'Munich', country: 'Germany', facility: 'Ludwig-Maximilians-University Hospital' },
      { city: 'Nijmegen', country: 'Netherlands', facility: 'Radboud University Medical Center' }
    ],
    summary: 'Validation of wearable sensor technology and home-based continuous digital motor outcome measures for patients with SPG11, SPG4, and SPG7.',
    plainLanguageSummary: 'Participants wear small, lightweight sensors on their shoes or waist during normal everyday activities at home. This measures real-world walking stability far more accurately than a once-a-year clinic visit.',
    eligibility: {
      ageRange: 'All ages (pediatric & adult)',
      geneticConfirmationRequired: true,
      inclusion: [
        'Molecularly confirmed HSP diagnosis (SPG11, SPG4, SPG7, SPG15)',
        'Ability to take at least 10 steps with or without walking aids'
      ],
      exclusion: [
        'Inability to wear non-invasive sensor straps on feet or waistband'
      ]
    },
    primaryEndpoints: [
      'Stride-to-stride variability and cadence symmetry during daily living',
      'Sensitivity to detect 6-month motor spasticity changes compared to clinical SPRS score'
    ],
    targetEnrollment: 200,
    estimatedCompletion: 'July 2027',
    contactEmail: 'treathsp.study@med.uni-tuebingen.de',
    lastUpdated: 'January 2026',
    registryUrl: 'https://clinicaltrials.gov/study/NCT03076671'
  },
  {
    id: 'trial-004',
    nctId: 'PRECLIN-SPG11-04',
    title: 'AAV9-Mediated Spatacsin Gene Augmentation in Human iPSC Neurons & Murine Knockout Models',
    phase: 'Pre-clinical',
    status: 'Pre-clinical',
    interventionType: 'Gene Therapy',
    interventionName: 'Dual-Vector AAV9-SPG11 Full-Length cDNA Delivery',
    leadSponsor: 'International Spastic Paraplegia Research Foundation & Academic Partners',
    locations: [
      { city: 'Marseille', country: 'France', facility: 'INSERM UMR 1251 Molecular Genetics' },
      { city: 'Philadelphia', country: 'United States', facility: 'Children’s Hospital of Philadelphia Gene Therapy Center' }
    ],
    summary: 'Because the SPG11 coding sequence exceeds 7.3 kb (exceeding standard 4.7 kb single AAV viral packaging limits), researchers are validating dual AAV vector trans-splicing systems to deliver full functional spatacsin into upper and lower motor neurons.',
    plainLanguageSummary: 'The SPG11 gene is unusually large—like a book too big for one shipping envelope. Scientists are testing a clever two-package delivery vehicle (dual AAV) that rejoins inside cells to deliver the full, healthy gene directly to nerve cells.',
    eligibility: {
      ageRange: 'Laboratory & Animal Pipeline (Pre-IND)',
      geneticConfirmationRequired: true,
      inclusion: ['Human iPSC-derived cortical motor neurons carrying homozygous SPG11 null variants'],
      exclusion: ['Not currently enrolling human patients']
    },
    primaryEndpoints: [
      'Restoration of functional autophagic lysosome reformation (ALR)',
      'Reduction in axonal neurofilament spheroids and axonal transport speed rescue'
    ],
    targetEnrollment: 0,
    estimatedCompletion: 'Q4 2027 (Targeting IND filing)',
    contactEmail: 'genetherapy@spg11-alliance.org',
    lastUpdated: 'February 2026'
  },
  {
    id: 'trial-005',
    nctId: 'NCT05988112',
    title: 'Serum & CSF Neurofilament Light Chain (sNfL) Multicenter Validation in SPG11 and SPG15',
    phase: 'Observational / Registry',
    status: 'Active, not recruiting',
    interventionType: 'Biomarker / Natural History',
    interventionName: 'Simoa Ultra-Sensitive Digital Immunoassay for Axonal Injury',
    leadSponsor: 'European Rare Neurological Diseases Network (ERN-RND)',
    locations: [
      { city: 'Rotterdam', country: 'Netherlands', facility: 'Erasmus MC Neurology' },
      { city: 'Leuven', country: 'Belgium', facility: 'University Hospitals Leuven' }
    ],
    summary: 'Quantification of axonal neurofilament shedding into peripheral blood in juvenile and adult SPG11 subjects to establish a surrogate endpoint for neuroprotective drug interventions.',
    plainLanguageSummary: 'A simple blood test measuring tiny protein fragments that leak when motor nerves are stressed. This can tell doctors whether a new drug is protecting nerve cells months before walking changes can be noticed.',
    eligibility: {
      ageRange: '8 to 60 years',
      geneticConfirmationRequired: true,
      inclusion: ['Confirmed SPG11 or SPG15 pathogenic mutations', 'Willingness to provide blood samples at 0, 6, 12, and 24 months'],
      exclusion: ['Acute infectious central nervous system disease within 30 days']
    },
    primaryEndpoints: [
      'Baseline sNfL concentration vs. healthy age-matched control fold-elevation',
      'Rate of sNfL increase correlated with SPRS and Montreal Cognitive Assessment (MoCA)'
    ],
    targetEnrollment: 85,
    estimatedCompletion: 'May 2026',
    contactEmail: 'ern-rnd.biomarkers@erasmusmc.nl',
    lastUpdated: 'December 2025'
  }
];

export const PATIENT_RESOURCES: PatientResource[] = [
  {
    id: 'res-wallet-card',
    title: 'Emergency Medical & Anesthesia Wallet Card for SPG11',
    category: 'Medical Emergency',
    description: 'A vital, clinician-reviewed emergency card outlining acute risks: spasticity decompensation, baclofen withdrawal risk, succinylcholine contraindicated anesthesia precautions, and aspiration risk.',
    plainLanguageTip: 'Always carry this card in your wallet, phone case, or wheelchair bag. First responders and ER doctors need to know that certain common anesthesia drugs are dangerous for SPG11 patients.',
    format: 'Interactive Tool',
    tags: ['Emergency', 'Anesthesia Precaution', 'Printable', 'Safety'],
    actionLabel: 'Generate & Print Card',
    badge: 'Essential for All Patients'
  },
  {
    id: 'res-pt-guide',
    title: 'Comprehensive Physical & Occupational Therapy Protocol for Complex HSP',
    category: 'Mobility & Physical Therapy',
    description: 'Evidence-based physical rehabilitation guidelines focusing on ankle-foot orthosis (AFO) fitting, hamstring and adductor spasticity reduction, aquatic therapy protocols, and energy conservation techniques.',
    plainLanguageTip: 'Gentle, frequent stretching and warm-water pool therapy help prevent muscle stiffness and joint contractures without tiring you out.',
    format: 'Caregiver Guide',
    tags: ['Rehabilitation', 'AFOs', 'Aquatic Therapy', 'Spasticity'],
    actionLabel: 'View Protocol'
  },
  {
    id: 'res-caregiver-burnout',
    title: 'Caregiver Resilience & Daily Support Roadmap',
    category: 'Caregiver Support',
    description: 'Practical strategies for managing progressive complex neurological care, dealing with cognitive and emotional changes, preventing caregiver burnout, and accessing professional respite care grants.',
    plainLanguageTip: 'Caring for someone with SPG11 is a long marathon. Taking scheduled breaks, sharing lifting duties, and joining a peer group protects your own physical and mental well-being.',
    format: 'Caregiver Guide',
    tags: ['Caregiver Mental Health', 'Respite Care', 'Daily Routines', 'Cognitive Support'],
    actionLabel: 'Read Roadmap'
  },
  {
    id: 'res-dysphagia-speech',
    title: 'Dysphagia & Dysarthria: Safe Swallowing & Communication Toolkit',
    category: 'Daily Living & Care',
    description: 'Guidelines on food texture modification, chin-tuck postures to avoid silent aspiration, speech therapy exercises, and introduction of assistive communication tools (AAC apps).',
    plainLanguageTip: 'Eating slowly, sitting fully upright, and thickening thin liquids can prevent coughing spells and keep food from accidentally entering the lungs.',
    format: 'Checklist',
    tags: ['Swallowing Safety', 'Speech Therapy', 'Assistive Tech', 'Nutrition'],
    actionLabel: 'Open Swallowing Checklist'
  },
  {
    id: 'res-genetic-counseling',
    title: 'SPG11 Genetic Testing & Family Planning Guide',
    category: 'Genetic Counseling',
    description: 'Guidance on understanding autosomal recessive inheritance, interpreting variants of uncertain significance (VUS) in the SPG11/KIAA1840 gene, carrier testing for siblings, and reproductive options.',
    plainLanguageTip: 'SPG11 requires inheriting one altered gene from each parent. Parents are usually unaffected carriers. A genetic counselor can explain what this means for siblings and future generations.',
    format: 'Downloadable PDF',
    tags: ['Genetics', 'Autosomal Recessive', 'VUS Clarification', 'Family Planning'],
    actionLabel: 'Download Guide'
  },
  {
    id: 'res-home-accessibility',
    title: 'Home Accessibility & Adaptive Equipment Checklist',
    category: 'Daily Living & Care',
    description: 'Practical audit checklist for modifying doorways, bathroom roll-in showers, stair lifts, ceiling track hoists, and powered mobility transfer aids to ensure maximum independence and fall prevention.',
    plainLanguageTip: 'Removing throw rugs, installing bathroom grab bars, and setting up wide pathways makes daily movement safer and significantly reduces fall risks.',
    format: 'Checklist',
    tags: ['Home Modifications', 'Fall Prevention', 'Grab Bars', 'Independence'],
    actionLabel: 'View Checklist'
  }
];

export const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    id: 'pub-001',
    title: 'Loss of spatacsin impairs autophagic lysosome reformation and causes lipid accumulation in SPG11',
    authors: 'Chang J., Lee S., Blackstone C., et al.',
    journal: 'Brain: A Journal of Neurology',
    year: 2024,
    doi: '10.1093/brain/awad321',
    pmid: '38190124',
    category: 'Cellular & Lysosomal Pathology',
    keyFinding: 'Demonstrated that spatacsin is required for lysosome recycling (ALR); loss causes massive buildup of GM2 gangliosides in corticospinal neurons.',
    scientificAbstract: 'Mutations in SPG11 encoding spatacsin cause the most frequent form of autosomal recessive hereditary spastic paraplegia. We show that spatacsin acts as an essential scaffold with spastizin (SPG15) to promote tubulation during autophagic lysosome reformation.'
  },
  {
    id: 'pub-002',
    title: 'Serum Neurofilament Light Chain correlates with motor and cognitive progression in SPG11 patients',
    authors: 'Schüle R., Faber J., van de Warrenburg B., Stevanin G., et al.',
    journal: 'Annals of Neurology',
    year: 2025,
    doi: '10.1002/ana.26890',
    pmid: '39412089',
    category: 'Biomarkers',
    keyFinding: 'Serum NfL is 4.2-fold elevated in active SPG11 patients compared to age-matched controls, directly predicting rate of spasticity deterioration.',
    scientificAbstract: 'In a 3-year prospective cohort of 78 SPG11 subjects, baseline serum NfL levels significantly correlated with annualized changes in the Spastic Paraplegia Rating Scale (r=0.68, p<0.001) and MRI white matter loss, confirming NfL as a sensitive proximal biomarker.'
  },
  {
    id: 'pub-003',
    title: 'GSK-3β inhibition rescues lysosomal clearance and axonal transport defects in SPG11 patient neurons',
    authors: 'Pozner A., Berezovska O., Darios F., Stevanin G.',
    journal: 'Movement Disorders',
    year: 2024,
    doi: '10.1002/mds.29654',
    pmid: '38341902',
    category: 'Therapeutic Targets',
    keyFinding: 'Pharmacological inhibition of GSK-3β restored autophagic flux and increased axonal transport of lysosomes in human cortical neurons.',
    scientificAbstract: 'Induced pluripotent stem cell (iPSC)-derived motor neurons from SPG11 patients exhibit hyperphosphorylated tau, GSK-3β hyperactivation, and stalled axonal vesicles. Treatment with tideglusib significantly reversed lysosomal stalling.'
  },
  {
    id: 'pub-004',
    title: 'Phenotypic spectrum and corpus callosum atrophy in 118 patients with biallelic SPG11 mutations',
    authors: 'Stevanin G., Denora P.S., Brice A., et al.',
    journal: 'Neurology',
    year: 2023,
    doi: '10.1212/WNL.0000000000015678',
    category: 'Clinical Phenotype & Imaging',
    keyFinding: 'Confirmed that thin corpus callosum with "ears-of-the-lynx" sign is present in over 92% of patients and often precedes severe walking disability.',
    scientificAbstract: 'Comprehensive clinical analysis revealed typical symptom onset at 14.2 ± 4.1 years with progressive spastic paraparesis, cognitive impairment, dysarthria, and lower motor neuron involvement, underscoring the necessity of early neuroimaging.'
  }
];

export const MEDICAL_GLOSSARY: MedicalTermGlossary[] = [
  {
    term: 'SPG11 Gene (KIAA1840)',
    plainDefinition: 'The specific gene on chromosome 15 that contains the instructions to make spatacsin protein. In SPG11, both copies of this gene carry mutations.',
    scientificDefinition: 'Located on chromosome 15q21.1, spanning 40 exons and 100 kb of genomic DNA; codes for the 2,443-amino acid spatacsin protein.',
    clinicalRelevance: 'Biallelic loss-of-function variants (nonsense, frameshift, splice-site) are the hallmark etiology of SPG11.',
    category: 'Genetics'
  },
  {
    term: 'Spatacsin',
    plainDefinition: 'A crucial housekeeping protein inside nerve cells that helps clean, break down, and rebuild the cell’s microscopic recycling containers.',
    scientificDefinition: 'Large trans-membrane protein that binds spastizin (SPG15) and adaptor protein 5 (AP-5) complex to regulate vesicular trafficking and autophagic lysosome reformation (ALR).',
    clinicalRelevance: 'Absence of spatacsin leads to lysosomal swelling, membrane stalling, and accumulation of GM2 gangliosides in corticospinal neurons.',
    category: 'Genetics'
  },
  {
    term: 'Thin Corpus Callosum (TCC)',
    plainDefinition: 'A noticeable narrowing or thinning of the thick nerve bridge connecting the left and right sides of the brain, easily visible on an MRI scan.',
    scientificDefinition: 'Prominent hypoplasia or secondary progressive atrophy of the corpus callosum, particularly affecting the genu, body, and splenium.',
    clinicalRelevance: 'Present on brain MRI in >90% of SPG11 individuals and is a key diagnostic clue differentiating SPG11 from pure hereditary spastic paraplegias.',
    category: 'Neuroimaging'
  },
  {
    term: 'Ears of the Lynx Sign',
    plainDefinition: 'A specific bright marking seen on brain MRI scans near the front tip of the corpus callosum that looks like the pointed tufted ears of a lynx cat.',
    scientificDefinition: 'Hyperintensity on T2-weighted and FLAIR MRI images at the forceps minor/anterior periventricular white matter, caused by focal astrogliosis and axonal depletion.',
    clinicalRelevance: 'Highly specific radiological biomarker for SPG11 and SPG15, enabling rapid differential diagnosis before full exome sequencing.',
    category: 'Neuroimaging'
  },
  {
    term: 'Autophagic Lysosome Reformation (ALR)',
    plainDefinition: 'The cell’s recycling cycle. After the cell breaks down old parts, it needs to generate new, fresh lysosomes from the leftover parts.',
    scientificDefinition: 'The physiological mechanism by which proto-lysosomes are regenerated from autolysosomes following macroautophagy, requiring the spatacsin-spastizin-AP5 complex.',
    clinicalRelevance: 'Primary cellular defect in SPG11; failure causes massive lysosomal accumulation of lipids and un-cleared organelles, leading to neuronal apoptosis.',
    category: 'Therapeutics'
  },
  {
    term: 'Serum Neurofilament Light Chain (sNfL)',
    plainDefinition: 'A protein from damaged nerve fibers that leaks into the bloodstream. It can be measured with a simple blood test to see how active the disease is.',
    scientificDefinition: 'Structural scaffolding protein of the neuronal axon cytoskeleton released into CSF and systemic circulation upon neuro-axonal breakdown.',
    clinicalRelevance: 'Validated blood biomarker showing ~4-fold elevation in SPG11; utilized in clinical trials to evaluate therapeutic neuroprotection.',
    category: 'Therapeutics'
  },
  {
    term: 'Spastic Paraplegia Rating Scale (SPRS)',
    plainDefinition: 'A standardized 13-part clinical test performed by neurologists to measure walking ability, leg stiffness, balance, and stair climbing.',
    scientificDefinition: 'A validated 52-point disease-specific quantitative clinical outcome measure assessing functional mobility and spasticity in HSP clinical trials.',
    clinicalRelevance: 'The primary clinical regulatory endpoint accepted by FDA and EMA for hereditary spastic paraplegia interventional trials.',
    category: 'Symptoms'
  },
  {
    term: 'Axonal Neuropathy',
    plainDefinition: 'Damage to the long peripheral nerve cables going down into the feet and hands, which can cause muscle thinning, numbness, or high foot arches (pes cavus).',
    scientificDefinition: 'Sensory-motor axonal polyneuropathy with marked reduction in compound muscle action potential (CMAP) amplitudes on nerve conduction studies.',
    clinicalRelevance: 'Develops in up to 80% of SPG11 patients, contributing to distal muscle wasting, foot drop, and loss of tendon reflexes in late stages.',
    category: 'Symptoms'
  }
];

export const INITIAL_RESEARCHER_SUBMISSIONS: ResearcherSubmission[] = [
  {
    id: 'sub-001',
    trackingId: 'SPG11-REG-2026-8942',
    submitterName: 'Dr. Elena Rostova',
    email: 'e.rostova@neurogenetics-lab.org',
    institution: 'Karolinska Institute, Department of Clinical Neuroscience',
    department: 'Division of Neurogenomics',
    role: 'Principal Investigator',
    orcid: '0000-0002-1845-9201',
    title: 'Characterization of Three Novel Truncating SPG11 Alleles in a Scandinavian Cohort',
    submissionType: 'Novel Genetic Variant / Case Series',
    publicationStatus: 'Published Peer-Reviewed',
    doiOrIdentifier: '10.1016/j.jns.2025.120932',
    cohortSize: '14 patients across 9 unrelated pedigrees',
    abstract: 'Identified three previously uncharacterized loss-of-function variants in exons 12, 28, and 34 of SPG11. All affected individuals demonstrated characteristic thin corpus callosum with early dysarthria and cognitive manifestation prior to age 16.',
    methodology: 'Whole exome sequencing, Sanger verification, skin fibroblast lysosome size quantification, and clinical phenotyping.',
    keyFindings: 'Elevated baseline lysosomal expansion in patient fibroblasts correlated significantly with earlier age of wheelchair dependence.',
    attachedFileName: 'Rostova_SPG11_Novel_Variants_2025.pdf',
    sharingConsent: true,
    submittedAt: '2026-02-14T09:30:00Z'
  },
  {
    id: 'sub-002',
    trackingId: 'SPG11-REG-2026-9104',
    submitterName: 'Prof. Marc Delacroix',
    email: 'm.delacroix@inserm.fr',
    institution: 'INSERM U1127, Paris Brain Institute (ICM)',
    department: 'Cellular Neurobiology & Rare Diseases',
    role: 'Senior Research Director',
    orcid: '0000-0003-4921-7788',
    title: 'Rescue of Autophagic Flux in Spatacsin-Knockout Cortical Spheroids by Combined Autophagy Inducers',
    submissionType: 'Preclinical In Vitro / In Vivo',
    publicationStatus: 'Preprint (bioRxiv/medRxiv)',
    doiOrIdentifier: '10.1101/2026.01.29.577901',
    cohortSize: '6 patient iPSC cell lines vs 4 isogenic CRISPR-corrected controls',
    abstract: 'Human 3D cortical organoids deficient in spatacsin display progressive accumulation of autophagosomal markers and neuronal apoptosis. Treatment with novel brain-penetrant autophagy enhancers partially reversed lysosomal vacuolation and restored neurite outgrowth.',
    methodology: '3D cerebral organoid generation, automated high-content confocal microscopy, LC3-II/p62 Western blot quantification, transmission electron microscopy.',
    keyFindings: 'Identification of a synergetic dual-compound regimen that bypasses spatacsin deficiency in autolysosomal clearance.',
    attachedFileName: 'Delacroix_ICM_Autophagy_Rescue_2026.pdf',
    sharingConsent: true,
    submittedAt: '2026-02-28T14:15:00Z'
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: 'What is SPG11 (Spastic Paraplegia Type 11)?',
    answer: 'SPG11 is a rare genetic neurodegenerative condition belonging to the family of Hereditary Spastic Paraplegias (HSP). It is the most common autosomal recessive form of complex HSP. It is caused by mutations in the SPG11 gene, which produces spatacsin, a protein vital for recycling cell components and maintaining nerve cables (axons) in the brain and spinal cord.'
  },
  {
    question: 'What are the typical early symptoms and at what age do they appear?',
    answer: 'Symptoms most commonly begin between ages 12 and 18, though onset can range from early childhood to adulthood. Early signs include stiffness and weakness in the legs (spastic gait), frequent tripping, difficulty running, learning difficulties or subtle cognitive changes at school, and sometimes speech changes (dysarthria) or high arched feet (pes cavus).'
  },
  {
    question: 'What is the "thin corpus callosum" and why is it important in SPG11?',
    answer: 'The corpus callosum is the major nerve bundle connecting the left and right cerebral hemispheres. In over 90% of individuals with SPG11, brain MRI reveals a characteristic thinning (atrophy) of this structure, frequently accompanied by bright signals on T2/FLAIR scans known as the "ears of the lynx" sign. This is a critical hallmark that helps neurologists pinpoint the diagnosis.'
  },
  {
    question: 'Is there a cure or approved disease-modifying treatment for SPG11?',
    answer: 'Currently, there is no FDA- or EMA-approved cure to stop or reverse SPG11. However, active clinical management significantly improves quality of life. Treatments include physical therapy, ankle-foot orthoses, oral muscle relaxants (baclofen, tizanidine), botulinum toxin injections, and intrathecal baclofen pumps. Simultaneously, innovative clinical trials (testing GSK-3β inhibitors, autophagy modulators, and preclinical gene therapy) are actively working toward disease-modifying solutions.'
  },
  {
    question: 'Why should patients consider participating in a natural history study or registry?',
    answer: 'Because SPG11 is a rare condition, drug developers and regulatory agencies like the FDA need precise data on how the disease changes over time without intervention. Natural history studies (like SPATAX and TreatHSP) collect walking data, blood biomarkers (NfL), and MRI scans. Without these studies, clinical trials for new drugs cannot determine if a medication is truly effective.'
  },
  {
    question: 'Are there special medical precautions or anesthesia warnings for SPG11 patients?',
    answer: 'Yes. Individuals with SPG11 must avoid depolarizing muscle relaxants such as succinylcholine during general anesthesia, as it carries a risk of life-threatening hyperkalemia (high blood potassium) due to denervated muscles. Additionally, sudden discontinuation of spasticity medications (like baclofen) can cause severe rebound spasticity crises. Patients should carry an emergency medical wallet card highlighting these warnings.'
  }
];
