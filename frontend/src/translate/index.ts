import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import locales from './locale'

i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  defaultNS: ['translations'],
  ns: ['translations'],
  debug: false,
  detection: {
    checkWhitelist: true
  },
  interpolation: {
    escapeValue: false
  },
  resources: locales
})

export default i18n
