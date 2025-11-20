import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-accent">Divine Astrology</h3>
            <p className="text-sm opacity-90 mb-4">
              Your trusted source for authentic spiritual products and astrological guidance.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-90 hover:opacity-100 hover:text-accent transition">About Us</Link></li>
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 hover:text-accent transition">Contact</Link></li>
              <li><Link to="/blog" className="opacity-90 hover:opacity-100 hover:text-accent transition">Blog</Link></li>
              <li><Link to="/faq" className="opacity-90 hover:opacity-100 hover:text-accent transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="opacity-90 hover:opacity-100 hover:text-accent transition">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="opacity-90 hover:opacity-100 hover:text-accent transition">Refund Policy</Link></li>
              <li><Link to="/terms" className="opacity-90 hover:opacity-100 hover:text-accent transition">Terms & Conditions</Link></li>
              <li><Link to="/shipping-policy" className="opacity-90 hover:opacity-100 hover:text-accent transition">Shipping Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Newsletter</h4>
            <p className="text-sm opacity-90 mb-4">Subscribe for spiritual insights and exclusive offers.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-90">
          <p>&copy; 2025 Divine Astrology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
