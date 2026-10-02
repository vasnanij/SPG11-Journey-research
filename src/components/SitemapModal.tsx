import React, { useState } from 'react';
import { X, ExternalLink, Globe, FileCode, Check, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface SitemapEntry {
  path: string;
  name: string;
  description: string;
  category: string;
  priority: string;
  changefreq: string;
  lastmod: string;
}

export const SITEMAP_ENTRIES: SitemapEntry[] = [
  {
    path: '/',
    name: 'Home / Hub Overview',
    description: 'Central portal dashboard, quick clinical summary, disease taxonomy OMIM #604360, and patient action launcher.',
    category: 'Core Portal',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: '2026-09-28',
  },
  {
    path: '/about',
    name: 'About SPG11 & Genetics',
    description: 'Comprehensive etiology, KIAA1840 spatacsin mutations, Thin Corpus Callosum pathophysiology, and research alliance mission.',
    category: 'Scientific Education',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2026-09-28',
  },
  {
    path: '/features',
    name: 'Interactive Features & Tools',
    description: 'Health vault, cellular mechanism visualizer, clinical trial pipelines, emergency wallet card, and researcher submissions.',
    category: 'Platform Features',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2026-09-28',
  },
  {
    path: '/how-it-works',
    name: 'How SPG11 Journey Tracker Works',
    description: 'Step-by-step onboarding, baseline health logging, longitudinal clinical report generator, and trial matching.',
    category: 'User Workflow',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-09-28',
  },
  {
    path: '/faq',
    name: 'Medical FAQ & Glossary',
    description: 'Searchable clinical glossary, diagnostic criteria, anesthesia contraindication guidance, and caregiver FAQs.',
    category: 'Caregiver Support',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: '2026-09-28',
  },
  {
    path: '/blog',
    name: 'SPG11 Blog & Family Resource Center',
    description: 'Practical guides on digital health organization, clinic visit preparation, and daily living strategies.',
    category: 'Guides & Publications',
    priority: '0.9',
    changefreq: 'daily',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/what-is-an-spg11-journey-tracker-and-how-does-it-work',
    name: 'Guide: What Is an SPG11 Journey Tracker?',
    description: 'Foundational guide explaining how digital health tracking helps families organize symptoms and communicate with neurologists.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/how-to-organize-your-spg11-journey-information-digitally',
    name: 'Guide: Organizing SPG11 Information Digitally',
    description: 'Framework for structuring genetic reports, MRI scans, and physical therapy logs into categorized folders.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/why-keeping-an-spg11-journey-journal-can-be-helpful',
    name: 'Guide: Why Keeping an SPG11 Journal Can Be Helpful',
    description: 'Explore the emotional and clinical benefits of documenting periodic symptom changes and family victories.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/how-to-keep-your-spg11-records-organized-in-one-place',
    name: 'Guide: Keeping SPG11 Records in One Place',
    description: 'How to unify fragmented hospital portals and physical paperwork into a single patient-held health vault.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/digital-tools-for-documenting-an-spg11-journey',
    name: 'Guide: Digital Tools for Documenting SPG11',
    description: 'Review of privacy-first, accessible digital software tools designed specifically for hereditary spastic paraplegia.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/what-information-can-you-keep-in-an-spg11-journey-tracker',
    name: 'Guide: What Information to Keep in a Tracker',
    description: 'Complete checklist of essential data points, from genetic variants to monthly spasticity scores.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/how-to-create-a-simple-spg11-journey-timeline',
    name: 'Guide: Creating a Simple SPG11 Journey Timeline',
    description: 'How to map onset, diagnosis, and therapy milestones into a clean timeline for specialist appointments.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/a-beginners-guide-to-using-an-spg11-journey-tracker',
    name: "Guide: Beginner's Guide to SPG11 Tracking",
    description: 'Step-by-step setup walkthrough for newly diagnosed individuals and families.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/how-families-can-organize-important-spg11-journey-information',
    name: 'Guide: How Families Can Organize Information',
    description: 'Collaborative caregiving strategies to coordinate medical schedules and emergency access.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/blog/spg11-journey-documentation-a-simple-digital-approach',
    name: 'Guide: Minimalist SPG11 Digital Documentation',
    description: 'The 3-M rule (Mobility, Medications, Milestones) for keeping medical documentation stress-free.',
    category: 'Blog Articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
  {
    path: '/contact',
    name: 'Contact & Collaboration Portal',
    description: 'Inquiries for families, clinicians, and researchers; rare disease support helplines, and registry data coordination.',
    category: 'Community & Support',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2026-10-02',
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SitemapModal: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'xml'>('visual');

  if (!isOpen) return null;

  const rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_ENTRIES.map(
  (entry) => `  <url>
    <loc>https://www.spg11journey.com${entry.path === '/' ? '' : entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
).join('\n')}
</urlset>`;

  const handleCopyXml = () => {
    navigator.clipboard.writeText(rawXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadXml = () => {
    const blob = new Blob([rawXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sitemap-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="sitemap-modal-title" className="text-lg font-bold">
                  Sitemap & Indexed Routes (/sitemap.xml)
                </h2>
                <span className="text-[10px] bg-teal-900 text-teal-300 px-2 py-0.5 rounded font-mono border border-teal-700">
                  XML 0.9 Validated
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Direct navigational indexing for search engines, crawlers, and portal visitors.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="Close Sitemap Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls & Tabs */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === 'visual'
                  ? 'bg-white text-teal-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Visual Directory ({SITEMAP_ENTRIES.length} Routes)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('xml')}
              className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'xml'
                  ? 'bg-white text-teal-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Raw XML Source</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyXml}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileCode className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied XML' : 'Copy XML'}</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadXml}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download sitemap.xml</span>
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto">
          {activeTab === 'visual' ? (
            <div className="space-y-3">
              <div className="text-xs text-slate-500 mb-2 flex items-center justify-between">
                <span>Click any route below to navigate directly inside the application:</span>
                <span className="font-mono text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  Domain: www.spg11journey.com
                </span>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                {SITEMAP_ENTRIES.map((entry) => {
                  return (
                    <div
                      key={entry.path}
                      className="p-4 hover:bg-slate-50/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              onNavigate(entry.path.replace('/', '') || 'overview');
                              onClose();
                            }}
                            className="text-left font-mono font-bold text-teal-700 hover:text-teal-900 hover:underline text-sm inline-flex items-center gap-1.5"
                          >
                            <span>{entry.path}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                          <span className="text-xs font-semibold text-slate-800">
                            — {entry.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {entry.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 text-[11px] text-slate-500">
                        <div className="flex flex-col sm:items-end">
                          <span className="font-semibold text-slate-700">
                            Priority: <strong className="text-teal-700">{entry.priority}</strong>
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Freq: {entry.changefreq}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            onNavigate(entry.path.replace('/', '') || 'overview');
                            onClose();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 font-semibold text-xs border border-teal-200 transition"
                        >
                          Visit Page
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Search Engine Crawler Note:</strong> This site serves standard XML at <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">/sitemap.xml</code> with robots.txt directives and Schema.org MedicalEntity metadata to guarantee indexing across Google Search, Bing, and clinical search portals.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Standard XML Format (sitemaps.org/schemas/sitemap/0.9)</span>
                <span className="font-mono text-[11px]">UTF-8 • Application/XML</span>
              </div>
              <pre className="bg-slate-900 text-teal-300 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                {rawXml}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Path: <code className="font-mono text-slate-700">/sitemap.xml</code>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
