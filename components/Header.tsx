"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["Réalisations", "#realisations"],
  ["Expertises", "#expertises"],
  ["Insights", "#insights"],
  ["À propos", "#apropos"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`siteHeader ${open ? "menuOpen" : ""}`}>
      <div className="siteHeaderInner">
        <Link href="/" className="brandLockup" aria-label="WebCrew — accueil" onClick={() => setOpen(false)}>
          <span className="brandWord">WebCrew</span>
          <span className="brandDot" aria-hidden="true" />
        </Link>

        <nav className="mainNav" aria-label="Navigation principale">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="headerActions">
          <Link className="pillCta" href="/demande-de-devis">
            <span>Parler de votre projet</span>
            <span className="ctaArrow" aria-hidden="true">↗</span>
          </Link>
          <button
            className="mobileMenuButton"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(value => !value)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <div className="mobileMenu" id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Navigation mobile">
          {navItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <i aria-hidden="true">↘</i>
            </a>
          ))}
          <Link href="/demande-de-devis" className="mobileMenuCta" onClick={() => setOpen(false)}>
            Parler de votre projet <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
