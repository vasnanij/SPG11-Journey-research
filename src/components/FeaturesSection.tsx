import React from 'react';
import { 
  ClipboardList, 
  Activity, 
  FlaskConical, 
  AlertTriangle, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  FolderHeart,
  Sliders,
  Eye
} from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
  onOpenWalletCard: () => void;
}

export const FeaturesSection: React.FC<Props> = ({ onNavigate, onOpenWalletCard }) => {
  const features = [
    {
      id: 'journey',
      title: 'SPG11 Journey Tracker & Personal Health Vault',
      badge: 'Interactive Caregiver Hub',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      description: 'Comprehensive longitudinal health dashboard. Track daily spasticity, mobility changes, speech clarity, and cognitive energy. Vault diagnostic reports, brain MRIs, and preserve milestones in the photo journal.',
      highlights: [
        '1-to-10 spasticity & motor symptom scoring with date tracking',
        'Secure document vault for genetic reports & care plans',
        'Milestone photo timeline for gait and daily victories',
        'One-click printable 1-page clinical visit summary for neurologists'
      ],
      icon: ClipboardList,
      actionText: 'Launch Journey Tracker',
      actionHandler: () => onNavigate('journey'),
      accentColor: 'teal',
    },
    {
      id: 'pathology',
      title: 'Cellular & Lysosomal Biology Visualizer',
      badge: 'Interactive Molecular Simulation',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      description: 'Step inside a corticospinal motor neuron. Compare healthy cells with spatacsin-deficient neurons to visualize how Autophagic Lysosome Reformation (ALR) fails, causing lipid stagnation and axonal stress.',
      highlights: [
        'Interactive healthy vs. SPG11 mutant cell comparison',
        'Step-by-step ALR pathway animation (tubule extrusion, scission)',
        'Biomarker visualization (sNfL axonal leakage, ganglioside accumulation)',
        'Curated peer-reviewed publications and DOIs'
      ],
      icon: Activity,
      actionText: 'Explore Cell Visualizer',
      actionHandler: () => onNavigate('pathology'),
      accentColor: 'blue',
    },
    {
      id: 'trials',
      title: 'Global Clinical Trial Pipeline Tracker',
      badge: 'Live Clinical Registries',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      description: 'Active tracking of international interventional drug trials, observational registries, and biomarker studies across Europe, North America, and worldwide networks (SPATAX, TreatHSP).',
      highlights: [
        'Filter by recruitment status (Recruiting, Active, Completed)',
        'Phase details, sponsor information, and primary outcomes',
        'Direct inclusion/exclusion criteria checklists',
        'One-click external links to ClinicalTrials.gov and EU Clinical Trials Register'
      ],
      icon: FlaskConical,
      actionText: 'Browse Clinical Trials',
      actionHandler: () => onNavigate('trials'),
      accentColor: 'emerald',
    },
    {
      id: 'wallet-card',
      title: 'Emergency Medical Wallet Card Generator',
      badge: 'Critical Patient Safety',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      description: 'Critical safety card for SPG11 patients alerting EMTs and surgical staff to life-threatening medication warnings, specifically contraindication of succinylcholine in general anesthesia.',
      highlights: [
        'Anesthesia alert: Succinylcholine hyperkalemia risk',
        'Treating neurologist contact & emergency caregiver phone numbers',
        'Printable credit-card format for physical wallets & smartphones',
        'Customizable patient baseline mobility and speech status'
      ],
      icon: AlertTriangle,
      actionText: 'Generate Wallet Card',
      actionHandler: onOpenWalletCard,
      accentColor: 'amber',
    },
    {
      id: 'submit-data',
      title: 'Researcher Data Submission & Registry Intake',
      badge: 'Open Science Collaboration',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      description: 'Open-access collaboration intake for neurogeneticists, neurologists, and pharmaceutical investigators to submit novel KIAA1840 variants, preclinical candidate compounds, or registry datasets.',
      highlights: [
        'FAIR data standard compliance for translational neuroscience',
        'Structured intake for clinical case reports and novel variants',
        'Investigator directory for multi-center research partnerships',
        'Encrypted, privacy-preserving research intake pipeline'
      ],
      icon: FileText,
      actionText: 'Submit Research Data',
      actionHandler: () => onNavigate('submit-data'),
      accentColor: 'purple',
    },
    {
      id: 'accessibility',
      title: 'WCAG 2.1 AA Accessibility & Plain-Language Engine',
      badge: 'Inclusive Design',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      description: 'Built from the ground up for patients with spasticity, tremor, or cognitive fatigue. Features instant toggle between scientific terminology and plain-language caregiver phrasing.',
      highlights: [
        'Plain-Language Caregiver Translator across all scientific modules',
        'OpenDyslexic / Accessible typography mode for enhanced readability',
        'High-contrast color themes & multi-level font size scaling',
        'Full keyboard navigation & screen-reader optimized landmarks'
      ],
      icon: ShieldCheck,
      actionText: 'Toggle Settings (Top Bar)',
      actionHandler: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      accentColor: 'indigo',
    },
  ];

  return (
    <section id="features-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-300">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Platform Capabilities — Route: /features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Features Designed for Patients, Caregivers & Scientists
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every tool in the SPG11 Research & Clinical Trial Hub is engineered to bridge the gap between bench science and daily clinical management.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between p-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${feature.badgeColor}`}>
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Highlights:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {feature.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={feature.actionHandler}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs transition flex items-center justify-center gap-2 group-hover:shadow-xs"
                  >
                    <span>{feature.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-2xl bg-linear-to-r from-teal-900 via-slate-900 to-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-teal-800 shadow-md">
          <div className="space-y-1">
            <h4 className="font-bold text-base text-white">Need an individualized walkthrough of our tools?</h4>
            <p className="text-xs text-slate-300">
              Read our step-by-step onboarding guide on how to record baseline symptoms and prepare for clinical visits.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('how-it-works')}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition shrink-0 flex items-center gap-1.5"
          >
            <span>Read How It Works</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
