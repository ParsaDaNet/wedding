
import { useState } from "react";
import "./NavBar.css";

const links = [
  ["Home", "#home"],
  ["Wedding Weekend", "#wedding-weekend"],
  ["RSVP", "#rsvp"],
  ["Getting there", "#getting-there"],
  ["Where to Stay", "#where-to-stay"],
  ["Q&A", "#qa"],
  ["Help & Contact", "#help-contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="wedding-navbar">
      <nav className="wedding-navbar__inner" aria-label="Main navigation">
        <a href="#home" className="wedding-navbar__brand">
          <span className="wedding-navbar__monogram">Y&M</span>
          <span className="wedding-navbar__brand-text">Yasaman & Medhy</span>
        </a>

        <button
          className="wedding-navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`wedding-navbar__links ${open ? "wedding-navbar__links--open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} className="wedding-navbar__link" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
