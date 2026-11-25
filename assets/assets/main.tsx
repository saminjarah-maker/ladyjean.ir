import { createRoot, hydrateRoot } from 'react-dom/client';
import App, { type InitialStorefrontData } from './App.tsx';
import './index.css';

function readInitialData(): InitialStorefrontData | undefined {
  try {
    const el = document.getElementById('__LJ_INITIAL_DATA__');
    if (!el || !el.textContent) return undefined;
    return JSON.parse(el.textContent) as InitialStorefrontData;
  } catch {
    return undefined;
  }
}

const rootEl = document.getElementById('root')!;
const initialData = readInitialData();

if (rootEl.hasChildNodes() && initialData) {
  hydrateRoot(rootEl, <App initialData={initialData} />);
} else {
  createRoot(rootEl).render(<App initialData={initialData} />);
}
