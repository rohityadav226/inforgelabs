import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Globe, BarChart3, Smartphone, TrendingUp, Shield, Zap, Brain, Rocket } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 gradient-blur opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Rocket className="h-4 w-4" />
            <span className="text-sm">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight">
            Next-Generation
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Digital Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            Cutting-edge solutions that transform businesses through intelligent design and data-driven insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Website Development */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/20">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl tracking-tight">Smart Web Development</h3>
                  <p className="text-muted-foreground">AI-enhanced digital experiences</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We craft lightning-fast, intelligent websites that adapt to your users' needs. 
                Built with cutting-edge technology and optimized for maximum performance and conversion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Smartphone, text: "Mobile-First Design" },
                { icon: Zap, text: "Sub-second Loading" },
                { icon: Shield, text: "Enterprise Security" },
                { icon: Brain, text: "AI-Powered UX" }
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl glass-card border-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-3xl blur-xl"></div>
            <Card className="relative glass-card border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578514014187-32c47112a0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHdlYnNpdGUlMjBsYXB0b3B8ZW58MXx8fHwxNzU4OTM3NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern website development"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
            <Card className="relative glass-card border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODg3OTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Data analytics dashboard"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Data Analytics */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-primary/20">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl tracking-tight">Intelligent Analytics</h3>
                  <p className="text-muted-foreground">Data that drives decisions</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform raw data into powerful insights with our AI-driven analytics platform. 
                Real-time dashboards that reveal growth opportunities and customer patterns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BarChart3, text: "Predictive Analytics" },
                { icon: TrendingUp, text: "Growth Forecasting" },
                { icon: Brain, text: "AI Insights" },
                { icon: Zap, text: "Real-time Processing" }
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl glass-card border-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}