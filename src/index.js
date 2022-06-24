import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/main.scss';

import './services/i18n';

import { Provider } from 'react-redux/es/exports';

import store from './redux/store';

import ThemeContextWrapper from './theme/ThemeWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </Provider>
  </React.StrictMode>
);
