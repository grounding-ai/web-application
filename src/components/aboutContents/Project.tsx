import { FC } from "react";

export const ProjectEN: FC = () => {
  return (
    <section>
      <h2 className="fw-bolder mb-4 display-4">What are algorithms doing in science?</h2>
      <p>
        We talk a lot about AI—often in terms of the spectacular, revolutionizing, and disruptive aspects of this
        technology. But beyond the controversies, AI is already embedded in the world around us and in our everyday
        lives, shaping decisions and processes in ways one might not notice or be aware of. Everything from speech
        recognition, flight control or cybersecurity, to analyzing tea quality, swim techniques, hormone secretion or
        mammograms for breast cancer diagnosis - AI and machine learning algorithms are already woven into the fabric of
        science and society.
      </p>
      <p>
        Some of these applications spark controversy while others barely enter the public debate. Should they? We invite
        you to explore the map of AI in the scientific literature and take part in the discussion.
      </p>

      <h2 className="fw-bolder mt-5 mb-4 display-4">AI is everywhere and nowhere</h2>
      <p>
        Public discussions about AI often focus on specific applications, like ChatGPT, leading us to associate AI
        primarily with these well-known tools. As a result, we may overlook the fact that AI is deeply embedded in many
        aspects of our daily lives, and involves a much broader range of technologies than we would perhaps normally
        think.
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

      <h2 className="fw-bolder mt-5 mb-4 display-4">The Exhibition Project</h2>
      <p>
        As part of the Grounding AI project, we aimed to turn technical and sometimes abstract scientific research into
        a tangible, walkable experience. Together with the Danish Museum of Science and Technology we have produced a
        100-square-meter map that allows visitors to physically explore the landscape of AI research, inviting them to
        reflect on and engage with the broader impacts of algorithms.
      </p>
      <p>
        The exhibition combines the physical map, a digital interface for exploring the data, and opinionated bots to
        spark debate.
      </p>
      <p>
        The exhibition’s first test run took place at Ballerup Library, fostering discussion, questions, and reflection
        on the role of AI in science and society.
      </p>
      <p>
        At the Danish Museum of Science and Technology, the Grounding AI map is presented alongside historical artifacts
        from the history of technology. These objects, selected in collaboration with museum curators, represent earlier
        technological systems that were more analog and required direct human intervention. This connection between past
        and present encourages visitors to reflect on the evolution of technology—from human-dependent machines to
        algorithm-driven systems—and the continuing role of AI in shaping our lives.
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

export const ProjectDA: FC = () => {
  return (
    <section>
      <h2 className="fw-bolder mb-4 display-4">Hvad laver algoritmer i videnskaben?</h2>
      <p>
        Vi taler meget om kunstig intelligens - mest om de spektakulære, revolutionerende, eller omvæltende aspekter
        teknologien. Men udover kontroverserne er kunstig intelligens allerede indlejret i hverdagen og i verden omkring
        os, hvor den er med til at forme beslutninger og processer på måder, som vi måske ikke engang lægger mærke til.
      </p>
      <p>
        Alt fra talegenkendelse, flyveledelse eller internetsikkerhed til analyser af tekvalitet, svømmeteknikker,
        hormoner, eller billeder af brystkræft - kunstig intelligens, maskinlæring og algoritmer er allerede allevegne
        omkring os. Nogle gange skaber det debat, oftest gør det ikke. Burde det? Vi inviterer dig til at gå på
        opdagelse i kortet over kunstig intelligens i den videnskabelige litteratur og hjælpe os med at svare på
        spørgsmålet.
      </p>

      <h2 className="fw-bolder mt-5 mb-4 display-4">Kunstig intelligens er alle vegne og ingen steder.</h2>
      <p>
        Debatten om kunstig intelligens fokuserer ofte på bestemte applikationer, for eksempel ChatGPT, og på kritiske
        spørgsmål om etik eller troværdighed. I realiteten spiller kunstig intelligens allerede en rolle i næsten alle
        aspekter af vores liv og dækker over en meget bredere vifte af teknologier, end vi måske er vant til at tænke
        på.
      </p>
      <p>
        Men hvad er det egentlig, vi i daglig tale kalder “kunstig intelligens”? Langt de fleste af de artikler, du ser
        på kortet, bruger ikke begrebet. Forskere kalder det typisk maskinlæring eller bruger navnet på en bestemt
        algoritme. Og en algoritme er i princippet bare nogle skridt, man følger i en bestemt situation. Det kunne for
        eksempel være en læge, der følger nogle skridt for at stille en diagnose. Hvis skridtene hjælper en computer med
        at lære noget fra data, så kalder vi det maskinlæring, og hvis det hjælper computeren med at handle på egen
        hånd, kalder vi det måske for et autonomt system. Der er fortsat livlig debat om, hvad der fortjener at blive
        kaldt kunstig intelligens. Kræver det, at computeren opfører sig på en måde, der kan forveksles med et menneske?
        Er det stadig kunstig intelligens, hvis det er begrænset til en konkret anvendelse? Eller kræver det at systemet
        tager selvstændige beslutninger?
      </p>

      <figure>
        <img src={`${import.meta.env.BASE_URL}/about/clusters-map.png`} alt="" />
        <figcaption className="font-monospace my-2">
          Kortet over kunstig intelligens med de forskellige tematiske klynger
        </figcaption>
      </figure>

      <h2 className="fw-bolder mt-5 mb-4 display-4">Udstillingsprojektet</h2>
      <p>
        Som en del af projektet Grounding AI har vi ønsket at gøre teknisk, og til tider meget abstrakt, videnskabelig
        forskning mere håndgribelig. Sammen Danmarks Tekniske Museum udstiller vi et 100 kvadratmeter stort kort, der
        lader besøgende udforske det videnskabelige landskab omkring kunstig intelligens.
      </p>
      <p>
        Udstillingen kombinerer det fysiske kort, en digital applikation der gør det muligt at søge i kortlægningen, og
        to politiske bots, der er skabt til at sætte gang i debatten.
      </p>
      <p>
        Udstillingens koncept har været afprøvet på Ballerup Bibliotek, hvor det skabte diskussion, spørgsmål og
        refleksion over AI’s rolle i samfundet.
      </p>
      <p>
        På Danmarks Tekniske Museum præsenteres Grounding AI-kortet sammen med historiske genstande fra teknologiens
        udvikling. Disse objekter, udvalgt i samarbejde med museets kuratorer, repræsenterer ældre teknologiske
        systemer, der var mere analoge og krævede direkte menneskelig indgriben. Sammenkoblingen af fortid og nutid
        opfordrer besøgende til at reflektere over teknologiens udvikling—fra menneskestyrede maskiner til
        algoritmedrevne systemer—og AI’s fortsatte rolle i at forme vores liv.
      </p>

      <figure className="images-multiple images-2">
        <img src={`${import.meta.env.BASE_URL}/about/floor-1.png`} alt="" />
        <img src={`${import.meta.env.BASE_URL}/about/floor-2.png`} alt="" />
        <figcaption className="font-monospace my-2">
          Billeder af arrangementet i Ballerup Bibliotek, hvor det store kort blev udstillet
        </figcaption>
      </figure>
    </section>
  );
};
