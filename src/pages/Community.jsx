import PageIntro from "../components/PageIntro";
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
      <div className="editorial-grid">
        <aside className="place-panel">
          <span className="eyebrow">BUKIDNON, PHILIPPINES</span>
          <h2>A place of shared roots</h2>
          <p>
            Sitio Tandacol · Barangay Lilingayon
            <br />
            Valencia City · Mindanao
          </p>
          <a
            className="text-link"
            href="/talaandig-food-ethnobotany.pdf#page=3"
            target="_blank"
            rel="noreferrer"
          >
            View the original study map ↗
          </a>
        </aside>
        <article>
          <span className="eyebrow">IN THE BUKIDNON UPLANDS</span>
          <h2>A landscape that sustains</h2>
          <p>
            Sitio Tandacol lies in Barangay Lilingayon, Valencia City, Bukidnon.
            The study describes elevations of 1,312–1,900 metres above sea
            level.
          </p>
          <p>
            Community members belong to the Bayawon Lucday Lungayan Pendonay
            Tandacol (Talaandig) Tribal Association, Inc. The paper describes
            their protection of forests within an ancestral domain claim of
            4,257.42 hectares.
          </p>
          
        </article>
      </div>
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
