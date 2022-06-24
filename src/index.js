import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/main.scss';

import './services/i18n';

import ThemeContextWrapper from './theme/ThemeWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>
);
