import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Set English as the default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
