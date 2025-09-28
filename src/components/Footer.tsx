import { Globe, BarChart3, Mail, Phone, MapPin, Zap, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-3 rounded-2xl">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-2xl tracking-tight">Inforgelabs</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building the future of digital business through intelligent technology and beautiful design.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="p-2 rounded-xl glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
                <Globe className="h-4 w-4 text-primary" />
                <span>Smart Web Development</span>
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span>AI-Powered Analytics</span>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Performance Optimization</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Digital Strategy</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@inforgelabs.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Worldwide Remote</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Inforgelabs. All rights reserved. Built with passion for the future.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}