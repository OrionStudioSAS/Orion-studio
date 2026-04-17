'use client'
import { useState } from 'react'
import Script from 'next/script'

export default function Contact() {
  const [tab, setTab] = useState('call')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      e.target.reset()
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section className="contact" id="contact">
      {/* Script iClosed chargé une seule fois, après le rendu */}
      <Script src="https://app.iclosed.io/assets/widget.js" strategy="lazyOnload" />

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
              onClick={() => setTab('call')}
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
            <div
              className="iclosed-widget"
              data-url="https://app.iclosed.io/e/orion-studio/reservez-un-call-1-to-1"
              title="Réservez un call 1-to-1"
              style={{ width: '100%', height: '620px' }}
            />
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
                    {status === 'sending' ? 'Envoi en cours...' : status === 'sent' ? 'Message envoyé ✓' : 'Envoyer ma demande'}
                  </span>
                  {status !== 'sent' && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="/images/starblack.png" alt="" className="star" />
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
