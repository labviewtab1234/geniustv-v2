import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const pricingPlans = [
  {
    title: "1 Month",
    price: "$15",
    period: "month",
    popular: false,
    features: [
      "35K+ Live Channels",
      "VOD Movies & Series",
      "Ultra HD / 4K Quality",
      "All Device Support",
      "24/7 Customer Support",
      "Anti-Buffering CDN"
    ]
  },
  {
    title: "3 Months",
    price: "$30",
    period: "3 months",
    popular: true,
    originalPrice: "$45",
    savings: "Save $15",
    features: [
      "35K+ Live Channels",
      "VOD Movies & Series", 
      "Ultra HD / 4K Quality",
      "All Device Support",
      "24/7 Customer Support",
      "Anti-Buffering CDN",
      "Priority Support"
    ]
  },
  {
    title: "6 Months",
    price: "$50",
    period: "6 months",
    popular: false,
    originalPrice: "$70",
    savings: "Save $20",
    badge: "Best Deal",
    features: [
      "35K+ Live Channels",
      "VOD Movies & Series",
      "Ultra HD / 4K Quality",
      "All Device Support",
      "24/7 Customer Support",
      "Anti-Buffering CDN",
      "Premium Support",

    ]
  },
  {
    title: "12 Months",
    price: "$85",
    period: "year",
    popular: false,
    originalPrice: "$110",
    savings: "Save $95",
    features: [
      "35K+ Live Channels",
      "VOD Movies & Series",
      "Ultra HD / 4K Quality",
      "All Device Support", 
      "24/7 Customer Support",
      "Anti-Buffering CDN",
      "Premium Support"
    ]
  }
];

export const PricingSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All plans include full access to our premium features. No hidden fees, no contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card border-border hover:bg-card-hover transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-primary shadow-tech-glow lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  {t('pricing.mostPopular')}
                </Badge>
              )}
              
              {plan.badge && !plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  {t('pricing.bestDeal')}
                </Badge>
              )}

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h3>
                  
                  {plan.savings && (
                    <div className="text-secondary font-semibold text-sm mb-2">
                      {plan.savings}
                    </div>
                  )}

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>

                  {plan.originalPrice && (
                    <div className="text-muted-foreground line-through text-sm mt-1">
                      Originally {plan.originalPrice}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-card border border-border hover:bg-primary hover:text-primary-foreground'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {t('pricing.subscribeNow')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Secure payment processing • Instant activation • 24/7 support
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>💳 Credit Cards</span>
            <span>•</span>
            <span>🏦 Bank Transfer</span>
            <span>•</span>
            <span>₿ Cryptocurrency</span>
          </div>
        </div>
      </div>
    </section>
  );
};