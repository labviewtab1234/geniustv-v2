import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background flex flex-col ">
    <Header />
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-foreground">About Us: The GeniusTV Difference</h1>
      <p className="text-lg text-muted-foreground max-w-4xl">
          At GeniusTV, we are more than an IPTV provider; we are architects of a superior entertainment experience. Our journey began with a singular vision: to transcend the limitations of traditional television and create a platform that delivers exclusive, high-performance streaming. We are driven by a deep-seated passion for content and a relentless commitment to technological excellence, making us a true leader in the streaming industry.
          Our strength is in our expertise. The GeniusTV team is composed of seasoned professionals who live and breathe technology, from network engineers ensuring flawless data flow to content curators with an eye for quality. We've built a state-of-the-art infrastructure that guarantees exceptional stability and reliability, providing you with crystal-clear, buffer-free streams that are so immersive, you'll feel like you're right in the action. We don't just broadcast; we deliver a premium viewing environment.
          We understand that a truly exceptional experience is defined by choice. That's why we have meticulously curated a diverse and exclusive library of premium content, including blockbuster movies, trending series, and a vast selection of international live TV channels and sports. Our platform is engineered for seamless integration across all your devices, giving you the freedom to enjoy your favorite entertainment anytime, anywhere, with uncompromising quality.
          Choosing GeniusTV means joining a community that demands the best. It means partnering with a powerful and stable provider that is constantly innovating to keep you at the forefront of entertainment.
          Ready to elevate your viewing experience? Discover the GeniusTV difference today.
      </p>
      {/* Ajoute ici plus d'informations sur ton équipe, ton histoire, etc. */}
    </div>
    <Footer />
  </div>
);

export default About;