import Link from 'next/link'

export default function Studio() {
  return (
    <section className="studio">
      <div className="container">

        {/* LEFT — texte + bouton */}
        <div className="studio__left">
          <h2 className="studio__title">
            NOUS SOMMES UNE AGENCE WEB,{' '}
            <span className="gradient-text">100% BASÉE EN FRANCE</span>, NOUS
            CONCEVONS DES SITES OÙ{' '}
            <span className="gradient-text">L&apos;ESTHÉTIQUE</span> RENCONTRE LA{' '}
            <span className="gradient-text">PERFORMANCE</span>.
          </h2>
          <Link href="/le-studio" className="cta">
            <span className="text-cta">Découvrir le studio</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/starblack.png" alt="" className="star" width="14" height="14" />
          </Link>
        </div>

        {/* RIGHT — système orbital */}
        <div className="studio__right content-mid orion">
          <div className="orbital-system">

            {/* Image de fond */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/basePlanet.webp" alt="" className="image-4" width="888" height="920" />

            {/* Orbites rotatives */}
            <div className="rotating _1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/planet1.png" alt="" className="planet" width="60" height="60" />
            </div>
            <div className="rotating _2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/planet2.png" alt="" className="planet" width="60" height="60" />
            </div>
            <div className="rotating _3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/planet3.png" alt="" className="planet" width="60" height="60" />
            </div>
            <div className="rotating _4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/planet4.png" alt="" className="planet" width="60" height="60" />
            </div>
            <div className="rotating _5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/planet5.png" alt="" className="planet" width="60" height="60" />
            </div>
            <div className="rotating _6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/planet6.png" alt="" className="planet" width="60" height="60" />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
