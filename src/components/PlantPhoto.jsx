import { useState } from 'react';
import { plantImage } from '../data/catalog';
import Icon from './Icon';

export default function PlantPhoto({ plant, large = false }) {
  const [failed, setFailed] = useState(false);
  const photo = plantImage(plant);
  if (!photo || failed) return <div className="plant-photo photo-empty"><Icon name="sprout" size={40} /><span>Photo unavailable</span></div>;
  return <div className={`plant-photo ${large ? 'large-photo' : ''}`}><img
    src={photo.src} alt={`Supplied image of ${plant.local} (${plant.scientific})`}
    width="480" height="360" loading={large ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)}
  /></div>;
}
