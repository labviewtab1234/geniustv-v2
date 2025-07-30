import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, DollarSign, Headphones, Zap } from "lucide-react";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { useLanguage } from "@/contexts/LanguageContext";

const Reseller = () => {
  const { t } = useLanguage();
  const resellerPacks = [
    {
      credits: 120,
      price: "$150",
      popular: false,
      savings: "Save 15%"
    },
    {
      credits: 240,
      price: "$250",
      popular: true,
      savings: "Save 25%"
    },
    {
      credits: 360,
      price: "$320",
      popular: false,
      savings: "Save 35%"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "High Margins",
      description: "Earn up to 50% profit on each subscription you sell"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Full Support",
      description: "24/7 technical support for you and your customers"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Flexible Credits",
      description: "Use credits anytime, no expiration dates"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Management",
      description: "Easy dashboard to manage all your customers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Become a GeniusTV Reseller</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our profitable reseller program and earn substantial income by selling premium IPTV subscriptions
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Packs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Reseller Credit Packs</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {resellerPacks.map((pack, index) => (
                <Card key={index} className={`relative ${pack.popular ? 'border-primary shadow-lg' : ''}`}>
                  {pack.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pack.credits} Credits</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pack.price}</div>
                    <Badge variant="secondary">{pack.savings}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Sell {pack.credits} monthly subscriptions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">No expiration date</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Full technical support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Customer management tools</span>
                      </div>
                    </div>
                    <Button className="w-full" variant={pack.popular ? "default" : "outline"}>
                      Purchase Credits
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Purchase Credits</h3>
                <p className="text-muted-foreground">Buy credit packs and get instant access to our reseller dashboard</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Sell Subscriptions</h3>
                <p className="text-muted-foreground">Market IPTV services to customers and generate subscriptions</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Earn Profits</h3>
                <p className="text-muted-foreground">Keep the difference between your selling price and credit cost</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful resellers already earning substantial income with GeniusTV
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request Reseller Info</Button>
                <Button variant="outline" size="lg">Contact Sales Team</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default Reseller;