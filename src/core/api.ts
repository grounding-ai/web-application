import { parse } from "papaparse";

import { Cluster, Topic, TopicContent } from "./types";

type CSVClusterKey = "cluster label" | "X" | "Y";
type CSVCluster = Record<CSVClusterKey, string>;
export async function loadClusters(): Promise<Cluster[]> {
  const res = await fetch(`${import.meta.env.BASE_URL}/clusters.csv`);
  const csv = await res.text();
  const { data } = parse<CSVCluster>(csv, {
    header: true,
  });

  return data.flatMap((row) =>
    row["cluster label"]
      ? [
          {
            label: row["cluster label"].trim(),
            x: +row.X,
            y: +row.Y,
          },
        ]
      : [],
  );
}

type CSVTopicKey = "id" | "label" | "number" | "X" | "Y" | "local_density";
type CSVTopic = Record<CSVTopicKey, string>;
export async function loadTopics(): Promise<Topic[]> {
  const res = await fetch(`${import.meta.env.BASE_URL}/labels.csv`);
  const csv = await res.text();
  const { data } = parse<CSVTopic>(csv, {
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

type CSVContentKey = "id" | "title" | "en" | "da";
type CSVContent = Record<CSVContentKey, string>;
export async function loadContents(): Promise<CSVContent[]> {
  const res = await fetch(`${import.meta.env.BASE_URL}/contents.csv`);
  const csv = await res.text();
  const { data } = parse<CSVContent>(csv, {
    header: true,
  });

  return data.filter((row) => row.id);
}
