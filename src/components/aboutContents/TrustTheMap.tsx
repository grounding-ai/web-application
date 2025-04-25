import { FC } from "react";

export const TrustTheMapEN: FC = () => {
  return (
    <section>
      <h1 className="fw-bolder mb-4 display-4">Can you trust this map?</h1>
      <p>
        AI is not infallible. The same is true for the map of AI. The language models we have used to analyse and sort
        the two million scientific papers are the same technology we know from chatbots and generative AI. By default,
        this means that we cannot trust them. Language models are good at putting words together in ways that make them
        sound human. They do so based on probabilities, but they do not possess what we would call knowledge of the
        topic they are writing about. For example, when we ask a language model to summarize which role algorithms play
        in a group of scientific papers, we cannot simply provide the titles of those papers and expect it to know the
        answer. The result would likely be a text that sounded plausible and had all the outward trappings of a summary,
        but with high risk of so-called hallucinations. Since the language model is not a lexicon and does not have
        access to a knowledge database, it cannot fact-check its own results. It can simply provide a combination of
        words that could likely have been used in the context but still easily include faulty information. We therefore
        take a series of precautions to be as sure as possible that the results are trustworthy.
      </p>

      <section className="columns-equal mt-5">
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-1.png`} alt="" />
          </figure>
          <p>
            1. <strong>Which data has the model seen?</strong> Instead of asking the model for an answer with no
            context, we show it the text from the papers we are interested in. In this way, we can make sure that the
            answer is based on what it says in the papers.
          </p>
        </div>
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-2.png`} alt="" />
          </figure>
          <p>
            2. <strong>How has the model reached its answer?</strong> Instead of asking for a summary with a title right
            away, we break it down into simpler tasks. First, we ask for a list of research questions and algorithms
            mentioned in the papers. Then, we ask for the list to be summarized. Finally, we request a short title for
            the summary.{" "}
          </p>
        </div>
      </section>

      <section className="columns-equal">
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-3.png`} alt="" />
          </figure>
          <p>
            3. <strong>How has the model been prompted?</strong> Instead of using the first result we get, we experiment
            with different ways of writing instructions for the model.
          </p>
        </div>
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-4.png`} alt="" />
          </figure>
          <p>
            4. <strong>How have the results been verified?</strong> Instead of taking the results at face value, we
            compare a random sample of summaries with the way we would have written them ourselves.
          </p>
        </div>
      </section>
    </section>
  );
};

export const TrustTheMapDA: FC = () => {
  return (
    <section>
      <h1 className="fw-bolder mb-4 display-4">Stoler du på kortet?</h1>
      <p>
        Kunstig intelligens er ikke ufejlbarlig. Det samme gælder kortet over kunstig intelligens. De sprogmodeller, vi
        har brugt til at analysere og ordne de to millioner videnskabelige artikler, er den samme teknologi, vi kender
        fra chatbots og generativ AI. Det betyder som udgangspunkt, at vi ikke kan stole på dem. Sprogmodeller er gode
        til at sætte ord sammen, så det lyder menneskelig. Det gør de ud fra en sandsynlighedsberegning, men
        sprogmodellerne ved i princippet ikke noget om et givent emne. Når vi for eksempel beder en sprogmodel om at
        opsummere, hvilken rolle algoritmer spiller i en gruppe videnskabelige artikler, kan vi ikke bare give
        sprogmodellen titlerne på artiklerne og forvente, at den kender svaret. Det ville formentlig resultere i en
        tekst, der lød plausibel og på overfladen levede op til vores forventninger om, hvordan en opsummering skal se
        ud, men der ville være høj risiko for såkaldte hallucinationer. Eftersom sprogmodellen ikke er et opslagsværk og
        ikke har adgang til en database med viden, kan den heller ikke faktatjekke sine egne resultater. Den kan blot
        levere en kombination af ord, der sandsynligvis kunne være brugt i sammenhængen, men sagtens kan indeholde
        forkerte oplysninger. Derfor tager vi en række forholdsregler for at være så sikre som muligt på, at
        resultaterne er troværdige.
      </p>

      <section className="columns-equal mt-5">
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-1.png`} alt="" />
          </figure>
          <p>
            1. <strong>Hvilke data har modellen set?</strong> I stedet for at bede modellen om et svar ud af den blå
            luft sørger vi altid for at vise teksten fra de artikler, vi er interesserede i. På den måde kan vi sørge
            for, at svaret holder sig til det, der står i artiklerne.
          </p>
        </div>
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-2.png`} alt="" />
          </figure>
          <p>
            2. <strong>Hvordan er modellen nået frem til sit svar?</strong> I stedet for at bede om en opsummering og en
            titel med det samme, bryder vi opgaven ned i enklere skridt. Først beder vi om en liste over
            forskningsspørgsmål og algoritmer, der nævnes i artiklerne. Bagefter beder vi om at få listen opsummeret.
            Til sidst beder vi om en kort titel på opsummeringen.
          </p>
        </div>
      </section>

      <section className="columns-equal">
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-3.png`} alt="" />
          </figure>
          <p>
            3. <strong>Hvordan er modellen blevet prompted?</strong> I stedet for at anvende det første resultat vi får,
            eksperimenterer vi med forskellige måder at skrive instruktioner til modellen på.
          </p>
        </div>
        <div className="mb-5">
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-4.png`} alt="" />
          </figure>
          <p>
            4. <strong>Hvordan er resultaterne blevet verificeret?</strong> I stedet for at tage resultaterne for gode
            varer, sammenligner vi et tilfældigt udpluk af opsummeringer med, hvordan vi selv ville have skrevet dem.
          </p>
        </div>
      </section>
    </section>
  );
};
