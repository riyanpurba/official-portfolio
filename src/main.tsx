import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { initClickTracking } from '@/utils/analytics';
import './styles/global.css';

// GTM dimuat dari index.html. Di sini hanya pelacakan klik ke dataLayer.
initClickTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
