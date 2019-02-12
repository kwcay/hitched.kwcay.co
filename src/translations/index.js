// @flow
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import city from './city';
import facts from './facts';
import store from '../store';
import general from './general';
import invitation from './invitation';
import { LANG_EN, LANG_FR } from '../constants';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  [LANG_FR]: {
    translation: {
      city: city.fr,
      facts: facts.fr,
      general: general.fr,
      invitation: invitation.fr,
    }
  },
  [LANG_EN]: {
    translation: {
      city: city.en,
      facts: facts.en,
      general: general.en,
      invitation: invitation.en,
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: store.getLanguage(),
    fallbackLng: LANG_EN,
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;
