import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationENUS from '../locales/translation/en_us.json';
import translationESES from '../locales/translation/es_es.json';
import translationPTBR from '../locales/translation/pt_br.json';

// the translations
const resources = {
  'en-US': {
    translation: translationENUS
  },
  'en': {
    translation: translationENUS
  },
  'es-ES': {
    translation: translationESES
  },
  'es': {
    translation: translationESES
  },
  'pt-BR': {
    translation: translationPTBR
  },
  'pt': {
    translation: translationPTBR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;