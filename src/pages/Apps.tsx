import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Tablet, Download } from "lucide-react";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { useLanguage } from "@/contexts/LanguageContext";

const Apps = () => {
  const { t } = useLanguage();
  const deviceApps = [
    {
      device: "Android",
      icon: <Smartphone className="h-8 w-8" />,
      apps: [
   
        { name: "8k Player", description: "Our own IPTV player", recommended: true },
        { name: "Ibo Player Pro", description: "Premium IPTV experience", recommended: true },
        { name: "IPTV Stream Player", description: "Simple and reliable", recommended: false },
        { name: "Perfect Player", description: "Simple and reliable", recommended: false }
      ]
    },
    {
      device: "iOS / Apple TV",
      icon: <Tablet className="h-8 w-8" />,
      apps: [
        { name: "Ibo Player Pro", description: "Premium IPTV experience", recommended: true },
        { name: "IPTVX", description: "The All-Round Champion", recommended: true },
        { name: "Smarters Player", description: "The User-Friendly Workhorse", recommended: false },
        { name: "IPTV Player Live", description: "100% free and solid", recommended: false }
      ]
    },
    {
      device: "Smart TVs",
      icon: <Tv className="h-8 w-8" />,
      apps: [
        { name: "Ibo Player Pro", description: "Premium IPTV experience", recommended: true },
        { name: "TiviMate", description: "Premium experience", recommended: true },
        { name: "IPTV Smarters Pro", description: "The Classic app", recommended: false },
        { name: "Net IPTV", description: "Samsung/LG compatible", recommended: false },
      ]
    },
    {
      device: "Windows / Mac",
      icon: <Monitor className="h-8 w-8" />,
      apps: [
        { name: "Ibo Player Pro", description: "Premium IPTV experience", recommended: true },
        { name: "IPTV Smarters Pro", description: "Best Multiplataform", recommended: true },
        { name: "MyIPTV Player", description: "Dedicated IPTV app", recommended: false },
        { name: "IPTV Stream Player", description: "Simple and reliable", recommended: false },
      ]
    },
    {
      device: "Amazon Firestick",
      icon: <Tv className="h-8 w-8" />,
      apps: [
        { name: "Downloader + 8k Player", description: "Best Firestick combo", recommended: true },
        { name: "TiviMate", description: "Premium experience", recommended: true },
        { name: "Downloader + IPTV Smarters", description: "Best Firestick combo", recommended: false },
        { name: "Perfect Player", description: "Lightweight option", recommended: false }
      ]
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: "Download the App",
      description: "Install your chosen IPTV app from the official app store"
    },
    {
      step: 2,
      title: "Get Your Credentials",
      description: "Receive M3U URL or XTREAM codes from GeniusTV after subscription"
    },
    {
      step: 3,
      title: "Configure the App",
      description: "Enter your credentials and configure player settings"
    },
    {
      step: 4,
      title: "Start Streaming",
      description: "Enjoy 35,000+ channels with premium quality"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('apps.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('apps.subtitle')}
            </p>
          </div>

          {/* Device Recommendations */}
          <div className="space-y-8 mb-16">
            {deviceApps.map((device, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="text-primary">{device.icon}</div>
                    {device.device}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {device.apps.map((app, appIndex) => (
                      <div 
                        key={appIndex}
                        className={`p-4 rounded-lg border ${app.recommended ? 'border-primary/30 bg-primary/5' : 'border-border/20'}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{app.name}</h4>
                          {app.recommended && (
                            <Badge variant="default" className="text-xs">
                              {t('apps.recommended')}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Setup Guide */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-center">{t('apps.setupTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {setupSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pro Tips */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Pro Tips for Better Streaming</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Optimize Video Quality</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use wired connection when possible</li>
                    <li>• Enable hardware acceleration</li>
                    <li>• Choose optimal video decoder</li>
                    <li>• Adjust buffer size for your connection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reduce Buffering</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Close background apps</li>
                    <li>• Use 5GHz WiFi when available</li>
                    <li>• Clear app cache regularly</li>
                    <li>• Choose nearest server location</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-12">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Start Streaming?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose your subscription plan and get instant access to all IPTV apps and setup guides
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">View Pricing Plans</Button>
                <Button variant="outline" size="lg">Talk to an agent now</Button>
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

export default Apps;