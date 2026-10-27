import PageIntro from "../components/PageIntro";
import Icon from "../components/Icon";

const team = [
  "Leane Jean P. Balucas",
  "Enzo Roniel R. Concepcion",
  "Xyra Jocel N. Cruz",
  "Rain G. De Leon",
  "Ronilyn F. Gula",
  "Paulo R. Loquellano",
  "Uniline L. Mañebo",
  "Louise Francine C. Manarang",
  "Juliana Beatrice A. Raytana",
  "Josef Karol L. Reyes",
  "Nickholai Angelo Sacdalan",
  "Ashley Tricia Pauline S. Santos",
  "Rizchelle Dianne G. Tejero",
  "Enrico C. Villanueva",
];

export default function About() {
  return (
    <section className="container page-section about-page">
      <PageIntro
        eyebrow="KNOWLEDGE · PLANTS · HERITAGE"
        title="About Kalaki Pamulahen"
      >
        An educational atlas exploring the connection between plant knowledge,
        people, and the living heritage of the Talaandig of Lilingayon,
        Bukidnon.
      </PageIntro>
      <section className="about-section" aria-labelledby="about-name-title">
        <span className="eyebrow">THE MEANING BEHIND THE NAME</span>
        <h2 id="about-name-title">Knowledge takes root.</h2>
        <dl className="about-name-meaning">
          <div>
            <dt>Kalaki</dt>
            <dd>Knowledge</dd>
          </div>
          <div>
            <dt>Pamulahen</dt>
            <dd>Plant</dd>
          </div>
        </dl>
        <p>
          Kalaki Pamulahen brings these two meanings together. Through plant
          profiles, community context, and published research, the project
          shares the food and medicinal plant knowledge documented in
          Lilingayon.
        </p>
        <a className="text-link" href="#community">
          Meet the community <Icon name="arrow" size={17} />
        </a>
      </section>

      <section
        className="tinted-panel about-section"
        aria-labelledby="about-sources-title"
      >
        <span className="eyebrow">GROUNDED IN RESEARCH</span>
        <h2 id="about-sources-title">Learning from documented knowledge.</h2>
        <p>
          This website draws on the food ethnobotany study by Adlaon and
          colleagues (2026) and the medicinal ethnobotany study by Odchimar and
          colleagues (2017). The studies, community knowledge holders, and image
          sources are credited throughout the atlas.
        </p>
        <a className="text-link" href="#research">
          Read the sources <Icon name="arrow" size={17} />
        </a>
      </section>
      <section className="about-section" aria-labelledby="about-team-title">
        <span className="eyebrow">THE PEOPLE BEHIND THE PROJECT</span>
        <h2 id="about-team-title">Our team</h2>
        <ul className="about-team">
          {team.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
