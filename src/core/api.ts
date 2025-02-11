import { parse } from "papaparse";

import { Topic, TopicContent } from "./types";

type CSVRowKey = "id" | "label" | "number" | "X" | "Y" | "local_density";
type CSVRow = Record<CSVRowKey, string>;
export async function loadTopics(): Promise<Topic[]> {
  const res = await fetch("/labels.csv");
  const csv = await res.text();
  const { data } = parse<CSVRow>(csv, {
    header: true,
  });

  return data.map((row) => ({
    id: row.id,
    label: row.label,
    index: +row.number,
    x: +row.X,
    y: +row.Y,
  }));
}

export async function loadTopicContent(id: string): Promise<TopicContent> {
  const res = await fetch(`/summaries/${id}.json`);
  return (await res.json()) as TopicContent;
}
