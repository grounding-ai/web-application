import cx from "classnames";
import { FC } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

import { useAppContext } from "../core/context.ts";
import { Bot, TopicContent } from "../core/types.ts";
import { getOtherLanguage, translate } from "../utils/translation.ts";
import { TextReader } from "./TextReader.tsx";

export const TopicBotContent: FC<{ topic: TopicContent; bot: Bot }> = ({ topic, bot }) => {
  const { language } = useAppContext();

  const textColor = bot === "critic" ? "primary" : "light-blue";
  const botImg = bot === "critic" ? "bot-skeptic" : "bot-advocate";
  const botHeadline = translate(topic.headline, language);
  const botHeadlineHyphens = botHeadline.split(" ").some((str) => str.length > 12);
  const botContent = translate(topic.bots[bot], language);
  const botLanguage = topic.bots[bot][language] ? language : getOtherLanguage(language);

  return (
    <>
      <section className="d-flex flex-row align-items-end justify-content-between mb-5">
        <div className="flex-shrink-1 pt-1" style={{ flexBasis: "65%" }}>
          <div className="mb-3">
            <small className={`px-2 py-1 rounded-1 border border-${textColor} font-monospace`}>#{topic.number}</small>
          </div>

          <h1 className={cx("fw-bolder mb-0", botHeadlineHyphens && "hyphens")}>{botHeadline}</h1>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}/${botImg}.png`}
          alt={bot === "critic" ? "The skeptic bot" : "The advocate bot"}
          className="img-fluid flex-shrink-0"
          style={{ width: "35%" }}
        />
      </section>

      {botContent && (
        <section className="mb-5">
          <TextReader text={botContent} textLanguage={botLanguage} className={`btn-${textColor} w-100`} />
        </section>
      )}

      <section className="flex-grow-1">
        {botContent ? (
          <p className="text-content mb-5">
            <BiSolidQuoteAltLeft /> {botContent} <BiSolidQuoteAltRight />
          </p>
        ) : (
          <p className="text-content mb-5 text-center">
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
    </>
  );
};
