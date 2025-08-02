import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background flex flex-col ">
    <Header />
    <div className="container mx-auto px-4 py-16 flex-1 ">
      <h1 className="text-4xl font-bold mb-6 text-foreground">About Us</h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        GeniusTV is dedicated to providing the best IPTV and streaming experience worldwide.
        Our mission is to deliver stable, fast, and secure access to thousands of channels and VOD content, with 24/7 support and innovative technology.
      </p>
      {/* Ajoute ici plus d'informations sur ton équipe, ton histoire, etc. */}
    </div>
    <Footer />
  </div>
);

export default About;