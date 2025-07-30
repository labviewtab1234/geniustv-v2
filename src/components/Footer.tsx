import { MessageCircle, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = {
  product: [
    { label: "Apps", href: "/apps" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Reseller", href: "/reseller" },
    { label: "FAQ", href: "/faq" }

  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "WhatsApp", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "Email Support", href: "mailto:support@geniustv.com" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]
};

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-section-gradient border-t border-border">
      {/* Support Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need Support?{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('footer.responseTime')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-16 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              {t('footer.whatsapp')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 text-lg"
            >
              <Send className="w-6 h-6 mr-3" />
              {t('footer.telegram')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground h-16 text-lg"
            >
              <Mail className="w-6 h-6 mr-3" />
              {t('footer.email')}
            </Button>
          </div>

          <div className="mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              {t('footer.getSupport')}
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">GeniusTV</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium IPTV service delivering stable, high-quality streaming to millions of users worldwide.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 GeniusTV. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>🔒 SSL Secured</span>
              <span>•</span>
              <span>⚡ 99.9% Uptime</span>
              <span>•</span>
              <span>🌍 Global CDN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};