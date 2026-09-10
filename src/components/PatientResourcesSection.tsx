import React, { useState } from 'react';
import { PatientResource } from '../types';
import { PATIENT_RESOURCES } from '../data/spg11Data';
import { 
  LifeBuoy, 
  AlertTriangle, 
  Printer, 
  Download, 
  ExternalLink, 
  CheckSquare, 
  Heart, 
  ShieldAlert, 
  Dna, 
  FileText, 
  Check, 
  Sparkles,
  UserCheck,
  Building2,
  PhoneCall
} from 'lucide-react';

interface Props {
  plainLanguageMode: boolean;
  walletCardOpen: boolean;
  onCloseWalletCard: () => void;
  onOpenWalletCard: () => void;
}

export const PatientResourcesSection: React.FC<Props> = ({
  plainLanguageMode,
  walletCardOpen,
  onCloseWalletCard,
  onOpenWalletCard,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // State for Emergency Medical Wallet Card customization
  const [patientName, setPatientName] = useState('Alex Morgan');
  const [dob, setDob] = useState('1998-05-14');
  const [emergencyContact, setEmergencyContact] = useState('Sarah Morgan (Mother) - +1 (555) 342-9812');
  const [neurologist, setNeurologist] = useState('Dr. K. Vance, Rare Neurogenetics Clinic - +1 (555) 782-4400');
  const [spasticityMeds, setSpasticityMeds] = useState('Oral Baclofen 20mg TID, Tizanidine 4mg at bedtime');
  const [hasIntrathecalPump, setHasIntrathecalPump] = useState(false);
  const [hasCardCopied, setHasCardCopied] = useState(false);

  // Filter resources
  const categories = [
    'All',
    'Medical Emergency',
    'Mobility & Physical Therapy',
    'Caregiver Support',
    'Daily Living & Care',
    'Genetic Counseling',
  ];

  const filteredResources = PATIENT_RESOURCES.filter(
    (res) => selectedCategory === 'All' || res.category === selectedCategory
  );

  const handlePrintCard = () => {
    window.print();
  };

  const handleCopyCardText = () => {
    const cardText = `
EMERGENCY MEDICAL ATTENTION: SPG11 (SPASTIC PARAPLEGIA TYPE 11)
Patient: ${patientName} (DOB: ${dob})
Emergency Contact: ${emergencyContact}
Treating Neurologist: ${neurologist}
Current Medications: ${spasticityMeds} ${hasIntrathecalPump ? '[PATIENT HAS INTRATHECAL BACLOFEN PUMP]' : ''}

CRITICAL ANESTHESIA & MEDICAL PRECAUTIONS:
1. CONTRAINDICATION: SUCCINYLCHOLINE IS STRICTLY PROHIBITED (High risk of fatal hyperkalemic cardiac arrest due to motor denervation). Use non-depolarizing agents (e.g. rocuronium) with train-of-four monitoring.
2. BACLOFEN CRISIS: Do not abruptly stop oral baclofen or ignore pump alarms. Sudden cessation risks severe rebound spasticity, hyperthermia, rhabdomyolysis, and multi-organ failure.
3. ASPIRATION RISK: Severe dysphagia and impaired cough reflex. Position at 45° or upright; keep suction immediately available.
    `.trim();

    navigator.clipboard.writeText(cardText);
    setHasCardCopied(true);
    setTimeout(() => setHasCardCopied(false), 3000);
  };

  return (
    <section id="resources-section" className="py-12 bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase">
            <LifeBuoy className="w-4 h-4" aria-hidden="true" />
            <span>Empowering Families & Caregivers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Patient & Caregiver Resource Center
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            {plainLanguageMode
              ? 'Clear, practical guides for everyday mobility, speech safety, physical therapy, emotional well-being, and an essential emergency medical card to protect your loved one during hospital visits.'
              : 'Validated multidisciplinary care protocols, acute anesthesia emergency guidelines, rehabilitative physical therapy algorithms, and psychosocial support resources for complex HSP.'}
          </p>
        </div>

        {/* Featured Alert: Emergency Medical Wallet Card Generator Banner */}
        <div className="mb-10 bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-slate-950 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Critical Safety Resource
                </span>
                <span className="text-xs font-bold text-amber-900">Anesthesia & ER Precaution</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                SPG11 Emergency Medical & Anesthesia Wallet Card
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Emergency room doctors and anesthesiologists rarely encounter SPG11. Administering common drugs like <strong>succinylcholine</strong> can cause sudden fatal high potassium (hyperkalemia), and sudden baclofen withdrawal is life-threatening. Generate and print your customized pocket card below.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                id="btn-open-wallet-card"
                type="button"
                onClick={walletCardOpen ? onCloseWalletCard : onOpenWalletCard}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm transition"
              >
                <AlertTriangle className="w-4 h-4 text-slate-950" />
                <span>{walletCardOpen ? 'Collapse Card Generator' : 'Customize & Print Wallet Card'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Card Customizer and Print Preview */}
          {walletCardOpen && (
            <div className="mt-8 pt-6 border-t border-amber-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Form to fill info */}
                <div className="lg:col-span-6 space-y-3 bg-white p-5 rounded-xl border border-amber-200 shadow-xs text-xs">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-teal-600" />
                    Enter Patient Information
                  </h4>

                  <div>
                    <label htmlFor="card-patient-name" className="font-semibold text-slate-700 block mb-1">
                      Patient Full Name:
                    </label>
                    <input
                      id="card-patient-name"
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-slate-900"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="card-patient-dob" className="font-semibold text-slate-700 block mb-1">
                        Date of Birth:
                      </label>
                      <input
                        id="card-patient-dob"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-slate-900"
                      />
                    </div>
                    <div className="flex items-end pb-1">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-800 font-semibold">
                        <input
                          id="card-intrathecal-pump-chk"
                          type="checkbox"
                          checked={hasIntrathecalPump}
                          onChange={(e) => setHasIntrathecalPump(e.target.checked)}
                          className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                        />
                        <span>Has Baclofen Pump?</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="card-emergency-contact" className="font-semibold text-slate-700 block mb-1">
                      Primary Caregiver / Emergency Contact:
                    </label>
                    <input
                      id="card-emergency-contact"
                      type="text"
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-slate-900"
                      placeholder="Name, relationship and 24/7 phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="card-neurologist" className="font-semibold text-slate-700 block mb-1">
                      Managing Neurologist & Center:
                    </label>
                    <input
                      id="card-neurologist"
                      type="text"
                      value={neurologist}
                      onChange={(e) => setNeurologist(e.target.value)}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-slate-900"
                      placeholder="Dr. Name, Medical Center & phone"
                    />
                  </div>

                  <div>
                    <label htmlFor="card-spasticity-meds" className="font-semibold text-slate-700 block mb-1">
                      Current Spasticity Regimen:
                    </label>
                    <input
                      id="card-spasticity-meds"
                      type="text"
                      value={spasticityMeds}
                      onChange={(e) => setSpasticityMeds(e.target.value)}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-md text-slate-900"
                      placeholder="e.g. Oral Baclofen, Tizanidine, Botox injection dates"
                    />
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      id="btn-print-medical-card"
                      type="button"
                      onClick={handlePrintCard}
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold transition shadow-xs"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Card (Wallet Size)</span>
                    </button>
                    <button
                      id="btn-copy-card-text"
                      type="button"
                      onClick={handleCopyCardText}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold border border-slate-300 transition"
                    >
                      {hasCardCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Download className="w-4 h-4" />}
                      <span>{hasCardCopied ? 'Copied!' : 'Copy Text'}</span>
                    </button>
                  </div>
                </div>

                {/* Printable Wallet Card Preview */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Card Preview (Folds to standard credit card size: 3.375" x 2.125")</span>
                    <span className="text-amber-800 font-bold">Double-Sided Wallet Card</span>
                  </div>

                  <div
                    id="printable-wallet-card"
                    className="bg-slate-950 text-white rounded-xl p-5 border-2 border-amber-400 shadow-lg text-xs space-y-3 font-mono"
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between border-b border-slate-800 pb-2.5">
                      <div>
                        <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-sm tracking-wide">
                          <AlertTriangle className="w-4 h-4" />
                          <span>MEDICAL ALERT: SPG11</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Spastic Paraplegia 11 / Spatacsin Deficiency
                        </div>
                      </div>
                      <span className="bg-red-900 text-red-100 font-extrabold text-[9px] px-1.5 py-0.5 rounded border border-red-700">
                        ANESTHESIA ALERT
                      </span>
                    </div>

                    {/* Patient & Contacts */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[9px] uppercase">Patient Name:</span>
                        <strong className="text-white">{patientName || 'Patient Name'}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[9px] uppercase">DOB:</span>
                        <span className="text-slate-200">{dob || 'Not specified'}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-300 border-t border-slate-800/80 pt-2">
                      <span className="text-slate-500 block text-[9px] uppercase">Emergency Caregiver Contact:</span>
                      <span className="text-teal-300 font-semibold">{emergencyContact || 'Contact not provided'}</span>
                    </div>

                    <div className="text-[11px] text-slate-300">
                      <span className="text-slate-500 block text-[9px] uppercase">Managing Neurologist:</span>
                      <span>{neurologist || 'Specialist not provided'}</span>
                    </div>

                    {/* Critical clinical bullet points */}
                    <div className="bg-red-950/70 border border-red-800/80 p-2.5 rounded text-[10px] text-red-200 space-y-1 font-sans">
                      <div className="font-bold text-red-300 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                        CRITICAL MEDICAL WARNINGS:
                      </div>
                      <p>
                        <strong>1. NO SUCCINYLCHOLINE:</strong> Severe denervation carries fatal hyperkalemic cardiac arrest risk. Use rocuronium or sugammadex instead.
                      </p>
                      <p>
                        <strong>2. BACLOFEN WITHDRAWAL:</strong> Do not abruptly discontinue spasticity medications (risk of malignant hyperthermia & seizures).
                      </p>
                      {hasIntrathecalPump && (
                        <p className="text-amber-300 font-bold">
                          ⚠️ PATIENT HAS AN INTRATHECAL BACLOFEN PUMP IN SITU. Interrogate pump if symptoms change.
                        </p>
                      )}
                      <p>
                        <strong>3. ASPIRATION RISK:</strong> Neurogenic dysphagia; maintain elevated head position.
                      </p>
                    </div>

                    <div className="text-[9px] text-slate-500 text-center pt-1 border-t border-slate-800">
                      Validated by International SPG11 Clinical Consortium
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Resource Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Resource Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-res-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              id={`card-resource-${res.id}`}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-5 flex flex-col justify-between shadow-xs transition hover:shadow-sm"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {res.category}
                  </span>
                  {res.badge && (
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                      {res.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {res.description}
                </p>

                {/* Plain Language Tip */}
                <div className="p-2.5 rounded bg-slate-50 border border-slate-100 text-[11px] text-slate-700 leading-relaxed">
                  <span className="font-bold text-teal-800 block mb-0.5">Caregiver Quick Tip:</span>
                  {res.plainLanguageTip}
                </div>
              </div>

              {/* Bottom Tags and Action */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {res.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  id={`btn-action-res-${res.id}`}
                  type="button"
                  onClick={() => {
                    if (res.id === 'res-wallet-card') {
                      onOpenWalletCard();
                    } else {
                      alert(`Accessing: ${res.title}\n\nKey Takeaway: ${res.plainLanguageTip}`);
                    }
                  }}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 transition"
                >
                  <span>{res.actionLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Advocacy & Patient Foundation Directory */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Global Hereditary Spastic Paraplegia & SPG11 Organizations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Connect with registered patient advocacy groups offering family grants, peer mentorship, annual conferences, and scientific grantmaking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="font-bold text-slate-900 text-sm block">Spastic Paraplegia Foundation (SPF)</span>
              <span className="text-[11px] text-slate-500 block mb-2">North America</span>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Dedicated exclusively to Hereditary Spastic Paraplegia and Primary Lateral Sclerosis. Over $7M invested in research grants.
              </p>
              <a
                href="https://sp-foundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 font-bold text-xs inline-flex items-center gap-1"
              >
                <span>Visit sp-foundation.org</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="font-bold text-slate-900 text-sm block">Euro-HSP Federation</span>
              <span className="text-[11px] text-slate-500 block mb-2">Europe-wide Consortium</span>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                European umbrella organization uniting national HSP groups across France, Germany, Spain, Italy, the UK, and Scandinavia.
              </p>
              <a
                href="https://eurohsp.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 font-bold text-xs inline-flex items-center gap-1"
              >
                <span>Visit eurohsp.eu</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="font-bold text-slate-900 text-sm block">Tom Wahlig Foundation</span>
              <span className="text-[11px] text-slate-500 block mb-2">Germany & International</span>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Pioneering private foundation funding basic research, biomarker validation, and therapeutic approaches for HSP.
              </p>
              <a
                href="https://hsp-selbsthilfe.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 font-bold text-xs inline-flex items-center gap-1"
              >
                <span>Visit hsp-selbsthilfe.de</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="font-bold text-slate-900 text-sm block">SPATAX Network</span>
              <span className="text-[11px] text-slate-500 block mb-2">Global Clinical Network</span>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Collaborative research network of over 60 international medical teams focusing on Spastic Paraplegias and Ataxias.
              </p>
              <a
                href="https://spatax.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 font-bold text-xs inline-flex items-center gap-1"
              >
                <span>Visit SPATAX registry</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
