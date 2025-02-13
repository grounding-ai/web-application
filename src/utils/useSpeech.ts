import { useCallback, useEffect, useState } from "react";

import { Language, VOICES_FILTERS, VOICES_LANGUAGES } from "../core/types.ts";

type SpeechSynthesisVoice = ReturnType<typeof speechSynthesis.getVoices>[number];
const IS_ENABLED = typeof speechSynthesis !== "undefined";

function useAllVoices() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const startTime = Date.now();
    const TIMEOUT = 5000;

    const interval = setInterval(() => {
      const allVoices = window.speechSynthesis.getVoices();
      if (allVoices.length) {
        setVoices(allVoices);
        clearInterval(interval);
        return;
      }
      if (Date.now() - startTime > TIMEOUT) {
        clearInterval(interval);
        return;
      }
    }, 10);
  }, []);

  return voices;
}

export function useSpeech(lang: Language) {
  const allVoices = useAllVoices();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const cancelSpeak = useCallback(() => {
    if (!IS_ENABLED || !speechSynthesis.speaking) return;
    speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);
  const speak = useCallback(
    (sentence: string) => {
      if (speechSynthesis.speaking) cancelSpeak();
      if (!voice || !IS_ENABLED) return;

      const utterance = new SpeechSynthesisUtterance();
      utterance.voice = voice;
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.lang = VOICES_LANGUAGES[lang];
      utterance.text = sentence;
      utterance.volume = 0.5;
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    },
    [cancelSpeak, voice],
  );

  useEffect(() => {
    if (IS_ENABLED && allVoices.length) {
      speechSynthesis.addEventListener("end", () => setIsSpeaking(false));

      // Load voices
      let voice: SpeechSynthesisVoice | null = null;
      const filters = VOICES_FILTERS[lang];
      if (filters.length) {
        filters.some((filter) => {
          voice =
            allVoices.find((v) => (typeof filter === "string" ? v.lang === filter : v.lang.match(filter))) || null;
          return voice;
        });
      } else {
        voice = allVoices[0] || null;
      }

      setVoice(voice);
    }
  }, [allVoices, lang]);

  return {
    speak,
    isSpeaking,
    cancelSpeak,
    enabled: IS_ENABLED && !!voice,
  };
}
