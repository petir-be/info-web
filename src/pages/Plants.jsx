import { useState, useDeferredValue } from 'react';
import PageIntro from '../components/PageIntro';
import PlantCard from '../components/PlantCard';
import Icon from '../components/Icon';
import plants from '../plants.json';
import { categories } from '../data/study';
export default function Plants({
  onSelect
}) {
  const initial = new URLSearchParams(window.location.hash.split('?')[1]).get('category') || '';
  const [search, setSearch] = useState(''),
    [source, setSource] = useState(''),
    [category, setCategory] = useState(initial),
    [sort, setSort] = useState('name');
  const query = useDeferredValue(search.toLowerCase().trim());
  const result = plants.filter(p => (!source || p.source === source) && (!category || p.categories.includes(category)) && `${p.local} ${p.scientific} ${p.family} ${p.parts}`.toLowerCase().includes(query)).sort((a, b) => sort === 'ur' ? b.ur - a.ur : a.local.localeCompare(b.local));
  const reset = () => {
    setSearch('');
    setSource('');
    setCategory('');
    setSort('name');
  };
  return <section className="container page-section"><PageIntro eyebrow="A LIVING PLANT LIBRARY" title="Plant explorer">Explore the wild and cultivated food plants documented in Sitio Tandacol. Search by local name, scientific name, family, or plant part.</PageIntro><div className="filter-panel"><div className="search-field"><label htmlFor="plant-search">Find a plant</label><div><Icon name="search" /><input id="plant-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Try Kamote, Medinilla, or leaves…" /></div></div><label>Plant source<select value={source} onChange={e => setSource(e.target.value)}><option value="">All sources</option><option>Wild</option><option>Cultivated</option></select></label><label>Food category<select value={category} onChange={e => setCategory(e.target.value)}><option value="">All food uses</option>{categories.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}</select></label><label>Sort by<select value={sort} onChange={e => setSort(e.target.value)}><option value="name">Local name A–Z</option><option value="ur">Most use reports</option></select></label></div><div className="results-heading"><p role="status">Showing <b>{result.length}</b> of {plants.length} table entries</p><button className="text-button" onClick={reset}>Reset filters</button></div><p className="source-note">The paper reports 91 species overall; Table 2 contains 89 listed entries. This explorer reproduces the table without inventing missing records. Names, parts, and classifications are retained as published.</p>{result.length ? <div className="plant-grid">{result.map(p => <PlantCard key={p.scientific} plant={p} onSelect={onSelect} compact />)}</div> : <div className="empty-state"><Icon name="search" size={36} /><h2>No plants found</h2><p>Try another name or clear the filters.</p><button className="button button-green" onClick={reset}>Show all plants</button></div>}</section>;
}
