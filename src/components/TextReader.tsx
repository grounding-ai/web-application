import cx from "classnames";
import { FC, useEffect, useMemo } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

import { useAppContext } from "../core/context.ts";
import { BC47_LANGUAGES, Language } from "../core/types.ts";
import { translate } from "../utils/translation.ts";
import { useSpeech } from "../utils/useSpeech.ts";

export const TextReader: FC<{ text: string; textLanguage: Language; className?: string }> = ({
  textLanguage,
  text,
  className,
}) => {
  const { language: uiLanguage } = useAppContext();
  const { isSpeaking, cancelSpeak, speak, setVoice, options } = useSpeech(BC47_LANGUAGES[textLanguage]);

  const enabled = useMemo(() => {
    const voiceOptions = options.filter((option) => option.value !== "disabled");
    if (voiceOptions.length) {
      setVoice(voiceOptions[0]);
      return true;
    } else {
      return false;
    }
  }, [options, setVoice]);

  useEffect(() => {
    return () => {
      cancelSpeak();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <button
      className={cx("btn", className)}
      onClick={() => {
        if (isSpeaking) {
          cancelSpeak();
        } else {
          speak(text);
        }
      }}
    >
      {isSpeaking ? <FaPause className="me-4" /> : <FaPlay className="me-4" />}
      {translate(
        {
          en: "Read opinion outloud",
          da: "Læs meningen højt",
        },
        uiLanguage,
      )}
    </button>
  );
};
