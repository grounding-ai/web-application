import { FC, useEffect, useState } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { useLoaderData } from "react-router-typesafe";

import { SearchField } from "../components/SearchField.tsx";
import { SearchResults } from "../components/SearchResults.tsx";
import { TextReader } from "../components/TextReader.tsx";
import { TopMenu } from "../components/TopMenu.tsx";
import { useAppContext } from "../core/context.ts";
import { Bot, Topic } from "../core/types.ts";
import { getOtherLanguage, translate } from "../utils/translation.ts";
import { topicPageLoader } from "./TopicPage.tsx";

export const TopicBotPage: FC<{ bot: Bot }> = ({ bot }) => {
  const [search, setSearch] = useState<null | { query: string; results: Topic[] }>(null);
  const { topic } = useLoaderData<typeof topicPageLoader>();
  const { language } = useAppContext();

  const textColor = bot === "critic" ? "primary" : "light-blue";
  const bgColor = bot === "critic" ? "light-blue" : "primary";
  const botContent = translate(topic.bots[bot], language);
  const botLanguage = topic.bots[bot][language] ? language : getOtherLanguage(language);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setSearch(null);
  }, [topic.id]);

  return (
    <main className={`d-flex flex-column text-${textColor} bg-${bgColor}`}>
      <TopMenu colorClassNameSuffix={textColor}>
        <a href={`#/topic/${topic.id}`} className={`btn align-baseline p-0 pt-1 border-0 text-${textColor}`}>
          <FaArrowLeft className="me-2" /> {translate({ en: "Back", da: "Tilbage" }, language)}
        </a>
      </TopMenu>

      <section className="p-4 pb-0 d-flex flex-row align-items-end justify-content-between mb-3">
        <div>
          <div className="mb-3">
            <small className={`px-2 py-1 border border-${textColor} font-monospace`}>#{topic.number}</small>
          </div>

          <h1 className="fw-bolder mb-3">{translate(topic.headline, language)}</h1>
        </div>
        <img src={`${import.meta.env.BASE_URL}/bot.png`} alt="The advocate bot" className="img-fluid w-50" />
      </section>

      {botContent && (
        <section className="p-4">
          <TextReader text={botContent} textLanguage={botLanguage} className={`btn-${textColor} w-100`} />
        </section>
      )}

      <section className="p-4 pt-0 flex-grow-1">
        {botContent ? (
          <p className="content mb-5">
            <BiSolidQuoteAltLeft /> {botContent} <BiSolidQuoteAltRight />
          </p>
        ) : (
          <p className="content mb-5 text-center">
            {translate(
              {
                en: "Oh, it seems this robot doesn't have an opinion on that matter...",
                da: "Oh, det ser ud til, at denne robot ikke har nogen mening om det emne...",
              },
              language,
            )}
          </p>
        )}
      </section>

      <div className="p-4 pt-0 mb-2 font-monospace">
        <SearchField
          inputClassName={bot === "critic" ? "bg-light-purple border-light-purple" : "bg-light-blue border-light-blue"}
          onSearch={(s) => {
            setSearch(s);
          }}
        />
      </div>
      {search && <SearchResults {...search} />}
    </main>
  );
};
