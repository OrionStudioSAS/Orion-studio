import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'

export const metadata = {
  title: 'Mentions légales',
  description: "Mentions légales d'Orion Studio SAS : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies.",
  alternates: { canonical: '/mentions-legales' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Mentions légales — Orion Studio',
    description: "Informations légales du site orion-studio.io.",
    url: '/mentions-legales',
    type: 'website',
  },
}

export default function MentionsLegales() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        <section className="article-hero">
          <div className="container">
            <span className="section-tag">INFORMATIONS LÉGALES</span>
            <h1 className="article-hero__title">Mentions légales</h1>
            <div className="article-hero__byline">
              <span>Dernière mise à jour : 1er mai 2026</span>
            </div>
          </div>
        </section>

        <article className="article-body">
          <div className="container">
            <div className="article-content">

              <p className="article-intro">
                Les présentes mentions légales s&apos;appliquent à toute personne consultant le site internet accessible à l&apos;adresse <strong>https://orion-studio.io</strong> (ci-après le « Site »). En accédant au Site, l&apos;utilisateur reconnaît avoir pris connaissance de ces mentions et les accepter sans réserve.
              </p>

              <h2>1. Éditeur du site</h2>
              <p>
                Le Site est édité par&nbsp;:
              </p>
              <p>
                <strong>Orion Studio</strong>, Société par Actions Simplifiée (SAS) au capital de 1&nbsp;000&nbsp;€.<br />
                Siège social : 60 rue François Ier, 75008 Paris, France.<br />
                SIREN : 938&nbsp;775&nbsp;368<br />
                SIRET : 938&nbsp;775&nbsp;368&nbsp;00013<br />
                RCS Paris : 938&nbsp;775&nbsp;368<br />
                Numéro de TVA intracommunautaire : FR83&nbsp;938775368<br />
                Code APE/NAF : 6312Z (Portails Internet)<br />
                Courriel : <a href="mailto:julien@orion-studio.io">julien@orion-studio.io</a>
              </p>
              <p>
                <strong>Directeur de la publication</strong> : Théophile Mazaud, en sa qualité de Président d&apos;Orion Studio.
              </p>

              <h2>2. Hébergement</h2>
              <p>
                Le Site est hébergé par&nbsp;:
              </p>
              <p>
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a><br />
                Contact&nbsp;: <a href="mailto:privacy@vercel.com">privacy@vercel.com</a>
              </p>
              <p>
                Le nom de domaine est enregistré auprès de&nbsp;:
              </p>
              <p>
                <strong>IONOS SARL</strong><br />
                7 place de la Gare, BP 70109, 57201 Sarreguemines Cedex, France.<br />
                Site web : <a href="https://www.ionos.fr" target="_blank" rel="noopener noreferrer">https://www.ionos.fr</a>
              </p>

              <h2>3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des éléments composant le Site (textes, images, vidéos, logos, marques, illustrations, photographies, design, code source, base de données, etc.) sont la propriété exclusive d&apos;Orion Studio ou de ses partenaires et sont protégés par le Code de la propriété intellectuelle français et international.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation, traduction ou exploitation de tout ou partie du Site, par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans l&apos;autorisation écrite préalable d&apos;Orion Studio. Toute exploitation non autorisée constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
              <p>
                La marque « Orion Studio », le logo et tous les signes distinctifs reproduits sur le Site sont des marques déposées. Toute reproduction ou utilisation non autorisée est strictement interdite.
              </p>

              <h2>4. Liens hypertextes</h2>
              <p>
                Le Site peut contenir des liens hypertextes vers d&apos;autres sites internet. Orion Studio n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur fonctionnement ou les pratiques de leurs éditeurs en matière de protection des données personnelles.
              </p>
              <p>
                La mise en place d&apos;un lien hypertexte vers le Site est libre, à condition de ne pas porter atteinte à l&apos;image ou aux intérêts d&apos;Orion Studio et de signaler clairement la source.
              </p>

              <h2>5. Données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) n°&nbsp;2016/679 et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, Orion Studio s&apos;engage à protéger la vie privée des utilisateurs du Site.
              </p>

              <h3>5.1. Données collectées</h3>
              <p>
                Le Site collecte des données personnelles uniquement via le formulaire de contact. Les données collectées sont&nbsp;:
              </p>
              <ul>
                <li>Type de projet (Site Vitrine, Site E-commerce, Autre)</li>
                <li>Nom de votre entreprise</li>
                <li>Adresse de votre site internet (facultative)</li>
                <li>Adresse email</li>
                <li>Informations complémentaires renseignées dans le message</li>
              </ul>

              <h3>5.2. Finalité du traitement</h3>
              <p>
                Ces données sont collectées dans le but exclusif de répondre à votre demande de contact, d&apos;établir un devis et, le cas échéant, de gérer la relation commerciale qui en découle. Elles ne font l&apos;objet d&apos;aucune transmission à des tiers à des fins commerciales.
              </p>

              <h3>5.3. Base légale</h3>
              <p>
                Le traitement repose sur le consentement de l&apos;utilisateur (article 6.1.a du RGPD), exprimé par l&apos;envoi volontaire du formulaire de contact, ainsi que sur l&apos;intérêt légitime d&apos;Orion Studio à répondre aux sollicitations commerciales (article 6.1.f du RGPD).
              </p>

              <h3>5.4. Destinataires</h3>
              <p>
                Les données sont reçues et traitées par les cofondateurs d&apos;Orion Studio (Julien et Théo) via la messagerie Gmail (Google Workspace). Aucune donnée n&apos;est cédée ou vendue à des tiers.
              </p>

              <h3>5.5. Durée de conservation</h3>
              <p>
                Les données collectées via le formulaire de contact sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact effectif, conformément aux recommandations de la CNIL pour la prospection commerciale B2B.
              </p>

              <h3>5.6. Vos droits</h3>
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles&nbsp;:
              </p>
              <ul>
                <li>Droit d&apos;accès, de rectification et d&apos;effacement</li>
                <li>Droit à la limitation et à l&apos;opposition au traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit de définir des directives relatives au sort de vos données après votre décès</li>
                <li>Droit d&apos;introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>)</li>
              </ul>
              <p>
                Pour exercer ces droits, écrivez-nous à <a href="mailto:julien@orion-studio.io">julien@orion-studio.io</a>. Une réponse vous sera apportée dans un délai maximum d&apos;un mois.
              </p>

              <h2>6. Cookies</h2>
              <p>
                Le Site ne dépose <strong>aucun cookie publicitaire ni de mesure d&apos;audience</strong> nécessitant le consentement préalable de l&apos;utilisateur. Aucun outil d&apos;analytics tiers (Google Analytics, etc.) n&apos;est utilisé.
              </p>
              <p>
                Seuls peuvent être déposés des cookies strictement nécessaires au bon fonctionnement du Site et des cookies techniques utilisés par notre hébergeur Vercel à des fins de sécurité, de prévention contre la fraude et de bon acheminement des requêtes. Ces cookies sont exemptés de consentement conformément à l&apos;article 82 de la loi « Informatique et Libertés ».
              </p>
              <p>
                Le Site charge également les polices typographiques Geist et Geist Mono via Google Fonts. Ce service peut établir une connexion avec les serveurs de Google. Aucune donnée personnelle identifiante n&apos;est transmise dans ce cadre.
              </p>

              <h2>7. Limitation de responsabilité</h2>
              <p>
                Orion Studio s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur le Site. Toutefois, Orion Studio ne saurait être tenue responsable des erreurs, omissions ou des résultats qui pourraient être obtenus par l&apos;usage de ces informations.
              </p>
              <p>
                Orion Studio ne pourra être tenue responsable des dommages directs ou indirects résultant de l&apos;accès au Site ou de son utilisation, ni d&apos;une éventuelle indisponibilité temporaire du Site.
              </p>

              <h2>8. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents. Compte tenu de l&apos;activité exclusivement <strong>B2B</strong> d&apos;Orion Studio, le tribunal compétent sera le tribunal de commerce du ressort du siège social, soit le Tribunal de commerce de Paris.
              </p>

              <h2>9. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales ou au Site, vous pouvez nous contacter par email à <a href="mailto:julien@orion-studio.io">julien@orion-studio.io</a> ou par courrier à&nbsp;:
              </p>
              <p>
                Orion Studio<br />
                60 rue François Ier<br />
                75008 Paris<br />
                France
              </p>

            </div>
          </div>
        </article>

      </main>
      <Footer />
      <ScrollObserver />
    </>
  )
}
