"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="siteHeader">
      <Link href="/" className="brandLockup" aria-label="WebCrew — accueil">
        <span className="brandWord">WebCrew</span>
        <span className="brandDot" aria-hidden="true" />
      </Link>

      <nav className="mainNav" aria-label="Navigation principale">
        <a href="#realisations">Réalisations</a>
        <a href="#expertises">Expertises</a>
        <a href="#insights">Insights</a>
        <a href="#apropos">À propos</a>
      </nav>

      <Link className="pillCta" href="/demande-de-devis">
        <span>Parler de votre projet</span>
        <span className="ctaArrow" aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
