import { Card, CardContent } from "@/components/ui/card";
import { Server, Shield, Zap, Monitor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const infrastructureFeatures = [
  {
    icon: Server,
    title: "50+ Global Servers",
    description: "Worldwide server network for optimal performance",
    metric: "99.9% Uptime"
  },
  {
    icon: Shield,
    title: "Automated Backup System",
    description: "Multiple redundancies ensure continuous service",
    metric: "Zero Downtime"
  },
  {
    icon: Zap,
    title: "Anti-Buffering CDN",
    description: "Smart content delivery for smooth streaming",
    metric: "< 1s Load Time"
  },
  {
    icon: Monitor,
    title: "24/7 Network Monitoring",
    description: "Real-time monitoring and instant issue resolution",
    metric: "24/7 Support"
  }
];

const metrics = [
  { value: "99.9%", label: "Uptime" },
  { value: "20K+", label: "Channels" },
  { value: "4K", label: "Quality" },
  { value: "24/7", label: "Support" }
];

export const InfrastructureSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('infrastructure.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade technology powering millions of streams worldwide
          </p>
        </div>

        {/* Infrastructure Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infrastructureFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:bg-card-hover hover:border-primary/20 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full">
                    <span className="text-secondary font-semibold text-sm">
                      {feature.metric}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Metrics Bar */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Visualization */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Powered by Advanced Technology
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm">Global CDN</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-300"></div>
                <span className="text-sm">Load Balancing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></div>
                <span className="text-sm">Auto-Scaling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-900"></div>
                <span className="text-sm">Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};