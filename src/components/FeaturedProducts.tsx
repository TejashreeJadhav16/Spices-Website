import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom"; // <-- import Link

const FeaturedProducts = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Featured Spices
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Handpicked favorites from our collection. Each spice tells a story of 
              tradition, quality, and exceptional flavor.
            </p>
          </div>

          {/* Updated Button */}
          <Link to="/categories">
            <Button variant="outline" className="group self-start md:self-auto">
              View All Spices
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
