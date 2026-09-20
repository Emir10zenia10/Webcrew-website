"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { MouseEvent } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 95, damping: 20, mass: 0.7 });
  const ry = useSpring(useMotionValue(0), { stiffness: 95, damping: 20, mass: 0.7 });

  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const r = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width - 0.5;
    const py = (event.clientY - r.top) / r.height - 0.5;
    rx.set(py * -2.35);
    ry.set(px * 2.85);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="heroInner">
        <motion.div className="heroCopy" initial={reducedMotion ? false : "hidden"} animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } } }}>
          <motion.div className="eyebrow"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}>
            AGENCE WEB — STRATÉGIE · FRAMER · SHOPIFY
          </motion.div>
          <motion.h1 id="hero-title"
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.72, ease } } }}>
            <strong>Votre entreprise<br />a évolué.</strong>
            <span>Votre site doit être<br />à son niveau.</span>
          </motion.h1>
          <motion.p className="heroLead"
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease } } }}>
            Aujourd’hui, votre site doit inspirer confiance, gagner en visibilité et mieux convertir l’intérêt qu’il génère.
          </motion.p>
          <motion.div className="heroActions"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } } }}>
            <Link href="/demande-de-devis" className="heroPrimary"><span>Parler de votre projet</span><span aria-hidden="true">↗</span></Link>
            <a href="#realisations" className="heroSecondary"><span>Voir nos réalisations</span><span aria-hidden="true">→</span></a>
          </motion.div>
        </motion.div>

        <motion.div className="heroScene" onMouseMove={move} onMouseLeave={reset}
          style={{ rotateX: rx, rotateY: ry }}
          initial={reducedMotion ? false : { opacity: 0, scale: 0.97, x: 34 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.92, delay: 0.2, ease }}
          aria-label="Projection visuelle de l’expertise WebCrew">
          <div className="sceneAura" />
          <div className="scenePlane scenePlaneFar" />
          <div className="scenePlane scenePlaneMid" />
          <div className="scenePlane scenePlaneNear" />
          <div className="sceneVerticalLabel sceneVerticalLabelLeft" aria-hidden="true">
            <span>STRATÉGIE</span><span>BRAND</span><span>EXPÉRIENCE</span><span>TECHNOLOGIE</span><span>SEARCH</span>
          </div>
          <div className="sceneVerticalLabel sceneVerticalLabelRight" aria-hidden="true">
            <span>FRAMER</span><span>SHOPIFY</span><span>SEO</span><span>IA</span><span>PERFORMANCE</span>
          </div>
          <div className="sceneSideNote" aria-hidden="true">
            <i />
            <span>DES SITES<br />QUI FONT<br />GRANDIR<br />VOS AMBITIONS</span>
            <i />
          </div>

          <div className="insightCard insightCardSearch">
            <span className="insightKicker">VISIBILITÉ</span><strong>SEO</strong>
            <svg viewBox="0 0 120 54" role="img" aria-label="Illustration de progression SEO">
              <path className="chartGrid" d="M4 45H116M4 28H116M4 11H116" />
              <path className="chartLine" d="M5 42 C18 38 21 29 32 31 S49 22 58 25 S73 13 84 17 S101 8 115 6" />
            </svg>
            <small>Architecture · contenu · migration</small>
          </div>

          <div className="insightCard insightCardCommerce">
            <span className="insightKicker">COMMERCE</span><strong>Shopify</strong>
            <div className="commerceBars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <small>Conversion · autonomie · opérations</small>
          </div>

          <div className="mobilePreview" aria-hidden="true">
            <div className="mobileNotch" /><span className="mobileBrand">Cleany</span>
            <strong>Un environnement<br />plus simple.</strong><div className="mobileMedia"><i /></div>
          </div>

          <div className="mainDevice">
            <div className="browserTop">
              <div className="browserDots"><span /><span /><span /></div>
              <div className="browserNav">Solutions&nbsp;&nbsp;&nbsp; Réalisations&nbsp;&nbsp;&nbsp; À propos</div>
              <div className="browserContact">Nous contacter</div>
            </div>
            <div className="projectScreen">
              <div className="projectLeft">
                <div className="projectBrand"><span>◉</span> Cleany</div>
                <div className="projectHeadline">Des espaces<br />plus sains pour<br />des entreprises<br />plus fortes.</div>
                <div className="projectSub">Propreté, services et environnement<br />de travail.</div>
                <div className="projectButton">Découvrir le projet <span>→</span></div>
              </div>
              <div className="projectImage" aria-label="Emplacement réservé à une vraie capture Cleany">
                <div className="architecturalPlaceholder" aria-hidden="true">
                  <div className="archSky" /><div className="archBuilding archBuildingA" /><div className="archBuilding archBuildingB" />
                  <div className="archGlass" /><div className="archGreen archGreenOne" /><div className="archGreen archGreenTwo" /><div className="archGround" />
                </div>
                <span className="realAssetBadge">CAPTURE CLEANY À REMPLACER</span>
              </div>
            </div>
          </div>

          <div className="rearMedia rearMediaA"><span>CASE STUDY</span></div>
          <div className="rearMedia rearMediaB"><span>UX / UI</span></div>
          <div className="rearCode" aria-hidden="true">
            <div><span>01</span><b>strategy</b></div><div><span>02</span><b>design_system</b></div><div><span>03</span><b>search_ready</b></div>
          </div>
          <div className="sceneStamp" aria-hidden="true"><span>DES IDÉES</span><i>×</i><span>DES RÉSULTATS</span></div>
        </motion.div>
      </div>
      <div className="heroProof" aria-label="Références sélectionnées et preuve Shopify">
        <div className="proofIntro">RÉFÉRENCES SÉLECTIONNÉES</div>
        <div className="proofNames"><span>Cleany</span><span>Acier Shop</span><span>Mademoiselle Parisienne</span></div>
        <div className="shopifyProof"><strong>+2 M€</strong><span>de chiffre d’affaires cumulés sur les boutiques Shopify accompagnées*</span><small className="proofFootnote">* Périmètre et période à documenter avant mise en production.</small></div>
      </div>
      <a className="heroScrollCue" href="#approche" aria-label="Découvrir le Digital Perception Gap"><span /></a>
    </section>
  );
}
