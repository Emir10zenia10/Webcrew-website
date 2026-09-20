import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const outcomes = [
  ["Perception", "Être perçu au niveau réel de votre entreprise."],
  ["Visibilité", "Être présent quand vos prospects vous cherchent."],
  ["Conversion", "Transformer plus efficacement l’intérêt existant."],
  ["Autonomie", "Donner à vos équipes la main sur leur site."],
] as const;

const method = [
  ["01", "Business", "Comprendre l’entreprise, son offre, ses acheteurs et ce qui a réellement changé."],
  ["02", "Strategy", "Clarifier le positionnement, la structure, les parcours et les priorités commerciales."],
  ["03", "Design & Build", "Transformer la stratégie en expérience, système visuel et produit digital robuste."],
  ["04", "Launch & Improve", "Migrer proprement, mesurer, apprendre et faire évoluer ce qui compte."],
] as const;

const technology = [
  ["Framer", "Sites marketing rapides, premium et simples à faire vivre."],
  ["Shopify", "Commerce, catalogue, conversion et autonomie des équipes."],
  ["Search", "SEO, structure, migration et visibilité pensée dès la conception."],
  ["AI", "Accélérer la recherche, la production et les futurs produits sans en faire un gimmick."],
  ["Creative Development", "Interactions, composants et expériences custom quand le besoin le justifie."],
] as const;

function CleanyWorkVisual() {
  return (
    <div className="workMock workMockLarge cleanyMock">
      <div className="mockBrowserBar"><i /><i /><i /><span>cleany.fr</span></div>
      <div className="cleanyMockBody">
        <div className="cleanyMockCopy">
          <span>◉ Cleany</span>
          <strong>Des espaces plus sains pour des entreprises plus fortes.</strong>
          <small>Propreté · Office Life · Multitechnique</small>
        </div>
        <div className="cleanyMockMedia">
          <div className="mockArchitecture"><b /><b /><i /><i /></div>
          <span>VRAIE CAPTURE CLEANY À INTÉGRER</span>
        </div>
      </div>
    </div>
  );
}

function AcierWorkVisual() {
  return (
    <div className="workMock acierMock">
      <div className="mockCommerceTop"><span>ACIER SHOP</span><i>Panier</i></div>
      <div className="acierMockGrid">
        <div className="acierProduct acierProductMain"><span>PHOTO PRODUIT</span></div>
        <div className="acierProduct"><span>COLLECTION</span></div>
        <div className="acierProduct"><span>SUR-MESURE</span></div>
      </div>
      <em>VRAIES CAPTURES À INTÉGRER</em>
    </div>
  );
}

function MpWorkVisual() {
  return (
    <div className="workMock mpMock">
      <div className="mpEditorial">
        <span>MADEMOISELLE PARISIENNE</span>
        <strong>Paris,<br />en mouvement.</strong>
        <small>SHOPIFY / BRAND</small>
      </div>
      <div className="mpPhoto"><span>VISUEL E-COMMERCE À INTÉGRER</span></div>
    </div>
  );
}

