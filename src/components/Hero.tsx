import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spices.jpg";
import { Link } from "react-router-dom"; // <-- import Link

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Colorful spices arranged artistically"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-up">
            Artisanal Spices from Around the World
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover the
            <span className="text-gradient block">Art of Flavor</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Elevate your culinary creations with our curated collection of premium, 
            ethically-sourced spices from the world's finest producers.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/shop">
              <Button variant="hero" className="group">
                Shop Collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="heroOutline">
                Our Story
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground text-sm mt-1">Premium Spices</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">25</p>
              <p className="text-muted-foreground text-sm mt-1">Countries</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">10k+</p>
              <p className="text-muted-foreground text-sm mt-1">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
