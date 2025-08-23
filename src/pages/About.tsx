import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";




const About = () => { 
const { t } = useLanguage();
  return (
  <div className="min-h-screen bg-background flex flex-col ">
    <Header />
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-foreground">
       {t('about.title')}
        </h1>
      <p className="text-lg text-muted-foreground max-w-4xl">
        {t('about.content')}
      </p>
      {/* Ajoute ici plus d'informations sur ton équipe, ton histoire, etc. */}
    </div>
    <Footer />
  </div>
);
}

export default About;