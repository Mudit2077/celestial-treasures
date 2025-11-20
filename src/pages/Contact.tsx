import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl opacity-90">We're here to help you on your spiritual journey</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold mb-6">Contact Information</h2>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 7 PM IST</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@divineastrology.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <MessageCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-accent"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      >
                        Start Chat →
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Spiritual Lane<br />
                        New Delhi, India 110001
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
