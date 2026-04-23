export const articles = [
  {
    slug: 'site-sur-mesure-vs-wordpress-2025',
    title: 'Site sur-mesure vs WordPress : lequel choisir en 2025 ?',
    excerpt: "Deux approches, deux philosophies. On compare le sur-mesure et WordPress sur les critères qui comptent vraiment : performance, SEO, autonomie et coût total de possession.",
    date: '2025-03-28',
    category: 'Sur-mesure',
    author: 'Julien',
    readTime: '6 min',
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=75",
    coverGradient: 'linear-gradient(135deg, #0f1520 0%, #1a2540 100%)',
    content: [
      {
        type: 'intro',
        text: "La question revient dans chaque premier appel client : \"On est sur WordPress, est-ce que ça vaut le coup de passer sur du sur-mesure ?\" La réponse courte : ça dépend. La réponse longue : voici notre analyse après avoir livré des dizaines de sites des deux côtés.",
      },
      {
        type: 'h2',
        text: 'Performance & Core Web Vitals',
      },
      {
        type: 'p',
        text: "WordPress est une plateforme puissante mais qui souffre d'une dette technique structurelle. Les plugins s'accumulent, le code se fragmente, et les scores Lighthouse peinent souvent à dépasser 70/100 sans optimisation agressive. Un site sur-mesure développé proprement (Next.js, code optimisé, hébergement moderne) atteint régulièrement des scores 95+ sans effort particulier. Pas de plugin de cache à configurer, pas de conflit JavaScript à gérer.",
      },
      {
        type: 'h2',
        text: 'SEO : les deux sont bons, mais pas pour les mêmes raisons',
      },
      {
        type: 'p',
        text: "WordPress domine grâce à son écosystème : Yoast, Rank Math, des années de contenu indexé. Le sur-mesure prend l'avantage avec une architecture sémantique parfaite, des temps de chargement excellents et un contrôle total des données structurées. Pour un nouveau site, le sur-mesure part aujourd'hui avec un avantage technique réel.",
      },
      {
        type: 'h2',
        text: 'Notre verdict',
      },
      {
        type: 'p',
        text: "Choisissez WordPress si vous avez un blog à très fort volume (500+ articles) et une équipe déjà formée. Choisissez le sur-mesure si vous voulez un site rapide, parfaitement adapté à votre marque, sans abonnement à payer chaque mois, et que vous voulez être propriétaire à 100% du code.",
      },
    ],
  },
  {
    slug: 'migrer-vers-shopify-5-raisons',
    title: 'Migrer votre boutique vers Shopify en 2025',
    excerpt: 'WooCommerce, PrestaShop, Magento… Vous en avez assez des mises à jour interminables et des bugs aléatoires ? Voici pourquoi Shopify change la donne.',
    date: '2025-03-14',
    category: 'E-commerce',
    author: 'Théo',
    readTime: '5 min',
    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=75",
    coverGradient: 'linear-gradient(135deg, #0d1f1a 0%, #1a3530 100%)',
    content: [
      {
        type: 'intro',
        text: "Après avoir accompagné une vingtaine de migrations vers Shopify, on a vu des clients passer de nuits blanches à dormir sur leurs deux oreilles. Voici les 5 raisons concrètes qui poussent nos clients à franchir le pas.",
      },
      {
        type: 'h2',
        text: '1. Zéro maintenance technique',
      },
      {
        type: 'p',
        text: "Avec WooCommerce, chaque mise à jour WordPress est un moment de stress. Plugin incompatible, page blanche, ralentissement inexpliqué… Shopify est un SaaS : les mises à jour sont transparentes, la sécurité est gérée par la plateforme, et votre uptime est garanti à 99,99%. Vous payez pour vendre, pas pour maintenir.",
      },
      {
        type: 'h2',
        text: '2. Des performances e-commerce natales',
      },
      {
        type: 'p',
        text: "Shopify est architecturé pour le e-commerce. CDN mondial, checkout ultra-optimisé, intégrations paiement natives. Les boutiques Shopify convertissent en moyenne 1,4x mieux que leurs équivalents WooCommerce, selon les données internes de nos clients migrés.",
      },
      {
        type: 'h2',
        text: '3. Un écosystème applicatif imbattable',
      },
      {
        type: 'p',
        text: "8 000+ applications dans le Shopify App Store, toutes vérifiées, toutes compatibles entre elles. Klaviyo pour l'emailing, Gorgias pour le support, Recharge pour les abonnements… En quelques clics, vous avez un stack e-commerce de niveau enterprise.",
      },
    ],
  },
  {
    slug: 'automatiser-prospection-n8n',
    title: 'Comment automatiser votre prospection avec n8n',
    excerpt: "De la détection d'un lead à l'envoi du premier email personnalisé : découvrez comment construire un workflow de prospection 100% automatisé avec n8n.",
    date: '2025-02-27',
    category: 'Automatisation',
    author: 'Julien',
    readTime: '8 min',
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=75",
    coverGradient: 'linear-gradient(135deg, #080e1f 0%, #151f3a 100%)',
    content: [
      {
        type: 'intro',
        text: "Prospecter manuellement, c'est chronophage et peu scalable. Avec n8n, on peut construire un workflow complet qui détecte les leads entrants, les qualifie automatiquement et déclenche la bonne séquence au bon moment. Comme c'est open source et auto-hébergeable, vos données restent chez vous. Voici comment on l'a construit pour plusieurs clients.",
      },
      {
        type: 'h2',
        text: 'Le workflow en 4 étapes',
      },
      {
        type: 'p',
        text: "Étape 1 : Déclencheur (Trigger). Dès qu'un formulaire est soumis (Typeform, HubSpot, site web), n8n intercepte les données via un webhook. Étape 2 : Qualification. Un nœud IF vérifie les critères de votre ICP (budget, taille d'entreprise, secteur). Étape 3 : Enrichissement. Connexion à Clearbit ou Apollo pour enrichir le profil du lead. Étape 4 : Action. Si qualifié → création dans le CRM + email personnalisé envoyé dans l'heure.",
      },
      {
        type: 'h2',
        text: 'Résultats observés',
      },
      {
        type: 'p',
        text: "Chez nos clients qui ont mis en place ce workflow, le temps de réponse moyen est passé de 4 heures à 12 minutes. Le taux de réponse aux premiers emails a augmenté de 40% grâce à la personnalisation automatisée. Et 100% des leads qualifiés sont maintenant tracés dans le CRM, sans aucune saisie manuelle.",
      },
    ],
  },
  {
    slug: 'tendances-design-web-2025',
    title: "Les tendances design web à ne pas manquer en 2025",
    excerpt: "Bento grids, glassmorphisme 2.0, typographies cinétiques… Le design web évolue vite. Voici ce qu'on voit émerger en 2025 et comment l'appliquer intelligemment.",
    date: '2025-02-10',
    category: 'Design',
    author: 'Théo',
    readTime: '5 min',
    cover: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=75",
    coverGradient: 'linear-gradient(135deg, #1a1020 0%, #2a1535 100%)',
    content: [
      {
        type: 'intro',
        text: "Le design web n'a jamais évolué aussi vite. En 2025, quelques tendances fortes se dégagent — certaines sont de vraies innovations, d'autres sont des effets de mode à aborder avec prudence. Notre lecture du marché.",
      },
      {
        type: 'h2',
        text: "Les Bento Grids s'imposent partout",
      },
      {
        type: 'p',
        text: "Popularisées par Apple et Linear, les Bento Grids (grilles de tuiles asymétriques) sont devenues le standard pour présenter des features ou des avantages. Elles offrent une hiérarchie visuelle forte et une grande flexibilité responsive. On les adopte, avec mesure : une grille bento mal pensée, c'est un chaos visuel.",
      },
      {
        type: 'h2',
        text: "La typographie devient l'élément hero",
      },
      {
        type: 'p',
        text: "Les grandes agences misent sur des typographies XXL, cinétiques, voire déformées comme principal élément visuel. Moins de visuels photo, plus de texte mis en scène. Ça demande une vraie maîtrise du rythme typographique mais le résultat est saisissant quand c'est bien exécuté.",
      },
      {
        type: 'h2',
        text: 'Dark mode par défaut',
      },
      {
        type: 'p',
        text: "Plus de 60% des utilisateurs ont maintenant leur OS en dark mode. Concevoir dark-first n'est plus un choix esthétique, c'est une décision UX. Chez Orion Studio, on conçoit en dark par défaut depuis 2023 — nos clients ne nous ont jamais remercié autant pour une décision technique.",
      },
    ],
  },
  {
    slug: 'seo-technique-erreurs',
    title: 'SEO technique : les 7 erreurs qui pénalisent votre site',
    excerpt: "Un bon SEO commence par les bases techniques. Voici les 7 erreurs que l'on corrige systématiquement sur les sites de nos nouveaux clients, peu importe la techno utilisée.",
    date: '2025-01-22',
    category: 'SEO',
    author: 'Julien',
    readTime: '7 min',
    cover: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=75",
    coverGradient: 'linear-gradient(135deg, #0e1a0e 0%, #152815 100%)',
    content: [
      {
        type: 'intro',
        text: "Beaucoup de sites perdent du trafic à cause de petites erreurs techniques que personne n'a vérifiées. Voici les 7 erreurs que l'on retrouve sur 80% des sites qu'on audite, et la façon dont on les corrige.",
      },
      {
        type: 'h2',
        text: 'Erreur 1 : Pas de balise H1 unique par page',
      },
      {
        type: 'p',
        text: "Beaucoup de sites mettent plusieurs H1 par page, ou aucun. Chaque page doit avoir exactement un H1, qui reprend le mot-clé principal. Vérifiez systématiquement avec un outil comme Screaming Frog.",
      },
      {
        type: 'h2',
        text: 'Erreur 2 : Images sans attribut alt',
      },
      {
        type: 'p',
        text: "Les attributs alt sont essentiels pour le SEO d'image et pour l'accessibilité. Pourtant, 70% des sites que nous auditons ont des images orphelines. C'est trivial à corriger et l'impact est direct sur Google Images.",
      },
      {
        type: 'h2',
        text: 'Erreur 3 : Canonical manquants ou incorrects',
      },
      {
        type: 'p',
        text: "Sur les sites avec des pages filtrées (catalogue produits, articles par catégorie), les URLs peuvent se dupliquer avec des paramètres. Sans canonical correctement configuré, vous créez du contenu dupliqué. Vérifiez que chaque template a son canonical dynamique bien configuré.",
      },
    ],
  },
  {
    slug: 'ux-conversion-design-ventes',
    title: 'UX & conversion : comment votre design influence vos ventes',
    excerpt: "Une mauvaise UX coûte des clients. Découvrez les 5 principes de design qui améliorent concrètement votre taux de conversion, illustrés par nos projets.",
    date: '2025-01-08',
    category: 'Design',
    author: 'Théo',
    readTime: '6 min',
    cover: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&q=75",
    coverGradient: 'linear-gradient(135deg, #1a0f15 0%, #2e1828 100%)',
    content: [
      {
        type: 'intro',
        text: "Votre site est beau. Il est rapide. Il est bien référencé. Pourtant, les visiteurs partent sans convertir. Dans 9 cas sur 10, le problème n'est pas le trafic — c'est l'UX. Voici ce qu'on optimise systématiquement chez nos clients pour faire bouger le taux de conversion.",
      },
      {
        type: 'h2',
        text: '1. La hiérarchie visuelle guide les décisions',
      },
      {
        type: 'p',
        text: "Un visiteur ne lit pas votre page, il la scanne. En moins de 5 secondes, il doit comprendre ce que vous faites et pourquoi il devrait rester. Si votre H1 est générique et que votre CTA principal est dans la partie basse de la page, vous perdez 80% de vos visiteurs avant qu'ils aient eu le temps de se convaincre.",
      },
      {
        type: 'h2',
        text: '2. La friction tue la conversion',
      },
      {
        type: 'p',
        text: "Chaque étape supplémentaire dans un formulaire, chaque champ obligatoire inutile, chaque redirection vers une autre page est de la friction. Sur un projet e-commerce récent, supprimer 3 champs du formulaire de checkout a augmenté le taux de complétion de 23%. La simplicité est un avantage concurrentiel.",
      },
      {
        type: 'h2',
        text: '3. La preuve sociale rassure',
      },
      {
        type: 'p',
        text: "Les témoignages, logos clients, chiffres clés et certifications doivent être visibles sans scroll. 92% des acheteurs consultent des avis avant de décider. Positionner vos preuves sociales near the fold (dans le premier écran ou juste après) peut doubler votre taux d'engagement.",
      },
    ],
  },
]
