import { useState } from "react";
import Icon from "./Icon";
const links = [
  ["home", "Overview"],
  ["plants", "Plant Explorer"],
  ["categories", "Food Uses"],
  ["community", "The Community"],
  ["findings", "Key Findings"],
  ["heritage", "Living Heritage"],
  ["gallery", "Gallery"],
  ["research", "The Study"],
];
export default function Header({ page }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-main">
        <a href="#home" className="brand" aria-label="Talaandig home">
          <span className="brand-mark">
            <Icon name="sprout" size={29} />
          </span>
          <span>
            Talaandig<span className="brand-sub">FOOD · PEOPLE · HERITAGE</span>
          </span>
        </a>
        <span className="header-note">
          An exploration of food ethnobotany
          <br />
          <b>Bukidnon, Philippines</b>
        </span>
        <a
          className="button button-outline header-paper"
          href="/talaandig-food-ethnobotany.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="book" size={17} />
          Read the paper
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
            Sitio Tandacol
          </span>
        </nav>
      </div>
    </header>
  );
}
