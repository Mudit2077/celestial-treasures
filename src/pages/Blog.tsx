import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import blogImg from "@/assets/blog-1.jpg";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding the Power of Blue Sapphire",
      excerpt: "Discover how this powerful gemstone can transform your life and bring prosperity...",
      category: "Gemstones",
      date: "March 15, 2025",
      image: blogImg,
    },
    {
      id: 2,
      title: "Rudraksha: The Divine Seed",
      excerpt: "Learn about the spiritual significance and benefits of wearing Rudraksha beads...",
      category: "Spiritual Practices",
      date: "March 12, 2025",
      image: blogImg,
    },
    {
      id: 3,
      title: "Vastu Tips for Your Home",
      excerpt: "Simple Vastu remedies to bring harmony and positive energy to your living space...",
      category: "Vastu",
      date: "March 10, 2025",
      image: blogImg,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Spiritual Insights</h1>
            <p className="text-xl opacity-90">Ancient wisdom for modern living</p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.id} to={`/blog/${article.id}`}>
                  <Card className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{article.category}</Badge>
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
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

export default Blog;
