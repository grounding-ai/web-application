import { FC } from "react";

export const TrustTheMap: FC = () => {
  return (
    <section>
      <h1 className="fw-bolder mb-4 display-4">Can you trust this map?</h1>
      <p>
        AI is not infallible. The same is true for the map of AI. The language models we have used to analyse and sort
        the two million scientific papers are the same technology we know from chatbots and generative AI. By default,
        this means that we cannot trust them. Language models are good at putting words together in ways that make them
        sound human. They do so based on probabilities, but they do not possess what we would call knowledge of the
        topic they are writing about.
      </p>
      <p>
        For example, when we ask a language model to summarize which role algorithms play in a group of scientific
        papers, we cannot simply provide the titles of those papers and expect it to know the answer. The result would
        likely be a text that sounded plausible and had all the outward trappings of a summary, but with high risk of
        so-called hallucinations. Since the language model is not a lexicon and does not have access to a knowledge
        database, it cannot fact-check its own results. It can simply provide a combination of words that could likely
        have been used in the context but still easily include faulty information. We therefore take a series of
        precautions to be as sure as possible that the results are trustworthy.
      </p>

      <section className="columns-equal">
        <div>
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-1.png`} alt="" />
          </figure>
          <h2 className="fw-bolder mt-5 mb-4">1. Which data has the model seen?</h2>
          <p>
            Instead of asking the model for an answer with no context, we show it the text from the papers we are
            interested in. In this way, we can make sure that the answer is based on what it says in the papers.
          </p>
        </div>
        <div>
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-2.png`} alt="" />
          </figure>
          <h2 className="fw-bolder mt-5 mb-4">2. How has the model reached its answer?</h2>
          <p>
            Instead of asking for a summary with a title right away, we break it down into simpler tasks. First, we ask
            for a list of research questions and algorithms mentioned in the papers. Then, we ask for the list to be
            summarized. Finally, we request a short title for the summary.
          </p>
        </div>
      </section>

      <section className="columns-equal">
        <div>
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-3.png`} alt="" />
          </figure>
          <h2 className="fw-bolder mt-5 mb-4">3. How has the model been prompted?</h2>
          <p>
            Instead of using the first result we get, we experiment with different ways of writing instructions for the
            model.
          </p>
        </div>
        <div>
          <figure>
            <img src={`${import.meta.env.BASE_URL}/about/trust-the-map-4.png`} alt="" />
          </figure>
          <h2 className="fw-bolder mt-5 mb-4">4. How have the results been verified?</h2>
          <p>
            Instead of taking the results at face value, we compare a random sample of summaries with the way we would
            have written them ourselves.
          </p>
        </div>
      </section>
    </section>
  );
};
