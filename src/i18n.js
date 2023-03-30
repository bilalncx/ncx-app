import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./Assets/locales/en/translation.json";
import translationES from "./Assets/locales/es/translation.json";
import translationIN from './Assets/locales/in/translation.json';
import translationZH from './Assets/locales/zh/translation.json';

const fallbackLng = ["en"];
const availableLanguages = ["en", "in", "es", "zh"];

const resources = {
  en: {
    translation: translationEN
  },
  in: {
    translation: translationIN
  },
  es: {
    translation: translationES
  },
  zh: {
    translation: translationZH
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;