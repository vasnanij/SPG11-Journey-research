import React, { useState, useEffect } from 'react';
import { 
  JourneyEntry, 
  JourneyDocument, 
  JourneyMemory, 
  JourneyProfile, 
  JourneyEntryCategory, 
  DocumentCategory 
} from '../types';
import { 
  INITIAL_JOURNEY_PROFILE, 
  INITIAL_JOURNEY_ENTRIES, 
  INITIAL_JOURNEY_DOCUMENTS, 
  INITIAL_JOURNEY_MEMORIES 
} from '../data/journeySampleData';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  FileText, 
  Image as ImageIcon, 
  ShieldCheck, 
  Download, 
  Printer, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  Heart, 
  User, 
  Activity, 
  Sparkles, 
  Clock, 
  FolderPlus, 
  Camera, 
  ChevronRight, 
  Info, 
  AlertTriangle, 
  Check, 
  X, 
  Stethoscope, 
  Tag, 
  MapPin, 
  Smile, 
  RefreshCw,
  ExternalLink,
  ClipboardList
} from 'lucide-react';

interface Props {
  plainLanguageMode?: boolean;
}

export const Spg11JourneyTracker: React.FC<Props> = ({ plainLanguageMode = true }) => {
  // Profiles State
  const [profile, setProfile] = useState<JourneyProfile>(() => {
    try {
      const saved = localStorage.getItem('spg11_journey_profile');
      return saved ? JSON.parse(saved) : INITIAL_JOURNEY_PROFILE;
    } catch {
      return INITIAL_JOURNEY_PROFILE;
    }
  });

  // Entries State
  const [entries, setEntries] = useState<JourneyEntry[]>(() => {
    try {
      const saved = localStorage.getItem('spg11_journey_entries');
      return saved ? JSON.parse(saved) : INITIAL_JOURNEY_ENTRIES;
    } catch {
      return INITIAL_JOURNEY_ENTRIES;
    }
  });

  // Documents State
  const [documents, setDocuments] = useState<JourneyDocument[]>(() => {
    try {
      const saved = localStorage.getItem('spg11_journey_documents');
      return saved ? JSON.parse(saved) : INITIAL_JOURNEY_DOCUMENTS;
    } catch {
      return INITIAL_JOURNEY_DOCUMENTS;
    }
  });

  // Memories & Photos State
  const [memories, setMemories] = useState<JourneyMemory[]>(() => {
    try {
      const saved = localStorage.getItem('spg11_journey_memories');
      return saved ? JSON.parse(saved) : INITIAL_JOURNEY_MEMORIES;
    } catch {
      return INITIAL_JOURNEY_MEMORIES;
    }
  });

  // Persist State to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('spg11_journey_profile', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('spg11_journey_entries', JSON.stringify(entries));
    } catch (e) {
      console.error(e);
    }
  }, [entries]);

  useEffect(() => {
    try {
      localStorage.setItem('spg11_journey_documents', JSON.stringify(documents));
    } catch (e) {
      console.error(e);
    }
  }, [documents]);

  useEffect(() => {
    try {
      localStorage.setItem('spg11_journey_memories', JSON.stringify(memories));
    } catch (e) {
      console.error(e);
    }
  }, [memories]);

  // UI Filters & Modals
  const [entryCategoryFilter, setEntryCategoryFilter] = useState<string>('all');
  const [entrySearchQuery, setEntrySearchQuery] = useState('');
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isExportSummaryModalOpen, setIsExportSummaryModalOpen] = useState(false);
  const [viewingDocument, setViewingDocument] = useState<JourneyDocument | null>(null);
  const [viewingMemory, setViewingMemory] = useState<JourneyMemory | null>(null);

  // New Entry Form State
  const [newEntry, setNewEntry] = useState<Partial<JourneyEntry>>({
    date: new Date().toISOString().split('T')[0],
    category: 'Symptom Check-in',
    title: '',
    notes: '',
    spasticitySeverity: 4,
    mobilityStatus: 'Independent walking',
    speechBulbarNotes: '',
    cognitiveNotes: '',
    attendingNeurologist: '',
    recommendations: '',
    tags: ['Routine'],
  });

  // New Document Form State
  const [newDoc, setNewDoc] = useState<Partial<JourneyDocument>>({
    title: '',
    category: 'Genetic Report',
    date: new Date().toISOString().split('T')[0],
    fileName: '',
    fileSize: '1.5 MB',
    fileType: 'PDF Document',
    keyFindings: '',
    notes: '',
  });

  // New Memory Form State
  const [newMem, setNewMem] = useState<Partial<JourneyMemory>>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    caption: '',
    emotionalTag: 'Triumph & Milestone',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    location: '',
  });

  // Filtered Entries
  const filteredEntries = entries.filter((entry) => {
    const matchesCategory =
      entryCategoryFilter === 'all' || entry.category === entryCategoryFilter;
    const query = entrySearchQuery.toLowerCase();
    const matchesQuery =
      !query ||
      entry.title.toLowerCase().includes(query) ||
      entry.notes.toLowerCase().includes(query) ||
      (entry.attendingNeurologist && entry.attendingNeurologist.toLowerCase().includes(query)) ||
      entry.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  // Handlers
  const handleSaveEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.title) return;
    const entryToAdd: JourneyEntry = {
      id: `entry-${Date.now()}`,
      date: newEntry.date || new Date().toISOString().split('T')[0],
      category: (newEntry.category as JourneyEntryCategory) || 'Symptom Check-in',
      title: newEntry.title,
      notes: newEntry.notes || '',
      spasticitySeverity: Number(newEntry.spasticitySeverity) || 4,
      mobilityStatus: newEntry.mobilityStatus || 'Independent walking',
      speechBulbarNotes: newEntry.speechBulbarNotes || '',
      cognitiveNotes: newEntry.cognitiveNotes || '',
      attendingNeurologist: newEntry.attendingNeurologist || '',
      recommendations: newEntry.recommendations || '',
      tags: newEntry.tags && newEntry.tags.length > 0 ? newEntry.tags : ['Update'],
    };
    setEntries([entryToAdd, ...entries]);
    setIsEntryModalOpen(false);
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      category: 'Symptom Check-in',
      title: '',
      notes: '',
      spasticitySeverity: 4,
      mobilityStatus: 'Independent walking',
      speechBulbarNotes: '',
      cognitiveNotes: '',
      attendingNeurologist: '',
      recommendations: '',
      tags: ['Routine'],
    });
  };

  const handleDeleteEntry = (id: string) => {
    if (confirm('Are you sure you want to delete this journey entry?')) {
      setEntries(entries.filter((item) => item.id !== id));
    }
  };

  const handleSaveDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDoc.title) return;
    const docToAdd: JourneyDocument = {
      id: `doc-${Date.now()}`,
      title: newDoc.title,
      category: (newDoc.category as DocumentCategory) || 'Genetic Report',
      date: newDoc.date || new Date().toISOString().split('T')[0],
      fileName: newDoc.fileName || `${newDoc.title.replace(/\s+/g, '_')}.pdf`,
      fileSize: newDoc.fileSize || '1.8 MB',
      fileType: newDoc.fileType || 'Medical Report',
      keyFindings: newDoc.keyFindings || '',
      notes: newDoc.notes || '',
    };
    setDocuments([docToAdd, ...documents]);
    setIsDocumentModalOpen(false);
    setNewDoc({
      title: '',
      category: 'Genetic Report',
      date: new Date().toISOString().split('T')[0],
      fileName: '',
      fileSize: '1.5 MB',
      fileType: 'PDF Document',
      keyFindings: '',
      notes: '',
    });
  };

  const handleDeleteDocument = (id: string) => {
    if (confirm('Remove this document from your SPG11 records vault?')) {
      setDocuments(documents.filter((item) => item.id !== id));
    }
  };

  const handleSaveMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMem.title) return;
    const memToAdd: JourneyMemory = {
      id: `mem-${Date.now()}`,
      title: newMem.title,
      date: newMem.date || new Date().toISOString().split('T')[0],
      caption: newMem.caption || '',
      emotionalTag: newMem.emotionalTag || 'Triumph & Milestone',
      imageUrl: newMem.imageUrl || 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      location: newMem.location || '',
    };
    setMemories([memToAdd, ...memories]);
    setIsMemoryModalOpen(false);
    setNewMem({
      title: '',
      date: new Date().toISOString().split('T')[0],
      caption: '',
      emotionalTag: 'Triumph & Milestone',
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      location: '',
    });
  };

  const handleDeleteMemory = (id: string) => {
    if (confirm('Delete this photo and memory entry?')) {
      setMemories(memories.filter((item) => item.id !== id));
    }
  };

  const handleResetToSampleData = () => {
    if (confirm('Reset your SPG11 Journey Tracker with comprehensive clinical sample records? (This will restore default milestones and documents)')) {
      setProfile(INITIAL_JOURNEY_PROFILE);
      setEntries(INITIAL_JOURNEY_ENTRIES);
      setDocuments(INITIAL_JOURNEY_DOCUMENTS);
      setMemories(INITIAL_JOURNEY_MEMORIES);
      localStorage.removeItem('spg11_journey_profile');
      localStorage.removeItem('spg11_journey_entries');
      localStorage.removeItem('spg11_journey_documents');
      localStorage.removeItem('spg11_journey_memories');
    }
  };

  const handleExportJSON = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      profile,
      entries,
      documents,
      memories,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SPG11_Journey_Records_Export_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="journey-tracker-section" className="py-12 bg-slate-50 border-t border-slate-200" aria-label="SPG11 Journey Tracker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ========================================================================= */}
        {/* H1: Your SPG11 Journey, Organized in One Place                            */}
        {/* ========================================================================= */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                Personalized Caregiver & Patient Toolkit
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Your SPG11 Journey, Organized in One Place
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
                Empowering individuals living with Spastic Paraplegia Type 11 and their caregivers. 
                Track motor milestones, document neurologist evaluations, organize genetic and MRI files, and preserve cherished victories—privately on your device.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setIsExportSummaryModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs shadow-xs transition"
                title="Generate printable doctor appointment summary"
              >
                <Printer className="w-4 h-4 text-teal-700" />
                <span>Appointment Summary</span>
              </button>

              <button
                type="button"
                onClick={handleExportJSON}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs shadow-xs transition"
                title="Backup all records to private JSON"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Backup Data</span>
              </button>

              <button
                type="button"
                onClick={handleResetToSampleData}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100 text-xs transition"
                title="Reset sample records"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Demo Data</span>
              </button>
            </div>
          </div>

          {/* Interactive Profile Card Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-teal-900 via-slate-900 to-slate-900 text-white shadow-md border border-teal-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600/30 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-white">{profile.name}</span>
                  <span className="capitalize text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40">
                    {profile.accountType} Profile
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Age: <strong>{profile.patientAge} yrs</strong></span>
                  <span>Diagnosed: <strong>{profile.diagnosisYear}</strong></span>
                  <span>Hospital: <strong>{profile.primaryHospital}</strong></span>
                </div>
                <div className="text-[11px] text-teal-200/90 font-mono truncate max-w-xl">
                  Mutation: {profile.geneticVariant}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-950/60 border border-teal-800 text-[11px] text-teal-300">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Client-Side Local Storage Encrypted</span>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition shadow-xs flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* H2: Track Your SPG11 Journey                                              */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Section 1 • Longitudinal Diary</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Track Your SPG11 Journey
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Maintain an accurate, clinical-grade chronological log of gait adaptations, therapy achievements, and specialist recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* --------------------------------------------------------------------- */}
            {/* H3: Create and Manage Journey Entries (7 Columns)                     */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-teal-600" />
                    <span>Create and Manage Journey Entries</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Log new milestones, therapy sessions, and clinical evaluations ({filteredEntries.length} entries shown).
                  </p>
                </div>

                <button
                  type="button"
                  id="btn-add-journey-entry"
                  onClick={() => setIsEntryModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Log New Entry</span>
                </button>
              </div>

              {/* Filtering & Search Bar */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      value={entrySearchQuery}
                      onChange={(e) => setEntrySearchQuery(e.target.value)}
                      placeholder="Search entries by title, notes, doctor, or tag..."
                      className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    />
                    {entrySearchQuery && (
                      <button
                        type="button"
                        onClick={() => setEntrySearchQuery('')}
                        className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <select
                    value={entryCategoryFilter}
                    onChange={(e) => setEntryCategoryFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-slate-50 text-slate-700 font-medium focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="Clinical Visit">Clinical Visit</option>
                    <option value="Physical Therapy">Physical Therapy</option>
                    <option value="Milestone">Milestone</option>
                    <option value="Diagnostic / Lab">Diagnostic / Lab</option>
                    <option value="Symptom Check-in">Symptom Check-in</option>
                    <option value="Medication Change">Medication Change</option>
                  </select>
                </div>
              </div>

              {/* Entries Timeline List */}
              <div className="space-y-4">
                {filteredEntries.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-xl border border-slate-200 space-y-3">
                    <ClipboardList className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-slate-600 font-medium text-sm">No journey entries match your search or filter.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setEntryCategoryFilter('all');
                        setEntrySearchQuery('');
                      }}
                      className="text-xs text-teal-700 font-bold hover:underline"
                    >
                      Clear search filters
                    </button>
                  </div>
                ) : (
                  filteredEntries.map((item) => (
                    <article
                      key={item.id}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition space-y-3"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                              item.category === 'Clinical Visit'
                                ? 'bg-blue-50 text-blue-800 border-blue-200'
                                : item.category === 'Milestone'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : item.category === 'Physical Therapy'
                                ? 'bg-teal-50 text-teal-800 border-teal-200'
                                : item.category === 'Diagnostic / Lab'
                                ? 'bg-purple-50 text-purple-800 border-purple-200'
                                : 'bg-slate-100 text-slate-800 border-slate-200'
                            }`}>
                              {item.category}
                            </span>
                            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-slate-400" />
                              {item.date}
                            </span>
                          </div>

                          <h4 className="font-bold text-slate-900 text-base">
                            {item.title}
                          </h4>
                        </div>

                        {/* Spasticity Severity Badge */}
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Spasticity Scale</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded border inline-block ${
                              item.spasticitySeverity <= 3
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : item.spasticitySeverity <= 6
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : 'bg-rose-50 text-rose-800 border-rose-200'
                            }`}>
                              {item.spasticitySeverity} / 10
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteEntry(item.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 transition rounded"
                            title="Delete entry"
                            aria-label={`Delete entry ${item.title}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Mobility Status */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                        <Activity className="w-3.5 h-3.5 text-teal-600" />
                        <span>Mobility: <strong>{item.mobilityStatus}</strong></span>
                      </div>

                      {/* Main Notes */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item.notes}
                      </p>

                      {/* Speech & Cognitive Bullet Points if recorded */}
                      {(item.speechBulbarNotes || item.cognitiveNotes) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 text-xs text-slate-600 border border-slate-100">
                          {item.speechBulbarNotes && (
                            <div>
                              <strong className="text-slate-800">Speech/Swallowing:</strong> {item.speechBulbarNotes}
                            </div>
                          )}
                          {item.cognitiveNotes && (
                            <div>
                              <strong className="text-slate-800">Cognitive/Executive:</strong> {item.cognitiveNotes}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Recommendations / Followup */}
                      {item.recommendations && (
                        <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                          <div>
                            <strong>Clinician Recommendations:</strong> {item.recommendations}
                          </div>
                        </div>
                      )}

                      {/* Clinician & Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100 text-[11px] text-slate-500">
                        {item.attendingNeurologist && (
                          <span className="flex items-center gap-1">
                            <Stethoscope className="w-3.5 h-3.5 text-slate-400" />
                            {item.attendingNeurologist}
                          </span>
                        )}
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* H3: Record Important Information (5 Columns)                          */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-teal-600" />
                  <span>Record Important Information</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Essential clinical indicators, neurological scoring guides, and care checkpoints.
                </p>
              </div>

              {/* Mobility Scale Reference Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-teal-600" />
                    <span>SPG11 Functional Mobility Stages</span>
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">SPRS Guidelines</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                    <div>
                      <strong>Independent Walking:</strong> Mild gait stiffness, high-energy cost, or occasional toe dragging on uneven ground.
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                    <div>
                      <strong>Ankle-Foot Orthoses (AFOs):</strong> Articulated or carbon-fiber braces assist foot drop and prevent tripping.
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                    <div>
                      <strong>Assistive Mobility:</strong> Single cane, bilateral canes, or 4-wheel rollator walker with hand brakes.
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-[11px]">4</span>
                    <div>
                      <strong>Wheeled Mobility:</strong> Manual or motorized wheelchair for community distances and endurance preservation.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Observation Recording Checklist */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Key Observations to Record</span>
                </h4>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Spasticity Triggers:</strong> Cold weather, infection, urinary tract irritation, or fatigue often temporarily elevate muscle tone.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Bulbar Signs:</strong> Log coughing during liquids, rate of speech fatigue, and jaw or facial muscle stiffness.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Cognitive Pace:</strong> Track school/work accommodations, executive processing time, and attention stamina.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Biomarkers & Bloodwork:</strong> Log serial serum Neurofilament Light Chain (sNfL) and routine labs before clinical trial screening.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setNewEntry({
                        date: new Date().toISOString().split('T')[0],
                        category: 'Symptom Check-in',
                        title: 'Daily Symptom & Tone Check-in',
                        notes: 'Evaluated lower limb tone after morning stretches. No bladder issues reported today.',
                        spasticitySeverity: 4,
                        mobilityStatus: 'AFO braces',
                        tags: ['Daily Log', 'Muscle Tone'],
                      });
                      setIsEntryModalOpen(true);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4 text-teal-400" />
                    <span>Quick-Record Today's Observations</span>
                  </button>
                </div>
              </div>

              {/* Emergency Anesthesia Warning Reminder */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-amber-800">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Crucial Caregiver Alert</span>
                </div>
                <p className="leading-relaxed">
                  Always ensure anesthesiologists and surgical staff are documented regarding <strong>Succinylcholine contraindication</strong>. Denervated muscle in SPG11 may provoke hyperkalemia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* H2: Keep Your SPG11 Records Organized                                     */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-6 border-t border-slate-200">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Section 2 • Medical Vault & Memories</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Keep Your SPG11 Records Organized
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Securely store genetic confirmation reports, brain MRI findings, trial consent forms, and celebrate meaningful daily memories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* --------------------------------------------------------------------- */}
            {/* H3: Organize Important Documents (7 Columns)                          */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-teal-600" />
                    <span>Organize Important Documents</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Centralized archive for genetic analyses, MRI imaging reports, and trial consent papers.
                  </p>
                </div>

                <button
                  type="button"
                  id="btn-upload-document"
                  onClick={() => setIsDocumentModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition"
                >
                  <FolderPlus className="w-4 h-4" />
                  <span>Upload Document</span>
                </button>
              </div>

              {/* Document List */}
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{doc.title}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {doc.category}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex flex-wrap gap-x-3 gap-y-0.5">
                          <span>{doc.fileName}</span>
                          <span>•</span>
                          <span>{doc.fileSize}</span>
                          <span>•</span>
                          <span>Dated: {doc.date}</span>
                        </div>
                        {doc.keyFindings && (
                          <p className="text-xs text-slate-600 line-clamp-1 italic">
                            Key finding: {doc.keyFindings}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={() => setViewingDocument(doc)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteDocument(doc.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition rounded"
                        title="Delete document"
                        aria-label={`Delete document ${doc.title}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinical Records Checklist Card */}
              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2 text-xs text-teal-950">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>Clinical Trial Readiness Checklist</span>
                </div>
                <p className="text-teal-800 leading-relaxed">
                  Most interventional trials (e.g., SPATAX, TreatHSP) require three essential papers: (1) Confirmatory CLIA-certified genetic test for SPG11/KIAA1840, (2) Baseline Brain MRI evaluating Thin Corpus Callosum (TCC), and (3) Physical therapy baseline functional scoring.
                </p>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* H3: Add Photos and Journey Memories (5 Columns)                       */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-teal-600" />
                    <span>Add Photos and Journey Memories</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Celebrate triumphs, milestones, and family moments together.
                  </p>
                </div>

                <button
                  type="button"
                  id="btn-add-memory"
                  onClick={() => setIsMemoryModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Memory</span>
                </button>
              </div>

              {/* Memory Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {memories.map((mem) => (
                  <article
                    key={mem.id}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col"
                  >
                    <div className="relative h-44 w-full bg-slate-900 overflow-hidden group">
                      <img
                        src={mem.imageUrl}
                        alt={mem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur text-white border border-white/20">
                          {mem.emotionalTag}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <button
                          type="button"
                          onClick={() => handleDeleteMemory(mem.id)}
                          className="p-1.5 rounded-full bg-black/50 text-white hover:bg-rose-600 transition"
                          title="Delete memory"
                          aria-label={`Delete memory ${mem.title}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {mem.date}
                          </span>
                          {mem.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {mem.location}
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm leading-snug">
                          {mem.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {mem.caption}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                        <span className="text-[11px] text-teal-700 font-semibold flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-teal-600 text-teal-600" />
                          Cherished Moment
                        </span>
                        <button
                          type="button"
                          onClick={() => setViewingMemory(mem)}
                          className="text-xs font-bold text-slate-700 hover:text-teal-700 transition"
                        >
                          View Full Photo
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* H2: How SPG11 Journey Tracker Works                                       */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-6 border-t border-slate-200">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Section 3 • Workflow & Guide</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How SPG11 Journey Tracker Works
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              A private, three-step system designed for individuals, families, and multidisciplinary care teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* --------------------------------------------------------------------- */}
            {/* H3: Create Your Account                                               */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:border-teal-300 transition">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 font-extrabold text-lg flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Create Your Account
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Configure your private patient or caregiver profile with diagnosis details, genetic variant mutations (KIAA1840), and treating neuromuscular clinic.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Choose Caregiver or Patient profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Strict zero-cloud local privacy guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Emergency contact & hospital integration</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsProfileModalOpen(true)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition text-center"
                >
                  Configure Profile Details →
                </button>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* H3: Start Your Journey                                                */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:border-teal-300 transition">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 font-extrabold text-lg flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Start Your Journey
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Begin logging functional milestones, spasticity fluctuations, physical therapy protocols, assistive device fittings, and biomarker results.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Log standardized 1-10 spasticity tone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Track speech clarity & bulbar status</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Attach genetic & MRI radiology records</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsEntryModalOpen(true)}
                  className="w-full py-2 px-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition text-center"
                >
                  Log Your First Milestone →
                </button>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* H3: Review Your Journey                                               */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:border-teal-300 transition">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 font-extrabold text-lg flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Review Your Journey
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review longitudinal trends over months and years. Export structured clinical summaries to take directly to your next neurology consultation.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Generate printable 1-page clinical reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Review milestone & therapy progress</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Fast verification for clinical trial eligibility</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsExportSummaryModalOpen(true)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition text-center"
                >
                  Generate Appointment Report →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: Log New Journey Entry                                            */}
      {/* ========================================================================= */}
      {isEntryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Create New Journey Entry</h3>
                <p className="text-xs text-slate-500">Record a milestone, therapy note, or doctor visit.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsEntryModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEntry} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newEntry.date}
                    onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={newEntry.category}
                    onChange={(e) => setNewEntry({ ...newEntry, category: e.target.value as JourneyEntryCategory })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs bg-white"
                  >
                    <option value="Symptom Check-in">Symptom Check-in</option>
                    <option value="Milestone">Milestone</option>
                    <option value="Clinical Visit">Clinical Visit</option>
                    <option value="Physical Therapy">Physical Therapy</option>
                    <option value="Medication Change">Medication Change</option>
                    <option value="Diagnostic / Lab">Diagnostic / Lab</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Entry Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Annual Neurology Exam & SPRS Evaluation"
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Spasticity Severity (1 = Minimal, 10 = Severe)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={newEntry.spasticitySeverity}
                      onChange={(e) => setNewEntry({ ...newEntry, spasticitySeverity: Number(e.target.value) })}
                      className="w-full accent-teal-600"
                    />
                    <span className="font-bold text-teal-800 text-sm px-2 py-0.5 bg-teal-50 border border-teal-200 rounded">
                      {newEntry.spasticitySeverity}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobility Status</label>
                  <select
                    value={newEntry.mobilityStatus}
                    onChange={(e) => setNewEntry({ ...newEntry, mobilityStatus: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs bg-white"
                  >
                    <option value="Independent walking">Independent walking</option>
                    <option value="AFO braces">AFO braces</option>
                    <option value="AFO braces & single cane">AFO braces & single cane</option>
                    <option value="Rollator walker">Rollator walker</option>
                    <option value="Manual wheelchair">Manual wheelchair</option>
                    <option value="Power wheelchair">Power wheelchair</option>
                    <option value="Bed / resting">Bed / resting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Detailed Observations & Notes</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe how the day went, changes in endurance, gait stiffness, or therapy feedback..."
                  value={newEntry.notes}
                  onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Speech & Bulbar Notes (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Speech clear, no swallowing difficulty"
                    value={newEntry.speechBulbarNotes}
                    onChange={(e) => setNewEntry({ ...newEntry, speechBulbarNotes: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Cognitive / School Notes (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Alert, needed additional reading time"
                    value={newEntry.cognitiveNotes}
                    onChange={(e) => setNewEntry({ ...newEntry, cognitiveNotes: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Attending Clinician (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Dr. Elena Rostova, Neurologist"
                    value={newEntry.attendingNeurologist}
                    onChange={(e) => setNewEntry({ ...newEntry, attendingNeurologist: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Doctor Recommendations (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Increase baclofen, daily heel stretches"
                    value={newEntry.recommendations}
                    onChange={(e) => setNewEntry({ ...newEntry, recommendations: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsEntryModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold"
                >
                  Save Journey Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: Upload Important Document                                        */}
      {/* ========================================================================= */}
      {isDocumentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Upload SPG11 Document</h3>
                <p className="text-xs text-slate-500">Archive genetic reports, MRIs, and trial forms.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsDocumentModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveDocument} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Document Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Whole Exome Sequencing Test Report"
                  value={newDoc.title}
                  onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Document Category</label>
                  <select
                    value={newDoc.category}
                    onChange={(e) => setNewDoc({ ...newDoc, category: e.target.value as DocumentCategory })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs bg-white"
                  >
                    <option value="Genetic Report">Genetic Report</option>
                    <option value="Brain MRI">Brain MRI</option>
                    <option value="Trial Consent">Trial Consent</option>
                    <option value="Caregiver Plan">Caregiver Plan</option>
                    <option value="IEP / Accommodation">IEP / Accommodation</option>
                    <option value="Lab Result">Lab Result</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date of Document</label>
                  <input
                    type="date"
                    required
                    value={newDoc.date}
                    onChange={(e) => setNewDoc({ ...newDoc, date: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Key Findings Summary</label>
                <textarea
                  rows={2}
                  placeholder="e.g., Biallelic mutation in SPG11 confirmed; Thin Corpus Callosum (TCC) documented on T1/T2 imaging."
                  value={newDoc.keyFindings}
                  onChange={(e) => setNewDoc({ ...newDoc, keyFindings: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">File Name & Reference</label>
                <input
                  type="text"
                  placeholder="e.g., Mayo_SPG11_Exome_Panel_2026.pdf"
                  value={newDoc.fileName}
                  onChange={(e) => setNewDoc({ ...newDoc, fileName: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsDocumentModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold"
                >
                  Add Document to Vault
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: Add Memory & Photo                                               */}
      {/* ========================================================================= */}
      {isMemoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Add Photo & Journey Memory</h3>
                <p className="text-xs text-slate-500">Capture special milestones and uplifting moments.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsMemoryModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveMemory} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Memory Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., First Walk with New Carbon-Fiber AFOs"
                  value={newMem.title}
                  onChange={(e) => setNewMem({ ...newMem, title: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category / Tag</label>
                  <select
                    value={newMem.emotionalTag}
                    onChange={(e) => setNewMem({ ...newMem, emotionalTag: e.target.value as any })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs bg-white"
                  >
                    <option value="Triumph & Milestone">Triumph & Milestone</option>
                    <option value="Adaptive Victory">Adaptive Victory</option>
                    <option value="Therapy Progress">Therapy Progress</option>
                    <option value="Family & Joy">Family & Joy</option>
                    <option value="Daily Memory">Daily Memory</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newMem.date}
                    onChange={(e) => setNewMem({ ...newMem, date: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Location (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., Botanical Garden Walkway"
                  value={newMem.location}
                  onChange={(e) => setNewMem({ ...newMem, location: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Photo Image URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newMem.imageUrl}
                  onChange={(e) => setNewMem({ ...newMem, imageUrl: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
                <div className="flex gap-2 mt-1.5">
                  <span className="text-[11px] text-slate-500">Preset suggestions:</span>
                  <button
                    type="button"
                    onClick={() => setNewMem({ ...newMem, imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80' })}
                    className="text-[11px] text-teal-600 hover:underline"
                  >
                    Walking Garden
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewMem({ ...newMem, imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80' })}
                    className="text-[11px] text-teal-600 hover:underline"
                  >
                    Community Walk
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewMem({ ...newMem, imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' })}
                    className="text-[11px] text-teal-600 hover:underline"
                  >
                    Rehab Center
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Story / Caption</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the moment and why it was meaningful..."
                  value={newMem.caption}
                  onChange={(e) => setNewMem({ ...newMem, caption: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsMemoryModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold"
                >
                  Save Photo Memory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: Edit Profile                                                     */}
      {/* ========================================================================= */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Configure Profile</h3>
                <p className="text-xs text-slate-500">Personalize your SPG11 Tracker account.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsProfileModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 mb-1">Account Role</label>
                <select
                  value={profile.accountType}
                  onChange={(e) => setProfile({ ...profile, accountType: e.target.value as any })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs bg-white"
                >
                  <option value="caregiver">Caregiver / Family Member</option>
                  <option value="patient">Individual Living with SPG11</option>
                  <option value="clinician">Neurologist / Physical Therapist</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Name / Identifier</label>
                <input
                  type="text"
                  required
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Current Age</label>
                  <input
                    type="text"
                    value={profile.patientAge}
                    onChange={(e) => setProfile({ ...profile, patientAge: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Year Diagnosed</label>
                  <input
                    type="text"
                    value={profile.diagnosisYear}
                    onChange={(e) => setProfile({ ...profile, diagnosisYear: e.target.value })}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Genetic Variant (KIAA1840/SPG11)</label>
                <input
                  type="text"
                  value={profile.geneticVariant}
                  onChange={(e) => setProfile({ ...profile, geneticVariant: e.target.value })}
                  placeholder="e.g., c.1951C>T biallelic"
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Primary Hospital / Clinic</label>
                <input
                  type="text"
                  value={profile.primaryHospital}
                  onChange={(e) => setProfile({ ...profile, primaryHospital: e.target.value })}
                  placeholder="e.g., Mayo Clinic Neurogenetics"
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Emergency Contact & Phone</label>
                <input
                  type="text"
                  value={profile.emergencyContact}
                  onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                  placeholder="e.g., Marcus Vance - (555) 234-8901"
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold"
                >
                  Save Profile Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 5: Printable Doctor Appointment Clinical Summary                     */}
      {/* ========================================================================= */}
      {isExportSummaryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 print:hidden">
              <div className="flex items-center gap-2">
                <Printer className="w-5 h-5 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-900">Doctor Appointment Clinical Summary</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsExportSummaryModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Document Body */}
            <div className="space-y-6 text-slate-900 font-sans text-xs">
              {/* Header */}
              <div className="border-b-2 border-teal-700 pb-3 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">SPG11 Longitudinal Patient Clinical Summary</h2>
                  <p className="text-slate-600 mt-0.5">Spastic Paraplegia Type 11 Care & Symptom Tracker</p>
                </div>
                <div className="text-right text-slate-500 font-mono text-[11px]">
                  Generated: {new Date().toLocaleDateString()}
                </div>
              </div>

              {/* Patient Demographics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Patient Name</span>
                  <span className="font-bold text-slate-900">{profile.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Age / Diagnosed</span>
                  <span className="font-bold text-slate-900">{profile.patientAge} yrs (Since {profile.diagnosisYear})</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Genetics (KIAA1840/SPG11)</span>
                  <span className="font-bold text-slate-900 font-mono text-[11px]">{profile.geneticVariant}</span>
                </div>
              </div>

              {/* Emergency Safety Alert */}
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-300 text-amber-900">
                <strong>Anesthesia & Emergency Notice:</strong> Succinylcholine is contraindicated due to risk of hyperkalemic cardiac arrest. Monitor for dysphagia and bulbar complications.
              </div>

              {/* Recent Journey Entries Summary */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                  Recent Clinical & Milestone Entries ({entries.slice(0, 4).length})
                </h4>
                <div className="space-y-2.5">
                  {entries.slice(0, 5).map((e) => (
                    <div key={e.id} className="p-2.5 rounded-lg border border-slate-200 space-y-1">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{e.title}</span>
                        <span className="font-mono text-slate-500 text-[11px]">{e.date}</span>
                      </div>
                      <div className="text-slate-600 flex gap-4 text-[11px]">
                        <span>Category: <strong>{e.category}</strong></span>
                        <span>Mobility: <strong>{e.mobilityStatus}</strong></span>
                        <span>Spasticity: <strong>{e.spasticitySeverity}/10</strong></span>
                      </div>
                      <p className="text-slate-700">{e.notes}</p>
                      {e.recommendations && (
                        <p className="text-teal-800 bg-teal-50 p-1.5 rounded">
                          <strong>Doctor Recommendations:</strong> {e.recommendations}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Vault Documents Attached */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                  Available Medical Records in Vault ({documents.length})
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  {documents.map((d) => (
                    <li key={d.id}>
                      <strong>{d.title}</strong> ({d.category}) — {d.keyFindings}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Caregiver Signoff */}
              <div className="pt-4 border-t border-slate-300 flex justify-between text-[11px] text-slate-500">
                <span>Hospital Care Center: {profile.primaryHospital}</span>
                <span>Emergency Contact: {profile.emergencyContact}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 6: Document Details Viewer                                          */}
      {/* ========================================================================= */}
      {viewingDocument && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-900">{viewingDocument.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setViewingDocument(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-700">Category:</span>
                  <span className="font-semibold text-teal-800">{viewingDocument.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-700">File Name:</span>
                  <span className="font-mono text-slate-600">{viewingDocument.fileName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-700">Date Recorded:</span>
                  <span>{viewingDocument.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-700">File Size & Format:</span>
                  <span>{viewingDocument.fileSize} • {viewingDocument.fileType}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Key Clinical Findings:</h4>
                <div className="p-3 rounded-lg bg-teal-50/60 border border-teal-200 text-teal-950 font-medium">
                  {viewingDocument.keyFindings}
                </div>
              </div>

              {viewingDocument.notes && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Caregiver & Study Notes:</h4>
                  <p className="text-slate-700 leading-relaxed">{viewingDocument.notes}</p>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewingDocument(null)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert(`Simulated secure download of ${viewingDocument.fileName}`);
                  }}
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 7: Memory Photo Lightbox Viewer                                     */}
      {/* ========================================================================= */}
      {viewingMemory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 text-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  {viewingMemory.emotionalTag}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{viewingMemory.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setViewingMemory(null)}
                className="p-1 text-slate-400 hover:text-white rounded"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black max-h-[60vh] flex items-center justify-center">
              <img
                src={viewingMemory.imageUrl}
                alt={viewingMemory.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Date: {viewingMemory.date}</span>
                {viewingMemory.location && <span>Location: {viewingMemory.location}</span>}
              </div>
              <p className="text-slate-200 text-sm leading-relaxed pt-1">
                {viewingMemory.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
