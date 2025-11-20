import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold">Refund Policy</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">7-Day Return Policy</h2>
            <p className="text-muted-foreground mb-4">
              We offer a 7-day return policy for products that are defective, damaged, or not as described. 
              To be eligible for a return, the product must be unused and in the same condition that you received it.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Non-Returnable Items</h2>
            <p className="text-muted-foreground mb-4">
              Spiritual products that have been energized, blessed, or customized specifically for you 
              cannot be returned unless there is a manufacturing defect or quality issue.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Refund Process</h2>
            <p className="text-muted-foreground mb-4">
              Once we receive your returned item, we will inspect it and process your refund within 
              5-7 business days. The refund will be credited to your original payment method.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Consultation Cancellations</h2>
            <p className="text-muted-foreground mb-4">
              You may cancel or reschedule your consultation up to 24 hours before the appointment time 
              for a full refund. Cancellations made less than 24 hours in advance are non-refundable.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              For refund requests or questions, please email us at contact@divineastrology.com
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
