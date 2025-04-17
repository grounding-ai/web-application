import { readFile, writeFile } from "fs/promises";
import Papa from "papaparse";
import path from "path";
import { dirname } from "path";
import { rimraf } from "rimraf";
import { fileURLToPath } from "url";

import { SummariesColumn } from "./input-type.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "../public");

async function main() {
  const { data: summariesData } = Papa.parse<Record<SummariesColumn, string>>(
    await readFile(path.resolve(__dirname, "../resources/summaries.csv"), "utf8"),
    { header: true },
  );

  const outputData = summariesData
    .filter((doc) => !!doc.id)
    .map((doc) => ({
      id: doc.id,
      title: doc.headline_v2,
      en: doc.text,
      da: doc.danish_translation,
    }));

  const outputFile = path.join(OUTPUT_DIR, `contents.csv`);
  await rimraf(outputFile);
  await writeFile(outputFile, Papa.unparse(outputData), "utf8");
}

main().catch(console.error);
