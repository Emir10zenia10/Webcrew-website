"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function PerceptionGap() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const businessX = useTransform(scrollYProgress, [0, 0.78], [-82, 0]);
  const digitalX = useTransform(scrollYProgress, [0, 0.78], [82, 0]);
  const connectorScale = useTransform(scrollYProgress, [0.15, 0.75], [0.08, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.15, 0.72], [0.08, 0.42]);

  return (
    <section className="gapSection" ref={ref} id="approche" aria-labelledby="gap-title">
      <div className="gapTopMark"><span /></div>
      <div className="gapGrid">
        <div className="gapHeading">
          <h2 id="gap-title">Une entreprise peut être <em>meilleure</em><br />que ce que son site laisse paraître.</h2>
        </div>
        <div className="gapCopy">
          <p>Votre entreprise a grandi. Votre offre, votre équipe et la confiance de vos clients aussi. Pourtant, votre site peut encore raconter une version plus petite, plus ancienne ou moins convaincante de votre réalité.</p>
          <p>Notre travail consiste à réduire cet écart — sans repartir de zéro lorsque ce qui existe mérite d’être conservé.</p>
          <a href="#realisations">Voir comment nous le faisons <span>→</span></a>
        </div>
      </div>
      <div className="gapStage" aria-label="Illustration de l’alignement entre valeur réelle et perception digitale">
        <motion.div className="gapCard gapCardBusiness" style={reducedMotion ? undefined : { x: businessX }}>
          <span className="gapCardIndex">01</span><span className="gapCardLabel">VALEUR RÉELLE</span><strong>Entreprise</strong><p>Expertise · offre · équipe · confiance</p>
        </motion.div>
        <div className="gapConnector" aria-hidden="true">
          <motion.i style={reducedMotion ? undefined : { scaleX: connectorScale, opacity: glowOpacity }} /><span>ALIGNEMENT</span>
        </div>
        <motion.div className="gapCard gapCardDigital" style={reducedMotion ? undefined : { x: digitalX }}>
          <span className="gapCardIndex">02</span><span className="gapCardLabel">PERCEPTION DIGITALE</span><strong>Site</strong><p>Positionnement · UX · contenu · visibilité</p>
        </motion.div>
      </div>
      <div className="gapConclusion"><span>PERCEPTION</span><i /><span>VISIBILITÉ</span><i /><span>CONVERSION</span><i /><span>AUTONOMIE</span></div>
    </section>
  );
}
