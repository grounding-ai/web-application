export const SUMMARIES_COLUMNS = [
  "id",
  "headline_v2",
  "text",
  "danish_Translation",
  "critic_bot_english",
  "optimist_bot_english",
  "critic_bot_danish",
  "optimist_bot_danish",
] as const;
export type SummariesColumn = (typeof SUMMARIES_COLUMNS)[number];
