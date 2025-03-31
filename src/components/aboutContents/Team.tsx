import { FC } from "react";

const TEAM_MEMBERS = [
  {
    name: "Anders Munk",
    title: "DTU, ECHOlab",
    linkedin: "https://www.linkedin.com/in/akmunk/",
    img: "anders.png",
  },
  {
    name: "Mathieu Jacomy",
    title: "AAU, Tantlab, ADD",
    linkedin: "https://www.linkedin.com/in/mathieu-jacomy-a38a552a/",
    img: "mathieu.png",
  },
  {
    name: "Matilde Ficozzi",
    title: "AAU, Tantlab, ADD, RUG",
    linkedin: "https://www.linkedin.com/in/matilde-ficozzi/",
    img: "matilde.png",
  },
  {
    name: "Dario Rodighiero",
    title: "RUG",
    linkedin: "https://www.linkedin.com/in/dariorodighiero/",
    img: "dario.png",
  },
  {
    name: "Johan Søltoft",
    title: "DTU, ECHOlab",
    linkedin: "https://www.linkedin.com/in/johanirving/",
    img: "johan.png",
  },
  {
    name: "Ainoa Pubill",
    title: "DTU, ECHOlab",
    linkedin: "https://www.linkedin.com/in/ainoa-pubill-174186161/",
    img: "ainoa.png",
  },
  {
    name: "Sarah Feldes",
    title: "DTU, ECHOlab",
    linkedin: "https://www.linkedin.com/in/sarahfeldes/",
    img: "sarah.png",
  },
  {
    name: "Barbara Carreras",
    title: "DTU, ECHOlab",
    linkedin: "https://www.linkedin.com/in/barbaraninocarreras/",
    img: "barbara.png",
  },
];

const AFFILIATIONS = [
  { name: "Aalborg University", link: "https://www.en.aau.dk/", img: "aau.png" },
  { name: "TANTlab", link: "https://www.en.culture.aau.dk/research/research-groups/tantlab", img: "tantlab.png" },
  { name: "Technical University of Denmark", link: "https://www.dtu.dk/", img: "dtu.png" },
  { name: "ECHOlab", link: "https://www.linkedin.com/company/hci-at-dtu/?originalSubdomain=dk", img: "echolab.png" },
  { name: "Universoty of Groningen", link: "https://www.rug.nl/?lang=en", img: "rug.png" },
  { name: "Algorithms, Data and Democracy", link: "https://algorithms.dk/", img: "add.png" },
];

export const Team: FC = () => {
  return (
    <section>
      <h2 className="fw-bolder mb-4 display-4">Who are we</h2>

      <h3 className="fw-bolder mb-4 display-5">Project Team</h3>
      <section className="row">
        {TEAM_MEMBERS.map(({ name, title, linkedin, img }) => (
          <div key={name} className="col-6 col-sm-4 col-lg-3 mb-5">
            <img src={`${import.meta.env.BASE_URL}/team/${img}`} alt="" className="w-100" />
            <h4>{name}</h4>
            <div>{title}</div>
            <div>
              <a href={linkedin}>LinkedIn</a>
            </div>
          </div>
        ))}
      </section>

      <h3 className="fw-bolder mb-4 display-5">Affiliations</h3>
      <section className="row align-items-center">
        {AFFILIATIONS.map(({ name, link, img }) => (
          <div key={name} className="col-12 col-sm-6 col-lg-4 mb-5">
            <a href={link}>
              <img src={`${import.meta.env.BASE_URL}/organisations/${img}`} alt={name} className="w-75 m-auto" />
            </a>
          </div>
        ))}
      </section>
    </section>
  );
};
