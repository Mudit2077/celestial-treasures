import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are your gemstones certified?",
      answer: "Yes, all our gemstones come with authentic certification from recognized gemological laboratories. Each certificate verifies the natural origin, quality, and authenticity of the gemstone."
    },
    {
      question: "How long does shipping take?",
      answer: "We offer express shipping across India with delivery within 3-5 business days for most locations. International shipping takes 7-14 business days depending on the destination."
    },
    {
      question: "Do you energize the products before shipping?",
      answer: "Absolutely! All spiritual products including gemstones, rudraksha, and yantras are properly energized and blessed by our expert astrologers before shipping to ensure maximum spiritual benefits."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return policy for products that are defective or not as described. Spiritual products that have been energized or customized cannot be returned unless there is a quality issue."
    },
    {
      question: "How do I book an astrology consultation?",
      answer: "You can book a consultation through our website by visiting the Appointments page. Select your preferred date and time, complete the payment, and you'll receive a confirmation email with meeting details."
    },
    {
      question: "Are the astrological consultations in English?",
      answer: "Yes, our consultations are available in English, Hindi, and other regional languages. You can specify your language preference during the booking process."
    },
    {
      question: "Do you provide wearing instructions for gemstones?",
      answer: "Yes, we provide detailed wearing instructions including the best day and time to wear the gemstone, proper finger placement, and mantras to chant. This information is included with your order."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90">Find answers to common questions</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
