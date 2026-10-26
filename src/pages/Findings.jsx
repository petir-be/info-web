import { useState } from 'react';
import PageIntro from '../components/PageIntro';
import StudyChart from '../components/StudyChart';
import { records, medicineCharts, medicinePdf, medicalNote } from '../data/catalog';
import { categories } from '../data/study';

export default function Findings({ onSelect }) {
  const [collection, setCollection] = useState(new URLSearchParams(window.location.hash.split('?')[1]).get('collection') === 'medicine' ? 'medicine' : 'food');
  const medicinal = collection === 'medicine';
  const plants = records.filter(p => p.collection === collection);
  const top = [...plants].sort((a,b) => b.ur - a.ur).slice(0,9);
  const families = Object.entries(plants.reduce((counts,p) => ({ ...counts, [p.family]: (counts[p.family] || 0) + 1 }), {})).sort((a,b) => b[1] - a[1]);
  function select(value) { setCollection(value); window.history.replaceState(null, '', `#findings?collection=${value}`); }
  return <section className="container page-section">
    <PageIntro eyebrow="KNOWLEDGE, IN PERSPECTIVE" title="What the research reveals">Explore patterns in plant diversity and traditional knowledge. Each study keeps its own methods, measures, and source notes.</PageIntro>
    <div className="collection-tabs" aria-label="Research collection"><button aria-pressed={!medicinal} onClick={() => select('food')}>Food study <span>2026</span></button><button aria-pressed={medicinal} onClick={() => select('medicine')}>Medicinal study <span>2017</span></button></div>
    <div className="research-summary">{(medicinal ? [['66','species reported'],['38','families reported'],['49%','leaves · Figure 3'],['35%','decoction · Figure 4']] : [['91','species reported'],['89','table entries'],['246','study participants'],['1,296','use reports']]).map(([n,label]) => <div key={label}><strong>{n}</strong><span>{label}</span></div>)}</div>
    <p className="source-note">{medicinal ? medicalNote : 'Food-use categories overlap. Use reports describe documented knowledge, not nutritional benefit or medical effectiveness.'}</p>
    <div className={`charts-grid ${medicinal ? 'medicine-charts' : ''}`} key={collection}>
      {medicinal ? medicineCharts.map(c => <StudyChart key={c.title} {...c} percent href={`${medicinePdf}#page=5`} />) : <>
        <StudyChart title="Most reported food plants" subtitle="Use reports (UR) · select a bar to explore a plant" rows={top.map(p => [p.local + ' · ' + p.scientific,p.ur,p])} source="Table 2 · pp. 140–143" href="/talaandig-food-ethnobotany.pdf#page=9" onSelect={onSelect} />
        <StudyChart title="The many roles of food plants" subtitle="Published species count by food category" rows={categories.map(c => [c.name,c.count])} source="Results · p. 138" href="/talaandig-food-ethnobotany.pdf#page=7" note="Categories overlap. These published aggregate counts differ from the species-level categories in Table 2." />
      </>}
      <StudyChart title="Families in the transcribed table" subtitle="Listed species per family · top 10" rows={families.slice(0,10)} source={medicinal ? 'Derived from Table 1 · pp. 359–361' : 'Derived from Table 2 · pp. 140–143'} href={medicinal ? `${medicinePdf}#page=2` : '/talaandig-food-ethnobotany.pdf#page=9'} note={medicinal ? 'The table places six species in Asteraceae; the narrative reports five. This chart counts the table records, retaining published family classifications.' : 'Counts are calculated from the 89 transcribed entries, rather than the reported total of 91 species.'} />
      <article className="study-chart reading-panel"><span className="eyebrow">READING THE RESEARCH</span><h2>{medicinal ? 'A record of traditional knowledge' : 'Understanding the measures'}</h2>{medicinal ? <><p>The medicinal study used informal interviews and guided plant walks with two key informants, including a tribal leader and a healer.</p><p>Its percentages describe patterns reported by the authors. They should not be treated as measures of treatment success or compared directly with the food study’s use-report totals.</p><p>Charts reproduce published percentages; the family chart is separately calculated from transcribed records.</p></> : [['UR','Use reports','Total reported uses of a species across food categories.'],['UV','Use value','The published index of relative importance based on reported uses.'],['NU','Number of uses','The number of food-use categories recorded for a species.'],['FL','Fidelity level','The reported percentage associating a plant with a particular use.']].map(([a,t,d]) => <div className="metric-definition" key={a}><span>{a}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}<a className="button button-outline" href={`#plants?collection=${collection}&view=table`}>Explore the plant table ↗</a></article>
    </div>
    <details className="data-note"><summary>Source notes and interpretation limits</summary>{medicinal ? <p>Figures 2–4 are reproduced as published. Figure 2 gives herbs as 21%, while its prose says 20%. Table 1 contains 66 entries, with some merged cells describing multi-species concoctions. Asteraceae has six table entries versus five in the narrative. The transcribed table contains 37 distinct family labels; the paper reports 38. Scientific names and family classifications are retained as printed, with word spacing restored; this is not a taxonomic revision.</p> : <p>The paper reports 246 participants, while published UV values do not align with the stated formula using 246 as the denominator. Table 2 lists 89 entries despite a reported total of 91 species. Some table classifications and narrative statements also differ. Values are retained as published; the original article remains the source of record.</p>}</details>
  </section>;
}
