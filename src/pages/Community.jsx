import PageIntro from "../components/PageIntro";
import PhotoCredit from "../components/PhotoCredit";
import { medicinePdf } from "../data/catalog";

const celebrationCredit = {
  sourceUrl:
    "https://peacebuilderscommunity.org/2022/10/the-spirit-of-magbabaya-was-there-during-the-talaandig-day-festivities/",
  credit: "Source: PeaceBuilders Community, Inc.",
};

export default function Community() {
  return (
    <section className="container page-section">
      <PageIntro
        eyebrow="PEOPLE, PLACE & SHARED KNOWLEDGE"
        title="The Talaandig of Sitio Tandacol"
      >
        A community whose food traditions connect cultivated gardens, forest
        resources, and knowledge passed between generations.
      </PageIntro>
      <section
        className="community-celebration"
        aria-labelledby="community-celebration-title"
      >
        <span className="eyebrow">PEOPLE AT THE HEART OF LIVING HERITAGE</span>
        <h2 id="community-celebration-title">Together in celebration.</h2>
        <p className="community-photo-context">
          Talaandig Day · Bukidnon · These photographs from PeaceBuilders
          Community’s account of the festivities offer a wider view of community
          life beyond the Sitio Tandacol studies.
        </p>
        <div className="community-photo-grid">
          <figure>
            <img
              src="/community/ip-people-3.webp"
              alt="Community members and visitors gathered outside the Hall of Peace, many wearing red and black embroidered clothing"
              width="1600"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <PhotoCredit photo={celebrationCredit} />
            </figcaption>
          </figure>
          <figure>
            <img
              src="/community/ip-people-2.webp"
              alt="Four people posing together inside a wooden hall, wearing embroidered clothing and beaded accessories"
              width="870"
              height="489"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <PhotoCredit photo={celebrationCredit} />
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="editorial-grid">
        <aside className="place-panel">
          <article>
            <span className="eyebrow">IN THE BUKIDNON UPLANDS</span>
            <h2>A landscape that sustains</h2>
            <p>
              Sitio Tandacol lies in Barangay Lilingayon, Valencia City,
              Bukidnon. The study describes elevations of 1,312–1,900 metres
              above sea level.
            </p>
            <p>
              Community members belong to the Bayawon Lucday Lungayan Pendonay
              Tandacol (Talaandig) Tribal Association, Inc. The paper describes
              their protection of forests within an ancestral domain claim of
              4,257.42 hectares.
            </p>
            <a
              className="text-link"
              href="/talaandig-food-ethnobotany.pdf#page=3"
              target="_blank"
              rel="noreferrer"
            >
              View the original study map ↗
            </a>
          </article>
        </aside>
        <figure className="community-study-map">
          <a
            href="/community/medicinal-study-figure-1.png"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the extracted Figure 1 map in a new tab"
          >
            <img
              src="/community/medicinal-study-figure-1.png"
              alt="Figure 1 locator map showing the Philippines, Bukidnon, Valencia City, and Barangay Lilingayon, connected by red arrows"
              width="305"
              height="281"
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>
            <PhotoCredit
              photo={{
                sourceUrl: `${medicinePdf}#page=1`,
                credit: "Source: Ethnobotany of medicinal plants · Figure 1",
              }}
            />
          </figcaption>
        </figure>
      </div>
      <section
        className="community-map-section"
        aria-labelledby="community-map-title"
      ></section>
      <p className="atlas-caption">
        The community statistics below refer to the 2026 food study in Sitio
        Tandacol.
      </p>
      <div className="community-stats">
        <div>
          <strong>246</strong>
          <span>adult participants</span>
        </div>
        <div>
          <strong>85.4%</strong>
          <span>reported farming as occupation</span>
        </div>
        <div>
          <strong>51.66</strong>
          <span>mean participant age, years</span>
        </div>
        <div>
          <strong>35%</strong>
          <span>aged 61 and above</span>
        </div>
      </div>
      <div className="two-columns">
        <article>
          <span className="eyebrow">EVERYDAY RESILIENCE</span>
          <h2>From home gardens to forests</h2>
          <p>
            Home gardens complement cultivated crops and gathered forest foods.
            The study highlights sweet potato, cassava, taro, corn, banana, and
            a variety of fruits as part of this diverse food system.
          </p>
          <p>
            It describes local uses of rattan pith and fruit, jackfruit at
            different stages of ripeness, and corn as an important cereal in the
            uplands.
          </p>
        </article>
        <article className="tinted-panel">
          <span className="eyebrow">KNOWLEDGE BELONGS TO PEOPLE</span>
          <h2>Documented with consent</h2>
          <p>
            The researchers obtained prior informed consent from the tribal
            chieftain and participants, university ethics approval, and a
            collection permit. Interviews were conducted in Cebuano and
            supported by guided plant walks.
          </p>
          <p>
            This website is an educational adaptation of the publication, not an
            official community website or a claim of community endorsement.
          </p>
        </article>
      </div>

      <section className="tinted-panel medicinal-context">
        <span className="eyebrow">ANOTHER ACCOUNT OF LOCAL KNOWLEDGE</span>
        <h2>Medicinal traditions in Lilingayon</h2>
        <p>
          The 2017 medicinal study documents interviews and guided plant walks
          with Datu George T. Antihao and Hilgiy Oculares. It records 66 species
          and describes how plant knowledge is passed between generations. Its
          methods and participants are distinct from the food study above.
        </p>
        <a className="text-link" href="#findings?collection=medicine">
          Explore the medicinal study ↗
        </a>
      </section>
    </section>
  );
}
