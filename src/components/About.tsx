import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

export function About() {
  const benefits = [
    "AI-powered websites that adapt to user behavior",
    "Predictive analytics for strategic decision making",
    "Real-time performance monitoring and optimization", 
    "Scalable solutions that grow with your business",
    "24/7 intelligent support and maintenance"
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "2.5x", label: "Average ROI Increase" }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 gradient-blur opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Target className="h-4 w-4" />
                <span className="text-sm">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl tracking-tight leading-[1.1]">
                Transforming Businesses with
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Intelligent Technology
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine cutting-edge AI, modern design, and advanced analytics to create 
                digital experiences that don't just look great—they drive real results. 
                Our mission is to democratize enterprise-grade technology for growing businesses.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-xl glass-card border-primary/10">
                  <div className="p-1 rounded-lg bg-primary/20 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl rotate-12 blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl -rotate-12 blur-sm"></div>
            
            <div className="relative glass-card rounded-3xl p-3 border-primary/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753161618037-e6a8f740fd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTg5Mzc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Small business owner working on computer"
                className="rounded-2xl w-full"
              />
            </div>

            {/* Feature badges */}
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 border-primary/20">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm">Expert Team</span>
              </div>
            </div>
            <div className="absolute -top-4 left-8 glass-card rounded-2xl p-4 border-primary/20">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}