import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// i18next module used to change the language

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        darkmodeBtn: 'Light mode',
        connectBtn: 'Connect with Metamask',
        disconnectBtn: 'Disconnect',
        accountBalance: 'Account Balance',
      },
    },
    fr: {
      translation: {
        darkmodeBtn: 'Mode clair',
        connectBtn: 'Connexion avec Metamask',
        disconnectBtn: 'Déconnexion',
        accountBalance: 'Solde du compte',
      },
    },
  },
  lng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
