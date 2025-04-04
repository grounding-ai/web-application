import { Handler } from "@netlify/functions";
import Airtable from "airtable";
import types from "typology";

const PAGE_TYPES = ["map", "topic", "bot-critic", "bot-potential", "about", "home"] as const;
const PAGE_TYPES_SET = new Set<string>(PAGE_TYPES);
type PageType = (typeof PAGE_TYPES)[number];

type FeedbackRecord = {
  verbatim: string;
  url: string;
  "page type": PageType;
  "topic id"?: string;
  dev?: boolean;
};
types.add("PageType", (s) => typeof s === "string" && PAGE_TYPES_SET.has(s));
types.add("FeedbackRecord", {
  verbatim: "string",
  url: "string",
  "page type": "PageType",
  "topic id": "?string",
  dev: "?boolean",
});

async function createRecord(feedbackRecord: FeedbackRecord) {
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

  if (!AIRTABLE_API_KEY) throw new Error("AIRTABLE_API_KEY not found in env");
  if (!AIRTABLE_BASE_ID) throw new Error("AIRTABLE_BASE_ID not found in env");

  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

  await base("Feedbacks").create([
    {
      fields: {
        ...feedbackRecord,
        date: new Date().toISOString(),
      },
    },
  ]);
}

const handler: Handler = async (event) => {
  // Handle CORS headers and preflight OPTIONS requests:
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const payload = JSON.parse(event.body || "");

    // Check record validity:
    const validation = types.scan("FeedbackRecord", payload);
    if (validation.error) throw new Error(validation.error);

    await createRecord(payload as FeedbackRecord);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: (error as Error).message }),
    };
  }
};

export { handler };
