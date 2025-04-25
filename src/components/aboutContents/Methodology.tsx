import { FC } from "react";

export const MethodologyEN: FC = () => {
  return (
    <>
      <section>
        <h1 className="fw-bolder mb-4 display-4">Methodology</h1>
        <p>
          This map would not have been possible without the assistance of generative AI. If you explore the map and look
          for titles like "language processing", "text clustering algorithms", "word embedding advancements", or "text
          summarization advancements", you can find the methods we used.
        </p>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">Step 1 – An impossible task</h2>
            <p>
              Imagine that you had to read, categorize, and summarize two million highly technical scientific papers
              about AI, algorithms, and machine learning.
            </p>
            <p>How would you do it?</p>
            <p>How long would it take?</p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-1.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-1-desktop-en.png`}
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
            <h2 className="fw-bolder mt-5 mb-4">Step 2 – Finding similar meanings</h2>
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
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-2-desktop-en.png`}
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
            <h2 className="fw-bolder mt-5 mb-4">Step 3 – Papers must be grouped to be summarized</h2>
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
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-3-desktop-en.png`}
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
            <h2 className="fw-bolder mt-5 mb-4">Step 4 – Summarizing the groups</h2>
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
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-4-desktop-en.png`}
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
            <h2 className="fw-bolder mt-5 mb-4">Step 5 - Visualizing on a flat surface</h2>
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
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-5-desktop-en.png`}
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
        <img src={`${import.meta.env.BASE_URL}/about/robot-message-en.png`} alt="" />
      </figure>

      <section>
        <h2 className="fw-bolder mt-5 mb-4 display-4">Experimenting with bots for audience engagement</h2>
        <p>
          The map you’re looking at is highly technical. It’s not always easy to know what to feel about it. So we built
          two chatbots to help. Not neutral ones, but opinionated ones. One’s a techno-optimist, the other’s a digital
          skeptic. Think of them as guides with strong personalities, helping you look at the same landscape through two
          different lenses.
        </p>
        <p>You could say they’re racialized, political, even a little provocative. And that’s the point.</p>
      </section>

      <section className="columns-equal align-items-center">
        <div className="text">
          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Fine-tuning AI - the “sourdough” method</h3>
            <p>
              You can think of the process we followed when fine-tuning the generative AI as being similar to making
              sourdough. You don’t bake the whole loaf from scratch, you start with a “starter.” Something that already
              has culture in it. In our case, the starter was online debates about digitalization, AI, and algorithms.
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Step 1 - Heated debates about AI</h3>
            <p>
              The first thing we did was to dig into social media, pulling out comments from heated discussions around
              AI. We didn’t just copy-paste, though. Each comment got paired with a manually written question, because
              fine-tuning these models requires Q&A format. So we imagined: what kind of question would provoke this
              kind of response?
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Step 2 - Synthesizing with local models</h3>
            <p>
              The next step was then to turn these comments into training data for the generative AI. However, we didn’t
              want to feed real people’s words straight into OpenAI. So, we ran everything through a local open-source
              model (Llama 3). This model helped us synthesize the data, capturing the tone and political energy of the
              original conversations, without replicating any individual’s voice. Think of it as blending a smoothie:
              same flavor profile, but no identifiable fruit chunks.
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Step 3 - Having conversations with our bots</h3>
            <p>
              We fine-tuned the first version of the chatbots, on the synthesized data and started chatting with it. But
              we weren’t looking for helpful, polite ChatGPT vibes. We wanted something a little more argumentative. So
              we kept the replies that pushed back, asked us questions, and used those for the next round of training.
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Step 4 - Bake, taste, repeat</h3>
            <p>
              In the end, we fine-tuned seven versions of the two chatbots, each following the cycle of initiating
              conversations, selecting the best responses, repeating the process, chatting, and retraining. Each cycle
              added a new layer of tone and defiance. We now have two bots that don’t sound like anything you’d normally
              get out of ChatGPT.
            </p>
          </section>
        </div>
        <figure>
          <picture>
            <img src={`${import.meta.env.BASE_URL}/about/methodology-bots-en.png`} alt="" />
          </picture>
        </figure>
      </section>
    </>
  );
};

export const MethodologyDA: FC = () => {
  return (
    <>
      <section>
        <h1 className="fw-bolder mb-4 display-4">Metode</h1>
        <p>
          Dette kort ville ikke have været muligt at lave uden hjælp fra generativ kunstig intelligens. Hvis du
          udforsker kortet og leder efter titler som "language processing", "text clustering algorithms", "word
          embedding advancements", eller "text summarization advancements", kan du genfinde metoderne.
        </p>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">Step 1 – En umulig opgave</h2>
            <p>
              Forestil dig, at du skulle læse, kategorisere og opsummere to millioner meget tekniske videnskabelige
              artikler om AI, algoritmer og maskinlæring.
            </p>
            <p>Hvordan ville du gøre det?</p>
            <p>Hvor lang tid ville det tage?</p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-1.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-1-desktop-da.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-1.png`}
                alt="En illustration, der viser robotter på en kæmpe bunke papirer, tilsyneladende i samtale med et menneske"
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">Step 2 – At finde lignende betydninger</h2>
            <p>
              For at placere artiklerne i relation til hinanden har vi brugt en sprogmodel til at beregne i hvilken grad
              forskellige artikler taler om de samme ting. Det kalder man artiklernes semantiske afstand. Det fungerer
              ligesom at måle afstanden fra et sted til det andet, men i stedet for at måle en geografisk afstand i
              kilometer, måler man hvor ensartet stederne er i deres arkitektur eller deres madkultur. For at gøre
              dette, giver vi hver artikel en vurdering baseret på hundredvis af parametre som er blevet lært af en
              sprogmodel og dermed giver hver artikel en position i et multidimensionalt rum hvor alle artikler med
              lignende vurderinger ligger tæt på hinanden.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-2.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-2-desktop-da.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-2.png`}
                alt="En illustration med teksten 'Model: SPECTER'"
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">Step 3 – Artiklerne skal grupperes for at kunne opsummeres</h2>
            <p>
              Næste skridt, er at samle artiklerne baseret på den måde de bruger algoritmer og maskinlæring. For at gøre
              det, fodrede vi artiklernes semantiske afstand til en algoritmer, der kunne lave grupperingsgenkendelse.
              Igen, det er ligesom et landkort, hvor byerne ikke er grupperet efter deres geografiske afstande, som fx
              et Danmarkskort, men efter hvor meget de ligner hinanden på andre parameter. Så kunne man fx få et kort
              hvor Amsterdam lå tættere på København, fordi de ligner hinanden mere i antallet af indbyggere og andre
              ting.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-3.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-3-desktop-da.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-3.png`}
                alt="En illustration af papirers gruppering, med teksten 'Algoritmer: Tæthedsbaseret rumlig klyngedannelse (som DBSCAN)'"
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">Step 4 – Opsummering af grupperne</h2>
            <p>
              Efter at have grupperet enslydende artikler havde vi brug for at vide hvad algoritmer gør i disse
              artikler. Det kunne i princippet klares af et menneske, men med fire tusind grupper viste det sig praktisk
              umuligt. I stedet brugte vi en sprogmodel i stil med ChatGPT til at opsummere algoritmernes rolle i hver
              artikelgruppe og verificerede løbende resultaterne.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-4.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-4-desktop-da.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-4.png`}
                alt="En illustration af gruppernes opsummering, med emnet 'AI-drevet uddannelse' som eksempel"
              />
            </picture>
          </figure>
        </section>

        <section className="columns">
          <div className="text">
            <h2 className="fw-bolder mt-5 mb-4">Step 5 - Visualisering på en flade</h2>
            <p>
              I sidste skridt reducerede vi det multidimensionale semantiske rum til en plan flade, som viser hvor ens
              artiklerne er i forhold til hinanden. Her brugte vi en algoritme, der reducere alle de parametre, som det
              semantiske rum består af til kun to dimensioner, så hver artikel kan få en x og y koordinat, der bliver
              placeret på kortet. Det svarer til at man tager hundredvis af parameter for byer, fx indkomst, madkultur,
              infrastruktur, arkitektur osv., og laver et to-dimensionelt kort herudfra. Det ville placere byerne i
              verden helt anderledes end de er i dag.
            </p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}/about/methodology-5.png`} />
              <source
                media="(min-width: 769px)"
                srcSet={`${import.meta.env.BASE_URL}/about/methodology-5-desktop-da.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}/about/methodology-5.png`}
                alt="En illustration af gruppernes opsummering, med emnet 'AI-drevet uddannelse' som eksempel"
              />
            </picture>
          </figure>
        </section>
      </section>

      <figure className="pe-5 image-stick-left">
        <img src={`${import.meta.env.BASE_URL}/about/robot-message-en.png`} alt="" />
      </figure>

      <section>
        <h2 className="fw-bolder mt-5 mb-4 display-4">Eksperimentering med bots for at involvere publikummet</h2>
        <p>
          Kortet, du kigger på, er meget teknisk. Det er ikke altid nemt at vide, hvordan man skal forholde sig til det
          eller hvad man skal mene om det. Derfor har vi bygget to bots til at hjælpe. De er ikke neutrale, men har hver
          deres holdning. En er en techno-optimist, den anden digital skeptiker. Tænk på dem som guider med stærke
          personligheder, der hjælper dig med at se kortet gennem to forskellige linser.
        </p>
        <p>Man kunne sige, at de er radikaliseret, politiske og også lidt provokerende. Og det er netop pointen.</p>
      </section>

      <section className="columns-equal align-items-center">
        <div className="text">
          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Fine-tuning AI - “surdejs” metoden</h3>
            <p>
              Du kan tænke over den proces, vi fulgte, da vi skulle fine-tune den generative AI, som noget der minder om
              bagning med surdej. Du bager ikke hele brødet fra bunden af, men du bruger en “starter”. Noget, der
              allerede indeholder kultur. I vores tilfælde var surdejs-starteren online-debatter om digitalisering,
              kunstig intelligens og algoritmer.
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Trin 1- Debatter om kunstig intelligens</h3>
            <p>
              Det første, vi gjorde, var at dyrke ned i de sociale medier og finde kommentarer fra ophedede debatter om
              kunstig intelligens. Men vi nøjedes ikke med at kopiere dem. I stedet skrev vi et spørgsmål til hver
              enkelt kommentar, fordi fine-tuning af sådanne modeller kræver et spørgsmål-og-svar-format. Så vi spurgte
              os selv: Hvilken slags spørgsmål ville kunne fremprovokere dette svar?
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Trin 2 - Synthesizing with local models</h3>
            <p>
              Næste skridt var at omdanne disse kommentarer til træningsdata for den generative AI. Men vi ønskede ikke
              at sende folks kommentarer og ord direkte ind i OpenAI. Derfor kørte vi det hele gennem en lokal open
              source-model (Llama 3). Denne model hjalp os med at syntetisere dataene – den fangede tonen og den
              politiske energi fra de oprindelige samtaler, uden at efterligne nogen enkelt persons stemme. Tænk på det
              som at blende en smoothie: samme smagsprofil, men uden genkendelige frugtstykker.
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Trin 3 - At have en samtale med vores bots.</h3>
            <p>
              Vi fine-tunede den første version af chatbotterne med syntetiske data og begyndte at føre samtaler med
              dem. Men vi var ikke ude efter den sædvanlige hjælpsomme og høflige ChatGPT-oplevelse. Vi ønskede, at den
              skulle være mere diskuterende. Derfor gemte vi de svar, der udfordrede os, og hvor chatbotten stillede
              modspørgsmål – og brugte dem som grundlag for næste træningsrunde.
            </p>
          </section>

          <section>
            <h3 className="fw-bolder mt-5 mb-4 fs-5">Trin 4 - at bage, smage og gentage</h3>
            <p>
              I sidste ende fine-tunede vi syv versioner af de to chatbots– hver gennemgik en gentagen proces med at
              starte samtaler, udvælge de bedste svar, gentage forløbet, chatte og træne på ny. Hver cyklus tilføjede et
              nyt lag af tone og trodsighed. Resultatet er to bots, der ikke lyder som noget, man normalt forbinder med
              ChatGPT.
            </p>
          </section>
        </div>
        <figure>
          <picture>
            <img src={`${import.meta.env.BASE_URL}/about/methodology-bots-en.png`} alt="" />
          </picture>
        </figure>
      </section>
    </>
  );
};
