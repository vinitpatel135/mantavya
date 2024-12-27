// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// // Import your translation files
// import enTranslation from '../Locales/en/translation.json';
// import guTranslation from '../Locales/gu/translation.json';
// import hiTranslation from '../Locales/hi/translation.json';

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: enTranslation },
//     gu: { translation: guTranslation },
//     hi: { translation: hiTranslation },
//   },
//   lng: 'en', // Default language
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false, // React already does escaping
//   },
// });

// export default i18n;


// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../Locales/en/translation.json';
import guTranslation from '../Locales/gu/translation.json';
import hiTranslation from '../Locales/hi/translation.json';

i18n
  .use(LanguageDetector) // Automatically detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
        en: { translation: enTranslation },
            gu: { translation: guTranslation },
            hi: { translation: hiTranslation },
    },
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
