import Icon from './Icon';
export default function Footer() {
  return <footer><div className="container footer-top"><a className="brand" href="#home"><Icon name="sprout" size={28} /><span>Talaandig<span className="brand-sub">ROOTED IN KNOWLEDGE</span></span></a><p>Celebrating the connection between plants, people,<br />and the knowledge that sustains them.</p><a href="#research">Sources & acknowledgements <Icon name="arrow" size={16} /></a></div><div className="container footer-bottom"><span>Based on Adlaon et al. (2026) · Journal of Tropical Biology and Conservation</span><span>Educational adaptation · Source: CC BY-NC 4.0</span></div></footer>;
}
