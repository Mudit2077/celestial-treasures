import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gemstoneImg from "@/assets/gemstone-1.jpg";
import braceletImg from "@/assets/bracelet-1.jpg";
import yantraImg from "@/assets/yantra-1.jpg";

const Products = () => {
  const { category } = useParams();

  const products = [
    {
      id: 1,
      name: "Blue Sapphire Gemstone",
      price: 15999,
      category: "gemstones",
      image: gemstoneImg,
      certified: true,
    },
    {
      id: 2,
      name: "Rudraksha Bracelet",
      price: 2999,
      category: "bracelets",
      image: braceletImg,
      certified: true,
    },
    {
      id: 3,
      name: "Sri Yantra",
      price: 4999,
      category: "yantras",
      image: yantraImg,
      certified: true,
    },
    {
      id: 4,
      name: "Ruby Gemstone Ring",
      price: 12999,
      category: "rings",
      image: gemstoneImg,
      certified: true,
    },
    {
      id: 5,
      name: "5 Mukhi Rudraksha",
      price: 1999,
      category: "rudraksha",
      image: braceletImg,
      certified: true,
    },
    {
      id: 6,
      name: "Vastu Remedy Kit",
      price: 3499,
      category: "remedies",
      image: yantraImg,
      certified: true,
    },
  ];

  const filteredProducts = category 
    ? products.filter(p => p.category === category)
    : products;

  const categoryName = category 
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold mb-2">{categoryName}</h1>
          <p className="text-muted-foreground">
            Discover our premium collection of authentic spiritual products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {product.certified && (
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                        Certified
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-accent mb-3">₹{product.price.toLocaleString()}</p>
                    <Button className="w-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
