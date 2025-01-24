import { Annotation } from "./types.ts";

export type ContextType = {
  annotations: Annotation[];
  selectedAnnotation: Annotation | null;

  // Actions:
  selectAnnotation: (annotation: Annotation | null) => void;
};
