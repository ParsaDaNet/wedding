
"use client";

import { useEffect, useState } from "react";
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
  const [language, setLanguage] = useState("en");
  const pathname = usePathname();

  useEffect(() => {
  const updateLanguage = () => {
    // GTranslate stores the chosen language in this cookie.
    const cookieMatch = document.cookie.match(
      /(?:^|;\s*)googtrans=\/[^/]+\/(en|fr|fa)/
    );

    // Support different GTranslate selector versions.
    const selector = document.querySelector<HTMLSelectElement>(
      ".gt_selector, .gtranslate_wrapper select, select.goog-te-combo"
    );

    const selectorValue = selector?.value?.split("|").pop();

    const selected =
      cookieMatch?.[1] ||
      (["en", "fr", "fa"].includes(selectorValue || "")
        ? selectorValue
        : null) ||
      document.documentElement.lang ||
      "en";

    setLanguage(selected.toLowerCase().slice(0, 2));
  };

  updateLanguage();

  // Detect changes made by GTranslate.
  const observer = new MutationObserver(updateLanguage);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["lang", "class"],
  });

  const handleChange = () => window.setTimeout(updateLanguage, 300);
  document.addEventListener("change", handleChange);

  const interval = window.setInterval(updateLanguage, 1000);

  return () => {
    observer.disconnect();
    document.removeEventListener("change", handleChange);
    window.clearInterval(interval);
  };
}, []);

  const homeLabel =
    language === "fr"
      ? "Accueil"
      : language === "fa"
        ? "صفحه اصلی"
        : "Home";

  return (
    <header className="wedding-navbar">
      <nav className="wedding-navbar__inner" aria-label="Main navigation">
        <Link
          href="/"
          className="wedding-navbar__brand"
          onClick={() => setOpen(false)}
        >
          <span className="wedding-navbar__monogram">Y&M</span>
          <span className="wedding-navbar__brand-text">
            Yasaman & Medhy
          </span>
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
              translate={href === "/" ? "no" : undefined}
              className={`wedding-navbar__link ${
                pathname === href ? "wedding-navbar__link--active" : ""
              } ${href === "/" ? "notranslate" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {href === "/" ? homeLabel : label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
