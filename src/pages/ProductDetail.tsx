import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Truck, CheckCircle } from "lucide-react";
import gemstoneImg from "@/assets/gemstone-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src={gemstoneImg} 
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-accent cursor-pointer">
                  <img 
                    src={gemstoneImg} 
                    alt={`Product view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-2 mb-4">
              <Badge className="bg-accent text-accent-foreground">Certified</Badge>
              <Badge variant="secondary">Premium Quality</Badge>
            </div>
            <h1 className="font-serif text-4xl font-bold mb-4">Blue Sapphire Gemstone</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(127 reviews)</span>
            </div>
            <p className="text-4xl font-bold text-accent mb-6">₹15,999</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">100% Natural and Certified Blue Sapphire</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Energized and blessed by expert astrologers</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Comes with authenticity certificate</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Buy Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Shield className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm font-semibold">Authentic</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Truck className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm font-semibold">Fast Delivery</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Star className="h-6 w-6 text-accent mb-2" />
                <p className="text-sm font-semibold">Premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Benefits */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="font-serif text-2xl font-bold mb-4">Benefits</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Brings wealth, prosperity, and success in career</li>
              <li>• Enhances mental clarity and focus</li>
              <li>• Provides protection from negative energies</li>
              <li>• Strengthens Saturn and brings discipline</li>
              <li>• Improves relationships and social status</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
