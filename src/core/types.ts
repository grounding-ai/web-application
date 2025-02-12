export const LANGUAGES = ["en", "da"] as const;
export const LANGUAGES_SET = new Set<string>(LANGUAGES);
export const DEFAULT_LANGUAGE = "en";
export type Language = (typeof LANGUAGES)[number];
export type Translation = Partial<Record<Language, string | null>>;
export const BC47_LANGUAGES: Record<Language, string> = {
  en: "en-GB",
  da: "da-DK",
};

export const BOTS = ["critic", "potential"] as const;
export type Bot = (typeof BOTS)[number];

export type Coordinates = { x: number; y: number };
export type Topic = { id: string; label: string; index: number } & Coordinates;
export type TopicContent = {
  id: string;
  number: number;
  headline: Translation;
  content: Translation;
  bots: Record<Bot, Translation>;
};

export const POINT_DEFAULTS = {
  size: 19,
  color: "#ff6b5f",
};
