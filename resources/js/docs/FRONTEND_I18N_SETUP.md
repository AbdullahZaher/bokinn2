# i18n-react Setup for Bokinn Frontend

This guide explains how to set up and use i18n-react for multi-language support (English & Arabic) in the Bokinn React frontend.

---

## 1. Installation

```
npm install i18n-react
```

---

## 2. Locale Files

All translations are stored in `resources/js/locales/` as JSON files:
- `en.json` for English
- `ar.json` for Arabic

Example `en.json`:
```json
{
  "greeting": "Hello",
  "welcome": "Welcome to Bokinn"
}
```

Example `ar.json`:
```json
{
  "greeting": "مرحبا",
  "welcome": "مرحبًا بك في بوك إن"
}
```

---

## 3. i18n Utility

The utility at `resources/js/lib/i18n.ts` handles:
- Loading translations
- Switching languages
- Setting document direction (RTL for Arabic)

**Usage:**
```ts
import I18n, { setLanguage, useLanguage } from '../lib/i18n';

setLanguage('en'); // or 'ar'
```

---

## 4. Language Switcher Component

Use `resources/js/components/LanguageSwitcher.tsx` to let users switch languages.

**Usage:**
```tsx
import LanguageSwitcher from '../components/LanguageSwitcher';

<LanguageSwitcher />
```

---

## 5. Integrate in App

In `resources/js/app.tsx`:
- Import and call `setLanguage('en')` (or detect user preference)
- Add `<LanguageSwitcher />` at the top level
- Use `I18n.text('key')` to get translations

**Example:**
```tsx
import I18n from './lib/i18n';

<p>{I18n.text('greeting')}</p>
```

---

## 6. Adding New Languages

1. Add a new JSON file in `resources/js/locales/` (e.g., `fr.json` for French).
2. Update `translations` in `lib/i18n.ts` to include the new language.
3. Add the language to the `languages` array in `LanguageSwitcher.tsx`.

---

## 7. Notes

- Always use TailwindCSS for styling.
- For RTL support, the utility sets `dir="rtl"` for Arabic.
- Use descriptive keys in locale files.
- For dynamic values, use i18n-react's interpolation features.

---

## 8. References
- [i18n-react documentation](https://github.com/BR0kEN-/i18n-react) 