import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold">Terms & Conditions</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <p className="text-muted-foreground mb-6">Last updated: March 2025</p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Divine Astrology's website and services, you agree to be bound by 
              these Terms and Conditions and all applicable laws and regulations.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Product Information</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide accurate product descriptions and images. However, we do not warrant 
              that product descriptions, images, or other content are accurate, complete, or error-free.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Spiritual Guidance Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              Astrological consultations and spiritual guidance are provided for entertainment and 
              informational purposes. They should not be considered as professional advice for medical, 
              legal, or financial decisions.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content on this website, including text, images, logos, and designs, is the property 
              of Divine Astrology and is protected by copyright and trademark laws.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              Divine Astrology shall not be liable for any indirect, incidental, or consequential damages 
              arising from the use of our products or services.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, contact us at contact@divineastrology.com
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
