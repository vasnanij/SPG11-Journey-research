import React, { useState, useEffect } from 'react';
import { ResearcherSubmission } from '../types';
import { INITIAL_RESEARCHER_SUBMISSIONS } from '../data/spg11Data';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  Upload, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  Building, 
  User, 
  Mail, 
  Hash, 
  FileCheck, 
  Download, 
  Filter, 
  Trash2, 
  ExternalLink,
  Info
} from 'lucide-react';

interface Props {
  plainLanguageMode: boolean;
}

export const ResearcherSubmissionForm: React.FC<Props> = ({ plainLanguageMode }) => {
  const [activeSubTab, setActiveSubTab] = useState<'form' | 'repository'>('form');

  // Submissions State with LocalStorage Persistence
  const [submissions, setSubmissions] = useState<ResearcherSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('spg11_researcher_submissions');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading stored submissions', e);
    }
    return INITIAL_RESEARCHER_SUBMISSIONS;
  });

  // Form Fields State
  const [submitterName, setSubmitterName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('Principal Investigator');
  const [orcid, setOrcid] = useState('');
  const [title, setTitle] = useState('');
  const [submissionType, setSubmissionType] = useState<ResearcherSubmission['submissionType']>('Preclinical In Vitro / In Vivo');
  const [publicationStatus, setPublicationStatus] = useState<ResearcherSubmission['publicationStatus']>('Published Peer-Reviewed');
  const [doiOrIdentifier, setDoiOrIdentifier] = useState('');
  const [cohortSize, setCohortSize] = useState('');
  const [abstract, setAbstract] = useState('');
  const [methodology, setMethodology] = useState('');
  const [keyFindings, setKeyFindings] = useState('');
  const [sharingConsent, setSharingConsent] = useState(false);
  
  // Drag & drop file state
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Status feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationReceipt, setConfirmationReceipt] = useState<ResearcherSubmission | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('spg11_researcher_submissions', JSON.stringify(submissions));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [submissions]);

  // Handle Drag and Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setAttachedFileName(file.name);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  // Validation & Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!submitterName.trim()) errors.submitterName = 'Investigator name is required.';
    if (!email.trim() || !email.includes('@')) errors.email = 'Valid academic or clinical email required.';
    if (!institution.trim()) errors.institution = 'Institution name is required.';
    if (!title.trim()) errors.title = 'Study title is required.';
    if (!abstract.trim() || abstract.length < 30) errors.abstract = 'Abstract must be at least 30 characters.';
    if (!keyFindings.trim()) errors.keyFindings = 'Key findings summary is required.';
    if (!sharingConsent) errors.sharingConsent = 'You must confirm scientific consent for research hub inclusion.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Generate formal tracking number
    const trackingCode = `SPG11-REG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newSubmission: ResearcherSubmission = {
      id: `sub-${Date.now()}`,
      trackingId: trackingCode,
      submitterName,
      email,
      institution,
      department: department || 'Department of Neurology / Genetics',
      role,
      orcid: orcid || undefined,
      title,
      submissionType,
      publicationStatus,
      doiOrIdentifier: doiOrIdentifier || undefined,
      cohortSize: cohortSize || undefined,
      abstract,
      methodology: methodology || 'Experimental protocols detailed in primary correspondence.',
      keyFindings,
      attachedFileName: attachedFileName || undefined,
      sharingConsent,
      submittedAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setSubmissions([newSubmission, ...submissions]);
      setConfirmationReceipt(newSubmission);
      setIsSubmitting(false);

      // Reset form fields
      setSubmitterName('');
      setEmail('');
      setInstitution('');
      setDepartment('');
      setOrcid('');
      setTitle('');
      setDoiOrIdentifier('');
      setCohortSize('');
      setAbstract('');
      setMethodology('');
      setKeyFindings('');
      setAttachedFileName(null);
      setSharingConsent(false);
    }, 600);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submissions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `SPG11_Researcher_Submissions_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section id="submit-data-section" className="py-12 bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase">
            <Database className="w-4 h-4" aria-hidden="true" />
            <span>Integrated Scientific Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Researcher Data Submission & Scientific Contact
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Are you investigating spatacsin biology, managing an SPG11 patient cohort, or evaluating novel small molecules? Submit preliminary findings, preprints, or trial metrics to be cataloged in the global open research index.
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <div className="flex gap-2" role="tablist">
            <button
              id="tab-btn-submit-form"
              type="button"
              role="tab"
              aria-selected={activeSubTab === 'form'}
              onClick={() => setActiveSubTab('form')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                activeSubTab === 'form'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Submit New Data & Findings</span>
            </button>

            <button
              id="tab-btn-registry-repo"
              type="button"
              role="tab"
              aria-selected={activeSubTab === 'repository'}
              onClick={() => setActiveSubTab('repository')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                activeSubTab === 'repository'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Submissions Repository ({submissions.length})</span>
            </button>
          </div>

          {activeSubTab === 'repository' && (
            <button
              id="btn-export-submissions"
              type="button"
              onClick={handleExportJSON}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-md text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Registry (JSON)</span>
            </button>
          )}
        </div>

        {/* Confirmation Modal / Banner if just submitted */}
        {confirmationReceipt && (
          <div className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-400 rounded-2xl shadow-sm text-slate-900">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-emerald-950">
                    Submission Received & Cataloged Successfully
                  </h3>
                  <span className="font-mono text-xs font-extrabold bg-emerald-200 text-emerald-900 px-2.5 py-1 rounded border border-emerald-300">
                    ID: {confirmationReceipt.trackingId}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed">
                  Thank you, <strong>{confirmationReceipt.submitterName}</strong> ({confirmationReceipt.institution}). Your data entry titled <em>"{confirmationReceipt.title}"</em> has been recorded in the local repository and forwarded to the SPG11 Clinical & Preclinical Scientific Committee.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    id="btn-view-receipt-in-repo"
                    type="button"
                    onClick={() => {
                      setConfirmationReceipt(null);
                      setActiveSubTab('repository');
                    }}
                    className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-xs"
                  >
                    View in Registry Repository
                  </button>
                  <button
                    id="btn-dismiss-receipt"
                    type="button"
                    onClick={() => setConfirmationReceipt(null)}
                    className="px-3 py-2 rounded-lg text-emerald-800 hover:bg-emerald-100 text-xs font-semibold"
                  >
                    Submit Another Record
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: SUBMISSION FORM */}
        {activeSubTab === 'form' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6" id="researcher-submission-form">
              
              {/* Section 1: Investigator Credentials */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-teal-800 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <User className="w-4 h-4 text-teal-600" />
                  1. Investigator & Academic Affiliation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div>
                    <label htmlFor="submitter-name" className="block font-semibold text-slate-700 mb-1">
                      Lead Investigator / Submitter Name *
                    </label>
                    <input
                      id="submitter-name"
                      type="text"
                      required
                      value={submitterName}
                      onChange={(e) => setSubmitterName(e.target.value)}
                      placeholder="e.g. Dr. Aris Thorne"
                      className={`w-full px-3 py-2 rounded-lg border ${
                        formErrors.submitterName ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'
                      } text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden`}
                    />
                    {formErrors.submitterName && (
                      <span className="text-[11px] text-red-600 mt-1 block">{formErrors.submitterName}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="submitter-email" className="block font-semibold text-slate-700 mb-1">
                      Institutional / Academic Email *
                    </label>
                    <input
                      id="submitter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. a.thorne@university.edu"
                      className={`w-full px-3 py-2 rounded-lg border ${
                        formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'
                      } text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="submitter-role" className="block font-semibold text-slate-700 mb-1">
                      Professional Role / Title
                    </label>
                    <select
                      id="submitter-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Principal Investigator">Principal Investigator (PI)</option>
                      <option value="Clinical Neurologist">Clinical Neurologist / Attending</option>
                      <option value="Clinical Geneticist">Clinical Geneticist</option>
                      <option value="Postdoctoral Fellow / Staff Scientist">Postdoctoral Fellow / Scientist</option>
                      <option value="Clinical Trial Coordinator">Clinical Trial Coordinator</option>
                      <option value="Biopharma / Industry Scientist">Biopharma / Industry Scientist</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="submitter-institution" className="block font-semibold text-slate-700 mb-1">
                      University, Hospital, or Research Institute *
                    </label>
                    <input
                      id="submitter-institution"
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Johns Hopkins Medicine"
                      className={`w-full px-3 py-2 rounded-lg border ${
                        formErrors.institution ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'
                      } text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden`}
                    />
                    {formErrors.institution && (
                      <span className="text-[11px] text-red-600 mt-1 block">{formErrors.institution}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="submitter-dept" className="block font-semibold text-slate-700 mb-1">
                      Department / Laboratory
                    </label>
                    <input
                      id="submitter-dept"
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder="e.g. Department of Neurogenetics"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="submitter-orcid" className="block font-semibold text-slate-700 mb-1">
                      ORCID iD (Optional)
                    </label>
                    <input
                      id="submitter-orcid"
                      type="text"
                      value={orcid}
                      onChange={(e) => setOrcid(e.target.value)}
                      placeholder="0000-0002-XXXX-XXXX"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 font-mono text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Study Classification & Identification */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-teal-800 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Hash className="w-4 h-4 text-teal-600" />
                  2. Study Classification & Focus Area
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div>
                    <label htmlFor="submission-type" className="block font-semibold text-slate-700 mb-1">
                      Data & Study Category *
                    </label>
                    <select
                      id="submission-type"
                      value={submissionType}
                      onChange={(e) => setSubmissionType(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Preclinical In Vitro / In Vivo">Preclinical In Vitro / In Vivo</option>
                      <option value="Biomarker Dataset">Biomarker Dataset (NfL, MRI, etc.)</option>
                      <option value="Clinical Observational Cohort">Clinical Observational Cohort</option>
                      <option value="Interventional Trial Result">Interventional Trial Result</option>
                      <option value="Novel Genetic Variant / Case Series">Novel Genetic Variant / Case Series</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="publication-status" className="block font-semibold text-slate-700 mb-1">
                      Publication Stage
                    </label>
                    <select
                      id="publication-status"
                      value={publicationStatus}
                      onChange={(e) => setPublicationStatus(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Published Peer-Reviewed">Published Peer-Reviewed Article</option>
                      <option value="Preprint (bioRxiv/medRxiv)">Preprint (bioRxiv / medRxiv)</option>
                      <option value="Unpublished / Active Study">Unpublished Pilot / In Preparation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="doi-identifier" className="block font-semibold text-slate-700 mb-1">
                      DOI or Trial NCT ID (If applicable)
                    </label>
                    <input
                      id="doi-identifier"
                      type="text"
                      value={doiOrIdentifier}
                      onChange={(e) => setDoiOrIdentifier(e.target.value)}
                      placeholder="e.g. 10.1093/brain/... or NCT04107298"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="study-title" className="block font-semibold text-slate-700 mb-1 text-xs sm:text-sm">
                    Study / Dataset Title *
                  </label>
                  <input
                    id="study-title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Quantitative Assessment of Lysosomal Enlargement in SPG11 Patient-Derived Motoneurons"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formErrors.title ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'
                    } text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden text-xs sm:text-sm`}
                  />
                  {formErrors.title && (
                    <span className="text-[11px] text-red-600 mt-1 block">{formErrors.title}</span>
                  )}
                </div>
              </div>

              {/* Section 3: Abstract, Methodology & Findings */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-teal-800 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <FileCheck className="w-4 h-4 text-teal-600" />
                  3. Scientific Summary & Key Findings
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="study-abstract" className="font-semibold text-slate-700">
                        Structured Abstract / Data Overview *
                      </label>
                      <span className="text-[11px] text-slate-400">Min. 30 characters</span>
                    </div>
                    <textarea
                      id="study-abstract"
                      rows={3}
                      required
                      value={abstract}
                      onChange={(e) => setAbstract(e.target.value)}
                      placeholder="Summarize the core hypothesis, clinical sample or cellular system, and primary observations..."
                      className={`w-full px-3 py-2 rounded-lg border ${
                        formErrors.abstract ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'
                      } text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden`}
                    />
                    {formErrors.abstract && (
                      <span className="text-[11px] text-red-600 mt-1 block">{formErrors.abstract}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="study-cohort-size" className="font-semibold text-slate-700 block mb-1">
                        Cohort / Sample Size (e.g., 18 patients, 6 iPSC lines)
                      </label>
                      <input
                        id="study-cohort-size"
                        type="text"
                        value={cohortSize}
                        onChange={(e) => setCohortSize(e.target.value)}
                        placeholder="e.g. 24 patients, 12 age-matched controls"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="study-methodology" className="font-semibold text-slate-700 block mb-1">
                        Experimental Methodology / Assay Type
                      </label>
                      <input
                        id="study-methodology"
                        type="text"
                        value={methodology}
                        onChange={(e) => setMethodology(e.target.value)}
                        placeholder="e.g. Simoa NfL assay, High-content confocal microscopy"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="study-findings" className="font-semibold text-slate-700 block mb-1">
                      Key Findings & Therapeutic Implications *
                    </label>
                    <textarea
                      id="study-findings"
                      rows={2}
                      required
                      value={keyFindings}
                      onChange={(e) => setKeyFindings(e.target.value)}
                      placeholder="What is the primary actionable conclusion for SPG11 disease understanding, biomarker validation, or therapy?"
                      className={`w-full px-3 py-2 rounded-lg border ${
                        formErrors.keyFindings ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'
                      } text-slate-900 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden`}
                    />
                    {formErrors.keyFindings && (
                      <span className="text-[11px] text-red-600 mt-1 block">{formErrors.keyFindings}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 4: File Upload (Drag and drop or browse) */}
              <div>
                <label className="block font-semibold text-slate-700 mb-2 text-xs sm:text-sm">
                  Attach Research Abstract, Preprint PDF, or Supplementary Data Table (Optional)
                </label>
                <div
                  id="research-file-dropzone"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition ${
                    isDragging ? 'border-teal-500 bg-teal-50/50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100/60'
                  }`}
                >
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" aria-hidden="true" />
                  {attachedFileName ? (
                    <div className="flex items-center justify-center gap-2 text-xs text-teal-800 font-semibold">
                      <FileCheck className="w-4 h-4 text-teal-600" />
                      <span>Attached: {attachedFileName}</span>
                      <button
                        type="button"
                        onClick={() => setAttachedFileName(null)}
                        className="text-red-600 hover:text-red-800 ml-2"
                        title="Remove file"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs text-slate-600">
                        Drag and drop your document here, or{' '}
                        <label htmlFor="file-upload-input" className="text-teal-700 font-bold hover:underline cursor-pointer">
                          browse files
                        </label>
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">Supports PDF, XLSX, CSV, FASTA (up to 25MB)</p>
                      <input
                        id="file-upload-input"
                        type="file"
                        onChange={handleFileInputChange}
                        className="sr-only"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Section 5: Scientific Consent & Submit */}
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <input
                    id="consent-checkbox"
                    type="checkbox"
                    checked={sharingConsent}
                    onChange={(e) => setSharingConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="consent-checkbox" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                    I confirm that I am an authorized author/contributor of this work. I consent to index this metadata within the SPG11 Global Research Registry for legitimate scientific, caregiver, and trial collaborative purposes.
                  </label>
                </div>
                {formErrors.sharingConsent && (
                  <span className="text-[11px] text-red-600 mt-1 block pl-7">{formErrors.sharingConsent}</span>
                )}

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Instant unique tracking code generated upon submission</span>
                  </div>

                  <button
                    id="btn-submit-research-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm transition shadow-sm disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Recording Submission...' : 'Submit Research Data'}</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}

        {/* TAB 2: SUBMISSIONS REPOSITORY */}
        {activeSubTab === 'repository' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-teal-600" />
                <span>
                  Showing <strong>{submissions.length}</strong> cataloged investigator contributions
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Maintained in browser registry • Real-time synchronization
              </div>
            </div>

            {submissions.map((sub) => (
              <article
                key={sub.id}
                id={`submission-entry-${sub.trackingId}`}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-900 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                      {sub.trackingId}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {sub.submissionType}
                    </span>
                    <span className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {sub.publicationStatus}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Logged: {new Date(sub.submittedAt).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {sub.title}
                </h3>

                <div className="text-xs text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                  <span>Investigator: <strong>{sub.submitterName}</strong> ({sub.role})</span>
                  <span>Institution: <strong>{sub.institution}</strong></span>
                  {sub.orcid && (
                    <span className="text-teal-700 font-mono">ORCID: {sub.orcid}</span>
                  )}
                  {sub.doiOrIdentifier && (
                    <span className="font-mono text-slate-500">Ref: {sub.doiOrIdentifier}</span>
                  )}
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700 mb-3 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">Abstract Summary:</span>
                  <p>{sub.abstract}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded bg-teal-50/50 border border-teal-100">
                    <span className="font-bold text-teal-900 block mb-0.5">Key Findings:</span>
                    <p className="text-teal-950">{sub.keyFindings}</p>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800 block mb-0.5">Methodology & Cohort:</span>
                    <p className="text-slate-600">{sub.methodology} {sub.cohortSize ? `(${sub.cohortSize})` : ''}</p>
                  </div>
                </div>

                {sub.attachedFileName && (
                  <div className="mt-3 text-[11px] text-slate-500 flex items-center gap-1.5 pt-2 border-t border-slate-100">
                    <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Attached Document: <strong>{sub.attachedFileName}</strong></span>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
