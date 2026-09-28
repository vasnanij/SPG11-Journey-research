import React, { useState } from 'react';
import { Dna, Brain, Activity, ShieldCheck, HeartHandshake, ArrowRight, BookOpen, Layers, Users, Sparkles } from 'lucide-react';

interface Props {
  plainLanguageMode: boolean;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<Props> = ({ plainLanguageMode, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'genetics' | 'clinical' | 'alliance'>('overview');

  return (
    <section id="about-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <Dna className="w-3.5 h-3.5 text-teal-600" />
            <span>Pathology & Mission Directory — Route: /about</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About SPG11 & The Global Research Alliance
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {plainLanguageMode
              ? 'Learn what causes SPG11, how the spatacsin gene affects the nervous system, and how our global alliance connects families with researchers to discover therapies.'
              : 'Detailed clinical, genetic, and mechanistic monograph on Spastic Paraplegia Type 11 (OMIM #604360), caused by bi-allelic loss-of-function mutations in KIAA1840/SPG11.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2" role="tablist" aria-label="About SPG11 Sections">
          {[
            { id: 'overview', label: '1. What is SPG11?', icon: BookOpen },
            { id: 'genetics', label: '2. Genetics & Spatacsin', icon: Dna },
            { id: 'clinical', label: '3. Clinical Signs & Diagnosis', icon: Brain },
            { id: 'alliance', label: '4. Research Alliance & Mission', icon: HeartHandshake },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isCurrent}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  isCurrent
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <h3 className="text-2xl font-bold text-slate-900">
                  Understanding Complex Hereditary Spastic Paraplegia
                </h3>
                <p>
                  <strong>Spastic Paraplegia Type 11 (SPG11)</strong> is a rare, autosomal recessive neurodegenerative disorder characterized by progressive stiffness and weakness in the lower limbs (spastic paraparesis). It represents the single most common cause of complex hereditary spastic paraplegia (HSP) with a <em>thin corpus callosum (TCC)</em>, accounting for roughly 20% to 30% of autosomal recessive HSP cases globally.
                </p>
                <p>
                  While &ldquo;pure&rdquo; forms of HSP only affect the lower extremities, SPG11 is classified as a &ldquo;complex&rdquo; form. In addition to progressive gait impairment, individuals often experience mild-to-moderate learning differences, peripheral axonal neuropathy, dysarthria (slurred speech), dysphagia (swallowing difficulties), and occasionally parkinsonism or retinopathy.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    Key Milestones in SPG11 Discovery
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li><strong>2007:</strong> Identification of the <em>KIAA1840/SPG11</em> gene on chromosome 15q21.1 by Stevanin et al.</li>
                    <li><strong>2014:</strong> Elucidation of spatacsin&rsquo;s direct role in Autophagic Lysosome Reformation (ALR) in motor neurons.</li>
                    <li><strong>2020s:</strong> Establishment of international prospective natural history cohorts (SPATAX, TreatHSP) and serum neurofilament light chain (sNfL) biomarkers.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-linear-to-br from-slate-900 to-slate-950 text-white shadow-md border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                  <Brain className="w-4 h-4" />
                  <span>Clinical Snapshot</span>
                </div>
                <h4 className="text-xl font-bold">Fast Facts for Families & Clinicians</h4>
                <div className="space-y-3 text-xs divide-y divide-slate-800 text-slate-300">
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Inheritance Pattern</span>
                    <span className="font-bold text-white">Autosomal Recessive</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Typical Age of Onset</span>
                    <span className="font-bold text-white">10 to 25 Years (Juvenile/Early Adult)</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Diagnostic Hallmarks</span>
                    <span className="font-bold text-white">Thin Corpus Callosum (TCC) on MRI</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Gene / Protein</span>
                    <span className="font-bold text-teal-300 font-mono">SPG11 / Spatacsin (2,443 aa)</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-400">Critical Medication Warning</span>
                    <span className="font-bold text-amber-300">Avoid Succinylcholine</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('features')}
                    className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition flex items-center justify-center gap-1.5"
                  >
                    <span>Explore Hub Features</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Genetics */}
        {activeTab === 'genetics' && (
          <div className="space-y-6 text-sm text-slate-700">
            <h3 className="text-2xl font-bold text-slate-900">
              Genetics & The Spatacsin Protein
            </h3>
            <p className="leading-relaxed">
              The <strong>SPG11 gene</strong> (formerly <em>KIAA1840</em>) spans 40 exons on chromosome 15q21.1 and encodes <strong>spatacsin</strong>, a large ubiquitous 2,443-amino acid transmembrane protein. Over 200 distinct pathogenic variants have been documented in the literature, with the vast majority representing nonsense, frameshift, or splice-site mutations that trigger nonsense-mediated mRNA decay, resulting in complete loss of functional spatacsin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono text-teal-700 font-bold bg-teal-100 px-2 py-0.5 rounded">Chromosome 15q21.1</span>
                <h4 className="font-bold text-slate-900 text-base">Autosomal Recessive</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Both biological parents are typically unaffected carriers (possessing one mutated copy). Each child has a 25% chance of inheriting both mutated copies.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono text-teal-700 font-bold bg-teal-100 px-2 py-0.5 rounded">Lysosome Machinery</span>
                <h4 className="font-bold text-slate-900 text-base">ALR & Lipid Clearance</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Spatacsin interacts with spastizin (SPG15) and AP5 adaptor complex to reform lysosomes. Loss of spatacsin leads to autolysosome swelling and intracellular lipid stagnation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono text-teal-700 font-bold bg-teal-100 px-2 py-0.5 rounded">Axonopathy</span>
                <h4 className="font-bold text-slate-900 text-base">Dying-Back Axons</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The longest upper motor neurons (reaching from cerebral cortex down to lumbar spinal cord) are uniquely vulnerable to impaired retrograde transport, leading to distal axon degeneration.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-between">
              <span className="text-xs text-teal-900">
                Want to see the molecular mechanics animated interactively?
              </span>
              <button
                type="button"
                onClick={() => onNavigate('pathology')}
                className="px-3.5 py-1.5 rounded-lg bg-teal-700 text-white font-semibold text-xs hover:bg-teal-800 transition"
              >
                Launch Cellular Visualizer →
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Clinical */}
        {activeTab === 'clinical' && (
          <div className="space-y-6 text-sm text-slate-700">
            <h3 className="text-2xl font-bold text-slate-900">
              Clinical Signs, Diagnostic Workup & Prognosis
            </h3>
            <p className="leading-relaxed">
              Diagnosis requires a combination of neuroimaging, comprehensive clinical neurological evaluation, and definitive confirmation via targeted next-generation sequencing (NGS) panels or whole exome sequencing (WES).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-teal-600" />
                  <span>Neuroimaging Hallmarks (Brain MRI)</span>
                </h4>
                <ul className="text-xs space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Thin Corpus Callosum (TCC):</strong> Severe thinning, particularly affecting the genu, rostrum, and body of the corpus callosum.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>&ldquo;Ears of the Lynx&rdquo; Sign:</strong> Bilateral T2/FLAIR hyperintensity in the periventricular white matter adjacent to frontal horns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Cerebral & Cerebellar Atrophy:</strong> Progressive cortical and mild cerebellar volumetric reduction over disease course.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-600" />
                  <span>Symptom Progression Stages</span>
                </h4>
                <ul className="text-xs space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Early Stage (Ages 10-18):</strong> Gait instability, frequent tripping, mild spasticity in calves and hamstrings, learning fatigue.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Intermediate Stage:</strong> Bilateral foot drop, spastic scissoring gait requiring canes/walker, hyperreflexia, extensor plantar responses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Advanced Stage:</strong> Wheelchair reliance for outdoor mobility, dysarthric speech, axonal polyneuropathy with hand intrinsic muscle wasting.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Alliance */}
        {activeTab === 'alliance' && (
          <div className="space-y-6 text-sm text-slate-700">
            <h3 className="text-2xl font-bold text-slate-900">
              The SPG11 Global Research Alliance
            </h3>
            <p className="leading-relaxed">
              The <strong>SPG11 Global Research Alliance</strong> is an open-science non-profit initiative connecting patient advocates, clinical geneticists, pharmaceutical researchers, and academic laboratories. Our goal is to de-risk clinical trial design by maintaining unified patient registries, longitudinal natural history datasets, and accessible educational resources.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-2xl font-black text-teal-600">32+</span>
                <h4 className="font-bold text-slate-900 text-xs">Participating Research Centers</h4>
                <p className="text-[11px] text-slate-500">Across 14 countries in Europe, the Americas, and Asia.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-2xl font-black text-teal-600">100%</span>
                <h4 className="font-bold text-slate-900 text-xs">Open-Access Science</h4>
                <p className="text-[11px] text-slate-500">All data submission tools follow FAIR data principles.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-2xl font-black text-teal-600">WCAG AA</span>
                <h4 className="font-bold text-slate-900 text-xs">Accessible by Design</h4>
                <p className="text-[11px] text-slate-500">Accessible tools for motor, visual, and cognitive needs.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-4 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition"
              >
                Get in Touch with the Alliance →
              </button>
              <button
                type="button"
                onClick={() => onNavigate('submit-data')}
                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs hover:bg-slate-200 transition"
              >
                Researcher Data Submission Portal
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
