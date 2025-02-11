import { keyBy } from "lodash";
import { FC, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router";
import { makeLoader, useLoaderData } from "react-router-typesafe";

import { loadTopics } from "../core/api.ts";
import { AppContext } from "../core/context.ts";
import { DEFAULT_LANGUAGE, LANGUAGES_SET, Language, Topic } from "../core/types.ts";

const LANGUAGE_KEY = `grounded-ai-language`;

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

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        // Data:
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
