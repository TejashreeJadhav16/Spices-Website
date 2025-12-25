import { Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Quick Add Button */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
          <Button
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            size="lg"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        {/* Badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {product.origin}
            </p>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="font-display text-xl font-bold text-primary">
  ₹{product.price.toLocaleString("en-IN")}
</p>

        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {product.weight}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleAddToCart}
            className="group/btn"
          >
            <ShoppingBag className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
