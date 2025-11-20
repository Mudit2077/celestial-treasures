import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold">Shipping Policy</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Domestic Shipping (India)</h2>
            <p className="text-muted-foreground mb-4">
              We offer express shipping across India with delivery within 3-5 business days for most locations. 
              Orders are typically processed within 24 hours of payment confirmation.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">International Shipping</h2>
            <p className="text-muted-foreground mb-4">
              We ship to select international destinations with delivery times of 7-14 business days. 
              International shipping costs and customs duties are calculated at checkout.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Free Shipping</h2>
            <p className="text-muted-foreground mb-4">
              Free shipping is available on orders above ₹5,000 within India. International orders 
              may be eligible for free shipping on purchases above ₹15,000.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Order Tracking</h2>
            <p className="text-muted-foreground mb-4">
              Once your order ships, you will receive a tracking number via email. You can track your 
              shipment using this number on our website or the courier's website.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Packaging</h2>
            <p className="text-muted-foreground mb-4">
              All products are carefully packaged to ensure they reach you in perfect condition. 
              Fragile items like gemstones and yantras receive special protective packaging.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Delivery Issues</h2>
            <p className="text-muted-foreground">
              If you experience any delivery issues or your package is damaged, please contact us at 
              contact@divineastrology.com within 48 hours of delivery.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;
