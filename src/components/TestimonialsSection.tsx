import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    id: 1,
    message: "Been using GeniusTV for 6 months, never had buffering issues! Perfect quality 👍",
    time: "14:32",
    rating: 5,
    avatar: "JM"
  },
  {
    id: 2,
    message: "Quick setup, great support team. Working perfectly on my Samsung TV 📺",
    time: "09:15",
    rating: 5,
    avatar: "AS"
  },
  {
    id: 3,
    message: "Finally found reliable IPTV! All channels work, no interruptions ⭐",
    time: "16:48",
    rating: 5,
    avatar: "MR"
  },
  {
    id: 4,
    message: "Support helped me set it up in 5 minutes. Amazing service! 🔥",
    time: "11:23",
    rating: 5,
    avatar: "LK"
  },
  {
    id: 5,
    message: "Best IPTV service I've tried. 4K quality is incredible 🎬",
    time: "20:17",
    rating: 5,
    avatar: "DT"
  }
];

export const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('testimonials.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real customers using GeniusTV every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.id}-${currentIndex}`}
              className={`bg-card border-border hover:bg-card-hover transition-all duration-500 ${
                index === 1 ? 'md:scale-105 md:z-10' : 'md:scale-95'
              }`}
            >
              <CardContent className="p-6">
                {/* Chat Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <MessageCircle className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{testimonial.time}</span>
                </div>

                {/* Message Bubble */}
                <div className="bg-primary/10 rounded-2xl rounded-bl-sm p-4 relative">
                  <p className="text-foreground leading-relaxed">{testimonial.message}</p>
                  <div className="absolute -bottom-1 left-3 w-3 h-3 bg-primary/10 rotate-45"></div>
                </div>

                {/* Status */}
                <div className="flex justify-end mt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    <span className="text-xs text-muted-foreground ml-1">Read</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};