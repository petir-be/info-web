import Icon from "./Icon";
import "./PlantHero.css";

export default function PlantHero() {
  return (
    <section className="plant-story container" aria-label="A plant, a living heritage">
      <div className="plant-stage">
        <div className="plant-hero-copy">
          <span className="eyebrow"><span className="plant-live-dot" />FROM THE ROOTS OF BUKIDNON</span>
          <h1>Rooted in nature.<br />Nourished by<br /><em>tradition.</em></h1>
          <p>A plant. A people. A living connection.<br />Explore the plant knowledge of the Talaandig<br className="desktop-break" /> community, one leaf at a time.</p>
          <div className="plant-hero-actions">
            <a className="button button-green" href="#plants">Explore the plants <Icon name="arrow" size={18} /></a>
            <a className="text-link" href="#community">Meet the community <Icon name="arrow" size={17} /></a>
          </div>
          <div className="plant-location"><Icon name="pin" size={16} /><span>Sitio Tandacol · Bukidnon, Philippines</span></div>
        </div>
        <div className="plant-specimen">
          <div className="plant-orbit" aria-hidden="true" />
          <span className="specimen-index">BOTANICAL STUDY / 001</span>
          <div className="plant-art">
            <img className="plant-poster" src={`${import.meta.env.BASE_URL}plants/sweet-potato-poster.webp`}
              alt="Sweet-potato plant illustration with heart-shaped green leaves and exposed storage roots"
              width="640" height="740" fetchPriority="high" />
          </div>
          <div className="specimen-label"><span className="specimen-marker" /><div><strong>Kamote</strong><i>Ipomoea batatas</i><span>Botanical illustration</span></div></div>
          <span className="specimen-report"><b>82</b>USE REPORTS<small>Adlaon et al., 2026</small></span>
        </div>
      </div>
    </section>
  );
}
