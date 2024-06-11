import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(languageDetector);
i18n.use(initReactI18next);
i18n.init({
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
  debug: false,
  resources: {
    "en-US": {
      translation: {
        comingSoon: "Forging Soon",
        contactMe: "Contact me at",
      },
    },
    ja: {
      translation: {
        comingSoon: "すぐに鍛造",
        contactMe: "メールアドレス",
      },
    },
    fi: {
      translation: {
        comingSoon: "Malapit na",
        contactMe: "Makipag-ugnayan sa akin sa",
      },
    },
  },
});

export default i18n;
