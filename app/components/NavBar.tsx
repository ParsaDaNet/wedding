"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./NavBar.css";

const links = [
  ["Home", "/"],
  ["Wedding Weekend", "/wedding-weekend"],
  ["RSVP", "/rsvp"],
  ["Getting there", "/getting-there"],
  ["Where to Stay", "/where-to-stay"],
  ["Q&A", "/q-n-a"],
  ["Help & Contact", "/help-contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="wedding-navbar">
      <nav className="wedding-navbar__inner" aria-label="Main navigation">
        <Link
          href="/"
          className="wedding-navbar__brand"
          onClick={() => setOpen(false)}
        >
          <span className="wedding-navbar__monogram">Y&M</span>
          <span className="wedding-navbar__brand-text">Yasaman & Medhy</span>
        </Link>

        <button
          className="wedding-navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="wedding-navbar-links"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="wedding-navbar-links"
          className={`wedding-navbar__links ${
            open ? "wedding-navbar__links--open" : ""
          }`}
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`wedding-navbar__link ${
                pathname === href ? "wedding-navbar__link--active" : ""
              }`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}