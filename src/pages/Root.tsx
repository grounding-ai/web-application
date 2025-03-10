import { keyBy } from "lodash";
import MiniSearch from "minisearch";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router";
import { makeLoader, useLoaderData } from "react-router-typesafe";

import { loadContents, loadTopics } from "../core/api.ts";
import { AppContext, AppContextType } from "../core/context.ts";
import { DEFAULT_LANGUAGE, LANGUAGES_SET, Language } from "../core/types.ts";
import { compressString, decompressString } from "../utils/compression.ts";

const LANGUAGE_KEY = `grounded-ai-language`;
const INDEX_KEY = "grounded-ai-index";

const TITLE_INDEX_OPTIONS = {
  fields: ["title", "index"],
  idField: "id",
};
const FULL_INDEX_OPTIONS = {
  fields: ["title", "index", "en", "da"],
  idField: "id",
};

// eslint-disable-next-line react-refresh/only-export-components
export const rootLoader = makeLoader(async () => {
  const topics = await loadTopics();

  return { topics };
});

export const Root: FC = () => {
  const { topics } = useLoaderData<typeof rootLoader>();
  const topicsDict = useMemo(() => keyBy(topics, "id"), [topics]);
  const initialLanguage = useMemo(() => {
    const language = localStorage.getItem(LANGUAGE_KEY);
    if (language && LANGUAGES_SET.has(language)) return language as Language;
    return DEFAULT_LANGUAGE;
  }, []);
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [dataStatus, setDataStatus] = useState<AppContextType["dataStatus"]>("no-data");
  const [search, setSearch] = useState(new MiniSearch(TITLE_INDEX_OPTIONS));
  const handleIndex = useCallback(async () => {
    // First, let's check if there is a locally saved version:
    let hasIndexedFullDataset = false;
    try {
      const compressedIndex = localStorage.getItem(INDEX_KEY);
      if (compressedIndex) {
        console.log("Try to decompress full index");
        const jsonIndex = await decompressString(compressedIndex);
        const miniSearch = MiniSearch.loadJSON(jsonIndex, FULL_INDEX_OPTIONS);
        if (!miniSearch["_documentCount"]) throw new Error("Saved index is not valid.");

        setSearch(miniSearch);
        setDataStatus("full");
        hasIndexedFullDataset = true;
        console.log("Full index loaded from local storage");
      }
    } catch (e) {
      console.error("Failed to decompress full index");
      console.error(e);
    }

    if (!hasIndexedFullDataset) {
      const miniSearch = new MiniSearch(TITLE_INDEX_OPTIONS);
      miniSearch.addAll(
        topics.map((topic) => ({
          id: topic.id,
          title: topic.label,
          index: topic.index + "",
        })),
      );
      setSearch(miniSearch);
      setDataStatus("titles-only");
      console.log("Light dataset indexed");

      // Now load full dataset:
      const contents = await loadContents();
      const fullDatasetMiniSearch = new MiniSearch(FULL_INDEX_OPTIONS);
      await fullDatasetMiniSearch.addAllAsync(
        contents.map((content) => ({
          ...content,
          index: topicsDict[content.id]?.index,
        })),
      );
      console.log("Full contents indexed");
      setSearch(fullDatasetMiniSearch);
      setDataStatus("full");

      try {
        console.log("Trying to save full index locally...");
        const compressedIndex = await compressString(JSON.stringify(fullDatasetMiniSearch.toJSON()));
        localStorage.setItem(INDEX_KEY, compressedIndex);
        console.log("Full index stored locally");
      } catch (e) {
        console.error("Failed to save full index locally");
        console.error(e);
      }
    }
  }, [topics, topicsDict]);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  // Handle loading and indexing dataset:
  useEffect(() => {
    handleIndex().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        // Data:
        dataStatus,
        search,
        language,
        topics,
        topicsDict,
        // Actions:
        setLanguage,
      }}
    >
      <Outlet />
    </AppContext.Provider>
  );
};
