import { keyBy } from "lodash";
import MiniSearch from "minisearch";
import { FC, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router";
import { makeLoader, useLoaderData } from "react-router-typesafe";

import { loadContents, loadTopics } from "../core/api.ts";
import { AppContext, AppContextType } from "../core/context.ts";
import { DEFAULT_LANGUAGE, LANGUAGES_SET, Language, Topic } from "../core/types.ts";

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
  const [selectedTopic, selectTopic] = useState<Topic | null>(null);
  const [dataStatus, setDataStatus] = useState<AppContextType["dataStatus"]>("titles-only");
  const initialSearch = useMemo(() => {
    let miniSearch: MiniSearch | null = null;
    try {
      const index = localStorage.getItem(INDEX_KEY);
      if (index) {
        miniSearch = MiniSearch.loadJSON(JSON.parse(index), FULL_INDEX_OPTIONS);
        console.log("Full contents read from local storage");
      }
    } catch (e) {
      console.error(e);
    }

    if (!miniSearch) {
      miniSearch = new MiniSearch(TITLE_INDEX_OPTIONS);
      miniSearch.addAll(
        topics.map((topic) => ({
          id: topic.id,
          title: topic.label,
          index: topic.index + "",
        })),
      );
      console.log("Headlines and ids indexed");
    }

    return miniSearch;
  }, [topics]);
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    if (dataStatus === "full") return;

    loadContents().then((contents) => {
      const miniSearch = new MiniSearch(FULL_INDEX_OPTIONS);
      miniSearch
        .addAllAsync(
          contents.map((content) => ({
            ...content,
            index: topicsDict[content.id]?.index,
          })),
        )
        .then(() => {
          try {
            localStorage.setItem(INDEX_KEY, JSON.stringify(miniSearch.toJSON()));
          } catch (e) {
            console.error(e);
          }
          console.log("Full contents indexed");
          setDataStatus("full");
          setSearch(miniSearch);
        });
    });
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
        selectedTopic,
        // Actions:
        setLanguage,
        selectTopic,
      }}
    >
      <Outlet />
    </AppContext.Provider>
  );
};
