import { Button } from "./ui/button";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-10 max-w-[900px] mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Rocket className="h-4 w-4" />
              <span className="text-sm">Launch Your Success</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.1]">
              Ready to Build the
              <br />
              <span className="relative">
                Future?
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl opacity-90 leading-relaxed max-w-[600px] mx-auto">
              Transform your business with AI-powered websites and intelligent analytics. 
              Join the next generation of successful digital businesses.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="group h-14 px-8 bg-white text-primary hover:bg-white/90">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10">
              Book Free Consultation
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-[600px] mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-2xl bg-white/10">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="text-sm opacity-80">Free Consultation</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-2xl bg-white/10">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="text-sm opacity-80">Fast Launch</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-2xl bg-white/10">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div className="text-sm opacity-80">Ongoing Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}