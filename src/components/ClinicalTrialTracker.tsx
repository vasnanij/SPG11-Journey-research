import React, { useState, useMemo } from 'react';
import { ClinicalTrial, TrialStatus } from '../types';
import { CLINICAL_TRIALS } from '../data/spg11Data';
import { 
  FlaskConical, 
  Search, 
  MapPin, 
  Users, 
  Calendar, 
  ExternalLink, 
  Info, 
  Filter, 
  Check, 
  Mail, 
  Sparkles, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Building
} from 'lucide-react';

interface Props {
  plainLanguageMode: boolean;
}

export const ClinicalTrialTracker: React.FC<Props> = ({ plainLanguageMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [expandedTrialId, setExpandedTrialId] = useState<string | null>('trial-001');
  const [showHowToParticipate, setShowHowToParticipate] = useState(false);

  // Filter trials
  const filteredTrials = useMemo(() => {
    return CLINICAL_TRIALS.filter((trial) => {
      const matchesSearch =
        trial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trial.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trial.interventionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (trial.nctId && trial.nctId.toLowerCase().includes(searchTerm.toLowerCase())) ||
        trial.locations.some(
          (loc) =>
            loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            loc.country.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesStatus = selectedStatus === 'All' || trial.status === selectedStatus;
      const matchesType = selectedType === 'All' || trial.interventionType === selectedType;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [searchTerm, selectedStatus, selectedType]);

  const getStatusBadgeClass = (status: TrialStatus) => {
    switch (status) {
      case 'Recruiting':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
      case 'Active, not recruiting':
        return 'bg-blue-100 text-blue-900 border-blue-300 font-semibold';
      case 'Pre-clinical':
        return 'bg-amber-100 text-amber-900 border-amber-300 font-semibold';
      case 'Completed':
        return 'bg-slate-100 text-slate-800 border-slate-300 font-medium';
      default:
        return 'bg-purple-100 text-purple-900 border-purple-300';
    }
  };

  return (
    <section id="trials-section" className="py-12 bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase">
              <FlaskConical className="w-4 h-4" aria-hidden="true" />
              <span>Global Pipeline Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Latest SPG11 Clinical Trials & Research Studies
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore active observational registries, natural history benchmarks, drug repurposing evaluations, and preclinical gene therapy programs worldwide.
            </p>
          </div>

          <button
            id="btn-how-to-participate-toggle"
            type="button"
            onClick={() => setShowHowToParticipate(!showHowToParticipate)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-white text-teal-800 border border-teal-300 hover:bg-teal-50 shadow-xs transition self-start md:self-auto"
          >
            <HelpCircle className="w-4 h-4 text-teal-600" aria-hidden="true" />
            <span>How to Safely Join a Trial</span>
          </button>
        </div>

        {/* How to Participate Educational Drawer */}
        {showHowToParticipate && (
          <div className="mb-8 p-5 sm:p-6 bg-teal-50 border-2 border-teal-300 rounded-xl text-slate-800 shadow-xs">
            <h3 className="font-bold text-teal-950 text-base flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-teal-700" />
              Caregiver & Patient Guide to Clinical Trial Participation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <span className="font-bold text-teal-800 block mb-1">1. Confirm Genetic Report</span>
                <p className="text-slate-600">
                  Almost all interventional studies require certified clinical documentation showing two confirmed mutations (biallelic) in the SPG11 gene.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <span className="font-bold text-teal-800 block mb-1">2. Understand Trial Type</span>
                <p className="text-slate-600">
                  Natural history studies (like SPATAX and TreatHSP) carry no drug risks—they simply track walking, scans, and blood biomarkers to create standards for future drugs.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <span className="font-bold text-teal-800 block mb-1">3. Travel & Accessibility</span>
                <p className="text-slate-600">
                  Many trials offer travel stipends and wheelchair-accessible logistics for patients and an accompanying caregiver. Contact trial coordinators directly via the provided emails.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                id="trial-search-input"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search trial title, drug, NCT ID, or city (e.g., Paris, Tideglusib)..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
                aria-label="Search clinical trials"
              />
            </div>

            {/* Status Filter */}
            <div className="lg:col-span-4 flex items-center gap-2">
              <label htmlFor="trial-status-select" className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Status:
              </label>
              <select
                id="trial-status-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Statuses ({CLINICAL_TRIALS.length})</option>
                <option value="Recruiting">Recruiting Only</option>
                <option value="Active, not recruiting">Active, Not Recruiting</option>
                <option value="Pre-clinical">Pre-clinical Pipeline</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Type Filter */}
            <div className="lg:col-span-3 flex items-center gap-2">
              <label htmlFor="trial-type-select" className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Type:
              </label>
              <select
                id="trial-type-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Intervention Types</option>
                <option value="Biomarker / Natural History">Natural History & Biomarker</option>
                <option value="Repurposed Drug">Repurposed Drug / Small Molecule</option>
                <option value="Gene Therapy">Gene Therapy</option>
              </select>
            </div>

          </div>

          {/* Active filter summary pill */}
          {(selectedStatus !== 'All' || selectedType !== 'All' || searchTerm !== '') && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing <strong>{filteredTrials.length}</strong> of {CLINICAL_TRIALS.length} studies
              </span>
              <button
                id="btn-clear-trial-filters"
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedStatus('All');
                  setSelectedType('All');
                }}
                className="text-teal-700 hover:text-teal-900 font-semibold underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Trials List */}
        {filteredTrials.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center border border-slate-200">
            <FlaskConical className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No studies match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your keyword search or filter selection.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedStatus('All');
                setSelectedType('All');
              }}
              className="mt-4 px-4 py-2 rounded-md bg-teal-600 text-white text-xs font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTrials.map((trial) => {
              const isExpanded = expandedTrialId === trial.id;
              return (
                <article
                  key={trial.id}
                  id={`trial-card-${trial.id}`}
                  className={`bg-white rounded-xl border transition shadow-xs overflow-hidden ${
                    isExpanded ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* Badges Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border ${getStatusBadgeClass(trial.status)}`}>
                          {trial.status}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                          {trial.phase}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-800 border border-teal-200">
                          {trial.interventionType}
                        </span>
                      </div>

                      {trial.nctId && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                            {trial.nctId}
                          </span>
                          {trial.registryUrl && (
                            <a
                              id={`link-nct-${trial.id}`}
                              href={trial.registryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 text-xs font-semibold"
                              title={`View official study details for ${trial.nctId} on ClinicalTrials.gov (opens external site)`}
                            >
                              <span>ClinicalTrials.gov</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {trial.title}
                    </h3>

                    {/* Intervention & Sponsor */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Sponsor: <strong>{trial.leadSponsor}</strong></span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
                        <span>Intervention: <strong>{trial.interventionName}</strong></span>
                      </div>
                    </div>

                    {/* Summary (Plain Language vs Scientific toggle) */}
                    <div className="mt-4 p-3.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm leading-relaxed">
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        <span>{plainLanguageMode ? 'Plain Language Overview' : 'Scientific Study Abstract'}</span>
                        <span className="text-teal-700 font-medium lowercase">
                          {plainLanguageMode ? 'caregiver friendly' : 'clinical terminology'}
                        </span>
                      </div>
                      <p className="text-slate-700">
                        {plainLanguageMode ? trial.plainLanguageSummary : trial.summary}
                      </p>
                    </div>

                    {/* Quick Metadata Pill Grid */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">
                          {trial.locations.map((l) => l.city).join(', ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Cohort: <strong>{trial.targetEnrollment > 0 ? `${trial.targetEnrollment} pts` : 'Laboratory'}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Est. Completion: <strong>{trial.estimatedCompletion}</strong></span>
                      </div>
                      <div className="flex items-center justify-end">
                        <button
                          id={`btn-expand-trial-${trial.id}`}
                          type="button"
                          onClick={() => setExpandedTrialId(isExpanded ? null : trial.id)}
                          className="flex items-center gap-1 font-bold text-teal-700 hover:text-teal-900 transition"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? 'Less Details' : 'Full Protocol & Centers'}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Drawer Details */}
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-slate-200 space-y-5 animate-fadeIn">
                        
                        {/* Locations list */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-teal-600" />
                            Study Locations & Medical Centers
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {trial.locations.map((loc, idx) => (
                              <div key={idx} className="p-2.5 rounded-md bg-slate-50 border border-slate-200 text-xs">
                                <div className="font-bold text-slate-800">{loc.facility}</div>
                                <div className="text-slate-500">{loc.city}, {loc.country}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Eligibility Criteria */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs">
                            <h5 className="font-bold text-emerald-900 mb-2 flex items-center gap-1">
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                              Key Inclusion Criteria
                            </h5>
                            <ul className="space-y-1 text-emerald-950 list-disc list-inside">
                              <li>Age range: {trial.eligibility.ageRange}</li>
                              {trial.eligibility.inclusion.map((inc, i) => (
                                <li key={i}>{inc}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-3.5 rounded-lg bg-rose-50/70 border border-rose-200 text-xs">
                            <h5 className="font-bold text-rose-900 mb-2 flex items-center gap-1">
                              <Info className="w-3.5 h-3.5 text-rose-700" />
                              Key Exclusion Criteria
                            </h5>
                            <ul className="space-y-1 text-rose-950 list-disc list-inside">
                              {trial.eligibility.exclusion.map((exc, i) => (
                                <li key={i}>{exc}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Primary Endpoints */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                            Primary Study Endpoints
                          </h4>
                          <ul className="text-xs text-slate-700 space-y-1">
                            {trial.primaryEndpoints.map((ep, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-teal-600 font-bold">•</span>
                                <span>{ep}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Contact Investigator Action */}
                        <div className="p-3.5 rounded-lg bg-slate-900 text-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-xs text-slate-400 block">Trial Inquiries & Enrollment Coordination:</span>
                            <span className="font-mono text-xs sm:text-sm text-teal-300 font-bold">{trial.contactEmail}</span>
                          </div>
                          <a
                            id={`contact-trial-btn-${trial.id}`}
                            href={`mailto:${trial.contactEmail}?subject=SPG11%20Trial%20Inquiry%20-%20${encodeURIComponent(trial.title)}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition shadow-xs"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Contact Study Coordinator</span>
                          </a>
                        </div>

                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
