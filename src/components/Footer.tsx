import React from 'react';
import { Dna, ShieldCheck, Heart, ExternalLink, Mail, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
  onOpenWalletCard: () => void;
  onOpenSitemap?: () => void;
  onOpenRobotsTxt?: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenWalletCard, onOpenSitemap, onOpenRobotsTxt }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand and Mission */}
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight">
              <div className="w-7 h-7 rounded-md bg-teal-600 flex items-center justify-center text-white">
                <Dna className="w-4 h-4" />
              </div>
              <span className="leading-tight">SPG11 Hub</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              An open-access scientific and community platform dedicated to accelerating therapeutic discovery and organizing daily resources for Spastic Paraplegia Type 11.
            </p>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="text-[11px]">WCAG 2.1 AA Compliant</span>
            </div>
          </div>

          {/* Clinical Navigation */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Clinical Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-teal-400 transition"
                >
                  About SPG11 & Genetics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('pathology')}
                  className="hover:text-teal-400 transition"
                >
                  Cellular & Lysosomal Biology
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('trials')}
                  className="text-teal-300 hover:text-teal-200 font-semibold transition text-left inline-flex items-center gap-1.5 focus:outline-none focus:underline"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Active Clinical Trials</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-teal-400 transition"
                >
                  Medical Glossary & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Caregiver & Patient Support */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Caregiver Toolkits
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('journey')}
                  className="text-teal-300 hover:text-teal-200 font-semibold transition"
                >
                  SPG11 Journey Tracker & Vault
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenWalletCard}
                  className="text-amber-300 hover:text-amber-200 font-semibold transition"
                >
                  Emergency Medical Wallet Card
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-teal-400 transition"
                >
                  How It Works Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('resources')}
                  className="hover:text-teal-400 transition"
                >
                  Physical Therapy Protocols
                </button>
              </li>
            </ul>
          </div>

          {/* Researcher Portal & Publications */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Research & News
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="text-teal-300 hover:text-teal-200 font-semibold transition text-left"
                >
                  Scientific Blog & Dispatches
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('submit-data')}
                  className="hover:text-teal-400 font-semibold text-slate-300 transition"
                >
                  Submit Preclinical Data
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-teal-400 transition text-left"
                >
                  Contact Alliance
                </button>
              </li>
              <li>
                <a
                  href="https://clinicaltrials.gov/search?cond=SPG11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 inline-flex items-center gap-1 transition"
                >
                  <span>ClinicalTrials.gov Query</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Indexed Routes & XML Sitemap */}
          <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-teal-400 uppercase tracking-wider text-[11px]">
                Sitemap Index
              </h4>
              <span className="font-mono text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded border border-teal-800">
                0.9 XML
              </span>
            </div>
            <ul className="space-y-1 font-mono text-[11px]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 hover:text-teal-400 transition"
                >
                  /about
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('features')}
                  className="text-slate-300 hover:text-teal-400 transition"
                >
                  /features
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className="text-slate-300 hover:text-teal-400 transition"
                >
                  /how-it-works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="text-slate-300 hover:text-teal-400 transition"
                >
                  /faq
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="text-slate-300 hover:text-teal-400 transition"
                >
                  /blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-slate-300 hover:text-teal-400 transition"
                >
                  /contact
                </button>
              </li>
              <li className="pt-1.5 border-t border-slate-800 space-y-1">
                <button
                  type="button"
                  onClick={onOpenSitemap}
                  className="text-teal-300 hover:text-white font-bold transition flex items-center gap-1.5 text-xs font-sans"
                >
                  <span>View /sitemap.xml</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={onOpenRobotsTxt}
                  className="text-emerald-300 hover:text-white font-bold transition flex items-center gap-1.5 text-xs font-sans"
                >
                  <span>View /robots.txt</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] leading-relaxed text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[10px]">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Important Medical Disclaimer</span>
          </div>
          <p>
            The information contained on this website is for informational, research awareness, and educational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations. Always consult a qualified neurologist, medical geneticist, or healthcare provider for specific clinical guidance. Never disregard professional medical advice or delay in seeking it because of something read on this portal.
          </p>
        </div>

        {/* Bottom Credits and Copyright */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} SPG11 Research Awareness Alliance. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenRobotsTxt}
              className="hover:text-slate-300 font-mono text-[10px] transition"
            >
              robots.txt
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenSitemap}
              className="hover:text-slate-300 font-mono text-[10px] transition"
            >
              sitemap.xml
            </button>
            <span>•</span>
            <span>Schema.org MedicalCondition Compliant</span>
            <span>•</span>
            <span>Open Science Registry</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
