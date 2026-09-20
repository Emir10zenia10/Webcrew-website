"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  {
    label: "Réalisations",
    href: "#realisations",
    items: [
      ["Cleany", "Site B2B · Framer · SEO", "#realisations"],
      ["Acier Shop", "Shopify · Industrie", "#realisations"],
      ["Mademoiselle Parisienne", "Shopify · Brand", "#realisations"],
    ],
  },
  {
    label: "Expertises",
    href: "#expertises",
    items: [
      ["Sites web", "Refonte, UX/UI, Framer", "#expertises"],
      ["E-commerce", "Shopify, migration, conversion", "#expertises"],
      ["Search", "SEO, GEO, migration", "#expertises"],
    ],
  },
  {
    label: "Insights",
    href: "#insights",
    items: [
      ["Perception digitale", "Positionnement & crédibilité", "#insights"],
      ["Choix de stack", "Framer, Shopify ou custom", "#insights"],
      ["Refonte & SEO", "Préserver ce qui fonctionne", "#insights"],
    ],
  },
  {
    label: "À propos",
    href: "#apropos",
    items: [
      ["Notre manière de penser", "Business avant design", "#apropos"],
      ["Méthode", "De la stratégie au lancement", "#methodologie"],
      ["Partenaires", "Apport d’affaires", "#partenaires"],
    ],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastY.current;
      setScrolled(current > 18);

      if (open || activeMenu) {
        setHidden(false);
      } else if (current < 90) {
        setHidden(false);
      } else if (delta > 7) {
        setHidden(true);
      } else if (delta < -5) {
        setHidden(false);
      }

      lastY.current = current;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, activeMenu]);

  return (
    <>
      <a className="skipLink" href="#main-content">Aller au contenu</a>
      <header className={`siteHeader ${hidden ? "headerHidden" : ""} ${scrolled ? "headerScrolled" : "headerAtTop"} ${open ? "menuOpen" : ""}`}>
        <div className="siteHeaderInner">
          <Link href="/" className="brandLockup" aria-label="WebCrew — accueil" onClick={() => setOpen(false)}>
            <span className="brandWord">WebCrew</span>
            <span className="brandDot" aria-hidden="true" />
          </Link>

          <nav className="mainNav" aria-label="Navigation principale" onMouseLeave={() => setActiveMenu(null)}>
            {navItems.map((item) => (
              <div
                className="navItem"
                key={item.label}
                onMouseEnter={() => setActiveMenu(item.label)}
                onFocus={() => setActiveMenu(item.label)}
              >
                <a href={item.href} aria-expanded={activeMenu === item.label}>
                  {item.label}
                  <span className="navChevron" aria-hidden="true">⌄</span>
                </a>
                <div className={`navDropdown ${activeMenu === item.label ? "navDropdownVisible" : ""}`}>
                  <div className="navDropdownInner">
                    {item.items.map(([title, subtitle, href], index) => (
                      <a href={href} key={title} className="navSubItem">
                        <span className="navSubIndex">0{index + 1}</span>
                        <span className="navSubText">
                          <strong>{title}</strong>
                          <small>{subtitle}</small>
                        </span>
                        <i aria-hidden="true">↘</i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <small>{item.items[0][1]}</small>
                <i aria-hidden="true">↘</i>
              </a>
            ))}
            <Link href="/demande-de-devis" className="mobileMenuCta" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              Parler de votre projet <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
