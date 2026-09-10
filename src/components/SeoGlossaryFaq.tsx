import React, { useState } from 'react';
import { MEDICAL_GLOSSARY, FREQUENTLY_ASKED_QUESTIONS } from '../data/spg11Data';
import { BookOpen, Search, HelpCircle, ChevronDown, ChevronUp, Sparkles, Tag, ShieldCheck, Stethoscope } from 'lucide-react';

interface Props {
  plainLanguageMode: boolean;
}

export const SeoGlossaryFaq: React.FC<Props> = ({ plainLanguageMode }) => {
  const [glossarySearch, setGlossarySearch] = useState('');
  const [selectedGlossaryCategory, setSelectedGlossaryCategory] = useState<string>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const categories = ['All', 'Genetics', 'Neuroimaging', 'Symptoms', 'Therapeutics'];

  const filteredGlossary = MEDICAL_GLOSSARY.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.plainDefinition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.scientificDefinition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.clinicalRelevance.toLowerCase().includes(glossarySearch.toLowerCase());

    const matchesCategory =
      selectedGlossaryCategory === 'All' || item.category === selectedGlossaryCategory;

    return matchesSearch && matchesCategory;
  });

  const seoKeywords = [
    'SPG11',
    'Spastic Paraplegia 11',
    'Spatacsin',
    'KIAA1840',
    'Thin Corpus Callosum (TCC)',
    'Ears of the Lynx Sign',
    'Autophagic Lysosome Reformation (ALR)',
    'Hereditary Spastic Paraplegia',
    'Neurofilament Light Chain (sNfL)',
    'Complex HSP',
    'Tideglusib',
    'Succinylcholine Contraindication',
    'Spastic Paraplegia Rating Scale (SPRS)',
    'SPATAX Registry'
  ];

  return (
    <section id="glossary-section" className="py-12 bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Keywords Cloud Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
            <Tag className="w-3.5 h-3.5 text-teal-600" />
            <span>Key Research & Clinical Search Topics</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {seoKeywords.map((kw, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setGlossarySearch(kw)}
                className="text-xs bg-white text-slate-700 hover:text-teal-900 hover:border-teal-400 px-2.5 py-1 rounded-md border border-slate-200 shadow-xs transition cursor-pointer"
                title={`Filter glossary by ${kw}`}
              >
                #{kw}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Grid: FAQ on Left, Medical Glossary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* FAQ Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span>Stakeholder & Caregiver Answers</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Common questions from newly diagnosed families, caregivers, and medical practitioners.
              </p>
            </div>

            <div className="space-y-3">
              {FREQUENTLY_ASKED_QUESTIONS.map((faq, idx) => {
                const isOpen = expandedFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    id={`faq-item-${idx}`}
                    className="border border-slate-200 rounded-xl overflow-hidden transition"
                  >
                    <button
                      id={`btn-faq-toggle-${idx}`}
                      type="button"
                      onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100/70 flex items-center justify-between gap-3 text-slate-900 font-bold text-xs sm:text-sm transition"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Medical Glossary Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs tracking-wider uppercase">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Standardized Clinical Vocabulary</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                SPG11 Medical & Genetic Glossary
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Demystifying medical and neurogenetic jargon for patients, families, and researchers.
              </p>
            </div>

            {/* Glossary Search & Filters */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="glossary-search-input"
                  type="search"
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  placeholder="Filter glossary term (e.g. Spatacsin, Lynx, ALR, NfL)..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedGlossaryCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                      selectedGlossaryCategory === cat
                        ? 'bg-teal-700 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Glossary Cards */}
            <div className="space-y-3 max-h-130 overflow-y-auto pr-1">
              {filteredGlossary.map((item, idx) => (
                <div
                  key={idx}
                  id={`glossary-card-${idx}`}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition shadow-xs text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 text-sm">{item.term}</h3>
                    <span className="text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>

                  {plainLanguageMode ? (
                    <div>
                      <span className="font-bold text-teal-900 block mb-0.5">Plain Definition:</span>
                      <p className="text-slate-700 leading-relaxed">{item.plainDefinition}</p>
                    </div>
                  ) : (
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Scientific Definition:</span>
                      <p className="text-slate-700 leading-relaxed font-mono text-[11px]">{item.scientificDefinition}</p>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                    <strong className="text-slate-700">Clinical Relevance:</strong> {item.clinicalRelevance}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
