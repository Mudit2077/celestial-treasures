import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Horoscope = () => {
  const zodiacSigns = [
    { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19" },
    { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20" },
    { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20" },
    { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22" },
    { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22" },
    { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22" },
    { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22" },
    { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21" },
    { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21" },
    { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19" },
    { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18" },
    { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Daily Horoscope</h1>
            <p className="text-xl opacity-90">Discover what the stars have in store for you</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {zodiacSigns.map((sign) => (
                <Link key={sign.name} to={`/horoscope/${sign.name.toLowerCase()}`}>
                  <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl mb-3 text-accent">{sign.symbol}</div>
                      <h3 className="font-serif text-xl font-bold mb-1">{sign.name}</h3>
                      <p className="text-sm text-muted-foreground">{sign.dates}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Horoscope;
