import { FC } from "react";

export const ReadTheMap: FC = () => {
  return (
    <section>
      <div className="subtitle">Dots</div>
      <h2 className="fw-bolder mb-4 display-4">Two million scientific papers about artificial intelligence</h2>
      <section className="columns-equal">
        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/read-the-map-1.png`} alt="" />
        </figure>
        <div className="text">
          <p>
            Each dot on the map represents a scientific paper. There are 2,015,031 papers in total and they all talk
            about artificial intelligence, algorithms, or machine learning in one way or another.
          </p>
          <p>
            The color of each dot shows the year the research was published. Red dots represent the oldest articles,
            while blue dots represent the newest. The earliest research dates back to the 1980s, and since then, the
            number of publications has been growing year by year as scientists have explored new technologies,
            applications, and all the questions they raise.
          </p>
        </div>
      </section>
      <figure>
        <img src={`${import.meta.env.BASE_URL}/about/read-the-map-2.png`} alt="" className="w-100" />
      </figure>

      <div className="subtitle mt-5">Clusters and Labels</div>
      <h2 className="fw-bolder mb-4 display-4">Algorithms are doing four thousand different things</h2>
      <section className="columns-equal">
        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/read-the-map-3.png`} alt="" />
        </figure>
        <div className="text">
          <p>
            When papers are close to each other, it means they are similar. You will notice areas with a higher density
            of dots forming groups. These represent clusters of papers that ask the same questions, use similar methods,
            and/or reach similar conclusions. We have found 4,062 groups where the papers are so similar that we can
            describe the specific role algorithms play in them. On the map, you will see labels with numbers and titles
            representing these groups.
          </p>
        </div>
      </section>

      <div className="subtitle mt-5">Areas</div>
      <h2 className="fw-bolder mb-4 display-4">Wider subject areas</h2>
      <section className="columns-equal">
        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/read-the-map-4.png`} alt="" />
        </figure>
        <div className="text">
          <p>
            In some areas of the map the papers are clustered very close to each other. This is a sign that there is an
            overarching theme or a technology that they all address in different ways. These wider subject areas have no
            clear borders and tend to flow into each other, but you can notice how the subjects change character as you
            move across the map.
          </p>
        </div>
      </section>
    </section>
  );
};