export function HomeSections() {
  return (
    <>
      <section className="workSection" id="realisations" aria-labelledby="work-title">
        <Reveal className="sectionHead">
          <div>
            <div className="eyebrow">RÉALISATIONS SÉLECTIONNÉES</div>
            <h2 id="work-title">Des sites pensés pour<br />la réalité du business.</h2>
          </div>
          <p>Nous ne cherchons pas à faire “un beau site de plus”. Le travail consiste à rendre l’entreprise plus claire, plus crédible et plus simple à faire vivre.</p>
        </Reveal>

        <div className="workGrid">
          <Reveal className="workCard workCardWide" delay={0.02}>
            <article>
              <div className="workVisual cleanyVisual">
                <div className="workVisualChrome"><span>01</span><span>B2B / FRAMER / SEO</span></div>
                <CleanyWorkVisual />
              </div>
              <div className="workMeta"><span>Cleany</span><b>Refonte B2B · Framer · SEO</b></div>
            </article>
          </Reveal>

          <Reveal className="workCard" delay={0.08}>
            <article>
              <div className="workVisual acierVisual">
                <div className="workVisualChrome"><span>02</span><span>SHOPIFY / COMMERCE</span></div>
                <AcierWorkVisual />
              </div>
              <div className="workMeta"><span>Acier Shop</span><b>Shopify · Industrie · Commerce</b></div>
            </article>
          </Reveal>

          <Reveal className="workCard" delay={0.14}>
            <article>
              <div className="workVisual mpVisual">
                <div className="workVisualChrome"><span>03</span><span>SHOPIFY / BRAND</span></div>
                <MpWorkVisual />
              </div>
              <div className="workMeta"><span>Mademoiselle Parisienne</span><b>Shopify · Brand · E-commerce</b></div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="situationSection" id="expertises" aria-labelledby="expertises-title">
        <div className="sectionBridge"><span>LE BON SYSTÈME POUR LE BON PROBLÈME</span></div>
        <Reveal className="sectionHead sectionHeadTight">
          <div>
            <div className="eyebrow">DEUX SITUATIONS D’ACHAT</div>
            <h2 id="expertises-title">Votre activité avance.<br />Votre digital doit suivre.</h2>
          </div>
        </Reveal>

        <div className="situationGrid">
          <Reveal delay={0.03}>
            <article className="situationCard situationB2B">
              <span className="situationIndex">01 — SITES WEB</span>
              <div>
                <h3>Votre entreprise a dépassé son site.</h3>
                <p>Votre offre s’est structurée, votre équipe a grandi ou votre positionnement a changé. Le site doit redevenir un actif de crédibilité, de recherche et de conversion.</p>
              </div>
              <a href="#approche">Découvrir notre approche <span>→</span></a>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="situationCard situationCommerce">
              <span className="situationIndex">02 — E-COMMERCE</span>
              <div>
                <h3>Votre commerce a dépassé son expérience actuelle.</h3>
                <p>Migration, catalogue, expérience produit, conversion, opérations et autonomie : Shopify devient un système de commerce, pas seulement une vitrine.</p>
              </div>
              <div className="commerceProofMini"><strong>+2 M€</strong><span>de CA cumulés sur les boutiques Shopify accompagnées*</span></div>
              <Link href="/demande-de-devis">Parler du projet <span>↗</span></Link>
            </article>
          </Reveal>
        </div>

        <Reveal className="outcomesIntro">
          <div className="eyebrow">CE QUI DOIT CHANGER APRÈS UNE REFONTE</div>
          <p>Pas seulement l’apparence. La perception du marché, la visibilité, la capacité à convertir et la manière dont vos équipes utilisent le site au quotidien.</p>
        </Reveal>

        <div className="outcomeGrid">
          {outcomes.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="featuredCaseSection" aria-labelledby="featured-case-title">
        <Reveal className="featuredCaseShell">
          <div className="featuredCaseCopy">
            <div className="eyebrow eyebrowLight">CAS CLIENT — CLEANY</div>
            <h2 id="featured-case-title">Quand une entreprise devient plus complexe, son site doit devenir plus simple.</h2>
            <p>Le rôle de la refonte n’est pas d’ajouter de la complexité visuelle. Il est d’organiser une offre devenue plus riche, d’aider les visiteurs à comprendre rapidement l’entreprise et de donner aux équipes un système qu’elles peuvent réellement faire vivre.</p>
            <div className="featuredCaseTags"><span>Architecture</span><span>UX / UI</span><span>Framer</span><span>SEO</span></div>
            <a href="#methodologie">Voir notre manière de travailler <span>→</span></a>
          </div>

          <div className="featuredCaseVisual">
            <div className="caseDevice caseDeviceDesktop">
              <div className="caseBrowserBar"><i /><i /><i /><span>cleany.fr</span></div>
              <div className="caseMediaPlaceholder caseMediaRich">
                <div className="caseMediaCopy"><span>◉ Cleany</span><strong>Des espaces plus sains pour des entreprises plus fortes.</strong></div>
                <div className="caseMediaArt"><b /><b /><i /><i /></div>
                <em>VRAIE CAPTURE À INTÉGRER</em>
              </div>
            </div>
            <div className="caseDevice caseDeviceMobile">
              <div className="caseMediaPlaceholder"><strong>MOBILE</strong><span>Capture à intégrer</span></div>
            </div>
            <div className="caseSystemCard">
              <span>SYSTÈME</span>
              <b>Contenu → UX → Search → CMS</b>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="methodSection" id="methodologie" aria-labelledby="method-title">
        <Reveal className="sectionHead">
          <div>
            <div className="eyebrow">MÉTHODE</div>
            <h2 id="method-title">Le design arrive<br />après les bonnes questions.</h2>
          </div>
          <p>Nous avançons du business vers le système digital — pas l’inverse. C’est ce qui évite les refontes esthétiques qui vieillissent vite ou ne changent rien commercialement.</p>
        </Reveal>

        <div className="methodGrid">
          {method.map(([index, title, copy], i) => (
            <Reveal key={index} delay={i * 0.05}>
              <article>
                <span className="methodIndex">{index}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <div className="methodLine" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="technologySection" aria-labelledby="technology-title">
        <Reveal className="technologyIntro">
          <div className="eyebrow eyebrowLight">TECHNOLOGIE / DELIVERY</div>
          <h2 id="technology-title">La technologie vient<br />après le besoin.</h2>
          <p>Framer, Shopify, Search, IA ou développement custom : nous choisissons la couche qui rend le système plus performant, plus maintenable et plus simple pour les équipes.</p>
        </Reveal>

        <div className="technologyList">
          {technology.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <i aria-hidden="true">↗</i>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="founderSection" id="apropos" aria-labelledby="founder-title">
        <Reveal className="founderMedia">
          <div className="founderMediaTop"><span>FOUNDER / POINT OF VIEW</span><span>00:58</span></div>
          <div className="founderVideoPlaceholder">
            <button type="button" aria-label="Vidéo fondateur à intégrer"><span>▶</span></button>
            <p>VIDÉO FONDATEUR À INTÉGRER</p>
          </div>
        </Reveal>

        <Reveal className="founderCopy" delay={0.08}>
          <div className="eyebrow">NOTRE MANIÈRE DE PENSER</div>
          <h2 id="founder-title">Un bon site commence bien avant le design.</h2>
          <p>Avant de parler couleurs, composants ou animations, il faut comprendre pourquoi le site n’est plus au niveau de l’entreprise. C’est cette lecture qui guide ensuite la stratégie, la structure, la création et la technologie.</p>
          <Link href="/demande-de-devis">Parler de votre projet <span>↗</span></Link>
        </Reveal>
      </section>

      <section className="insightsSection" id="insights" aria-labelledby="insights-title">
        <Reveal className="sectionHead">
          <div>
            <div className="eyebrow">INSIGHTS</div>
            <h2 id="insights-title">Comprendre avant<br />de construire.</h2>
          </div>
          <p>Des contenus pour expliquer les décisions derrière une refonte, une migration ou un système digital plus performant.</p>
        </Reveal>

        <div className="insightsGrid">
          {[
            ["STRATÉGIE","Le Digital Perception Gap","Pourquoi certaines entreprises sont meilleures que l’image qu’elles projettent — et comment réduire cet écart."],
            ["TECHNOLOGIE","Framer, Shopify ou custom ?","Choisir le système qui sert le modèle économique, les équipes et le niveau d’ambition."],
            ["SEARCH","Refondre sans sacrifier le SEO","Préserver ce qui fonctionne, migrer proprement et reconstruire les fondations qui limitent la visibilité."],
          ].map(([kicker,title,copy], index)=>(
            <Reveal key={title} delay={index * 0.06}>
              <article><span>{kicker}</span><h3>{title}</h3><p>{copy}</p><b>En préparation</b></article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="partnerSection" id="partenaires" aria-label="Système d’apport d’affaires">
          <div>
            <div className="eyebrow">PARTENAIRES</div>
            <h2>Vous faites l’introduction.<br />Nous prenons la suite.</h2>
          </div>
          <div className="partnerAction">
            <p>Pour les consultants, partenaires et prescripteurs qui rencontrent des entreprises ayant un vrai besoin web ou e-commerce.</p>
            <Link href="/demande-de-devis?source=partenaire">Parler d’un apport d’affaires <span>→</span></Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="finalCtaSection" aria-labelledby="final-cta-title">
          <div className="finalCtaGlow" />
          <div className="eyebrow eyebrowLight">PROCHAINE ÉTAPE</div>
          <h2 id="final-cta-title">Votre site est-il encore<br />au niveau de votre entreprise ?</h2>
          <p>Si la réponse n’est pas évidente, c’est probablement un bon sujet de conversation.</p>
          <Link href="/demande-de-devis" className="finalCtaButton"><span>Parler de votre projet</span><span>↗</span></Link>
        </section>
      </Reveal>

      <footer className="siteFooter">
        <div className="footerBrand">
          <div className="brandLockup"><span className="brandWord">WebCrew</span><span className="brandDot" aria-hidden="true" /></div>
          <p>Agence web — stratégie, Framer & Shopify.<br />Nantes · France.</p>
        </div>
        <div className="footerLinks">
          <div><span>EXPERTISE</span><a href="#expertises">Sites web</a><a href="#expertises">E-commerce</a><a href="#approche">SEO & stratégie</a></div>
          <div><span>WEBCREW</span><a href="#realisations">Réalisations</a><a href="#insights">Insights</a><a href="#apropos">À propos</a></div>
          <div><span>CONTACT</span><Link href="/demande-de-devis">Parler du projet</Link><a href="#partenaires">Partenaires</a></div>
        </div>
        <div className="footerBottom"><span>© WebCrew 2026</span><span>Mentions légales · Confidentialité</span></div>
      </footer>
    </>
  );
}
