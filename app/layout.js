import './globals.css'
import PageTransition from '@/components/PageTransition'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata = {
  title: 'Orion Studio — Agence Web & Automatisations',
  description: 'Agence web spécialisée en création de sites sur-mesure, boutiques Shopify, automatisations n8n et applications SaaS pour entrepreneurs et PME. Paris & Cannes.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
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
      </head>
      <body>
        <SmoothScroll />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
