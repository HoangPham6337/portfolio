import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import vi from "./locales/vi.json";

const savedLanguage = localStorage.getItem("language") || navigator.language.split("-")[0] || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: en},
      fr: {translation: fr},
      vi: {translation: vi}
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;