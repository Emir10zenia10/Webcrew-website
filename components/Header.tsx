"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MegaItem = {
  title: string;
  subtitle: string;
  href: string;
};

type MegaGroup = {
  title: string;
  items: MegaItem[];
};

type NavItem = {
  label: string;
  href: string;
  intro: string;
  groups: MegaGroup[];
  visual: {
    eyebrow: string;
    title: string;
    meta: string;
    variant: "work" | "services" | "insights" | "about";
  };
};

const navItems: NavItem[] = [
  {
    label: "Réalisations",
    href: "#realisations",
    intro: "Des refontes pensées pour la réalité du business, pas pour remplir un portfolio.",
    groups: [
      {
        title: "Sélection",
        items: [
          { title: "Cleany", subtitle: "B2B · Framer · SEO", href: "#realisations" },
          { title: "Acier Shop", subtitle: "Shopify · Industrie", href: "#realisations" },
          { title: "Mademoiselle Parisienne", subtitle: "Shopify · Brand", href: "#realisations" },
        ],
      },
      {
        title: "Explorer",
        items: [
          { title: "Tous les projets", subtitle: "Voir la sélection WebCrew", href: "#realisations" },
          { title: "Notre méthode", subtitle: "De la stratégie au lancement", href: "#methodologie" },
        ],
      },
    ],
    visual: {
      eyebrow: "PROJET MIS EN AVANT",
      title: "Cleany",
      meta: "Refonte B2B · Framer · SEO",
      variant: "work",
    },
  },
  {
    label: "Expertises",
    href: "#expertises",
    intro: "Stratégie, design, technologie et search réunis autour du même objectif : faire avancer le business.",
    groups: [
      {
        title: "Sites web",
        items: [
          { title: "Refonte de site", subtitle: "Positionnement, architecture, conversion", href: "#expertises" },
          { title: "UX / UI", subtitle: "Parcours, design system, expérience", href: "#expertises" },
          { title: "Framer", subtitle: "Build premium et autonomie", href: "#expertises" },
        ],
      },
      {
        title: "E-commerce",
        items: [
          { title: "Shopify", subtitle: "Commerce, catalogue, performance", href: "#expertises" },
          { title: "Migration", subtitle: "PrestaShop / WordPress → Shopify", href: "#expertises" },
          { title: "Conversion", subtitle: "CRO, parcours produit, tracking", href: "#expertises" },
        ],
      },
      {
        title: "Visibilité & expérience",
        items: [
          { title: "SEO / GEO", subtitle: "Architecture, contenu, migration", href: "#expertises" },
          { title: "Motion & 3D", subtitle: "Interactions quand elles servent le message", href: "#expertises" },
          { title: "Automatisation & IA", subtitle: "Usages utiles et développement sur mesure", href: "#expertises" },
        ],
      },
    ],
    visual: {
      eyebrow: "NOTRE TERRAIN DE JEU",
      title: "Stratégie × Design × Technologie",
      meta: "Framer · Shopify · SEO/GEO · Motion",
      variant: "services",
    },
  },
  {
    label: "Insights",
    href: "#insights",
    intro: "Nos réflexions sur la perception, le design, la technologie et la croissance digitale.",
    groups: [
      {
        title: "À lire",
        items: [
          { title: "Perception digitale", subtitle: "Quand le site ne reflète plus l’entreprise", href: "#insights" },
          { title: "Framer, Shopify ou custom ?", subtitle: "Choisir selon le modèle économique", href: "#insights" },
          { title: "Refonte & SEO", subtitle: "Préserver ce qui fonctionne", href: "#insights" },
        ],
      },
      {
        title: "Sujets",
        items: [
          { title: "Conversion", subtitle: "Clarté, friction et intention", href: "#insights" },
          { title: "Autonomie", subtitle: "Donner la main aux équipes", href: "#insights" },
        ],
      },
    ],
    visual: {
      eyebrow: "DERNIER SUJET",
      title: "Une entreprise peut être meilleure que ce que son site laisse paraître.",
      meta: "Perception · Positionnement · Digital",
      variant: "insights",
    },
  },
  {
    label: "À propos",
    href: "#apropos",
    intro: "Une agence construite autour d’une conviction simple : comprendre le business avant de dessiner l’interface.",
    groups: [
      {
        title: "WebCrew",
        items: [
          { title: "Notre manière de penser", subtitle: "Business avant design", href: "#apropos" },
          { title: "Méthode", subtitle: "Business → Strategy → Build → Improve", href: "#methodologie" },
          { title: "Partenaires", subtitle: "Apport d’affaires & collaborations", href: "#partenaires" },
        ],
      },
      {
        title: "Commencer",
        items: [
          { title: "Parler de votre projet", subtitle: "Un premier échange simple", href: "/demande-de-devis" },
        ],
      },
    ],
    visual: {
      eyebrow: "WEBCREW · NANTES",
      title: "Le digital doit suivre le niveau réel de l’entreprise.",
      meta: "Stratégie · Design · Framer · Shopify",
      variant: "about",
    },
  },
];

