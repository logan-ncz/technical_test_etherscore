import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// i18next module used to change the language

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        lightmodeBtn: 'Light mode',
        darkmodeBtn: 'Dark mode',
        connectBtn: 'Connect with Metamask',
        disconnectBtn: 'Disconnect',
        walletBalanceTitle: 'Account Balance',
      },
    },
    fr: {
      translation: {
        lightmodeBtn: 'Mode clair',
        darkmodeBtn: 'Mode sombre',
        connectBtn: 'Connexion avec Metamask',
        disconnectBtn: 'Déconnexion',
        walletBalanceTitle: 'Solde du compte',
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
