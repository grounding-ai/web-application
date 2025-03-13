import cx from "classnames";
import { keyBy } from "lodash";
import { FC, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { makeLoader, useLoaderData } from "react-router-typesafe";

import { TopMenu } from "../components/TopMenu.tsx";

const CONTENTS = [
  {
    id: "project",
    bgColor: undefined,
    textColor: "primary",
    title: "About the project",
    content: (
      <section>
        <h2 className="fw-bolder mb-4 display-4">What are algorithms doing in science?</h2>
        <p>
          We talk a lot about AI—often in terms of the spectacular, revolutionizing, and disruptive aspects of this
          technology. But beyond the controversies, AI is already embedded in the mundane, shaping decisions and
          processes in ways one might not notice or be aware of. From speech recognition to flight control or
          cybersecurity, from analyses of everything from tea quality and swim technique to hormone secretion and
          mammograms, AI and machine learning are woven into the fabric of science and society.
        </p>
        <p>
          Some of these applications raise concerns. Others barely enter public debate and remain in the scientific
          world. Should they? This map is an invitation to explore the landscape of AI in scientific literature and
          reflect on what it means for AI to be everywhere—and how we might engage with it.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Maecenas aenean ipsum a ut iaculis ullamcorper lacus tellus justo. Ut
          scelerisque malesuada faucibus nibh integer hendrerit. Fermentum id proin mauris tempor. Sed bibendum
          penatibus arcu facilisis viverra nec enim vulputate. Ultricies cras massa tellus quam.
        </p>

        <h2 className="fw-bolder mt-5 mb-4 display-4">AI is everywhere and no-where</h2>
        <p>
          The AI debate is often focused on particular applications, such as ChatGPT, or concerns about whether AI is
          fair and reliable. But in reality, AI already plays a role across almost every aspect of our lives and
          involves a much broader range of technologies than we would perhaps normally think. On the picture, you can
          see where on the map you can encounter some of these aspects.
        </p>
        <p>
          But what is it, exactly, that we colloquially call “artificial intelligence”? The vast majority of the papers
          you find on the map never mention the concept. Researchers typically call it machine learning or use the names
          of specific algorithms. And an algorithm is essentially just a series of steps you follow in a given
          situation. It could for example be a doctor following a set of steps to provide a diagnosis. If the steps help
          a computer learn something from data, we call it machine learning, and if the computer is able to act on its
          own, we might call it an autonomous system. What deserves to be called artificial intelligence is continuously
          debated. Must the computer behave in a way that is indistinguishable from a human? Is it sufficient if it is
          narrowly delimited to a specific area of application? Or does it have to be a more general intelligence with
          independent initiative?
        </p>

        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/clusters-map.png`} alt="" />
          <figcaption className="font-monospace my-2">The map of AI with the different thematic clusters</figcaption>
        </figure>

        <h2 className="fw-bolder mt-5 mb-4 display-4">Physicalizing Data: An Experiment in Public Engagement</h2>
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

        <figure className="images-multiple images-2">
          <img src={`${import.meta.env.BASE_URL}/about/floor-1.png`} alt="" />
          <img src={`${import.meta.env.BASE_URL}/about/floor-2.png`} alt="" />
          <figcaption className="font-monospace my-2">
            Pictures of the event in Ballerup Library where the large map was exhibited
          </figcaption>
        </figure>
      </section>
    ),
  },
  {
    id: "methodology",
    bgColor: "secondary",
    textColor: "light",
    title: "Methodology",
    content: (
      <>
        <section>
          <h2 className="fw-bolder mb-4 display-4">How was this map made?</h2>
          <p>
            This map would not have been possible without the assistance of generative AI. If you explore the map and
            look for titles like "language processing", "text clustering algorithms", "word embedding advancements", or
            "text summarization advancements", you can find the methods we used.
          </p>

          <h2 className="fw-bolder mt-5 mb-4 display-4">1. An impossible task</h2>
          <p>
            Imagine that you had to read, categorize, and summarize two million highly technical scientific papers about
            AI, algorithms, and machine learning. How would you do it? How long would it take?
          </p>
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}/about/methodology-1.png`}
              alt="An illustration showing robots on a huge pile of papers, simingly discussing with a human"
            />
          </figure>

          <h2 className="fw-bolder mt-5 mb-4 display-4">2. Finding similar meanings</h2>
          <p>
            To map the papers in relation to each other we used a language model to calculate to what extent different
            papers have the same meaning. That is called the semantic distance of the papers. It’s like measuring how
            far one place is from another, only that instead of measuring a geographical distance in km, you are
            measuring how similar the two places are to each other, for example, in terms of architectural style. On top
            of that, instead of having one metric, we use hundreds of metrics. Using these hundreds of metrics, the
            language model assigns each paper a vector that gives the paper a position in a multidimensional space where
            similar papers are close together and different ones are farther apart.
          </p>
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}/about/methodology-2.png`}
              alt='An illustration with the text "Model: SPECTER"'
            />
          </figure>

          <h2 className="fw-bolder mt-5 mb-4 display-4">3. Papers must be grouped to be summarized</h2>
          <p>
            Next step was to group the papers in terms of how they use AI and machine learning. For this we used an
            algorithm for community detection, that was provided with the semantic distances of the papers that the
            language model assigned. It is like having a map where cities are grouped not by geographical distance but
            by similarity. Instead of cities in Denmark being grouped together and cities in Holland being separate, you
            now have a semantic map where cities that are very similar, e.g., Copenhagen and Amsterdam, end up next to
            each other (in the same group). In this case the algorithm is who decides which cities should grouped
            together.
          </p>
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}/about/methodology-3.png`}
              alt='An illustration of the papers grouping, with the text "Algorithms: Density-based spatial clustering (like DBSCAN)"'
            />
          </figure>

          <h2 className="fw-bolder mt-5 mb-4 display-4">4. Summarizing the groups</h2>
          <p>
            We used a language model to calculate the semantic distance between all paper abstracts — that is, how
            similar their meanings are. The model assigns each abstract a score across hundreds of parameters, creating
            a vector. These vectors position the papers in a multidimensional space where similar papers are close
            together and different ones are farther apart—like reading a bunch of books and noticing which ones share
            similar ideas and which are completely different.
          </p>
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}/about/methodology-4.png`}
              alt='An illustration of the groups summarization, using the topic "AI-Driven Education" as an example'
            />
          </figure>

          <h2 className="fw-bolder mt-5 mb-4 display-4">5. Visualizing on a flat surface</h2>
          <p>
            Last step was to reduce the multidimensional semantic space into a flat two dimensional space. For this we
            used two algorithms. One that reduced the number of dimensions into only two dimensions and one that
            visualized the position of the papers in relation to each other. In this way every paper got an x and y
            coordinate to be projected onto the flat space of the map, just as cities need coordinates to be drawn on
            geographical maps, but doesn’t take into consideration how rich they are.
          </p>
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}/about/methodology-5.png`}
              alt='An illustration of the flat map surface, with the text "Algorithms: Dimensionality reduction (like t-SNE or UMAP) and force-driven layout (like ForceAtlas2)"'
            />
          </figure>
        </section>

        <figure className="pe-5">
          <img
            src={`${import.meta.env.BASE_URL}/about/robot-message.png`}
            alt='A robot saying "Why have we been humanized like this? We do not have personality. We are just machines...'
          />
        </figure>

        <section>
          <h2 className="fw-bolder mt-5 mb-4 display-4">Experimenting with bots for audience engagement</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Maecenas aenean ipsum a ut iaculis ullamcorper lacus tellus justo.
            Ut scelerisque malesuada faucibus nibh integer hendrerit. Fermentum id proin mauris tempor. Sed bibendum
            penatibus arcu facilisis viverra nec enim vulputate. Ultricies cras massa tellus quam.
          </p>
          <p>
            Leo aliquam laoreet a faucibus libero elit. Nisl tincidunt auctor sem ultrices est vivamus sed gravida nisl.
            Nunc velit est nunc nunc lorem. Integer erat turpis lorem quam auctor lectus fermentum. Urna interdum arcu
            eget volutpat adipiscing. Urna vitae sit nec vestibulum amet pellentesque velit{" "}
          </p>
        </section>
      </>
    ),
  },
] as const;
const CONTENTS_DICT = keyBy(CONTENTS, "id");

