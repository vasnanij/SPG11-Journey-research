import React from 'react';
import { AccessibilitySettings } from '../types';
import { Type, Eye, Sparkles, BookOpen, Stethoscope, RefreshCw } from 'lucide-react';

interface Props {
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  onReset: () => void;
}

export const AccessibilityToolbar: React.FC<Props> = ({
  settings,
  onUpdateSettings,
  onReset,
}) => {
  return (
    <aside
      aria-label="Accessibility and Reading Controls"
      className="bg-slate-900 text-slate-100 border-b border-slate-800 text-xs sm:text-sm px-3 py-2 transition-colors"
      id="accessibility-toolbar"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Purpose and accessibility announcement */}
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-teal-800 text-teal-200 border border-teal-600">
            Accessibility Mode
          </span>
          <span className="hidden md:inline text-slate-300">
            Customize display contrast, text sizing, and clinical vs. caregiver reading mode
          </span>
        </div>

        {/* Right: Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Text Size Stepper */}
          <div className="flex items-center bg-slate-800 rounded border border-slate-700 p-0.5" role="group" aria-label="Font Size">
            <span className="px-1.5 text-slate-400 font-medium flex items-center gap-1 text-[11px]">
              <Type className="w-3.5 h-3.5" aria-hidden="true" />
              Size:
            </span>
            <button
              id="btn-font-normal"
              type="button"
              onClick={() => onUpdateSettings({ fontSize: 'normal' })}
              className={`px-2 py-1 rounded text-xs font-semibold transition ${
                settings.fontSize === 'normal'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={settings.fontSize === 'normal'}
              title="Default Font Size (100%)"
            >
              A
            </button>
            <button
              id="btn-font-large"
              type="button"
              onClick={() => onUpdateSettings({ fontSize: 'large' })}
              className={`px-2 py-1 rounded text-xs font-semibold transition ${
                settings.fontSize === 'large'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={settings.fontSize === 'large'}
              title="Large Font Size (+15%)"
            >
              A+
            </button>
            <button
              id="btn-font-xlarge"
              type="button"
              onClick={() => onUpdateSettings({ fontSize: 'xlarge' })}
              className={`px-2 py-1 rounded text-xs font-semibold transition ${
                settings.fontSize === 'xlarge'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={settings.fontSize === 'xlarge'}
              title="Extra Large Font Size (+30%)"
            >
              A++
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            id="btn-high-contrast"
            type="button"
            onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-medium transition ${
              settings.highContrast
                ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
            aria-pressed={settings.highContrast}
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>High Contrast</span>
          </button>

          {/* Dyslexia-Friendly Font Toggle */}
          <button
            id="btn-dyslexia-font"
            type="button"
            onClick={() => onUpdateSettings({ dyslexiaFont: !settings.dyslexiaFont })}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-medium transition ${
              settings.dyslexiaFont
                ? 'bg-teal-500 text-slate-950 border-teal-300 font-bold'
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
            aria-pressed={settings.dyslexiaFont}
          >
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Accessible Font</span>
          </button>

          {/* Reading Mode Switcher: Caregiver (Plain Language) vs Scientific */}
          <div className="flex items-center bg-slate-800 rounded border border-slate-700 p-0.5" role="group" aria-label="Reading Mode">
            <button
              id="btn-mode-plain"
              type="button"
              onClick={() => onUpdateSettings({ plainLanguageMode: true })}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition ${
                settings.plainLanguageMode
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={settings.plainLanguageMode}
              title="Show simplified plain language for caregivers and patients"
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Caregiver Mode</span>
            </button>
            <button
              id="btn-mode-scientific"
              type="button"
              onClick={() => onUpdateSettings({ plainLanguageMode: false })}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition ${
                !settings.plainLanguageMode
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
              aria-pressed={!settings.plainLanguageMode}
              title="Show detailed scientific and clinical terminology"
            >
              <Stethoscope className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Clinical Mode</span>
            </button>
          </div>

          {/* Reset button */}
          <button
            id="btn-reset-accessibility"
            type="button"
            onClick={onReset}
            className="p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition"
            title="Reset accessibility options to defaults"
            aria-label="Reset accessibility settings"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
