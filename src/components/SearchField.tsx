import cx from "classnames";
import MiniSearch from "minisearch";
import { FC, useCallback, useMemo, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import { useAppContext } from "../core/context.ts";
import { Topic } from "../core/types.ts";
import { translate } from "../utils/translation.ts";

export const SearchField: FC<{
  onSearch: (res: { query: string; results: Topic[] } | null) => void;
  inputClassName?: string;
}> = ({ onSearch, inputClassName }) => {
  const { topics, topicsDict, language } = useAppContext();
  const [query, setQuery] = useState("");
  const miniSearch = useMemo(() => {
    const miniSearch = new MiniSearch({
      fields: ["label", "index"],
      idField: "id",
    });
    miniSearch.addAll(
      topics.map((topic) => ({
        id: topic.id,
        label: topic.label,
        index: topic.index + "",
      })),
    );
    return miniSearch;
  }, [topics]);
  const onSubmit = useCallback(
    (q = query) => {
      if (!q) {
        onSearch(null);
        return;
      }

      const results = miniSearch.search(q).map(({ id }) => topicsDict[id]);
      onSearch({ query: q, results });
    },
    [miniSearch, onSearch, query, topicsDict],
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label htmlFor="topics-search" className="form-label text-uppercase mb-0">
        {translate(
          {
            en: "Find topic by code or keyword",
            da: "Find emne efter kode eller nøgleord",
          },
          language,
        )}
      </label>
      <div className="input-group">
        <input
          type="string"
          className={cx("form-control bg-light-blue", inputClassName)}
          id="topics-search"
          placeholder="Eg: 1640, Food"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            className="btn btn-light px-1"
            type="button"
            onClick={() => {
              setQuery("");
              onSubmit("");
            }}
          >
            <AiOutlineClose />
          </button>
        )}
        <button className={cx("btn btn-light px-2", inputClassName)} type="submit">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};
