import { useState } from 'react';
import PageIntro from '../components/PageIntro';
import PlantCard from '../components/PlantCard';
import { filterPlants, plantImage } from '../data/catalog';

export default function Gallery({ onSelect }) {
  const [collection, setCollection] = useState('');
  const photos = filterPlants({ collection }).filter(p => plantImage(p));
  return <section className="container page-section"><PageIntro eyebrow="THE VISUAL COLLECTION" title="A closer look at the plants">Explore the supplied photographs and open a plant to discover its documented uses. Images illustrate the collection; they are not a field-identification guide.</PageIntro><div className="collection-tabs" aria-label="Photo collection">{[['','All photographs'],['food','Food'],['medicine','Medicinal']].map(([v,l]) => <button key={v} aria-pressed={collection === v} onClick={() => setCollection(v)}>{l}</button>)}</div><p role="status" className="atlas-caption">{photos.length} illustrated plants. Shared food and medicinal species appear once.</p><h2 className="sr-only">Plant photographs</h2><div className="plant-grid">{photos.map(p => <PlantCard key={p.id} plant={p} onSelect={onSelect} />)}</div><p className="source-note">Image credits link to the source pages supplied in the project spreadsheet, including the original publishers behind Google share links. Individual photographers and licenses are shown where verified. Unresolved sources remain labeled; existing watermarks are retained.</p></section>;
}
