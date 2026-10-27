import { useState } from "react";
import Icon from "./Icon";
const links = [
  ["home", "Overview"],
  ["plants", "Plant Explorer"],
  ["community", "The Community"],
  ["findings", "Research & Findings"],
  ["heritage", "Living Heritage"],
  ["gallery", "Gallery"],
  ["research", "Sources"],
  ["about", "About Us"],
];
export default function Header({ page }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-main">
        <a href="#home" className="brand" aria-label="Kalaki Pamulahen home">
          <span className="brand-mark">
            <Icon name="sprout" size={29} />
          </span>
          <span>
            Kalaki Pamulahen
            <span className="brand-sub">KNOWLEDGE · PLANTS · HERITAGE</span>
          </span>
        </a>
        <span className="header-note">
          A living atlas of plant knowledge
          <br />
          <b>Bukidnon, Philippines</b>
        </span>
        <a className="button button-outline header-paper" href="#research">
          <Icon name="book" size={17} />
          Read the studies
          <Icon name="arrow" size={16} />
        </a>
        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <div className="nav-border">
        <nav
          id="primary-navigation"
          className={`container nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={page === id ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <span className="nav-location">
            <Icon name="pin" size={14} />
            Lilingayon
          </span>
        </nav>
      </div>
    </header>
  );
}
