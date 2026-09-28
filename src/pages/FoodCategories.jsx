import PageIntro from '../components/PageIntro';
import Icon from '../components/Icon';
import { categories } from '../data/study';
export default function FoodCategories() {
  return <section className="container page-section"><PageIntro eyebrow="NINE FOOD USE CATEGORIES" title="Many plants. Many purposes.">The study groups food uses using categories adapted from the Food and Agriculture Organization. A single plant may serve several roles.</PageIntro><div className="category-grid">{categories.map((c, i) => <a className="category-card" key={c.code} href={`#plants?category=${c.code}`}><span className="eyebrow">0{i + 1} / FOOD USE</span><div className="category-count">{c.count}<span>species reported</span></div><h2>{c.name}</h2><p>{c.description}</p><div className="category-bar"><span style={{
            width: `${c.percent}%`
          }} /></div><div className="category-bottom"><span>{c.percent}% of reported species</span><Icon name="arrow" size={18} /></div></a>)}</div><p className="source-note">Counts and percentages are reproduced from the results on p. 138. Categories overlap and do not sum to 91. These aggregate counts differ from the species-level classifications in Table 2; explorer links show the table entries in each category.</p></section>;
}
