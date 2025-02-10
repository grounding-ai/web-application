export const LANGUAGES = ["en", "da"] as const;
export type Language = (typeof LANGUAGES)[number];
export type Translation = Record<Language, string | null>;

export const BOTS = ["critic", "potential"] as const;
export type Bot = (typeof BOTS)[number];

export type Coordinates = { x: number; y: number };
export type Annotation = { id: string; label: string; index: number } & Coordinates;
export type AnnotationContent = {
  id: string;
  headline: Translation;
  content: Translation;
  bots: Record<Bot, Translation>;
};
