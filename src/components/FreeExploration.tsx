import { FC } from "react";
import { FaSearch } from "react-icons/fa";

export const FreeExploration: FC = () => {
  return (
    <main className="px-3 py-5 d-flex flex-column justify-content-between">
      <div>
        <p className="text-muted">Begin exploring:</p>
        <h1>
          Move around the map. When you find an interesting topic, type the number allocated to the topic to learn more.
        </h1>
      </div>

      <div className="mb-5">
        <label htmlFor="search-topics" className="form-label text-muted">
          Type number:
        </label>
        <div className="input-group rounded-5 mb-5">
          <span className="input-group-text rounded-start-5" id="basic-addon1">
            <FaSearch />
          </span>
          <input
            type="text"
            id="search-topics"
            className="form-control rounded-end-5"
            placeholder="eg: 212"
            aria-label="Search topics"
          />
        </div>
      </div>

      <div>
        <a href="#/" className="btn btn-outline-dark rounded-pill">
          End game
        </a>
      </div>
    </main>
  );
};
