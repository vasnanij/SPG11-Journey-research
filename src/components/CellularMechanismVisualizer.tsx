import React, { useState } from 'react';
import { Microscope, ArrowRight, AlertCircle, CheckCircle2, ShieldAlert, Sparkles, Layers, Activity } from 'lucide-react';

interface Props {
  plainLanguageMode: boolean;
}

export const CellularMechanismVisualizer: React.FC<Props> = ({ plainLanguageMode }) => {
  const [activeTab, setActiveTab] = useState<'normal' | 'spg11' | 'therapies'>('spg11');
  const [selectedStep, setSelectedStep] = useState<number>(1);

  return (
    <section id="pathology-section" className="py-12 bg-white border-y border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase">
            <Microscope className="w-4 h-4" aria-hidden="true" />
            <span>Cellular & Molecular Biology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            {plainLanguageMode
              ? 'How SPG11 Affects Brain & Nerve Cells'
              : 'Pathophysiology: Spatacsin Deficiency & Lysosomal Dynamics'}
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            {plainLanguageMode
              ? 'Nerve cells rely on a continuous recycling cleanup system called Autophagic Lysosome Reformation (ALR). The spatacsin protein acts like an essential recycling foreman. Without it, cellular trash accumulates inside the cell, causing nerve cables to wither.'
              : 'Biallelic loss-of-function variants in SPG11 (15q21.1) disrupt spatacsin synthesis. In association with spastizin (SPG15) and AP-5, spatacsin coordinates tubulation during autophagic lysosome reformation (ALR), preventing fatal GM2 ganglioside accumulation in long corticospinal axons.'}
          </p>
        </div>

        {/* Interactive Mode Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3" role="tablist">
          <button
            id="tab-spg11-pathology"
            type="button"
            role="tab"
            aria-selected={activeTab === 'spg11'}
            onClick={() => setActiveTab('spg11')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'spg11'
                ? 'bg-rose-50 text-rose-800 border-2 border-rose-500 shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <AlertCircle className="w-4 h-4 text-rose-600" aria-hidden="true" />
            <span>SPG11 Defect & Disease Cascade</span>
          </button>

          <button
            id="tab-normal-cellular"
            type="button"
            role="tab"
            aria-selected={activeTab === 'normal'}
            onClick={() => setActiveTab('normal')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'normal'
                ? 'bg-emerald-50 text-emerald-800 border-2 border-emerald-500 shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>Healthy Cellular Recycling (ALR)</span>
          </button>

          <button
            id="tab-therapeutic-targets"
            type="button"
            role="tab"
            aria-selected={activeTab === 'therapies'}
            onClick={() => setActiveTab('therapies')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'therapies'
                ? 'bg-teal-50 text-teal-800 border-2 border-teal-600 shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-teal-600" aria-hidden="true" />
            <span>Therapeutic Targets & Drug Mechanisms</span>
          </button>
        </div>

        {/* Visualizer Interactive Stage */}
        <div className="mt-6 bg-slate-900 text-slate-100 rounded-xl p-5 sm:p-7 border border-slate-800 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Diagram / SVG Model */}
            <div className="lg:col-span-7 bg-slate-950/80 rounded-lg p-5 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  {activeTab === 'spg11'
                    ? 'Pathologic State: Spatacsin Loss'
                    : activeTab === 'normal'
                    ? 'Physiologic State: Spatacsin Active'
                    : 'Targeted Rescue Intervention'}
                </span>
                <span className="text-[11px] text-slate-400">Cortical Motor Neuron & Axon</span>
              </div>

              {/* Schematic SVG Diagram */}
              <div className="relative w-full h-64 sm:h-72 flex items-center justify-center">
                <svg viewBox="0 0 500 300" className="w-full h-full" aria-label="Interactive cellular diagram">
                  {/* Background Cell Membrane outline */}
                  <rect x="20" y="20" width="460" height="260" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
                  <text x="35" y="45" fill="#64748b" fontSize="11" fontWeight="600">Neuron Cytoplasm (Cell Body & Axon Hillock)</text>

                  {/* Healthy scenario */}
                  {activeTab === 'normal' && (
                    <g>
                      {/* Autophagosome */}
                      <circle cx="100" cy="140" r="35" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                      <text x="100" y="145" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">Autophagosome</text>

                      {/* Plus Arrow */}
                      <path d="M 145 140 L 175 140" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-green)" />

                      {/* Spatacsin-Spastizin Complex */}
                      <rect x="185" y="110" width="70" height="60" rx="8" fill="#134e4a" stroke="#14b8a6" strokeWidth="2" />
                      <text x="220" y="135" fill="#5eead4" fontSize="10" fontWeight="bold" textAnchor="middle">Spatacsin</text>
                      <text x="220" y="150" fill="#99f6e4" fontSize="9" textAnchor="middle">+ SPG15 / AP5</text>

                      {/* Plus Arrow */}
                      <path d="M 265 140 L 295 140" stroke="#10b981" strokeWidth="3" />

                      {/* Lysosomal Tubulation & Clean recycling */}
                      <circle cx="340" cy="140" r="32" fill="#065f46" stroke="#34d399" strokeWidth="2" />
                      <path d="M 372 140 Q 400 120 420 140" fill="none" stroke="#34d399" strokeWidth="3" strokeDasharray="3 3" />
                      <circle cx="430" cy="140" r="14" fill="#047857" stroke="#6ee7b7" strokeWidth="2" />
                      <text x="340" y="143" fill="#a7f3d0" fontSize="9" fontWeight="bold" textAnchor="middle">Autolysosome</text>
                      <text x="430" y="144" fill="#d1fae5" fontSize="8" fontWeight="bold" textAnchor="middle">Proto-Lys</text>

                      {/* Axon tract */}
                      <line x1="80" y1="230" x2="440" y2="230" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
                      <text x="260" y="255" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
                        ✓ Intact Microtubule Transport to Legs & Spinal Cord
                      </text>
                    </g>
                  )}

                  {/* SPG11 Mutation scenario */}
                  {activeTab === 'spg11' && (
                    <g>
                      {/* Autophagosome */}
                      <circle cx="90" cy="130" r="30" fill="#3b0764" stroke="#c084fc" strokeWidth="2" />
                      <text x="90" y="134" fill="#f3e8ff" fontSize="9" fontWeight="bold" textAnchor="middle">Autophagosome</text>

                      {/* Broken Spatacsin */}
                      <rect x="150" y="105" width="70" height="50" rx="8" fill="#4c0519" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" />
                      <text x="185" y="128" fill="#fda4af" fontSize="10" fontWeight="bold" textAnchor="middle">NO Spatacsin</text>
                      <text x="185" y="143" fill="#f43f5e" fontSize="9" textAnchor="middle">Mutated / Truncated</text>

                      {/* Swollen, blocked lysosome */}
                      <circle cx="280" cy="130" r="48" fill="#881337" stroke="#fb7185" strokeWidth="3" />
                      <text x="280" y="125" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">Engorged Lysosome</text>
                      <text x="280" y="140" fill="#fecdd3" fontSize="9" textAnchor="middle">Toxic GM2 Gangliosides</text>
                      <text x="280" y="153" fill="#fda4af" fontSize="8" textAnchor="middle">(ALR Failure)</text>

                      {/* Axon Breakdown */}
                      <line x1="60" y1="230" x2="200" y2="230" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
                      <line x1="220" y1="230" x2="300" y2="230" stroke="#fb7185" strokeWidth="3" strokeDasharray="4 4" />
                      <circle cx="340" cy="230" r="14" fill="#e11d48" stroke="#fda4af" strokeWidth="2" />
                      <text x="340" y="234" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Swelling</text>
                      <line x1="370" y1="230" x2="440" y2="230" stroke="#475569" strokeWidth="2" strokeDasharray="2 4" />

                      <text x="260" y="260" fill="#fb7185" fontSize="11" fontWeight="bold" textAnchor="middle">
                        ⚠️ Axonal Spheroids & Corticospinal Tract Degeneration
                      </text>
                    </g>
                  )}

                  {/* Therapeutic Target scenario */}
                  {activeTab === 'therapies' && (
                    <g>
                      {/* Tideglusib / GSK3 Target */}
                      <rect x="50" y="80" width="125" height="55" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                      <text x="112" y="100" fill="#7dd3fc" fontSize="10" fontWeight="bold" textAnchor="middle">1. GSK-3β Inhibition</text>
                      <text x="112" y="115" fill="#bae6fd" fontSize="9" textAnchor="middle">(Tideglusib / AMO-02)</text>
                      <text x="112" y="127" fill="#94a3b8" fontSize="8" textAnchor="middle">Unblocks vesicle traffic</text>

                      {/* Autophagy target */}
                      <rect x="195" y="80" width="125" height="55" rx="6" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                      <text x="257" y="100" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">2. Autophagy Boosters</text>
                      <text x="257" y="115" fill="#a7f3d0" fontSize="9" textAnchor="middle">(Trehalose / Miglustat)</text>
                      <text x="257" y="127" fill="#94a3b8" fontSize="8" textAnchor="middle">Clears lipid buildup</text>

                      {/* Gene Therapy target */}
                      <rect x="340" y="80" width="125" height="55" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                      <text x="402" y="100" fill="#fcd34d" fontSize="10" fontWeight="bold" textAnchor="middle">3. Dual AAV9 Gene</text>
                      <text x="402" y="115" fill="#fde68a" fontSize="9" textAnchor="middle">(Preclinical Pipeline)</text>
                      <text x="402" y="127" fill="#94a3b8" fontSize="8" textAnchor="middle">Delivers full SPG11 cDNA</text>

                      {/* Rescue arrow */}
                      <path d="M 257 145 L 257 190" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow-blue)" />
                      
                      {/* Protected Axon */}
                      <line x1="80" y1="220" x2="420" y2="220" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                      <text x="250" y="250" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle">
                        ✓ Preserving Upper Motor Neurons & White Matter Integrity
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Diagram Footer Tag */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2">
                <span>Key hallmark: Autophagic Lysosome Reformation (ALR)</span>
                <span className="text-teal-400 font-mono">Chr 15q21.1 • 40 Exons</span>
              </div>
            </div>

            {/* Right Information & Step Walkthrough */}
            <div className="lg:col-span-5 space-y-4">
              {activeTab === 'spg11' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm">
                    <h3 className="font-bold text-rose-300 flex items-center gap-1.5 mb-1">
                      <ShieldAlert className="w-4 h-4 text-rose-400" />
                      {plainLanguageMode ? 'Why Do Nerve Cells Die in SPG11?' : 'Pathomechanism of Spatacsin Deficiency'}
                    </h3>
                    <p className="text-rose-100/90 text-xs leading-relaxed">
                      {plainLanguageMode
                        ? 'Because cells cannot break down and recycle fatty waste (GM2 gangliosides), the cell’s internal trash cans swell up until they choke off the cell’s long communication cables (axons) reaching from the brain down to the legs.'
                        : 'Spatacsin binds the adaptor protein 5 (AP-5) complex to initiate membrane budding. In its absence, tubulation stalls, terminating autophagic lysosome reformation. The unmanaged accumulation of GM2 gangliosides induces autophagic arrest, neurofilament aggregation, and apoptotic cascade in upper motor neurons.'}
                    </p>
                  </div>

                  <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700 text-xs">
                    <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-teal-400" />
                      Diagnostic MRI Hallmark: The "Lynx Ears" Sign
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {plainLanguageMode
                        ? 'On brain MRI scans, doctors look for a distinct thinning of the corpus callosum (the nerve bridge connecting both brain halves). Near the front, a bright tufted marker appears on the scan called the "ears of the lynx" sign.'
                        : 'Over 90% of SPG11 patients exhibit thin corpus callosum (TCC) accompanied by bilateral T2/FLAIR hyperintensity in the periventricular frontal white matter (ears of the lynx sign), reflecting severe axonal loss and gliosis.'}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'normal' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-xs sm:text-sm">
                    <h3 className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {plainLanguageMode ? 'The Normal Recycling Machine' : 'Physiological Autophagic Lysosome Reformation'}
                    </h3>
                    <p className="text-emerald-100/90 text-xs leading-relaxed">
                      {plainLanguageMode
                        ? 'In healthy nerves, spatacsin acts like a recycling coordinator. After worn-out cellular parts are digested, spatacsin builds tiny tubes that pinch off brand-new, clean lysosomes ready for the next round of cleaning.'
                        : 'In wild-type corticospinal neurons, spatacsin forms an obligate stoichiometric complex with spastizin (SPG15) to drive tubular extrusion from autolysosomes, restoring the physiological pool of primary lysosomes and maintaining axonal homeostasis.'}
                    </p>
                  </div>

                  <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700 text-xs">
                    <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] block mb-1">
                      Critical Role in Corticospinal Motor Axons
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      Upper motor neurons have the longest axons in the human body—up to one meter from the cerebral cortex down into the spinal cord. They are exquisitely sensitive to any defect in lysosomal recycling and axonal vesicle transport.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'therapies' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-teal-950/40 border border-teal-800/60 text-xs sm:text-sm">
                    <h3 className="font-bold text-teal-300 flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-4 h-4 text-teal-400" />
                      {plainLanguageMode ? 'How Science is Fighting Back' : 'Translational Therapeutics in the Pipeline'}
                    </h3>
                    <p className="text-teal-100/90 text-xs leading-relaxed">
                      {plainLanguageMode
                        ? '1. Enzyme inhibitors (like Tideglusib) help restart stalled cellular traffic. 2. Autophagy boosters help dissolve the fatty sludge. 3. Dual-package gene therapy aims to deliver healthy copies of the SPG11 gene directly to nerve cells.'
                        : 'Current clinical and preclinical development targets three complementary nodal points: GSK-3β inhibition (preventing hyperphosphorylation and vesicle arrest), chemical chaperones/autophagy upregulators (miglustat, trehalose derivatives), and dual AAV9 gene supplementation.'}
                    </p>
                  </div>

                  <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-amber-300">Biomarker Spotlight: Serum NfL</span>
                      <span className="bg-amber-900/60 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-bold">4.2x Elevation</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Neurofilament Light Chain (sNfL) released from dying axons acts as a quantifiable liquid biopsy. Measuring NfL in clinical trials allows researchers to know if an investigational medicine is protecting nerves within months.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Clinical Presentation Grid: Plain vs Scientific */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
              {plainLanguageMode ? 'Early Signs (Ages 12–18)' : 'Initial Clinical Manifestation'}
            </span>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {plainLanguageMode ? 'Walking Stiffness & Balance Issues' : 'Progressive Spastic Paraparesis'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {plainLanguageMode
                ? 'Teenagers often experience stiff leg muscles, toe-walking, stumbling over flat ground, or difficulty keeping up during sports. Subtle learning challenges or fatigue may emerge simultaneously.'
                : 'Insidious bilateral lower limb spasticity with hyperreflexia, extensor plantar responses (Babinski sign), scissor gait pattern, and insidious subcortical cognitive decline.'}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
              {plainLanguageMode ? 'Neurological Features' : 'Multisystem Neurological Involvement'}
            </span>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {plainLanguageMode ? 'Speech, Memory & Nerve Symptoms' : 'Cognitive, Bulbar & Axonal Neuropathy'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {plainLanguageMode
                ? 'Speech may become slurred (dysarthria). Nerve damage in the feet can cause high arches (pes cavus) or muscle thinning. Memory, multi-tasking, and processing speed can be affected.'
                : 'Slowed saccadic eye movements, pseudobulbar dysarthria and dysphagia, distal amyotrophy with sensorimotor axonal polyneuropathy, and executive dysfunction with preserved social engagement.'}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
              {plainLanguageMode ? 'Diagnostic Pathway' : 'Diagnostic Gold Standard'}
            </span>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {plainLanguageMode ? 'Brain MRI & Genetic DNA Testing' : 'Neuroimaging & Biallelic Gene Sequencing'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {plainLanguageMode
                ? 'Diagnosis requires two key steps: a brain MRI showing the thin corpus callosum, and a genetic blood or saliva test confirming two faulty copies of the SPG11 gene.'
                : 'Definitive confirmation via Next-Generation Sequencing (targeted HSP panel or WES/WGS) demonstrating biallelic loss-of-function variants in SPG11, supported by characteristic MRI TCC and EMG/NCS findings.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
