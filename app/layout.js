import './globals.css'
import PageTransition from '@/components/PageTransition'
import SmoothScroll from '@/components/SmoothScroll'

const SITE_URL = 'https://orion-studio.io'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Orion Studio — Agence Web sur-mesure',
    template: '%s — Orion Studio',
  },
  description: 'Agence web spécialisée en création de sites sur-mesure, boutiques Shopify et applications SaaS pour entrepreneurs et PME. Paris & Cannes.',
  applicationName: 'Orion Studio',
  authors: [{ name: 'Orion Studio', url: SITE_URL }],
  creator: 'Orion Studio',
  publisher: 'Orion Studio',
  keywords: [
    'agence web', 'site internet sur-mesure', 'développement web',
    'Shopify', 'e-commerce', 'SaaS', 'application web',
    'agence web Paris', 'agence web Cannes', 'agence web France',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Orion Studio',
    title: 'Orion Studio — Agence Web sur-mesure',
    description: 'Agence web spécialisée en création de sites sur-mesure, boutiques Shopify et applications SaaS pour entrepreneurs et PME. Paris & Cannes.',
    images: [
      {
        url: '/images/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Orion Studio — Agence web sur-mesure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orion Studio — Agence Web sur-mesure',
    description: 'Sites sur-mesure, boutiques Shopify et applications SaaS. Paris & Cannes.',
    images: ['/images/banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Orion Studio',
  legalName: 'Orion Studio SAS',
  url: SITE_URL,
  logo: `${SITE_URL}/images/favicon.png`,
  image: `${SITE_URL}/images/banner.webp`,
  description: 'Agence web française spécialisée en création de sites sur-mesure, boutiques Shopify et applications SaaS.',
  founders: [
    { '@type': 'Person', name: 'Julien' },
    { '@type': 'Person', name: 'Théo' },
  ],
  foundingDate: '2023',
  email: 'theo@orion-studio.io',
  areaServed: { '@type': 'Country', name: 'France' },
  sameAs: [
    'https://www.linkedin.com/company/orion-studio-io',
    'https://www.instagram.com/orionstudio.io',
  ],
}

const localBusinessSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#paris`,
    name: 'Orion Studio — Paris',
    image: `${SITE_URL}/images/banner.webp`,
    url: SITE_URL,
    email: 'julien@orion-studio.io',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '60 Rue François Ier',
      postalCode: '75008',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 48.8698, longitude: 2.3078 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '13:00' },
    ],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#cannes`,
    name: 'Orion Studio — Cannes',
    image: `${SITE_URL}/images/banner.webp`,
    url: SITE_URL,
    email: 'theo@orion-studio.io',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 Rue Merle',
      postalCode: '06400',
      addressLocality: 'Cannes',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 43.5516, longitude: 7.0177 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '13:00' },
    ],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  },
]

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Orion Studio',
  inLanguage: 'fr-FR',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {localBusinessSchema.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        <SmoothScroll />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
