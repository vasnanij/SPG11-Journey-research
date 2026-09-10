import React, { useState, useEffect } from 'react';
import { AccessibilitySettings } from './types';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { Navbar } from './components/Navbar';
import { CellularMechanismVisualizer } from './components/CellularMechanismVisualizer';
import { ClinicalTrialTracker } from './components/ClinicalTrialTracker';
import { PatientResourcesSection } from './components/PatientResourcesSection';
import { ResearcherSubmissionForm } from './components/ResearcherSubmissionForm';
import { SeoGlossaryFaq } from './components/SeoGlossaryFaq';
import { Footer } from './components/Footer';
import { RESEARCH_PUBLICATIONS } from './data/spg11Data';
import { 
  Dna, 
  FlaskConical, 
  LifeBuoy, 
  FileText, 
  AlertTriangle, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  Activity,
  Microscope,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export default function App() {
  // Accessibility Settings
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('spg11_accessibility_settings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading settings', e);
    }
    return {
      fontSize: 'normal',
      highContrast: false,
      dyslexiaFont: false,
      plainLanguageMode: true, // Caregiver/Plain language by default for maximum accessibility!
    };
  });

  // Navigation & View States
  const [activeSection, setActiveSection] = useState('overview');
  const [walletCardOpen, setWalletCardOpen] = useState(false);
  const [selectedPub, setSelectedPub] = useState<string | null>(null);

  // Persist accessibility settings
  useEffect(() => {
    try {
      localStorage.setItem('spg11_accessibility_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }, [settings]);

  const handleUpdateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleResetSettings = () => {
    setSettings({
      fontSize: 'normal',
      highContrast: false,
      dyslexiaFont: false,
      plainLanguageMode: true,
    });
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(
      sectionId === 'overview'
        ? 'main-content'
        : sectionId === 'pathology'
        ? 'pathology-section'
        : sectionId === 'trials'
        ? 'trials-section'
        : sectionId === 'resources'
        ? 'resources-section'
        : sectionId === 'submit-data'
        ? 'submit-data-section'
        : sectionId === 'glossary'
        ? 'glossary-section'
        : 'main-content'
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine root CSS classes based on accessibility settings
  const rootClasses = [
    settings.highContrast ? 'high-contrast-mode' : '',
    settings.dyslexiaFont ? 'font-accessible' : '',
    settings.fontSize === 'large'
      ? 'text-scale-large'
      : settings.fontSize === 'xlarge'
      ? 'text-scale-xlarge'
      : 'text-scale-normal',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-colors ${rootClasses}`}>
      
      {/* 1. Accessibility & Mode Toolbar */}
      <AccessibilityToolbar
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onReset={handleResetSettings}
      />

      {/* 2. Main Site Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenWalletCard={() => {
          setWalletCardOpen(true);
          handleNavigate('resources');
        }}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 sm:py-20 border-b border-slate-800">
          {/* Subtle geometric background accents */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              
              {/* Top scientific taxonomy pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-300 border border-teal-700/60 shadow-xs">
                  <Dna className="w-3.5 h-3.5 text-teal-400" />
                  OMIM #604360 • Autosomal Recessive Complex HSP
                </span>
                <span className="text-xs text-slate-400">
                  Chromosome 15q21.1 • Spatacsin Deficiency
                </span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                SPG11 Research Awareness, Clinical Trials & Patient Resource Portal
              </h1>

              {/* Subtitle / Plain Language Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {settings.plainLanguageMode
                  ? 'Connecting families, caregivers, and medical researchers. Access patient toolkits, track upcoming clinical drug trials, and help scientists discover treatments for Spastic Paraplegia Type 11.'
                  : 'A unified translational registry for Spastic Paraplegia 11. Monitoring autophagic lysosome reformation (ALR) biology, neurofilament light chain (sNfL) biomarkers, prospective natural history cohorts, and clinical pipelines.'}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  id="hero-btn-explore-trials"
                  type="button"
                  onClick={() => handleNavigate('trials')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm transition shadow-sm hover:shadow-md"
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Explore Clinical Trials</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-btn-caregiver-tools"
                  type="button"
                  onClick={() => handleNavigate('resources')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 transition"
                >
                  <LifeBuoy className="w-4 h-4 text-teal-400" />
                  <span>Patient & Caregiver Tools</span>
                </button>

                <button
                  id="hero-btn-submit-data"
                  type="button"
                  onClick={() => handleNavigate('submit-data')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 transition"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Researcher Data Portal</span>
                </button>
              </div>

              {/* Quick Caregiver Safety Notice */}
              <div className="pt-2">
                <button
                  id="hero-emergency-card-btn"
                  type="button"
                  onClick={() => {
                    setWalletCardOpen(true);
                    handleNavigate('resources');
                  }}
                  className="inline-flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-800/80 px-3.5 py-1.5 rounded-lg hover:bg-amber-900/40 transition"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>
                    <strong>Emergency Precaution:</strong> Avoid succinylcholine in anesthesia. Generate patient wallet card →
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* Key Metric Facts Strip */}
          <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 text-xs">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-teal-400 block font-mono">15q21.1</span>
                <span className="font-semibold text-slate-300 block mt-0.5">SPG11 Gene Locus</span>
                <span className="text-[11px] text-slate-500">40 exons encoding spatacsin</span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-amber-400 block font-mono">&gt;90%</span>
                <span className="font-semibold text-slate-300 block mt-0.5">Thin Corpus Callosum</span>
                <span className="text-[11px] text-slate-500">Characteristic MRI diagnostic sign</span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-teal-400 block font-mono">4.2x</span>
                <span className="font-semibold text-slate-300 block mt-0.5">Serum NfL Elevation</span>
                <span className="text-[11px] text-slate-500">Axonal injury liquid biomarker</span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-amber-400 block font-mono">12-18 yrs</span>
                <span className="font-semibold text-slate-300 block mt-0.5">Typical Onset Window</span>
                <span className="text-[11px] text-slate-500">Progressive gait spasticity</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: CELLULAR PATHOLOGY & MOLECULAR VISUALIZER */}
        <CellularMechanismVisualizer plainLanguageMode={settings.plainLanguageMode} />

        {/* SECTION 2: CLINICAL TRIALS PIPELINE TRACKER */}
        <ClinicalTrialTracker plainLanguageMode={settings.plainLanguageMode} />

        {/* SCIENTIFIC PUBLICATIONS BENCHMARK */}
        <section className="py-10 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Peer-Reviewed Evidence</span>
                <h3 className="text-xl font-bold text-slate-900">Key Scientific Literature & Landmark Studies</h3>
              </div>
              <span className="text-xs text-slate-500">Brain • Annals of Neurology • Movement Disorders</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_PUBLICATIONS.map((pub) => {
                const isSelected = selectedPub === pub.id;
                return (
                  <article
                    key={pub.id}
                    id={`pub-card-${pub.id}`}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition text-xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded text-[10px] border border-teal-200">
                        {pub.category}
                      </span>
                      <span className="font-mono text-slate-500 text-[11px]">
                        {pub.journal} ({pub.year})
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm leading-snug">
                      {pub.title}
                    </h4>

                    <div className="text-slate-600 italic">
                      {pub.authors}
                    </div>

                    <div className="p-2.5 rounded bg-white border border-slate-100 text-slate-700">
                      <strong>Core Finding:</strong> {pub.keyFinding}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-slate-400 font-mono text-[10px]">DOI: {pub.doi}</span>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:text-teal-900 font-bold inline-flex items-center gap-1 text-[11px]"
                      >
                        <span>View Journal Article</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: PATIENT & CAREGIVER RESOURCES (Includes Interactive Wallet Card) */}
        <PatientResourcesSection
          plainLanguageMode={settings.plainLanguageMode}
          walletCardOpen={walletCardOpen}
          onCloseWalletCard={() => setWalletCardOpen(false)}
          onOpenWalletCard={() => setWalletCardOpen(true)}
        />

        {/* SECTION 4: RESEARCHER DATA SUBMISSION PORTAL & CONTACT FORM */}
        <ResearcherSubmissionForm plainLanguageMode={settings.plainLanguageMode} />

        {/* SECTION 5: SEO GLOSSARY & FREQUENTLY ASKED QUESTIONS */}
        <SeoGlossaryFaq plainLanguageMode={settings.plainLanguageMode} />

      </main>

      {/* 3. Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWalletCard={() => {
          setWalletCardOpen(true);
          handleNavigate('resources');
        }}
      />

    </div>
  );
}
