import Link from "next/link";

export function SiteFooter() {
  return (
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
  );
}
