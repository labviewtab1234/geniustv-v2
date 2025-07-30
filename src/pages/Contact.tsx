import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.name')}</Label>
                  <Input id="name" placeholder={t('contact.namePlaceholder')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')}</Label>
                  <Input id="email" type="email" placeholder={t('contact.emailPlaceholder')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.messagePlaceholder')}
                    rows={6}
                  />
                </div>
                <Button className="w-full" size="lg">
                  {t('contact.send')}
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Instant Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    For immediate assistance, use our direct channels:
                  </p>
                  
                  <Button className="w-full justify-start" size="lg">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Support
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Telegram Support
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">WhatsApp</span>
                    <span className="font-semibold text-primary">&lt; 30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Telegram</span>
                    <span className="font-semibold text-primary">&lt; 30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-semibold text-primary">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Contact Form</span>
                    <span className="font-semibold text-primary">&lt; 4 hours</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Issues?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Before contacting support, try these quick fixes:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Restart your IPTV app</li>
                    <li>• Check your internet connection</li>
                    <li>• Clear app cache/data</li>
                    <li>• Try a different server location</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default Contact;