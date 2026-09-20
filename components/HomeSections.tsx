import Link from "next/link";

const outcomes = [
  ["Perception", "Être perçu au niveau réel de votre entreprise."],
  ["Visibilité", "Être présent quand vos prospects vous cherchent."],
  ["Conversion", "Transformer plus efficacement l’intérêt existant."],
  ["Autonomie", "Donner à vos équipes la main sur leur site."],
] as const;

export function HomeSections() {
  return (
    <>
      <section className="workSection" id="realisations" aria-labelledby="work-title">
        <div className="sectionHead">
          <div><div className="eyebrow">RÉALISATIONS SÉLECTIONNÉES</div><h2 id="work-title">Des sites pensés pour<br />la réalité du business.</h2></div>
          <p>Trois contextes différents. Une même exigence : rendre l’entreprise plus claire, plus crédible et plus simple à faire vivre.</p>
        </div>
        <div className="workGrid">
          <article className="workCard workCardWide"><div className="workVisual cleanyVisual"><span>Capture projet à intégrer</span></div><div className="workMeta"><span>Cleany</span><b>B2B · Framer · SEO</b></div></article>
          <article className="workCard"><div className="workVisual acierVisual"><span>Capture projet à intégrer</span></div><div className="workMeta"><span>Acier Shop</span><b>Shopify · Commerce</b></div></article>
          <article className="workCard"><div className="workVisual mpVisual"><span>Capture projet à intégrer</span></div><div className="workMeta"><span>Mademoiselle Parisienne</span><b>Shopify · Brand</b></div></article>
        </div>
      </section>
      <section className="expertiseSection" id="expertises" aria-labelledby="expertises-title">
        <div className="sectionHead sectionHeadTight"><div><div className="eyebrow">DEUX SITUATIONS</div><h2 id="expertises-title">Votre activité avance.<br />Votre digital doit suivre.</h2></div></div>
        <div className="situationGrid">
          <article><span>01 — SITES WEB</span><h3>Votre entreprise a dépassé son site.</h3><p>Positionnement, architecture, UX, Framer, SEO et autonomie.</p><a href="#approche">Découvrir l’approche →</a></article>
          <article><span>02 — E-COMMERCE</span><h3>Votre commerce a dépassé son expérience actuelle.</h3><p>Shopify, migration, conversion, catalogue et opérations.</p><a href="/demande-de-devis">Parler du projet →</a></article>
        </div>
        <div className="outcomeGrid">
          {outcomes.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      <section className="insightsSection" id="insights" aria-labelledby="insights-title">
        <div className="sectionHead sectionHeadTight"><div><div className="eyebrow">INSIGHTS</div><h2 id="insights-title">Comprendre avant de construire.</h2></div></div>
        <div className="insightsGrid">
          <article><span>STRATÉGIE</span><h3>Le Digital Perception Gap</h3><p>Pourquoi certaines entreprises sont meilleures que l’image qu’elles projettent.</p></article>
          <article><span>TECHNOLOGIE</span><h3>Framer, Shopify ou custom ?</h3><p>Choisir le système qui sert le business, pas l’inverse.</p></article>
          <article><span>SEARCH</span><h3>Refondre sans sacrifier le SEO</h3><p>Préserver ce qui fonctionne et reconstruire ce qui bloque la croissance.</p></article>
        </div>
      </section>
      <section className="aboutSection" id="apropos" aria-labelledby="about-title">
        <div className="aboutPanel">
          <div><div className="eyebrow eyebrowLight">NOTRE MANIÈRE DE PENSER</div><h2 id="about-title">Un bon site commence bien avant le design.</h2></div>
          <div className="aboutCopy"><p>On commence par comprendre l’entreprise, ce qui a changé et ce que le site doit désormais rendre évident.</p><Link href="/demande-de-devis">Parler de votre projet <span>↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
