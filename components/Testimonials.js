const testimonials = [
  {
    initials: 'VL',
    name: 'Virginie Lelong',
    role: 'Diététicienne nutritionniste',
    text: '"Absolument ravie du résultat\u00a0! Mon site internet correspond parfaitement à mes attentes\u00a0: design soigné, navigation fluide et accompagnement très professionnel du début à la fin. À l\'écoute, réactif et force de proposition. Je recommande sans hésitation\u00a0!"',
  },
  {
    initials: 'VC',
    name: 'Vincent Chopine',
    role: 'Association AEV',
    text: '"Nous avons fait appel à Orion Studio pour la création de notre site internet et l\'expérience a été excellente du début à la fin. L\'équipe a su parfaitement comprendre nos besoins et nous proposer un site moderne, rapide et surtout très facile à administrer."',
  },
  {
    initials: 'TC',
    name: 'Thierry Cordier',
    role: 'Association AEV',
    text: '"Orion Studio nous a accompagnés sur la refonte complète de notre présence en ligne. Leur expertise sur le développement sur-mesure et Shopify est impressionnante, et ils ont également mis en place plusieurs automatisations qui nous font gagner un temps précieux au quotidien."',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TÉMOIGNAGES</span>
          <h2>Ce que disent nos clients</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.initials} className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <p>{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
