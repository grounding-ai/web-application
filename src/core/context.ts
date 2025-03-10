import MiniSearch from "minisearch";
import { createContext, useContext } from "react";

import { Cluster, Language, Topic } from "./types";

export type AppContextType = {
  dataStatus: "no-data" | "titles-only" | "full";
  search: MiniSearch;
  language: Language;
  clusters: Cluster[];
  topics: Topic[];
  topicsDict: Record<string, Topic>;

  // Actions:
  setLanguage: (language: Language) => void;
};
export const AppContext = createContext<AppContextType>(null as unknown as AppContextType);
export function useAppContext() {
  return useContext(AppContext);
}