function MegaVisual({ visual }: { visual: NavItem["visual"] }) {
  return (
    <div className={`megaVisual megaVisual--${visual.variant}`}>
      {visual.variant === "work" ? <img className="megaVisualRealImage" src="https://framerusercontent.com/images/KtYAHPwJkffUodi86sKuP0eHI.png?height=1086&width=1448" alt="" /> : null}
      <div className="megaVisualTop">
        <span>{visual.eyebrow}</span>
        <i aria-hidden="true">↗</i>
      </div>

      <div className="megaVisualCanvas" aria-hidden="true">
        <div className="megaVisualGrid" />
        <div className="megaVisualWindow megaVisualWindowBack">
          <span />
          <span />
          <span />
        </div>
        <div className="megaVisualWindow megaVisualWindowFront">
          <div className="megaVisualWindowBar"><i /><i /><i /></div>
          <div className="megaVisualWindowBody">
            <b />
            <b />
            <b />
          </div>
        </div>
        <div className="megaVisualOrb" />
      </div>

      <div className="megaVisualCopy">
        <strong>{visual.title}</strong>
        <span>{visual.meta}</span>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
    setHidden(false);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

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
      if (closeTimer.current) clearTimeout(closeTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, activeMenu]);

  return (
    <>
      <a className="skipLink" href="#main-content">Aller au contenu</a>

      <header className={`siteHeader ${hidden ? "headerHidden" : ""} ${scrolled ? "headerScrolled" : "headerAtTop"} ${open ? "menuOpen" : ""} ${activeMenu ? "megaOpen" : ""}`}>
        <div className="siteHeaderInner">
          <Link href="/" className="brandLockup" aria-label="WebCrew — accueil" onClick={() => setOpen(false)}>
            <span className="brandWord">WebCrew</span>
            <span className="brandDot" aria-hidden="true" />
          </Link>

          <nav className="mainNav" aria-label="Navigation principale" onMouseLeave={scheduleClose}>
            {navItems.map((item) => (
              <div
                className="navItem"
                key={item.label}
                onMouseEnter={() => openMenu(item.label)}
                onFocus={() => openMenu(item.label)}
              >
                <a href={item.href} aria-expanded={activeMenu === item.label} onClick={() => setActiveMenu(null)}>
                  {item.label}
                  <span className="navChevron" aria-hidden="true">⌄</span>
                </a>
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

        <div
          className={`megaMenuShell ${activeMenu ? "megaMenuShellVisible" : ""}`}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          {navItems.map((item) => (
            <div
              className={`megaMenu ${activeMenu === item.label ? "megaMenuActive" : ""}`}
              aria-hidden={activeMenu !== item.label}
              key={item.label}
            >
              <div className="megaMenuIntro">
                <span>{item.label}</span>
                <p>{item.intro}</p>
                <a href={item.href} onClick={() => setActiveMenu(null)}>Tout voir <i aria-hidden="true">↗</i></a>
              </div>

              <div className="megaMenuGroups">
                {item.groups.map((group) => (
                  <div className="megaGroup" key={group.title}>
                    <span className="megaGroupTitle">{group.title}</span>
                    <div className="megaGroupLinks">
                      {group.items.map((subItem) => (
                        <a href={subItem.href} key={subItem.title} className="megaLink" onClick={() => setActiveMenu(null)}>
                          <span>
                            <strong>{subItem.title}</strong>
                            <small>{subItem.subtitle}</small>
                          </span>
                          <i aria-hidden="true">↘</i>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <MegaVisual visual={item.visual} />
            </div>
          ))}
        </div>

        <div className="mobileMenu" id="mobile-navigation" aria-hidden={!open}>
          <nav aria-label="Navigation mobile">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <small>{item.intro}</small>
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