// eslint-disable-next-line react-refresh/only-export-components
export const aboutPageLoader = makeLoader(async ({ params: { contentID } }) => {
  if (!contentID) throw new Error("Required content ID is missing from URL");

  return { content: CONTENTS_DICT[contentID] };
});

export const AboutPage: FC = () => {
  const { content } = useLoaderData<typeof aboutPageLoader>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [content.id]);

  return (
    <div
      className={cx(
        "about",
        content.bgColor && `bg-${content.bgColor}`,
        content.textColor && `text-${content.textColor}`,
      )}
    >
      <header>
        <TopMenu colorClassNameSuffix={content.textColor}>
          <h1 className="fs-5 mt-1">Grounding AI</h1>
        </TopMenu>
      </header>

      <aside>
        <div className="select-wrapper">
          <select
            className={cx(
              "form-select form-select-sm z-1 position-relative",
              `border-${content.textColor} text-${content.textColor}`,
            )}
            value={content.id}
            onChange={(e) => navigate(`/about/${e.target.value}`)}
          >
            {CONTENTS.map(({ id, title }) => (
              <option key={id} value={id}>
                {title.toUpperCase()}
              </option>
            ))}
          </select>

          <div className="position-absolute h-100 top-0 end-0 pe-2 d-flex align-items-center justify-content-center">
            <FaAngleDown />
          </div>
        </div>

        <ul className="list-wrapper list-unstyled">
          {CONTENTS.map(({ id, title }) => (
            <li key={id} className={cx(id === content.id && "active")}>
              {id === content.id ? (
                <strong className="active">{title.toUpperCase()}</strong>
              ) : (
                <Link to={`/about/${id}`}>{title.toUpperCase()}</Link>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main>{content.content}</main>
    </div>
  );
};
