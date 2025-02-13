import { useCallback, useEffect, useState } from "react";

type SpeechSynthesisVoice = ReturnType<typeof speechSynthesis.getVoices>[number];
const IS_ENABLED = typeof speechSynthesis !== "undefined";

export function useSpeech(langs: (string | RegExp)[] = []) {
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
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.voice = voice;
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    },
    [cancelSpeak, voice],
  );

  useEffect(() => {
    if (IS_ENABLED) {
      speechSynthesis.addEventListener("end", () => setIsSpeaking(false));

      setTimeout(() => {
        // Load voices
        const allVoices = speechSynthesis.getVoices();
        let voice: SpeechSynthesisVoice | null = null;
        if (langs.length) {
          langs.some((lang) => {
            voice = allVoices.find((v) => (typeof lang === "string" ? v.lang === lang : v.lang.match(lang))) || null;
            return voice;
          });
        } else {
          voice = allVoices[0] || null;
        }

        setVoice(voice);
      }, 0);
    }
  }, [langs]);

  return {
    speak,
    isSpeaking,
    cancelSpeak,
    enabled: IS_ENABLED && !!voice,
  };
}
