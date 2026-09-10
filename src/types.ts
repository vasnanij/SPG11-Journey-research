export type TrialStatus = 
  | 'Recruiting' 
  | 'Active, not recruiting' 
  | 'Enrolling by invitation' 
  | 'Completed' 
  | 'Pre-clinical';

export type TrialPhase = 'Pre-clinical' | 'Phase 1' | 'Phase 1/2' | 'Phase 2' | 'Phase 3' | 'Observational / Registry';

export interface ClinicalTrial {
  id: string;
  nctId?: string;
  title: string;
  phase: TrialPhase;
  status: TrialStatus;
  interventionType: 'Small Molecule' | 'Gene Therapy' | 'Biomarker / Natural History' | 'Repurposed Drug' | 'Rehabilitation';
  interventionName: string;
  leadSponsor: string;
  locations: { city: string; country: string; facility: string }[];
  summary: string;
  plainLanguageSummary: string;
  eligibility: {
    ageRange: string;
    geneticConfirmationRequired: boolean;
    inclusion: string[];
    exclusion: string[];
  };
  primaryEndpoints: string[];
  targetEnrollment: number;
  estimatedCompletion: string;
  contactEmail: string;
  lastUpdated: string;
  registryUrl?: string;
}

export interface PatientResource {
  id: string;
  title: string;
  category: 'Daily Living & Care' | 'Mobility & Physical Therapy' | 'Caregiver Support' | 'Genetic Counseling' | 'Medical Emergency';
  description: string;
  plainLanguageTip: string;
  format: 'Downloadable PDF' | 'Interactive Tool' | 'Checklist' | 'Caregiver Guide';
  tags: string[];
  actionLabel: string;
  badge?: string;
}

export interface ResearchPublication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  pmid?: string;
  category: 'Cellular & Lysosomal Pathology' | 'Therapeutic Targets' | 'Clinical Phenotype & Imaging' | 'Biomarkers';
  keyFinding: string;
  scientificAbstract: string;
}

export interface ResearcherSubmission {
  id: string;
  trackingId: string;
  submitterName: string;
  email: string;
  institution: string;
  department: string;
  role: string;
  orcid?: string;
  title: string;
  submissionType: 
    | 'Preclinical In Vitro / In Vivo' 
    | 'Biomarker Dataset' 
    | 'Clinical Observational Cohort' 
    | 'Interventional Trial Result' 
    | 'Novel Genetic Variant / Case Series';
  publicationStatus: 'Published Peer-Reviewed' | 'Preprint (bioRxiv/medRxiv)' | 'Unpublished / Active Study';
  doiOrIdentifier?: string;
  cohortSize?: string;
  abstract: string;
  methodology: string;
  keyFindings: string;
  attachedFileName?: string;
  sharingConsent: boolean;
  submittedAt: string;
}

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  dyslexiaFont: boolean;
  plainLanguageMode: boolean;
}

export interface MedicalTermGlossary {
  term: string;
  plainDefinition: string;
  scientificDefinition: string;
  clinicalRelevance: string;
  category: 'Genetics' | 'Neuroimaging' | 'Symptoms' | 'Therapeutics';
}
