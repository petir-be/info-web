import { useEffect, useRef, useState } from 'react';

export default function StudyChart({ title, subtitle, rows, source, href, note, percent = false, onSelect }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [descending, setDescending] = useState(true);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const max = percent ? 100 : Math.max(...rows.map(r => r[1]), 1);
  const sorted = [...rows].sort((a,b) => descending ? b[1] - a[1] : a[1] - b[1]);
  function download() {
    const csv = [['Category', percent ? 'Percent' : 'Count'], ...rows.map(r => r.slice(0,2))].map(row => row.map(v => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.csv`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <article ref={ref} className={`study-chart ${visible ? 'chart-visible' : ''}`}>
    <h2>{title}</h2><p className="chart-subtitle">{subtitle}</p>
    <div className="study-bars" aria-label={subtitle}>{rows.map(([label, value, plant]) => {
      const content = <><span className="study-bar-label">{label}</span><span className="study-bar-track" aria-hidden="true"><span style={{ width: `${value / max * 100}%` }} /></span><strong>{value}{percent ? '%' : ''}</strong></>;
      return plant && onSelect ? <button className="study-bar-row" key={label} onClick={() => onSelect(plant)} aria-label={`${label}: ${value}. Open plant profile`}>{content}</button> : <div className="study-bar-row" key={label}>{content}</div>;
    })}</div>
    <p className="chart-source"><a href={href} target="_blank" rel="noreferrer">{source} ↗</a></p>{note && <p className="chart-note">{note}</p>}
    <details><summary>View data table</summary><table className="chart-table"><caption>{title}</caption><thead><tr><th scope="col">Category</th><th scope="col" aria-sort={descending ? 'descending' : 'ascending'}><button onClick={() => setDescending(!descending)}>{percent ? 'Percent' : 'Count'} {descending ? '↓' : '↑'}</button></th></tr></thead><tbody>{sorted.map(([label,value]) => <tr key={label}><th scope="row">{label}</th><td>{value}{percent ? '%' : ''}</td></tr>)}</tbody></table><button className="text-button" onClick={download}>Download CSV</button></details>
  </article>;
}
