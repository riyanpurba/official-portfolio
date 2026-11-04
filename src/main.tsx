import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TagManager from 'react-gtm-module';

import App from './App';
import { AppConfig } from '@/utils/AppConfig';
import './styles/global.css';

TagManager.initialize({ gtmId: AppConfig.GTM });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
