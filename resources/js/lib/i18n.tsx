import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from '../locales/en.json';
import ar from '../locales/ar.json';

export type SupportedLanguage = 'en' | 'ar';

// Configure i18next
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      }
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

// Export the configured i18next instance
export default i18next;

// Export a hook for easy language switching
export const useLanguage = () => {
  const changeLanguage = (lang: SupportedLanguage) => {
    i18next.changeLanguage(lang);
    // Set document direction for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return {
    language: i18next.language as SupportedLanguage,
    changeLanguage,
    isRTL: i18next.language === 'ar'
  };
}; 