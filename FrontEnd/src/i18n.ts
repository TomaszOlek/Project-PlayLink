import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en, pl } from "./translations";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  // init i18next
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en,
      pl,
    },
  });

export default i18n;