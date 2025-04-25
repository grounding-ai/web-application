import { ComponentType, ReactNode } from "react";

import { Language, Translation } from "../core/types";

export function translate<T extends string | ReactNode | ComponentType = string>(
  translation: Translation<T>,
  language: Language,
): T {
  return translation[language] || translation[getOtherLanguage(language)] || ("" as T);
}

export function getOtherLanguage(language: Language): Language {
  return language === "en" ? "da" : "en";
}
