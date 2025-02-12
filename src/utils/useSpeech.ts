import { useCallback, useEffect, useMemo, useState } from "react";

type SpeechSynthesisVoice = ReturnType<typeof speechSynthesis.getVoices>[number];
export type SpeechOption =
  | { value: "disabled"; label: string }
  | { value: `voice-${string}`; label: string; voice: SpeechSynthesisVoice };
const DEFAULT_OPTION: SpeechOption = { value: "disabled", label: "Lecture automatique désactivée" };
const IS_ENABLED = typeof speechSynthesis !== "undefined";

export function useSpeech(lang: string) {
  const [speaking, setSpeaking] = useState(false);
  const [options, setOptions] = useState<SpeechOption[]>([DEFAULT_OPTION]);
  const [voiceOption, setVoiceOption] = useState(options[0]);
  const voice = useMemo(() => (voiceOption.value === "disabled" ? null : voiceOption.voice), [voiceOption]);
  const cancelSpeak = useCallback(() => {
    if (!IS_ENABLED || !speechSynthesis.speaking) return;
    speechSynthesis.cancel();
    setSpeaking(false);
  }, []);
  const speak = useCallback(
    (sentence: string) => {
      if (speechSynthesis.speaking) cancelSpeak();

      if (!voice || !IS_ENABLED) return;
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.lang = lang;
      utterance.voice = voice;
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
      setSpeaking(true);
    },
    [cancelSpeak, lang, voice],
  );

  useEffect(() => {
    if (IS_ENABLED) {
      speechSynthesis.addEventListener("end", () => setSpeaking(false));

      // Load voices
      setOptions(
        [DEFAULT_OPTION].concat(
          speechSynthesis
            .getVoices()
            .filter((voice) => voice.lang === lang)
            .map((voice) => ({ value: `voice-${voice.name}`, label: voice.name, voice })),
        ),
      );
    }
  }, [lang]);

  return {
    speak,
    options,
    voice: voiceOption,
    setVoice: setVoiceOption,
    isSpeaking: speaking,
    cancelSpeak: cancelSpeak,
  };
}
