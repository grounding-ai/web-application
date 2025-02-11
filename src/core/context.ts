import { createContext, useContext } from "react";

import { Language, Topic } from "./types";

export type AppContextType = {
  language: Language;
  topics: Topic[];
  topicsDict: Record<string, Topic>;
  selectedTopic: Topic | null;

  // Actions:
  setLanguage: (language: Language) => void;
  selectTopic: (topic: Topic | null) => void;
};
export const AppContext = createContext<AppContextType>(null as unknown as AppContextType);
export function useAppContext() {
  return useContext(AppContext);
}
