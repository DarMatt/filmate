import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import './i18n';
import App from './App';
import { setupStore } from './store/store';

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </I18nextProvider>,
  document.getElementById('app')
);
