import { parse } from "papaparse";

import { Topic, TopicContent } from "./types";

type CSVRowKey = "id" | "label" | "number" | "X" | "Y" | "local_density";
type CSVRow = Record<CSVRowKey, string>;
export async function loadTopics(): Promise<Topic[]> {
  const res = await fetch(`${import.meta.env.BASE_URL}/labels.csv`);
  const csv = await res.text();
  const { data } = parse<CSVRow>(csv, {
    header: true,
  });

  return data.flatMap((row) =>
    row.id && row.label && !isNaN(+row.number)
      ? [
          {
            id: row.id,
            label: row.label,
            index: +row.number,
            localDensity: +row.local_density,
            x: +row.X,
            y: +row.Y,
          },
        ]
      : [],
  );
}

export async function loadTopicContent(id: string): Promise<TopicContent> {
  const res = await fetch(`${import.meta.env.BASE_URL}/summaries/${id}.json`);
  return (await res.json()) as TopicContent;
}
