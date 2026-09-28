import React, { useState } from 'react';
import { X, Bot, FileText, Check, Download, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenSitemap?: () => void;
}

export const ROBOTS_TXT_CONTENT = `User-agent: *
Allow: /

Sitemap: https://www.spg11journey.com/sitemap.xml`;

export const RobotsTxtModal: React.FC<Props> = ({ isOpen, onClose, onOpenSitemap }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'raw'>('visual');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(ROBOTS_TXT_CONTENT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([ROBOTS_TXT_CONTENT], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="robots-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-950 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="robots-modal-title" className="text-lg font-bold">
                  Robots Exclusion Protocol (/robots.txt)
                </h2>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono border border-emerald-800">
                  Standard Compliant
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Directives for Googlebot, Bingbot, medical indexers, and academic web crawlers.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="Close Robots Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls & Actions */}
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
              Overview & Directives
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('raw')}
              className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'raw'
                  ? 'bg-white text-teal-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Raw Text File</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy robots.txt'}</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'visual' ? (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Indexation Summary & Crawl Policy</span>
                </span>
                <p className="text-slate-600 leading-relaxed">
                  The SPG11 Research & Clinical Trial Hub provides open-access medical, observational, and patient educational resources. Standard search engine spiders are invited to crawl all core sections to maximize disease awareness and research discoverability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
                  <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Allowed Routes (Public)</span>
                  </span>
                  <ul className="space-y-1 font-mono text-[11px] text-slate-600">
                    <li>• / (Homepage & Overview)</li>
                    <li>• /about (Pathology & Genetics)</li>
                    <li>• /features (Interactive Tools)</li>
                    <li>• /how-it-works (Workflow Guide)</li>
                    <li>• /faq (Medical Terms & FAQs)</li>
                    <li>• /blog (Scientific Dispatches)</li>
                    <li>• /contact (Support & Inquiries)</li>
                    <li>• /sitemap.xml (Canonical XML)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
                  <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Restricted Paths (Privacy)</span>
                  </span>
                  <ul className="space-y-1 font-mono text-[11px] text-slate-600">
                    <li>• /api/private/ (Encrypted storage)</li>
                    <li>• /*?preview=true (Staging parameters)</li>
                  </ul>
                  <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100">
                    Patient records stored in the SPG11 Journey Tracker remain strictly client-side inside the user's browser (IndexedDB / LocalStorage).
                  </div>
                </div>
              </div>

              {/* Linked Sitemap */}
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="font-bold text-teal-950 text-xs block">Canonical XML Sitemap Declared</span>
                  <span className="font-mono text-[11px] text-teal-800">
                    https://www.spg11journey.com/sitemap.xml
                  </span>
                </div>
                {onOpenSitemap && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenSitemap();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs shrink-0 flex items-center gap-1.5 transition"
                  >
                    <span>Inspect sitemap.xml</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Plain Text MIME Type: text/plain</span>
                <span className="font-mono text-[11px]">UTF-8 Encoded</span>
              </div>
              <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                {ROBOTS_TXT_CONTENT}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Location: <strong className="text-slate-700">/robots.txt</strong>
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
