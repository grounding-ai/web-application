import { readFile, writeFile } from "fs/promises";
import Papa from "papaparse";
import path from "path";
import { dirname } from "path";
import { rimraf } from "rimraf";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "../public");

async function main() {
  const { data: summariesData } = Papa.parse<
    Record<"id" | "headline" | "text" | "Danish_Translation" | "english_bot_critic" | "english_bot_potential", string>
  >(await readFile(path.resolve(__dirname, "../resources/summaries.csv"), "utf8"), { header: true });

  const outputData = summariesData
    .filter((doc) => !!doc.id)
    .map((doc) => ({
      id: doc.id,
      title: doc.headline,
      en: doc.text,
      da: doc.Danish_Translation,
    }));

  const outputFile = path.join(OUTPUT_DIR, `contents.csv`);
  await rimraf(outputFile);
  await writeFile(outputFile, Papa.unparse(outputData), "utf8");
}

main().catch(console.error);
