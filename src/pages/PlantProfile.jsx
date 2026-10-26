import PlantPhoto from "../components/PlantPhoto";
import PhotoCredit from "../components/PhotoCredit";
import PlantCard from "../components/PlantCard";
import {
  findPlant,
  counterpart,
  catalogPlants,
  mergedPlant,
  plantImage,
  sourceLink,
  medicalNote,
  describePreparation,
} from "../data/catalog";
import { categories } from "../data/study";
import { useEffect } from "react";

function StudyRecord({ plant }) {
  const medicinal = plant.collection === "medicine";
  return (
    <section className="profile-study">
      <span className={`collection-badge ${plant.collection}`}>
        {medicinal ? "Medicinal · 2017" : "Food · 2026"}
      </span>
      <h2>
        {medicinal ? "Traditionally reported uses" : "Documented food uses"}
      </h2>
      <p>
        Recorded as <b>{plant.local}</b> · <i>{plant.scientific}</i> ·{" "}
        {plant.family}
      </p>
      {medicinal ? (
        <>
          <p className="source-note">{medicalNote}</p>
          <div className="reported-uses">
            {plant.reportedUses.map((u, i) => (
              <article key={i}>
                <h3>{u.part}</h3>
                <p>{u.use}</p>
                <p className="small">
                  Reported method: {describePreparation(u.preparation)}
                </p>
              </article>
            ))}
          </div>
        </>
      ) : (
        <>
          <dl className="detail-grid">
            <div>
              <dt>Source / growth form</dt>
              <dd>
                {plant.source} · {plant.form}
              </dd>
            </div>
            <div>
              <dt>Edible parts</dt>
              <dd>{plant.parts}</dd>
            </div>
            <div>
              <dt>Use reports (UR)</dt>
              <dd>{plant.ur}</dd>
            </div>
            <div>
              <dt>Use value (UV)</dt>
              <dd>{plant.uv}</dd>
            </div>
            <div>
              <dt>Number of uses (NU)</dt>
              <dd>{plant.uses}</dd>
            </div>
            <div>
              <dt>Fidelity level (FL)</dt>
              <dd>{plant.fidelity}</dd>
            </div>
          </dl>
          <ul className="use-list">
            {plant.categories.map((code) => (
              <li key={code}>
                {categories.find((c) => c.code === code)?.name || code}
              </li>
            ))}
          </ul>
        </>
      )}
      <a
        className="text-link"
        href={sourceLink(plant)}
        target="_blank"
        rel="noreferrer"
      >
        {medicinal
          ? `Table 1 · p. ${357 + plant.page} · Odchimar et al. (2017)`
          : "Table 2 · pp. 140–143 · Adlaon et al. (2026)"}{" "}
        ↗
      </a>
    </section>
  );
}

export default function PlantProfile({ onSelect }) {
  const params = new URLSearchParams(window.location.hash.split("?")[1]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const plant = mergedPlant(findPlant(params.get("id")));
  if (!plant)
    return (
      <section className="container page-section">
        <h1>Plant not found</h1>
        <a href="#plants">Return to the explorer</a>
      </section>
    );
  const other = counterpart(plant);
  const photo = plantImage(plant);
  const from = params.get("from") || "#plants";
  const back = /^#(plants|home|gallery|findings)(\?|$)/.test(from)
    ? from
    : "#plants";
  const related = catalogPlants
    .filter(
      (p) =>
        p.collection === plant.collection &&
        p.family === plant.family &&
        p.id !== plant.id,
    )
    .slice(0, 3);

  return (
    <section className="container page-section profile-page">
      <a className="text-link profile-back" href={back}>
        ← Back to {back.startsWith("#plants") ? "your results" : "exploring"}
      </a>
      <div className="profile-intro results-enter">
        <figure>
          <PlantPhoto key={plant.id} plant={plant} large />
          <figcaption>
            {photo ? (
              <PhotoCredit photo={photo} detailed />
            ) : (
              "No matched photograph available."
            )}
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow" style={{fontSize:14}}>{plant.family} / FAMILY</span>
          <h1>{plant.local}</h1>
          <p className="scientific">{plant.scientific}</p>
          <div className="profile-badges">
            <span className={`collection-badge ${plant.collection}`}>
              {plant.collection === "food" ? "Food plant" : "Medicinal plant"}
            </span>
            {other && (
              <span className={`collection-badge ${other.collection}`}>
                Also documented for{" "}
                {other.collection === "food" ? "food" : "medicinal use"}
              </span>
            )}
          </div>
          <p>
            A record of plant knowledge from Lilingayon, Bukidnon. Explore the
            documented uses and the original research below.
          </p>
          <a
            className="button button-outline"
            href={sourceLink(plant)}
            target="_blank"
            rel="noreferrer"
          >
            Read the source ↗
          </a>
        </div>
      </div>
      <div className="profile-records">
        <StudyRecord plant={plant} />
        {other && <StudyRecord plant={other} />}
      </div>
      {related.length > 0 && (
        <section className="related-plants">
          <span className="eyebrow">CONTINUE EXPLORING</span>
          <h2>More from {plant.family}</h2>
          <div className="plant-grid">
            {related.map((p) => (
              <PlantCard key={p.id} plant={p} onSelect={onSelect} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
