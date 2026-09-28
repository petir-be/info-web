import Icon from './Icon';
const photoPositions = {
  'Medinilla copelandii': '50% 0%',
  'Medinilla teysmannii': '100% 0%',
  'Melastoma malabathricum': '0% 100%',
  'Rubus rosifolius': '50% 100%',
  'Calamus sp.': '100% 100%',
  'Dioscorea hispida': '0% 0%'
};
export default function PlantCard({
  plant,
  onSelect,
  compact = false
}) {
  const pos = photoPositions[plant.scientific];
  return <button className={`plant-card ${compact ? 'compact' : ''}`} onClick={() => onSelect(plant)}>{pos ? <div className="plant-photo" role="img" aria-label={`${plant.scientific}, photographed in the study`} style={{
      backgroundPosition: pos
    }}><span className="photo-label">FROM THE FIELD</span></div> : <div className="plant-placeholder"><Icon name="sprout" size={48} /><span>{plant.family}</span></div>}<div className="plant-card-body"><div className="card-kicker"><span>{plant.family}</span><span className={`source-badge ${plant.source === 'Wild' ? 'wild' : ''}`}>{plant.source}</span></div><h3>{plant.local}</h3><i>{plant.scientific}</i><div className="plant-card-bottom"><span>{plant.parts}</span><span className="round-arrow"><Icon name="arrow" size={18} /></span></div></div></button>;
}
