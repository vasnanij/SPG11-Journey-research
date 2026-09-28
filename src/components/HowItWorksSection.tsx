import React, { useState } from 'react';
import { 
  UserCheck, 
  PlayCircle, 
  FileCheck, 
  ClipboardList, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  ShieldCheck, 
  Activity,
  FileText,
  Download,
  CheckCircle2
} from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
}

export const HowItWorksSection: React.FC<Props> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      id: 'create-account',
      title: 'Create Your Account',
      subtitle: 'Set up your secure, privacy-first patient or caregiver profile.',
      icon: UserCheck,
      details: [
        'Select your role: Patient, Family Caregiver, Healthcare Provider, or Rare Disease Advocate.',
        'Record genetic confirmation: Log your specific KIAA1840/SPG11 mutation variants (e.g., c.5769delT or c.6100C>T).',
        'Link treating clinical center: Document your primary neuromuscular hospital and contact neurologist.',
        'Privacy guarantee: Your health data is stored locally on your device with complete encryption and zero third-party tracking.'
      ],
      tip: 'You can update your profile anytime directly within the Journey Tracker banner.',
    },
    {
      step: 2,
      id: 'start-journey',
      title: 'Start Your Journey',
      subtitle: 'Log baseline functional visits, mobility scores, and documents.',
      icon: PlayCircle,
      details: [
        'Log Clinical Visits: Record appointment dates, clinic findings, physical therapy goals, and neurologist notes.',
        'Score Muscle Tone & Mobility: Use our 1-10 Spasticity Severity Scale to monitor calf/hamstring tightness and assistive device needs.',
        'Secure Document Vault: Attach brain MRI reports (Thin Corpus Callosum), whole exome genetic sequencing PDFs, and school/work accommodation plans.',
        'Milestone Photo Journal: Capture moments of triumph, adaptive equipment adaptations (AFOs, walkers), and therapy milestones.'
      ],
      tip: 'Regular monthly or bi-monthly entries provide the clearest long-term trend data for your clinical team.',
    },
    {
      step: 3,
      id: 'review-journey',
      title: 'Review Your Journey',
      subtitle: 'Analyze longitudinal trends and generate 1-page clinical reports.',
      icon: FileCheck,
      details: [
        'Longitudinal Trend Visualizer: Observe correlations between medications (baclofen, tizanidine) and your daily spasticity score.',
        'Generate Neurologist Report: One-click creation of a standardized 1-page Clinical Appointment Summary.',
        'Trial Eligibility Review: Compare your profile against active inclusion criteria for SPATAX and TreatHSP natural history cohorts.',
        'Printable Emergency Wallet Card: Ensure you always carry the succinylcholine anesthesia contraindication warning.'
      ],
      tip: 'Bring your printed summary to every six-month neuromuscular visit to save time and align treatment goals.',
    }
  ];

  return (
    <section id="how-it-works-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Workflow Guide — Route: /how-it-works</span>
          </div>
          
          {/* Exact User Prompt Heading: H2 How SPG11 Journey Tracker Works */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How SPG11 Journey Tracker Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our 3-step continuous care system empowers patients and families to organize medical records, monitor functional mobility changes, and share concise clinical summaries with doctors.
          </p>
        </div>

        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s) => {
            const Icon = s.icon;
            const isSelected = activeStep === s.step;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(s.step)}
                className={`p-5 rounded-2xl border text-left transition relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-teal-50/70 border-teal-500 shadow-xs ring-1 ring-teal-500'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100/80'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      0{s.step}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-teal-600' : 'text-slate-400'}`} />
                  </div>

                  <div>
                    {/* Exact User Prompt Headings: H3 Create Your Account / Start Your Journey / Review Your Journey */}
                    <h3 className="font-extrabold text-slate-900 text-lg">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {s.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-teal-700">
                  <span>{isSelected ? 'Currently Viewing' : 'View Step Walkthrough'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Content View */}
        {(() => {
          const current = steps[activeStep - 1];
          const Icon = current.icon;
          return (
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40 font-mono">
                    Step {current.step} of 3
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-teal-400" />
                    Client-Side Protected
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {current.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
                    What You Do in This Step:
                  </span>
                  <div className="space-y-2.5">
                    {current.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                  <strong className="text-amber-300">Pro-Tip for Caregivers:</strong> {current.tip}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('journey')}
                    className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition flex items-center gap-2 shadow-xs"
                  >
                    <ClipboardList className="w-4 h-4" />
                    <span>Go to SPG11 Journey Tracker</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {activeStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
                    >
                      Next Step: {steps[activeStep].title} →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onNavigate('features')}
                      className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
                    >
                      Explore All Hub Features →
                    </button>
                  )}
                </div>
              </div>

              {/* Graphic Mock Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                    <span className="font-mono text-teal-400 font-bold">Interactive Module Preview</span>
                    <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">Step {current.step}</span>
                  </div>

                  {current.step === 1 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Patient Name & Variant</span>
                        <div className="text-white font-bold">Elena Vance • Age 19</div>
                        <div className="text-teal-400 font-mono text-[11px]">KIAA1840 c.5769delT (p.Phe1924Leufs*22)</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Treating Clinic</span>
                        <div className="text-slate-300">Neuromuscular Center of Excellence</div>
                      </div>
                    </div>
                  )}

                  {current.step === 2 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-teal-400 font-bold">Spasticity Severity</span>
                          <span className="bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded font-bold font-mono">6 / 10</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
                          <div className="bg-teal-500 h-full w-3/5 rounded-full" />
                        </div>
                        <span className="text-[10px] text-slate-400 block pt-1">Bilateral AFOs utilized for school & community walking</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-amber-400" />
                          <span className="text-slate-200">Brain_MRI_TCC_CorpusCallosum.pdf</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">3.4 MB</span>
                      </div>
                    </div>
                  )}

                  {current.step === 3 && (
                    <div className="space-y-3 text-xs">
                      <div className="p-3.5 rounded-lg bg-teal-950/40 border border-teal-800/80 space-y-2">
                        <div className="flex items-center justify-between text-teal-300 font-bold">
                          <span>Neurology Visit Report Ready</span>
                          <Download className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          Standardized 1-page clinical synopsis generated with 6-month spasticity slope, current antispasmodics, and physical therapy frequency.
                        </p>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Ready to print or save as PDF for physician consult</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-500 italic">
                      Live data is saved locally on your current device browser.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
