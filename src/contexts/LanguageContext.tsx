import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'it' | 'de' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.apps': 'Apps',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.reseller': 'Reseller',
    'nav.contact': 'Contact',
    'header.startNow': 'Start Now',
    
    // Hero Section
    'hero.title': 'Stable, fast, and uninterrupted streaming.',
    'hero.subtitle': 'Thousands of live channels and on-demand content. Works on Smart TV, PC, and mobile. Get access in minutes.',
    'hero.startFrom': 'Start now from $15',
    'hero.whatsapp': 'Talk to an agent now',
    
    // Testimonials
    'testimonials.title': "Don't Trust Our Word. Trust Our Customers.",
    
    // Infrastructure
    'infrastructure.title': 'The Goliath Infrastructure',
    'infrastructure.servers': 'Global Servers',
    'infrastructure.backup': 'Automated Backup System',
    'infrastructure.cdn': 'Anti-Buffering CDN',
    'infrastructure.monitoring': 'Network Monitoring',
    'infrastructure.uptime': 'Uptime',
    'infrastructure.channels': 'Channels',
    'infrastructure.quality': 'Quality',
    'infrastructure.support': 'Support',
    
    // Pricing
    'pricing.month1': '1 Month',
    'pricing.months3': '3 Months',
    'pricing.months6': '6 Months',
    'pricing.months12': '12 Months',
    'pricing.mostPopular': 'Most Popular',
    'pricing.bestDeal': 'Best Deal',
    'pricing.subscribeNow': 'Subscribe Now',
    
    // Payment Methods
    'payment.title': '100% Secure & Fast Payments',
    'payment.step1': 'Buy via Eneba / Wise / Crypto',
    'payment.step2': 'Send receipt (WhatsApp / Telegram)',
    'payment.step3': 'Get access in less than 5 minutes',
    'payment.recommended': 'Eneba recommended (accepts credit & debit cards)',
    
    // Footer
    'footer.reseller': 'Want to become a reseller? Join our program.',
    'footer.margins': 'High Margins',
    'footer.fullSupport': 'Full Support',
    'footer.flexible': 'Flexible Credits',
    'footer.resellerInfo': 'Request Reseller Info',
    'footer.needHelp': 'Need help? See our FAQ',
    'footer.telegram': 'Open Telegram',
    'footer.whatsapp': 'Open WhatsApp',
    'footer.email': 'Send an Email',
    'footer.responseTime': 'Average response time: under 30 minutes',
    'footer.getSupport': 'Get Support',
    
    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about GeniusTV IPTV service',
    'faq.stillNeedHelp': 'Still need help?',
    'faq.whatsappSupport': 'WhatsApp Support',
    'faq.telegramSupport': 'Telegram Support',
    
    // Contact Page
    'contact.title': ' Contact an agent now',
    'contact.subtitle': 'Get instant help from our technical team',
    'contact.sendMessage': 'Send us a message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your full name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Your message',
    'contact.send': 'Send Message',
    'contact.instantSupport': 'Instant Support',
    'contact.immediateAssistance': 'For immediate assistance, use our direct channels:',
    'contact.responseTimes': 'Response Times',
    'contact.technicalIssues': 'Technical Issues?',
    'contact.beforeContacting': 'Before contacting support, try these quick fixes:',
    
    // Apps Page
    'apps.title': 'Best Apps for IPTV Streaming by Device',
    'apps.subtitle': 'Choose the perfect IPTV application for your device to get the best streaming experience',
    'apps.recommended': 'Recommended',
    'apps.setupTitle': 'How to Set Up Your IPTV App',
    'apps.step1': 'Download the App',
    'apps.step1Desc': 'Install your chosen IPTV app from the official app store',
    'apps.step2': 'Get Your Credentials',
    'apps.step2Desc': 'Receive M3U URL GeniusTV after subscription',
    'apps.step3': 'Configure the App',
    'apps.step3Desc': 'Enter your credentials and configure player settings',
    'apps.step4': 'Start Streaming',
    'apps.step4Desc': 'Enjoy 20,000+ channels with premium quality',
    'apps.proTips': 'Pro Tips for Better Streaming',
    'apps.optimizeVideo': 'Optimize Video Quality',
    'apps.reduceBuffering': 'Reduce Buffering',
    'apps.readyToStart': 'Ready to Start Streaming?',
    'apps.readyDesc': 'Choose your subscription plan and get instant access to all IPTV apps and setup guides',
    'apps.viewPricing': 'View Pricing Plans',
    'apps.contactSupport': 'Contact Support',
    
    // Blog Page
    'blog.title': 'Latest Insights on IPTV Technology & Streaming Trends',
    'blog.subtitle': 'Stay updated with the latest IPTV news, tutorials, and industry insights',
    'blog.featured': 'Featured Article',
    'blog.readMore': 'Read More',
    'blog.loadMore': 'Load More Articles',
    'blog.categories.all': 'All',
    'blog.categories.technology': 'Technology',
    'blog.categories.tutorial': 'Tutorial',
    'blog.categories.comparison': 'Comparison',
    'blog.categories.legal': 'Legal',
    'blog.categories.apps': 'Apps',
    
    // Reseller Page
    'reseller.title': 'Become a GeniusTV Reseller',
    'reseller.subtitle': 'Join our profitable reseller program and start earning with premium IPTV services',
    'reseller.whyBecome': 'Why Become a Reseller?',
    'reseller.highMargins': 'High Profit Margins',
    'reseller.marginsDesc': 'Earn up to 50% commission on every sale',
    'reseller.support': '24/7 Support',
    'reseller.supportDesc': 'Dedicated reseller support team',
    'reseller.materials': 'Marketing Materials',
    'reseller.materialsDesc': 'Professional promotional content provided',
    'reseller.flexible': 'Flexible Pricing',
    'reseller.flexibleDesc': 'Set your own prices and packages',
    'reseller.packs': 'Reseller Credit Packs',
    'reseller.credits': 'Credits',
    'reseller.buyNow': 'Buy Now',
    'reseller.howItWorks': 'How It Works',
    'reseller.work1': 'Purchase Credits',
    'reseller.work1Desc': 'Buy reseller credits in bulk packages',
    'reseller.work2': 'Sell Subscriptions',
    'reseller.work2Desc': 'Use credits to activate customer accounts',
    'reseller.work3': 'Earn Profits',
    'reseller.work3Desc': 'Keep the difference as your profit margin',
    'reseller.ready': 'Ready to Start Earning?',
    'reseller.readyDesc': 'Contact our reseller team to get started with your profitable IPTV business',
    'reseller.contactUs': 'Contact Reseller Team',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.apps': 'Apps',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.reseller': 'Revendedor',
    'nav.contact': 'Contacto',
    'header.startNow': 'Comenzar Ahora',
    
    // Hero Section
    'hero.title': 'Streaming estable, rápido e ininterrumpido.',
    'hero.subtitle': 'Miles de canales en vivo y contenido bajo demanda. Funciona en Smart TV, PC y móvil. Obtén acceso en minutos.',
    'hero.startFrom': 'Comenzar desde $15',
    'hero.whatsapp': 'Hablar con un agente ahora',
    
    // Testimonials
    'testimonials.title': 'No confíes en nuestra palabra. Confía en nuestros clientes.',
    
    // Infrastructure
    'infrastructure.title': 'La Infraestructura Goliath',
    'infrastructure.servers': 'Servidores Globales',
    'infrastructure.backup': 'Sistema de Respaldo Automático',
    'infrastructure.cdn': 'CDN Anti-Buffering',
    'infrastructure.monitoring': 'Monitoreo de Red',
    'infrastructure.uptime': 'Tiempo Activo',
    'infrastructure.channels': 'Canales',
    'infrastructure.quality': 'Calidad',
    'infrastructure.support': 'Soporte',
    
    // Pricing
    'pricing.month1': '1 Mes',
    'pricing.months3': '3 Meses',
    'pricing.months6': '6 Meses',
    'pricing.months12': '12 Meses',
    'pricing.mostPopular': 'Más Popular',
    'pricing.bestDeal': 'Mejor Oferta',
    'pricing.subscribeNow': 'Suscribirse Ahora',
    
    // Payment Methods
    'payment.title': 'Pagos 100% Seguros y Rápidos',
    'payment.step1': 'Comprar vía Eneba / Wise / Crypto',
    'payment.step2': 'Enviar recibo (WhatsApp / Telegram)',
    'payment.step3': 'Obtener acceso en menos de 5 minutos',
    'payment.recommended': 'Eneba recomendado (acepta tarjetas de crédito y débito)',
    
    // Footer
    'footer.reseller': '¿Quieres ser revendedor? Únete a nuestro programa.',
    'footer.margins': 'Altos Márgenes',
    'footer.fullSupport': 'Soporte Completo',
    'footer.flexible': 'Créditos Flexibles',
    'footer.resellerInfo': 'Solicitar Info de Revendedor',
    'footer.needHelp': '¿Necesitas ayuda? Ver nuestro FAQ',
    'footer.telegram': 'Abrir Telegram',
    'footer.whatsapp': 'Abrir WhatsApp',
    'footer.email': 'Enviar un Email',
    'footer.responseTime': 'Tiempo de respuesta promedio: menos de 30 minutos',
    'footer.getSupport': 'Obtener Soporte',
    
    // FAQ Page
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Encuentra respuestas a preguntas comunes sobre el servicio IPTV de GeniusTV',
    'faq.stillNeedHelp': '¿Aún necesitas ayuda?',
    'faq.whatsappSupport': 'Soporte WhatsApp',
    'faq.telegramSupport': 'Soporte Telegram',
    
    // Contact Page
    'contact.title': 'Contacte con un agente ahora',
    'contact.subtitle': 'Obtén ayuda instantánea de nuestro equipo técnico',
    'contact.sendMessage': 'Envíanos un mensaje',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre completo',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Tu mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.instantSupport': 'Soporte Instantáneo',
    'contact.immediateAssistance': 'Para asistencia inmediata, usa nuestros canales directos:',
    'contact.responseTimes': 'Tiempos de Respuesta',
    'contact.technicalIssues': '¿Problemas Técnicos?',
    'contact.beforeContacting': 'Antes de contactar soporte, prueba estas soluciones rápidas:',
    
    // Apps Page
    'apps.title': 'Mejores Apps para Streaming IPTV por Dispositivo',
    'apps.subtitle': 'Elige la aplicación IPTV perfecta para tu dispositivo para obtener la mejor experiencia de streaming',
    'apps.recommended': 'Recomendado',
    'apps.setupTitle': 'Cómo Configurar tu App IPTV',
    'apps.step1': 'Descargar la App',
    'apps.step1Desc': 'Instala tu app IPTV elegida desde la tienda oficial de apps',
    'apps.step2': 'Obtener tus Credenciales',
    'apps.step2Desc': 'Recibe URL M3U y EPG de GeniusTV después de la suscripción',
    'apps.step3': 'Configurar la App',
    'apps.step3Desc': 'Ingresa tus credenciales y configura los ajustes del reproductor',
    'apps.step4': 'Comenzar Streaming',
    'apps.step4Desc': 'Disfruta más de 20,000 canales con calidad premium',
    'apps.proTips': 'Consejos Pro para Mejor Streaming',
    'apps.optimizeVideo': 'Optimizar Calidad de Video',
    'apps.reduceBuffering': 'Reducir Buffering',
    'apps.readyToStart': '¿Listo para Comenzar Streaming?',
    'apps.readyDesc': 'Elige tu plan de suscripción y obtén acceso instantáneo a todas las apps IPTV y guías de configuración',
    'apps.viewPricing': 'Ver Planes de Precios',
    'apps.contactSupport': 'Contactar Soporte',
    
    // Blog Page
    'blog.title': 'Últimas Perspectivas sobre Tecnología IPTV y Tendencias de Streaming',
    'blog.subtitle': 'Mantente actualizado con las últimas noticias IPTV, tutoriales e insights de la industria',
    'blog.featured': 'Artículo Destacado',
    'blog.readMore': 'Leer Más',
    'blog.loadMore': 'Cargar Más Artículos',
    'blog.categories.all': 'Todos',
    'blog.categories.technology': 'Tecnología',
    'blog.categories.tutorial': 'Tutorial',
    'blog.categories.comparison': 'Comparación',
    'blog.categories.legal': 'Legal',
    'blog.categories.apps': 'Apps',
    
    // Reseller Page
    'reseller.title': 'Conviértete en Revendedor de GeniusTV',
    'reseller.subtitle': 'Únete a nuestro programa de revendedores rentable y comienza a ganar con servicios IPTV premium',
    'reseller.whyBecome': '¿Por qué Ser Revendedor?',
    'reseller.highMargins': 'Altos Márgenes de Ganancia',
    'reseller.marginsDesc': 'Gana hasta 50% de comisión en cada venta',
    'reseller.support': 'Soporte 24/7',
    'reseller.supportDesc': 'Equipo de soporte dedicado para revendedores',
    'reseller.materials': 'Materiales de Marketing',
    'reseller.materialsDesc': 'Contenido promocional profesional proporcionado',
    'reseller.flexible': 'Precios Flexibles',
    'reseller.flexibleDesc': 'Establece tus propios precios y paquetes',
    'reseller.packs': 'Paquetes de Créditos de Revendedor',
    'reseller.credits': 'Créditos',
    'reseller.buyNow': 'Comprar Ahora',
    'reseller.howItWorks': 'Cómo Funciona',
    'reseller.work1': 'Comprar Créditos',
    'reseller.work1Desc': 'Compra créditos de revendedor en paquetes al por mayor',
    'reseller.work2': 'Vender Suscripciones',
    'reseller.work2Desc': 'Usa créditos para activar cuentas de clientes',
    'reseller.work3': 'Ganar Ganancias',
    'reseller.work3Desc': 'Quédate con la diferencia como tu margen de ganancia',
    'reseller.ready': '¿Listo para Comenzar a Ganar?',
    'reseller.readyDesc': 'Contacta nuestro equipo de revendedores para comenzar con tu negocio IPTV rentable',
    'reseller.contactUs': 'Contactar Equipo de Revendedores',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.apps': 'Applications',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.reseller': 'Revendeur',
    'nav.contact': 'Contact',
    'header.startNow': 'Commencer Maintenant',
    
    // Hero Section
    'hero.title': 'Streaming stable, rapide et ininterrompu.',
    'hero.subtitle': 'Des milliers de chaînes en direct et de contenu à la demande. Fonctionne sur Smart TV, PC et mobile. Accès en quelques minutes.',
    'hero.startFrom': 'Commencer à partir de 15$',
    'hero.whatsapp': 'Parler à un agent maintenant',
    
    // Testimonials
    'testimonials.title': 'Ne nous croyez pas sur parole. Faites confiance à nos clients.',
    
    // Infrastructure
    'infrastructure.title': 'L\'Infrastructure Goliath',
    'infrastructure.servers': 'Serveurs Globaux',
    'infrastructure.backup': 'Système de Sauvegarde Automatique',
    'infrastructure.cdn': 'CDN Anti-Buffering',
    'infrastructure.monitoring': 'Surveillance Réseau',
    'infrastructure.uptime': 'Temps de Fonctionnement',
    'infrastructure.channels': 'Chaînes',
    'infrastructure.quality': 'Qualité',
    'infrastructure.support': 'Support',
    
    // Add more French translations...
    'pricing.month1': '1 Mois',
    'pricing.months3': '3 Mois',
    'pricing.months6': '6 Mois',
    'pricing.months12': '12 Mois',
    'pricing.mostPopular': 'Plus Populaire',
    'pricing.bestDeal': 'Meilleure Offre',
    'pricing.subscribeNow': 'S\'abonner Maintenant',

    // Payment Methods
    'payment.title': 'Paiements 100% Sécurisés et Rapides',
    'payment.step1': 'Acheter via Eneba / Wise / Crypto',
    'payment.step2': 'Envoyer reçu (WhatsApp / Telegram)',
    'payment.step3': 'Obtenir accès en moins de 5 minutes',
    'payment.recommended': 'Eneba recommandé (accepte cartes de crédit et débit)',
    
    // Footer
    'footer.reseller': 'Voulez-vous devenir revendeur ? Rejoignez notre programme.',
    'footer.margins': 'Marges Élevées',
    'footer.fullSupport': 'Support Complet',
    'footer.flexible': 'Crédits Flexibles',
    'footer.resellerInfo': 'Demander Info Revendeur',
    'footer.needHelp': 'Besoin d\'aide ? Voir notre FAQ',
    'footer.telegram': 'Ouvrir Telegram',
    'footer.whatsapp': 'Ouvrir WhatsApp',
    'footer.email': 'Envoyer un Email',
    'footer.responseTime': 'Temps de réponse moyen : moins de 30 minutes',
    'footer.getSupport': 'Obtenir Support',
    
    // FAQ Page
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Trouvez des réponses aux questions courantes sur le service IPTV GeniusTV',
    'faq.stillNeedHelp': 'Besoin d\'aide supplémentaire ?',
    'faq.whatsappSupport': 'Support WhatsApp',
    'faq.telegramSupport': 'Support Telegram',
    
    // Contact Page
    'contact.title': 'Contacter le Support',
    'contact.subtitle': 'Obtenez une aide instantanée de notre équipe technique',
    'contact.sendMessage': 'Envoyez-nous un message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Votre nom complet',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'votre@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Décrivez votre problème ou question...',
    'contact.send': 'Envoyer Message',
    'contact.instantSupport': 'Support Instantané',
    'contact.immediateAssistance': 'Pour une assistance immédiate, utilisez nos canaux directs :',
    'contact.responseTimes': 'Temps de Réponse',
    'contact.technicalIssues': 'Problèmes Techniques ?',
    'contact.beforeContacting': 'Avant de contacter le support, essayez ces solutions rapides :',
    
    // Apps Page
    'apps.title': 'Meilleures Applications pour Streaming IPTV par Appareil',
    'apps.subtitle': 'Choisissez l\'application IPTV parfaite pour votre appareil pour obtenir la meilleure expérience de streaming',
    'apps.recommended': 'Recommandé',
    'apps.setupTitle': 'Comment Configurer votre Application IPTV',
    'apps.step1': 'Télécharger l\'Application',
    'apps.step1Desc': 'Installez votre application IPTV choisie depuis le magasin d\'applications officiel',
    'apps.step2': 'Obtenir vos Identifiants',
    'apps.step2Desc': 'Recevez l\'URL M3U et EPG de GeniusTV après l\'abonnement',
    'apps.step3': 'Configurer l\'Application',
    'apps.step3Desc': 'Entrez vos identifiants et configurez les paramètres du lecteur',
    'apps.step4': 'Commencer le Streaming',
    'apps.step4Desc': 'Profitez de plus de 20 000 chaînes avec une qualité premium',
    'apps.proTips': 'Conseils Pro pour un Meilleur Streaming',
    'apps.optimizeVideo': 'Optimiser la Qualité Vidéo',
    'apps.reduceBuffering': 'Réduire la Mise en Mémoire Tampon',
    'apps.readyToStart': 'Prêt à Commencer le Streaming ?',
    'apps.readyDesc': 'Choisissez votre plan d\'abonnement et obtenez un accès instantané à toutes les applications IPTV et guides de configuration',
    'apps.viewPricing': 'Voir les Plans de Prix',
    'apps.contactSupport': 'Contacter le Support',
    
    // Blog Page
    'blog.title': 'Dernières Perspectives sur la Technologie IPTV et les Tendances de Streaming',
    'blog.subtitle': 'Restez à jour avec les dernières nouvelles IPTV, tutoriels et insights de l\'industrie',
    'blog.featured': 'Article en Vedette',
    'blog.readMore': 'Lire Plus',
    'blog.loadMore': 'Charger Plus d\'Articles',
    'blog.categories.all': 'Tous',
    'blog.categories.technology': 'Technologie',
    'blog.categories.tutorial': 'Tutoriel',
    'blog.categories.comparison': 'Comparaison',
    'blog.categories.legal': 'Légal',
    'blog.categories.apps': 'Applications',
    
    // Reseller Page
    'reseller.title': 'Devenez Revendeur GeniusTV',
    'reseller.subtitle': 'Rejoignez notre programme de revendeurs rentable et commencez à gagner avec les services IPTV premium',
    'reseller.whyBecome': 'Pourquoi Devenir Revendeur ?',
    'reseller.highMargins': 'Marges de Profit Élevées',
    'reseller.marginsDesc': 'Gagnez jusqu\'à 50% de commission sur chaque vente',
    'reseller.support': 'Support 24/7',
    'reseller.supportDesc': 'Équipe de support dédiée aux revendeurs',
    'reseller.materials': 'Matériaux de Marketing',
    'reseller.materialsDesc': 'Contenu promotionnel professionnel fourni',
    'reseller.flexible': 'Prix Flexibles',
    'reseller.flexibleDesc': 'Définissez vos propres prix et forfaits',
    'reseller.packs': 'Packs de Crédits Revendeur',
    'reseller.credits': 'Crédits',
    'reseller.buyNow': 'Acheter Maintenant',
    'reseller.howItWorks': 'Comment Ça Fonctionne',
    'reseller.work1': 'Acheter des Crédits',
    'reseller.work1Desc': 'Achetez des crédits revendeur en packs en gros',
    'reseller.work2': 'Vendre des Abonnements',
    'reseller.work2Desc': 'Utilisez les crédits pour activer les comptes clients',
    'reseller.work3': 'Gagner des Profits',
    'reseller.work3Desc': 'Gardez la différence comme votre marge de profit',
    'reseller.ready': 'Prêt à Commencer à Gagner ?',
    'reseller.readyDesc': 'Contactez notre équipe de revendeurs pour commencer votre activité IPTV rentable',
    'reseller.contactUs': 'Contacter l\'Équipe Revendeurs',
  },
  it: {
    // Header
    'nav.home': 'Home',
    'nav.apps': 'App',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.reseller': 'Rivenditore',
    'nav.contact': 'Contatto',
    'header.startNow': 'Inizia Ora',
    
    // Hero Section
    'hero.title': 'Streaming stabile, veloce e ininterrotto.',
    'hero.subtitle': 'Migliaia di canali live e contenuti on-demand. Funziona su Smart TV, PC e mobile. Accesso in pochi minuti.',
    'hero.startFrom': 'Inizia da $15',
    'hero.whatsapp': 'Parla con un agente ora',
    
    // Add more Italian translations...

      // Testimonials
    'testimonials.title': 'Non fidarti delle nostre parole. Fidati dei nostri clienti.',
    
    // Infrastructure
    'infrastructure.title': 'L\'Infrastruttura Goliath',
    'infrastructure.servers': 'Server Globali',
    'infrastructure.backup': 'Sistema di Backup Automatico',
    'infrastructure.cdn': 'CDN Anti-Buffering',
    'infrastructure.monitoring': 'Monitoraggio Rete',
    'infrastructure.uptime': 'Tempo di Attività',
    'infrastructure.channels': 'Canali',
    'infrastructure.quality': 'Qualità',
    'infrastructure.support': 'Supporto',
    
    // Pricing
    'pricing.month1': '1 Mese',
    'pricing.months3': '3 Mesi',
    'pricing.months6': '6 Mesi',
    'pricing.months12': '12 Mesi',
    'pricing.mostPopular': 'Più Popolare',
    'pricing.bestDeal': 'Miglior Offerta',
    'pricing.subscribeNow': 'Iscriviti Ora',
    
    // Payment Methods
    'payment.title': 'Pagamenti 100% Sicuri e Veloci',
    'payment.step1': 'Acquista tramite Eneba / Wise / Crypto',
    'payment.step2': 'Invia ricevuta (WhatsApp / Telegram)',
    'payment.step3': 'Ottieni accesso in meno di 5 minuti',
    'payment.recommended': 'Eneba raccomandato (accetta carte di credito e debito)',
    
    // Footer
    'footer.reseller': 'Vuoi diventare rivenditore? Unisciti al nostro programma.',
    'footer.margins': 'Margini Elevati',
    'footer.fullSupport': 'Supporto Completo',
    'footer.flexible': 'Crediti Flessibili',
    'footer.resellerInfo': 'Richiedi Info Rivenditore',
    'footer.needHelp': 'Hai bisogno di aiuto? Vedi le nostre FAQ',
    'footer.telegram': 'Apri Telegram',
    'footer.whatsapp': 'Apri WhatsApp',
    'footer.email': 'Invia un Email',
    'footer.responseTime': 'Tempo di risposta medio: meno di 30 minuti',
    'footer.getSupport': 'Ottieni Supporto',
    
    // FAQ Page
    'faq.title': 'Domande Frequenti',
    'faq.subtitle': 'Trova risposte alle domande comuni sul servizio IPTV GeniusTV',
    'faq.stillNeedHelp': 'Hai ancora bisogno di aiuto?',
    'faq.whatsappSupport': 'Supporto WhatsApp',
    'faq.telegramSupport': 'Supporto Telegram',
    
    // Contact Page
    'contact.title': 'Contatta il Supporto',
    'contact.subtitle': 'Ottieni aiuto istantaneo dal nostro team tecnico',
    'contact.sendMessage': 'Inviaci un messaggio',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Il tuo nome completo',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'tua@email.com',
    'contact.message': 'Messaggio',
    'contact.messagePlaceholder': 'Descrivi il tuo problema o domanda...',
    'contact.send': 'Invia Messaggio',
    'contact.instantSupport': 'Supporto Istantaneo',
    'contact.immediateAssistance': 'Per assistenza immediata, usa i nostri canali diretti:',
    'contact.responseTimes': 'Tempi di Risposta',
    'contact.technicalIssues': 'Problemi Tecnici?',
    'contact.beforeContacting': 'Prima di contattare il supporto, prova queste soluzioni rapide:',
    
    // Apps Page
    'apps.title': 'Migliori App per Streaming IPTV per Dispositivo',
    'apps.subtitle': 'Scegli l\'applicazione IPTV perfetta per il tuo dispositivo per ottenere la migliore esperienza di streaming',
    'apps.recommended': 'Raccomandato',
    'apps.setupTitle': 'Come Configurare la tua App IPTV',
    'apps.step1': 'Scarica l\'App',
    'apps.step1Desc': 'Installa la tua app IPTV scelta dal negozio ufficiale delle app',
    'apps.step2': 'Ottieni le tue Credenziali',
    'apps.step2Desc': 'Ricevi URL M3U ed EPG da GeniusTV dopo la sottoscrizione',
    'apps.step3': 'Configura l\'App',
    'apps.step3Desc': 'Inserisci le tue credenziali e configura le impostazioni del lettore',
    'apps.step4': 'Inizia lo Streaming',
    'apps.step4Desc': 'Goditi oltre 20.000 canali con qualità premium',
    'apps.proTips': 'Consigli Pro per un Migliore Streaming',
    'apps.optimizeVideo': 'Ottimizza Qualità Video',
    'apps.reduceBuffering': 'Riduci Buffering',
    'apps.readyToStart': 'Pronto per Iniziare lo Streaming?',
    'apps.readyDesc': 'Scegli il tuo piano di abbonamento e ottieni accesso istantaneo a tutte le app IPTV e guide di configurazione',
    'apps.viewPricing': 'Visualizza Piani Prezzi',
    'apps.contactSupport': 'Contatta Supporto',
    
    // Blog Page
    'blog.title': 'Ultime Prospettive sulla Tecnologia IPTV e Tendenze di Streaming',
    'blog.subtitle': 'Rimani aggiornato con le ultime notizie IPTV, tutorial e insight del settore',
    'blog.featured': 'Articolo in Evidenza',
    'blog.readMore': 'Leggi di Più',
    'blog.loadMore': 'Carica Altri Articoli',
    'blog.categories.all': 'Tutti',
    'blog.categories.technology': 'Tecnologia',
    'blog.categories.tutorial': 'Tutorial',
    'blog.categories.comparison': 'Confronto',
    'blog.categories.legal': 'Legale',
    'blog.categories.apps': 'Applicazioni',
    
    // Reseller Page
    'reseller.title': 'Diventa Rivenditore GeniusTV',
    'reseller.subtitle': 'Unisciti al nostro programma rivenditori redditizio e inizia a guadagnare con i servizi IPTV premium',
    'reseller.whyBecome': 'Perché Diventare Rivenditore?',
    'reseller.highMargins': 'Margini di Profitto Elevati',
    'reseller.marginsDesc': 'Guadagna fino al 50% di commissione su ogni vendita',
    'reseller.support': 'Supporto 24/7',
    'reseller.supportDesc': 'Team di supporto dedicato per rivenditori',
    'reseller.materials': 'Materiali di Marketing',
    'reseller.materialsDesc': 'Contenuto promozionale professionale fornito',
    'reseller.flexible': 'Prezzi Flessibili',
    'reseller.flexibleDesc': 'Imposta i tuoi prezzi e pacchetti',
    'reseller.packs': 'Pacchetti Crediti Rivenditore',
    'reseller.credits': 'Crediti',
    'reseller.buyNow': 'Acquista Ora',
    'reseller.howItWorks': 'Come Funziona',
    'reseller.work1': 'Acquista Crediti',
    'reseller.work1Desc': 'Acquista crediti rivenditore in pacchetti all\'ingrosso',
    'reseller.work2': 'Vendi Abbonamenti',
    'reseller.work2Desc': 'Usa i crediti per attivare account clienti',
    'reseller.work3': 'Guadagna Profitti',
    'reseller.work3Desc': 'Tieni la differenza come tuo margine di profitto',
    'reseller.ready': 'Pronto per Iniziare a Guadagnare?',
    'reseller.readyDesc': 'Contatta il nostro team rivenditori per iniziare la tua attività IPTV redditizia',
    'reseller.contactUs': 'Contatta Team Rivenditori',
    
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.apps': 'Anwendungen',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.reseller': 'Wiederverkäufer',
    'nav.contact': 'Kontakt',
    'header.startNow': 'Jetzt Starten',
    
    // Hero Section
    'hero.title': 'Stabiles, schnelles und ununterbrochenes Streaming.',
    'hero.subtitle': 'Tausende von Live-Kanälen und On-Demand-Inhalten. Funktioniert auf Smart TV, PC und Handy. Zugang in Minuten.',
    'hero.startFrom': 'Ab $15 starten',
    'hero.whatsapp': 'Jetzt mit einem Agenten sprechen',
    
    // Add more German translations...

    // Testimonials
    'testimonials.title': 'Vertrauen Sie nicht unseren Worten. Vertrauen Sie unseren Kunden.',
    
    // Infrastructure
    'infrastructure.title': 'Die Goliath-Infrastruktur',
    'infrastructure.servers': 'Globale Server',
    'infrastructure.backup': 'Automatisches Backup-System',
    'infrastructure.cdn': 'Anti-Buffering CDN',
    'infrastructure.monitoring': 'Netzwerk-Überwachung',
    'infrastructure.uptime': 'Betriebszeit',
    'infrastructure.channels': 'Kanäle',
    'infrastructure.quality': 'Qualität',
    'infrastructure.support': 'Support',
    
    // Pricing
    'pricing.month1': '1 Monat',
    'pricing.months3': '3 Monate',
    'pricing.months6': '6 Monate',
    'pricing.months12': '12 Monate',
    'pricing.mostPopular': 'Am Beliebtesten',
    'pricing.bestDeal': 'Bestes Angebot',
    'pricing.subscribeNow': 'Jetzt Abonnieren',
    
    // Payment Methods
    'payment.title': '100% Sichere und Schnelle Zahlungen',
    'payment.step1': 'Kaufen über Eneba / Wise / Crypto',
    'payment.step2': 'Beleg senden (WhatsApp / Telegram)',
    'payment.step3': 'Zugang in weniger als 5 Minuten erhalten',
    'payment.recommended': 'Eneba empfohlen (akzeptiert Kredit- und Debitkarten)',
    
    // Footer
    'footer.reseller': 'Möchten Sie Wiederverkäufer werden? Treten Sie unserem Programm bei.',
    'footer.margins': 'Hohe Margen',
    'footer.fullSupport': 'Vollständiger Support',
    'footer.flexible': 'Flexible Credits',
    'footer.resellerInfo': 'Wiederverkäufer-Info Anfordern',
    'footer.needHelp': 'Brauchen Sie Hilfe? Siehe unsere FAQ',
    'footer.telegram': 'Telegram Öffnen',
    'footer.whatsapp': 'WhatsApp Öffnen',
    'footer.email': 'E-Mail Senden',
    'footer.responseTime': 'Durchschnittliche Antwortzeit: unter 30 Minuten',
    'footer.getSupport': 'Support Erhalten',
    
    // FAQ Page
    'faq.title': 'Häufig Gestellte Fragen',
    'faq.subtitle': 'Finden Sie Antworten auf häufige Fragen zum GeniusTV IPTV-Service',
    'faq.stillNeedHelp': 'Brauchen Sie noch Hilfe?',
    'faq.whatsappSupport': 'WhatsApp Support',
    'faq.telegramSupport': 'Telegram Support',
    
    // Contact Page
    'contact.title': 'Support Kontaktieren',
    'contact.subtitle': 'Erhalten Sie sofortige Hilfe von unserem technischen Team',
    'contact.sendMessage': 'Senden Sie uns eine Nachricht',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Ihr vollständiger Name',
    'contact.email': 'E-Mail',
    'contact.emailPlaceholder': 'ihre@email.com',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Beschreiben Sie Ihr Problem oder Ihre Frage...',
    'contact.send': 'Nachricht Senden',
    'contact.instantSupport': 'Sofortiger Support',
    'contact.immediateAssistance': 'Für sofortige Hilfe nutzen Sie unsere direkten Kanäle:',
    'contact.responseTimes': 'Antwortzeiten',
    'contact.technicalIssues': 'Technische Probleme?',
    'contact.beforeContacting': 'Bevor Sie den Support kontaktieren, versuchen Sie diese schnellen Lösungen:',
    
    // Apps Page
    'apps.title': 'Beste Apps für IPTV-Streaming nach Gerät',
    'apps.subtitle': 'Wählen Sie die perfekte IPTV-Anwendung für Ihr Gerät, um das beste Streaming-Erlebnis zu erhalten',
    'apps.recommended': 'Empfohlen',
    'apps.setupTitle': 'So Richten Sie Ihre IPTV-App Ein',
    'apps.step1': 'App Herunterladen',
    'apps.step1Desc': 'Installieren Sie Ihre gewählte IPTV-App aus dem offiziellen App Store',
    'apps.step2': 'Ihre Zugangsdaten Erhalten',
    'apps.step2Desc': 'Erhalten Sie M3U-URL und EPG von GeniusTV nach dem Abonnement',
    'apps.step3': 'App Konfigurieren',
    'apps.step3Desc': 'Geben Sie Ihre Zugangsdaten ein und konfigurieren Sie die Player-Einstellungen',
    'apps.step4': 'Streaming Starten',
    'apps.step4Desc': 'Genießen Sie über 20.000 Kanäle in Premium-Qualität',
    'apps.proTips': 'Profi-Tipps für Besseres Streaming',
    'apps.optimizeVideo': 'Video-Qualität Optimieren',
    'apps.reduceBuffering': 'Pufferung Reduzieren',
    'apps.readyToStart': 'Bereit zum Streaming zu Starten?',
    'apps.readyDesc': 'Wählen Sie Ihren Abonnement-Plan und erhalten Sie sofortigen Zugang zu allen IPTV-Apps und Setup-Anleitungen',
    'apps.viewPricing': 'Preispläne Ansehen',
    'apps.contactSupport': 'Support Kontaktieren',
    
    // Blog Page
    'blog.title': 'Neueste Einblicke in IPTV-Technologie & Streaming-Trends',
    'blog.subtitle': 'Bleiben Sie auf dem neuesten Stand mit den neuesten IPTV-Nachrichten, Tutorials und Brancheneinblicken',
    'blog.featured': 'Hauptartikel',
    'blog.readMore': 'Mehr Lesen',
    'blog.loadMore': 'Weitere Artikel Laden',
    'blog.categories.all': 'Alle',
    'blog.categories.technology': 'Technologie',
    'blog.categories.tutorial': 'Tutorial',
    'blog.categories.comparison': 'Vergleich',
    'blog.categories.legal': 'Rechtlich',
    'blog.categories.apps': 'Anwendungen',
    
    // Reseller Page
    'reseller.title': 'Werden Sie GeniusTV Wiederverkäufer',
    'reseller.subtitle': 'Treten Sie unserem profitablen Wiederverkäufer-Programm bei und beginnen Sie mit Premium-IPTV-Services zu verdienen',
    'reseller.whyBecome': 'Warum Wiederverkäufer Werden?',
    'reseller.highMargins': 'Hohe Gewinnmargen',
    'reseller.marginsDesc': 'Verdienen Sie bis zu 50% Provision bei jedem Verkauf',
    'reseller.support': '24/7 Support',
    'reseller.supportDesc': 'Dediziertes Wiederverkäufer-Support-Team',
    'reseller.materials': 'Marketing-Materialien',
    'reseller.materialsDesc': 'Professionelle Werbeinhalte bereitgestellt',
    'reseller.flexible': 'Flexible Preise',
    'reseller.flexibleDesc': 'Setzen Sie Ihre eigenen Preise und Pakete',
    'reseller.packs': 'Wiederverkäufer Credit-Pakete',
    'reseller.credits': 'Credits',
    'reseller.buyNow': 'Jetzt Kaufen',
    'reseller.howItWorks': 'Wie Es Funktioniert',
    'reseller.work1': 'Credits Kaufen',
    'reseller.work1Desc': 'Kaufen Sie Wiederverkäufer-Credits in Großhandelspaketen',
    'reseller.work2': 'Abonnements Verkaufen',
    'reseller.work2Desc': 'Verwenden Sie Credits zur Aktivierung von Kundenkonten',
    'reseller.work3': 'Gewinne Erzielen',
    'reseller.work3Desc': 'Behalten Sie die Differenz als Ihre Gewinnmarge',
    'reseller.ready': 'Bereit Anzufangen zu Verdienen?',
    'reseller.readyDesc': 'Kontaktieren Sie unser Wiederverkäufer-Team, um mit Ihrem profitablen IPTV-Geschäft zu beginnen',
    'reseller.contactUs': 'Wiederverkäufer-Team Kontaktieren',


  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.apps': 'التطبيقات',
    'nav.blog': 'المدونة',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.reseller': 'موزع',
    'nav.contact': 'اتصل بنا',
    'header.startNow': 'ابدأ الآن',
    
    // Hero Section
    'hero.title': 'بث مستقر وسريع وغير منقطع.',
    'hero.subtitle': 'آلاف القنوات المباشرة والمحتوى عند الطلب. يعمل على التلفزيون الذكي والكمبيوتر والهاتف المحمول. احصل على الوصول في دقائق.',
    'hero.startFrom': 'ابدأ من 15 دولار',
    'hero.whatsapp': 'تحدث مع وكيل الآن',
    
    // Add more Arabic translations...

    // Testimonials
    'testimonials.title': 'لا تثق في كلماتنا. ثق في عملائنا.',
    
    // Infrastructure
    'infrastructure.title': 'البنية التحتية العملاقة',
    'infrastructure.servers': 'خوادم عالمية',
    'infrastructure.backup': 'نظام النسخ الاحتياطي التلقائي',
    'infrastructure.cdn': 'شبكة CDN مضادة للتخزين المؤقت',
    'infrastructure.monitoring': 'مراقبة الشبكة',
    'infrastructure.uptime': 'وقت التشغيل',
    'infrastructure.channels': 'القنوات',
    'infrastructure.quality': 'الجودة',
    'infrastructure.support': 'الدعم',
    
    // Pricing
    'pricing.month1': 'شهر واحد',
    'pricing.months3': '3 أشهر',
    'pricing.months6': '6 أشهر',
    'pricing.months12': '12 شهر',
    'pricing.mostPopular': 'الأكثر شعبية',
    'pricing.bestDeal': 'أفضل صفقة',
    'pricing.subscribeNow': 'اشترك الآن',
    
    // Payment Methods
    'payment.title': 'مدفوعات آمنة وسريعة 100%',
    'payment.step1': 'الشراء عبر Eneba / Wise / Crypto',
    'payment.step2': 'إرسال الإيصال (واتساب / تلغرام)',
    'payment.step3': 'الحصول على الوصول في أقل من 5 دقائق',
    'payment.recommended': 'Eneba موصى به (يقبل بطاقات الائتمان والخصم)',
    
    // Footer
    'footer.reseller': 'هل تريد أن تصبح موزعاً؟ انضم إلى برنامجنا.',
    'footer.margins': 'هوامش عالية',
    'footer.fullSupport': 'دعم كامل',
    'footer.flexible': 'أرصدة مرنة',
    'footer.resellerInfo': 'طلب معلومات الموزع',
    'footer.needHelp': 'تحتاج مساعدة؟ انظر الأسئلة الشائعة',
    'footer.telegram': 'فتح تلغرام',
    'footer.whatsapp': 'فتح واتساب',
    'footer.email': 'إرسال بريد إلكتروني',
    'footer.responseTime': 'متوسط وقت الاستجابة: أقل من 30 دقيقة',
    'footer.getSupport': 'الحصول على الدعم',
    
    // FAQ Page
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'ابحث عن إجابات للأسئلة الشائعة حول خدمة IPTV من GeniusTV',
    'faq.stillNeedHelp': 'لا تزال بحاجة إلى مساعدة؟',
    'faq.whatsappSupport': 'دعم واتساب',
    'faq.telegramSupport': 'دعم تلغرام',
    
    // Contact Page
    'contact.title': 'اتصل بالدعم',
    'contact.subtitle': 'احصل على مساعدة فورية من فريقنا التقني',
    'contact.sendMessage': 'أرسل لنا رسالة',
    'contact.name': 'الاسم',
    'contact.namePlaceholder': 'اسمك الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'اوصف مشكلتك أو سؤالك...',
    'contact.send': 'إرسال الرسالة',
    'contact.instantSupport': 'دعم فوري',
    'contact.immediateAssistance': 'للحصول على المساعدة الفورية، استخدم قنواتنا المباشرة:',
    'contact.responseTimes': 'أوقات الاستجابة',
    'contact.technicalIssues': 'مشاكل تقنية؟',
    'contact.beforeContacting': 'قبل الاتصال بالدعم، جرب هذه الحلول السريعة:',
    
    // Apps Page
    'apps.title': 'أفضل تطبيقات البث IPTV حسب الجهاز',
    'apps.subtitle': 'اختر تطبيق IPTV المثالي لجهازك للحصول على أفضل تجربة بث',
    'apps.recommended': 'موصى به',
    'apps.setupTitle': 'كيفية إعداد تطبيق IPTV الخاص بك',
    'apps.step1': 'تحميل التطبيق',
    'apps.step1Desc': 'قم بتثبيت تطبيق IPTV المختار من متجر التطبيقات الرسمي',
    'apps.step2': 'الحصول على بيانات الاعتماد',
    'apps.step2Desc': 'استلم رابط M3U وEPG من GeniusTV بعد الاشتراك',
    'apps.step3': 'تكوين التطبيق',
    'apps.step3Desc': 'أدخل بيانات الاعتماد وقم بتكوين إعدادات المشغل',
    'apps.step4': 'بدء البث',
    'apps.step4Desc': 'استمتع بأكثر من 20000 قناة بجودة ممتازة',
    'apps.proTips': 'نصائح احترافية لبث أفضل',
    'apps.optimizeVideo': 'تحسين جودة الفيديو',
    'apps.reduceBuffering': 'تقليل التخزين المؤقت',
    'apps.readyToStart': 'جاهز لبدء البث؟',
    'apps.readyDesc': 'اختر خطة الاشتراك الخاصة بك واحصل على وصول فوري لجميع تطبيقات IPTV وأدلة الإعداد',
    'apps.viewPricing': 'عرض خطط الأسعار',
    'apps.contactSupport': 'اتصل بالدعم',
    
    // Blog Page
    'blog.title': 'أحدث الرؤى حول تقنية IPTV واتجاهات البث',
    'blog.subtitle': 'ابق محدثاً مع أحدث أخبار IPTV والدروس ورؤى الصناعة',
    'blog.featured': 'مقال مميز',
    'blog.readMore': 'اقرأ المزيد',
    'blog.loadMore': 'تحميل المزيد من المقالات',
    'blog.categories.all': 'الكل',
    'blog.categories.technology': 'التكنولوجيا',
    'blog.categories.tutorial': 'دروس',
    'blog.categories.comparison': 'مقارنة',
    'blog.categories.legal': 'قانوني',
    'blog.categories.apps': 'التطبيقات',
    
    // Reseller Page
    'reseller.title': 'كن موزع GeniusTV',
    'reseller.subtitle': 'انضم إلى برنامج الموزعين المربح واربح مع خدمات IPTV المميزة',
    'reseller.whyBecome': 'لماذا تصبح موزعاً؟',
    'reseller.highMargins': 'هوامش ربح عالية',
    'reseller.marginsDesc': 'اربح حتى 50% عمولة على كل بيعة',
    'reseller.support': 'دعم 24/7',
    'reseller.supportDesc': 'فريق دعم مخصص للموزعين',
    'reseller.materials': 'مواد تسويقية',
    'reseller.materialsDesc': 'محتوى ترويجي احترافي مقدم',
    'reseller.flexible': 'أسعار مرنة',
    'reseller.flexibleDesc': 'حدد أسعارك وحزمك الخاصة',
    'reseller.packs': 'حزم أرصدة الموزع',
    'reseller.credits': 'الأرصدة',
    'reseller.buyNow': 'اشتر الآن',
    'reseller.howItWorks': 'كيف يعمل',
    'reseller.work1': 'شراء الأرصدة',
    'reseller.work1Desc': 'اشتر أرصدة الموزع في حزم بالجملة',
    'reseller.work2': 'بيع الاشتراكات',
    'reseller.work2Desc': 'استخدم الأرصدة لتفعيل حسابات العملاء',
    'reseller.work3': 'كسب الأرباح',
    'reseller.work3Desc': 'احتفظ بالفرق كهامش ربحك',
    'reseller.ready': 'جاهز لبدء الكسب؟',
    'reseller.readyDesc': 'اتصل بفريق الموزعين لدينا لبدء عملك المربح في IPTV',
    'reseller.contactUs': 'اتصل بفريق الموزعين',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};