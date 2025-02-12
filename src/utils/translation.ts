import { Language, Translation } from "../core/types";

export function translate(translation: Translation, language: Language): string {
  return translation[language] || translation[getOtherLanguage(language)] || "";
}

export function getOtherLanguage(language: Language): Language {
  return language === "en" ? "da" : "en";
}
