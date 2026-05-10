import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Warm Authenticity with Modern Elegance
 * - Terracotta + Gold palette evokes warmth and tradition
 * - Asymmetric layouts with organic shapes
 * - Authentic food imagery and real customer reviews
 * - Smooth interactions with gentle hover effects
 */

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("all");

  // Menu items organized by category
  const menuItems = {
    all: [
      { name: "Banku with Okro Stew", desc: "Steamed corn and cassava dough with fresh okro stew and fish", price: "GH₵15-25" },
      { name: "Fufu with Light Soup", desc: "Pounded plantain and cassava with aromatic light soup and beef", price: "GH₵15-25" },
      { name: "Fried Rice", desc: "Golden fried rice with chicken, vegetables, and egg", price: "GH₵12-20" },
      { name: "Plain Rice & Stew", desc: "Fluffy white rice with rich red stew and protein", price: "GH₵12-18" },
      { name: "Jollof Rice", desc: "Aromatic tomato-based rice with chicken or beef", price: "GH₵12-20" },
      { name: "Vegetable Salad", desc: "Fresh mixed vegetables with light dressing", price: "GH₵5-8" },
    ],
    soups: [
      { name: "Light Soup", desc: "Traditional Ghanaian light soup with fresh ingredients", price: "GH₵8-12" },
      { name: "Okro Stew", desc: "Creamy okro stew with fish and spices", price: "GH₵10-15" },
      { name: "Groundnut Soup", desc: "Rich peanut-based soup with meat", price: "GH₵10-15" },
    ],
    mains: [
      { name: "Banku with Okro Stew", desc: "Steamed corn and cassava dough with fresh okro stew and fish", price: "GH₵15-25" },
      { name: "Fufu with Light Soup", desc: "Pounded plantain and cassava with aromatic light soup and beef", price: "GH₵15-25" },
      { name: "Fried Rice", desc: "Golden fried rice with chicken, vegetables, and egg", price: "GH₵12-20" },
    ],
  };

  // Customer reviews from Google
  const reviews = [
    {
      author: "Achel Leonard",
      rating: 5,
      text: "I like their food, and I know I'm not the only one cos the place does get some heavy amount of patronage even with so much competition around. Tried their banku today for the first time, liked it.",
    },
    {
      author: "Mohammed Awal Abdallah",
      rating: 5,
      text: "A nice place to hang out for brunch, lunch and dinner. I enjoyed my fufu with light soup.",
    },
    {
      author: "Wisdom Eli Gbordzoe",
      rating: 5,
      text: "This food joint at Tamale has variety of food menu. I really enjoyed their food.",
    },
    {
      author: "Daniel Yaw Akor",
      rating: 5,
      text: "Awesome place where one is sure of getting virtually all the Ghanaian meals. There is also vegetable salad. Place is prime as it's along the Tamale Teaching Hospital Road.",
    },
    {
      author: "Owura Collins",
      rating: 5,
      text: "Woow, wonderful place and delicious food. As I speak is the best restaurant place I've ever seen in Tamale",
    },
    {
      author: "Prince Hassan",
      rating: 5,
      text: "Nite brings a different kind of feel to the food and culinary industry. Great taste, good customer service and great atmosphere.",
    },
  ];

  const currentMenu = menuItems[activeMenu as keyof typeof menuItems] || menuItems.all;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-lg">
              N
            </div>
            <span className="font-display font-bold text-xl text-primary">Nite Fast Food</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663633539065/gUbjh7LgZSw4vhYA3Unqoz/hero-banku-fufu-6mk2Fyk54pDefzRgq6uqWn.webp"
            alt="Nite Fast Food dishes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative container h-full flex flex-col justify-center md:justify-center md:items-start">
          <div className="max-w-xl text-white">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-4 leading-tight">
              Authentic Ghanaian Cuisine
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Experience the warmth and flavor of traditional Ghanaian food in Tamale. From Banku to Fufu, every dish is prepared with care and passion.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30">
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Menu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted dishes using fresh ingredients and traditional recipes passed down through generations.
            </p>
          </div>

          {/* Menu Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["all", "soups", "mains"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveMenu(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeMenu === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-foreground border border-border hover:border-primary"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMenu.map((item, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-border hover:border-primary/50 bg-white"
              >
                <h3 className="font-display font-bold text-xl text-primary mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-bold text-lg">{item.price}</span>
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                    Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced the warmth and flavor of Nite Fast Food.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="p-6 border-border hover:border-primary/50 hover:shadow-md transition-all bg-gradient-to-br from-white to-muted/10"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>
                <p className="font-semibold text-primary">{review.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display font-bold text-4xl text-primary mb-8">Visit Us</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Tamale Teaching Hospital Road<br />
                      Tamale, Northern Region<br />
                      Ghana
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+233XXXXXXXXX" className="hover:text-primary transition-colors">
                        +233 XXX XXX XXX
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday<br />
                      10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-white w-full md:w-auto">
                Get Directions
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg overflow-hidden h-96 md:h-full min-h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Map coming soon<br />
                  <span className="text-sm">Tamale Teaching Hospital Road</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center">
          <h2 className="font-display font-bold text-4xl mb-4">Ready to Taste Authentic Ghanaian Food?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Visit Nite Fast Food today and experience the warmth of traditional Ghanaian cuisine prepared with passion and care.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
            Order Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Nite Fast Food</h3>
              <p className="text-white/70">Authentic Ghanaian cuisine in Tamale, serving traditional dishes with modern hospitality.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-white/70">
                Mon - Sun<br />
                10:00 AM - 10:00 PM
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-white/70">
                <a href="#" className="hover:text-white transition-colors">Facebook</a><br />
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2026 Nite Fast Food. All rights reserved. | Tamale, Ghana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
