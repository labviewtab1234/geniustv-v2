import { Button } from "@/components/ui/button";
import { MessageCircle, Play, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { FloatingSocialButtons } from "./FloatingSocialButtons";

export const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const openWhatsApp = () => {
    const phoneNumber = "+33644657615";
    const message = "Hello, I would like to receive more information about your services..";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-100 min-h-[100vh] flex items-center 
         justify-center bg-hero-gradient overflow-hidden"
          style={{
        backgroundImage: `url('/background.png'), var(--hero-gradient)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`
        }}></div>
      </div>
      
      {/* Animated Tech Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-px bg-gradient-to-l from-transparent via-secondary/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" style={{ marginTop: '100px' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-tech-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              {t('hero.startFrom')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('hero.whatsapp')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">99.9% {t('infrastructure.uptime')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
              <span className="text-sm font-medium">35K+ {t('infrastructure.channels')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-700"></div>
              <span className="text-sm font-medium">4K {t('infrastructure.quality')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-1000"></div>
              <span className="text-sm font-medium">24/7 {t('infrastructure.support')}</span>
            </div>
          </div>
        </div>
      </div>
            {/* Floating Social Media Buttons */}
                  {/* Section Logos en bas */}
      {/* <div className="absolute left-0 right-0 bottom-0 w-full h- flex
       items-center bg-background/80 z-20 overflow-x-hidden sm:h-32 h-20">
        <LogoCarousel />
      </div> */}
      <FloatingSocialButtons />
    </section>
    
  );
};