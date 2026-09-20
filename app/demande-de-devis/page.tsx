import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de devis — WebCrew",
  description: "Planifiez un échange avec WebCrew pour parler de votre projet de site, refonte ou e-commerce.",
};

export default function QuotePage(){
  return (
    <main className="quotePage">
      <div className="quoteShell">
        <header className="quoteHeader">
          <Link href="/" className="brandLockup" aria-label="WebCrew — retour à l’accueil"><span className="brandWord">WebCrew</span><span className="brandDot" aria-hidden="true" /></Link>
          <Link href="/" className="quoteBack">← Retour au site</Link>
        </header>
        <section className="quoteGrid">
          <div className="quoteCopy">
            <div className="eyebrow">DEMANDE DE DEVIS</div>
            <h1>Parlons de<br />votre projet.</h1>
            <p>Choisissez directement un créneau dans l’agenda ou appelez-nous si vous préférez échanger tout de suite.</p>
            <a className="heroPrimary quotePhone" href="tel:+33000000000"><span>Appeler WebCrew</span><span>↗</span></a>
            <small>Numéro à remplacer avant publication.</small>
          </div>
          <div className="calendarShell">
            <div className="calendarTop"><span>30 MIN</span><span>WEB / E-COMMERCE</span></div>
            <div className="calendarPlaceholder">
              <span className="calendarIcon">↗</span>
              <strong>Agenda Google à connecter</strong>
              <p>Le composant accueillera votre page Google Calendar Appointment Schedule après validation du design.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
