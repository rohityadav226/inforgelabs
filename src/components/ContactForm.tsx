import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Send, Sparkles } from "lucide-react";

export function ContactForm() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur opacity-60"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together. 
              Our team is ready to transform your vision into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg mb-2">Email</h4>
                    <p className="text-muted-foreground">hello@inforgelabs.com</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Response Time</h4>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h4 className="text-lg">What We Offer</h4>
                <div className="space-y-3">
                  {[
                    "Custom Website Development",
                    "Data Analytics Solutions", 
                    "Performance Optimization",
                    "Ongoing Support & Maintenance"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        className="bg-input-background/80 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                        className="bg-input-background/80 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com"
                      className="bg-input-background/80 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company Name"
                      className="bg-input-background/80 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select>
                      <SelectTrigger className="bg-input-background/80 border-border/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="analytics">Data Analytics</SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] bg-input-background/80 border-border/50"
                    />
                  </div>

                  <Button size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}