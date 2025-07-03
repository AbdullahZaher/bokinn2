import React from 'react';
import { setLanguage, SupportedLanguage } from '../lib/i18n';

const languages: { code: SupportedLanguage; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

const LanguageSwitcher: React.FC = () => {
  const handleChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
  };

  return (
    <div className="flex gap-2 items-center">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`Switch to ${lang.label}`}
          tabIndex={0}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 