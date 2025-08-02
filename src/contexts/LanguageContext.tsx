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
    'nav.apps': 'Apps',
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

        // Contact Page
    'contact.title': 'Contactez un agent maintenant',
    'contact.subtitle': 'Obtenez une aide instantanée de notre équipe technique',
    'contact.sendMessage': 'Envoyez-nous un message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Votre nom complet',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Votre message',
    'contact.send': 'Envoyer le message',
    'contact.instantSupport': 'Support Instantané',
    'contact.immediateAssistance': 'Pour une assistance immédiate, utilisez nos canaux directs:',
    'contact.responseTimes': 'Délais de Réponse',
    'contact.technicalIssues': 'Problèmes Techniques?',
    'contact.beforeContacting': 'Avant de contacter le support, essayez ces solutions rapides:',
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
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.apps': 'Apps',
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