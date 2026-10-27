import Icon from "../components/Icon";
import PlantHero from "../components/PlantHero";
import PlantCard from "../components/PlantCard";
import PhotoCredit from "../components/PhotoCredit";
import CommunityPhoto from "../components/CommunityPhoto";
import { plantImage, findPlant } from "../data/catalog";

export default function Home({ onSelect }) {
  return (
    <>
      <PlantHero />
      <section className="container community-highlight" aria-labelledby="community-highlight-title">
        <CommunityPhoto />
        <div>
          <span className="eyebrow">WHERE CULTURE TAKES ROOT</span>
          <h2 id="community-highlight-title">
            More than plants.
            <br />A way of life.
          </h2>
          <p>
            In the uplands of Bukidnon, plants connect cultivated gardens,
            forest resources, and generations of shared knowledge. Explore two
            research accounts of Talaandig food and medicinal traditions.
          </p>
          <a className="text-link" href="#community">
            Meet the community <Icon name="arrow" size={17} />
          </a>
        </div>
      </section>
      <section
        id="study-highlights"
        className="container collection-section"
        tabIndex={-1}
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              TWO COLLECTIONS. ONE LIVING HERITAGE.
            </span>
            <h2>From nourishment to traditional care.</h2>
          </div>
          <p>
            Explore the knowledge documented
            <br />
            in Lilingayon, Bukidnon.
          </p>
        </div>
        <div className="collection-grid">
          <div className="collection-tile">
            <a
              className="collection-cover food-cover"
              href="#plants?collection=food"
            >
              <img
                src="/plants/food-28-960.webp"
                alt="Heart-shaped sweet potato leaves"
                width="960"
                height="640"
                loading="lazy"
              />
              <div>
                <span className="eyebrow">01 / FOOD ETHNOBOTANY</span>
                <h2>Plants that nourish</h2>
                <p>
                  Wild and cultivated foods, from familiar staples to forest
                  fruits.
                </p>
                <span className="cover-bottom">
                  89 table entries · 9 food-use groups{" "}
                  <span>Explore food plants ↗</span>
                </span>
              </div>
            </a>
            <PhotoCredit photo={plantImage(findPlant("food-28"))} />
          </div>
          <div className="collection-tile">
            <a
              className="collection-cover medicine-cover"
              href="#plants?collection=medicine"
            >
              <img
                src="/plants/medicine-9-960.webp"
                alt="Yellow wild sunflower blossoms"
                width="960"
                height="640"
                loading="lazy"
              />
              <div>
                <span className="eyebrow">02 / MEDICINAL ETHNOBOTANY</span>
                <h2>Plants in traditional care</h2>
                <p>
                  A documented relationship between local plants and healing
                  knowledge.
                </p>
                <span className="cover-bottom">
                  66 species · 38 reported families{" "}
                  <span>Explore medicinal plants ↗</span>
                </span>
              </div>
            </a>
            <PhotoCredit photo={plantImage(findPlant("medicine-9"))} />
          </div>
        </div>
        <p className="atlas-caption">
          Food: Adlaon et al. (2026), 91 species reported and 89 table entries.
          Medicinal: Odchimar et al. (2017). Collections may share species.
        </p>
      </section>
      <section className="featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">LEAF BY LEAF</span>
              <h2>Meet the plants</h2>
            </div>
            <a className="text-link" href="#plants">
              Browse the atlas <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="featured-grid">
            {["food-28", "medicine-30", "food-58"].map((id) => (
              <PlantCard key={id} plant={findPlant(id)} onSelect={onSelect} />
            ))}
          </div>
          <p className="photo-credit">
            Photo credits link to the supplied source pages. Named photographers
            are shown where verified.
          </p>
        </div>
      </section>
      <section className="container research-preview">
        <div>
          <span className="eyebrow">SEE THE PATTERNS</span>
          <h2>
            Stories behind
            <br />
            the numbers.
          </h2>
          <p>
            Which parts are used? How are plants represented across families?
            Explore the published findings alongside accessible tables and
            source notes.
          </p>
          <a
            className="button button-green"
            href="#findings?collection=medicine"
          >
            Explore research & findings ↗
          </a>
        </div>
        <div className="preview-stat">
          <strong>
            49<span>%</span>
          </strong>
          <h3>Leaves in traditional use</h3>
          <p>Share shown in the medicinal study’s plant-parts figure.</p>
          <span className="small">
            Figure 3 · Odchimar et al. (2017), p. 362
          </span>
        </div>
      </section>
      <section className="container">
        <div className="heritage-banner">
          <div>
            <span className="eyebrow">KNOWLEDGE WORTH KEEPING</span>
            <h2>
              Rooted in community.
              <br />
              Recorded for understanding.
            </h2>
            <p>
              Read the research, meet its context,
              <br className="desktop-break" /> and follow every record back to
              its source.
            </p>
          </div>
          <a href="#research" className="button button-white">
            Read the original studies ↗
          </a>
        </div>
      </section>
    </>
  );
}
