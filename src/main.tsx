// Guard against iframe/sandboxed environments where window.fetch has only a getter
(function ensureFetchSetter() {
  if (typeof window === 'undefined') return;
  try {
    let currentFetch = window.fetch;
    const proto = window.Window ? window.Window.prototype : Object.getPrototypeOf(window);
    if (proto) {
      const pDesc = Object.getOwnPropertyDescriptor(proto, 'fetch');
      if (pDesc && !pDesc.set && pDesc.configurable) {
        Object.defineProperty(proto, 'fetch', {
          get: () => currentFetch,
          set: (fn) => { currentFetch = fn; },
          configurable: true,
          enumerable: true,
        });
      }
    }
    const wDesc = Object.getOwnPropertyDescriptor(window, 'fetch');
    if (!wDesc || !wDesc.set) {
      Object.defineProperty(window, 'fetch', {
        get: () => currentFetch,
        set: (fn) => { currentFetch = fn; },
        configurable: true,
        enumerable: true,
      });
    }
  } catch (_) {
    // Ignore if not permitted
  }
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
