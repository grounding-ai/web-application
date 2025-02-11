import { capitalize } from "lodash";
import { FC } from "react";

import { Topic } from "../core/types";

export const SearchResults: FC<{ query: string; results: Topic[] }> = ({ query, results }) => {
  return (
    <>
      {!results.length ? (
        <h2 className="display-3 mt-5 pt-5">
          No topics related to: <div className="fw-normal">{capitalize(query)}</div>
        </h2>
      ) : (
        <>
          <h2 className="display-2 mb-4">
            Topics related to: <div className="fw-normal">{capitalize(query)}</div>
          </h2>

          {results.map((topic) => (
            <a
              href={`#/topic/${topic.id}`}
              key={topic.id}
              className="font-monospace rounded rounded-1 d-flex flex-row mb-4 text-decoration-none overflow-hidden"
            >
              <span className="bg-primary text-white px-3 py-1 flex-shrink-0" style={{ whiteSpace: "pre-wrap" }}>
                {(topic.index + "").padStart(4, " ")}
              </span>
              <span className="bg-white text-primary flex-grow-1 px-3 py-1 text-truncate">{topic.label}</span>
            </a>
          ))}
        </>
      )}
    </>
  );
};
