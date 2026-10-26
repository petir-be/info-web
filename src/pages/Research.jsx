import PageIntro from "../components/PageIntro";
import { citation } from "../data/study";
import PhotoCredit from "../components/PhotoCredit";
import images from "../data/images.json";
import { findPlant, medicineCitation, medicinePdf } from "../data/catalog";

const studies = [
  {
    name: "Food ethnobotany",
    year: "2026",
    collection: "food",
    title:
      "Quantitative Analysis on Food Ethnobotany of Talaandig Indigenous People in Sitio Tandacol, Barangay Lilingayon, Valencia City, Philippines",
    authors:
      "Ivy C. Adlaon · Fulgent P. Coritico · Florfe M. Acma · Dave P. Buena Vista · Victor B. Amoroso",
    journal: "Journal of Tropical Biology and Conservation · 23 · pp. 132–149",
    pdf: "/talaandig-food-ethnobotany.pdf",
    citation,
    method:
      "Semi-structured interviews with 246 adult residents, guided plant walks, taxonomic verification, and analysis of food-use categories and ethnobotanical indices.",
    rights:
      "The food article is licensed under Creative Commons Attribution–NonCommercial 4.0.",
  },
  {
    name: "Medicinal ethnobotany",
    year: "2017",
    collection: "medicine",
    title:
      "Ethnobotany of medicinal plants used by the Talaandig Tribe in Brgy. Lilingayon, Valencia City, Bukidnon, Philippines",
    authors:
      "Nyzar Mabeth O. Odchimar · Olga M. Nuñeza · Mylene M. Uy · W. T. P. S. K. Senarath",
    journal:
      "Asian Journal of Biological and Life Sciences · 6(1) · pp. 358–364",
    pdf: medicinePdf,
    citation: medicineCitation,
    method:
      "Informal key-informant interviews with Datu George T. Antihao and Hilgiy Oculares, supported by walks through plant habitats. The paper documents 66 species, plant parts, traditional uses, and preparation/application methods.",
    rights:
      "No reuse license has been verified for the medicinal article. Attribution is provided separately from the food article’s license.",
  },
];
export default function Research() {
  return (
    <section className="container page-section">
      <PageIntro
        eyebrow="RETURN TO THE SOURCE"
        title="Two studies. Shared roots."
      >
        The original publications remain the source of record. Explore their
        methods, read the full PDFs, and cite the researchers behind the atlas.
      </PageIntro>
      {studies.map((study) => (
        <article className="source-study" key={study.collection}>
          <div className={`source-year ${study.collection}`}>
            <span>{study.name}</span>
            <strong>{study.year}</strong>
            <span>RESEARCH ARTICLE</span>
          </div>
          <div>
            <span className="eyebrow">{study.journal}</span>
            <h2>{study.title}</h2>
            <p>{study.authors}</p>
            <div className="paper-actions">
              <a
                className="button button-green"
                href={study.pdf}
                target="_blank"
                rel="noreferrer"
              >
                Read full paper ↗
              </a>
              <a className="button button-outline" href={study.pdf} download>
                Download PDF
              </a>
              <a
                className="text-link"
                href={`#findings?collection=${study.collection}`}
              >
                Explore findings ↗
              </a>
            </div>
            <h3>Research approach</h3>
            <p>{study.method}</p>
            <details>
              <summary>Citation & attribution</summary>
              <p>{study.citation}</p>
            </details>
          </div>
        </article>
      ))}
      <div className="two-columns">
        <article>
          <span className="eyebrow">PEOPLE BEHIND THE KNOWLEDGE</span>
          <h2>Documented with consent</h2>
          <p>
            Both publications describe consent and community participation. The
            food study acknowledges the Talaandig community of Sitio Tandacol,
            Barangay Lilingayon officials, DOST-STRAND, and its contributors.
            The medicinal study acknowledges DOST-ASTHRDP and DOST-PCIIERD
            funding support.
          </p>
          <p>
            This educational adaptation is not an official community website or
            a claim of community endorsement.
          </p>
        </article>
        <article className="tinted-panel">
          <span className="eyebrow">ABOUT THE PHOTOGRAPHS</span>
          <h2>Images with their own provenance</h2>
          <p>
            Photo credits follow the image links in the supplied spreadsheet.
            Google share links were traced to their original publishers. Named
            image credits and licenses are shown where verified; a source-site
            link does not identify an individual photographer or grant reuse
            permission.
          </p>
        </article>
      </div>
      <details className="image-sources">
        <summary>
          Image sources and credits ({Object.keys(images).length})
        </summary>
        <p>
          Credits describe the image actually displayed, including photographs
          shared between food and medicinal profiles. Unresolved sources are
          labeled explicitly.
        </p>
        <ul className="image-credits-list">
          {Object.entries(images).map(([id, photo]) => (
            <li key={id}>
              <strong>{findPlant(id)?.local}</strong>
              <p className="scientific">{findPlant(id)?.scientific}</p>
              <PhotoCredit photo={photo} detailed />
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
