import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { PricingSection } from "@/components/PricingSection";
import { PaymentMethodsSection } from "@/components/PaymentMethodsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <InfrastructureSection />
        <PricingSection />
        <PaymentMethodsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
