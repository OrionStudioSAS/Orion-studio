'use client'
import { useState } from 'react'
import Script from 'next/script'

// Mémorise si l'utilisateur a déjà ouvert le tab "Réserver un call"
// pour ne charger le widget iClosed qu'à la demande (~2MB de JS tiers)

const WEB3FORMS_KEY = '6d517371-d33d-4ecb-b7a2-eac374506c30'

export default function Contact() {
  const [tab, setTab] = useState('call')
  const [callOpened, setCallOpened] = useState(false) // déclenche le chargement iClosed
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const openCall = () => {
    setTab('call')
    setCallOpened(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.target
    const formData = new FormData(form)

    // Récupérer toutes les cases cochées en une seule string lisible
    const services = formData.getAll('service').join(', ') || '—'

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `Nouvelle demande — ${formData.get('company') || 'Sans nom'}`,
      from_name: 'Formulaire Orion Studio',
      replyto: formData.get('email'),
      // Champs personnalisés (apparaîtront dans le mail)
      Entreprise: formData.get('company'),
      Site: formData.get('website') || '—',
      Email: formData.get('email'),
      Services: services,
      Message: formData.get('message') || '—',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setErrorMsg(data.message || "Erreur lors de l'envoi.")
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Connexion impossible. Réessayez dans un instant.')
    }
  }

  return (
    <section className="contact" id="contact">
      {/* Script iClosed chargé uniquement quand l'utilisateur ouvre le tab "Réserver un call" */}
      {callOpened && (
        <Script src="https://app.iclosed.io/assets/widget.js" strategy="lazyOnload" />
      )}

      <div className="container">

        {/* Header */}
        <div className="contact__header">
          <div className="section-header">
            <h2>Parlez-nous de votre projet</h2>
            <p>Choisissez comment vous préférez nous contacter.</p>
          </div>

          {/* Switcher */}
          <div className="contact__switcher">
            <button
              className={`contact__switch-btn ${tab === 'call' ? 'active' : ''}`}
              onClick={openCall}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tab === 'call' ? '/images/starblack.png' : '/images/starwhite.png'}
                alt=""
                className="star"
              />
              <span className="text-cta">Réserver un call</span>
            </button>
            <button
              className={`contact__switch-btn ${tab === 'form' ? 'active' : ''}`}
              onClick={() => setTab('form')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tab === 'form' ? '/images/starblack.png' : '/images/starwhite.png'}
                alt=""
                className="star"
              />
              <span className="text-cta">Nous écrire</span>
            </button>
          </div>
        </div>

        {/* Panneaux */}
        <div className="contact__panels">

          {/* ── CALL ── */}
          <div className={`contact__panel ${tab === 'call' ? 'active' : ''}`}>
            {callOpened ? (
              <div
                className="iclosed-widget"
                data-url="https://app.iclosed.io/e/orion-studio/reservez-un-call-1-to-1"
                title="Réservez un call 1-to-1"
                style={{ width: '100%', height: '620px' }}
              />
            ) : (
              <button
                type="button"
                onClick={openCall}
                className="contact__call-placeholder"
                aria-label="Charger le calendrier de réservation"
              >
                <span className="contact__call-placeholder-title">
                  Choisissez un créneau
                </span>
                <span className="contact__call-placeholder-desc">
                  Cliquez pour afficher le calendrier de réservation
                </span>
              </button>
            )}
          </div>

          {/* ── FORMULAIRE ── */}
          <div className={`contact__panel ${tab === 'form' ? 'active' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__services">
                <label className="checkbox-label">
                  <input type="checkbox" name="service" value="vitrine" />
                  <span>Site Vitrine</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="service" value="ecommerce" />
                  <span>Site E-commerce</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="service" value="automatisation" />
                  <span>Automatisation</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="service" value="autre" />
                  <span>Autre</span>
                </label>
              </div>
              <div className="contact-form__fields">
                <div className="form-group">
                  <label htmlFor="company">Nom de votre entreprise</label>
                  <input type="text" id="company" name="company" placeholder="Acme Inc." required />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Votre site (facultatif)</label>
                  <input type="url" id="website" name="website" placeholder="https://monsite.fr" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="hello@monentreprise.fr" required />
                </div>
                <div className="form-group form-group--full">
                  <label htmlFor="message">Informations complémentaires</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet, vos objectifs, votre budget estimé..."
                  />
                </div>
              </div>
              <div className="contact-form__submit">
                <button type="submit" className="cta" disabled={status === 'sending'}>
                  <span className="text-cta">
                    {status === 'sending'
                      ? 'Envoi en cours...'
                      : status === 'sent'
                      ? 'Message envoyé ✓'
                      : status === 'error'
                      ? 'Réessayer'
                      : 'Envoyer ma demande'}
                  </span>
                  {status !== 'sent' && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="/images/starblack.png" alt="" className="star" />
                  )}
                </button>
                {status === 'error' && (
                  <p className="contact-form__error">{errorMsg}</p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
