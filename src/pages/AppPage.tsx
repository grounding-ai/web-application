import { getAsyncMemoData, useAsyncMemo } from "@ouestware/hooks";
import cx from "classnames";
import { fromPairs } from "lodash";
import { FC, useEffect, useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";
import { useLocation, useParams } from "react-router";

import { FeedbackForm } from "../components/FeedbackForm.tsx";
import { ImageViewer } from "../components/ImageViewer.tsx";
import { SearchField } from "../components/SearchField.tsx";
import { SearchResults } from "../components/SearchResults.tsx";
import { Toggle } from "../components/Toggle.tsx";
import { TopMenu } from "../components/TopMenu.tsx";
import { TopicBotContent } from "../components/TopicBotContent.tsx";
import { TopicContentComponent } from "../components/TopicContent.tsx";
import { loadTopicContent } from "../core/api.ts";
import { useAppContext } from "../core/context.ts";
import { BOTS_SET, Bot } from "../core/types.ts";
import { translate } from "../utils/translation.ts";

const MAP_CAPTION = [
  { color: "#B46059", label: "1980-1990" },
  { color: "#2BB677", label: "2010-2015" },
  { color: "#BF972E", label: "1990-2000" },
  { color: "#00A3C6", label: "2015-2020" },
  { color: "#81A73F", label: "2000-2010" },
  { color: "#372995", label: "2020-2025" },
];

export const AppPage: FC = () => {
  const apiBaseURL = import.meta.env.VITE_FUNCTIONS_BASE_URL;
  const { language, topicsDict, search: miniSearch, dataStatus, clusters } = useAppContext();

  // URL inputs:
  const splat = useParams()["*"];
  const { search } = useLocation();
  const fullQuery = useMemo(() => fromPairs([...new URLSearchParams(search.replace(/^\?/, ""))]), [search]);
  const inputQuery = fullQuery.q || "";
  const { pageType, inputBot, inputTopicId } = useMemo(() => {
    const [pageType, inputTopicId, botMarker, inputBot] = (splat || "").split("/");
    switch (pageType) {
      case "map":
        return {
          pageType: "search",
          inputBot: null,
          inputTopicId: null,
        };
      case "topic":
        if (botMarker === "bot" && BOTS_SET.has(inputBot)) {
          return {
            pageType: "topic",
            inputBot: inputBot as Bot,
            inputTopicId: inputTopicId as string,
          };
        } else {
          return {
            pageType: "topic",
            inputBot: null,
            inputTopicId: inputTopicId as string,
          };
        }
      default:
        throw new Error(`Path /${splat} not recognized.`);
    }
  }, [splat]);

  // Common state:
  const [state, setState] = useState<
    | { type: "idle"; params: object }
    | { type: "search"; params: { search: string; mode: "map" | "list" } }
    | { type: "topic"; params: { topicId: string; bot?: Bot } }
  >({ type: "idle", params: {} });
  const { type, params } = state;

  // Topic state:
  const topicState = useAsyncMemo(
    () => (type === "topic" ? loadTopicContent(params.topicId) : Promise.resolve(null)),
    [state],
  );
  const topic = getAsyncMemoData(topicState);
  const textColor = type === "topic" && params.bot ? (params.bot === "critic" ? "primary" : "light-blue") : "light";
  const bgColor = type === "topic" && params.bot ? (params.bot === "critic" ? "light-blue" : "primary") : "secondary";

  // Map state:
  const results = useMemo(() => {
    if (type !== "search") return null;

    const query = params.search || "";
    let cleanedQuery = query.trim();
    if (cleanedQuery.match(/^\d+$/)) cleanedQuery = cleanedQuery.replace(/^0+/, "");
    if (!query) return null;

    const fuzzy = !cleanedQuery.match(/^\d+$/) && query.length > 4;
    return miniSearch
      .search(cleanedQuery, {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, miniSearch, state, topicsDict]);
  const mapPoints = useMemo(() => {
    if (type === "search") return results || undefined;
    return topic ? [topicsDict[topic.id]] : undefined;
  }, [results, topic, topicsDict, type]);
  const mapFocus = useMemo(() => {
    if (type === "search")
      return results?.length === 1 && results[0].index === +inputQuery.trim() ? results[0] : undefined;
    return topic ? topicsDict[topic.id] : undefined;
  }, [inputQuery, results, topic, topicsDict, type]);

  // Lifecycle:
  useEffect(() => {
    setState(
      pageType === "search"
        ? {
            type: "search",
            params: {
              mode: "map",
              search: inputQuery,
            },
          }
        : {
            type: "topic",
            params: {
              topicId: inputTopicId || "",
              bot: inputBot as Bot,
            },
          },
    );
  }, [pageType, inputTopicId, inputBot, inputQuery]);

  return (
    <div
      className={cx(
        "app",
        `bg-${bgColor}`,
        `type-${type}`,
        type === "search" && `mode-${params.mode}`,
        type === "topic" && params.bot && `bot-${params.bot}`,
      )}
    >
      <header>
        <TopMenu current="app" colorClassNameSuffix={textColor}>
          {type === "search" ? (
            <h1 className="fs-5 mt-1">Grounding AI</h1>
          ) : (
            <button className={`btn align-baseline p-0 pt-1 border-0 text-${textColor}`} onClick={() => history.back()}>
              <FaArrowLeft className="me-2" /> {translate({ en: "Back", da: "Tilbage" }, language)}
            </button>
          )}
        </TopMenu>
      </header>

      <main>
        <section className="map">
          <ImageViewer
            points={mapPoints}
            clusters={clusters}
            focus={mapFocus}
            targetLinkOnClickStage={type === "topic" ? "/map" : null}
          />
        </section>

        <section className="content">
          {/* Search contents: */}
          {type === "search" && (
            <>
              {results ? (
                <div className="search-results">
                  <SearchResults query={params.search} results={results} />
                </div>
              ) : (
                <div className="search-help d-flex flex-column">
                  <h2 className="fw-bold flex-grow-1">
                    {translate(
                      {
                        en: (
                          <>
                            Zoom in and out <br />
                            to explore topics
                          </>
                        ),
                        da: (
                          <>
                            Zoom ind og ud for <br />
                            at udforske emner
                          </>
                        ),
                      },
                      language,
                    )}
                  </h2>
                  <hr className={`border-1 border-${textColor} opacity-100 my-4`} />
                  <div className="me-5 pe-5 mb-5">
                    <h3 className="fs-3 fw-bold">
                      {translate(
                        {
                          en: "How to read the map",
                          da: "Hvordan læser man kortet",
                        },
                        language,
                      )}
                    </h3>
                    <p className="text-uppercase font-monospace small">
                      {translate(
                        {
                          en: "Each dot represents a scientific paper, labels indicate groups of papers. The color shows the publication year.",
                          da: "Hver prik repræsenterer en videnskabelig artikel, og etiketterne angiver grupper af artikler. Farven viser udgivelsesåret.",
                        },
                        language,
                      )}
                    </p>
                    <div className="map-caption row mt-5">
                      {MAP_CAPTION.map(({ color, label }) => (
                        <div className="col-6 d-flex flex-row align-items-center mb-4 text-uppercase font-monospace small">
                          <span className="square me-3" style={{ background: color }} /> <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="search-controls">
                {!!params.search && !!results?.length && (
                  <Toggle
                    id="select-results-mode"
                    className="small font-monospace text-light"
                    disabled={!params.search}
                    checked={params.mode === "list"}
                    onChange={(checked) =>
                      setState({ type: "search", params: { ...params, mode: checked ? "list" : "map" } })
                    }
                    label={translate(
                      {
                        en: "Show results in a list",
                        da: "Vis resultater i en liste",
                      },
                      language,
                    ).toUpperCase()}
                  />
                )}
                {!!params.search && !results?.length && (
                  <div className="small pt-1 text-truncate">
                    <LuSearchX className="me-2 fs-4" />{" "}
                    {translate(
                      {
                        en: `No topics related to ${params.search.trim()}`,
                        da: `Intet emne relateret til ${params.search.trim()}`,
                      },
                      language,
                    ).toUpperCase()}
                  </div>
                )}
              </div>

              <div className="search-input">
                <SearchField
                  inputClassName="bg-light-blue border-light-blue"
                  initialQuery={params.search}
                  loading={dataStatus !== "full"}
                />
              </div>
            </>
          )}

          {/* Topics/bots contents: */}
          {type === "topic" && topic && (
            <>
              {params.bot ? (
                <TopicBotContent topic={topic} bot={params.bot} />
              ) : (
                <TopicContentComponent topic={topic} />
              )}

              {apiBaseURL && (
                <>
                  <div>
                    <hr className={`border-1 border-${textColor} opacity-100 my-4`} />
                  </div>
                  <FeedbackForm
                    bgColor={bgColor}
                    textColor={textColor}
                    baseURL={apiBaseURL}
                    basePayload={{
                      url: location.toString(),
                      "page type": type === "topic" ? (params.bot ? `bot-${params.bot}` : "topic") : "map",
                      "topic id": type === "topic" ? params.topicId : undefined,
                    }}
                  />
                </>
              )}

              <div>
                <hr className={`border-1 border-${textColor} opacity-100 my-4`} />
              </div>

              <div className="mb-5">
                <SearchField
                  inputClassName={
                    params.bot === "critic" ? "bg-light-purple border-light-purple" : "bg-light-blue border-light-blue"
                  }
                />
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
};
