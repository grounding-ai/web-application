import cx from "classnames";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";

export const SearchField: FC<{
  inputClassName?: string;
  initialQuery?: string;
}> = ({ inputClassName, initialQuery }) => {
  const { language } = useAppContext();
  const [query, setQuery] = useState(initialQuery);
  const onSubmit = (query: string = "") => {
    if (query) window.location.href = `#/map?q=${encodeURIComponent(query)}`;
    else window.location.href = "#/map";
  };

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(query);
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
          autoComplete="off"
          className={cx("form-control bg-light-blue", inputClassName)}
          id="topics-search"
          placeholder="Eg: 1640, Food"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {initialQuery && (
          <button
            className={cx("btn btn-light px-1", inputClassName)}
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
