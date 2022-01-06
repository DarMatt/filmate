import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonRu from './translations/ru/common.json';
import commonEn from './translations/en/common.json';
import { DEFAULT_LOCALE } from './CONST/locales';
import { LOCALE } from './CONST/key-localStorage';

const resources = {
  ru: {
    common: commonRu,
  },
  en: {
    common: commonEn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common'],
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: LOCALE,
    },
    resources,
    fallbackLng: {
      default: [DEFAULT_LOCALE],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
