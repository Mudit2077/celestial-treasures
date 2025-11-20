import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <p className="text-muted-foreground mb-6">Last updated: March 2025</p>
            
            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including name, email address, 
              phone number, shipping address, and payment information when you make a purchase or book a consultation.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to process your orders, provide customer service, 
              send you updates about your orders, and communicate with you about products and services.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information with trusted service providers who assist us in operating our website and 
              conducting our business.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate security measures to protect your personal information. However, 
              no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at contact@divineastrology.com
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
