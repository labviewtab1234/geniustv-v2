import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";

const FAQ = () => {
  const { t } = useLanguage();
  const faqs = [
    {
      question: "How quickly will I get access?",
      answer: "Access is typically provided within 5 minutes after payment confirmation. You'll receive your login credentials via WhatsApp or Telegram."
    },
    {
      question: "What devices are compatible?",
      answer: "Our service works on all major devices: Smart TVs, Android/iOS phones, tablets, computers (Windows/Mac), Amazon Firestick, Apple TV, and most IPTV apps."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 48-hour money-back guarantee if you experience technical issues that cannot be resolved by our support team."
    },
    {
      question: "How many devices can I use simultaneously?",
      answer: "All plans include up to 2 simultaneous connections. Additional connections can be purchased separately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments via Eneba (credit/debit cards), Wise, and various cryptocurrencies. Eneba is recommended for instant activation."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 24-hour test period for $3 to let you experience our service quality before committing to a full subscription."
    },
    {
      question: "What channels are included?",
      answer: "We provide 20,000+ live channels including sports, movies, news, entertainment, and international content in multiple languages."
    },
    {
      question: "How do I set up the service?",
      answer: "After payment, you'll receive detailed setup instructions for your specific device. Our support team is available 24/7 to assist with configuration."
    },
    {
      question: "What if I experience buffering?",
      answer: "Our anti-buffering CDN and global server network ensure 99.9% uptime. If you experience issues, our technical team will resolve them immediately."
    },
    {
      question: "Can I change my subscription plan?",
      answer: "Yes, you can upgrade or modify your plan at any time. Contact our support team for assistance with plan changes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('faq.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('faq.subtitle')}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/20 rounded-lg px-6 bg-card/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">{t('faq.stillNeedHelp')}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                {t('faq.whatsappSupport')}
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {t('faq.telegramSupport')}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('footer.responseTime')}
            </p>
          </div>
        </div>
      </main>
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default FAQ;