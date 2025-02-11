import { FC, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { makeLoader, useLoaderData } from "react-router-typesafe";

import { MapThumbnail } from "../components/MapThumbnail.tsx";
import { SearchField } from "../components/SearchField.tsx";
import { SearchResults } from "../components/SearchResults.tsx";
import { TopMenu } from "../components/TopMenu.tsx";
import { loadTopicContent } from "../core/api.ts";
import { useAppContext } from "../core/context.ts";
import { Topic } from "../core/types.ts";
import { translate } from "../utils/translation.ts";

export const topicPageLoader = makeLoader(async ({ params: { topicID } }) => {
  if (!topicID) throw new Error("Required topic ID is missing from URL");
  const topic = await loadTopicContent(topicID);

  return { topic };
});

export const TopicPage: FC = () => {
  const [search, setSearch] = useState<null | { query: string; results: Topic[] }>(null);
  const { topic } = useLoaderData<typeof topicPageLoader>();
  const { language, topicsDict } = useAppContext();
  const { x, y } = topicsDict[topic.id];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setSearch(null);
  }, [topic.id]);

  return (
    <main className="bg-secondary text-white d-flex flex-column">
      <TopMenu>
        <a href="#/map" className="btn align-baseline text-white">
          <FaArrowLeft className="me-2" /> Back
        </a>
      </TopMenu>

      <section className="p-4">
        <div className="mb-3">
          <small className="px-2 py-1 border border-light-blue color-light-blue font-monospace">#{topic.number}</small>
        </div>

        <h1 className="fw-bolder mb-3">{translate(topic.headline, language)}</h1>

        <MapThumbnail className="w-100 mb-3" points={[{ x, y, color: "red" }]} />

        <p className="content">{translate(topic.content, language)}</p>

        <hr />

        <h2>Get some synthetic opinions on this topic</h2>

        <p>TODO</p>

        <div className="pb-2 font-monospace">
          <SearchField
            onSearch={(s) => {
              setSearch(s);
            }}
          />
        </div>
        {search && <SearchResults {...search} />}
      </section>
    </main>
  );
};
