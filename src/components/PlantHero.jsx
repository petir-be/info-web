import Icon from "./Icon";
import "./PlantHero.css";

export default function PlantHero() {
  return (
    <section className="people-hero" aria-labelledby="people-hero-title">
      <img
        className="people-hero-photo"
        src={`${import.meta.env.BASE_URL}community-performance.webp`}
        alt="A group in red garments performing music with drums, bamboo instruments, and a string instrument"
        width="1600"
        height="1077"
        fetchPriority="high"
      />
      <div className="container people-hero-content">
        <div className="people-hero-copy">
          <span className="eyebrow">FROM THE ROOTS OF BUKIDNON</span>
          <h1 id="people-hero-title">Rooted in nature.<br />Nourished by<br /><em>tradition.</em></h1>
          <p>A plant. A people. A living connection. Explore the plant knowledge of the Talaandig community, one leaf at a time.</p>
          <div className="people-hero-actions">
            <a className="button button-white" href="#plants">Explore the plants <Icon name="arrow" size={18} /></a>
            <a className="button people-hero-secondary" href="#community">Meet the community <Icon name="arrow" size={17} /></a>
          </div>
        </div>
        <p className="people-hero-credit">Supplied photograph · Pictured community, location, and photographer unverified.</p>
      </div>
    </section>
  );
}
