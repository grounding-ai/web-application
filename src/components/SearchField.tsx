import cx from "classnames";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";

import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";

export const SearchField: FC<{
  inputClassName?: string;
  initialQuery?: string;
  loading?: boolean;
}> = ({ inputClassName, loading, initialQuery = "" }) => {
  const { language } = useAppContext();
  const [query, setQuery] = useState<string>(initialQuery);
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
          className={cx("form-control bg-light-blue fs-5", inputClassName)}
          id="topics-search"
          placeholder="Eg: 1640, Food"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && (
          <div className="position-relative">
            <div
              className="spinner-border spinner-border-sm text-primary rounded-5 mx-2 position-absolute end-0"
              role="status"
              style={{ top: "28%" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
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
          <LuSearch />
        </button>
      </div>
    </form>
  );
};
