import { Button } from "./ui/button";
import { Zap } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass-card">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-primary to-blue-600 text-primary-foreground p-3 rounded-2xl shadow-lg">
            <Zap className="h-5 w-5" />
          </div>
          <span className="text-2xl tracking-tight">Inforgelabs</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
            Contact
          </a>
          <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg">
            Get Started
          </Button>
        </nav>

        {/* Mobile Get Started Button */}
        <div className="md:hidden">
          <Button size="sm" className="bg-gradient-to-r from-primary to-blue-600">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}