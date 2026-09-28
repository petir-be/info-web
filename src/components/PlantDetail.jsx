import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { categories } from "../data/study";
export default function PlantDetail({
  plant,
  onClose
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (plant) ref.current?.showModal();else ref.current?.close();
  }, [plant]);
  return <dialog ref={ref} className="plant-dialog" aria-labelledby="plant-title" onClose={onClose} onClick={e => {
    if (e.target === ref.current) onClose();
  }}>
      {plant && <>
          <button autoFocus className="dialog-close" onClick={onClose} aria-label="Close plant details">
            <Icon name="close" />
          </button>
          <span className="eyebrow">
            {plant.family} · {plant.source}
          </span>
          <h2 id="plant-title">{plant.local}</h2>
          <p className="scientific">{plant.scientific}</p>
          <dl className="detail-grid">
            <div>
              <dt>Life form</dt>
              <dd>{plant.form}</dd>
            </div>
            <div>
              <dt>Reported edible parts</dt>
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
          </dl>
          <h3>Documented food uses</h3>
          <ul className="use-list">
            {plant.categories.map(code => <li key={code}>
                {categories.find(c => c.code === code)?.name || code}
              </li>)}
          </ul>
          <p className="small">
            Fidelity level, as published: {plant.fidelity}
          </p>
          <p className="source-note">
            Transcribed from Table 2, pp. 140–143. These are documented
            community uses, not identification or preparation instructions. Some
            plants require specialized processing.
          </p>
          <a className="text-link" href="/talaandig-food-ethnobotany.pdf#page=9" target="_blank" rel="noreferrer">
            View original table <Icon name="arrow" size={16} />
          </a>
        </>}
    </dialog>;
}
