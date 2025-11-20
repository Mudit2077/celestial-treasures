import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import gemstoneImg from "@/assets/gemstone-1.jpg";
import braceletImg from "@/assets/bracelet-1.jpg";
import yantraImg from "@/assets/yantra-1.jpg";

const Index = () => {
  const categories = [
    { name: "Gemstones", image: gemstoneImg, href: "/products/gemstones" },
    { name: "Bracelets", image: braceletImg, href: "/products/bracelets" },
    { name: "Rudraksha", image: braceletImg, href: "/products/rudraksha" },
    { name: "Yantras", image: yantraImg, href: "/products/yantras" },
    { name: "Rings", image: gemstoneImg, href: "/products/rings" },
    { name: "Remedies", image: yantraImg, href: "/products/remedies" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The gemstone I received was absolutely authentic and beautifully crafted. I felt the positive energy immediately!",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service and genuine products. The astrologer consultation was incredibly insightful.",
    },
    {
      name: "Anjali Mehta",
      rating: 5,
      text: "Fast delivery and premium quality. The rudraksha bracelet exceeded my expectations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(26, 26, 62, 0.7), rgba(26, 26, 62, 0.7)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 z-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-float">
            Discover Your <span className="text-gradient-gold">Divine Path</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Premium spiritual products and authentic astrological guidance for your spiritual journey
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
              Shop Now
            </Button>
            <Link to="/appointments">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-accent mb-3" />
              <h3 className="font-semibold mb-1">100% Authentic</h3>
              <p className="text-sm text-muted-foreground">Certified Products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-accent mb-3" />
              <h3 className="font-semibold mb-1">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">25+ Years Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="h-12 w-12 text-accent mb-3" />
              <h3 className="font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Secure Shipping</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="h-12 w-12 text-accent mb-3" />
              <h3 className="font-semibold mb-1">5000+ Reviews</h3>
              <p className="text-sm text-muted-foreground">Trusted Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Explore Our Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover authentic spiritual products carefully curated for your divine journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.href}>
                <Card className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold">{category.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
