import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import astrologerImg from "@/assets/astrologer.jpg";

const Appointments = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const timeSlots = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  const handleBooking = () => {
    toast({
      title: "Appointment Booked!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Book Your Consultation</h1>
            <p className="text-xl opacity-90">Personal guidance from expert astrologers</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Astrologer Info */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <img 
                      src={astrologerImg} 
                      alt="Astrologer"
                      className="w-full rounded-lg mb-4"
                    />
                    <h2 className="font-serif text-2xl font-bold mb-2">Pandit Rajesh Sharma</h2>
                    <p className="text-accent font-semibold mb-4">Expert Vedic Astrologer</p>
                    <p className="text-muted-foreground mb-4">
                      Over 25 years of experience in Vedic astrology, horoscope reading, 
                      and spiritual guidance. Specialized in career, relationships, and life path consultations.
                    </p>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">45 minutes</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-muted-foreground">Consultation Fee:</span>
                        <span className="font-semibold text-accent">₹2,999</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Form */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-6">Select Date & Time</h3>
                    
                    <div className="mb-6">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Available Time Slots</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant="outline"
                            className="hover:bg-accent hover:text-accent-foreground"
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={handleBooking}
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      Book & Pay ₹2,999
                    </Button>
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

export default Appointments;
