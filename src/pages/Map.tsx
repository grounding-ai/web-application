import { FC, useState } from "react";

import { ImageViewer } from "../components/ImageViewer.tsx";
import { SearchField } from "../components/SearchField.tsx";
import { SearchResults } from "../components/SearchResults.tsx";
import { TopMenu } from "../components/TopMenu.tsx";
import { Topic } from "../core/types.ts";

export const Map: FC = () => {
  const [search, setSearch] = useState<null | { query: string; results: Topic[] }>(null);

  return (
    <main className="bg-secondary text-white d-flex flex-column">
      <TopMenu>
        <h1 className="fs-5 mb-0 my-2">Grounding AI</h1>
      </TopMenu>

      <section className="flex-grow-1 position-relative">
        <ImageViewer tileSources={`${import.meta.env.BASE_URL}/map/map.dzi`} />
        {search && (
          <div className="position-absolute inset-0 bg-secondary p-4 overflow-auto pt-5">
            <SearchResults {...search} />
          </div>
        )}
      </section>

      <section className="p-3 pb-4">
        <SearchField
          inputClassName="bg-light-blue border-light-blue"
          onSearch={(s) => {
            setSearch(s);
          }}
        />
      </section>
    </main>
  );
};
