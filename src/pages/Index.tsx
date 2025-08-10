import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { PricingSection } from "@/components/PricingSection";
import { PaymentMethodsSection } from "@/components/PaymentMethodsSection";
import { Footer } from "@/components/Footer";
import { LogoCarousel } from "@/components/LogosCarousel";
import { PostersCarousel } from "@/components/postersCarousel";
import ReviewsCarousel from "./ReviewsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
       <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm ">
        <Header />
      </div>
      <main className=" mt-16">
        <HeroSection />
         <LogoCarousel />
         <PostersCarousel />
        {/* <TestimonialsSection /> */}
        <ReviewsCarousel />
        <InfrastructureSection />
        <PricingSection />
        <PaymentMethodsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
