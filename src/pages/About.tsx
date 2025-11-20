import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Star } from "lucide-react";
import astrologerImg from "@/assets/astrologer.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">About Divine Astrology</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Guiding souls on their spiritual journey for over 25 years
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={astrologerImg} 
                  alt="Our Astrologer" 
                  className="rounded-lg shadow-card w-full"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Divine Astrology was founded with a sacred mission to bring authentic spiritual guidance 
                    and premium quality spiritual products to seekers around the world.
                  </p>
                  <p>
                    With over 25 years of experience in Vedic astrology and spiritual sciences, our founder 
                    has helped thousands of individuals find clarity, peace, and prosperity through ancient wisdom.
                  </p>
                  <p>
                    We believe in the transformative power of genuine spiritual practices and carefully source 
                    only the most authentic gemstones, rudraksha, yantras, and spiritual items.
                  </p>
                  <p>
                    Every product in our collection is certified, energized, and blessed to ensure maximum 
                    spiritual benefits for our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">
                    100% certified and genuine spiritual products
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Compassion</h3>
                  <p className="text-sm text-muted-foreground">
                    Caring guidance for every spiritual journey
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building a family of spiritual seekers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium quality in every product and service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              To empower individuals with authentic spiritual products and astrological wisdom, 
              helping them unlock their highest potential and live in harmony with cosmic energies.
            </p>
            <p className="text-lg text-muted-foreground">
              We are committed to preserving ancient Vedic traditions while making spiritual practices 
              accessible and beneficial for modern seekers.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
