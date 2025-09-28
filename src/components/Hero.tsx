import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, BarChart3, Globe, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 gradient-blur opacity-60"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 gradient-blur opacity-40"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">AI-Powered Solutions</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl tracking-tight leading-[1.1]">
                Future-Ready
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Transform your business with cutting-edge websites and intelligent data analytics. 
                Built for the future, designed for today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg h-14 px-8">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 glass-card border-primary/20 hover:bg-primary/5">
                Explore Portfolio
              </Button>
            </div>

            <div className="flex items-center gap-12 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm">Modern Websites</div>
                  <div className="text-xs text-muted-foreground">Lightning Fast</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm">Smart Analytics</div>
                  <div className="text-xs text-muted-foreground">Data-Driven</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl rotate-12 blur-sm"></div>
            <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl -rotate-12 blur-sm"></div>
            
            <div className="relative glass-card rounded-3xl p-2 border-primary/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578514014187-32c47112a0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHdlYnNpdGUlMjBsYXB0b3B8ZW58MXx8fHwxNzU4OTM3NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern business website on laptop"
                className="rounded-2xl w-full"
              />
            </div>

            {/* Stats Floating Cards */}
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 border-primary/20">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm">99% Uptime</span>
              </div>
            </div>
            <div className="absolute -top-4 right-8 glass-card rounded-2xl p-4 border-primary/20">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="text-sm">Real-time Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}