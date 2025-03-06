import cx from "classnames";
import { fromPairs } from "lodash";
import { FC, useMemo, useState } from "react";
import { useLocation } from "react-router";

import { ImageViewer } from "../components/ImageViewer.tsx";
import { SearchField } from "../components/SearchField.tsx";
import { SearchResults } from "../components/SearchResults.tsx";
import { Toggle } from "../components/Toggle.tsx";
import { TopMenu } from "../components/TopMenu.tsx";
import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";

export const Map: FC = () => {
  const { language, topicsDict, search: miniSearch, dataStatus } = useAppContext();
  const [mode, setMode] = useState<"map" | "list">("map");
  const [showClusters, setShowClusters] = useState(false);
  const { search } = useLocation();
  const fullQuery = useMemo(() => fromPairs([...new URLSearchParams(search.replace(/^\?/, ""))]), [search]);
  const query = fullQuery.q;
  const results = useMemo(() => {
    if (!query) return null;

    const fuzzy = !query.trim().match(/^\d+$/) && query.length > 4;
    return miniSearch
      .search(query, {
        fuzzy: fuzzy,
        maxFuzzy: 2,
        combineWith: "and",
        fields: ["index", "title", language],
        boost: {
          index: 5,
          title: 4,
        },
      })
      .flatMap(({ id }) => (topicsDict[id] ? [topicsDict[id]] : []));
  }, [language, miniSearch, query, topicsDict]);

  return (
    <main className="bg-secondary text-white d-flex flex-column">
      <TopMenu colorClassNameSuffix="light">
        <h1 className="fs-5 mt-1">Grounding AI</h1>
      </TopMenu>

      <section className="flex-grow-1 position-relative">
        <ImageViewer points={results || undefined} hidden={mode !== "map"} />
        {mode === "list" && results && (
          <div className="position-absolute inset-0 bg-secondary p-4 overflow-auto pt-5">
            <SearchResults query={query} results={results} />
          </div>
        )}
      </section>

      <section className="p-4 pt-0 pb-4">
        <div className="mb-2 mt-2">
          <Toggle
            id="select-results-mode"
            className={cx("small font-monospace text-light", !query && "invisible")}
            disabled={!query}
            checked={mode === "list"}
            onChange={(checked) => setMode(checked ? "list" : "map")}
            label={translate(
              {
                en: "Show results in a list",
                da: "Vis resultater i en liste",
              },
              language,
            ).toUpperCase()}
          />
        </div>
        <div className="mb-2 d-none">
          <Toggle
            id="show-clusters"
            className="small font-monospace text-light"
            checked={showClusters}
            onChange={(checked) => setShowClusters(checked)}
            label={translate(
              {
                en: "Show cluster tags",
                da: "Vis klyngemærker",
              },
              language,
            ).toUpperCase()}
          />
        </div>

        <div className="font-monospace">
          <SearchField
            inputClassName="bg-light-blue border-light-blue"
            initialQuery={query}
            loading={dataStatus !== "full"}
          />
        </div>
      </section>
    </main>
  );
};
