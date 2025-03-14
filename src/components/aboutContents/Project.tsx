import { FC } from "react";

export const Project: FC = () => {
  return (
    <section>
      <h2 className="fw-bolder mb-4 display-4">What are algorithms doing in science?</h2>
      <p>
        We talk a lot about AI—often in terms of the spectacular, revolutionizing, and disruptive aspects of this
        technology. But beyond the controversies, AI is already embedded in the mundane, shaping decisions and processes
        in ways one might not notice or be aware of. From speech recognition to flight control or cybersecurity, from
        analyses of everything from tea quality and swim technique to hormone secretion and mammograms, AI and machine
        learning are woven into the fabric of science and society.
      </p>
      <p>
        Some of these applications raise concerns. Others barely enter public debate and remain in the scientific world.
        Should they? This map is an invitation to explore the landscape of AI in scientific literature and reflect on
        what it means for AI to be everywhere—and how we might engage with it.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Maecenas aenean ipsum a ut iaculis ullamcorper lacus tellus justo. Ut
        scelerisque malesuada faucibus nibh integer hendrerit. Fermentum id proin mauris tempor. Sed bibendum penatibus
        arcu facilisis viverra nec enim vulputate. Ultricies cras massa tellus quam.
      </p>

      <h2 className="fw-bolder mt-5 mb-4 display-4">AI is everywhere and no-where</h2>
      <p>
        The AI debate is often focused on particular applications, such as ChatGPT, or concerns about whether AI is fair
        and reliable. But in reality, AI already plays a role across almost every aspect of our lives and involves a
        much broader range of technologies than we would perhaps normally think. On the picture, you can see where on
        the map you can encounter some of these aspects.
      </p>
      <p>
        But what is it, exactly, that we colloquially call “artificial intelligence”? The vast majority of the papers
        you find on the map never mention the concept. Researchers typically call it machine learning or use the names
        of specific algorithms. And an algorithm is essentially just a series of steps you follow in a given situation.
        It could for example be a doctor following a set of steps to provide a diagnosis. If the steps help a computer
        learn something from data, we call it machine learning, and if the computer is able to act on its own, we might
        call it an autonomous system. What deserves to be called artificial intelligence is continuously debated. Must
        the computer behave in a way that is indistinguishable from a human? Is it sufficient if it is narrowly
        delimited to a specific area of application? Or does it have to be a more general intelligence with independent
        initiative?
      </p>

      <figure>
        <img src={`${import.meta.env.BASE_URL}/about/clusters-map.png`} alt="" />
        <figcaption className="font-monospace my-2">The map of AI with the different thematic clusters</figcaption>
      </figure>

      <h2 className="fw-bolder mt-5 mb-4 display-4">Physicalizing Data: An Experiment in Public Engagement</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Maecenas aenean ipsum a ut iaculis ullamcorper lacus tellus justo. Ut
        scelerisque malesuada faucibus nibh integer hendrerit. Fermentum id proin mauris tempor. Sed bibendum penatibus
        arcu facilisis viverra nec enim vulputate. Ultricies cras massa tellus quam.
      </p>
      <p>
        Leo aliquam laoreet a faucibus libero elit. Nisl tincidunt auctor sem ultrices est vivamus sed gravida nisl.
        Nunc velit est nunc nunc lorem. Integer erat turpis lorem quam auctor lectus fermentum. Urna interdum arcu eget
        volutpat adipiscing. Urna vitae sit nec vestibulum amet pellentesque velit{" "}
      </p>

      <figure className="images-multiple images-2">
        <img src={`${import.meta.env.BASE_URL}/about/floor-1.png`} alt="" />
        <img src={`${import.meta.env.BASE_URL}/about/floor-2.png`} alt="" />
        <figcaption className="font-monospace my-2">
          Pictures of the event in Ballerup Library where the large map was exhibited
        </figcaption>
      </figure>
    </section>
  );
};
