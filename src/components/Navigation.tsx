import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Gemstones", href: "/products/gemstones" },
    { name: "Bracelets", href: "/products/bracelets" },
    { name: "Rudraksha", href: "/products/rudraksha" },
    { name: "Yantras", href: "/products/yantras" },
    { name: "Rings", href: "/products/rings" },
    { name: "Remedies", href: "/products/remedies" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full mt-4 border-b max-w-[calc(100%-20px)] border-border/40 bg-background/95 backdrop-blur rounded-[50px] supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto max-w-[calc(100%-20px)] px-4 h-14 flex items-center justify-between  ">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold text-primary">Divine Astrology</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {categories.map((category) => (
                      <NavigationMenuLink key={category.name} asChild>
                        <Link
                          to={category.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

        
          <Link to="/blog" className="text-sm font-medium transition-colors hover:text-accent">
            Blog
          </Link>
          <Link to="/appointments" className="text-sm font-medium transition-colors hover:text-accent">
            Book Appointment
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-accent">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-accent">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground">Products</p>
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md hover:bg-accent"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                <Link to="/blog" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-accent">
                  Blog
                </Link>
                <Link to="/appointments" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-accent">
                  Book Appointment
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-accent">
                  About
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-accent">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
