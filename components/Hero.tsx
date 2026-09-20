"use client";

import Link from "next/link";
import { HeroWebGL } from "@/components/HeroWebGL";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import type { MouseEvent } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const rx = useSpring(useMotionValue(0), { stiffness: 90, damping: 19, mass: 0.72 });
  const ry = useSpring(useMotionValue(0), { stiffness: 90, damping: 19, mass: 0.72 });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -58]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.88], [1, 0.945]);
  const farY = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -38]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, -82]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const deviceX = useTransform(scrollYProgress, [0, 1], [54, 0]);
  const deviceRotate = useTransform(scrollYProgress, [0, 1], [-4.5, 0]);
  const frontX = useTransform(scrollYProgress, [0, 1], [-34, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -46]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 95]);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const r = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width - 0.5;
    const py = (event.clientY - r.top) / r.height - 0.5;
    rx.set(py * -4.2);
    ry.set(px * 5.2);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <div className="heroInner">
        <motion.div
          className="heroCopy"
          style={reducedMotion ? undefined : { y: copyY }}
          initial={reducedMotion ? false : "hidden"}
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } } }}
        >
          <motion.div
            className="eyebrow"
            variants={{ hidden: { y: 10 }, show: { y: 0, transition: { duration: 0.45, ease } } }}
          >
            AGENCE WEB — STRATÉGIE · FRAMER · SHOPIFY
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={{ hidden: { y: 22 }, show: { y: 0, transition: { duration: 0.72, ease } } }}
          >
            <strong>Votre entreprise<br />a évolué.</strong>
            <span>Votre site doit être<br />à son niveau.</span>
          </motion.h1>

          <motion.p
            className="heroLead"
            variants={{ hidden: { y: 14 }, show: { y: 0, transition: { duration: 0.58, ease } } }}
          >
            Aujourd’hui, votre site doit inspirer confiance, gagner en visibilité et mieux convertir l’intérêt qu’il génère.
          </motion.p>

          <motion.div
            className="heroActions"
            variants={{ hidden: { y: 12 }, show: { y: 0, transition: { duration: 0.52, ease } } }}
          >
            <Link href="/demande-de-devis" className="heroPrimary"><span>Parler de votre projet</span><span aria-hidden="true">↗</span></Link>
            <a href="#realisations" className="heroSecondary"><span>Voir nos réalisations</span><span aria-hidden="true">→</span></a>
          </motion.div>
        </motion.div>

        <motion.div
          className="heroScene"
          onMouseMove={move}
          onMouseLeave={reset}
          style={reducedMotion ? undefined : { rotateX: rx, rotateY: ry, y: sceneY, scale: sceneScale }}
          initial={reducedMotion ? false : { scale: 0.985, x: 24 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.92, delay: 0.2, ease }}
          aria-label="Projection visuelle de l’expertise WebCrew"
        >
          <HeroWebGL />
          <motion.div className="heroOrbWrap" style={reducedMotion ? undefined : { y: orbY, rotate: orbRotate }}>
            <div className="heroOrb" aria-hidden="true">
              <span className="heroOrbCore" />
              <span className="heroOrbRing heroOrbRingA" />
              <span className="heroOrbRing heroOrbRingB" />
              <span className="heroOrbRing heroOrbRingC" />
            </div>
          </motion.div>

          <motion.div className="motionLayer motionLayerFar" style={reducedMotion ? undefined : { y: farY }}>
            <div className="sceneAura" />
            <svg className="depthMesh" viewBox="0 0 620 420" aria-hidden="true">
              <defs>
                <linearGradient id="meshStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#173c1b" stopOpacity=".08" />
                  <stop offset="52%" stopColor="#10ef1a" stopOpacity=".32" />
                  <stop offset="100%" stopColor="#173c1b" stopOpacity=".06" />
                </linearGradient>
              </defs>
              <g>
                <path d="M36 330 C118 206 220 175 336 198 C442 219 500 145 590 68" />
                <path d="M18 366 C116 239 222 215 342 234 C454 252 520 184 606 105" />
                <path d="M64 289 C150 181 245 145 351 166 C448 185 492 116 566 38" />
                <path d="M111 402 C177 269 262 255 358 268 C461 282 542 223 616 154" />
                <path d="M138 70 C197 133 204 212 180 307 C165 360 196 394 244 420" />
                <path d="M236 24 C279 91 281 172 258 258 C240 327 261 379 300 420" />
                <path d="M344 0 C374 73 378 148 354 225 C328 308 348 371 381 420" />
                <path d="M452 10 C472 78 477 142 455 207 C425 295 442 364 467 420" />
              </g>
            </svg>
          </motion.div>

          <motion.div className="motionLayer" style={reducedMotion ? undefined : { rotate: orbitRotate }}>
            <div className="sceneOrbit sceneOrbitOuter" />
            <div className="sceneOrbit sceneOrbitInner" />
          </motion.div>

          <motion.div className="motionLayer motionLayerFar" style={reducedMotion ? undefined : { y: farY }}>
            <div className="scenePlane scenePlaneFar" />
          </motion.div>

          <motion.div className="motionLayer motionLayerMid" style={reducedMotion ? undefined : { y: midY }}>
            <div className="scenePlane scenePlaneMid" />
          </motion.div>

          <motion.div className="motionLayer motionLayerFront" style={reducedMotion ? undefined : { y: frontY }}>
            <div className="scenePlane scenePlaneNear" />
          </motion.div>

          <div className="sceneVerticalLabel sceneVerticalLabelLeft" aria-hidden="true">
            <span>STRATÉGIE</span><span>MARQUE</span><span>EXPÉRIENCE</span><span>TECHNOLOGIE</span><span>VISIBILITÉ</span>
          </div>

          <div className="sceneVerticalLabel sceneVerticalLabelRight" aria-hidden="true">
            <span>FRAMER</span><span>SHOPIFY</span><span>SEO</span><span>IA</span><span>PERFORMANCE</span>
          </div>

          <div className="sceneSideNote" aria-hidden="true">
            <i />
            <span>DES SITES<br />QUI FONT<br />GRANDIR<br />VOS AMBITIONS</span>
            <i />
          </div>

          <motion.div className="motionLayer motionLayerFront" style={reducedMotion ? undefined : { y: frontY }}>
            <div className="insightCard insightCardSearch">
              <span className="insightKicker">VISIBILITÉ</span>
              <strong>SEO</strong>
              <svg viewBox="0 0 120 54" role="img" aria-label="Illustration de progression SEO">
                <path className="chartGrid" d="M4 45H116M4 28H116M4 11H116" />
                <path className="chartLine" d="M5 42 C18 38 21 29 32 31 S49 22 58 25 S73 13 84 17 S101 8 115 6" />
              </svg>
              <small>Architecture · contenu · migration</small>
            </div>
          </motion.div>

          <motion.div className="motionLayer motionLayerMid" style={reducedMotion ? undefined : { y: midY }}>
            <div className="insightCard insightCardCommerce">
              <span className="insightKicker">COMMERCE</span>
              <strong>Shopify</strong>
              <div className="commerceBars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <small>Conversion · autonomie · opérations</small>
            </div>
          </motion.div>

          <motion.div className="motionLayer motionLayerFront" style={reducedMotion ? undefined : { y: frontY, x: frontX }}>
            <div className="mobilePreview" aria-hidden="true">
              <div className="mobileNotch" />
              <span className="mobileBrand">Cleany</span>
              <strong>Refonte B2B<br />Cleany.</strong>
              <div className="mobileMedia"><i /></div>
            </div>
          </motion.div>

          <motion.div className="motionLayer motionLayerDevice" style={reducedMotion ? undefined : { y: midY, x: deviceX, rotateZ: deviceRotate }}>
            <div className="mainDevice">
              <div className="browserTop">
                <div className="browserDots"><span /><span /><span /></div>
                <div className="browserNav">Solutions&nbsp;&nbsp;&nbsp; Réalisations&nbsp;&nbsp;&nbsp; À propos</div>
                <div className="browserContact">Nous contacter</div>
              </div>
              <div className="projectScreen">
                <div className="projectLeft">
                  <div className="projectBrand"><span>◉</span> Cleany</div>
                  <div className="projectHeadline">La propreté de vos bureaux.<br />Pilotée en toute sérénité.</div>
                  <div className="projectSub">Interventions tracées · Interlocuteur dédié<br />Entreprise B Corp & éco-certifiée.</div>
                  <div className="projectButton">Découvrir le projet <span>→</span></div>
                </div>
                <div className="projectImage">
                  <img className="cleanyLiveImage" src="https://framerusercontent.com/images/KtYAHPwJkffUodi86sKuP0eHI.png?height=1086&width=1448" alt="Agente Cleany dans des bureaux lumineux" />
                  <span className="realAssetBadge">CLEANY.FR — PROJET LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="depthChip depthChipStrategy" aria-hidden="true"><span>01</span><strong>Stratégie</strong></div>
          <div className="depthChip depthChipExperience" aria-hidden="true"><span>02</span><strong>Expérience</strong></div>
          <div className="depthChip depthChipBuild" aria-hidden="true"><span>03</span><strong>Production</strong></div>

          <div className="rearMedia rearMediaA">
            <span>CAS CLIENT</span>
            <strong>Cleany</strong>
          </div>
          <div className="rearMedia rearMediaB">
            <span>COMMERCE</span>
            <strong>Shopify</strong>
          </div>
          <div className="rearMedia rearMediaC">
            <span>VISIBILITÉ</span>
            <strong>SEO / GEO</strong>
          </div>

          <div className="rearCode" aria-hidden="true">
            <div><span>01</span><b>comprendre</b></div>
            <div><span>02</span><b>concevoir</b></div>
            <div><span>03</span><b>faire évoluer</b></div>
          </div>

          <div className="sceneStamp" aria-hidden="true">
            <span>DES IDÉES</span><i>×</i><span>DES RÉSULTATS</span>
          </div>
        </motion.div>
      </div>

      <div className="heroProof" aria-label="Références et preuve Shopify">
        <div className="logoMarquee" aria-label="Références WebCrew">
          <div className="logoTrack">
            {[0, 1].map((loop) => (
              <div className="logoGroup" aria-hidden={loop === 1} key={loop}>
                <img src="https://framerusercontent.com/images/BnxIDn5UlnIJLUIog8Z9jk0gzPU.png?height=752&width=1025" alt={loop === 0 ? "Référence WebCrew" : ""} />
                <img src="https://framerusercontent.com/images/JDMQF5IJHPhCi6iYMj9XZB2K9J8.png?height=752&width=1025" alt={loop === 0 ? "Référence WebCrew" : ""} />
                <img src="https://framerusercontent.com/images/jlL3Z5CzcxB9xKKXSd4Eg21JvJI.png?height=752&width=1025" alt={loop === 0 ? "Référence WebCrew" : ""} />
                <img src="https://framerusercontent.com/images/y5kwXvlGFRDCwP9G5tenlhYzjsg.png?height=752&width=1025" alt={loop === 0 ? "Référence WebCrew" : ""} />
                <img src="https://framerusercontent.com/images/iwkFDGawZ0AVuj3Ae8Nr1ukfYuw.png?height=770&width=1050" alt={loop === 0 ? "Référence WebCrew" : ""} />
              </div>
            ))}
          </div>
        </div>

        <div className="shopifyProof">
          <strong>+2 M€</strong>
          <span>de chiffre d’affaires cumulés sur les boutiques Shopify accompagnées*</span>
          <small className="proofFootnote">* Périmètre et période à documenter avant mise en production.</small>
        </div>
      </div>

      <a className="heroScrollCue" href="#approche" aria-label="Découvrir la suite"><span /></a>
    </section>
  );
}
