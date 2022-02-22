import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from 'src/locales/en.json';
import * as ru from 'src/locales/ru.json';

const resources = {
  en,
  ru,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'ru',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
