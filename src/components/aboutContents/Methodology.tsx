import { FC } from "react";

export const Methodology: FC = () => {
  return (
    <>
      <section>
        <h1 className="fw-bolder mb-4 display-4">How was this map made?</h1>
        <p>
          This map would not have been possible without the assistance of generative AI. If you explore the map and look
          for titles like "language processing", "text clustering algorithms", "word embedding advancements", or "text
          summarization advancements", you can find the methods we used.
        </p>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">1. An impossible task</h2>
            <p>
              Imagine that you had to read, categorize, and summarize two million highly technical scientific papers
              about AI, algorithms, and machine learning. How would you do it? How long would it take?
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-1.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-1-desktop.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-1.png`}
                alt="An illustration showing robots on a huge pile of papers, simingly discussing with a human"
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">2. Finding similar meanings</h2>
            <p>
              To map the papers in relation to each other we used a language model to calculate to what extent different
              papers have the same meaning. That is called the semantic distance of the papers. It’s like measuring how
              far one place is from another, only that instead of measuring a geographical distance in km, you are
              measuring how similar the two places are to each other, for example, in terms of architectural style. On
              top of that, instead of having one metric, we use hundreds of metrics. Using these hundreds of metrics,
              the language model assigns each paper a vector that gives the paper a position in a multidimensional space
              where similar papers are close together and different ones are farther apart.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-2.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-2-desktop.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-2.png`}
                alt='An illustration with the text "Model: SPECTER"'
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">3. Papers must be grouped to be summarized</h2>
            <p>
              Next step was to group the papers in terms of how they use AI and machine learning. For this we used an
              algorithm for community detection, that was provided with the semantic distances of the papers that the
              language model assigned. It is like having a map where cities are grouped not by geographical distance but
              by similarity. Instead of cities in Denmark being grouped together and cities in Holland being separate,
              you now have a semantic map where cities that are very similar, e.g., Copenhagen and Amsterdam, end up
              next to each other (in the same group). In this case the algorithm is who decides which cities should
              grouped together.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-3.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-3-desktop.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-3.png`}
                alt='An illustration of the papers grouping, with the text "Algorithms: Density-based spatial clustering (like DBSCAN)"'
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">4. Summarizing the groups</h2>
            <p>
              We used a language model to calculate the semantic distance between all paper abstracts — that is, how
              similar their meanings are. The model assigns each abstract a score across hundreds of parameters,
              creating a vector. These vectors position the papers in a multidimensional space where similar papers are
              close together and different ones are farther apart—like reading a bunch of books and noticing which ones
              share similar ideas and which are completely different.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-4.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-4-desktop.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-4.png`}
                alt='An illustration of the groups summarization, using the topic "AI-Driven Education" as an example'
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">5. Visualizing on a flat surface</h2>
            <p>
              Last step was to reduce the multidimensional semantic space into a flat two dimensional space. For this we
              used two algorithms. One that reduced the number of dimensions into only two dimensions and one that
              visualized the position of the papers in relation to each other. In this way every paper got an x and y
              coordinate to be projected onto the flat space of the map, just as cities need coordinates to be drawn on
              geographical maps, but doesn’t take into consideration how rich they are.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-5.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-5-desktop.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-5.png`}
                alt='An illustration of the flat map surface, with the text "Algorithms: Dimensionality reduction (like t-SNE or UMAP) and force-driven layout (like ForceAtlas2)"'
              />
            </picture>
          </figure>
        </section>
      </section>

      <figure className="pe-5 image-stick-left">
        <img
          src={`${import.meta.env.BASE_URL}/about/robot-message.png`}
          alt='A robot saying "Why have we been humanized like this? We do not have personality. We are just machines...'
        />
      </figure>

      <section>
        <h2 className="fw-bolder mt-5 mb-4 display-4">Experimenting with bots for audience engagement</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Maecenas aenean ipsum a ut iaculis ullamcorper lacus tellus justo. Ut
          scelerisque malesuada faucibus nibh integer hendrerit. Fermentum id proin mauris tempor. Sed bibendum
          penatibus arcu facilisis viverra nec enim vulputate. Ultricies cras massa tellus quam.
        </p>
        <p>
          Leo aliquam laoreet a faucibus libero elit. Nisl tincidunt auctor sem ultrices est vivamus sed gravida nisl.
          Nunc velit est nunc nunc lorem. Integer erat turpis lorem quam auctor lectus fermentum. Urna interdum arcu
          eget volutpat adipiscing. Urna vitae sit nec vestibulum amet pellentesque velit{" "}
        </p>
      </section>
    </>
  );
};
