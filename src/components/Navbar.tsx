import React, { useState } from 'react';
import { Activity, FileText, FlaskConical, LifeBuoy, Menu, X, Dna, AlertTriangle, ShieldCheck } from 'lucide-react';

interface Props {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenWalletCard: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeSection,
  onNavigate,
  onOpenWalletCard,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'About SPG11', icon: Dna },
    { id: 'pathology', label: 'Cellular Biology', icon: Activity },
    { id: 'trials', label: 'Clinical Trials', icon: FlaskConical },
    { id: 'resources', label: 'Patient & Caregiver', icon: LifeBuoy },
    { id: 'submit-data', label: 'Researcher Portal', icon: FileText },
    { id: 'glossary', label: 'Glossary & FAQ', icon: ShieldCheck },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs transition-colors">
      {/* Skip to Main Content Link for Screen Readers & Keyboard Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 z-50 bg-teal-700 text-white px-4 py-2 rounded-md font-semibold text-sm shadow-lg outline-hidden ring-2 ring-white"
        id="skip-to-main-link"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Identifier */}
          <div className="flex items-center gap-3">
            <button
              id="brand-logo-btn"
              type="button"
              onClick={() => onNavigate('overview')}
              className="flex items-center gap-2.5 text-left group focus:outline-hidden focus:ring-2 focus:ring-teal-500 rounded p-1"
              aria-label="SPG11 Research and Clinical Hub Homepage"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-xs group-hover:bg-teal-700 transition">
                <Dna className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-900 tracking-tight text-lg leading-tight">
                    SPG11
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-[11px] font-bold px-1.5 py-0.5 rounded border border-teal-200 uppercase">
                    Research Hub
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 font-medium leading-none">
                  Awareness, Trials & Data Registry
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-100 text-teal-900 font-bold border-b-2 border-teal-600'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-600'}`} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              id="btn-nav-emergency-card"
              type="button"
              onClick={onOpenWalletCard}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 transition shadow-xs"
              title="Open printable emergency medical wallet card for SPG11 patients"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
              <span>Emergency Card</span>
            </button>

            <button
              id="btn-nav-submit-data"
              type="button"
              onClick={() => onNavigate('submit-data')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 transition shadow-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Submit Data</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="btn-mobile-emergency"
              type="button"
              onClick={onOpenWalletCard}
              className="p-1.5 rounded-md bg-amber-50 text-amber-800 border border-amber-300 sm:hidden"
              aria-label="Open Emergency Card"
            >
              <AlertTriangle className="w-4 h-4 text-amber-700" />
            </button>
            <button
              id="btn-toggle-mobile-menu"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-panel"
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition ${
                  isActive
                    ? 'bg-teal-50 text-teal-900 font-bold border-l-4 border-teal-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-600'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-btn-emergency"
              type="button"
              onClick={() => {
                onOpenWalletCard();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-300"
            >
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Emergency Medical Wallet Card</span>
            </button>
            <button
              id="mobile-btn-submit"
              type="button"
              onClick={() => {
                onNavigate('submit-data');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm font-semibold bg-teal-600 text-white hover:bg-teal-700"
            >
              <FileText className="w-4 h-4" />
              <span>Researcher Data Submission Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
