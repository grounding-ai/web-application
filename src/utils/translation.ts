import { Language, Translation } from "../core/types";

export function translate(translation: Translation, language: Language): string {
  return translation[language] || translation[getOtherTranslation(language)] || "";
}

export function getOtherTranslation(language: Language): Language {
  return language === "en" ? "da" : "en";
}
