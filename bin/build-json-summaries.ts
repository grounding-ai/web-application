import { mkdir, readFile, writeFile } from "fs/promises";
import Papa from "papaparse";
import path from "path";
import { dirname } from "path";
import { rimraf } from "rimraf";
import { fileURLToPath } from "url";

import { TopicContent } from "../src/core/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "../public/summaries");

async function main() {
  await rimraf(OUTPUT_DIR);
  await mkdir(OUTPUT_DIR);

  const { data: labelsData } = Papa.parse<Record<"id" | "number", string>>(
    await readFile(path.resolve(__dirname, "../public/labels.csv"), "utf8"),
    { header: true },
  );
  const idsToNumbers: Record<string, number> = labelsData.reduce(
    (acc, { id, number }) => ({ ...acc, [id]: +number }),
    {},
  );

  const { data: summariesData } = Papa.parse<
    Record<"id" | "headline" | "text" | "Danish_Translation" | "english_bot_critic" | "english_bot_potential", string>
  >(await readFile(path.resolve(__dirname, "../resources/summaries.csv"), "utf8"), { header: true });

  const topics: TopicContent[] = summariesData.map(
    ({ id, headline, text, Danish_Translation, english_bot_critic, english_bot_potential }) => ({
      id,
      number: idsToNumbers[id],
      headline: {
        en: headline,
        da: ((Danish_Translation || "").match(/^[^:]+/) || [null])[0],
      },
      content: {
        en: text,
        da: Danish_Translation,
      },
      bots: {
        critic: {
          en: english_bot_critic || null,
          da: null,
        },
        potential: {
          en: english_bot_potential || null,
          da: null,
        },
      },
    }),
  );

  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    if (topic.id)
      await writeFile(path.join(OUTPUT_DIR, `${topic.id}.json`), JSON.stringify(topic), "utf8");
  }
}

main().catch(console.error);
