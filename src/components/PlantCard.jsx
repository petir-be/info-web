import Icon from "./Icon";
import { counterpart, plantStudies } from "../data/catalog";
import PlantPhoto from "./PlantPhoto";

export default function PlantCard({ plant, onSelect, compact = false }) {
  return (
    <article className={`plant-card ${compact ? "compact" : ""}`}>
      <button className="plant-card-open" onClick={() => onSelect(plant)}>
        <PlantPhoto plant={plant} />
        <div className="plant-card-body">
          <div className="card-kicker">
            <span>{plant.family}</span>
            <span className="collection-labels">
              {plantStudies(plant).map((study) => (
                <span
                  key={study.id}
                  className={`collection-badge ${study.collection}`}
                >
                  {study.collection === "medicine" ? "Medicinal" : "Food"}
                </span>
              ))}
            </span>
          </div>
          <h3>{plant.local}</h3>
          <i>{plant.scientific}</i>
          <div className="plant-card-bottom">
            <span>
              {counterpart(plant) ? "Documented in both studies" : plant.parts}
            </span>
            <span className="round-arrow">
              <Icon name="arrow" size={18} />
            </span>
          </div>
        </div>
      </button>
      {/* <PhotoCredit photo={plantImage(plant)} /> */}
    </article>
  );
}
