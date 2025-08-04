import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { openWhatsApp, openTelegram } from "@/services/socialService";

const FAQ = () => {
  const { t } = useLanguage();

  const faqSections = [
    {
      title: "General & Getting Started",
      questions: [
        {
          question: "What does IPTV mean and how does it work?",
          answer: "**IPTV** stands for **Internet Protocol Television**. It's a modern technology that delivers live TV, movies, and series directly to your device through an internet connection. Instead of traditional antennas or satellite dishes, our service streams content to you via a unique **M3U link** or **Xtream Codes**, offering a more flexible and robust entertainment experience."
        },
        {
          question: "Can I use GeniusTV on multiple devices?",
          answer: "Yes. Your subscription plan is tied to a specific number of simultaneous connections. A single account allows one connection at a time, but for plans with two or three connections, we provide a separate, independent account for each device. This ensures a stable and uninterrupted streaming experience for everyone."
        },
        {
          question: "Which is the best IPTV app?",
          answer: "The best app often comes down to personal preference. Our service is compatible with all major **IPTV player apps**, including **IPTV Smarters Pro**, **TiviMate**, and many others. We'll provide you with simple, step-by-step instructions to get started on the app of your choice."
        },
        {
          question: "Will GeniusTV work with my TV?",
          answer: "Our service works with a wide range of devices. You can easily set up GeniusTV on your **Smart TV** (Samsung, LG, etc.), a streaming device like a **Firestick** or **Roku**, or even a non-smart TV with a compatible media box."
        }
      ]
    },
    {
      title: "Service & Troubleshooting",
      questions: [
        {
          question: "Why is my IPTV not working?",
          answer: "Most issues are simple to fix. First, check your internet speed to ensure it's at least **30 Mbps** for HD content. If your connection is stable, try clearing your app's cache or restarting your device. If the issue persists, your subscription may have expired. Our dedicated support team is here to help you troubleshoot any problem."
        },
        {
          question: "Can my internet provider block IPTV?",
          answer: "In some regions, such as the **UK** or **Spain**, certain Internet Service Providers (ISPs) may throttle or block IPTV streams. To ensure a smooth, buffer-free viewing experience, we highly recommend using a **VPN**. A VPN helps you bypass these restrictions and protects your online privacy by encrypting your internet traffic."
        },
        {
          question: "What internet speed do I need for IPTV?",
          answer: "We recommend a stable internet connection of at least **30 Mbps** for seamless HD streaming. A faster connection is always better for optimal performance, especially if you have multiple devices connected."
        }
      ]
    },
    {
      title: "Account & Payments",
      questions: [
        {
          question: "How do I get my service after payment?",
          answer: "After you make a one-time payment, simply send us the receipt. Our team will instantly send you your credentials (**M3U link** or **Xtream Codes**) so you can activate your service immediately."
        },
        {
          question: "What are Xtream Codes?",
          answer: "**Xtream Codes** are a convenient set of login details (username, password, and a server URL) that many IPTV player apps use. We provide these codes as an alternative to an M3U link, giving you the flexibility to choose how you access our service."
        }
      ]
    },
    {
      title: "Legal & Security",
      questions: [
        {
          question: "Is IPTV legal?",
          answer: "The legality of IPTV services depends on the provider. As a **legitimate service**, GeniusTV operates within a legal framework. We prioritize the security of our customers and do not engage in the illegal distribution of content."
        },
        {
          question: "Do I need a VPN to use GeniusTV?",
          answer: "While not mandatory, we strongly recommend a **VPN**. It's the most effective way to protect your online privacy and avoid potential throttling from your Internet Service Provider."
        }
      ]
    },
    {
      title: "Privacy & Our IPTV Service",
      questions: [
        {
          question: "Does GeniusTV share my payment information?",
          answer: "**No**. We do not handle or store any sensitive payment information. All transactions are managed by trusted third-party processors. We only keep a record of the payment proof you provide."
        },
        {
          question: "Do you track my viewing history?",
          answer: "**Absolutely not**. We do not monitor your viewing habits, the channels you watch, or any of your streaming activity. Your usage is private."
        },
        {
          question: "Is my personal information secure with GeniusTV?",
          answer: "Our best security measure is our **minimal data policy**. By not collecting personal data, we significantly reduce the risk of a data breach affecting your identity. The limited information we do hold is protected by standard security protocols."
        },
        {
          question: "How does GeniusTV's data protection compare to other online services?",
          answer: "Our commitment to **minimal data collection** sets us apart. We believe this is the most effective form of online privacy available, as we don't hold the sensitive information that other companies might."
        }
      ]
    }
  ];

  // Helper function to render bold text
  const renderAnswer = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto  w-full ">
          <div className="text-center mb-12">
            <h1 className="font-bold mb-4" style={{ fontSize: '2.5rem' }}>{t('faq.mainTitle')}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('faq.intro')}
            </p>
          </div>
          <div className="space-y-12">
            <Accordion type="multiple"
              defaultValue={faqSections.map((_, i) => `section-${i}`)}>
              {faqSections.map((section, sectionIndex) => (
                <AccordionItem
                  key={sectionIndex}
                  value={`section-${sectionIndex}`}
                  className="border border-border/30 rounded-lg bg-card/30 px-0"
                >
                  <AccordionTrigger className="flex items-center gap-2 px-6 py-4 text-2xl font-bold text-foreground border-b border-border">
                    <span>{section.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="single" collapsible className="space-y-4 px-6 py-4">
                      {section.questions.map((faq, questionIndex) => (
                        <AccordionItem
                          key={questionIndex}
                          value={`section-${sectionIndex}-item-${questionIndex}`}
                          className="border border-border/20 rounded-lg bg-card/50 px-6"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <h3 className="font-semibold text-foreground" style={{ fontSize: '1.25rem' }}>{faq.question}</h3>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pt-2">
                            <div className="prose prose-sm max-w-none" style={{ fontSize: '1rem' }}>
                              {renderAnswer(faq.answer)}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">{t('faq.stillNeedHelp')}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2"
                onClick={() => openWhatsApp()}>
                <MessageCircle className="h-5 w-5" />
                {t('faq.whatsappSupport')}
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2"
                onClick={() => openTelegram()}>
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
      <Footer />
    </div>
  );
};

export default FAQ;