import { FC } from "react";

export const ReadTheMapEN: FC = () => {
  return (
    <section>
      <div className="subtitle">Dots</div>
      <h2 className="fw-bolder mb-4 display-5">Two million scientific papers about artificial intelligence</h2>
      <section className="columns-equal align-items-center my-5">
        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/read-the-map-1.png`} alt="" />
        </figure>
        <div className="text">
          <p>
            Each dot on the map represents a scientific paper. There are 2,015,031 papers in total and they all talk
            about artificial intelligence, algorithms, or machine learning in one way or another. The color of each dot
            shows the year the research was published. Red dots represent the oldest articles, while blue dots represent
            the newest. The earliest research dates back to the 1980s, and since then, the number of publications has
            been growing year by year as scientists have explored new technologies, applications, and all the questions
            they raise.
          </p>
          <p>What do you think the changing colors on the map tell us about how AI research has developed over time?</p>
        </div>
      </section>

      <figure className="me-5 pe-5">
        <img src={`${import.meta.env.BASE_URL}/about/read-the-map-2.png`} alt="" className="w-100" />
      </figure>

      <div className="subtitle mt-5 pt-5">Clusters and Labels</div>
      <h2 className="fw-bolder mb-4 display-5">Algorithms are doing four thousand different things</h2>
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
            describing what AI is doing in each group.
          </p>
        </div>
      </section>

      <div className="subtitle mt-5 pt-5">Areas</div>
      <h2 className="fw-bolder mb-4 display-5">Wider subject areas</h2>
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

export const ReadTheMapDA: FC = () => {
  return (
    <section>
      <div className="subtitle">Prikker</div>
      <h2 className="fw-bolder mb-4 display-5">To millioner artikler om kunstig intelligens</h2>
      <section className="columns-equal align-items-center my-5">
        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/read-the-map-1.png`} alt="" />
        </figure>
        <div className="text">
          <p>
            Hvert punkt på kortet repræsenterer en videnskabelig artikel. Der er i alt 2,015,031 artikler og de handler
            alle sammen om kunstig intelligens, algoritmer, og maskinlæring på den ene eller anden måde. Punkternes
            farve viser det år artiklen blev udgivet. Røde prikker repræsenterer de ældste artikler, hvorimod blå
            prikker repræsenterer de nyeste. Den første forskning kan dateres til 1980erne, og siden er antallet af
            publikationerne vokset hvert år, i takt med at forskerne har undersøgt nye teknologier, anvendelsesområder
            og alle de spørgsmål som det rejser.
          </p>
          <p>
            Hvad tænker du, de skiftende farver på kortet kan fortælle os om forskningens udvikling indenfor kunstig
            intelligens?
          </p>
        </div>
      </section>

      <figure className="me-5 pe-5">
        <img src={`${import.meta.env.BASE_URL}/about/read-the-map-2.png`} alt="" className="w-100" />
      </figure>

      <div className="subtitle mt-5 pt-5">Klynger og titler</div>
      <h2 className="fw-bolder mb-4 display-5">Algoritmer gør fire tusind forskellige ting</h2>
      <section className="columns-equal">
        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/read-the-map-3.png`} alt="" />
        </figure>
        <div className="text">
          <p>
            Når artikler er placeret tæt på hinanden betyder det, at de er meget ens. Du vil lægge mærke til nogen
            områder hvor der er mange prikker. Disse grupperinger, repræsenterer artikler der stiller de samme
            spørgsmål, bruger de samme metoder, og / eller kommer frem til de samme konklusioner. Vi har fundet 4,062
            grupper, hvor artiklerne er så ens, at vi kan beskrive specifikke rolle som kunstig intelligens spiller i
            dem. På kortet kan du se overskrifter med numre og titler som repræsenterer disse grupper.
          </p>
        </div>
      </section>

      <div className="subtitle mt-5 pt-5">Områder</div>
      <h2 className="fw-bolder mb-4 display-5">Bredere emneområder</h2>
      <section className="columns-equal">
        <figure>
          <img src={`${import.meta.env.BASE_URL}/about/read-the-map-4.png`} alt="" />
        </figure>
        <div className="text">
          <p>
            I nogle områder af kortet ligger artiklerne meget tæt på hinanden i klynger. Det er et tegn på, at der er et
            overordnet tema eller en teknologi, de adresserer på forskellige måder. Disse bredere emneområder har ikke
            klare grænser og har en tendens til at flyde over i hinanden, men du kan lægge mærke til, hvordan emnerne
            ændrer karakter i takt med at du bevæger dig hen over kortet. Hvilken forbindelse tror du de forskellige
            områder har til hinanden?
          </p>
        </div>
      </section>
    </section>
  );
};
