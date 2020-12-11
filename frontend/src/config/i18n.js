import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

export const modules = ['fields', 'menus', 'messages', 'screens', 'app'];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    ns: modules,
    defaultNS: 'messages',
    load: 'all',
    whiteList: ['pt'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    debug: false,
    react: {
      wait: true,
    },
  });

export default i18n;
